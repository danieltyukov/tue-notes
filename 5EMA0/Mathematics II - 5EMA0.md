# Optimizations and Probabilities

>Unconstrained optimization
>Linear optimization
>Convex optimization
>Language duality theory
>
>Probabilities
>Discrete random variables
>Continuous random variables
>Pairs and sum of random variables

# Unconstrained Optimization
![[unconstrained-opt.png]]
![[convex-func.png]]

If $f(x^*)=min_{x}f(x)$ then $\nabla f(x^*)=(0,\dots,0)$ -> only for convex

> [!NOTE] Convex Lemma
> **convex:** $f(\lambda x_{1}+(1-\lambda)x_{2})\leq\lambda f(x_{1})+(1-\lambda)f(x_{2})$
> for all $x,y\in R^n$ and all $\lambda\in[0,1]$
> if $f^2(x)\geq 0$ then function is convex
> 
>**affine:** (=) instead of ($\leq$) and $\lambda\in R$
>f is affine <-> both f and -f are convex

# Linear Optimization

> [!NOTE] Farkas Lemma
> One of the following is true
> $\exists x\in R^n:a_{i}^Tx\leq b_{i}$ for $i\leq k$ and $a_{i}^Tx=b_{i}$ for $i>k$ ---> feasable solution
> $\exists \lambda_{i} \in R: \sum^m_{i=1}\lambda_{i}a_{i}=0$, $\sum^m_{i=1}\lambda_{i}b_{i}<0$, $\lambda_{i}\geq 0$ for $i\leq k$ ---> no feasable solution

> [!NOTE] Fredholm Alternative Lemma
> One of the following is true, special case $k=0$
> $x\in R^n: a_{i}^Tx=b_{i}$ for $i=1,\dots,m$
> $\lambda_{i}\in R:\sum^m_{i=1}\lambda_{i}a_{i}=0$, $\sum^m_{i=1}\lambda_{i}b_{i}<0$

> [!NOTE] Farkas Extension Lemma
> We have $c^Tx\leq d$ for all $x\in R^n$ such that $a_{i}^Tx\leq b_{i}$ for $i=1,\dots,m$ <==> there are $\lambda_{i}\in R$ so that:
> $\sum^m_{i=1}\lambda_{i}a_{i}=c$, $\sum^m_{i=1}\lambda_{i}b_{i}\leq d$, and $\lambda_{i}\geq 0$ for $i=1,\dots,m$

>[!NOTE] Linear Optimization Duality Theorem
>$a_{1},\dots, a_{m}, c \in R^n,b_{1},\dots,b_{m}\in R$ Then 
>$max\{ c^Tx:a_{i}^T x\leq b_{i}$ for $i=1,\dots,m,x \in R^n \}=$
>$min\{\sum^m_{i=1}\lambda_{i}b_{i}^T:\sum^m_{i=1}\lambda_{i}a_{i}=c,\lambda_{i}\in R$ and $\lambda_{i}\geq 0$ for $i=1,\dots,m\}$
>maximization problem **feasable and bounded**
>
>$min\{c^Tx:a_{i}^Tx\geq b_{i} \dots  \}=max\{ c'^Tx:a'^T_{i}x\leq b_{i} \dots\}$
>
>Algebraic Formulation:
>$min\{ c^Tx:Ax\geq b \}=max\{ b^Tu:A^Tu=c,u\geq 0 \}$

> Duality  is the principle that optimization problems may be viewed from either of two perspectives, the **primal problem or the dual problem.** If the primal is a minimization problem then the dual is a maximization problem (and vice versa).
>
>Any feasible solution to the primal (minimization) problem is at least as large as any feasible solution to the dual (maximization) problem. Therefore, the solution to the primal is an upper bound to the solution of the dual, and the solution of the dual is a lower bound to the solution of the primal. This fact is called weak duality. 

![[duality-example.png|500]]

 Convex Penalty Function: $f(x)=\sum^m_{i=1}\phi(b_{i}-b(a_{i1},\dots,a_{in}))=\sum^m_{i=1}\phi\left( b_{i}-\sum^n_{i=1}x_{j}a_{ij} \right)$

