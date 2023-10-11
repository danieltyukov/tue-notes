# Preliminaries

>Real Numbers
>Intervals
>Quadratic Equations
>Cubic Equations
>Higher Degree Equations
>Equations involving rational functions
>Roots
>Inequalities
>Powers
>Quadrics
>Functions and their graphs
>Trigonometric Functions
>Trigonometric Equations

## Some Notes

- You can keep dividing function until denom>num => if remainder => $sol+\frac{remainder}{div}$

$D=b^2-4ac$ $DISCRIMINANT$
$D>0$ $2\to sol$ use quad formula
$D=0$ $1\to sol$
$D<0\to no$
$x=-\frac{b\pm \sqrt{ b^2-4ac }}{2a}$

- **completion of squares => square to vertex form**
- $ax^2+bx+c\implies a(x-h)^2+k$
- $b=h*2$ and $c=k+\left( \frac{b}{2} \right)^2$

$x^2=a\implies x=\pm \sqrt{ a }$ where $a\geq 0$
$x^3=a\implies x=\sqrt[3]{ a }$ where $a=any$

$(x-a)^2+(y-b)^2=r^2$ equation of a circle
$D=\sqrt{ (x_{1}+x_{2})^2+(y_{1}+y_{2})^2 }$

domain: x possible input vals, range: y possible output vals
$y=f(x)$
vertical translation: $y=f(x)+a$
horizontal translation: $y=f(x-a)$ *opposite*
vertical  stretching: $y=af(x)$
horizontal stretching: $y=f\left( \frac{x}{a} \right)$ *opposite*
$f(x)=f(-x)$ even function f
$-f(x)=f(-x)$ odd function f
if f and g are even -> $(f+g) \cap(f*g)\implies even$
if f and g are odd -> $((f+g)\implies odd) \cap(f*g)\implies even$

>[!NOTE] Roots
>$\frac{1}{\sqrt{ a }+\sqrt{ b }}=\frac{1}{\sqrt{ a }+\sqrt{ b }}\cdot \frac{\sqrt{ a }-\sqrt{ b }}{\sqrt{ a }-\sqrt{ b }}$

>[!NOTE] Inequalities
>$2^x>2^4\implies x>4$
>$\left( \frac{1}{2} \right)^x>\left( \frac{1}{2} \right)^4\implies x<4$

![[sine.png|500]]
![[cosine.png|500]]
![[tan.png|500]]
$\sin(x)=\cos\left( \frac{\pi}{2}-x \right)$ and $\cos(x)=\sin\left( \frac{\pi}{2}-x \right)$

![[trig-circ.png]]
(cos,sin)

>[!NOTE] Trigonometric Rules
>$\sin^2(x)+\cos^2(x)=1$
>$\cos(x+2\pi)=\cos x$ & $\sin(x+2\pi)=\sin x$
>cos even => $\cos x=\cos(-x)$ sine odd => $\sin x=-\sin(-x)$
>$\cos\left( \frac{\pi}{2}-x \right)=\sin x$ & $\sin\left( \frac{\pi}{2}-x \right)=\cos(x)$
>$\cos(\pi-x)=-\cos x$ & $\sin(\pi-x)=\sin x$
>
>just remember for proving: $\cos(x + x)=\dots$
>
>$\cos \frac{\pi}{12}=\cos\left( \frac{\pi}{3}-\frac{\pi}{4} \right)$
>
>sine law: $\frac{\sin A}{a}=\frac{\sin B}{b}=\frac{\sin C}{c}$
>cosine law: $a^2=b^2+c^2-2bc\cos A$, $b^2=a^2+c^2-2ac\cos B$, $c^2=a^2+b^2-2ab\cos C$

>[!NOTE] Evaluating Trig Functions
>arcsin $\left[ -\frac{\pi}{2}, \frac{\pi}{2} \right]$
>arccos $[0,\pi]$
>
>$\sin\left( \frac{7}{6}\pi \right)=\frac{3}{2}-\frac{7}{6}=\frac{1}{3}\implies \sin\left( \frac{\pi}{3} \right)=\frac{1}{2}$ since Q3 -> $-\frac{1}{2}$

$y=mx+c$, $y-y_{1}=m(x-x_{1})$, $m=\frac{y_{2}-y_{1}}{x_{2}-x_{1}}$, $\perp\implies m_{1}=-\frac{1}{m_{2}}$
slope=gradient, derivative of a function is its slope.

![[inequality.png|500]]
$-2\leq x\leq 3$

