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
domain of f(g) = g domain
range of f(g) = f range
$arg(xy)=arg(x)+arg(y)$
$(a-b)(a+b)=a^2-b^2$
numerator to zero = how many solutions in equation
injective = one to one
- The domain of a function f(x) is the set of all values for which the function is defined, and the range of the function is the set of all values that f takes.

- You can keep dividing function until denom>num => if remainder => $sol+\frac{remainder}{div}$

$D=b^2-4ac$ $DISCRIMINANT$
$D>0$ $2\to sol$ use quad formula
$D=0$ $1\to sol$
$D<0\to no$
$x=-\frac{b\pm \sqrt{ b^2-4ac }}{2a}$

- **completion of squares => square to vertex form**
- https://www.youtube.com/watch?v=EBbtoFMJvFc
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
>
>odd square root like: $^3\sqrt{ -1 }=-1$ even: only positive

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
>just remember the identities on formula sheet given
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
>$\log_{a}(x)=\frac{\log_{e}(x)}{\log_{e}(a)}=\frac{\ln(x)}{\ln(a)}$

- $\log_{a}(x)=\frac{1}{x\ln(a)}$ derivative https://www.youtube.com/watch?v=2A1xgHtTOCk

![[ln-e-graph.png|300]]

![[final-electronics-close-up.jpg|400]]
# Complex Numbers
https://medium.com/all-math-before-college/complex-numbers-4a1aeda2abb6

imaginary component: y
real component: x

- $\frac{1+i}{2+i}=\frac{(1+i)(2-i)}{(2+i)(2-i)}$
- $\sqrt{ -9 }=\sqrt{ 9 }\sqrt{ -1 }=3i$
- conjugate: what you see in first bullet point reverse of sign in middle
- $a+bi=r(\cos \theta+i\sin \theta)$ where $r=\sqrt{ a^2+b^2 }$, eg: $3+3i=3\sqrt{ 2 }(\cos \theta+i\sin \theta)\implies \frac{1}{\sqrt{ 2 }}+\frac{1}{\sqrt{ 2 }}i=\cos \theta+i\sin \theta \implies \frac{1}{\sqrt{ 2 }}=\cos \theta, \frac{1}{\sqrt{ 2 }}=\sin \theta \dots$
- $a+bi=re^{a+bi}$

>[!NOTE] Summery of Complex Numbers - Rectangular, Polar, Exponential Form
>$z=a+bi=r(\cos(\theta)+i\sin (\theta))=\mathrm{re}^{i\theta}$

>[!NOTE] Geometric Operations
>
>Think in terms of a circle, radius stretches, angle shifts when you stuff like multiplication etc...
>
>$z=a+bi$
>$zw=rs(\cos(\theta+\phi)+i\sin(\theta+\phi))$
>$\frac{z}{w}=\frac{r}{s}(\cos(\theta-\phi)+i\sin (\theta-\phi))$
>$z^n=r^n(\cos(n\theta)+i\sin (n\theta))$
>$\sqrt[n]{ z }=\sqrt[n]{ r }(\cos\left( \frac{\theta}{n} \right)+i\sin\left( \frac{\theta}{n} \right))$
>$\bar{z}=r(\cos(\theta)-i\sin (\theta))$
>$e^z=e^a(\cos(b)+i\sin(b))$

>[!NOTE] Deriving Polar Formulas
>$e^{ix}=\cos(x)+i\sin(x)$ : Euler Formula
>$e^{-ix}=\cos(x)-i\sin (x)$
>$-$ for sine: $\sin(x)=\frac{e^{ix}-e^{-ix}}{2i}$
>$+$ for cosine: $\cos(x)=\frac{e^{ix}+e^{-ix}}{2}$

![[complex-operation.jpg]]
![[complex-operation-2.jpg]]
- always plot on IM/RE axis

**conjugate root theorem polynomial: if it has a complex root it also has a conjugate of that complex as root**

$Im(i)=1$ imaginary part of imaginary number = real number

$|z-2i|=|3+4i|\implies \sqrt{ 3^2+4^2 }=5$ so its set of all complex numbers are a circle around not origin but around $-2i$ with radius $5$

imaginary part of imaginary number is a real value: $Im\left( \frac{1}{2} + \frac{\sqrt{ 2 }}{2}i \right)=\frac{\sqrt{ 2 }}{2}$

![[complex-polynomial.jpg|500]]
Having root $i$ means having 2 roots $i \cap -i$
![[solution for interesting case.png|400]]
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
- https://en.wikipedia.org/wiki/Squeeze_theorem
![[squeeze-theorem-example.png|500]]
![[limit.jpg|500]]

