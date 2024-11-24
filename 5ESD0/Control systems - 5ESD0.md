# Summary
![[5ESD0/attachments/5esd0-summary-samenvatting-control-systems.pdf]]
# Notes
![[control-systems-summery.pdf]]
# Module 1: Course Introduction (Modifying open-loop transfer function properties using feedback)
[[Systems - 5ESB0]]
![[find poles zeros.png|500]]
# Module 2: Root Locus (Modifying closed-loop transfer functions using Feedback)
[The Root Locus Rules](https://www.mit.edu/people/klund/weblatex/node8.html)
[(VERY USEFUL) How To Sketch a Root Locus](https://www.youtube.com/watch?v=vckPtXDrEsw)
[Departure Angle Example](https://www.youtube.com/watch?v=L8tqIbO5zbE)
$\text{closed-loop poles of transfer function (k-compensator): }T(s)=\frac{kL(s)}{1+kL(s)}\text{ change when gain }k \text{ changes.}$
![[compensator.png|300]]![[angles og locus.png|300]]
$$1+kL(s)=0\to L(s)=\frac{z(s)\text{ or }b(s)}{p(s)\text{ or }a(s)}\implies p(s)+kz(s)=0\text{ when }k=0\text{ depend on }p(s)\text{ as increases to }\infty \text{ depend on }z(s).$$
$k=\frac{1}{|L(s_{0})|}$
$\angle L(s)_{k>0}=\sum\psi_{i}-\sum\phi_{i}=180 \degree+360\degree(l-1)\text{ where angle of zero: }\psi_{i}\text{ and angle of pole: }\phi_{i}$
$\angle L(s)_{k<0}=\dots=0 \degree+360 \degree(l-1)\dots$
$\text{if } (n)num_{poles}-(m)num_{zeros}\text{ num of poles>zeros loci go to infinity}$
$\text{if } (m)num_{zeros}-(n)num_{poles}\text{ num of zeros>poles loci come from infinity}$
![[root locus rules-3.png]]
> [!NOTE] Departure Angles
> $K>0$
> $q\phi_{l,dep}=\frac{1}{q}(\sum\psi_{i}-\sum\phi_{i\neq l,dep}-180 \degree-360 \degree(l-1))\text{ where }l=1,2,\dots,q\text{ where }q:\text{repeated poles (on same position eg -1, -1)}$
> $q\psi_{l,arr}=\frac{1}{q}(\sum\phi_{i}-\sum\psi_{i\neq l,arr}+180 \degree+360 \degree(l-1))\text{ where }l=1,2,\dots,q\text{ where }q:\text{repeated zeros (on same position eg -1, -1)}$
> 
> $K<0$
> *same just without $180 \degree$*
# Module 3: Frequency Response Functions / Bode Diagrams (Understanding the relevance of frequency-domain control-design methods and frequency-responses on Bode plots)
[Final Exam Tutorial - Bode Plot Example - YouTube](https://www.youtube.com/watch?v=FvvArII7afo&list=WL&index=261)

[Bode Plots by hand](https://web.mit.edu/2.010/www_f00/psets/hw2_dir/tutor2_dir/tut2_e.html)
[Bode Plots Explained - YouTube](https://www.youtube.com/watch?v=PF4fSRwPk5I)
[ChatGPT](https://chatgpt.com/c/67253787-ac1c-800b-8435-361542271571)
$\text{gain: }M=|G(j\omega_{o})|=|G(s)|_{s=j\omega_{o}}=\sqrt{ \{Re[G(j\omega_{o})]\}^2+\{Im[G(j\omega_{o})]\}^2 }$
$\text{phase: }\tan^{-1}\left[ \frac{Im[G(j\omega_{o})]}{Re[G(j\omega_{o})]} \right]=\angle G(j\omega_{o})$
$|G(j\omega)|=\frac{|Numerator|}{|Denominator|}$
$\angle G(j\omega)=\angle Numerator - \angle Denominator$



$\text{polar form: }G(j\omega_{o}=Me^{j\phi})$
$G(j\omega)=\frac{\vec{s_{1}} \vec{s_{2}}}{\vec{s_{3}}\vec{s_{4}}\vec{s_{5}}}=\frac{r_{1}e^{j\theta_{1}}r_{2}e^{j\theta_{2}}}{r_{3}e^{j\theta_{3}}r_{4}e^{j\theta_{4}}r_{5}e^{j\theta_{5}}}=\left( \frac{r_{1}r_{2}}{r_{3}r_{4}r_{5}} \right)e^{j\theta_{1}+\theta_{2}-\theta_{3}-\theta_{4}-\theta_{5}}\text{ where }\vec{}\text{ means phasor}$

$|G(j\omega)|=\frac{r_{1}r_{2}}{r_{3}r_{4}r_{5}}$
$\log_{10}|G(j\omega)|=\log_{10}r_{1}+\log_{10}r_{2}-\log_{10}r_{3}-\log_{10}r_{4}-\log_{10}r_{5}$
$\angle G(j\omega)=\theta_{1}+\theta_{2}-\theta_{3}-\theta_{4}-\theta_{5}$

$\log_{10}Me^{j\phi}=\log_{10} M+j\phi \log_{10}e$
$A_{P(dB)}=20\log_{10} A_{P(ratio)}\text{ then }A_{P(ratio)}=10^{A_{P(dB)}/20}$
$$\text{example: }|KG(j\omega)|_{db}=20\log|K_{o}|+20\log|j\omega \tau_{1}+1|-20\log|(j\omega)^2|-20\log|j\omega \tau_{a}+1|\text{ based from }KG(j\omega)=K_{o} \frac{j\omega \tau_{1}+1}{(j\omega)^2(j\omega \tau_{a}+1)}$$

$\text{closed loop bode form: }KG(j\omega)=K_{o}(j\omega)^n \frac{(j\omega \tau_{1}+1)(j\omega \tau_{2}+1)\dots}{(j\omega \tau_{a}+1)(j\omega \tau_{b}+1)\dots}$

$\text{class 1: }K_{0}(j\omega)^n\to \log K_{o}|(j\omega)^n|=\log K_{o}+n\log|j\omega|$

$\text{class 2: }(j\omega \tau+1)^{\pm1}$
	$\text{for }\omega \tau\ll 1,\text{magnitude: }|j\omega \tau+1| \approx1(0db)\text{ and phase: }\angle 1=0 \degree$
	$\text{for }\omega \tau\gg 1,\text{magnitude: }|j\omega \tau+1|\approx |j\omega \tau|=|\omega \tau|=\pm20dB \text{ and phase: }\angle j\omega \tau=90 \degree$
	$\omega \tau \approx 1,\text{magnitude: }|j\omega \tau+1|\approx \sqrt{ 2 }(3db) \text{ and phase: } \angle(j\omega+1)\approx45 \degree$
	$\text{break point: }\omega=\frac{1}{\tau}$
	$\text{magnitude asymptote deviations: }\pm3db$
	$\text{phase asymptote deviations: }\pm11 \degree$
	$\text{magnitude slope: }\pm20db$
	$\text{phase slope: }\pm90 \degree$

$\text{class 3: }\left( \left( \frac{j\omega}{\omega_{n}} \right)^2 + 2\zeta  \frac{j\omega}{\omega_{n}} +1 \right)^{\pm_{1}}$
	$\text{for }\omega \ll \omega_{n},\text{magnitude: }\left| \left( \frac{j\omega}{\omega_{n}} \right)^2 + 2\zeta  \frac{j\omega}{\omega_{n}} +1 \right| \approx1(0db)\text{ and phase: }\angle 1=0 \degree$
	$\text{for }\omega \gg \omega_{n},\text{magnitude: }\left| \left( \frac{j\omega}{\omega_{n}} \right)^2 + 2\zeta  \frac{j\omega}{\omega_{n}} +1 \right| \approx |\frac{\omega}{\omega_{n}}|^2=\pm40dB \text{ and phase: }\angle |\frac{\omega}{\omega_{n}}|^2 =180 \degree$
	$\text{for }\omega \approx \omega_{n},\text{magnitude: }\left| \left( \frac{j\omega}{\omega_{n}} \right)^2 + 2\zeta  \frac{j\omega}{\omega_{n}} +1 \right| \approx 2\zeta\text{ and phase: }\angle 2\zeta=90 \degree$
	
	$\text{break point: }\omega=\omega_{n}$
	$\text{magnitude asymptote deviations: } \frac{1}{2\zeta}\text{ so }=\pm 20\log(2 \zeta)$
	$\text{magnitude slope: }\pm40db$
	$\text{phase slope: }\pm180 \degree$

![[bode plot sketching.png]]![[Pasted image 20240926200943.png]]

![[bodep lot showcase difference between in and output.png|400]]
[Bode Plots Explained - YouTube](https://www.youtube.com/watch?v=PF4fSRwPk5I)
# Module 4: Nyquist Stability & Stability Margins (Assessing closed-loop stability and its robustness via Nyquist plots)
**Cauchy’s argument principle**
- A clockwise contour map of a complex function will encircle the origin $N = Z - P$ times, with $Z$ the number of zeros and $P$ is the number of poles of the function inside the contour.
- Control Design: 1) Zeros of $1+KG(s)$ are closed-loop poles, 2) contour of interest is one the covers the RHP.
- Encirclements of $1 + KG(s)$ around the origin is equal to encirclements of $KG(S)$ around -1.

$\text{Nyquist stability criterion: }Z=N+P$
- $Z$ is the number of RHP zeros of $1+KG(s)$ (i.e, the closed-loop poles).
- $N$ is the number of (clockwise) encirclements of the point −1.
- $P$ is the number of RHP (unstable) poles of $KG(s)$.
![[nyquist stability criterion.png|500]]
![[example of nyquist.png|500]]
$\text{gain margin GM: }\omega \text{ where }\angle G(j\omega)=-180 \degree$
$\text{exmaple GM: } \frac{1}{|G(j0)|}=\frac{1}{10}=-20dB$
$\text{phase margin PH: }\omega \text{ where }|G(j\omega)|=1$
$\text{example PH: }\angle G(j0)=\arctan\left( \frac{12\omega}{-\omega^2+20} \right)=0\text{ so }180\pm0=180 \degree\text{ phase margin}$
thee amount by which the phase can be decreased before reaching instability.

![[marins on nyquist.png|300]]![[margins on bode.png|300]]
$\zeta=\frac{PM}{100}$
[Phase and Gain Margins Example](https://chatgpt.com/c/66f98307-c858-800b-8e5a-0c97adddc9f8)
[Final Exam Tutorial - Nyquist Plot Example - YouTube](https://www.youtube.com/watch?v=lZbUp-ywSq8)
![[stability criteria.png|500]]
$N_{CCW}=P_{rhp}=0\text{ so the system is stable for }K=1$
![[margins.png|300]]![[gain phase margins.png|300]]
![[nyquist.png|300]]![[nyquist2.png|300]]
# Module 5: Frequency Response Controller Design (Designing single-input-single-output feedback controllers by shaping the open-loop frequency-response function)
## performance specifications
$L(s)=D(s)G(s)$
how to tune D for L.
Design feedback controller using open loop response functions.

gain margin is a margin of gain that can be applied to a system since systems IRL can vary a margin is good to have since some have stronger or weaker gain due to mechanical wear-outs.

adding more than needed amount of integrator poles effects the phase margin and puts more requirements on the lead/lag compensator.
### stability margins
Nyquist plot, having a certain PM and GM
![[closed loop stability.png|400]]
### steady state error tracking
controlled by system type.
steady state error -> 0 if slope of the bode diagram of L(s) is steep.
![[fvt.png|400]]
### overshoot
enough phase margin
![[overshoot-1.png|400]]
![[damping to limit overshoot.png|400]]
### closed loop bandwidth
crossover frequency $\omega_{c}$ of $L(j\omega)$
$\omega_{c}\leq \omega_{BW}\leq 2\omega_{c}$
![[bandwidth.png|400]]
![[uncertainty bound.png|400]]
![[bandwidth response.png|400]]
## compensators
![[compensators.png]]
![[lead filter.png]]
![[lag filter.png]]
$T_{I}=\frac{1}{\omega_{Z}}=\frac{1}{0.1\cdot \omega_{c}}\text{ to avoid problems of phase lag we take the phase a decade after it}$
## lead lag intuitive understanding
**lead:** adds phase lead to the system increasing gain (between zero -> pole)
(typical goal to provide gain in high frequency range).

**lag:** adds phase lag to the system decreasing gain (between pole -> zero) 
(typical goal to provide gain in low frequency range).

(max $55 \degree$ phase margin)
![[pid vs compensators.png|400]]

lead lag compensators
$\frac{\omega_{p}}{\omega_{z}}\frac{s+\omega_{z}}{s+\omega_{p}}\text{ where Gain K: } \frac{\omega_{p}}{\omega_{z}}$ 1 pole and 1 zero
$\text{lead: }\omega_{z}<\omega_{p}\text{ and lag: }\omega_{z}>\omega_{p}$
zeros add $90 \degree$ of phase and amplify high frequencies
poles subtract $90 \degree$ and attenuate high frequencies

example of lead (opposite for lag), cancels if pole zero at same:
![[lead compensator.png|400]]
![[lead compenstaor.png|400]]
lead/lag: to amplify at lower and attenuate at higher...
[Designing a Lead Compensator with Bode Plot - YouTube](https://www.youtube.com/watch?v=rH44ttR3G4Q)
[Designing a Lag Compensator with Bode Plot - YouTube](https://www.youtube.com/watch?v=-4bY4W0hvFA)
![[20241012_231149.jpg]]
![[20241014_135139.jpg]]
![[further.png]]
$lead:\omega_{c}>lag:\omega_{c}$ which means natural frequency in lead is higher which implies faster response and therefor shorter rise and settling times. which we can see above.
usually lead filter have higher cross over frequency...
![[interpretation.png]]
$\omega_{BW}=2\omega_{c}\to \omega_{n}=0.5\omega_{BW}\to t_{s}\approx \frac{4.6}{\zeta \omega_{n}}\to t_{r}= \frac{1.8}{\omega_{n}}$
### other compensator pics
![[Control systems - 5ESD0.png|300]]![[la.png|300]]
![[lead compensator1.png|400]]
![[lead compensator2.png|400]]
![[lag compensator.png|400]]

# Module 6: Fundamental Limitations in Control Design (Identifying the limitations of linear control design, and the trade-off between disturbance rejection and sensor noise amplification)
### General knowledge
$\text{disturbance: }w\text{ reference: }r\text{ measure noise: }n$
$y=\frac{1}{1+L}w+\frac{L}{1+L}(r-n)\text{ where }S=\frac{1}{1+L}\text{ and }T=\frac{L}{1+L}\text{ and the goal is to have both low}$
$S(\text{sensetivity})+T(\text{complementary sensetivity})=1$

By analyzing the sensitivity function in the logarithmic bode scale we have derive robustness and performance limitations.

If I want to reduce sensitivity with regards to tracking references, then I can make system susceptible to measurement noise.
### Peak of sensitivity and how it relates to nyquist
![[pak of sensetivity function.png|400]]
The **peak of the sensitivity** function represents how much the system amplifies disturbances. It is the reciprocal of the smallest distance from the Nyquist plot to the critical point $-1$, which indicates the system's proximity to instability. If the plot gets close to $-1$, the system becomes sensitive to disturbances, meaning a higher peak value.
### Bode sensitivity integral
![[bode sensitivity integral.png|400]]
![[bode sensitivity integral-1.png|400]]
improving characteristics in one range make them worse in the other range...
**Cauchy's integral**:
$\int_{-j\infty}^{j\infty} \ln \left| S(s) \right| ds + \int_{\Gamma_{\infty}} \ln \left| S(s) \right| ds$
numeric effects when placing poles or zeros in specific spots based on waterbed effect...
### Control system types
![[sensetivity-1.png|400]]
![[closed loop transfer functions.png|400]]
$\text{disturbance: }w\text{ reference: }r\text{ measure noise: }n$
$w\to y:3:\text{see RHP Poles below to improve}:D \uparrow$
$n\to y:2:D \downarrow$

sensitivity is looked at when asked about maximal disturbance $w$ amplification.
complemetary sensitivity is looked at when asked about maximal disturbance $n$ amplification.

overall: 
fight disturbances $w,v$ D controller should be large...
fight measurement noise $n$ D controller should be small...
### Performance Limitations of Right Half Plane (RHP) Zeros
![[performance of limitations of RHP zeros.png|400]]
![[sensetivity constraint.png|400]]
- **Explanation:** When there are RHP zeros, closed-loop poles eventually approach these zeros as the loop gain increases. This causes limitations in control performance, especially at higher frequencies.
- **Math:**
  $$
  u = \frac{D}{1 + DG} r \approx 
  \begin{cases} 
  \frac{1}{G} r & \text{for} \ \omega > \omega_c \ (\text{undesirable as } G \text{ is unstable}) \\
  D r & \text{for} \ \omega < \omega_c \ (\text{desired region})
  \end{cases}
  $$

### Performance Limitations of Right Half Plane (RHP) Poles
![[performance limitations of RHP poles.png|400]]
![[complementary sensetivity.png|400]]
- **Explanation:** RHP poles require a minimal gain for stability. As frequency approaches the RHP pole, the system needs higher bandwidth to maintain stability.
- **Math:**
  $$
  y = \frac{G}{1 + DG} w \approx 
  \begin{cases} 
  G w & \text{for} \ \omega > \omega_c \ (\text{undesirable as system becomes unstable}) \\
  \frac{1}{D} w & \text{for} \ \omega < \omega_c \ (\text{desired region})
  \end{cases}
  $$
### exercise
![[20241019_185055.pdf]]
![[analyzing sensitivity.png|300]]![[5ESD0/attachments/sensitivity.png|300]]
# Module 7: State-Space Models (Understanding the relevance of state-space control design, and the analysis of the state-space equations)
[State-space representation - Wikipedia](https://en.wikipedia.org/wiki/State-space_representation)
[[Math I - 2DE20]]
transpose, product, inverse, rank, eigenvalues, eigenvectors
### deriving state space models
Simulation Diagram, Modal Decomposition, Control Canonical Form.
$\dot{x}=Ax+Bu\text{ and }y=Cx+Du$
$x\text{ state vector }x(t) \in R^n\text{ and }\dot{x}(t):= \frac{d}{dt}x(t)$
$y\text{ output vector }y(t)\in R^q$
$u\text{ input vector }u(t)\in R^p$
$A\text{ state matrix }dim[A]=n \times n$
$B\text{ input matrix }dim[B]=n \times p$
$C\text{ output matrix }dim[C]=q \times n$
$D\text{ feedforward matrix }dim[D]=q \times p$

![[state space analysis-2.png|400]]
![[state space analysis diagram.png|400]]
[block diagram to state space - YouTube](https://www.youtube.com/watch?v=ifbAijeblKE)
### state space analysis
TF from SS: $x=Ax+Bu\to sIx-Ax=Bu \leftrightarrow(sI-A)x=Bu$
$y=Cx+Du\to y=(C(sI-A)^{-1}B+D)u$
$\text{Transfer functon from State Space: }G(s)=C(sI-A)^{-1}B+D$

- poles of the transfer function are the eigenvalues of the system matrix 
![[state space analysis-3.png|500]]
![[controllability matrix.png|400]]
![[controllable observable.png|500]]
![[controllable observanble.png|500]]
controllability: reach a specific state (not maintain)
observability: core states in A matrix


$$
T = [t_1 \ ... \ t_n]
$$

$$
t_n = [0 \ ... \ 0 \ 1] [B \ AB \ ... \ A^{n-1}B]^{-1}
$$

$$
T^{-1} = \begin{bmatrix} 
t_n A^{n-1} \\
... \\
t_n A \\
t_n
\end{bmatrix}
$$

$$
\text{Poles:} \quad s \text{ for which } \det(sI - A) = 0
$$

$$
\text{Zeros:} \quad s \text{ for which } \det\begin{bmatrix} sI - A & -B \\ C & D \end{bmatrix} = 0
$$


$T=[B_{c}\text{ }A_{c}B_{c}][B_{m}\text{ }A_{m}B_{m}]^{-1}$
**if you look above $A_{m}=\bar{A}\text{ etc...}$**

**we mainly work with control canonical form but there is also observer canonical form**
### linearisation of SS models
- $\text{linearisation of nonlinear models: }\dot{x}=f(x,u)$
- Write $x=x_{0}+x_{\delta}\text{ and }u=u_{0}+u_{\delta}\text{ and define equilibrium point }0=f(x_{0},u_{0})$
- Use taylor series to obtain: $\dot{x_{\delta}}=Ax_{\delta}+Bu_{\delta}$
	- $A=\frac{\delta f(x,u)}{\delta x}|_{x_{0},u_{0}}\text{ and }B=\frac{\delta f(x,u)}{\delta u}|_{x_{0},u_{0}}$
### extra
![[state space.png|300]]![[example of finding transfer function.png|300]]
![[exercise in T symmtery matrix.png|300]]![[poles and zeros.png|300]]
# Module 8: State-Space Control Design (Designing state-space controllers via the pole-placement)
$\text{eigenvalues}(A)=\text{poles of the system}\to \text{location dictates stability}$
pole placement is a fancy root locus with placement across matrix not just locus lines...
![[system design.png|400]]
## 8.1 Recap Eigenvalues / Eigenvectors / Determinants
- **Eigenvector condition**: For $Ax = \lambda x$, vector $x$ is an eigenvector if it satisfies $Ax = \lambda x$.
- **Eigenvalue computation**: $(A - \lambda I)x = 0$ (non-trivial $x$) → **solve** $\det(A - \lambda I) =\det(\lambda I-A)= 0$.
- **Key points**:
  - Eigenvalue $\lambda$: scalar associated with eigenvector $x$.
  - Eigenvector $x$ is in the **nullspace** of $A - \lambda I$.
## 8.2 State-Space Control Design
- **Plant model**: $\dot{x} = Ax + Bu$, $y = Cx$
- **State Feedback**: $u = -K\hat{x} + Nr$
- **State Observer**:
  - $\dot{\hat{x}} = (A - BK)\hat{x} + L(y - \hat{y}) + Mr$
  - $\hat{y} = C\hat{x}$
- **Integral Action (when $N = 0$)**:
  - $\dot{x}_I = y - r$
  - $u = -K_I x_I - K \hat{x}$
## 8.3 Controllability / Observability
- **Controllability**: Ability to control each state (actuator/sensor location).
- **Controllability Matrix** $\Gamma$:
  $\Gamma = [B \quad AB \quad \dots \quad A^{n-1}B]$
- **Observability Matrix** $\Omega$:
  $\Omega = \begin{bmatrix} C \\ CA \\ \vdots \\ CA^{n-1} \end{bmatrix}$
- **Conditions**:
  - **Controllable** if $\text{rank}(\Gamma) = n$
  - **Observable** if $\text{rank}(\Omega) = n$
## 8.4 State Feedback
![[state feedback vs state observer.png|500]]
![[full output feedback.png|500]]
- **Controller Design**: $u = -Kx + Nr$ to achieve $\dot{x} = (A - BK)x + BNr$.
- **Design of Matrix $K$**:
  - Transform plant to **control canonical form**.
  - Use desired characteristic polynomial $(s - \gamma_1)\dots(s - \gamma_n)$.
  - Compute $K = \hat{K} T^{-1}$, or use MATLAB `place` command.
- **Matrix $N$** for steady-state reference tracking:
  $N = N_u + KN_x$
  where $\begin{bmatrix} N_x & N_u \end{bmatrix} = \begin{bmatrix} A & B \\ C & 0 \end{bmatrix}^{-1} \begin{bmatrix} 0 \\ 1 \end{bmatrix}$
## 8.5 Observer Design
- **Controller Equations**:
  - $\dot{\hat{x}} = (A - BK - LC)\hat{x} + Ly + Mr$
  - $u = -K\hat{x} + Nr$
- **Observation Error**: $\dot{\tilde{x}} = (A - LC)\tilde{x} + (BN - Mr)$

- **Matrix $L$**: Controls transient response of observation error.
  - **Duality** of control and estimation: closed-loop poles of $\dot{w} = (A^T - C^T L^T)w$
  - **Separation Property**: Stable state feedback + stable estimation error = stable closed-loop.

- **Matrix $M$** for tracking:
  - If $M = BN$, estimation error is independent of reference.
  - Set $N = 0$ and $M = -L$ for "classical control scheme".
## 8.6 Reference Tracking
$\text{zero steady state error: }\dot{x}=0$
$\text{zero offset: }r=y$
- **State Feedback**: $u = -Kx + Nr$
  - No feedback path with $N \neq 0$; **no integral action**.
- **Inexact Plant Model Tracking**:
  - Augment plant with integrator:
    $\dot{x} = \begin{bmatrix} 0 & C \\ 0 & A \end{bmatrix} x + \begin{bmatrix} 0 \\ B \end{bmatrix} u + \begin{bmatrix} 1 \\ 0 \end{bmatrix} r$
- **Controller Structures**:
  - **Case 1**: $N = N_u + KN_x$ and $M = BN$:
    - $\dot{\hat{x}} = (A - BK - LC)\hat{x} + Ly + BNr$
    - $u = -K\hat{x} + Nr$
  - **Case 2**: $N = 0$ and $M = -L$:
    - $\dot{\hat{x}} = (A - BK - LC)\hat{x} + L(r - y)$
    - $u = -K\hat{x}$
  - **Case 3**: $N = 0$, $M = 0$, add integral action:
    - $\dot{x}_I = y - r$
    - $\dot{\hat{x}} = (A - BK - LC)\hat{x} + Ly$
    - $u = -K_I x_I - K\hat{x}$
# Module 9: Digital Control (Addressing the limitations of controller design due to sampling, and the limitation of experimental platforms)
[Discrete control #5: The bilinear transform - YouTube](https://www.youtube.com/watch?v=88tWmyBaKIQ)
![[z transform table.png|300]]![[s and z plane comparison.png|300]]
![[z plane control systems.png|300]]![[artifacts in dc.png|300]]
The s-domain's left half-plane maps to the area inside the z-domain's unit circle, while the s-domain's right half-plane maps to the area outside of the z-domain's unit circle.
## 9.1 Artifacts Introduced in Digital Control
- **Sensor quantization**: perceived as noise.
- **Zero-Order Hold (ZOH)** creates a delay of $T/2$.
  - **Transfer function** of this delay: $H(s) = e^{-sT/2}$
  - **Linear phase shift**: $\angle H(j\omega) = -\frac{180}{\pi} \frac{T}{2} \omega$
  - **Approximation**:
    - $H(s) = \frac{1}{e^{sT/2}} \approx \frac{2/T}{s + 2/T}$
    - $H(s) = \frac{e^{-sT/4}}{e^{sT/4}} \approx \frac{4/T - s}{4/T + s}$
  - **Rule of thumb**: Choose sample frequency $\omega_s = \frac{2\pi}{T} > 40\omega_c > 20\omega_{BW}$
## 9.2 The Z-domain
- **Stability**: Unit circle instead of Left-Hand Plane.
- **Mapping**:
  - $z$ represents a forward time shift, $s$ is a derivative in Laplace.
## 9.3 Three Different Mappings
- **Matched pole-zero**: $z = e^{sT}$ (rarely used).
- **ZOH**: Used for discretizing plant to create discrete-time controller.
  - Solve $G(z) = \frac{z-1}{z} Z\left(\frac{G(s)}{s}\right)$.
  - Compute $\frac{G(s)}{s}$, then do partial fraction expansion.
- **Tustin**: Used for discretizing controller.
  - Replace $s \rightarrow \frac{2}{T} \frac{z-1}{z+1}$
  - **Lead/lag filter**:
    - $D(s) = \frac{\tau_s s + 1}{\tau_s s + 1} \Rightarrow D(z) = \frac{\left(\tau_s + T/2\right)z + T/2 - \tau_1}{\left(\tau_s + T/2\right)z + T/2 - \tau_a}$
## 9.4 Two Different Design Approaches
1. **Design CT controller, then discretize**:
   - Take sampling delay into account (increases phase margin, PM).
   - Use $\omega_s \approx 20\omega_{BW}$.
   - Discretize controller using Tustin/Bilinear transform.
2. **Discretize CT plant to DT, then design DT controller**:
   - **Example**:
     - $G(s) = \frac{1}{s+a}$, let $G(s) = \frac{1}{s(s+a)} = \frac{1}{a} \left(\frac{1}{s} - \frac{1}{s+a}\right)$ and $G(z) = \frac{z-1}{z} \left(\frac{z}{z-1} - \frac{z}{z - e^{-aT}}\right)$.
   - Sampling delay is considered; DT is not stable for all $K$ because of sampling (in CT: RHP zero).
   - Design controllers using standard techniques (Root locus, Nyquist, loop shaping).
## 9.5 Compensation in Discrete-Time
- **Proportional compensation**:
  - CT: $D_c(s) = K_p$
  - DT: $D_c(z) = K_p$
  - Apply ZOH rules.
- **Derivative compensation**:
  - CT: $D_c(s) = K_D s$
  - DT: $D_c(z) = K_D \frac{z-1}{z}$
  - Apply ZOH rules.
- **Integral compensation**:
  - CT: $D_c(s) = \frac{K_I}{s}$
  - DT: $D_c(z) = K_I \frac{z}{z-1}$
  - Apply ZOH rules.
- **Lead/lag compensation**:
  - CT: $D_c(s) = \frac{\tau_1 s + 1}{\tau_a s + 1}$
  - DT: $D_c(z) = K \frac{z - \alpha}{z - \beta}$
  - The relation between $(\tau_1, \tau_b) \rightarrow (\alpha, \beta, \kappa)$ is not straightforward but not critical for design.
