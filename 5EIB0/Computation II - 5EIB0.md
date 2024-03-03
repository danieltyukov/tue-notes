# Goals
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