---
modified: Friday, April 5th 2024, 20:05:34
created: Monday, February 19th 2024, 13:35:41
tags:
  - "#concept"
---
Moore: parameter: current state
![[fsm_moore.png|%]]

Mealy: parameter: current state + current input -> changes async with input
![[fsm_mealy.png|%]]

	![[fsm_moore_vs_mealy.png|%]]

Process:
1. State minimization
2. State assignment/encoding
	1. Binary
	2. One-hot
3. Combinational logic minimization

# Design Flow (Vivado)
![[fpga_desgin_flow.png|%]]

> [!info]-
> Vivado Design Suite User Guide

# Related Concepts
<% tp.file.cursor(4) %>




