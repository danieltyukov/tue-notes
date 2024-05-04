---
modified: 
created: Tuesday, April 2nd 2024, 18:30:01
tags:
---
# Cache

Spatial + Temporal locality

## Direct Mapped Cache:

![[cache_direct_mapped.png]]

Lowest addressable unit is a byte (8 bit ??) nibble 4 bit
Byte offset: 2 bit (for 32-bit arch)

Cache index = MM index % n0 of cache max index 

Average memory access time (AMAT):

$L_1 = L_1 + miss\ rate * L_1 \ penalty = L_1 + miss\ rate * (L_2 + miss\ rate * L_2 \ penalty)$

Write hit:

- Write through: update both cache and memory
- Write-back:
    - update in cache only → memory can be “stale”
    - add dirty bit to → check if data is updated to memory → update when cache block is flushed

Cache misses: compulsory → capacity → conflict

- D-cache (data): only in load & store instructions
- I-cache (instruction)

## N-way Associative Cache

Direct-mapped with N block sets -> can be mapped to any block within sets
Set index = MM index % n0 of sets
N = n0 of cache blocks → fully associative

![[cache_associative.png]]

Fix address aliasing 



Cache block size = 2^(n0 of byte offset bits) bytes 
N0 of cache entries = 2^(n0 of index bits)
Cache size = (1 valid bit (+ 1 dirty bit for write-back) + tag + cache block size) * n0 of cache entries

T_spdup = (CPI_ideal + factor * CPI_stall) * T_clk / factor