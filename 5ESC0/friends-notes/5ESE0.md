---
modified: Sunday, August 18th 2024, 09:44:39
created: Monday, April 29th 2024, 15:17:30
tags:
---
# Prerequisites
![[continuous-discrete.png|%]]

# TOC
Convolution: $\displaystyle y[n] = x[n]\ast h[n] = {\sum_{k=-\infty}^{\infty}} \, h[k]x[n-k]$
Frequency response: $\displaystyle y[n] =  {\sum_{k=-\infty}^{\infty}} \, h[n]Ae^{ -j[\theta(n-k) + \phi]} = {\sum_{k=-\infty}^{\infty}} \, h[k]e^{ -j\theta k } \cdot Ae^{ j(\theta n+\phi) }$
$\displaystyle \to H(e^{ j\theta })=\sum_{k=-\infty}^{\infty} \, h[k]e^{ -j\theta k }$

# Important
[[Fourier Transform]]