>[!NOTE] Lemmas in Dual Analysis
>The minimum will not decrease as long the constraints $a_{i}^Tx\geq b_{i}$ for $i\in J$ remain unchanged; even if the constraints $a_{i}^Tx\geq b_{i}$ for $i\notin J$ are removed.
>
>If $x^*$ is an optimal solution, then $a_{i}^Tx^*=b_{i}$ for all $i \in J$.
>
>If $x^*, u^*$ are both feasable, then both $x^*, u^*$ are optimal. 

![[dual-analysis-theorem.png|500]]
![[sensitivity.png|500]]

# Convex Optimization
![[convex-definition.png|500]]
![[second-order-cone-optimization.png|500]]

>[!NOTE] Convex Lemma
>If $f:R^n\to R$ is convex with domain $D \subseteq R^n$, then $D$ is a convex set.
>
>**(First-order condition):** $g$ is convex if and only if: 
>$g(z+\epsilon)\geq g(z)+\epsilon g'(z)$ for all $z,\epsilon \in R$
>
>If $f$ is differentiable and convex, then:
>$f(y)=min_{x}f(x)$ if and only if $\nabla f(y)=0$
>
>**(Second-order condition):** Suppose $g:R\to R$ is twice differentiable with domain $D$. Then $g$ is convex <==> $D$ is convex and $g''(z)\geq 0$ for all $z \in D$ 

>[!NOTE] Convex Theorem Primary
> If $f_{1},f_{2}:R^n\to R$ are convex, then the function $h:R^n\to R$ given by:
> $h(x)=max\{ f_{1}(x),f_{2} (x)\}$
> for all $x \in R^n$, is convex.
> 
> If $f,g:R^n\to R$ are convex, then the function $h:R^n\to R$ given by:
> $h(x)=f(x)+g(x)$
> for all $x \in R^n$, is convex.
> 
> If $f:R^n\to R$ is convex and $a\geq 0$, then the function $h:R^n\to R$ given by:
> $h(x)=af(x)$
> for all $x \in R^n$, is convex.
> 
> If $f: R^n\to R$ is convex, A is an $n \times k$ matrix and $b \in R^n$, then the function $h: R^k\to R$ given by:
> $h(x)=f(Ax+b)$
> for all $x \in R^k$, is convex.

Let $f:R^n\to R$ and for each $x,d \in R^n$ let $g_{x,d}:R\to R$ be given by:
$g_{x,d}(z):=f(x+zd)$ for all $z \in R$

>[!NOTE] Convex Functions Theorem
>$f$ is NOT convex if and only if there are $x,d \in R^n$ so that $g_{x,d}$ is not convex.
>
>**(First-order condition):** Let $f:R^n\to R$ be differentiable. Then $f$ is convex if and only if:
>$f(x+d)\geq f(x)+\nabla f(x)^Td$ for all $x,d \in R^n$
>
>Corollary:
>Suppose $f:R^n\to R$ is convex and differentiable, $x^* \in R^n.$ Then:
>$f(x^*)=min_{x \in R^n}f(x)$ <==> $\nabla f(x^*)=0$
>
>**(Second-order condition):** Let $f:R^n\to R$ be twice differentiable, domain $D.$ Then $f$ is convex <==>
>1. $D$ is a convex set
>2. $d^T(\nabla ^2f(x))d\geq 0$ for all $x \in D, d \in R^n$

![[lagrange-linear-opti.png|500]]
![[lagrange-dual-linear-opti.png|500]]

>[!NOTE] Lemma Weak Langrange Duality
>$min\{ f(x):g_{i}(x)\leq 0$ for $i\leq m,x \in R^n\}\geq max\{  \Theta(u):u\geq 0,u \in R^m\}$

>[!NOTE] Lagrange Duality Theorem
>If $f,g_{1},\dots,g_{m}:R^n\to R$ are differentiable convex functions and there exists an $y \in R^n$ such that $g_{i}(y)<0$ for all $i\leq m$, then: **Weak Langrange Duality Lemma** -> *provided that minimizaiton problem is attained*.

