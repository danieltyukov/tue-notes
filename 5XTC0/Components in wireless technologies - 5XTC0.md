# Schedule
![[schedule-1.png|300]]![[5XTC0/attachments/schedule.png|300]]
# Overview
![[Concept structure.png|600]]
![[analogue system.png|300]]![[digital system.png|300]]
# Transmission Lines
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

[finding reflection coefficient on smith chart](https://www.youtube.com/watch?v=cOB7YijdveA)
[moving towards generator on smith chart](https://www.youtube.com/watch?v=vwqIGjXGKkk)
![[conversion between impedance and admittance.png|400]]
# Passive microwave networks
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
letting $\frac{\delta P_{L}}{\delta R_{L}}=\frac{\delta P_{L}}{\delta X_{L}}=0$ we fine that value $R_{L}\text{ and }X_{L}\text{ that would maximize }P_{L}\text{ is }R_{L}=R_{s'}X_{L}=-X_{s^*}\text{ basically: }Z_{L}=Z_{s}^*$ to max the power transfer to load impedance $Z_{L}$ must be complex conjugate of $Z_{s'}$ this is called **Conjugate Matched**

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

# Antenna parameters & theory
![[antenna types.png|300]]
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

**Poynnting vector:** $\vec{W}_{av}=\frac{1}{2}Re\{\vec{E}(\vec{r}) \times \vec{H}^*(\vec{r})\}\text{ Power density }[W/m^2]$.

The power density decays with $\frac{1}{R^2}$ hence the **radiation intensity** $\vec{U}(\theta,\phi)=R^2\vec{W}_{av}(\vec{r})$ is defined as distance independent parameter, provides radiated power per unit solid angle.

To have **power independent figure** we normalize the radiation intensity with respective radiation intensity of (ideal) isotropic radiator: $D_{g}=\frac{U(\theta,\phi)}{U_{0}}$ where $D_{g}$ is **directivity.** and isotropic radiator: $U_{0}=\frac{P_{rad}}{4\pi}\left( =R^2 \frac{P_{rad}}{4\pi R^2} \right)$.

To know the **directivity** radiated power is needed, we obtain **gain:** $G_{g}=\frac{4\pi U(\theta,\phi)}{P_{in}}$ the input power is related to radiated power by **efficiency:** $e_{t}$ so $P_{rad}=e_{t}P_{in}=e_{r}e_{cd}P_{in}\text{ where }e_{r}=1-|\Gamma|^2\text{ and reflection (mismatch) efficiency is related to conduction and dielectric loss }e_{cd}.$
$G_{g}=e_{t}D_{g}$

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

**Friis Transmission equation:** $\frac{P_{rec}}{P_{in}}=\left( \frac{\lambda}{4\pi R} \right)^2G_{1}G_{2}$