asymptotes  are limits to infinity.
horizontally it must have both ($-\infty \cap \infty$) asymptote
vertically it can have either of the asymptote doesn't have to have have both
https://www.youtube.com/watch?v=WT7oxiiFYt8
https://www.youtube.com/watch?v=NVQBZWTKygU
![[definition-continuity.png|300]]
![[continuity-interval.png|300]]
composite functions -> continuous

Intermediate Value Theorem. **If f is continuous on the interval [a,b] and N is between f(a) and f(b), where f(a)≠f(b), f ( a ) ≠ f ( b ) , then there is a number c in (a,b) such that f(c)=N**.

![[min-max-theorem.png|300]]

![[squeeze-theorem.png|500]]
taylor: https://www.youtube.com/watch?v=EYjBnnUJTP8, https://www.youtube.com/watch?v=f_NvAc4Ffbg
# Differentiation

>Tangents
>Derivative
>Taking Derivatives
>Derivatives of Trigonometric Functions
>Mean Value Theorem
>Higher order Derivatives
>Implicit Differentiation
>Linear Approximation
>Taylor Polynomial
>Taylor Series
>Remainder of the Taylor series
>Finding Taylor Series
>l'Hopitals Rule
>Limits with Taylor

- with the slope you can find the tangent line.
- slope of normal to tangent: $-\frac{1}{m}$
- If f is differentiable at x, then f is continuous at x.
![[quotient-rule-formula.png|500]]
$\frac{d}{dx}a^x=\frac{d}{dx}e^{\ln(a^x)}=\frac{d}{dx}e^{x\ln(a)}=a^x\ln(a)$

![[rolle-s-theorem.png|300]]
mean value theorem: https://www.youtube.com/watch?v=Brat34fUe9o
![[mean-value-theorem.jpg|400]]
![[20240122_155111.jpg|300]]
>[!NOTE] Inflection Point
>$f''(a)=0$ where it switches signs

![[second-derivative-test.png|300]]

>[!NOTE] Implicit Differentiation
>$\frac{d}{dx}(y^4=y^2-x^2)\implies 4y^3 \frac{dy}{dx}=2y \frac{dy}{dx} -2x\implies \frac{dy}{dx}=\frac{-2x}{4y^3-2y}$

## More on Differentiation

![[lin_approx.png]]
to find an error of linear approximation: $\frac{f''(c)}{2}(x-x_{1})^2$ for certain $c$ between $x\cap x_{1}$

![[taylor-series.png|300]]
*with limits the denom must also go to the same or higher power compared to num.*

>[!NOTE] Big O
>the max factor the function grows at.
>$\sin(x^3)\cos(x^3)=O(x^3)$ at most
>$\sin^2(x^3)\implies O(x^6)$ at most
>$x^3\cos(x^3)=O(x)$ at most cubically so $O(x)$ also works

- Taylor Series you can find by looking at formula sheet and adjusting the function to be same.

![[lhopitals-rule-formula.png|300]]

![[taylor-limits.png|300]]
![[taylor-limits-2.png|400]]

# Transcendental Functions

>Inverse functions
>Inverse functions of sin, cos and tan
>Exponential and Logarithmic Functions
>Logarithmic Equations
>Differentiation of Exponential Functions

- for a function to be invertible it must be one to one. (think graphically).
- A function is a one to one if its derivative is always positive for all x.
- if not one to one you can restrict to domain which makes it one to one and find inverse.
- **Think of implicit differentiation to find derivative of inverse function**
- to prove a function is one to one you can use a derivative

![[derivatives-inverses-example.png]]
![[inverse-trig-func.png|300]]

$\sin(\arcsin(x))=x$ & $\arcsin(\sin(x))=x$ since $f(f^{-1}(x))=x$ & $f^{-1}(f(x))=x$ if -val then *answer still always positive*

![[trig-inverse-stuff.png|400]]![[unit circle.png|200]]
![[trig funcs.png|300]]

![[inverse-rig-func-problem.png|300]]
![[derivative-arc.png|300]]

>[!NOTE] Tangent
>$\arctan'(y)=\cos^2(x)$, $y=\tan(x)$
>$\sin^2(x)+\cos^2(x)=1$=>$\tan(x)=\frac{\sin(x)}{\cos(x)}$
>$\tan(x)=\frac{\sqrt{ 1-\cos^2(x) }}{\cos(x)}$=>$\tan(x)=\frac{1}{\cos(x)}-1$
>$\cos(x)=\frac{1}{\tan(x)+1}$=>$\cos^2(x)=\frac{1}{1+\tan^2(x)}$
>$\arctan'(y)=\frac{1}{1+y^2}$ 

