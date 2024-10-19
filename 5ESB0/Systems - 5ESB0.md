> Dynamic systems (theory)
> Transfer functions
> Laplace transform
> Dynamic responses of linear systems
> Second order systems
> Fourier Transforms
> System interconnections and stability
> Feedback and feedforward
> Feedback controllers (PID)

[[Laplace Transform]]
[[Fourier Analysis - Transform(Series)]]
![[laplace transform table-1.png|300]]![[example of a transfer function.png|300]]

$H(s)=\frac{3}{10s+3}\to \frac{1}{10} \frac{3}{s+ \frac{3}{10}} \to h(t)=\frac{3}{10}e^{-0.3t}$
# Transfer Functions
![[system.png|500]]

$y(t)=[g(t-t_{1})-g(t-t_{2})]c$

- **Differential system:**
	- $y(t)=y_{h}(t)+y_{p}(t)$ -> normalized
	- Find $y_{p}(t)$
	- Parameterize $y_{h}=\sum_{i}c_{i}e^{\lambda_{i}t}$
	- Write boundary conditions: $y(0)=\dots$ $\dot{y}(0)=\dots$ etc...
	- Find $c_{i}$ as a function of $\lambda_{i}$
	- Solve homogeneous differential equation with $y_{h}(t)$ of form $e^{\lambda t}$ to find $\lambda_{i}$
	- Substitute $y_{h}(t)$ and $y_{p}(t)$

Transfer functions H(s) describes the particular solution as an s-dependent amplification of input signal $e^{st}$
	$H(s)=\frac{1}{s+a}$ when $u(t)=e^{st}$ -> first order 
	$H(s)=\frac{Y}{U}=\frac{1}{s^2+a_{1}s+a_{2}}$ when $u(t)=Ue^{st}$ -> second order

- **Convolution system:**
	- Convolution Integral: $y(t)=\int_{-\infty}^{\infty} h(\tau)*u(t-\tau) \, d\tau=\int_{-\infty}^{\infty} u(\tau)*h(t-\tau) \, d\tau$
	- Draw a representation of the signals
	- Choose which signal to flip and draw the flipped signal
	- Find all cases and their respective time intervals
	- Find the limits of the convolution integral for each case
	- Compute the convolution integral for each case
	- Express final answer as a piecewise function

$h(t)$ -> impulse response | $g(t)$ -> step response
$h(t):=\frac{d}{dt}g(t)$ and $\delta(t)=\lim_{ \Delta \to 0 }\frac{d}{dt}u(t)$
Causality: $g(t)=h(t)=0$ for $t<0$
$u(t)\to$ 1 when $t\geq 0$ and 0 when $t<0$ $\implies$ step signal -> **notation:** $1(t)$
$\delta(t)\to$ 1 when $t=0$ and 0 $otherwise$ $\implies$ impulse signal

- **System output summery:**
	1. Decompose $u$ in terms $e^{st}$ -> $y(t)=H(s)u(t)$ | $H(s)$ transfer function
	2. Decompose $u$ in piecewise constant terms -> $y(t)=\int_{-\infty}^{\infty} h(\tau)u(t-\tau) \, d\tau$ | $h(t)$ impulse response

## Extra: Complex Exponentials
---
![[complex-exponentials.png|500]]
![[complex-coords.png|500]]

complex number s:
cartesian coord: $(\sigma,\omega):s=\sigma+j\omega$
polar coord: $(r,\phi):s=r\cos\phi+jr\sin\phi$

