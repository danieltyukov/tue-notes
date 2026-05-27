---
modified: Tuesday, May 7th 2024, 11:43:24
created: Sunday, November 5th 2023, 6:01:10
tags:
  - "#concept"
  - "#transform"
---
Definition:
Generalization of Discrete [[Fourier Analysis - Transform(Series)]]
$$
\mathcal{Z}(z) = \sum_{n=-\infty}^{\infty} x[n]z^{ -n },\, (z = r e^{ j\Omega })
$$
Properties:
- Continuous counterpart: [[Laplace Transform]]
- Relation to Discrete [[Fourier Analysis - Transform(Series)]]:
$$
\mathcal{Z}(r e^{ j\Omega })=\sum_{-\infty}^{\infty} x[n]r^{ -n }e^{ -j\Omega n } \, dt = \mathcal{F}(x[n]r^{ -n })(\Omega)
$$
- Radius of convergence (ROC):
	- Consists of rings centered at origin in z-plane
	- $\mathcal{F}(x[n])$ converges $\leftrightarrow$ ROC includes unit circle
	- $x[n]$ finite -> ROC is entire z-plane (exception of z=0 | z=$\infty$)
	- $x[n]$ right-sided -> ROC circularly right-sided
	- $x[n]$ left-sided -> ROC circularly left-sided
- Causality: $h[n]=0,\ n < 0\to$ poles >= zeros, right-sided (ROC contains $\infty$ due to IVT)
- Stability: ROC includes unit circle
- Realizability: causal + stable -> all poles inside unit circle


![[transform_z_properties.png]]
![[transform_z_pair.png]]

![[transform_laplace_z_pair.png]]