>[!NOTE] Lagrange Duality Lemmas
>Suppse that $f:R^n\to R$ and $x^*,d \in R^n.$ If $\nabla f(x^*)^Td<0$ then: $f(x^*+\epsilon d)<f(x^*)$ 
>for all sufficiently small $\epsilon>0$.
>
>There is no $d \in R^n$ such that:
>$\nabla f(x^*)^Td\leq-1$ and $\nabla g_{i}(x^*)^Td\leq-1$ for $i \in J$.
>
>There is a $w \in R$ and a $u \in R^m,$ with $w + \sum_{i}u_{i}>0$ so that:
>1. $w\nabla f(x^*)+\sum^m_{i=1}u_{i}\nabla g_{i}(x^*)=0$
>2. $w\geq 0,u\geq 0$
>3. if $u_{i}>0,$ then $i \in J$.
>
>Suppose there exists a $y \in R^n$ so that $g_{i}(y)<{0}$ for $i=1,\dots,m$. Then there is a $u \in R^m$, so that:
>1. $\nabla f(x^*)+\sum^m_{i=1}u_{i}\nabla g_{i}(x^*)=0$ 
>2. $u\geq0$
>3. if $u_{i}>0$, then $i \in J$.
>
>Suppose $f,g_{i}$ are convex functions. If $x^*$ is a KKT point of (8) with multipliers $u$, then $f(x^*)=\Theta(u)$

>[!NOTE] Definition Karush-Kuhn-Tucker Point
>$x^* \in R^n$ is a KKT point of (8) if there is a $u \in R^m$ and $v \in R^k$ s.t.
>1. $g_{i}(x^*)\leq 0$ for $i=1,\dots,m$ and $h_{j}(x^*)=0$ for $j=1,\dots,k$
>2. $\nabla f(x^*)+\sum^m_{i=1}u_{i}\nabla g_{i}(x^*)+\sum^k_{j=1}v_{j}\nabla h_{j}(x^*)=0$
>3. $u\geq 0$
>4. if $u_{i}>0,$ then $g_{i}(x^*)=0$
>The numbers $u_{1},\dots,u_{m}$ and $v_{1},\dots,v_{k}$ then are KKT multipliers for $x^*$.

>[!NOTE] Definition Conjugate
>For any function $f:R^n\to R$, the conjugate function $f^o:R^n\to R$ is defined by:
>$f^o(y):=max_{x \in R^n}(y^Tx-f(x))$
>for each $y \in R^n$

>[!NOTE] Lagrange Dual Conjugate Lemmas
>The Lagrange dual of:
>$min\{ f(x):a_{1}^Tx\geq b_{1},\dots,a_{k}^Tx\geq b_{k},a_{k+1}^Tx=b_{k+1},\dots,a_{m}^Tx=b_{m},x \in R^n \}$
>is
>$max\left\{  -f^o\left( \sum_{i}u_{i}a_{i} \right)+\sum_{i}u_{i}b_{i}:u\geq 0,u \in R^m  \right\}$
>
>Suppose $f:R^n\to R$ is convex and differentiable, and let $y \in R^n$. If $\nabla f(x^*)=y$, then 
>$f^o(y)=y^Tx^*-f(x^*)$

![[larange-theorem.png|500]]
![[convex-algorithm.png|500]]

> [!NOTE] Convex Optimization Algorithm Lemmas
> Let $x \in R^n$. If there is a $y \in R^n$ with $f(y)<f(x)$, then:
> $g_{x,d}(0)>g_{x,d}(z)$ for some $d \in R^n,z>0$
> 
> **How to find z: Newtonian Descent Direction**
> If $f:R^n\to R$ is a twice differentiable convex function and $x \in R^n$ is such that $\nabla^2f(x)$ is an invertible matrix. Then:
> $d:=-((\nabla^2f(x))^{-1})\nabla f(x)$
> has $\nabla f(x)^Td<0$
> 
> Suppose $f,g: R^n\to R$ are functions such that $g(y):=f(Ay)$ for all $y$. Consider fixed $x,y \in R^n$ such that $x=Ay$. Let:
> $d:=-((\nabla^2f(x))^{-1})\nabla f(x)$,
> $d':=-(\nabla^2g(y))^{-1}\nabla g(y)$
> Then $d=Ad'.$

