---
modified: 
created: Wednesday, February 7th 2024, 10:45:08
tags:
  - "#concept"
---


ELI5: [The best way to start learning Verilog - YouTube](https://www.youtube.com/watch?v=2IReMT_zjK8)
Detailed syntax: [Verilog HDL Basics - YouTube](https://www.youtube.com/watch?v=PJGvZSlsLKs)

## Abstraction levels
Switch (not supported by Vivado synthesizer)

Gate

Data flow

Behavioral

![[fpga_verilog_module.png|%]]

## Data types
- Net: wire, tri (three-state logic), supply0, supply1
- Variable: reg, integer, (real, time, realtime - no synthesis)
![[fpga_verilog_data_type.png|%]]

## Blocking vs Nonblocking
Blocking: combinational logic -> statements executed sequentially
Nonblocking: sequential logic -> statements executed in parallel

> [!tip] Guidelines 
> 1. Sequential logic: nonblocking
> 2. Latch: nonblocking
> 3. Combinational: blocking
> 4. Sequential + Combinational (not recommended): nonblocking
> 5. 4 is not recommended
> 6. No assigments to a var in > 1 always block
> 7. Use $strobe for nonblocking
> 8. Don't use #0 delay assignments

[[Finite State Machine]]


# Motivation
- Prototyping of processors before manufacturing -> soft core processor
- Optimize for application driven >< multi purpose like MCU -> Application Specific IC (ASIC)
- Can add peripherals
- Open-source -> add instructions

# Definition
- Blocks of programmable digital logic 

# Properties
<% tp.file.cursor(3) %>

# Related Concepts
<% tp.file.cursor(4) %>




