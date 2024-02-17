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
$\text{eg: not not1 (} not1_{out} \text{, a) // output first!}$
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

