[[Computation II - 5EIB0]]
# Prior-knowledge
![[microcontroller.pdf]]
![[RTS.CS-prior-knowledge.pdf]]
# Intro to Operating Systems
![[OS-01-Introduction.pdf]]
![[DMA.png|400]]![[interrupt driven IO cycle.png|200]]
![[storage device hierarchy.png|300]]![[definitions of computer system components.png|300]]
A byte is 8 bit
## OS Motivations
1. **Abstraction**: Simplifies complex hardware.
2. **Virtualization**: Logical, abstract system model (e.g., virtual memory, resource sharing).
3. **Resource Management**: Optimized use of CPU, memory, I/O.
4. **Shared Functionality**: Common services for programs via system calls.
5. **Concurrency**: Fair sharing of resources; supports multiple tasks.
6. **Portability**: Enables code compatibility across systems.
## Key OS Services
- **Process Management**: Create, delete, schedule, synchronize, IPC.
- **Memory Management**: Allocation, deallocation, efficient utilization.
- **I/O Management**: Device driver interface, buffering, DMA (Direct Memory Access).
- **File Management**: Access, map to storage, disk scheduling.
- **Security & Protection**: Prevent interference and ensure system integrity.
- **Error Detection**: Debugging tools and runtime error handling.
- **Accounting**: Monitor resource usage.
## System Calls
- Interface for OS services.
- Types:
  1. **Process Management**: Fork, exec, wait.
  2. **File Management**: Open, read, write.
  3. **Memory Management**: Mmap, malloc.
  4. **Device Management**: Attach, access, send.
  5. **Communication**: Shared memory, message passing.
  6. **Miscellaneous**: Timers, resource inspection.
### Steps in Processing a System Call
1. Push parameters.
2. Call library function.
3. Set up system call code in a register.
4. Trap to kernel.
5. Handler executes action.
6. Return to user mode.
## Interrupts and Exceptions
- **Interrupt**: Hardware signal to CPU for event handling. (controller inform the device driver that it has finished its operation).
- **Trap/Exception**: Software-generated interrupt (errors or system calls).
- Interrupts drive OS; control handed to interrupt service routine (ISR).
## Real-Time & Embedded OS
- **Real-Time OS**: Predictable, dependable, handles stringent timing.
- **Embedded OS**: Small footprint, low resource requirements, high reliability.
# Processes, Threads and Scheduling
![[OS-02-process.pdf]]
![[OS-02-Process-Preparation-2021.pdf]]
![[OS-04-Scheduling-intro.pdf]]

## Processes
![[C memory allocation.png|300]]![[process state.png|300]]
![[context switch process.png|300]]![[multithreaded processes.png|300]]
[PROCESS EXECUTION EXERCISE](https://chatgpt.com/c/674364de-9df8-800b-b8c1-026ca58ba71e)

**`exec()` system call:** When a child process calls `exec()`, it replaces its own memory space with a new program, effectively becoming a new process. However, this doesn't affect the parent's ability to wait for the child, but in certain cases (like daemonized processes), the parent may choose not to wait.
### Process Creation Exercises (Fork Analysis)
**`smith > 0` (parent processes)**.
**`smith == 0` (child processes)**.
#### Key Concepts
1. **`fork()` basics**:
   - Each call to `fork()` doubles the number of processes.
   - Parent continues where `fork()` was called; child starts executing the same code from that point.
2. **Parent vs Child**:
   - **Parent**: `fork()` returns **child PID** (`> 0`).
   - **Child**: `fork()` returns **0**.
#### Step-by-Step Guide
#### 1. Analyze Initial State
- Start with **1 process (parent)**.
#### 2. Identify `fork()` Calls
- Count **direct `fork()`** calls.
- Check conditions (`if`) to determine **which processes execute the `fork()`**.
#### 3. Loop Handling
- For each loop:
  - Count how many processes enter the loop.
  - Track new processes created in each iteration.
#### 4. Total Processes
- Sum **initial process + all new processes** from `fork()`.
#### Example Walkthrough
**Code**: 13 Processes at end
```c
smith = fork();               // 1 new process
for (int j = 0; j < 3; j++) {
    if (smith == 0) { smith = fork(); } 
}                             // 3 new processes (child only)
for (int k = 0; k < 2; k++) {
    if (smith > 0) { smith = fork(); }
}                             // 2 new processes (parent only)
```
## Thread Scheduling
![[OS-03-thread_scheduling.pdf]]

A concurrent system supports more than one task by allowing all the tasks to make progress. In contrast, a parallel system can perform more than one task simultaneously.
![[task and data parallelism.png|300]]
- **With LWP**: A user thread performing a file read blocks its associated LWP, but other user threads can continue running on their LWPs.
- **Without LWP**: A user thread performing a file read blocks, and since there's no LWP to isolate the blocking, all user threads in the application are stalled.

