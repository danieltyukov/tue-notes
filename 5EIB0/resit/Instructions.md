---
modified: Tuesday, April 16th 2024, 12:44:47
created: Tuesday, April 2nd 2024, 18:28:14
tags:
  - concept
---
# Procedure Call

![Untitled](Spaces/Study/EE/RISC-V/Untitled.png)


# RISC
![[risc_register.png|%]]

![[risc_instruction_format.png]]

![[risc_instruction.png|%]]

Memory: lw (load), sw (store)
Byte memory: lbu (load byte unsigned), sb 
Arithmetic: add, addi, sub, mul
- Binary arithmetic:
	- AND: select range of bits
	- OR: set to 1
	- XOR: with 111….. to invert 

Conditional branch: beq (=), bne (≠), (unsigned) (blt (<), bge (≥)) 

Call: jal (jump and link, use immediate address → caller), jalr (jump and link register, use indirect address → callee)

- Notes: 
	- No sbu, ble, bgt, NOT
	- (S)B ≠ S format ← 1st bit of immediate is always 0 (byte address)← instructions can only be multiples of 16 bits
	- jalr immediate don’t assume 1st bit is 0 (because it use I-type) → reduce range
	- jaddi with top bit = 1 will -1 from 20 upper bits (due to sign extension)

- Steps to call function:
	1. Prologue: Put arguments in a place (registers) where function can access them
	2. Transfer control to function (jal)
	3. Acquire (local) storage resources needed for function
	4. Perform desired task of the function
	5. Put return value in a place where calling code can access it and restore any registers you used; release local storage
	6. Epilogue: Return control to point of origin, since a function can be called from several points in a program (ret)

```nasm
int fact (int n)
{
if (n < 1) return (1);
else return (n * fact(n − 1));
}
```

```nasm
fact:
//prologue 
addi sp, sp, -8 // adjust stack for 2 items
sw x1, 4(sp) // save the return address
sw x10, 0(sp) // save the argument n

addi x5, x10, -1 // x5 = n - 1
bge x5, x0, L1 // if (n - 1) >= 0, go to L1

addi x10, x0, 1 // return 1
addi sp, sp, 8 // pop 2 items off stack
jalr x0, 0(x1) // return to caller

L1: addi x10, x10, -1 // n >= 1: argument gets (n − 1)
jal x1, fact // call fact with (n − 1)

//epilogue
addi x6, x10, 0 
// return from jal: move result of fact (n - 1) to x6:
lw x10, 0(sp) // restore argument n
lw x1, 4(sp) // restore the return address
addi sp, sp, 8 // adjust stack pointer to pop 2 items

mul x10, x10, x6 // return n * fact (n − 1)
jalr x0, 0(x1) // return to the caller
```

1. Immediate addressing, where the operand is a constant within the instruction itself
2. Register addressing, where the operand is a register
3. Base or displacement addressing, where the operand is at the memory location whose address is the sum of a register and a constant in the instruction
4. PC-relative addressing, where the branch address is the sum of the PC and a constant in the instruction
5. Pseudodirect addressing, where the jump address is the 26 bits of the instruction concatenated with the upper bits of the PC


# [[Compiler]]

# [[Floating point]]

# MIPS
![[mips_instruction_format.png|%]]
> op: opcode
> rs: first input 
> rt: second input 
> rd: output
> shamt: shift amount
> funct: function code


# ARM V7
Instructions:

ARM addressing modes:


# ARM V8



# X86 Intel/AMD
Encoding 
Addressing modes:

