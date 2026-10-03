---
modified: Monday, January 1st 2024, 21:17:43
tags:
  - coursework
---
> [!info] Resit notes for [[Computation II - 5EIB0]]
> - **Topics:** [[Instruction Set Architecture]]

# RISC-V (little endian)
*Topic: [[Instruction Set Architecture]]*

[RISC-V-Reference-Data.pdf](RISC-V-Reference-Data.pdf)

# 6/7 great ideas in CA:

1. Abstraction
2. Common case faster
3. Memory hierarchy
4. Parallelism (serial is bottleneck → Amdahl’s law) + Pipelining
5. Performance measurement and improvement
6. Dependability via Redundancy

Design principle: 

1. Simplicity favors regularity → operations have **2-3** operands
2. Smaller is faster → 32 registers 
3. Good design demands good compromises → similar instruction format >> more byte

![[Instructions (resit) - 5EIB0]]

![[Cache (resit) - 5EIB0]]

[[Processor Design (resit) - 5EIB0#Datapath]]

![[Processor Design (resit) - 5EIB0]]

# Related Concepts