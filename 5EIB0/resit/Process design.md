---
modified: Tuesday, April 16th 2024, 12:47:25
created: Tuesday, April 2nd 2024, 18:30:01
tags:
  - comp_arch
---
# Datapath




Add/sub (R): PC + Adder + IMEM + Reg + ALU

Immediate: (I) + ImmGen + Mux (R[rs2] - ALU)

Load/store: + DMEM + Mux (DMEM DataB - DataD Reg)

Branch/jump: + Mux (ALU - PC) + Mux (PC - ALU) + BranchComp
→ Critical path (slowest) is lw (~800 ps)→ Pipelining
## Single-cycle
![[datapath_single_cycle.png|%]]

## Multicycle
![[datapath_multicycle.png|%]]
Single cycle -> Multicycle: instructions separated into stages 
- Separate memory unit for instructions + data -> need memory data access for ALU
- 1 ALU + 2 adders -> 1 ALU
- Store values of every stage:
	- Instruction Register (IR) & Memory data register (MDR) added
	- A & B for operand values
	- ALUOut for ALU output
- ALU:
	- ALU input 1: PC | A
	- ALU input 2: + Shift left (branch address) | 4 (increment PC)
	- Jump and branch output: 
		- ALU output (PC+4)
		- ALUout
		- The lower 26 bits of the Instruction register (IR) shifted left by two and concatenated with the upper 4 bits of the incremented PC, which is the source when the instruction is a jump
### Control Signal
![[datapath_multicycle_control.png|%]]

| Signal name | Effect when deasserted           | Effect when asserted                                                                                                  |
| ----------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| RegDst      | Write register = rt              | Write register = rd                                                                                                   |
| RegWrite    | None.                            | The general-purpose register selected by the Write register number is written with the value of the Write data input. |
| ALUSrcA     | The first ALU operand is the PC. | The first ALU operand comes from the A register.                                                                      |
| MemRead     | None.                            | Content of memory at the location specified by the Address input is put on Memory data output.                        |
| MemWrite    | None.                            | Memory contents at the location specified by the Address input is replaced by the value on the Write data input.      |
| MemtoReg    | Write data = ALUOut              | Write data = MDR                                                                                                      |
| IorD        | Address = PC                     | Address = ALUOut                                                                                                      |
| IRWrite     | None.                            | IR = memory output                                                                                                    |
| PCWrite     | None.                            | The PC is written; the source is controlled by PCSource.                                                              |
| PCWriteCond | None.                            | The PC is written if the Zero output from the ALU is also active.                                                     |


| Signal name | Value (binary) | Effect                                                                                                                    |
| ----------- | -------------- | ------------------------------------------------------------------------------------------------------------------------- |
| ALUOp       | 00             | The ALU performs an add operation.                                                                                        |
|             | 01             | The ALU performs a subtract operation.                                                                                    |
|             | 10             | The funct field of the instruction determines the ALU operation.                                                          |
| ALUSrcB     | 00             | The second input to the ALU comes from the B register.                                                                    |
|             | 01             | The second input to the ALU is the constant 4.                                                                            |
|             | 10             | The second input to the ALU is the sign-extended, lower 16 bits of the IR.                                                |
|             | 11             | The second input to the ALU is the sign-extended, lower 16 bits of the IR shifted left 2 bits.                            |
| PCSource    | 00             | Output of the ALU (PC + 4) is sent to the PC for writing.                                                                 |
|             | 01             | The contents of ALUOut (the branch target address) are sent to the PC for writing.                                        |
|             | 10             | The jump target address (IR[25:0] shifted left 2 bits and concatenated with PC + 4[31:28]) is sent to the PC for writing. |

