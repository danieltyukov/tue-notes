# Schedule
![[schedule-1.png|300]]![[5XTC0/attachments/schedule.png|300]]
# Overview
![[Concept structure.png|600]]
![[analogue system.png|300]]![[digital system.png|300]]
![[how decibels work.png|400]]
[S-Parameters for Antennas (S11, S12, ...)](https://www.antenna-theory.com/definitions/sparameters.php#:~:text=S%2Dparameters%20describe%20the%20input,Port%201%20to%20Port%202.)

# Transmission Lines

![[5XTC0_Lecture_Module1_TL-Theory_2025.pdf]]

>[!NOTE] Formulas
> **Telegrapher Equations (Time Domain):**  
> $\frac{\partial v(z,t)}{\partial z} = -R i(z,t) - L \frac{\partial i(z,t)}{\partial t}$  
> $\frac{\partial i(z,t)}{\partial z} = -G v(z,t) - C \frac{\partial v(z,t)}{\partial t}$
> 
> **Telegrapher Equations (Frequency Domain):**  
> $\frac{dV(z)}{dz} = -(R + j\omega L) I(z)$  
> $\frac{dI(z)}{dz} = -(G + j\omega C) V(z)$
> 
> **Wave Equations (Voltage and Current):**  
> $\frac{d^2 V(z)}{dz^2} = \gamma^2 V(z)$  
> $\frac{d^2 I(z)}{dz^2} = \gamma^2 I(z)$  
> where $\gamma = \alpha + j\beta = \sqrt{(R + j\omega L)(G + j\omega C)}$
> 
> **General Solution (Wave Propagation):**  
> $V(z) = V_0^+ e^{-\gamma z} + V_0^- e^{\gamma z}$  
> $I(z) = I_0^+ e^{-\gamma z} + I_0^- e^{\gamma z}$
> 
> **Characteristic Impedance:**  
> $Z_0 = \sqrt{\frac{R + j\omega L}{G + j\omega C}}$  
> For lossless lines: $Z_0 = \sqrt{\frac{L}{C}}$
> 
> **Lossless Line Parameters:**  
> $\gamma = j\beta$  
> $\beta = \omega \sqrt{LC}$  
> $v_p = \frac{1}{\sqrt{LC}}$  
> $\lambda = \frac{2\pi}{\beta}$
> 
> **Reflection Coefficient at Load:**  
> $\Gamma = \frac{Z_L - Z_0}{Z_L + Z_0}$
> 
> **Voltage and Current on Terminated Line:**  
> $V(z) = V_0^+ \left(e^{-j\beta z} + \Gamma e^{j\beta z}\right)$  
> $I(z) = \frac{V_0^+}{Z_0} \left(e^{-j\beta z} - \Gamma e^{j\beta z}\right)$
> 
> **Input Impedance at Distance $l$ from Load:**  
> $Z_{in} = Z_0 \frac{Z_L + j Z_0 \tan(\beta l)}{Z_0 + j Z_L \tan(\beta l)}$
> 
> **Quarter-Wave Transformer Matching Condition:**  
> $Z_{in} = \frac{Z_0^2}{Z_L}$  
> if line length $l = \frac{\lambda}{4}$
> 
> **Transmission Coefficient:**  
> $T = \frac{2 Z_1}{Z_1 + Z_0}$
> 
> **Insertion Loss (dB):**  
> $IL = -20 \log|T| + 10 \log\left(\frac{Z_1}{Z_0}\right)$
> 
> **Smith Chart Reflection Phase Relation:**  
> $\Gamma(z = l) = \Gamma(z = 0) e^{-2j\beta l}$


## other

![[types of transmission lines.png|300]]![[lumped element circuit model of a transmission line.png|300]]

## Telegrapher equations
**KVL and KCL:**
$v(z,t) - R\Delta z i(z,t) - L\Delta z \frac{\partial i(z,t)}{\partial t} - v(z+\Delta z, t) = 0$
$i(z,t) - G\Delta z v(z+\Delta z, t) - C\Delta z \frac{\partial v(z+\Delta z, t)}{\partial t} - i(z+\Delta z, t) = 0$

**Time domain:**
**$\text{Divide by }\Delta z\text{ and take limit }\Delta z\to 0:$**

$\frac{\partial v(z,t)}{\partial z} = -R i(z,t) - L \frac{\partial i(z,t)}{\partial t}$
$\frac{\partial i(z,t)}{\partial z} = -G v(z,t) - C \frac{\partial v(z,t)}{\partial t}$

**Frequency domain:**
**$\frac{\partial v(z,t)}{\partial t} \leftrightarrow j\omega V(z):$**

$\frac{\partial V(z)}{\partial z} = -(R + j\omega L) I(z)$
$\frac{\partial I(z)}{\partial z} = -(G + j\omega C) V(z)$

## Wave propagation on a transmission line
$V(z)=-\frac{1}{G+j\omega C} \frac{\delta I(z)}{\delta z}$ and $\frac{\delta^2I(z)}{\delta z^2}=(R+j\omega L)(G+j\omega C)=\gamma I(z)$
solving the above further the telegraph equations produce:
$V(z) = V_0^+ e^{-\gamma z} + V_0^- e^{\gamma z}$ and $I(z) = I_0^+ e^{-\gamma z} + I_0^- e^{\gamma z}$
**complex propagation constant:** $\gamma=\alpha+j\beta=\sqrt{ (R+j\omega L) (G+j\omega C)}$ where $a$ is **attenuation** and $\beta$ is **phase** constant.


>[!NOTE] Wave propagation on Tline
>The voltage and current along a transmission line can be expressed as the sum of forward and backward traveling waves:
>
>$V(z) = V_0^+ e^{-\gamma z} + V_0^- e^{\gamma z}$
>$I(z) = I_0^+ e^{-\gamma z} + I_0^- e^{\gamma z}$
>
>### Derivation of the Voltage Equation
>The spatial derivative of voltage along the transmission line is given by:
>
>$\frac{\partial V(z)}{\partial z} = -\gamma V_0^+ e^{-\gamma z} + \gamma V_0^- e^{\gamma z}$
>
>Using the Telegrapher’s equations, this is also equal to:
>
>$\frac{\partial V(z)}{\partial z} = -(R + j\omega L) I(z)$
>
>Substituting $I(z)$:
>
>$= -(R + j\omega L) I_0^+ e^{-\gamma z} - (R + j\omega L) I_0^- e^{\gamma z}$
>
>### Expressing Current Components in Terms of Voltage
>From the above equation, we can solve for $I_0^+$ and $I_0^-$:
>
>$I_0^+ = \frac{\gamma}{R + j\omega L} V_0^+$
>$I_0^- = \frac{-\gamma}{R + j\omega L} V_0^-$
>
>### Characteristic Impedance of the Transmission Line
>The ratio of voltage to current defines the characteristic impedance:
>
>$Z_0 = \frac{V_0^+}{I_0^+} = -\frac{V_0^-}{I_0^-} = \frac{R + j\omega L}{\gamma} = \sqrt{\frac{(R + j\omega L)}{(G + j\omega C)}}$
>
>$Z_0$ is the **characteristic impedance** of the transmission line, which determines how waves propagate and reflect along the line.

## The lossless transmission line
![[Lossless transmission line simplification.png|200]]

$\text{since R=0 and G=0: }\gamma=j\beta=j\omega \sqrt{ LC }\implies Z_{0}=\sqrt{ \frac{L}{C} }$

**Total voltage and current:**
$V(z) = V_0^+ e^{-j\beta z} + V_0^- e^{j\beta z}$      $I(z) = \frac{V_0^+}{Z_0} e^{-j\beta z} - \frac{V_0^-}{Z_0} e^{j\beta z}$
**Total voltage and current at the load at $z=0$:**
$Z_L = \frac{V(0)}{I(0)} = \frac{V_0^+ + V_0^-}{V_0^+ - V_0^-} Z_0$
**Special cases:**
$Z_{L}=Z_{0}\to \Gamma=0,\text{ }Z_{L}=0\to \Gamma=-1,\text{ }Z_{L}=\infty\to \Gamma=1$
**short circuit load:** $Z_{L}=0$ **open ended load:** $Z_{L}=\infty$ **matched load:** $Z_{L}=Z_{0}$

**Rewriting:**
$V_0^- = \frac{Z_L - Z_0}{Z_L + Z_0} V_0^+$   $\Gamma = \frac{V_0^-}{V_0^+} = \frac{Z_L - Z_0}{Z_L + Z_0}$ **reflection coefficient**

>[!NOTE] Terminated Transmission Line Equations
>connected a resistance at the end of transmission line, so pulse sees same impedance at the end as it did propagating.
>$\Gamma(z=0)=\frac{V_{0}^-}{V_{0}^+}=\frac{Z_{L}-Z_{0}}{Z_{L}+Z_{0}}$
>$\Gamma(z=-l)=\frac{V_{0}^-e^{-j\beta l}}{V_{0}^+e^{j\beta l}}=\Gamma e^{-2j\beta l}$
>$\Gamma=\Gamma(z=0)$
>
>$Z_{in} = \frac{V(z=-l)}{I(z=-l)} = \frac{V_0^+ \left[ e^{j\beta l} + \Gamma e^{-j\beta l} \right]}{V_0^+ \left[ e^{j\beta l} - \Gamma e^{-j\beta l} \right]} Z_0=$
>$Z_{in}(z=-l)=Z_{0} \frac{Z_{L} + jZ_{0}\tan \beta l}{Z_{0}+jZ_{L}\tan \beta l}$
>
>$\omega =2\pi f$
>
>$\lambda=\frac{2\pi}{\beta}=\frac{2\pi}{\omega \sqrt{ LC }}=\frac{c}{f},f=\frac{c}{\lambda}= \frac{1}{2\pi \sqrt{ LC }} \text{ and phase velocity: }v_{p}=\frac{\omega}{\beta}=\frac{1}{\sqrt{ LC }}$
>
>![[terminated transmission line.png|300]]

**LC lumped element (resonator) as load:**
$\text{inductor impedance: }Z_{L}=j\omega L$
$\text{capacitor impedance: } Z_{C}=\frac{1}{j\omega C}$
$\text{total: }Z_{LC}=Z_{L}+Z_{C}$
$Z_{total}=Z_{LC}||R\implies \frac{Z_{LC} \times R}{Z_{LC } +R}$
$\Gamma=\frac{Z_{total}-Z_{0}}{Z_{total}+Z_{0}}$
![[LC lumped element resonator as load.png|250]]


>[!NOTE] Insertion Loss
>Insertion loss quantifies the power loss when two transmission lines with different characteristic impedances are connected.
>
>### Transmitted Wave for $z > 0$:
>$V(z) = V_0^+ T e^{-j\beta z}$
>where $T$ is the transmission coefficient.
>
>### Transmission Coefficient:
>$T = 1 + \Gamma = 1 + \frac{Z_1 - Z_0}{Z_1 + Z_0} = \frac{2Z_1}{Z_1 + Z_0}$
>This equation determines how much of the wave is transmitted through the junction.
>
>### Insertion Loss (IL):
>Insertion loss is calculated using power ratios:
>$IL = -10 \log \left(\frac{P_1}{P_0}\right) = -10 \log \left( \frac{|V_1|^2 / Z_1}{|V_0|^2 / Z_0} \right)$
>Simplifying:
>$IL = -20 \log |T| + 10 \log \left(\frac{Z_1}{Z_0}\right)$
>The negative sign indicates **loss** in power transmission. A higher impedance mismatch leads to greater insertion loss.
>
>![[insertion loss.png|300]]

>[!NOTE] Quarter-Wave Transformer – The Impedance Viewpoint
>The **quarter-wave transformer** is a transmission line segment of length $\lambda/4$ used to match two impedances.
>### Input Impedance at $z=-\lambda/4$:
>The impedance transformation equation is given by:
>$Z_{in} = Z_1 \frac{R_L + jZ_1 \tan \beta l}{Z_1 + jR_L \tan \beta l}$
>### Special Case for a Quarter-Wavelength Line:
>Since the phase shift $\beta l$ for a quarter-wavelength section is:
>$\beta l = (2\pi / \lambda)(\lambda / 4) = \pi / 2$
>The input impedance simplifies to:
>$Z_{in} = \frac{Z_1^2}{R_L}$
>
>Transmission line length: $L = \frac{\lambda}{4}$
>
>### Condition for Perfect Matching:
>To achieve **impedance matching** ($\Gamma = 0$), we set:
>$Z_1 = \sqrt{Z_0 R_L}$
>This ensures that all power is transferred to the load **without reflections**.
>
>![[quarter wave transformer.png|300]]
$Z_1 = \sqrt{Z_0 \cdot R_L} = \sqrt{50 \times 100} = 71 \text{ Ohm}$

**quarter wave transformer:**
$Z_1 = \sqrt{Z_0 \cdot R_L} = \sqrt{50 \times 100} = 71 \text{ Ohm}$
$\lambda = \frac{c}{f} = \frac{3 \times 10^8}{1 \times 10^9} = 0.3 \text{ m}$
$L = \frac{\lambda}{4} = 75 \text{ mm}$
$\Gamma = \frac{Z_{\text{in}} - Z_0}{Z_{\text{in}} + Z_0}$
$Z_{\text{in}} = \frac{Z_1^2}{R_L}$ where $Z_1 = \sqrt{Z_0 \cdot R_L}$
Thus, $Z_{\text{in}} = Z_0$, so:
$\Gamma = 0$
In our case, $\Gamma$ is close to 0, meaning **no reflection**.
![[quarter wave transformer-1.png|250]]

**Lossy quarter wave transformer:**
$\text{Attenuation for } 75\text{mm:} \quad \alpha L = 1 \text{ dB/m} \times 0.075 = 0.075 \text{ dB}$
$\text{Exponential loss factor:} \quad e^{-2\alpha L} = 0.983$
$Z_{\text{in}} \neq Z_0 \text{ since we have real-world attenuation.}$
$Z_{\text{in}} = \frac{Z_1^2}{R_L} \times e^{-2\alpha L}$
$Z_{\text{in}} = 50 \times 0.983 = 49.15$
$\Gamma \neq 0 \text{ so reflection increases.}$
## Smith chart
[The scariest thing you learn in Electrical Engineering \| The Smith Chart - YouTube](https://www.youtube.com/watch?v=pXWbdxOAuDs)
- When there is very high frequencies on small length it causes reflections, good example in the video with a pulsating rope.
- Smith chart shows how much Voltage transmitted vs how much is reflected.

![[unit circle visualized.png]]
if the original signal is 10V then the reflection is 6.2V.
![[smith chart cheatsheet.png]]
![[charting on smith chart.png|300]]![[charting on smith chart-1.png|300]]
![[terminated lossless transmission line.png|300]]![[derived from smith chart.png|300]]
$|\Gamma|\text{ magnitude of reflection coefficient and: }\Theta \text{ phase of reflection coefficient}$
In the center it is the **Load**

[finding reflection coefficient on smith chart](https://www.youtube.com/watch?v=cOB7YijdveA)
[moving towards generator on smith chart](https://www.youtube.com/watch?v=vwqIGjXGKkk)
![[conversion between impedance and admittance.png|400]]
# Passive microwave networks

![[5XTC0_Lecture_Module2_Passives.pdf]]

>[!NOTE] Formulas
> **Telegrapher's Equations (frequency domain)**  
> $-\frac{\partial v(z,t)}{\partial z} = R i(z,t) + L \frac{\partial i(z,t)}{\partial t}$  
> $-\frac{\partial i(z,t)}{\partial z} = G v(z,t) + C \frac{\partial v(z,t)}{\partial t}$  
>  
> **Voltage and Current in Transmission Line**  
> $V(z,t) = V^+(z,t) + V^-(z,t)$  
> $I(z,t) = \frac{1}{Z_0}(V^+(z,t) - V^-(z,t))$  
>  
> **Reflection Coefficient**  
> $\Gamma = \frac{Z_L - Z_0}{Z_L + Z_0}$  
>  
> **Voltage and Current using $\Gamma$**  
> $V(z) = V_0^+ (e^{-j\beta z} + \Gamma e^{j\beta z})$  
> $I(z) = \frac{V_0^+}{Z_0}(e^{-j\beta z} - \Gamma e^{j\beta z})$  
>  
> **Impedance Matrix**  
> $\mathbf{V} = \mathbf{Z} \mathbf{I}$  
>  
> **Admittance Matrix**  
> $\mathbf{I} = \mathbf{Y} \mathbf{V}$  
>  
> **Scattering Parameters**  
> $a_n = \frac{V_n^+}{\sqrt{Z_{0n}}}, \quad b_n = \frac{V_n^-}{\sqrt{Z_{0n}}}$  
> $\mathbf{b} = \mathbf{S} \mathbf{a}$  
>  
> **Power at a Port**  
> $P_n = \frac{1}{2}(|a_n|^2 - |b_n|^2)$  
>  
> **Unitary Condition (Lossless S-matrix)**  
> $\mathbf{S}^\dagger \mathbf{S} = \mathbf{I}$  
>  
> **Reciprocal Network (S-matrix Symmetry)**  
> $S_{ij} = S_{ji}$  
>  
> **ABCD (Transmission) Matrix**  
> $\begin{bmatrix} V_1 \\ I_1 \end{bmatrix} = \begin{bmatrix} A & B \\ C & D \end{bmatrix} \begin{bmatrix} V_2 \\ I_2 \end{bmatrix}$  
>  
> **Impedances of Lumped Elements (Series)**  
> $Z_R = R$  
> $Z_L = j \omega L$  
> $Z_C = \frac{1}{j \omega C}$  
>  
> **Admittances of Lumped Elements (Parallel)**  
> $Y_R = \frac{1}{R}$  
> $Y_L = \frac{1}{j \omega L}$  
> $Y_C = j \omega C$  
>  
> **Quarter-Wavelength Transformer**  
> $Z_{in} = \frac{Z_0^2}{Z_L}$  
>  
> **Transmission Line Impedance Transformation**  
> $Z_{in} = Z_0 \frac{Z_L + j Z_0 \tan(\beta l)}{Z_0 + j Z_L \tan(\beta l)}$  
>  
> **Power Divider (Asymmetrical)**  
> $P_2 = \alpha P_1, \quad P_3 = (1 - \alpha) P_1$  
>  
> **Directional Coupler (Symmetrical)**  
> $S = \begin{bmatrix} 0 & \alpha & j\beta & 0 \\ \alpha & 0 & 0 & j\beta \\ j\beta & 0 & 0 & \alpha \\ 0 & j\beta & \alpha & 0 \end{bmatrix}$  
>  
> **Directional Coupler (Anti-symmetrical)**  
> $S = \begin{bmatrix} 0 & \alpha & \beta & 0 \\ \alpha & 0 & 0 & -\beta \\ \beta & 0 & 0 & \alpha \\ 0 & -\beta & \alpha & 0 \end{bmatrix}$  


## Microwave network matrices
$Z_{ij}=\frac{V_{i}}{I_{j}}|_{I_{k}=0,k\neq j}$ and $Y_{ij}=\frac{I_{i}}{V_{j}}|_{V_{k}=0,k\neq j}$
![[impedance and admittance matrices.png|300]]
**microwave circuits:** $V_{n}=V_{n}^++V_{n}^-\text{ and }I_{n}=I_{n}^+ - I_{n}^-$
- Voltage and current difficult to measure (either separate measurement of $V_{n}^+$ and $V_{n}^-$ or of standing wave pattern required)
- Voltage and current difficult to define for non-TEM transmission lines.

### Scattering parameters
**using power relations:** wave amplitudes defined to obtain meaningful power relations: $a_{n}=\frac{V_{n}^+}{\sqrt{ Z_{0}n }}\text{ and }b_{n}=\frac{V_{n}^-}{\sqrt{ Z_{0}n }}$ knowing the microwave circuit equations of $V_{n}\text{ and }I_{n}\text{ obtained before we get: }V_{n}=\sqrt{ Z_{0}n }(a_{n}+b_{n})\text{ and }I_{n}=\frac{1}{\sqrt{ Z_{0}n }}(a_{n}-b_{n})$
**power delivered to port = incident - reflected wave** $P_{n}=\frac{1}{2}Re\{V_{n}I^*_{n}\}=\frac{1}{2}|a_{n}|^2-\frac{1}{2}|b_{n}|^2$

![[scattering matrix.png|300]]![[scattering matrix for loessless network.png|300]]
![[scattering matrix for reciprocal network.png|300]]![[transmission ABCD matrix.png|300]]

$\text{transmission (ABCD)for single network: }\begin{bmatrix}V_{1} \\ I_{1}\end{bmatrix}=\begin{bmatrix} A_{1} & B_{1} \\ C_{1}&D_{1}\end{bmatrix}\begin{bmatrix}V_{2} \\ I_{2} \end{bmatrix}$
## Impedance matching and tuning
![[Pasted image 20250218140025.png]]
letting $\frac{\delta P_{L}}{\delta R_{L}}=\frac{\delta P_{L}}{\delta X_{L}}=0$ we fine that value $R_{L}\text{ and }X_{L}\text{ that would maximize }P_{L}\text{ is }R_{L}=R_{s'}X_{L}=-X_{s^*}\text{ basically: }Z_{L}=Z_{s}^*$ to max the power transfer to load impedance $Z_{L}$ must be complex conjugate of $Z_{s'}$ this is called **Conjugate Matched**.

>[!NOTE] Matching Network
>normalizing impedance for smith chart: $z=\frac{Z_{load}}{Z_{0}}$
>de-normalizing (real impedance): $Z=z \cdot Z_{0}$
>normalized impedance: $z=r+jx$
>
>![[component types effect matching.png|400]]
>![[formulas expalined.png|400]]


>[!NOTE] Impedance matching network
>such network is pushed between source and load in the case there are reflections due to $Z_{S}\neq Z_{L}$, in the course we only deal with single frequencies but in general the impedance matching network can range for **Broadband**.

![[impedances for serial lumped elements.png|300]]![[impedances for parallel lumped elements.png|300]]
![[impact of serieis component.png|300]]![[impact of parallel components.png|300]]
![[smith chart matchig.png|300]]

>[!NOTE] Distributed elements (using stubs to mimic lumped components)
>inductances and capacitances can be achieved using $\text{e.g. } \lambda/8$ transmission lines:
>![[transmission line distributed lines.png|300]]
>
>$Z_{in}=Z_{0} \frac{Z_{L}+jZ_{0}\tan \beta l}{Z_{0}+jZ_{L}\tan \beta l}$
>
>**Inductance:** $Z_{in}(Z_{L}=0)=jZ_{0}\tan \beta l=j\Omega Z_{0}=j\Omega L$
>**Capacitance:** $Z_{in}(Z_{L}=\infty) =\frac{Z_{0}}{j\tan \beta l}=\frac{Z_{0}}{j \Omega}=\frac{1}{j\Omega C}$

## Power dividers and directional couplers
A power divider network can have symmetrical or asymmetrical.
![[power deivider and combiner.png|300]]![[power ivider combiners.png|300]]
![[power divider combiners.png|300]]![[directional couplers-1.png|300]]
![[directional couplers-2.png|300]]![[directional couplers-3.png|300]]
![[symmetric and anit symmetric coupler.png|300]]![[real type of such directional couplers.png|300]]

### Matrix Based Question

![[20250316_131211~2.jpg]]

![[20250316_131224~2.jpg]]

# Antenna parameters & theory

![[5XTC0_Lecture_Module3_Antenna-Parameters-3.pdf]]

>[!NOTE] Formulas
> **Poynting Vector (Instantaneous):**  
> $𝒲(\vec{r}, t) = \vec{E}(\vec{r}, t) \times \vec{H}(\vec{r}, t)$  
>  
> **Time-Averaged Power Density:**  
> $W_{\text{av}}(\vec{r}) = \frac{1}{2} \text{Re}[\vec{E}(\vec{r}) \times \vec{H}^*(\vec{r})]$  
>  
> **Radiation Intensity:**  
> $U(\theta, \phi) = R^2 W_{\text{av}}(\vec{r})$  
>  
> **Surface Element in Spherical Coordinates:**  
> $dS = R^2 \sin(\theta) d\theta d\phi = R^2 d\Omega$  
>  
> **Solid Angle:**  
> $\omega = \int_0^{2\pi} \int_0^\alpha \sin(\theta) d\theta d\phi = 2\pi (1 - \cos(\alpha))$  
>  
> **Total Radiated Power:**  
> $P_{\text{rad}} = \int\int U(\theta, \phi) \sin(\theta) d\theta d\phi$  
>  
> **Directivity:**  
> $D_g = \frac{U(\theta, \phi)}{U_0} \quad \text{where} \quad U_0 = \frac{P_{\text{rad}}}{4\pi}$  
>  
> **Gain:**  
> $G_g = \frac{4\pi U(\theta, \phi)}{P_{\text{in}}}$  
>  
> **Gain vs Directivity:**  
> $G_g = e_t D_g \quad \text{with} \quad e_t = e_r e_{cd}$  
>  
> **Reflection Efficiency:**  
> $e_r = 1 - |\Gamma|^2$  
>  
> **Axial Ratio (AR):**  
> $AR = \frac{A}{B} = \frac{\max(E_\theta \hat{u}_\theta + E_\phi \hat{u}_\phi)}{\min(E_\theta \hat{u}_\theta + E_\phi \hat{u}_\phi)}$  
>  
> **Bandwidth:**  
> $BW = f_{\max} - f_{\min}$  
>  
> **Narrowband Percentage:**  
> $p = \frac{BW}{f_c}$  
>  
> **Input Impedance (Thevenin Model):**  
> $Z_A = R_A + jX_A = R_{\text{rad}} + R_{\text{loss}} + jX_A$  
>  
> **Input Admittance (Norton Model):**  
> $Y_A = G_A + jB_A = G_{\text{rad}} + G_{\text{loss}} + jB_A$  
>  
> **Radiation Efficiency (Power-Based):**  
> $\eta = \frac{P_{\text{rad}}}{P_{\text{in}}} = \frac{R_{\text{rad}}}{R_{\text{rad}} + R_{\text{loss}}}$  
>  
> **Received Power and Effective Aperture:**  
> $P_T = W_{\text{inc}} A_e$  
>  
> **Effective Aperture:**  
> $A_e = \frac{P_T}{W_{\text{inc}}} = \frac{V_T^2}{2W_{\text{inc}}(R_T + R_{\text{rad}} + R_{\text{loss}})^2 + (X_T + X_A)^2}$  
>  
> **Max Effective Aperture (Matched Case):**  
> $A_{e,\text{max}} = \frac{V_T^2}{8W_{\text{inc}}(R_{\text{rad}} + R_{\text{loss}})}$  
>  
> **Free Space Power Density:**  
> $W_{\text{inc}} = \frac{1}{2} \text{Re}(E \times H^*) = \frac{E^2}{2\eta}$  
>  
> **Max Effective Aperture (Dipole Example):**  
> $A_{e,\text{max}} = \frac{3\lambda^2}{8\pi}$  
>  
> **Friis Transmission Equation:**  
> $P_{\text{rec}} = \left(\frac{\lambda}{4\pi R}\right)^2 G_{\text{Tx}} G_{\text{Rx}} P_{\text{in}}$  
>  
> **Gain-to-Aperture Relationship:**  
> $\frac{A_e}{G} = \frac{\lambda^2}{4\pi}$


## Radiation parameters

>[!NOTE] Radiation Pattern
>spatial distribution of quantity that characterizes the electromagnetic field generated by an antenna.
>
>The distribution can be expressed as mathematical function as graphical representation.
>
>when the amplitude or relative amplitude of a specified component of the electric-field vector is plotted graphically, it is called an **amplitude pattern, field pattern or voltage pattern.** When the square of the amplitude or relative amplitude is plotted, it is called a **power pattern.**
>
>![[radiation patten coordinate system.png|300]]![[radiation pattern 2d.png|300]]
- **Reactive near-field region:** $R<R_{1}=0.62\sqrt{ D^3/\lambda }$
- Reactive fields predominate
- Radiation pattern changes with $R$

- **Radiating near-field (Fresnel) region:** $R_{1}<R<R_{2}=2D^2/\lambda$
- Radiation fields predominate
- Radiation pattern changes with $R$

- **Far-field (Frauhofer) region:** $R>R_{2}=2D^2/\lambda$
- $R\gg D,R\gg \lambda$
- Radiation fields predominate
- Radiation pattern independent of $R$

[Near and far field - Wikipedia](https://en.wikipedia.org/wiki/Near_and_far_field)

![[antenna field regions visualized.png|400]]

**Poynnting vector:** $\vec{W}_{av}=\frac{1}{2}Re\{\vec{E}(\vec{r}) \times \vec{H}^*(\vec{r})\}\text{ Power density }[W/m^2]$.

The power density decays with $\frac{1}{R^2}$ hence the **radiation intensity** $\vec{U}(\theta,\phi)=R^2\vec{W}_{av}(\vec{r})$ is defined as distance independent parameter, provides radiated power per unit solid angle.

To have **power independent figure** we normalize the radiation intensity with respective radiation intensity of (ideal) isotropic radiator: $D_{g}=\frac{U(\theta,\phi)}{U_{0}}$ where $D_{g}$ is **directivity.** and isotropic radiator: $U_{0}=\frac{P_{rad}}{4\pi}\left( =R^2 \frac{P_{rad}}{4\pi R^2} \right)$.

To know the **directivity** radiated power is needed, we obtain **gain:** $G_{g}=\frac{4\pi U(\theta,\phi)}{P_{in}}$ the input power is related to radiated power by **efficiency:** $e_{t}$ so $P_{rad}=e_{t}P_{in}=e_{r}e_{cd}P_{in}\text{ where }e_{r}=1-|\Gamma|^2\text{ and reflection (mismatch) efficiency is related to conduction and dielectric loss }e_{cd}.$
$G_{g}=e_{t}D_{g}\to \text{ in dB }\to D(dBi)=G(dBi)+10\log_{10}(e_{t})$
[Directivity - Wikipedia](https://en.wikipedia.org/wiki/Directivity)

>[!NOTE] Polarization
>In a specified direction from an antenna and at a point in its far field, the polarization of the (locally) plane wave that is used to represent the radiated wave at that point.
>![[polarization definition.png|300]]
>
>wave propagating towards $\vec{u}_{r}$, and its electric field can be decomposed in time domain:
>$E_{\theta}=\hat{E}_{\theta}\cos(\omega t-\vec{k}R\vec{u}_{r}+\phi_{\theta})\text{ and }E_{\phi}=\hat{E}_{\phi}\cos(\omega t-\vec{k}R\vec{u}_{r}+\phi_{\phi})$
>![[different polarization behaviour.png|400]]
>

![[pattern bandwidth defintion.png|400]]
## Circuit level representation
![[input impedance.png|300]]![[thevenin equivelant input impedance.png|300]]
![[norton equivelant impedance input.png|300]]![[impedance bandwidth definition.png|300]]
$\text{Radiation Efficiency: }\frac{P_{rad}}{P_{in}}=e_{t}$
In receive mode the power $P_{T}$ accepted by Rx terminal can be linked to power density, $W_{inc}=|\vec{W}_{av}(\vec{r})|$ of the incident electromagnetic wave: $P_{T}=W_{inc}A_{e}$ where $A_{e}$ is **effective aperture of antenna.** and for max power transfer: $R_{T}=R_{A}\text{ and }X_{T}=-X_{A}$
$A_{e,max}=\frac{|V_{T}|^2}{8W_{inc}}\left( \frac{1}{R_{rad}+R_{loss}}\right)$

## Propagation channel basics
The **Friis transmission equation** relates the power received by an antenna 2 to the radiated power by antenna 1 and vice versa.
![[friis antennas.png|200]]![[friis equation explanation.png|200]]
The power density of isotropic radiator at distance $R$ is given by: $W_{inc,iso}=\frac{P_{rad}}{4\pi R^2}$, so for real antenna: $W_{inc}=D_{g1} \frac{P_{rad}}{4\pi R^2}=G_{1} \frac{P_{in}}{4\pi R^2}$.

power received by antenna 2 depends on its effective aperture: $P_{rec}=W_{inc}A_{e,2}=A_{e,2}G_{1} \frac{P_{in}}{4\pi R^2}$ so $\frac{P_{rec}}{P_{in}}(4\pi R^2)=A_{e,2}G_{1}$ if antenna 2 was in transmitting mode and antenna 1 as receiving antenna, we get: $\frac{P_{rec}}{P_{in}}(4\pi R^2)=A_{e,1}G_{2}$ hence: $\frac{A_{e,1}}{G_{1}}=\frac{A_{e,2}}{G_{2}}$.

Ratio of gain to effective aperture in certain direction is same for all antennas, for example for **very short dipole** $A_{e,max}=\frac{3\lambda^2}{8\pi}$, **max gain: 1.5** so $\frac{A_{e,max}}{G_{max}}=\frac{\lambda^2}{4\pi}$ so rewriting for received power: $P_{rec}=W_{inc}A_{e,2}=A_{e,2}G_{1} \frac{P_{in}}{4\pi R^2}=G_{1}G_{2} \frac{\lambda^2}{(4\pi R)^2}P_{in}$.

**Friis Transmission equation:** $\frac{P_{r}}{P_{T}}=\left( \frac{\lambda}{4\pi R} \right)^2G_{1}G_{2}$
$EIRP=G_{Tx}P_{in}=G_{T}+G_{PA}+P_{in}$
$P_{in}=P_{out}-(G_{PA}-G_{A1})-20\log_{10}\left( \frac{\lambda}{4\pi D_{1}} \right)-(G_{A2}-G_{LNA})$
$10^{db/10}=mW$
[Friis transmission equation - Wikipedia](https://en.wikipedia.org/wiki/Friis_transmission_equation)


[FSPL](https://en.wikipedia.org/wiki/Free-space_path_loss) - Free Space Path Loss: influenced by frequency operation - Friis equation -> has a wavelength component. $FSPL=\left( \frac{4\pi d}{\lambda} \right)^2$
# RF systems and Amplifier design
![[5XTC0_Module_4_Amplifier_Design.pdf]]
![[5XTC0_Module_4_RF_Building_Blocks_Study_Guide_2024.pdf]]
![[5XTC0_Module_4_RF_Systems.pdf]]

>[!NOTE] Formulas
> **Reflection Coefficients**  
> $Γ_L = \frac{Z_L - Z_0}{Z_L + Z_0}$  
> $Γ_S = \frac{Z_S - Z_0}{Z_S + Z_0}$  
>  
> **Input and Output Reflection Coefficients**  
> $Γ_{in} = S_{11} + \frac{S_{12}S_{21}Γ_L}{1 - S_{22}Γ_L}$  
> $Γ_{out} = S_{22} + \frac{S_{12}S_{21}Γ_S}{1 - S_{11}Γ_S}$  
>  
> **Power Calculations**  
> $P_L = \frac{1}{2} \left| V_2^+ \right|^2 \cdot \frac{1 - |Γ_L|^2}{Z_0}$  
> $P_{in} = \frac{1}{2} \left| V_1^+ \right|^2 \cdot \frac{1 - |Γ_{in}|^2}{Z_0}$  
> $P_{avs} = \frac{1}{2} \left| V_s \right|^2 \cdot \frac{1 - |Γ_S|^2}{Z_0}$  
>  
> **Power Gains**  
> Power gain: $G = \frac{P_L}{P_{in}}$  
> Available power gain: $G_A = \frac{P_{avn}}{P_{avs}}$  
> Transducer gain: $G_T = \frac{P_L}{P_{avs}}$  
> Unilateral transducer gain (S₁₂ = 0):  
> $G_{TU} = \left| S_{21} \right|^2 \cdot \frac{1 - |Γ_S|^2}{|1 - S_{11}Γ_S|^2} \cdot \frac{1 - |Γ_L|^2}{|1 - S_{22}Γ_L|^2}$  
>  
> **Gain Circle Parameters**  
> Normalized gain factor: $g_s = \frac{G_S}{G_{S,max}}$  
> Center: $C_s = \frac{g_s S_{11}^*}{1 - (1 - g_s)|S_{11}|^2}$  
> Radius: $r_s = \frac{\sqrt{1 - g_s}(1 - |S_{11}|^2)}{1 - (1 - g_s)|S_{11}|^2}$  
>  
> **Stability Factor and Condition**  
> Rollet stability factor:  
> $K = \frac{1 - |S_{11}|^2 - |S_{22}|^2 + |\Delta|^2}{2|S_{12}S_{21}|}$  
> $\Delta = S_{11}S_{22} - S_{12}S_{21}$  
> Condition for unconditional stability:  
> $K > 1$ and $|\Delta| < 1$  
>  
> **Stability Circle Centers and Radii**  
> Input stability circle (in Γ_L plane):  
> 
> $C_{L} = \frac{(S_{22} - \Delta S_{11}^*)^*}{|S_{22}|^2 - |\Delta|^2}$  
> 
> $r_L = \left| \frac{S_{12}S_{21}}{|S_{22}|^2 - |\Delta|^2} \right|$  
>  
> Output stability circle (in Γ_S plane):  
> 
> $C_{S} = \frac{(S_{11} - \Delta S_{22}^*)^*}{|S_{11}|^2 - |\Delta|^2}$  
> 
> $r_S = \left| \frac{S_{12}S_{21}}{|S_{11}|^2 - |\Delta|^2} \right|$


## RF systems
![[application of rf systems.png|300]]![[applications of rf systems.png|300]]
![[trends in semiconductors.png|300]]![[transciever design.png|300]]![[lna design topics addressed.png|300]]
## Amplifier design
![[2 port network description.png|300]]![[2 port network description-1.png|300]]

![[common antenna amplifier.png|600]]
$\Gamma_{S}=\frac{Z_{S}-Z_{0}}{Z_{S}+Z_{0}}\text{ and }V_{1}^+=\Gamma_{S}V_{1}^-$
$\Gamma_{L}=\frac{Z_{L}-Z_{0}}{Z_{L}+Z_{0}}\text{ and }V_{2}^+=\Gamma_{L}V_{2}^-$
$\Gamma_{in}=\frac{V_{1}^-}{V_{1}^+}=S_{11}+\frac{S_{12}S_{21}\Gamma_{L}}{1-S_{22}\Gamma_{L}}$
$\Gamma_{out}=\frac{V_{2}^-}{V_{2}^+}=S_{22}+\frac{S_{12}S_{21}\Gamma_{S}}{1-S_{11}\Gamma_{S}}$
$\text{unilaterial case: }S_{12}=0:\Gamma_{in}=\frac{V_{1}^-}{V_{1}^+}=S_{11}\text{ and }\Gamma_{out}=\frac{V_{2}^-}{V_{2}^+}=S_{22}$
$\text{power delivered to load: }P_{L}=\frac{|V_{2}^-|^2}{2Z_{0}}(1-|\Gamma_{L}|^2)$
$\text{input power to network: }P_{in}=\frac{|V_{1}^+|^2}{2Z_{0}}(1-|\Gamma_{in}|^2)$
- Power available from source: $P_{avs}$, $P_{in}$ when source impedance is conjugately matched to input impedance: $Z_{in}=Z_{S}^*$ .
- Power available from network: $P_{avn}$, $P_{L}$ when load impedance is conjugately matched to output impedance: $Z_{out}=Z_{load}^*$.

>[!NOTE] Unilateral Amplifier
>An amplifier whose **output exhibits no feedback to its input side** is described as 'unilateral'. The input impedance of a unilateral amplifier is independent of load, and output impedance is independent of signal source impedance. 

![[power definitions.png|400]]
$\text{power gain: }G=\frac{P_{L}}{P_{in}}=\frac{|S_{21}|^2(1-|\Gamma_{L}|^2)}{(1-|\Gamma_{in}|^2)|1-S_{22}\Gamma_{L}|^2}$
$\text{available power gain: }G_{A}=\frac{P_{avn}}{P_{avs}}=\frac{|S_{21}|^2(1-|\Gamma_{S}|^2)}{|1-S_{11}\Gamma_{S}|^2(1-|\Gamma_{out}|^2)}$
$\text{transducer powr gain: }G_{T}=\frac{P_{L}}{P_{avs}}=\frac{|S_{21}|^2(1-|\Gamma_{S}|^2)(1-|\Gamma_{L}|^2)}{|1-\Gamma_{S}\Gamma_{in}|^2|1-S_{22}\Gamma_{L}|^2}$
$\text{unilateral transducer power gain: }G_{TU}=\frac{1-|\Gamma_{S}|^2}{|1-\Gamma_{in}\Gamma_{S}|^2}|S_{21}|^2 \frac{1-|\Gamma_{L}|^2}{|1-S_{22}\Gamma_{L}|^2}\text{ since: }\Gamma_{in}=\frac{V_{1}^-}{V_{1}^+}=S_{11}$
![[general transistor amplifier circuit.png|600]]
$G_{S}=\frac{1-|\Gamma_{S}|^2}{|1-\Gamma_{in}\Gamma_{S}|^2}$, $\text{unilaterial case: }G_{0}=|S_{21}|^2$, $G_{L}=\frac{1-|\Gamma_{L}|^2}{|1-S_{22}\Gamma_{L}|^2}$
$G_{T}=G_{S}G_{0}G_{L}\to G_{T,dB}=G_{S,dB}+G_{0,dB}+G_{L,dB}$
If $S_{12}=0$ then: $\Gamma_{out}=S_{22}$ and $\Gamma_{in}=S_{11}$

![[circles of constant power gain.png|300]]![[constant gain circles.png|300]]
**circles of constant power gain:**
**max gain of input and output matching networks:**
$G_{S_{max}}=\frac{1}{1-|S_{11}|^2},\text{ for }\Gamma_{S}=S_{11}^*\text{ and }G_{L_{max}}=\frac{1}{1-|S_{22}|^2},\text{ for }\Gamma_{L}=S^*_{22}$
**normalized gain factors $g_{s}$ and $g_{L}$:**
$g_{S}=\frac{G_{S}}{G_{S_{max}}}=\frac{1-|\Gamma_{S}|^2}{|1-S_{11}\Gamma_{S}|^2}(1-|S_{11}|^2)\text{ and }g_{L}=\frac{G_{L}}{G_{L_{max}}}=\frac{1-|\Gamma_{L}|^2}{|1-S_{22}\Gamma_{L}|^2}(1-|S_{22}|^2)$
**center and radius of constant gain circle for input and output matching network:**
$C_{S}=\frac{g_{S}S_{11}^*}{1-(1-g_{S})|S_{11}|^2}\text{ and }R_{S}=\frac{\sqrt{ 1-g_{S} }(1-|S_{11}|^2)}{1-(1-g_{S})|S_{11}|^2}$
$C_{L}=\frac{g_{L}S_{22}^*}{1-(1-g_{L})|S_{22}|^2} \text{and }R_{L}=\frac{\sqrt{1-g_{L}}(1-|S_{22}|^2)}{1-(1-g_{L})|S_{22}|^2}$

![[stability of 2 port circuit.png|300]]![[unilateral case.png|300]]
![[input stability circles.png|300]]![[output stability circles.png|300]]

![[output stability circle on smith chart.png|400]]
If $|\Delta|=|S_{11}S_{22}-S_{12}S_{21}|<1\text{ and }K= \frac{1-|S_{11}|^2-|S_{22}|^2+\Delta^2}{2|S_{12}S_{21}|}>1$ than the 2-port is unconditionally stable. **Unilateral case: $S_{12}=0$**, the conditions for unconditional stability: $|S_{11}|<1\text{ and }|S_{22}|<1$.
**Where K is the Rollet stability factor**.

![[load condition for max real power.png|600]]
# Noise and LNA design
![[5XTC0_Module_5_Exercise_Amplifier_and_Low_Noise_Amplier_design.pdf]]

>[!NOTE] Formulas
> **Power Gain**: $G = \frac{P_L}{P_{in}}$
> 
> **Available Power Gain**: $G_A = \frac{P_{AV,N}}{P_{AV,S}}$
>
> **Transducer Power Gain**: $G_T = \frac{P_L}{P_{AV,S}}$
>
> **Unilateral Transducer Gain (S_{12}=0)**: $G_{TU} = \left|\frac{S_{21}}{1 - \Gamma_S S_{11}}\right|^2 \cdot \left|\frac{1}{1 - \Gamma_L S_{22}}\right|^2$
>
> **Reflection Coefficients**: $\Gamma_{in} = S_{11} + \frac{S_{12} S_{21} \Gamma_L}{1 - S_{22} \Gamma_L}$, $\Gamma_{out} = S_{22} + \frac{S_{12} S_{21} \Gamma_S}{1 - S_{11} \Gamma_S}$
>
> **Rollet Stability Factor**: $K = \frac{1 - |S_{11}|^2 - |S_{22}|^2 + |\Delta|^2}{2|S_{12} S_{21}|}$, with $\Delta = S_{11} S_{22} - S_{12} S_{21}$
>
> **Unconditional Stability Conditions**: $K > 1$ and $|\Delta| < 1$
>
> **Thermal Noise Power**: $P_n = k_B T B$
>
> **Available Noise Power from Resistor**: $P_N = 4 k_B T B R$
>
> **Equivalent Noise Temperature**: $T_e = \frac{N_0}{k_B B}$
>
> **Noise Figure**: $F = 1 + \frac{T_e}{T_0}$, with $NF = 10 \log_{10}(F)$
>
> **Friis’ Formula for Cascaded Stages**: $F_{total} = F_1 + \frac{F_2 - 1}{G_1} + \frac{F_3 - 1}{G_1 G_2} + \dots$
>
> **Noise Figure with Source Admittance**: $F = F_{min} + \frac{4 r_n}{g_s} \cdot |Y_s - Y_{opt}|^2$
>
> **Noise Figure with Reflection Coefficients**: $F = F_{min} + \frac{4 r_n}{|1 + \Gamma_S|^2} \cdot \frac{|\Gamma_S - \Gamma_{opt}|^2}{1 - |\Gamma_{opt}|^2}$
>
> **Constant Noise Circle Radius**: $R_N = \frac{|1 - |\Gamma_{opt}|^2|}{1 + N}$
>
> **Constant Noise Circle Center**: $C_N = \frac{\Gamma_{opt}}{1 + N}$


## Other
$SNR=\frac{S}{R}$
![[types of noises.png|400]]

**Thermal noise:** $$P_{n}=k_{B} \cdot T\cdot B\text{ where }k_{B}:\text{Boltzman const }T:\text{temp in Kelvin }B:\text{bandwidth of system}$$
average voltage is zero, but **non zero average power.**

**White noise:**
![[white noise circuit for reference.png|300]]
$P_{n}=\frac{V_{N}^2}{4R_{N}}=k_{B}TB$

**Noise of arbitrary source:**
![[noise of arbitrary source.png|300]]
equivalent noise temperature: $T_{e}=\frac{N_{0}}{k_{B}B}$

![[noise at amplifier.png|400]]

![[noise figure.png|400]]
$F=\frac{\frac{S_{i}}{N_{i}}}{\frac{S_{o}}{N_{o}}}=\frac{S_{i}}{S_{o}} \frac{N_{o}}{N_{i}}=\frac{1}{G} \frac{Gk_{B}(T_{0}+T_{e})B}{k_{B}T_{0}B}=1+\frac{T_{e}}{T_{0}}>0$
$NF=10\log(F)\to \text{NF}\to \text{noise figure (dB) while F}\to \text{noise factor}$

![[noise in 2 stage amplifier.png|500]]

**Gain, F and $T_{e}$ of cascaded system:**
![[cascaded system.png|300]]
$G_{cas}=G_{1}G_{2}\text{ and }T_{cas}=T_{e1}+\frac{1}{G_{1}}T_{e2}\text{ and }F_{cas}=F_{1}+\frac{1}{G_{1}}(F_{2}-1)$

**Cascaded NF: Friis’ formula:**
![[cascaded system-1.png|300]]
$F_{total}=1+(F_{1}-1)+\frac{F_{2}-1}{G_{a,1}}+\dots+\frac{F_{m}-1}{G_{a,1}G_{a,2}\dots G_{a,(m-1)}}$

![[noise figure of an amplifier.png|500]]
$F=F_{min}+4r_{N} \frac{|\vec{\Gamma}_{S}-\vec{\Gamma}_{opt}|^2}{(1-|\vec{\Gamma}_{S}|^2)}$
Value of $\vec{\Gamma}_{S}$ leads to constant val of F.
The values are in circles and we can calculate the center and the radius. The circles are called **constant noise circles.**
$\text{centers: }\vec{C}_{F}=\frac{\Gamma_{opt}}{1+N}$
$\text{radii: }R_{F}=\frac{1}{1+N}\sqrt{ N^2+N(1-|\Gamma_{opt}|^2) }$
With the **Noise figure parameter N** defined as:
$\Delta F_{n}'=N=(F-F_{min}) \frac{|1+\vec{\Gamma}_{opt}|^2}{4r_{n}}=\frac{|\vec{\Gamma}_{S}-\vec{\Gamma}_{opt}|^2}{1-|\vec{\Gamma}_{S}|^2}$
![[constant noise circles.png|500]]
![[specific noise figure design.png|500]]
# Basics of PA and Mixer Design (Power amplifiers and mixers)
![[5XTC0_Module_6_PAs_Mixers (1).pdf]]

>[!NOTE] Formulas
> **Signal-to-noise ratio (SNR)**: $SNR = \frac{S}{N}$
> 
> **Thermal noise power**: $P_n = kTB$
> 
> **Noise figure (F)**: $F = \frac{S_i/N_i}{S_o/N_o} = 1 + \frac{T_e}{T_0}$
> 
> **Noise figure (dB)**: $NF = 10 \log_{10}(F)$
> 
> **Friis’ noise figure formula (cascaded stages)**: $F_{total} = F_1 + \frac{F_2 - 1}{G_{a,1}} + \frac{F_3 - 1}{G_{a,1}G_{a,2}} + \cdots$
> 
> **Noise figure of an amplifier with reflection coefficients**: 
> $F = F_{min} + \frac{4r_n |\Gamma_S - \Gamma_{opt}|^2}{(1 - |\Gamma_S|^2)|1 + \Gamma_{opt}|^2}$
> 
> **Noise figure parameter (N)**:
> $N = \frac{F - F_{min}}{4r_n}$
> 
> **Constant noise circle radius**:
> $R_F = \frac{|\Gamma_S - \Gamma_{opt}|}{|1 + \Gamma_{opt}|}$
> 
> **Nonlinear output expression**: $v_{out}(t) = a_1v_{in}(t) + a_2v_{in}^2(t) + a_3v_{in}^3(t) + \cdots$
> 
> **1 dB Compression Point**: input/output power where gain is reduced by 1 dB from linear response
> 
> **Second-order intercept point (IIP2)**: Extrapolated power where second-order products intersect with fundamental
> 
> **Third-order intercept point (IIP3)**: Extrapolated input power where third-order products equal fundamental
> 
> **Cascaded IIP3 formula**: $\frac{1}{IIP3_{total}^{2}} = \frac{1}{IIP3_1^{2}} + \frac{1}{G_{a,1}^2 IIP3_2^{2}} + \cdots$
> 
> **Mixer output signal (RX - time domain)**:
> $x_{if}(t) = A_{rf}A_{lo}\cos(\omega_{rf} + \omega_{lo}) + \cos(\omega_{rf} - \omega_{lo})$
> 
> **Intermediate frequency (IF)**: $\omega_{if} = \omega_{rf} - \omega_{lo}$
> 
> **Mixer output signal (TX - time domain)**:
> $x_{rf}(t) = A_{if}A_{lo}\cos(\omega_{if} + \omega_{lo}) + \cos(\omega_{if} - \omega_{lo})$
> 
> **Upconverted frequency (TX)**: $\omega_{rf} = \omega_{if} + \omega_{lo}$
> 
> **Mixing in frequency domain**: $X_{out}(\omega) = X_{in}(\omega) * X_{lo}(\omega)$
> 
> **Output power**: $P_{load} = \frac{V_{load}^2}{R_L}$
> 
> **Optimum load resistance**: $R_L = \frac{2V_{DD} - V_{min}}{I_{max}}$
> 
> **Maximum PA efficiency (Class A)**: $\eta_{max} = \frac{\pi}{4} \approx 78.5\%$
