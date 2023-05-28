> Dynamic systems (theory)
> Transfer functions
> Laplace transform
> Dynamic responses of linear systems
> Second order systems
> Fourier Transforms
> System interconnections and stability
> Feedback and feedforward
> Feedback controllers (PID)

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
![[block-diagrams.png|500]]

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

![[dynamic-response-graph.png|500]]
![[dynamic-response-eg.png|500]]

# Second Order Systems
>[!NOTE] Final Value Theorem
>Let $y(t)$ <-> $Y(s)$ be a L-transform pair.
>If all poles of $sY(s)$ are in the left-plane, then:
>$\lim_{ t \to \infty }y(t)=\lim_{ s \to 0 }sY(s)$
>
>Consequence: If $u$ is a step, $U(s)=\frac{1}{s}$, and $Y(s)=G(s)U(s)$, then:
>$\lim_{ t \to \infty }y(t)=\lim_{ s \to 0 }s*G(s)* \frac{1}{s}$
>$= \lim_{ s \to 0 }G(s)$ is the DC-gain (steady state value of step response) of G

