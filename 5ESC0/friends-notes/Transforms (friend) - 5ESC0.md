---
modified: Tuesday, June 25th 2024, 00:26:23
created: Tuesday, May 7th 2024, 11:42:43
tags:
---
> [!info] Notes by a friend for [[Signals II (DSP Fundamentals) - 5ESC0]]

[[Fourier Analysis (friend) - 5ESC0]]
[[Laplace Transform (friend) - 5ESC0]]
[[Z-Transform (friend) - 5ESC0]]
# Properties
- Additive: $x_{1}[n]+x_{2}[n]\to y_{1}[n] + y_{2}[n]$
- Homogeneous: $cx[n]\to cy[n]$
- Linear: additive + homogeneous
- Time invariant: $x[n-t]\to y[n-t]$
- Bounded input-Bounded output (BIBO) = Stability (absolutely integrable): $\int_{-\infty}^{\infty} |h(t)| \, dt < \infty$
