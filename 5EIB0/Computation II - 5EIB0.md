# Goals
[The Hitchhiker's Guide to the CPU Hardware - YouTube](https://www.youtube.com/watch?v=OKt1SPaqeVs&list=WL&index=48)
### Summary
**Computer architecture:**
- multi-cycle processors (hardware-performance trade off)
- pipelining (hazards and forwarding)
- advanced memory hierarchies
- instruction set design (RISC, CISC, SIMD, custom instructions)
- architecture classification   
**Hardware design:**
- Boolean logic
- Finite State Machines (FSMs)
- Verilog HDL
- custom hardware / special function units
- logic synthesis
- MIPS design (Verilog)
**Embedded systems:**
- embedded system design concepts
- real-time systems
- interfacing with sensors and actuators i/o
### Learning Goals
- synthesize a pipelined computer architecture using a hardware description language (HDL);
- develop custom hardware using synthesis tools;
- integrate computer systems within a larger embedded control system;
- develop systems that meet the real-time constraints of embedded applications.
### General Goals
In depth:
	- computer architecture (including memory hierarchy)
	- Processor Design and Implementation of RISC processors (all the details about 5-stage pipelined MIPS)
	- Verilog (HW) design
Introductory:
	- Operating systems
	- multi core processors
	- GPUs (Graphic Processing Units) and Vector processors

### Learning Outcomes
• Working knowledge of the properties and function of modern computer architectures and be able to compare them. 
• Quantitatively analyze the performance of modern computer architectures, including their memory subsystem. 
• Working knowledge of the basic functionality of Operating Systems – Basic knowledge of implementing a Linux driver 
• Working knowledge of the different ways of building parallel / multiprocessors
• Working knowledge of combinational and synchronous hardware and the ability to practically apply this knowledge to create synthesisable hardware designs in Verilog 
• Design an FSM and code it in Verilog 
• Design a pipelined RISC type of processor in Verilog 
• Optimize execution of a specific application by adapting: – the application program – processor hardware
### Labs
Lab is split in two parts: 
– Verilog: Hardware design using Finite State Machines (FSMs) 
– mMIPS: Computer Architecture and Hardware Design
### Theory
• Book "Comp. Org and Design" (6th ed.), study sections: 
	• Appendix B1-5, B7-8, B10 (important for labs) 
	• 2.1-2.14 • 4.1-4.13 
	• 3.6-3.8 • 5.1-5.4, 5.7-5.8, 5.10 
	• 6.1-6.6, 6.9, 6.12-6.13 
	• Operating Systems: "Introduction to Operating Systems", chapters 1-4 (available on OnCourse)

• Self-study and exercises (6th ed.): 
	• 2.24-2.25 
	• 4.18-4-19 
	• 3.12-3.13 
	• 5.18-5.19 
	• 6.18
# Combinational Verilog & Sequential Circuits, Verilog, FSMs
## Logic
- Signals can be **asserted** (true or 1) or **deasserted** (false or 0).
- Gates: eg: AND, OR ; Universal Gates: eg: NOR, NAND
- half adder, full adder
- synthesis: HDL to circuit
- Register transfer level (RTL): type of behavioral modeling for synthesis

**Logic Blocks**
- **Combinational Logic**: No memory; output based only on current inputs. (AND, OR etc...)
- **Sequential Logic**: Contains memory; output depends on inputs and stored state. (registers / flip-flops, register files, RAM, etc...)
## Combinational Logic
**Decoders**
- Converts $n\text{-bit}$ input to max $2^n$ outputs. (could also be $2n$ etc..)
- Only one output is true based on the input's binary value.

**Multiplexors (MUX)**
- Selects output from multiple inputs based on a control signal. (**selector value**)
- Can be expanded beyond two inputs, requiring a decoder for selection.
- ![[multiplexor.png|200]]

**Two-Level Logic and PLAs**
- Logic functions can be simplified to two levels of logic (AND, OR) with possible NOT operations.
- Sum of Products (SOP) and Product of Sums (POS) are two canonical forms.
- Programmable Logic Arrays (PLAs) implement SOP forms efficiently. (minterms first stage of PLA, product terms).
- $SOP:(A.B.\bar{C})+(A.C.\bar{B})+(B.C.\bar{A})$
- $POS:\overline{(\bar{A}+\bar{B}+C).(\bar{A}+\bar{C}+B).(\bar{B}+C+A)}$

**ROMs and PROMs**
- Read-Only Memory (ROM) encodes logic functions as memory contents, fixed at manufacture or programmable (PROM).
- ROMs are fully decoded, containing output for every input combination, differing from the partial decoding of PLAs which are more efficient.

**Don't Cares**
- Situations where the output value does not affect the operation, allowing for optimization in logic function implementation.
- Output Don't Cares: Output value is irrelevant for some input combinations.
- Input Don't Cares: Certain inputs do not affect the output.

**Arrays of Logic Elements**
- Operations on data often apply to entire words (e.g., 32 bits), requiring arrays of logic elements.
- Buses are treated as single logical signals but consist of multiple data lines.
- Multiplexors can be arrayed to select between buses of multiple bit widths.

**Example Applications**
- Decoders in addressing memory or selecting circuit paths.
- Multiplexors in data path selection or control signal routing.
- PLAs for implementing complex logic functions with minimized gate count.
- ROMs for storing fixed logic functions, especially useful in initialization or configuration settings.

## HDL Verilog
ref: https://sutherland-hdl.com/pdfs/verilog_2001_ref_guide.pdf
![[verilog flow.png|300]]
short:https://www.youtube.com/watch?v=2IReMT_zjK8
long:https://www.youtube.com/watch?v=PJGvZSlsLKs
**Verilog**: Allows both behavioral(input/output responses) and structural(interconnected low level components) descriptions of digital systems.
| is an operator, "or" is a separator 

**Key Concepts in Verilog**
- **Datatypes**:
    - `wire`: Represents combinational signals.
    - `reg`: Holds values that can vary over time, not necessarily physical registers. $reg[MSB:LSB]<\text{signal name}>;\text{ or [LSB,MSB]}$
- **Operators**: Includes arithmetic, logical, comparison, shift, and conditional operators, similar to C.
![[wire & register.png|400]]

**Verilog Modules**
- Verilog programs are structured as modules, which can represent anything from logic gates to whole systems.
- Modules specify inputs, outputs, and contain:
    - `initial` constructs for initializing variables.
    - Continuous assignments (`assign`) for combinational logic.
    - `always` constructs for sequential or combinational logic.
    - Instances of other modules.

**Combination Logic in Verilog**
- Use `assign` statements for direct combinational logic definition.
- `always` blocks can also define combinational logic, with careful attention to the sensitivity list and ensuring all paths assign values to the same set of bits.
- $always@(\text{sensitivity list: list of signals that cause reevaluation})$
![[assign vs always 1.png|400]]![[assign vs always 2.png|400]]
![[verilog sensitivity.png|300]]

**Sequential Logic in Verilog**
https://www.youtube.com/watch?v=11UAXr1ueIQ&t
https://www.youtube.com/watch?v=OE0fVERonm0
- Sequential logic is defined using `always` blocks.
- Blocking (`=`) and nonblocking (`<=`) assignments control the order of operations and synthesis of actual registers.
- **blocking:** an assignment that completes before the execution of the next statement. (represents respected sequential execution use in combo cases)
- **non-blocking:** An assignment that continues after evaluating the right-hand side, assigning the left-hand side the value only after all right-hand sides are evaluated. (introduces parallelism)
![[Pasted image 20240217192235.png|400]]![[blocking non blocking.png|400]]
![[blocking, non blocking example.png|400]]

**Common Verilog Constructs**
- Continuous assignments are straightforward for combinational logic.
- `always` blocks offer more complexity and control, using Verilog control structures like `if`, `case`, and loops.
- Care is needed to ensure combinational logic does not unintentionally synthesize as sequential logic (e.g., latches).
- a test bench supplies inputs (stimuli) to the unit under test (UUT, also known as device under test DUT) and listens to the outputs (results)
![[test bench verilog.png|400]]

**Best Practices**
- Place all combinational logic in a continuous assignment or an always block.
- Ensure all inputs are in the sensitivity list of `always` blocks for combinational logic.
- Ensure every path through an `always` block assigns values to the same set of bits to avoid unintended sequential logic synthesis.
![[verilog multiplexor.png|300]]![[verilog mips alu.png|300]]
- $\text{eg: not not1 (} not1_{out} \text{, a) // output first!}$
- Use $strobe instead of $display to display values that have been assigned using nonblocking assignments.
- always blocks are executed in no specific order we use non-blocking, if we use blocking then it will matter.
```verilog
// combinational
module and_gate(
    input wire A, // Input A
    input wire B, // Input B
    output wire Y // Output Y
);
// AND gate logic
assign Y = A & B;
endmodule

// sequantial
module d_flip_flop(
    input wire D, // Data input
    input wire clk, // Clock input
    output reg Q // Output Q
);
// D flip-flop logic
always @(posedge clk) begin
    Q <= D;
end
endmodule
```
![[module instantiation.png|300]]![[module instantiation ports.png|300]]
![[parameters verilog.png|300]]![[always block example.png|300]]
![[functions and tasks in verilog.png|400]]
- Guideline #1: When modeling sequential logic, use nonblocking assignments.
- Guideline #2: When modeling latches, use nonblocking assignments. 
- Guideline #3: When modeling combinational logic with an always block, use blocking assignments. 
- Guideline #4: When modeling both sequential and combinational logic within the same always block, use nonblocking assignments. 
- Guideline #5: Do not mix blocking and nonblocking assignments in the same always block. 
- Guideline #6: Do not make assignments to the same variable from more than one always block. 
- Guideline #7: Use $strobe to display values that have been assigned using nonblocking assignments. Guideline 
- #8: Do not make assignments using #0 delays.

**System Tasks and Functions**
- `$display`, `$write`, `$monitor`, `$timeformat` for simulation output.
- File I/O operations: `$fopen`, `$fclose`, `$fwrite`, etc.
- Type conversions, simulation control (`$finish`, `$stop`).
**Tasks and Functions**
- Tasks for subroutines, functions for returning values.
- `automatic` keyword for re-entrant tasks/functions.
**Compiler Directives**
- `define`, `include`, `ifdef/ifndef`, `timescale` for pre-processing.
**Configurations and Library Mapping**
- Use `config` for specifying source code binding for modules/instances.
- Library map files for mapping symbolic libraries to file locations.
**Data Types**
- Nets for connections (wire, tri, supply0/1, etc.), variables for storage (reg, integer, real, etc.).
- Constants: `parameter`, `localparam`, `specparam`.
- Signed and unsigned types, arrays, initialization with declaration.

## Arithmetic Logic Unit (ALU)
**Overview**
- The ALU is the core component that performs arithmetic (addition, subtraction) and logical operations (AND, OR) in a computer.
- A 32-bit wide ALU can be constructed by connecting 32 1-bit ALUs.

**1-Bit ALU Design**
- **Logical Operations**: Directly mapped using **(AND, OR gates, and a multiplexor and inverters)** to select between AND or OR operations based on the control signal.
- **Addition**: Implemented using a full adder with two operand inputs, and a carry-in (CarryIn), and two outputs: sum and carry-out (CarryOut).
![[ALU summary.png|400]]

**Constructing a 32-Bit ALU**
- **Ripple Carry Adder**: Sequentially connects the carry-out of one bit to the carry-in of the next, creating a ripple effect for carries across all bits.
- **Subtraction**: Achieved by adding the negative of an operand, implemented by inverting each bit of one operand and adding a carry-in of 1 to the least significant bit. (two complement form) **Binvert**
- **Support for NOR Function**: Implemented by reusing hardware for AND and NOT operations, following DeMorgan's theorem: $(\overline{a+b})=\overline{a} \cdot \overline{b}$. **Ainvert**

**Enhancements for MIPS Architecture**
- **Set on Less Than (slt)**: Expanded multiplexor to include an input for slt results, with special logic in the most significant bit to determine the negative result indicating `a < b`. **Set or Overflow**
- **Zero Detection**: To support conditional branches, hardware to detect if the result is zero was added.
- **Control Signals**: Simplified by combining CarryIn and Binvert into a single control line called **Bnegate**.
![[alu control lines.png|200]]
![[ALU final representation.png|400]]
## Clocks
https://www.youtube.com/watch?v=wx0NyUfpm48
![[clocks logic.png|400]]
**Edge-Triggered Clocking**
- **Definition**: A clocking scheme where state changes occur at a clock edge (rising or falling).
- **Purpose**: Used in sequential logic to dictate when state elements (memory elements) should update.

**State Elements and Synchronous Systems**
- **State Element**: A component that stores state information, updating only at the active clock edge.
- **Synchronous System**: Utilizes clocks to ensure data signals are only read when stable, maintaining signal validity throughout the system.

**Design Constraints**
- The clock period must allow enough time for all signals within combinational logic blocks to stabilize before being sampled by the clock edge. This sets a minimum bound on the clock period for ensuring data validity.
- $f=\frac{1}{T}$

**Sequential Logic Design**
- Involves state elements providing inputs to combinational logic blocks, whose outputs are then fed back into state elements. This cycle requires careful timing to ensure data sampled by the clock edge is valid.
## Memory Elements: Flip-Flops, Latches, and Registers
**S-R Latch**
- Built from cross-coupled NOR gates, storing state when neither S (Set) nor R (Reset) are asserted.
- Asserting S sets Q, asserting R resets Q. Asserting both S and R can lead to unpredictable behavior.
- gated S-R latch has CLK component: only works during clock : 1
- D Latch : just a gated S-R latch with D=$\overline{S}$=R
![[SR latch.png|200]]![[d latch-1.png||200]]

![[gated sr latch.png|200]]![[d latch.png|200]]

**D Flip-Flops and Latches**
- **Flip-Flop**: Outputs equal the stored state, changing only at clock edges, making them suitable for edge-triggered designs, **not-transparent**. **(made from latches)**
- D-Flip-flop: https://www.youtube.com/watch?v=YW-_GkUguMM
- ![[d flip flop.png|200]]
- **Latch**: Outputs also equal the stored state but can change whenever inputs change with the clock asserted, making them **transparent**. **(not preferred)**
- D-Latch: https://www.youtube.com/watch?v=peCh_859q7Q
- ![[d latch-2.png|200]]

- Edge-triggered registers are specified using `posedge` or `negedge` in the sensitivity list of an `always` block.
- Flip-flops and latches are foundational for creating reliable sequential circuits.
- Transparent state, changes to the input directly affect the output.

**Setup and Hold Time**
- Critical timing constraints for flip-flops ensuring D input validity before and after clock edges to prevent unpredictable outputs.
- ![[hold time.png|300]]

**Register Files**
- Consist of multiple registers accessible by supplying a register number, implemented with decoders and an array of D flip-flops.
- Essential for datapath designs, allowing simultaneous reads and writes within a clock cycle.
- Registers are temporary storage locations inside the CPU that hold data and addresses.
![[register file.png|200]]![[register file deeper.png|200]]

## Finite-State Machines
main: https://www.youtube.com/watch?v=kb-Ww8HaHuE
difference: https://www.youtube.com/watch?v=YiQxeuB56i0
**Definition and Components**
- **Finite-State Machine (FSM)**: A sequential system characterized by a set of states, inputs, and outputs. It consists of a next-state function determining the future state based on current inputs and state, and an output function producing outputs from the current state and possibly inputs.
- **States**: Represent all possible values of the internal storage, with n bits of storage translating to $2n$ states.
- **Next-State Function**: A combinational function that maps current state and inputs to the next state.
- **Output Function**: Generates outputs from the current state and inputs. **In Moore machines, it depends solely on the current state, whereas in Mealy machines, it can also depend on the inputs.
- **Moore vs. Mealy Machines**: Moore machines' outputs depend only on the state, potentially making them faster but larger. Mealy machines' outputs can depend on the state and inputs, possibly requiring fewer states but introducing complexity in design.

**Synchronous State Machines**
- Operate in sync with clock cycles, updating state elements only at clock edges, simplifying the explanation and design process. **Needed for Mealy machine.** Sine Moore already behaves that way.

**Implementation**
- Utilizes a state register for current state storage and combinational logic blocks for computing next-state and output functions.
- State assignment assigns numerical values to each state for implementation purposes.
- Combinational logic often realized using structured logic like Programmable Logic Arrays (PLAs), facilitating automatic optimization and implementation via CAD tools.

![[mealy moore machine.png]]

![[moore machine.png|400]]![[mealy machine.png|400]]![[example of moore mealy.png|300]]![[register transfer level (RTL) moore mealy.png|300]]
## FSM Verilog
![[moore machine in RTL.png|400]]
![[parity checker.png|400]]
![[moore fsm test bench.png|400]]
![[reset set with parity.png|400]]
![[operators.png|400]]
![[short version of verilog.png|400]]
# MIPS Recap, MIPS Pipelined
## Lecture
(lui) not really a load doesn't load from data memory
branch instruction works in the following way:
![[branch instruction.png|300]]![[branch instrcitons.png|300]]
when a branch is triggered at (1000) due to the clock moving its already at (1004) so it only needs to move 2 instructions
$\text{PC next} = \text{PC branch} + 4 + 4 \cdot \text{Label}\implies\text{PC next} = \text{PC branch} + 4 + (\text{Instr[15..0] || [00]})$
adding 2 00s = 4 && Inst[15..0] offset

**moving backwards:**
If we denote **PCbranch**​ as 1000, we're actually considering the effect from the position of 1004 because of the automatic increment. Therefore, to move from 1004 to 996, we need an offset that, when multiplied by 4 and added to 1004, equals 996.

Solving for the offset:
1004+(offset×4)=996

Subtract 1004 from both sides:
offset×4=996−1004
offset×4=−8

Therefore, the offset:
offset=−2

This is why the instruction field Instr[15..0] should be set to -2. The representation of -2 in a 16-bit field uses two's complement notation, which is how negative numbers are encoded in binary.

j instruction for jump was structured weirdly as it glues 4 bits instead of adding: so there are limits to where it can jump

**NEXT LECTURE:**
![[2s complement vs unsigned.png|300]]
The instruction names are misleading. Use `addu` for both signed and unsigned operands, if you do **not** want a trap on overflow.
Use `add` if you need a trap on overflow for some reason. Most languages do not want a trap on signed overflow, so `add` is rarely useful.
unsigned -> used for addressing usually
![[blt pseudo.png|300]]
pseudo blt

![[spim example.png|400]]

### Type of MIPS Execution
[Single Cycle, Multi Cycle, and Pipelining - YouTube](https://www.youtube.com/watch?v=wXo5eyeJZcU)
[Ift201 MIPS Data Path Lecture - YouTube](https://www.youtube.com/watch?v=YGSAWqQy9bI)
![[instruction execution.png|400]]![[datapath control.png|400]]
**Pipeline control:**
	Instruction Fetch and PC Increment
	Instruction Decode / Register Fetch
	Execution
	Memory Stage
	Write Back
## Introduction
![[mips.png]]
## Operations of the Computer Hardware
- MIPS instruction format: `operation destination, source1, source2`
- Example: `add a, b, c` (adds `b` and `c`, stores the result in `a`)
## Operands of the Computer Hardware
- MIPS registers: 32-bit registers, used as operands in instructions. (32 bits, 4 bytes **word** (or 2 bytes), 1 byte->8 bits)
- Design Principle 2: Smaller is faster, influencing register count for speed and simplicity.
- Register naming: $s0, $s1, ... for C/Java variables; $t0, $t1, ... for temporary variables.
- Memory vs. Registers: Arithmetic operations on registers; data transfer instructions (`lw` for load, `sw` for store) for memory access.
- Addressing: Byte addressing with alignment restriction; word addresses must be multiples of 4.
- Load/store example: `lw $t0,32($s3)` loads A[8] into $t0 from memory; `sw $t0,48($s3)` stores $t0 into A[12] in memory.
- Constant operands: `addi $s3,$s3,4` adds 4 to $s3 directly, without loading from memory.
- [Why is the maximum value of an unsigned n-bit integer 2ⁿ-1 and not 2ⁿ?](https://stackoverflow.com/questions/5771520/why-is-the-maximum-value-of-an-unsigned-n-bit-integer-2%e2%81%bf-1-and-not-2%e2%81%bf)]
## Signed and Unsigned Numbers
- Binary representation: $0$ or $1$ (bit) is the basic unit; numbers represented in base $2$
- Unsigned numbers: Non-negative, range $0$ to $2^{32} - 1$ for $32$-bit systems.
- Two's complement: Standard for representing signed numbers; leading $0$s for positive, $1$s for negative.
- Most significant bit (MSB): Indicates sign in two's complement; $0$ for positive, $1$ for negative.
- Overflow: Occurs when result exceeds hardware representation capacity.
- Sign extension: Extends a number to a larger bit width by replicating the sign bit.
- Negation shortcut: Invert all bits and add $1$ to negate a two's complement number.
## Representing Instructions in the Computer
- Register mapping: `$s0-$s7` map to registers `16-23`; `$t0-$t7` map to registers `8-15`.
- Hexadecimal conversion is utilized for easier representation and understanding of binary instructions. (4 bits, 0-F) (base 16)
![[mips instruction formats.png|400]]
- `rs`: First register source operand.
- `rt`: Second register source operand or destination register in I-type instructions.
- `rd`: Register destination operand (R-type only).
- I-Immediate (addi,lw,sw) (**Data transfer format, immediate**), R-Register(add,sub) (**arithmetic instruction format**), J-Jump
![[example of mips instructions.png|400]]
## Logical Operations
-  Logical operations in MIPS: `AND`, `OR`, `NOR`, shifts (`sll`, `srl`).
- `sll` (shift left logical) and `srl` (shift right logical) move bits left/right, filling with 0s.
- `ANDI` (AND immediate) and `ORI` (OR immediate) for operations with constants.
- Shifting left by `i` bits is equivalent to multiplying by $2^i$. (dividing for srl)
- Operations that can isolate a field in a word: `AND`, and a combination of shifts (`sll` followed by `srl`).
## Instructions for Making Decisions
- Conditional Branching (also used for loops):
    - `beq`: Branch if equal.
    - `bne`: Branch if not equal.
- Unconditional Branching:
    - `j`: Unconditional jump to label/address.
- Comparisons:
    - `slt`: Set on less than (signed comparison).
    - `sltu`: Set on less than unsigned (for unsigned comparison).
- Immediate Comparisons:
    - `slti`: Set on less than immediate (signed).
    - `sltiu`: Set on less than immediate unsigned.
![[loop mips example.png|400]]
## Supporting Procedures in Computer Hardware
[C to MIPS Procedures and the Stack](https://www.youtube.com/watch?v=YLllQsnpND0&t=609s)
- Procedure Call Steps:
    - Put parameters in accessible registers (`$a0-$a3`).
    - Use `jal ProcedureAddress` to jump and link to the procedure (saves `PC+4`).
    - Perform the task and place the result in return value registers (`$v0-$v1`).
    - Return to the calling program using `jr $ra`.
    - `$gb` global pointer to static data
- Stack Management:
	- `$sp`: Stack pointer register.
    - Use stack for saving registers before calling procedures.
    - `push`: Add elements to the stack.
    - `pop`: Remove elements from the stack.
    - LIFO queue
    - Use stack to save `$ra` and arguments for recursive calls (non-leaf procedure).
![[leaf procedure example.png|400]]
- adjust stack to have room for 1 item `addi`
- $f=s0$
- you could also have pushed space for `t0, t1` and then popped
![[non leaf procedure recursive.png|300]]![[recursive function.png|300]]
[Difference between preserved and non preserved](https://stackoverflow.com/questions/76245610/in-mips-architecture-what-is-the-difference-between-a-register-which-is-preserv)
![[preserved and not preserved.png|300]]![[mips register convention.png|300]]
![[frame pointer.png|300]]
- Memory Segments for Programs:
    - Text Segment: Contains machine code. 
    - Static Data Segment: For constants and static variables.
    - Heap: For dynamically allocated data.
    - Stack: For automatic variables and call stack.
![[mips memory allocation.png|300]]![[iterative recursion.png|300]]

## Communicating with People
- ASCII uses 8-bit bytes for character representation, allowing for 256 unique symbols, Unicode 16-bit bytes(150,000 characters).
- Load byte (`lb, lbu`) loads a byte from memory, placing it in the rightmost 8 bits of a register. Store byte (`sb`) takes a byte from the rightmost 8 bits of a register and writes it to memory.
- MIPS instructions for 16-bit(`halfwords 2 bytes`) quantities (`lh`, `lhu`, `sh`) facilitate operations with Unicode. (load half - lh)
![[string copy mips.png|400]]
Exit loop if the character 0. Exit if last character of string.
## MIPS Addressing for 32-bit Immediates and Addresses
- **32-Bit Immediate Operands**: Use `lui` to set upper 16 bits, then `ori` (or similar) for lower 16 bits. E.g., `lui $s0, 61` then `ori $s0, $s0, 2304`. `$at` temp register to decode 32 bit constants.
- Pseudodirect addressing -> concatenated 26 bits of `$j` with upper PC bits
![[mips addressing modes.png|400]]
- **Branching Far with MIPS**: Use `bne` and `j` to handle distant branches beyond 16-bit limit. E.g., `bne $s0, $s1, L2` then `j L1`.
- **Decoding MIPS Machine Code**: Identify operation from op field, then use instruction formats and encoding tables to translate to assembly. E.g., 00af8020hex -> `add $s0,$a1,$t7`.
![[example large 32 bit ocnstants.png|400]]
## Parallelism and Instructions: Synchronization
- **Data Race**: Occurs with two memory accesses from different threads to the same location, at least one write, without synchronization.
- **Atomic Operations for Synchronization**: Essential for implementing locks and synchronization primitives to prevent data races.
- **Atomic Exchange (Swap)**: Interchanges a register value with a memory value atomically; used to implement basic locks. E.g., 0 indicates lock is free, 1 indicates lock is taken.
- **MIPS Synchronization**: Utilizes `load linked (ll)` and `store conditional (sc)` instructions for atomic operations.
    - `ll` loads a value from memory; `sc` attempts to store a value back, failing if the location was modified in-between.
- **Usage of `ll` and `sc`**:
    1. For synchronizing threads in parallel programs to ensure correct reading/writing of shared data.
    2. In uniprocessor systems, for process synchronization with shared data.
## Translating and Starting a Program
[Compiling, assembling, and linking](https://www.youtube.com/@EngMicroLectures)
- **Compilation Process**: Transforms C program to assembly, then to machine code.
- **Linking**: Combines multiple object modules and libraries, resolves references. (so we can compile each object file seperaly dont have to compile whole thing)
- **Loading**: Places executable into memory for execution.
![[C to code.png|300]]
- **DLLs (Dynamically Linked Libraries)**: Libraries linked at runtime, not compile time, saving space and allowing updates.
- **Key Concepts**:
  - Assembly language includes pseudoinstructions for easier programming.
  - MIPS uses `ll` (load linked) and `sc` (store conditional) for synchronization.
## A C Sort Example to Put It All Together
![[swap mips.png|400]]
![[swap mips-1.png|300]]![[sort mips 2.png|300]]
- **Optimization**: Compiler optimizations impact speed; procedure inlining reduces call overhead.
## Arrays versus Pointers
- **Array vs. Pointer in C to Clear Memory**:
    - Array (`clear1`): Uses array indices. Loops increment index and calculate address each iteration.
    - Pointer (`clear2`): Directly manipulates memory address. More efficient as it eliminates index-to-address calculation within loop.
![[array clear mips.png|300]]![[pointer mips clear.png|300]]
![[pointer array difference.png|400]]
- **Optimization Insight**:
    - Pointer version is more efficient, moving constant calculations outside of loop, reducing instructions per iteration from 6 to 4.
- **Compiler Role**:
    - Modern compilers can optimize array code to match pointer efficiency, negating the traditional performance rationale for using pointers.
# smth