### Block Diagrams
$\text{since open loop }E\to Y\text{ }E=-Y\text{ since }Y=G_{2} \cdot G_{1}\text{ then }E=G_{1} \cdot G_{2}$
[e1a7408acfaa5b79f0b3147e84d93bdd\_MIT2\_04AS13\_Lecture10.pdf](https://ocw.mit.edu/courses/2-04a-systems-and-controls-spring-2013/e1a7408acfaa5b79f0b3147e84d93bdd_MIT2_04AS13_Lecture10.pdf)
![[block-diagrams.png]]
![[example block diagram.png|300]]![[example solution to block diagram.png|300]]
![[disturbance rejection.png|300]]![[example of final value theorem.png|300]]
![[system types.png|300]]
    
# Laplace Transform
Relation between $H(s)$ and $h(t)$
>[!NOTE] Laplace Derivation
> Substitute $u(t)=e^{st}$
> $y(t)=\int_{-\infty}^{\infty} h(\tau)e^{s(t-\tau)} \, d\tau$
> $=\int_{-\infty}^{\infty} h(\tau)e^{st}e^{-s{\tau}} \, d\tau$
> $=\left[ \int_{-\infty}^{\infty} h(\tau)e^{-s\tau} \, d\tau \right]*e^{st}$
> $=[\int_{-\infty}^{\infty} h(\tau)e^{-s\tau} \, d\tau]u(t)$
> 
> so: $y(t)=H(s)u(t)$ for $u(t)=e^{st}$
> $H(s)=\int_{-\infty}^{\infty} h(\tau)e^{-s\tau} \, d\tau$
> 
> $f(t)\to F(s)$ ==> differentiation | $F(s)\to f(t)$ ==> integration (use table)

>[!NOTE] Laplace Differentiation Property
> $L\left( \frac{df}{dt}\right)=sF(s)-f(0)$ --> Basic
> $L\left( \frac{f^{(m)}(t)}{dt} \right) = s^mF(s)-s^{m-1}f(0)-s^{m-2}\dot{f}(0)-\dots-f^{m-1}(0)$ --> General
> $L(\delta(t))=1$
> 
> **A strictly proper transfer function is a transfer function where the degree of the numerator is less than the degree of the denominator**.

![[generics-1.png|500]]
![[trig-ident.png|500]]
![[trig-ident-other.jpg|500]]

### Inverse Laplace Transform:
![[inverse-laplace-1.png|500]]
![[inverse-laplace-2.png|500]]

# Dynamic Responses of Linear Systems

Poles and zeros of $H$ come in complex conjugate pairs damping and (undamped) natural frequency.
> Poles determine the natural (unforced) response of the system
> Zeros determine the input signals that do not reach through to the output
> $m=zeros,n=poles$ If $n>m$ then $H(s)$ has zeros in infinity -> unstable

real part of the poles introduces damping...
**further away from the origin the faster the decay/gain becomes (real line)**
**further away from the origin the oscillation frequency increases (imaginary line)**
only poles needed to determine stability of the system
![[dynamic-response-graph.png|500]]
![[dynamic-response-eg.png|500]]
![[s plane shifting.png|500]]
# Second Order Systems / Fourier Transforms / System Interconnections and Stability
$\text{laplace transform of s:}s=-\sigma\pm j\omega_{d}$
steady state $\sigma=0$

![[dynamic-response.png|500]]
![[dynamic response rules.png|500]]
$\sigma=\zeta \omega_{n}\text{ and }\omega_{d}=\omega_{n}\sqrt{ 1-\zeta^2 }$
$\text{standard second-order system impulse response: }h(t)=\frac{\omega_{n}}{\sqrt{ 1-\zeta^2 }}e^{-\sigma t}(\sin \omega_{d})1(t)$

>[!NOTE] Final Value Theorem -> Steady State Gain
>Final value exists when it a system converges to a value for example an exponential system diverges and oscillating system without damping does not converge. Meaning only with poles in LHP and Origin
>$\lim_{ t \to \infty }f(t)=\lim_{ s \to 0 }s \cdot F(s)$
>
>Let $y(t)$ <-> $Y(s)$ be a $L$-transform pair.
>If all poles of $sY(s)$ are in the left-plane, then:
>$\lim_{ t \to \infty }y(t)=\lim_{ s \to 0 }sY(s)=\lim_{ s \to 0 }G(s)\cdot s \cdot \frac{1}{s^{k+1}}$
>
>Consequence: 
>If $u$ is a **step**, $U(s)=\frac{1}{s}$, and $Y(s)=G(s)U(s)$, then:
>$\lim_{ t \to \infty }y(t)=\lim_{ s \to 0 }s \cdot G(s) \cdot \frac{1}{s}$
>$= \lim_{ s \to 0 }G(s)$ 
>is the DC-gain (steady state value of step response) of G

![[final value theorem.png|500]]

![[step-response-characterizaton.png|500]]
![[desired-behaviour.png|500]]

Analytic Express for Step Response: $y(t)=1-e^{-\sigma t}\left( \cos w_{d}t+\frac{\sigma}{\omega _{d}}\sin \omega_{d}t \right)$
$\text{standard second-order system step response: }y(t)=1-\frac{e^{-\sigma t}}{\sqrt{ 1-\zeta^2 }}\cos(\omega_{d}t-\beta)$
>[!NOTE] Characterization
>**Rise time $t_{r}$**
>$w_{n}t_{r}\approx 1.8$ -> $t_{r}\approx \frac{1.8}{w_{n}}$
>for $\zeta\geq0.5$
>$\zeta=\sin(\theta)\geq 0.5$
>
>
>**Peak time** $t_{p}$
>$t_{p}=\frac{\pi}{\omega_{d}}$
>
>**Overshoot** $M_{p}$
>$M_{p}=e^{\frac{-\zeta}{\sqrt{ 1-\zeta^2 }}\pi}$
>
>**Settling time** $t_{s}$
>$t_{s}=\frac{4.6}{\sigma}$

>[!NOTE] One-to-one relations (2nd order systems)
>$t_{r} \leftrightarrow w_{n}$
>$t_{p} \leftrightarrow w_{d}$
>$M_{p} \leftrightarrow \zeta$
>$t_{s}  \leftrightarrow \sigma$

>[!NOTE] Consequence of extra zero/pole
>**Extra Zero**
>If $a\gg 0$ the effect of the zero is negligible
>If $a$ not large enough -> overshoot $M_{p}$ increases
>If $a<0$ (zero in RHP (right half plane)) initial response can become negative
>
>$M_{p} \uparrow$ and $t_{r} \downarrow$ if zero in neighborhood of poles (LHP).
>Initial negative response if zero in right half plane (RHP)
>
>**Extra Pole**
>$t_{r} \uparrow$ if pole is neighborhood of the other poles (LHP)

>[!NOTE] Stability
> An LTI system is called **stable** if all poles of the transfer function are in the open left half plane, i.e. have negative real parts. (If on imaginery line (critically stable) **not stable**)
> - Routh array -> test stability of systems
> - Number of sign changes -> Number of poles in RHS -> Stable: No Sign Changes
> - If Routh first column same sign, positive -> stable
> 
> Routh-stability test of: $a_{0}s^3+a_{1}s^2+a_{2}s+a_{3}=0:$
> $s^3: a_{0}$ $a_{2}$
> $s^2: a_{1}$ $a_{3}$
> $s^1: \frac{a_{1}a_{2}-a_{0}a_{3}}{a_{1}}$
> $s^0:a_{3}$
> [Routh–Hurwitz stability criterion - Wikipedia](https://en.wikipedia.org/wiki/Routh%E2%80%93Hurwitz_stability_criterion)
> 
> Bounded input-Bounded output (BIBO) = Stability (absolutely integrable): $\int_{-\infty}^{\infty} |h(t)| \, dt < \infty$

# Feedback and Feedforward

![[closed-loop-analysis.jpg|500]]

- Closed Loop Sensitivity: $S_{G}^T=\frac{G}{T}\cdot \frac{dT}{dG}=\frac{\frac{\delta T}{T}}{\frac{\delta G}{G}}$
- If not a closed-loop system -> Routh Stability Check Performed -> Before Final Value Theorem
[Types of Systems - YouTube](https://www.youtube.com/watch?v=IRdDcSO_fQw)
System Type based on the amount of poles at the origin... Only based for the left hand side poles for stable systems.
any system of type 2 and higher diverge to infinity for the final value theorem.
$\text{Type 0: }FU=0\text{ Type 1: }FU=\text{real value Type>=2: }FU=\infty$
![[based on final value theorem.png|400]]
> [!NOTE] System Types
> **Reference Tracking:**
> $R\to Y$
> $W(s)=0$
> $E(s)=R(s)(1-T(s))$
> $e_{ss}=\lim_{ s \to 0 }sE(s)$
> 
> **Disturbance Rejection**
> $W\to Y$
> $R(s)=0$
> $E(s)=R(s)-Y(s)=-Y(s)$
> $\lim_{ s \to 0 }sE(s)$

![[reference-tracking.png|500]]
![[disturbance-rejection.png|500]]
$E=R-Y\text{ if disturbance rejection: }R=0$
if that circle H->- then its $-H$ so numerator $--H=H$
if there is something after that circle lets say Z: $\frac{-ZH}{1+DGZ}$
$\frac{1}{s^{k+1}}$
W->E means E=...W
## When Reference Tracking - Consider Steady State Errors (R(s))
[Final Value Theorem and Steady State Error - YouTube](https://www.youtube.com/watch?v=PXxveGoNRUw)
Role of a closed loop control system is to drive the error(difference between input and output) to zero.
![[steady-state-error-1.png|500]]
![[steady-state-error-2.png|500]]
![[error tracking.png|500]]
$\infty \text{ means can't be tracked}$
feed forward gain is a way of determining a steady state error when plant and compensator of the system are known.
$\text{type N system has N poles at origin: }G(s)$
$e_{ss}\lim_{ s \to 0 }[sE(s)]=\lim_{ s \to 0 }\left[ \frac{sR(s)}{1+G(s)} \right]$
![[proof of feed forward steady state.png|500]]

[ECE320 Lecture1-3c: Steady-State Error, System Type - YouTube](https://www.youtube.com/watch?v=hG7dq-51AAg)
[4.3: Steady-State Error Improvement - Engineering LibreTexts](https://eng.libretexts.org/Bookshelves/Industrial_and_Systems_Engineering/Introduction_to_Control_Systems_(Iqbal)/04%3A_Control_System_Design_Objectives/4.03%3A_Steady-State_Error_Improvement)
![[system-type.png|500]]

# Feedback Controllers (PID)
[Pid Control Basics In Detail](https://theautomization.com/pid-control-basics-in-detail-part-2/)
[Simple Examples of PID Control - YouTube](https://www.youtube.com/watch?v=XfAt6hNV8XM)
[Proportional–integral–derivative controller - Wikipedia](https://en.wikipedia.org/wiki/Proportional%E2%80%93integral%E2%80%93derivative_controller#:~:text=An%20everyday%20example%20is%20the,engine%20in%20a%20controlled%20manner.)
![[PID graph.png|400]]
- P used for "speed"
- I used for steady state response
- D used for damping

![[pid.png|500]]
![[pid-actions.png|500]]

>[!NOTE] PID Action in Detail
>P-action: increase $k_{P}\to w^2_{n}\uparrow \implies\zeta w_{n}constant$ so $w_{n}\uparrow,\zeta\downarrow$
>faster response $t_{r}\downarrow$ less damping $M_{p}\uparrow$
>
>PI-action: leads to zero steady state error to step input.
>$k_{I}\uparrow\implies w_{n}\uparrow,\zeta\downarrow$
>
>PD-action: leads to increased damping.
>$k_{D}\uparrow\implies \zeta\uparrow,w_{n}unchanged$

![[pid-summery.png|500]]

