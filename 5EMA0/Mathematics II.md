## 5EMA0

- Optimizations and Probabilities

>Unconstrained optimization
>Linear optimization
>Convex optimization
>
>Language duality theory
>Probabilities
>Discrete random variables
>Continuous random variables
>Pairs and sum of random variables

# Optimization

## Unconstrained Optimization & Intro

![[unconstrained-opt.png|500]]

- If $f(x^*)=min_{x}f(x)$ then $\nabla f(x^*)=(0,\dots,0)$ -> only for convex

![[convex-func.png|500]]

> **convex:** $f(\lambda x_{1}+(1-\lambda)x_{2})\leq\lambda f(x_{1})+(1-\lambda)f(x_{2})$
> for all $x,y\in R^n$ and all $\lambda\in[0,1]$
> if $f^2(x)\geq 0$ then function is convex
> 
>**affine:** (=) instead of ($\leq$) and $\lambda\in R$
>f is affine <-> both f and -f are convex

## Linear Optimization