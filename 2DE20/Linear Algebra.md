Recommended: [3b1b](https://www.3blue1brown.com/topics/linear-algebra)

## 2DE20
$(ABC)^T = C^T B^T A^T$
![[Pasted image 20230213220426.png]]

### Determinant

Triangular matrix: Product of diagonal
Transforms:
- Transpose: $\det(B)=\det(A)$ -> Row operations = Col operations
- Row/Col operations: $\det(B)=\det(A)$
- Interchange row/col: $\det(B)=-\det(A)$
- Multiply row/col by k: $\det(B)=k\det(A)$ 
- Inverse: $\det(B)=\frac{1}{\det(A)}$
- Scale: $\det(B)=k^n\det(A)$

### Invertible
$(A^T)^{-1} = (A^{-1})^T$
$(AB)^{-1}=B^{-1}A^{-1}$
- A is row equivalent to $I_{n}$
- Ax=0 has the only solution x=0
- Ax=b has 1 unique solution
- $\det(A)$ != 0
- [[#Column Space]] of A == $R^{n}$

### Vector space 
- Addition 
	1. V is closed under addition $u + v \in V, \forall u,v \in V$
	2. Commutative
	3. Associative
	4. Identity element: $0 \in V,\ u + 0 = u,\ \forall u \in V$
- Multiplication 
	1. Distributive (scalar & vector)
	2. Identity element: $1 \in V,\ 1u = u,\ \forall u \in V$
#### Subspace
A subspace of vector space V is a subset W of V that has:
1. The zero vector 0 of V is in W
2. $u + v \in W,\ \forall u,v \in W$ is closed under vector addition
3. $c \cdot u \in W,\ \forall u \in W c \in R$
4.  **$0, V$** are trivial subspaces of V
#### Column Space 
>Span: set of linear combinations of vectors
>Colume space: span of column vectors
>Basis: minimal subset of span that spans the vector space

$$\text{Matrix: } A = [v_{1},v_{2},\dots,v_{n}]
\to\begin{bmatrix}
v_{1} \\
v_{2} \\
\dots \\
v_{n}
\end{bmatrix}\cdot 
\begin{bmatrix}
a_{1} \\
a_{2} \\
\dots \\
a_{n}
\end{bmatrix}
= 0
\to \text{Span is pivot of rref(A*a=0)}
$$
>Theorem:
> $rank(A) + \dim(null(A)) = size(A) \leftarrow \text{pivot cols + non-pivot cols = cols}$

### Eigenvalue, eigenvector
$Av=\lambda v \to \det(A-\lambda I_{n}) = 0$
> $\det(A-\lambda I_{n})$: characteristic polynomial

Eigenspace $E_{\lambda} = nul(A-\lambda I)$: containing all eigenvectors corresponding to $\lambda$

### Orthogonality
- If $\{w_{1}, w_{2},\dots, w_{m}\}$ is an orthogonal basis for subspace W in $\mathbb{R}^{n}$ then: $proj_{w}v = \displaystyle{\sum_{i=1}^{m}} \, \frac{v\cdot w_{i}}{w_{i}^{2}}w_{i}=UU^{T}v,\ U=[w_{1}, w_{2},\dots, w_{m}]$
- Spectral decomposition: Eigenvectors ${w_{1},w_{2},\dots,w_{n}}$ forming orthonormal basis of $\mathbb{R}^{n}$ corresponding to eigenvalues $\lambda_{1}, \lambda_{2},\dots, \lambda_{n}$: $A\to \displaystyle{\sum_{i=1}^{n}} \, \lambda_{i}w_{i}w_{i}^{T}$
### Gram-Schmidt process
Convert arbitrary basis $S=\{u_{1}, u_{2},\dots ,u_{m}\} \to \text{orthogonal basis } T=v_{1}, v_{2},\dots ,v_{m}$
- $v_{1} = u_{1}$
- $W_{i}=Span \{u_{1}, u_{2},\dots ,u_{i}\} = Span \{ v_{1}, v_{2},\dots,u_{i} \},\ v_{i}\perp W_{i-1} \to v_{i} = u_{i} - proj_{W_{i-1}}u_{i} = u_{i}-\displaystyle{\sum_{n=1}^{i-1}} \, \frac{u_{i}v_{n}}{v_{n}^{2}}v_{n}$

### Diagonalization
Similar matrix: $\exists P,\ P^{-1}AP=B\to$ A similar to B 
> $A\to P^{-1}AP$: similar transformation -> switching to eigenvectors basis -> guarantee diagonal matrix
> Same characteristic polynomial -> same eigenvalues

Diagonalizing mxm matrix A into similar diagonal matrix D:
1. Find eigenvalues $e = \{ e_{1}, e_{2},\dots e_{m} \}$
2. Find eigenvectors $w=\{ w_{1}, w_{2},\dots w_{m} \}$
3. $P = [w_{1}, w_{2},\dots ,w_{m}],\ D = diag(e) \to D=P^{-1}AP$

> [!cite] Theorem: 
> 1. nxn matrix is diagonalizable if and only if it has n distinct eigenvectors
> 2. Eigenvectors corresponding to distinct eigenvalues are linearly independent
> 3. nxn matrix with n distinct eigenvalues is diagonalizable

Isomorphism: 1-1 linear transformation from vector space V onto vector space W
$\mathcal{B}-$matrix: Matrix C for A relative to $\mathcal{B}$ | $\mathcal{B}$-matrix for A
- $\mathcal{B} = \{ v_{1}, v_{2},\dots, v_{m} \},\ M=[[T(v_{1})]_{\mathcal{B}},\ [T(v_{2})]_{\mathcal{B}},\dots,[T(v_{m})]_{\mathcal{B}}]=[T]_{\mathcal{B}}$
- $C=P^{-1}AP$: change of basis

Complex eigenvector, eigenvalue
[Proof](https://textbooks.math.gatech.edu/ila/complex-eigenvalues.html)
Transform 2x2 matrix with complex eigen(value+vector) to rotation matrix:
1. Find eigenvalue
2. Find eigenvector
$$
\begin{flalign}
A-\lambda I = \begin{pmatrix}
z & w \\
cz & cw
\end{pmatrix} \Rightarrow Eigenvector \begin{pmatrix}
-w \\
z
\end{pmatrix}&&
\end{flalign}
$$
3. $A=CBC^{-1}$ with:
$$
C=\begin{pmatrix}
Re(v) & Im(v)
\end{pmatrix},\ B = \begin{pmatrix}
Re(\lambda) & Im(\lambda) \\
-Im(\lambda) & Re(\lambda)
\end{pmatrix}
$$

### Differential equation:
$x'=Ax \Rightarrow \text{Decoupled system: }u'=Du,\ u=P^{-1}x,\ D=P^{-1}AP$
$\Rightarrow x(t)=\displaystyle{\sum_{i=1}^{n}} \,b_{i}p_{i}e^{\lambda_{1}t},\ P = [p_{1}, p_{2},\dots, p_{n}] \,$

Complex eigen(value+vector):
2x2
General solution: $x=c_{1}e^{\lambda t}v+c_{2}e^{{\overline{\lambda} t}}\overline{v}=c_{1}x+c_{2}\overline{x},\ \text{eigenvector } \overline{v}$
Real solution:  $x_{1}=Re(x)=\frac{1}{2}(x+\overline{x})$
$x_{2}=Im(x)=\frac{1}{2}(x-\overline{x})$
$x_{real}=b_{1}x_{1}+b_{2}x_{2}$

## Symmetric matrix:
Symmetric matrix: $A=A^{T}$
> [!cite] Theorem:
> 1. Have n real eigenvalues
> 2. Eigenvectors corresponding to distinct eigenvalues are orthogonal
> 3. $\iff$ Eigenvectors form orthonormal basis $\iff$ Orthogonally diagonalizable: $P^{-1}AP=P^{T}AP=D$
> 4. Orthogonal $\Rightarrow$ symmetric, symmetric $\not \Rightarrow$ orthogonal

Orthogonal matrix: $P^{-1}=P^{T} \iff PP^{T}=I \iff$ columns (rows) form orthonormal basis in $\mathbb{R}^{n}$ 