>[!NOTE] Logarithms
$\frac{d}{dx}(a^x)=a^x\ln(a)$
$a^x=b\implies \log_{a}b=x$
$\log(0) or\ln(1)=0$
$\log(a)+\log(b)=\log(ab)$ and $\log(a)-\log(b)=\log\left( \frac{a}{b} \right)$
$\log(a^x)=x\log(a)$

# Complex Numbers

- $\frac{1+i}{2+i}=\frac{(1+i)(2-i)}{(2+i)(2-i)}$
- $\sqrt{ -9 }=\sqrt{ 9 }\sqrt{ -1 }=3i$
- conjugate: what you see in first bullet point reverse of sign in middle
- $a+bi=r(\cos \theta+i\sin \theta)$ where $r=\sqrt{ a^2+b^2 }$, eg: $3+3i=3\sqrt{ 2 }(\cos \theta+\sin \theta)\implies \frac{1}{\sqrt{ 2 }}+\frac{1}{\sqrt{ 2 }}i=\cos \theta+i\sin \theta \implies \frac{1}{\sqrt{ 2 }}=\cos \theta, \frac{1}{\sqrt{ 2 }}=\sin \theta \dots$
- $a+bi=re^{a+bi}$

>[!NOTE] Polar Operations
>$z=a+bi$
>$zw=rs(\cos(\theta+\phi)+i\sin(\theta+\phi))$
>$\frac{z}{w}=\frac{r}{s}(\cos(\theta-\phi)+i\sin (\theta-\phi))$
>$z^n=r^n(\cos(n\theta)+i\sin (n\theta))$
>$\sqrt[n]{ z }=\sqrt[n]{ r }(\cos\left( \frac{\theta}{n} \right)+i\sin\left( \frac{\theta}{n} \right))$
>$\bar{z}=r(\cos(\theta)-i\sin (\theta))$
>$e^z=e^a(\cos(b)+i\sin(b))$

>[!NOTE] Deriving Polar Formulas
>$e^{ix}=\cos(x)+i\sin(x)$ 
>$e^{-ix}=\cos(x)-i\sin (x)$
>$-$ for sine: $\sin(x)=\frac{e^{ix}-e^{-ix}}{2i}$
>$+$ for cosine: $\cos(x)=\frac{e^{ix}+e^{-ix}}{2}$

![[complex-operations.jpg]]
- always plot on IM/RE axis

**conjugate root theorem polynomial: if it has a complex root it also has a conjugate of that complex as root**

$Im(i)=1$ imaginary part of imaginary number = real number

# Limits & Continuity

>Limits
>One sides Limits
>Rules for Limits
>Limits of Fractions
>Squeeze Theorem
>Limits with substitution
>Limit with substitution
>Limits to Infinity
>Asymptotes
>Standard Limits
>Continuity

$\lim_{ x \to 0^- }\left( \frac{|x|}{x} \right)=-1$
if limit from (-) and (+) then the general limit does not exist
$\frac{x}{\infty}=0$
$\frac{\infty}{x}=undefined \mid \infty$
- L'Hopital only when $\frac{\infty}{\infty}$ or $\frac{0}{0}$
- when limit of $\infty$ and has trig manipulate fraction to be div by x
- $\frac{x^2}{e^{x^2+x}}$ you can see that its basically $\frac{1}{\infty}=0$
![[squeeze-theorem-example.png|500]]
![[limit.jpg|500]]

asymptotes  are limits to infinity.
horizontally it must have both ($-\infty \cap \infty$) asymptote
vertically it can have either of the asymptote doesn't have to have have both

![[definition-continuity.png|300]]
composite functions -> continuous

Intermediate Value Theorem. **If f is continuous on the interval [a,b] and N is between f(a) and f(b), where f(a)≠f(b), f ( a ) ≠ f ( b ) , then there is a number c in (a,b) such that f(c)=N**.

![[min-max-theorem.png|300]]

![[squeeze-theorem.png|500]]

# Differentiation

>Tangents
>Derivative
>Taking Derivatives
>Derivatives of Trigonometric Functions
>Mean Value Theorem
>Higher order Derivatives
>Implicit Differentiation

- with the slope you can find the tangent line.
- slope of normal to tangent: $-\frac{1}{m}$
- If f is differentiable at x, then f is continuous at x.
![[quotient-rule-formula.png|500]]
$\frac{d}{dx}a^x=\frac{d}{dx}e^{\ln(a^x)}=\frac{d}{dx}e^{x\ln(a)}=a^x\ln(a)$
