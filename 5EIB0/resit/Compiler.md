---
modified: Monday, April 8th 2024, 23:40:58
created: Monday, April 8th 2024, 23:10:13
tags:
---
![[compiler.png]]

Front-end: scanning → parsing → semantic analysis → intermediate representation

High-level optimizations: procedure inlining, loop unrolling (duplicate code segments → loop)

Global optimizer: 
- Local: common subexpression elimination, strength reduction (mul to sll), constant/copy propagation, dead code/store elimination
- Global: local + code motion (find loop invariant), induction variable elimination (index → pointer)
- Register allocation: