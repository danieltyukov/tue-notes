---
modified: Monday, January 1st 2024, 21:17:43
created: Saturday, November 4th 2023, 3:13:37
tags:
  - "#concept"
  - "#transform"
---
![[laplace transform table.png|400]]
Definition:
Generalization of [[Fourier Analysis - Transform(Series)]]
$$
\mathcal{L}(s) = \int_{-\infty}^{\infty} f(t)e^{ -st } \, dt
$$
$$
s = \sigma+j\omega
$$

Properties:
- Discrete counterpart: [[Z transform]]
- Relation to [[Fourier Analysis - Transform(Series)]]:
$$
\mathcal{L}(\sigma+j\omega)=\int_{-\infty}^{\infty} f(t)e^{ -\sigma t }e^{ -j\omega t } \, dt = \mathcal{F}(f(t)e^{ -\sigma t })(\omega)
$$
[Proof](https://lpsa.swarthmore.edu/LaplaceXform/FwdLaplace/LaplaceProps.html)
**Unilateral ($0\to \infty$): Integral, derivative**
![[transform_laplace_properties.png]]
![[transform_laplace_pair.png]]
> f(t) = 0 for t < 0


Radius of convergence (ROC):
- x(t) finite duration: entire s-plane
- x(t) right-sided: right-sided
- x(t) left-sided: left-sided





