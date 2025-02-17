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

## The Lossless Transmission Line
![[Lossless transmission line simplification.png|200]]

$\text{since R=0 and G=0: }\gamma=j\beta=j\omega \sqrt{ LC }\implies Z_{0}=\sqrt{ \frac{L}{C} }$

**Total voltage and current:**
$V(z) = V_0^+ e^{-j\beta z} + V_0^- e^{j\beta z}$      $I(z) = \frac{V_0^+}{Z_0} e^{-j\beta z} - \frac{V_0^-}{Z_0} e^{j\beta z}$
**Total voltage and current at the load at $z=0$:**
$Z_L = \frac{V(0)}{I(0)} = \frac{V_0^+ + V_0^-}{V_0^+ - V_0^-} Z_0$
**Special cases:**
$Z_{L}=Z_{0}\to \Gamma=0,\text{ }Z_{L}=0\to \Gamma=-1,\text{ }Z_{L}=\infty\to \Gamma=1$

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
>$\lambda=\frac{2\pi}{\beta}=\frac{2\pi}{\omega \sqrt{ LC }},f=\frac{c}{\lambda}\text{ and phase velocity: }v_{p}=\frac{\omega}{\beta}=\frac{1}{\sqrt{ LC }}$
>
>![[terminated transmission line.png|300]]

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
>### Condition for Perfect Matching:
>To achieve **impedance matching** ($\Gamma = 0$), we set:
>$Z_1 = \sqrt{Z_0 R_L}$
>This ensures that all power is transferred to the load **without reflections**.
>
>![[quarter wave transformer.png|300]]

## Smith chart