>[!NOTE] Convex Optimization Algorithm Theorems
> **How to pick d:**
> Let $f:R^n\to R$ be a differentiable function, let $x \in R^n$ and $d \in R^n$. If:
> $\nabla f(x)^Td<0$
> thne $f(x+zd)<f(x)$ for some $z>0$.

>[!NOTE] Barrier Method Lemma
>If $g_{1},\dots g_{m}$ are convex functions, then:
>$B(x):=-\sum^n_{i=1}\ln(-g_{i}(x))$
>is a berrier function for (1).
>
>For all $t>0$ we have $c^Tx^*(t)-b^Tu^*(t)=\frac{m}{t}$ -> m is number of constraints.
>
>Theorem: $x^*(t)$ and $u^*(t)$ coverage to optimal solutions as $t\to \infty$.

# Probabilities

De Morgans law: $(A \cup B)^c=A^c \cap B^c$ --> same for swapped operations
Disjoint: $A \cup B = (A \cap B) \cup (B-A) \cup (A-B)$
>[!NOTE] Probability Axioms
>A probability measure $P[ \cdot]$ is a function that maps events in the sample space to real numbers such that:
>Axiom 1: For any event $A,P[A]\geq 0$
>Axiom 2: $P[S]=1$
>Axiom 3: For any countable collection $A_{1},A_{2},\dots$ of disjoint sets:
>$P[A_{1}\cup A_{2}\cup\dots]=P[A_{1}]+P[A_{2}]+\dots$
>
>The probability measures $P[\cdot]$ satisfies
>	$P[\varnothing]=0$
>	$P[A^c]=1-P[A]$
>	For any A and B (not necessarily disjoint):
>		$P[A\cup B]=P[A]+P[B]-P[A\cap B]$
>	If $A \subset B$, then $P[A]\leq P[B]$.
>	
>For any event A and partition ${B_{1},B_{2},\dots,B_{m}}$
>$P[A]=\sum^m_{i=1}P[A\cap B_{i}]$

>[!NOTE] Conditional Probability Axioms
> $P[A|B]=\frac{P[A\cap B]}{P[B]}$
> Axiom 1: $P[A|B]\geq 0$
> Axiom 2: $P[B|B]=1$
> Axiom 3: If $A=A_{1}\cup A_{2}\cup\dots$ and $A_{i}\cap A_{j}=\varnothing$ for $i\neq j,$ then:
> $P[A|B]=P[A_{1}|B]+P[A_{2}|B]+\dots$

>[!NOTE] Probability Theorems
>**Law of total probability**:
>For  a partition ${B_{1},B_{2},\dots B_{m}}$ with $P[B_{i}]>0$ for all $i$,
>$P[A]=\sum^m_{i=1}P[A|B_{i}]P[B_{i}]$
>
>**Bayes' theorem**:
>$P[B|A]=\frac{P[A|B]P[B]}{P[A]}$

Events A and B are **independent** if and only if:
$P[A\cap B]=P[A]P[B]$
- Disjoint events $\neq$ Independent Events

>[!NOTE] Sampling WITH/WITHOUT Replacement
>**WITHOUT**: Binomial Coefficient: $(n,k)=\frac{n!}{k!(n-k)!}$
>**WITH**: Multinomial Coefficient: $(n, n_{0},\dots n_{m-1})=\frac{n!}{n_{0}!n_{1}!\dots n_{m-1}!}$
>
>Sampling with/without the ability to select an observation more than once.

>[!NOTE] Independent Trials
> Subexperiment probability of success: $p$, probability of failure $(1-p)$
> Probability of $n_{0}$ failures and $n_{1}$ successes
> $P[S_{n0,n1}]=(n_{0}+n_{1},n_{0})(1-p)^{n_{0}}p^{n_{1}}=(n_{0}+n_{1},n_{1})(1-p)^{n_{0}}p^{n_{1}}$

