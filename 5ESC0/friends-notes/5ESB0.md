---
created: Tuesday, May 7th 2024, 12:06:51
modified: Sunday, August 18th 2024, 09:43:43
tags:
  - coursework
  - fix
---
[[Laplace Transform]]

# Differential Equations

2nd order DE:
$y'' + py' + qy = f(x)$
Homogeneous solution:
- 2 roots: $y = Ae^{\lambda_{1}t} + Be^{\lambda_{2}t}$
- 1 root: $y = (A+Bx)e^{\lambda t}$

![[signal_block.png|500]]

Block signal: $x(t)=\gamma(t-t_{1}) - \gamma(t-t_{2}), \gamma$: step function

$$
\begin{flalign}
x(t)&= \displaystyle{\sum_{i=1}^{\infty}} \, \delta(t- t_{i})= \displaystyle{\sum_{i=1}^{\infty}} \, \gamma(t-t_{i}) - \gamma(t-t_{1}) \\
y(t)&= \displaystyle{\sum_{i=1}^{\infty}} \, [g(t-t_{i})-g(t-t_{i+1})]u(t_{i}) = \displaystyle{\sum_{i=1}^{\infty}} \, \frac{g(t-t_{i})-g(t-t_{i+1})}{t_{i+1}-t_{i}}u(t_{i})(t_{i+1}-t_{i}) \\
&=\int_{-\infty}^{\infty}  \, \dot{g}(t-\tau)u(\tau)d\tau = \int_{-\infty}^{\infty} h(t-\tau)u(\tau) \, d\tau \\&&
\end{flalign}
$$
> $g(t)$: step response
> $\dot{g}(t)=h(t)$: impulse response
> u(t): input


> [!important] Relationship between unit impulse and unit step
> $$
> \lim_{ T \to 0 } \frac{\gamma(t)-\gamma(t-T)}{T} = \frac{ d\gamma }{ dt } = \delta(t) \to \dot{g}(t)=h(t)
> $$


Partial fraction expansion

$F(s)=\displaystyle{\sum_{i=1}^{n}} \, \frac{C_{i}}{s-p_{i}}, C_{i}=[(s-p_{i})F(s)]_{s=p_{i}}$

![[feedback_loop.png|300]]

$I(s)-O(s)\cdot G_{f}=\frac{O(s)}{G_{o}} \to \frac{O(s)}{I(s)}=\frac{G_{o}}{1+G_{o}G_{s}}$

# Dynamic Response

Step response: $G(s) =\frac{F(s)}{(s+\sigma+j\omega_{d})(s+\sigma-j\omega_{d})}= \frac{F(s)}{s^{2}+2\sigma s+\sigma^{2}+\omega^{2}_{d}} = \frac{F(s)}{s^{2}+2\zeta\omega_{n}s+\omega_{n}^{2}}$
> $\omega_{n}=\sqrt{ \sigma^{2}+\omega^{2}_{d} }:$ undamped natural frequency
> $\zeta=\sin(\theta):$ damping

Poles: $s=\omega_{n}e^{\pm j\frac{\pi}{2}+\theta}$
Typical 2nd order transfer function: $H(s)=\frac{\sigma^{2}+\omega^{2}_{d}}{s^{2}+2\sigma s+\sigma^{2}+\omega^{2}_{d}}=\frac{w^{2}}{\omega_{d}} \frac{\omega_{d}}{(s+\sigma)^{2}+\omega^{2}_{d}}$
$\to h(t)=\frac{\omega^{2}_{n}}{\omega_{d}}e^{-\sigma t}\sin(\omega_{d}t)\cdot 1(t) = \frac{\omega_{n}}{\sqrt{ 1-\zeta^{2} }}e^{-\sigma t}\sin(\omega_{d}t)$
$Y(s)=H(s)*U(s)=H(s)* \frac{1}{s} \to y(t) = 1 - e^{-\sigma t}\left( \cos\omega_{d}t + \frac{\sigma}{\omega_{d}}\sin\omega_{d}t \right)$
$\omega_{d}$ time-scaling effect: $Y(s)=\frac{1}{s}\cdot \frac{\omega^{2}_{n}}{s^{2}+2\omega_{n}\zeta s+\omega^{2}_{n}} = \frac{1}{\omega_{n}}\cdot \frac{1}{\frac{s}{\omega_{n}}} \frac{1}{\left( \frac{s}{\omega_{n}} \right)^{2}+2\zeta\left( \frac{s}{\omega_{n}} \right)+1} \to f(\omega_{n}t) \leftrightarrow \frac{1}{\omega_{n}}F(\frac{s}{\omega_{n}})$ 

![[step_response.png]]
> [!note] Properties:
> Rise time $t_{r}$: $\zeta \approx 0.5 \to \omega_{n}t_{r}\approx 1.8$
> Peak time $t_{p}$: $\sin(\omega_{d} t)=0\to t_{p}=\frac{\pi}{\omega_{d}}$
> Overshoot $M_{p}$: $M_{p}=y(t_{p})-1=e^{-\frac{\sigma\pi}{\omega_{d}}} = e^{-\frac{\zeta}{\sqrt{ 1-\zeta^{2} }}\pi}$
> Settling time $t_{s}$: $e^{-\sigma t_{s}}=0.01 \to t_{s} = \frac{4.6}{\sigma}$