$\arcsin\left( \frac{x-2}{3} \right)\implies domain\implies-1\leq \frac{x-2}{3}\leq 1\implies-1\leq x\leq 5$
$\arctan(\cos(x))\implies image\implies \cos(x)\implies [-1,1],domain\implies \arctan([-1,1])\implies\left[ -\frac{\pi}{4}, \frac{\pi}{4} \right]$

- image/range of a function is a set of solutions it can produce.
- $\ln(x)$ is a strictly increasing function

>[!NOTE] Growth Properties of Exp & In
>$a>0$
>$\lim_{ x \to \infty }=\frac{x^a}{e^x}=0$
>but power beats logarithm, loses to exponential

# Integration

![[integral-properties.png|400]]
piecewise means not continuous functions.

![[mvt-integral.jpg|300]]
![[ftc.png]]
![[ftc-example-2.png|300]]
![[ftc-example.png|300]]

>[!NOTE] Fundamental Theorem of Calculus Example
>$G(x)=x^2\int_{-4}^{5x} e^{-t^2} \, dt\implies 2x \int_{-4}^{5x} e^{-t^2} \, dx +x^2 \cdot 5 \cdot e^{-25x^2}$
>since $G'(x)=F'(5x)\cdot5-F'(-4)\cdot0$

![[example-integration-substituition.png|300]]
- Another substitution example $\int \frac{x^3}{x^2-1} \, dx\implies u=x^2-1$ so $x^3=u+1$

>[!NOTE] Steps for Integration by Substitution - Inverse of Chain Rule
>Replace $g(x)$ by $u$
>Replace $g'(x)dx$ by $du$
>Take care of remaining $x's$ by rewriting them in terms of $u$
>Boundaries for $x\to$ boundaries for $u$
>
>you can keep the boundaries as in terms of $x$ but must indicate that

![[integration-by-parts.png]]
Integration by Parts - Inverse of Product Rule
$\int \ln(x) \, dx=\int 1\ln(x) \, dx$
=>$\int 1\ln(x) \, dx=x\ln(x)-\int x \frac{1}{x} \, dx=x\ln(x)-x+C$
- you can take partial integration more than once.
![[multiple-int-by-parts.png|400]]

>[!NOTE] Integration of Rational Functions $\frac{p(x)}{q(x)}$
>1. First long division such that degree of numerator < degree denominator
>2. Factor denominator in linear / quadratic factors (only possibilities!)
>3. Decompose fractions into easier ones or complete the squares
>4. Find anti-derivatives for separate terms

![[integration-by-partial-fractions.png|400]]

![[improper-integrals.png|500]]

>[!NOTE] Improper Integral Example
>$\int_{0}^{1} \frac{1}{x} \, dx=[\ln\mid x\mid]^1_{0}=\ln(1)-\ln(0)$
>$\ln(0)$ doesn't exist so:
>$\lim_{ h \to 0^+ }\int_{h}^{1} \frac{1}{x} \, dx=\ln(1)-\ln(0^+)=0-(-\infty)=\infty$
>
>$0\leq f(x)\leq g(x)$
>if $\int g(x) \, dx$ converges then so does $\int f(x) \, dx$
>if $\int f(x) \, dx$ diverges then so does $\int g(x) \, dx$


# Differential Equations

![[separable-differential-equations.png|400]]

![[seperable-diff-eq.png|400]]
put constant only on one side

**If f(x) in differential equation is equal to zero, it is said to be a _homogenous_. Otherwise, it is _non-homogenous_. An example of a homogenous differential equation is the second-order linear ODE mentioned above, while an example of non-homogenous differential equation is**
![[homo non homo.png|300]]

first order linear differential equation: $\frac{dy}{dx}=p(x)y+q(x)$ inhomo $\frac{dy}{dx}=p(x)y$ homo

>[!NOTE] First-Order Linear Equations
>$\frac{dy}{dx}+p(x)y=q(x)$
>solved by: $y=Ce^{-\mu(x)}$ where $\mu(x)=\int p(x) \, dx$ and $\frac{d\mu}{dx}=p(x)$
>
>Integration Factor: $y(x)=e^{-\mu(x)}\int e^{\mu(x)}q(x) \, dx$
>Variation of the Parameter: $k'(x)e^{\mu(x)}q(x)$

![[integrating-factor.png|400]]
Integrating Factor: Multiple the equation by $e^{\mu(x)}$

![[if-ex-1.png|300]]
![[if-ex-2.png|300]]

----------------------------------------------

![[variation-constant.png|400]]
![[vc-ex-1.png|300]]
![[vc-ex-2.png|300]]
# Examples - 2018
![[20240122_163125.jpg]]

![[20240122_163221.jpg]]

![[20240122_163652.jpg]]

![[20240122_164250.jpg]]