## Pipelined
Instructions separated into like [[#Multicycle]] but multiple stages can be active simultaneously 

1. Instruction Fetch (IF): Fetch instruction + increment PC
2. Instruction Decode (ID): Decode instruction + Get operands (+ Branch decision + target)
3. Execute (EX): ALU (Arithmetic-Logic Unit)
4. Memory Access (MEM): store or load mem
5. Write Back to Register (WB)
![[pipeline_single_cycle.png|%]]
!! load instructions need to calculate write register -> pipeline write register 
## Control Signal
![[datapath_pipeline_control.png|%]]

| Signal name | Effect when deasserted (0)                                                                   | Effect when asserted (1)                                                                                |
| ----------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| RegDst      | The register destination number for the Write register comes from the rt field (bits 20:16). | The register destination number for the Write register comes from the rd field (bits 15:11).            |
| RegWrite    | None.                                                                                        | The register on the Write register input is written with the value on the Write data input.             |
| ALUSrc      | The second ALU operand comes from the second register file output (Read data 2).             | The second ALU operand is the sign-extended, lower 16 bits of the instruction.                          |
| PCSrc       | The PC is replaced by the output of the adder that computes the value of PC + 4.             | The PC is replaced by the output of the adder that computes the branch target.                          |
| MemRead     | None.                                                                                        | Data memory contents designated by the address input are put on the Read data output.                   |
| MemWrite    | None.                                                                                        | Data memory contents designated by the address input are replaced by the value on the Write data input. |
| MemtoReg    | The value fed to the register Write data input comes from the ALU.                           | The value fed to the register Write data input comes from the data memory.                              |

# Pipelining Considerations
Hazards:
- Structural 
- Data 
- Control
## Structural Hazard: Occupied Physical Resource

Multiple instructions compete for physical resources → stall/ more resources

Instruction and data mem used simultaneously → use seperate I/D mem → I/D [[Cache|cache]]

## Data Hazard: Simultaneous read/write

Register read+write access: can be solved if using single cycle read-write

ALU result hazard:
### Forwarding (bypassing)
use result from ALU directly (b4 storing in registers) → need extra connections
![[datapath_forwarding.png|%]]
```
if (EX/MEM.RegWrite 
and (EX/MEM.RegisterRd ≠ 0) 
and (EX/MEM.RegisterRd = ID/EX.RegisterRs)) ForwardA = 10

if (MEM/WB.RegWrite 
and (MEM/WB.RegisterRd ≠ 0) 
and not(EX/MEM.RegWrite and (EX/MEM.RegisterRd ≠ 0) 
and (EX/MEM.RegisterRd ≠ ID/EX.RegisterRs)) 
and (MEM/WB.RegisterRd = ID/EX.RegisterRs)) ForwardA = 01
```
No forwarding if Rd=0
Don't forward from WB if already forwarded from MEM

### Stall (insert **nops**)
![[hazard_load.png|%]]
- Load-use hazard: 1 cycle stall (MEM to EX) → nops/rearrange code = set control signals in EX, MEM, WB stages to 0
- Load-branch hazard: 2 cycle stall (MEM to IF) (with [[#Branch speedup]]) ^38c6fb
```
if (ID/EX.MemRead and
((ID/EX.RegisterRt = IF/ID.RegisterRs) or
(ID/EX.RegisterRt = IF/ID.RegisterRt)))
```
![[hazard_forwarding_load.png|%]]
## Control Hazard

Branch undetermined: convert 2 stall cycles + branch prediction
### Branch Speedup
Calculate address and condition earlier at ID
-> Can only implement beq|bneq (others require 1 more calculation instructions) + [[#^38c6fb|Load-branch hazard]]
### Branch Prediction
Branch prediction = predict of branch is taken != Branch target prediction = predict branch address
Static:
- Default = progress (assume branch not taken)  -> execute branch delay slot -> flush IR if branch taken
![[branch_delay.png|%]]
Dynamic
- [Branch predictor#Saturating_counter](https://en.wikipedia.org/wiki/Branch_predictor#Saturating_counter) :strictly based on previous outcomes if branch taken (1 or 2 bit (takes 2 wrong prediction to change))
- [Branch predictor#Two-level_predictor](https://en.wikipedia.org/wiki/Branch_predictor#Two-level_predictor)
- Local prediction: correlate with previous outcomes
- Global prediction: correlate with all branches
- Local + global 


Load delay + Branch delay


RISC-V ISA designed for pipelining:

- All instructions are 32-bits
- Easy to fetch and decode in one cycle
- Versus x86: 1- to 15-byte instructions
- Few and regular instruction formats
- Decode and read registers in one step
- Load/store addressing
- Alignment of memory operands
- Memory access takes only one cycle