> [!important] Theorem
> Final value: $\displaystyle \lim_{ t \to \infty } y(t)=\lim_{ s \to 0^- } sY(s)\to \lim_{ t \to \infty }y(t) = \lim_{ s \to 0 } G(s)$ 
> Initial value: $\displaystyle \lim_{ t \to 0^+ }f(t) = \lim_{ s \to \infty } sF(s)$


Zeroes:

![[step_response_-zeroes.png]]
![[step_response_+zeroes.png]]

$H(s) = \frac{1}{s^{2}+2\zeta s+1}\cdot\left( \frac{s}{\alpha\zeta}+1 \right) = \frac{1}{s^{2}+2\zeta s+1}+\frac{1}{\alpha\zeta}\cdot \frac{s}{s^{2}+2\zeta s+1} = H_{o}+\frac{1}{\alpha\zeta}H_{d}$
> Step response $y_{d}$ of $H_{d}$ is derivative of $y_{0}$ of $H_{0}$

# Feedback Control
Transfer function shortcuts:
![[transfer_function_shortcut.png]]


![[feedback_open.png]]
![[feedback_closed.png]]

Open: $Y=GDR+GW,\ E:=R-Y=(1-GD)R-GW$
Closed: $Y=G(U+W),\ U=D(R-Y-V) \Rightarrow (1+GD)Y=GW+GDR-GDV$
$Y=\frac{GD*R + G*W - GD*V}{1+GD},\ E=R-Y=\frac{R-G*W+GD*V}{1+GD}$


![[feedback_loop_general.png]]


> d: load disturbance
> n: measurement noise
> u: controlled variable
> x: physical output
> y: measured output (with noise)
> F: feed forward
> C=D: controller
> P=G: plant (controllee)

$X=\frac{P}{1+PC}D-\frac{PC}{1+PC}N+\frac{PCF}{1+PC}R$
$Y=\frac{P}{1+PC}D+\frac{1}{1+PC}N+\frac{PCF}{1+PC}R$
$U=-\frac{PC}{1+PC}D-\frac{C}{1+PC}N+\frac{CF}{1+PC}R$

## Stability
Change root of denominator
## Sensitivity
Open: $T=G*D,\ S_{G}^T:=\frac{\delta T}{T}\frac{G}{\delta G} = 1$
Closed: $T=\frac{DG}{1+DG}$
$\delta T=\frac{ dT }{ dG }\delta G=\frac{D(1+DG)-D(DG)}{1+DG}=\frac{D}{(1+DG)^2}\delta G\Rightarrow S^T_{G}=\frac{1}{1+DG}$
## System Type & Steady State Error
$E=\frac{1}{1+GD}R$
System type k: 
- $\displaystyle\lim_{ s \to 0 }sE_{n}(s)=C\neq 0,\ \lim_{ s \to 0 }sE_{k}(s)=0 | R=\frac{1}{s^{k+1}}, k < a$
- $\displaystyle\lim_{ s \to 0 }s^{n}DG=C\neq 0$

## PID
Second-order: $G(s)=\frac{A}{(\tau_{1}s+1)(\tau_{2}s+1)},\ T(s)=\frac{DG}{1+DG}=\frac{D(s)A}{\tau_{1}\tau_{2}s^2+(\tau_{1}+\tau_{2})s+(1+D(s)A)}$
### P
$D(s)=k_{p}\to k_{p} \uparrow \Rightarrow \omega_{n} \uparrow,\zeta\downarrow\ \to$ faster response, less damping
### PI
$D(s)=k_{p}+ \frac{k_{i}}{s},\ T(s)=\frac{G(s)(k_{p}s+k_{i})}{s+G(s)(k_{p}s+k_{i})}$
- $T(0)=1$: zero steady state error for step input
- 1st-order $G(s)=\frac{A}{\tau s+1}: T(s)=\frac{Ak_{p}s+Ak_{i}}{\tau^{2}+(Ak_{p}+1)s+Ak_{i}}\to k_{i}\uparrow \Rightarrow \omega_{n}\uparrow, \zeta \downarrow$
- Disturbance rejection: $T_{WY}=\frac{Y}{W}=\frac{1}{1+DG}=\frac{s}{s+(k+p)s+k_{i}G(s)} \to \lim_{ s \to 0 }T_{WY}=0 \to$ reject constant disturbance
### PD
$D(s)=k_{p}+k_{d}s$
2nd-order $G(s): T(s)=\frac{(k_{p}+k_{d}s)A}{\tau_{1}\tau_{2}s^2+(\tau_{1}+\tau_{2}+k_{d}A)s+(1+Ak_{p})}\to k_{d}\uparrow \Rightarrow \zeta\uparrow \to$ increase damping


![[feedback_pid_effect.png]]