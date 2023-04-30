## 5ESB0

> Dynamic systems (theory)
> Transfer functions
> Laplace transform
> Dynamic responses of linear systems
> Second order systems
> Fourier Transforms
> System interconnections and stability
> Feedback and feedforward
> Feedback controllers (PID)

### Transfer Functions
![[system.png]]
$y(t)=[g(t-t_{1})-g(t-t_{2})]c$

- **Differential system:**
	- $y(t)=y_{h}(t)+y_{p}(t)$ -> normalized
	- Find $y_{p}(t)$
	- Parameterize $y_{h}=\sum_{i}c_{i}e^{\lambda_{i}t}$
	- Write boundary conditions: $y(0)=\dots$ $\dot{y}(0)=\dots$ etc...
	- Find $c_{i}$ as a function of $\lambda_{i}$
	- Solve homogeneous differential equation with $y_{h}(t)$ of the form $e^{\lambda t}$ to find $\lambda_{i}$
	- Substitute $y_{h}(t)$ and $y_{p}(t)$

If you want to find all particular solutions to the original equation, it suffices to find one particular solution to it, and all solutions to the homogeneous equation

Transfer functions H(s) describes the particular solution as an s-dependent amplification of input signal $e^{st}$
	$H(s)=\frac{1}{s+a}$ when $u(t)=e^{st}$ -> first order 
	$H(s)=\frac{Y}{U}=\frac{1}{s^2+a_{1}s+a_{2}}$ when $u(t)=Ue^{st}$ -> second order

- **Convolution system:**
	- Convolution Integral: $y(t)=\int_{-\infty}^{\infty} h(\tau)*u(t-\tau) \, d\tau=\int_{-\infty}^{\infty} u(\tau)*h(t-\tau) \, d\tau$
	- Draw representation of signals
	- Choose which signal to flip
	- Find all cases and their respective time intervals
	- Find the limits of the convolution integral for each case
	- Compute convolution integral of each case
	- Express final answer as piecewise function

$h(t)$ -> impulse response | $g(t)$ -> step response
$h(t):=\frac{d}{dt}g(t)$ and $\delta(t)=\lim_{ \Delta \to 0 }\frac{d}{dt}u(t)$
Causality: $g(t)=h(t)=0$ for $t<0$
$u(t)\to$ 1 when $t\geq 0$ and 0 when $t<0$ $\implies$ step signal
$\delta(t)\to$ 1 when $t=0$ and 0 $otherwise$ $\implies$ impulse signal

- **System output summery:**
	1. Decompose $u$ in terms $e^{st}$ -> $y(t)=H(s)u(t)$ | $H(s)$ transfer function
	2. Decompose $u$ in piecewise constant terms -> $y(t)=\int_{-\infty}^{\infty} h(\tau)u(t-\tau) \, d\tau$ | $h(t)$ impulse response

## Laplace Transform