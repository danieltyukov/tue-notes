[Plane wave - Wikipedia](https://en.wikipedia.org/wiki/Plane_wave)
**result of a gradient is a vector field, while the result of a divergence is a scalar field.**
![[gradient divergence and curl.png|300]]![[divergence gradien and curl.png|300]]

**decoupling:** express transverse components in longitudinal. (4 transverse components based on 2 longitudinal...)
**fundamental unknown** usually: $E_{z}\text{(for TM modes)}\text{ or }H_{z}\text{(for TE modes)}$ basically one of 6 variables
**solve W.E->for fundamental unknown...**
![[summary of EM solutions.png|400]]![[note.png]]
# Waves in time and one spatial dimension
**DON'T FORGET THE MINUS SIGN WHEN DECOMPOSING FOR CURRENT I-**
**LEARN CIRCUIT ANALYSIS BETTER**
[Uniform Plane Waves: A 3D Journey to the Simplest Electromagnetic Wave Propagation](https://www.youtube.com/watch?v=zUBXiTkrmSo)
[Transmission Lines: Part 1 An Introduction](https://www.youtube.com/watch?v=yezmCNGTVYU)
[Maxwell Equations](https://www.youtube.com/watch?v=lMSgNwwrGlM)
[But how exactly do the voltage and current propagate through transmission lines?](https://www.youtube.com/watch?v=MbzmAE6s7SI&t=1s)
[Characteristic impedance](https://en.wikipedia.org/wiki/Characteristic_impedance)
[What is the difference between characteristic impedance and input impedance in transmission lines](https://electronics.stackexchange.com/questions/318058/what-is-the-difference-between-characteristic-impedance-and-input-impedance-in-t#:~:text=The%20characteristic%20impedance%20is%20a,loaded%20in%20its%20characteristic%20impedance.)
[Transmission coefficient](https://en.wikipedia.org/wiki/Transmission_coefficient)
[Reflection coefficient](https://en.wikipedia.org/wiki/Reflection_coefficient)
$P=VI=\frac{V^2}{Z}$ Z is the specific impedance over which the power is measured.
![[circuit theory.png|300]]![[bounce diagram reference.png|300]]
![[characteristic impedance example.png|characteristic impedance example|200]]
![[characteristic impedance bounce diagram.png|200]]
## Uniform plane waves
![[maxwell equations.png|300]]![[maxwell equation application.png|230]]![[maxwell in unofrm.png|300]]![[maxwell equations + integral.png|300]]
**source free region**
divergence: $\nabla \cdot$ curl: $\nabla \times$
$J=0,K=0,D=\epsilon_{0}E,B=\mu_{0}H$
$\nabla \times E=-\mu_{0} \frac{\delta H}{\delta t}\to H\text{ induces }E$
$\nabla \times H=\epsilon_{0} \frac{\delta E}{\delta t}\to E\text{ induces }H$
uniform plane waves only depend on time, one cartesian coordinate $E=E(z,t),H=H(z,t)$
two coupled systems (right hand rule (thumb: E field, middle: Z, point: H)): $\frac{\delta E_{y}}{\delta z}=\mu_{0} \frac{\delta H_{x}}{\delta t}$ and $\frac{\delta H_{x}}{\delta z}=\epsilon_{0} \frac{\delta E_{y}}{\delta t}$

**voltage current amplitudes (another way to represent a coupled system do (right hand rule))**
$E(z,t)=V(z,t)e_{t}$ and $H(z,t)=I(z,t)h_{t}$ direction and time dependent
$e_{t}=e_{x}a_{x}+e_{y}a_{y}$ and $h_{t}=h_{x}a_{x}+h_{y}$
$e_{t} \perp a_{z}\text{ and }h_{t}\perp a_{z}$
$h_{t}=a_{z} \times e_{t}\to h_{t} \perp e_{t}$
$\nabla \times E=-\frac{\delta V}{\delta z}(e_{y}a_{z}-e_{x}a_{y})=\mu_{0} \frac{\delta I}{\delta t}(-h_{x}a_{x}-h_{y}a_{y})$
$\nabla \times H=-\frac{\delta I}{\delta z}(h_{y}a_{z}-h_{x}a_{y})=\epsilon_{0} \frac{\delta V}{\delta t}(e_{x}a_{x}-e_{y}a_{y})$

**TL equations for uniform plane wave:** $h_{t}=(h_{x}h_{y}0)=(-e_{x}e_{x}0)=a_{z}\times e_{t}$
$-\frac{\delta V}{\delta z}=\mu_{0} \frac{\delta I}{\delta t}$ and $-\frac{\delta I}{\delta z}=\epsilon_{0} \frac{\delta V}{\delta t}$
**wave equation:** $\frac{\delta}{\delta z}\left( -\frac{\delta V}{\delta z} =\mu_{0} \frac{\delta I}{\delta t}\right)$ or $\mu_{0} \frac{\delta}{\delta t}\left( -\frac{\delta I}{\delta z} =\epsilon_{0} \frac{\delta V}{\delta t} \right)\implies-\frac{\delta^2V}{\delta z^2}=\mu_{0} \frac{\delta}{\delta z}\left( \frac{\delta I}{\delta t} \right)=\mu_{0} \frac{\delta}{\delta t}\left( \frac{\delta I}{\delta z} \right)=-\epsilon_{0}\mu_{0} \frac{\delta^2V}{\delta t^2}\to \left( \frac{\delta^2}{\delta z^2}-\frac{1}{c^2_{0}} \frac{\delta^2}{\delta t^2} \right)V=0$ $\text{where }\epsilon_{0}\mu_{0}=\frac{1}{c_{0}^2}\text{ and } c_{0}=\frac{1}{p}=\frac{1}{\sqrt{ \epsilon_{0}\mu_{0} }}\text{ in free space}$
$c=\frac{c_{0}}{\sqrt{ \mu_{r}\epsilon_{r} }}$
$\epsilon\geq \epsilon_{0}\text{ and }\mu\geq \mu_{0}$
at steady state TL is ignored
![[one way wave propagation.png|one way wave propagation|300]]![[one way wave equation decomposition.png|one way wave quation decomposition|196]]
-: progressive wave; +: regressive wave

$\frac{\delta I^{\pm}}{\delta t}=\pm\frac{1}{\mu_{0}c_{0}} \frac{\delta V^{\pm}}{\delta t}\implies I^{\pm}=\pm Y_{0}V^{\pm}\left( t\mp \frac{z}{c_{0}} \right)$ since $Y_{0}=\frac{1}{\mu_{0}c_{0}}=\sqrt{ \frac{\epsilon_{0}}{\mu_{0}} } \text{ free space plane wave admittance (ideal dielectric)}\implies Z_{0}=\mu_{0}c_{0}=\frac{1}{Y_{0}}=\sqrt{ \frac{\mu_{0}}{\epsilon_{0}} }\to V^{\pm}=\pm Z_{0}I^{\pm}$
$\mu_{0}=4\pi \cdot 10^{-7}\text{ and }  \epsilon_{0}=8.85 \cdot10^{-12}$
$\text{but in general: }Z=\sqrt{ \frac{j\omega \mu}{\sigma+j\omega \epsilon}}$
$\text{in summary: }I^{\pm}=\pm YV^\pm,V^\pm=\pm ZI^\pm$
impedance $Z_{0}$ is frequency dependent because $\epsilon$ is.
## TEM-wave propagation along transmission lines (Transverse)
![[perfect electric conductor PEC.png|300]]![[free space uniform plane wave.png|238]]
![[application of boundary condition in a wire.png|boundary condition application wire|300]]
$LC=\mu \epsilon=\frac{1}{c^2}\to V=V^+\left( t-\frac{z}{c} \right)+V^-\left( t+\frac{z}{c} \right)\implies\left( \frac{\delta^2}{\delta z^2}-LC \frac{\delta^2}{\delta t^2} \right)V=0$
characteristic impedance (only when waves propagated not during steady state ): $Z_{0}=\frac{1}{Y}=\sqrt{ \frac{L}{C} }$ and also: $Z=Z_{0}\sqrt{ \frac{\mu_{r}}{ \epsilon_{r}} }=\sqrt{ \frac{\mu_{0}\mu_{r}}{\epsilon_{0} \epsilon_{r}} }$
$V=V^++V^- \to I^+\left( t-\frac{z}{c} \right)=+YV^+\left( t-\frac{z}{c} \right)$
$I=I^++I^- \to I^-\left( t+\frac{z}{c} \right)=-YV^-\left( t+\frac{z}{c} \right)$
lumped components: $V(z,t)-V(z+\nabla z,t)=L\nabla z \frac{\delta I}{\delta t}(z,t)\text{ and } I(z,t)-I(z+\nabla z,t)=C\nabla z \frac{\delta V}{\delta t}(z,t)$
## Wave reflection
![[wave (de)composition.png|wave (de)composition|300]]
![[wave decomposition-1.png|200]]
![[wave composition example.png|wave composition|300]]
composition: $V^+\text{ and }V^-$ can compose $V\text{ and }I$
decomposition: $V\text{ and }I$ can decompose pro(re)gressive wave $V^+\text{ and }V^-$
$\Gamma$ reflection coefficient $V^-(t)=\Gamma V^+(t)$
$\frac{V(0,t)}{I(0,t)}=Z \frac{1+\Gamma}{1-\Gamma}=Z_{L}$ and so $\Gamma=\frac{Z_{L}-Z_{0}}{Z_{L}+Z_{0}}$
$\Gamma_{OC}=1$ and $Z_{L}=\infty$ 
$\Gamma_{SC}=-1$ and $Z_{L}=0$
$\Gamma_{characteristic}=0$ and $Z_{L}=Z$
$\text{SC: }V=0\text{ only OC: }V=0\text{ and }I=0$

when OC there is also no forward backward propagating waves

when there sudden OC -> compensation $I\text{ and }V\text{ are negative}$
losses lower the amplitude instead of infinite propagation/reflection.
$\text{tranmission coeffiecient: }T=1+\Gamma$
$v=\frac{d}{t}$ so time of propagation $\frac{t}{2}$
$\text{steady state: }V(\infty,0)=0\text{ and }I(\infty,0)=0$
$\text{if TL length smaller than } \frac{1}{10}\lambda\to \text{imediatly steady state}$ otherwise reflected/absorbed
time domain reflection (TDR): used for cable testing: quick pulse with switch.
![[transmission line example.png|transmission line|333]]![[wave decomposition.png|wave decomposition|200]]
![[voltage bounce diagram.png|voltage bounce diagram|400]]
![[current bounce diagram.png|current bounce diagram|400]]
![[detailed bounce diagram.png|bounce diagram detailed|600]]
![[example of wave additions.png|300]]
# Transmission lines reflection and transmission

## Boundary conditions for penetrable media & Reflection and Transmission & Bounce diagrams
incident, reflected, transmitted field
![[5EPB0/attachments/boundary conditions.png|300]]![[transient signal transfer.png|265]]
on the boundary of plane dielectric layers: $[\lim_{ z \downarrow 0 }V(z,t)-\lim_{ z \uparrow 0 }V(z,t)]a_{z} \times e_{t}=0$
$[\lim_{ z \downarrow 0 }I(z,t)-\lim_{ z \uparrow 0 }I(z,t)]a_{z} \times h_{t}=0$
therefor: $V^r(t)=\Gamma V^i(t)\text{ and }V^t(t)=TV^i(t)$
![[bounce diagram final example.png|300]]
example:
$V^+_{1}=\frac{Z}{Z+Z_{g}}V_{g}$ where $Z\text{ characteristic impedance}$
$V_{2}^+(t)=\Gamma_{g}V_{1}^-(t)=\Gamma_{g}\Gamma_{L}V_{1}^+\left( t-\frac{2l}{c} \right)$ reflection takes place $t=2T=\frac{2l}{c}$
when its steady use load impedance since TL is short circuit: 
![[steady state circuit for example.png|200]]
$V_{steady}=V^+_{steady}+V^-_{steady}=\frac{Z_{L}}{Z_{L}+Z_{g}} \cdot V_{g} \implies V_{steady}^{+,-}=\lim_{ t \to \infty }V^{+,-}(z,t)\text{ where }V^+_{steady}= \frac{Z_{L}+Z}{2(Z_{L}+Z_{g})} \cdot V_{g}\text{ and }V^-_{steady}= \frac{Z_{L}-Z}{2(Z_{L}+Z_{g})} \cdot V_{g}$
$I_{steady}=I^+_{steady}+I^-_{steady}=\frac{1}{Z_{L}+Z_{g}} \cdot V_{g} \implies I_{steady}^{+,-}=\lim_{ t \to \infty }I^{+,-}(z,t)\text{ where }I^+_{steady}= \frac{\frac{Z_{L}}{Z} +1}{2(Z_{L}+Z_{g})} \cdot V_{g}\text{ and }I^-_{steady}= \frac{\frac{Z_{L}}{Z} -1}{2(Z_{L}+Z_{g})} \cdot V_{g}$
$V_{steady}^+=\frac{1}{1-\Gamma_{l}\Gamma_{0}} \cdot V^+\text{ and } V^-_{steady}= \frac{\Gamma_{l}}{1-\Gamma_{l}\Gamma_{0}} \cdot V^+$
$I^+_{steady}=\frac{1}{1-\Gamma_{l}\Gamma_{0}} \cdot I^+\text{ and } I_{steady}^- = \frac{\Gamma}{1-\Gamma_{l}\Gamma_{0}} \cdot I^+$
steady state no characteristic impedance, since no waves propagate. TL is short-circuited.
For circuit theory see exam question example in folder...
![[wave propagation theory-1.png|300]]
If there is complex load impedance there is phase and amplitude modulation of the reflected waves.
## Transverse field vectors & Electromagnetic Power Balance
[Poynting vector - YouTube](https://www.youtube.com/watch?v=g6IjaH7bjnI)
$B=B_{0}\cos(kx-\omega t)$
$E=E_{0}\cos(kx-\omega t)$
$\text{energy volume: } \frac{1}{2}\epsilon_{0}E^2+\frac{1}{2\mu_{0}}B^2$
$\vec{S}=\frac{\text{energy}}{\text{area*time}}=\frac{1}{\mu_{0}}\vec{E} \times \vec{B}\text{ varies in time}$
not useful to take a snapshot of poynting vector (relation of electromagnetic wave in time), thats why we usually find the average over time.

$\frac{E}{B}=C\text{ and }E=BC$

$S=C\epsilon_{0}E_{0}^2\cos^2(kx-\omega t)\implies I(\text{intensity})=S_{avg}=\frac{1}{2}C\epsilon_{0}E_{0}^2=\frac{C}{2\mu_{0}}B_{0}^2$
![[transmission line circuit analysis.png|300]]![[poynting theorem.png|300]]
lumped elements represent transmission lines. not actual inductances/capacitances.
at least 2 conducts needed. (coaxial cable)
![[poynting theorem avg question.png|300]]

[Poynting's theorem](https://en.wikipedia.org/wiki/Poynting%27s_theorem#:~:text=Poynting's%20theorem%20states%20that%20the,energy%20flux%20leaving%20that%20region.)
$<\vec{S}>_{T}=\frac{1}{2}Re(\vec{S}_{s})=\frac{1}{2}Re(V_{s}I_{s}^*) \vec{a_{z}}$
**Poyting's theorem:** separate secondary and primary (source) current densities ${J,K}\to{J+J_{0},K+K_{0}}$
$P_{gen}=P_{diss}+W_{em}+P_{rad}$
$-\int _{v}E \cdot J_{0}+H \cdot K_{0} \, dv=\int _{v} E \cdot J+H \cdot K \, dv+ \frac{\delta}{\delta t} \frac{1}{2} \int _{v} \mu H \cdot H+\epsilon E \cdot E \, dv+\oint_{s}(E \times H) \cdot dS$
maximize $P_{rad}$. Where Poynting vector: $S=E \times H$
$W_{em}$ stored electromagnetic energy in (electric/magnetic field)
$P_{diss}\text{ charge in free space}$

![[wave analysis.png|300]]![[bounce diagram two side.png|300]]
### extra
for transverse field: helmholz decomposition $F=-\nabla \Phi+\nabla  \times A$
laplace equation...
voltage and current normalization
$V_{circuit}(z,t)=\int ^Q _{O} -E \, dl\text{ and }I_{circuit}(z,t)=\int _{S}J \, dS$
$LC=\mu \epsilon$

for electromagnetic power balance: $F=qE+q\mu_{0}v \times H$ coulomb force + lorentz force

**!!!** **moment in time just after the switch has been activated, but before possible reflections from the end of the line have returned:**$\frac{V_{comp}}{Z}+I_{steady}=0\text{ since }I_{total}|_{z=0,t>0}$
# Time-harmonic waves
$E=Re[E_{s}(\omega)e^{j\omega t}]$
![[transfer and scatter matrix.png]]
now instead of $\left\{ V^+\left( t-\frac{z}{c_{0}} \right),V^-\left( t+\frac{z}{c_{0}} \right) \right\}$
its $Re[\{e^{j\omega t}V_{s0}^+e^{-jkz},e^{j\omega t}V_{s0}^-e^{jkz}\}]\text{ where } k=\omega \sqrt{ \epsilon \mu }=\beta-j\alpha=\omega \sqrt{ LC } \text{ where }\beta \text{ is phase and }\alpha \text{ is attenuation}$
$V_{s0}$ constant complex voltage amplitudes not depending on t,z

$V_{s}^\pm=V_{s0}^\pm e^{\mp jkz}=\pm ZI_{s0}^{\pm}e^{\mp jkz}=\pm ZI_{s}^\pm$ where $Z=\sqrt{ \frac{\mu}{\epsilon} }=\sqrt{ \frac{L}{C} }$
$\text{also }e^{-jkz}=e^{-\gamma z}\to \gamma=\alpha+j\beta \text{ where }\gamma \text{ is the propagation constant}$


in a loss-less environment $k=\beta-ja=k=\beta=\frac{2\pi}{\lambda}$
![[harmonic wave example.png|300]]
$V_{SWR}=\frac{1+|\Gamma|}{1-|\Gamma|}\text{ voltage standing wave ratio (difference between max and min)}$
$\text{if }V_{SWR}=1\text{ matches means: }\Gamma=0\text{ means perfect transmission}$
![[transfer matrix.png|300]]![[wavefield decomposition.png|300]]
![[scatter matrix.png|300]]![[transfer matrix-1.png|300]]
A-matrix the first one $T\leftrightarrow A\leftrightarrow S$
A matrix is decomposition of medium 1 and composition of medium 2
![[effective impedance.png|300]]![[example of effective impedance.png|300]]
![[one medium relation.png|one medium relation|300]]
![[stub-for-impedance-matching.png|300]]
![[composition and decomposition.png|300]]

$Z_{eff}(z)=\frac{V_{s}(z)}{I_{s}(z)}=Z \frac{1+\Gamma e^{+2jkz}}{1-\Gamma e^{{+2jkz}}}$
Power Calculation: $P_{L}=(1-|\Gamma|^2)P_{in}$
$Z_{eff}(-l)=Z_{1} \frac{Z_{2}+jZ_{1}\tan(k_{1}l)}{Z_{1}+jZ_{2}\tan(k_{1}l)}\text{ where }Z_{1}\text{ TL impednace and }Z_{2}\text{ load impedance and }k\text{ is ideal stuff }k=\beta=\frac{2\pi}{\lambda} \text{ no attenuation and }l\text{ is TL length}$ introduces a stub to have impedance matching.

![[scatter to transfer.png|300]]![[summary of matrices.png|300]]
[Scattering parameters - Wikipedia](https://en.wikipedia.org/wiki/Scattering_parameters)

![[scatter.png|100]]![[scatter-1.png|100]]![[scatter-2.png|100]]![[scatter-3.png|100]]
$A=D_{1}TC_{2}\to T=C_{1}AD_{2}$
![[scatter to transfer matrix.png|300]]![[composition decomposition summary.png|300]]
# Scattering matrix, phase and group speed, dispersion
$l=\frac{\lambda}{4}\text{ transformer}$
$k=\beta=\frac{2\pi}{\lambda}$
$kl=\frac{\pi}{4}$

only works for small bandwidth one frequency range. To match impedance.
![[composite strcuture.png|300]]![[lambda4 layer.png|300]]
![[lambda4 transformer.png|300]]![[group speed and phase speed.png|300]]
$\text{no reflections if: } Z_{2}/Z_{3}=Z_{1}/Z_{2}\implies Z_{2}=\sqrt{ Z_{1}Z_{3} }$
$V_{s}^+=V_{s0}^+(\omega)e^{-jkz}=V_{s0}^+(\omega)e^{-\alpha z}e^{-j\beta z}$
$\text{group speed and phase speed: }\psi^+(z,t)=\omega t-\beta z+\phi^+$ allows us to infer ->
$\text{phase speed: }v_{ph}(\omega)=\frac{z-z_{0}}{t-t_{0}}=\frac{\omega}{\beta}$
$V_{0}^+=f(t)\cos(\omega_{0}t)$ where $\omega_{0}$ carrier wave angular frequency and $f(t)$ slowly varying hull
![[perfect power splitter.png|300]]![[multiple branch problem.png|300]]
![[deriving impedance based on transfer func.png|300]]![[solving the impedance matching.png|300]]
![[14lambda transformer.png|400]]

# Plane waves in arbitrary directions - reflection and refraction at planar interfaces
## Summary
**wavenumber:** $k=\frac{2\pi}{\lambda}=\frac{2\pi f}{c}=\frac{\omega}{c}\implies \text{if not in vaccum speed changes }c=\frac{c_{0}}{n_{1}}\implies \frac{2\pi f}{c_{0}}n_{1}\left\{  \frac{1}{m}\text{ units}  \right\}$

$\text{with wave vector: }\vec{k}=k_{x}a_{x}+k_{y}a_{y}+k_{z}a_{z}$
determine p or s polarization if p polarized then **secondary conditions satisfied**

$k_{2}^2=\frac{k_{1}^2}{n_{1}^2}$

![[polarization p and s.png|300]]![[oblique incidence.png|300]]
![[perpendicular parallel.png|300]]

$\text{positive z propagation linear polarization eg: }E_{s}=(E_{x0}a_{x}+E_{y0}a_{y})e^{-az}e^{-j\beta z}$
if the the phase difference is not $\frac{\pi}{2}$ between 2 components then elliptical
$E_{y_{0}}=0\text{ x polarized eg}\text{ }\phi_{x}=\phi_{y}\text{ diagonally polarized wave}\text{ if }Ex_{0}=E_{y_{0}}\text{ and }\phi_{y}-\phi_{x}=\phi=\pm \frac{\pi}{2}\text{ then circular if } \frac{\pi}{2}\text{ clockwise and }-\frac{\pi}{2}\text{ anti-clockwise if }E_{x_{0}} \neq E_{y_{0}}\text{ and }\phi=\pm \frac{\pi}{2}\text{ and }\phi\neq n \frac{\pi}{2}\text{ then eliptical}$

$\vec{k} \times \vec{E}=\omega \mu \vec{H}$
$\vec{k} \times \vec{H}=-\omega \epsilon \vec{E}$
$\vec{H}=\vec{H_{0}}\exp[-j \vec{k} \vec{r}]$
$\vec{E}=\vec{E_{0}} \exp[-j \vec{k} \vec{r}]$

![[snells law.png|300]]

$\tan\theta_{B}=\frac{\epsilon_{2}}{\epsilon_{1}}=\frac{n_{2}}{n_{1}}$
The brewster's angle is the angle of incidence where light will be perfectly transmitted through a surface with no reflection. The critical angle of internal reflection is when a wave is completely reflected 100% at a certain angle.
![[5EPB0/attachments/Untitled.png|300]]

**reflection and transmission coefficients:**
**s-polarized**
$\Gamma^s=\frac{Z_{2}\cos \theta_{1}-Z_{1}\cos \theta_{2}}{Z_{2}\cos \theta_{1}+Z_{1}\cos \theta_{2}}$
$\tau^s=\frac{2Z_{2}\cos \theta_{1}}{Z_{2}\cos \theta_{1}+Z_{1}\cos \theta_{2}}=1+\Gamma$
**p-polarization:**
$\Gamma^p=\frac{Z_{2}\cos \theta_{2}-Z_{1}\cos \theta_{1}}{Z_{2}\cos \theta_{2}+Z_{1}\cos \theta_{1}}$
$\tau^p=\frac{2Z_{2}\cos \theta_{1}}{Z_{2}\cos \theta_{2}+Z_{1}\cos \theta_{1}}=1+\Gamma$'
$E_{10}^{-}=\frac{Z_{2}-Z_{1}}{Z_{2}+Z_{1}}E_{10}^+=\Gamma E_{10}^+$
$E_{20}^+=\frac{2Z_{2}}{Z_{2}+Z_{1}}E_{10}^+=\tau E_{10}^+$

$\cos \theta_{2}=j\sqrt{ \frac{n_{1}^2}{n_{2}^2}\sin^2\theta_{1} -1}$
**snells law:** $\frac{\sin\theta_{1}}{\sin \theta_{2}}=\frac{n_{2}}{n_{1}}$

$\vec{E_{10}^-}=\vec{E_{1}^+}+\vec{E_{1}^-}=\vec{E_{10}^+}\exp[-j \vec{k_{1}^+} \vec{r}]+\vec{E_{10}^-}\exp[-j \vec{k_{1}^-} \vec{r}]$

1. $\alpha=0,k=\beta:\text{ }E^+=A\exp(-j\beta z)\text{ travelling wave(normal)}$
2. $k=-j\alpha+\beta: \text{ }E^+=A\exp(-\alpha z-j\beta z)\text{ attenuating travelling wave(amplitude decays)}$
3. $\beta=0,k=-j\alpha: \text{ }E^+=A\exp(-\alpha z)\text{ evanescent wave(energy stored not transfered)}$
4. $\alpha=0,k=\beta:\text{ }E=A\sin(\beta z)\text{ Waves of the type sin(kz), cos(kz) are known as standing waves and do not propagate energy.}$
5. $E=A\exp(-ax)\exp(-j\beta z) \text{ Waves that travel in one direction and decay (evanesce) in another direction Inhomogeneous wave}$

## Plane Waves II
### other
[Wavenumber - Wikipedia](https://en.wikipedia.org/wiki/Wavenumber)
$(\nabla ^2+k^2)\vec{E}=\vec{0} \text{ Wave Equation}$
wavenumber, refers to **the spatial frequency of a wave over a specific unit distance**.
A wave number is related to but different from frequency, which is temporal in nature.

Elementary plane wave (EPW): General Solution:
$E=A\exp(-jkz)+B\exp(jkz)$
$H=\frac{1}{Z}[(a_{z} \times A)\exp(-jkz)-(a_{z} \times B)\exp(jkz)]$
**wave number:** $k=\omega \sqrt{ \epsilon \mu }=\frac{2\pi}{\lambda}=\frac{\omega}{c}$ where $c$ is **speed of propagation**
**wave impedance:** $Z=\sqrt{ \mu /\epsilon}$

![[helmholtz equation.png|300]]

**$\vec{E}=\vec{A} e^{-jkz}e^{-j\omega t}$ propagation in space and time... !!!**
$\omega=\frac{2\pi}{T}$ and $\lambda f=c=\frac{1}{\sqrt{ \epsilon \mu }}$ and $\text{ dispersion relation: }\omega=ck$ !!!
dispersion diagram but here we only use the real propagation coefficient so $\lambda=\frac{2\pi}{\beta}\text{ not complex, no attenuation}$
$k_{0}=\frac{\omega}{c}\text{rad/s}\to k_{0}z=k_{0}\lambda=2\pi\to \lambda =\frac{2\pi}{k_{0}}\text{(free space)}$
![[relation between frequency and k.png|300]]

**three types of waves:**
the wave number $k$ is, in general, a complex number: $k=-j\alpha+\beta$
1. $\alpha=0,k=\beta:\text{ }E^+=A\exp(-j\beta z)\text{ travelling wave(normal)}$
2. $k=-j\alpha+\beta: \text{ }E^+=A\exp(-\alpha z-j\beta z)\text{ attenuating travelling wave(amplitude decays)}$
3. $\beta=0,k=-j\alpha: \text{ }E^+=A\exp(-\alpha z)\text{ evanescent wave(energy stored not transfered)}$

**wave polarization:**
- Wave polarization: time-dependent orientation of the E-field vector at a fixed point in space.
- For instance, in case of a travelling wave in the (**depends on direction**) $+z-\text{direction}: E=A\exp(-jkz)\text{ with }A=E_{x}a_{x}+E_{y}a_{y}=E_{x0}e^{j\phi x}a_{x}+E_{y0}e^{j\phi y}a_{y}$
- $E\text{ is magnitude}$
![[5EPB0/attachments/linear polarization.png|200]]![[circular polarization.png|200]]![[elliptical polarization.png|200]]

if the the phase difference is not $\frac{\pi}{2}$ between 2 components then elliptical
![[eliptical example.png|300]]


$\text{positive z propagation linear polarization eg: }E_{s}=(E_{x0}a_{x}+E_{y0}a_{y})e^{-az}e^{-j\beta z}$


$\text{1d wave: Plane Wave: }\vec{E}=\vec{A}e^{-jkz}$
$\text{plane: }\vec{n} \cdot(\vec{r}-\vec{r_{0}})=0\text{ so }kz+\omega t=0\text{ is a plane}$
$\text{plane: } a_{x}+b_{y}+c_{z}+d=0$
what is plane in a plane wave: surface of constant amplitude, surface of constant phase... (for most common plane waves these 2 are the same plane).
![[plane defintion.png|200]]![[plane in any direction.png|200]]![[definition of k.png|200]]


**plane waves in arbitrary directions:**
EPW with arbitrary direction:
$\text{General expression for an EPW: }E=A\exp(-j\vec{k} \cdot \vec{r})$
$\text{with wave vector: }\vec{k}=k_{x}a_{x}+k_{y}a_{y}+k_{z}a_{z}$
!!! WAVE VECTOR AND WAVENUMBER DIFFERENT

$\nabla \times(VA)\equiv \nabla V \times A+V\nabla \times A$ **curl identity applied below:**
$\text{curl: }rotE=\nabla \exp(-j\vec{k}z \cdot \vec{r}) \times A+\exp(-j\vec{k} \cdot \vec{r})\nabla \times A=-j\vec{k} \times E=-j\omega \mu H\implies \text{faraday law}$
$\text{maxwell equations become algebraic: }\vec{k} \times E=\omega \mu H\text{ and }\vec{k} \times H=-\omega \epsilon E$
![[summary of H and E.png|300]]

**EPW: conditions for A and k**
$\text{first condition: }\vec{k} \cdot E=-\frac{1}{\omega \epsilon}\vec{k} \cdot(\vec{k} \times H)=0\to \vec{k} \cdot A=0$
$\text{second condition: }\vec{k} \times(\vec{k} \times E)=$$$ \begin{cases} \omega \mu(\vec{k} \times H)=-\omega^2\epsilon \mu E\\ (\vec{k} \cdot E)\vec{k}-(\vec{k} \cdot \vec{k})E=-(\vec{k} \cdot \vec{k})E \end{cases} $$
$\text{this leads to dispersion relation: }\vec{k} \cdot \vec{k}=\omega^2\epsilon \mu=k^2$
![[A and k conditions.png|300]]

for the 2nd one in the array this identity was used: $A \times(B \times C)\equiv(A \cdot C)B-(A \cdot B)C$

### Converting From E to H
$E(r,t)=10\exp(j(4\pi \times10^6t-4\pi \times10^{-2}z))a_{x}$
Based on format: **$\vec{E}=\vec{A} e^{-jkz}e^{-j\omega t}$
$\mu=\mu_{0}=4\pi \times10^{-7}$
$\vec{k}\times \vec{E}=\omega \mu \vec{H}$
$\vec{H}(\vec{r},t)=\vec{H}(\vec{z},t)\to \text{ omit } e^{j\omega t}$
$\vec{H}=\frac{1}{\omega \mu}\vec{k}\times \vec{E}\text{ where }\vec{k}=k\vec{a_{z}}$
$\vec{H}=\frac{10}{\omega \mu}ke^{-jkz}(\vec{a_{z}}\times \vec{a_{x}})=\frac{10}{\omega \mu}ke^{-jkz}\vec{a_{y}}$

$\text{time avgd power density: }\vec{S_{h}}=\frac{1}{2}Re\{\vec{E} \times \vec{H^*}\}=\frac{10^2}{2} \frac{k}{\mu \omega}\vec{a_{z}}$

## Reflection and Refraction
**only flat discontinuity is considered...**
**boundary conditions essential... are solutions to integral form Maxwell equations**
**Boundary Conditions:**
$\rho_{s}\text{ and } \vec{J_{s}}\text{ are accumulations on infinetly thin surface}$
![[difference between J and Js.png|300]]
$\vec{0}\text{ because square }0\text{ because cylinder}$
![[boundary conditions-3.png|400]]
- only tangential component of electric field at the surface...
- while magnetic tangential field can be discontinuous as it can induce current at the surface which compensates for it...
- normal of electric field can be discontinuous as charges that accumulate at the surface can compensate for it...
- while normal for the magnetic field is continuous: magnetic field in = magnetic field out... one of the Maxwell definitions...
- **for BC keep in mind sign change based on how you choose normal...**


![[normal incidence.png|300]]![[configuration of boundary conditions at an angle.png|300]]


**oblique incidence medium 1:**
![[visual understanding of oblique incidence.png|300]]![[no x component in this situation.png|300]]
- **no fields in PEC(metallic surface)...**
- tangential components near metals vanish...
- $E^+\text{ incident }E^-\text{ reflective wave}$
- $\vec{k}\text{ wave vector while }k\text{ is wave number}$
- the reason we dont use the 2 boundary condition which equal $\rho \text{ or }\vec{J}$ is because we dont know those components on PEC...
- For $x$ component since its normal to surface compared to $y\text{ and }z$ its conditions are the opposite...
- **normal** component of **wave vector** **reflects** (not tangential), **tangential** component of **electric field** **reflects** not the normal one...
![[oblique incidence.png|300]]![[oblique incidence medium 1.png|300]]
![[proof of boundary functions.png|400]]


![[s polarization visual.png|300]]![[s polarization.png|300]]
![[analysis of the plane wave reflections.png|300]]
$E_{1}=a_{y}E_{y10}^+[\exp(-jk_{x1}^+x-jk_{z1}z)\text{(incident)}-\exp(jk_{x1}^\pm -jkz_{z1}^+z)\text{(reflection)}]$
$E_{1}=E^++E^-$
**for H think of right hand rule: middle: k, thumb: E, pointing: H**
>[!NOTE] Deriving Polar Formulas
>$e^{ix}=\cos(x)+i\sin(x)$ : Euler Formula
>$e^{-ix}=\cos(x)-i\sin (x)$
>$-$ for sine: $\sin(x)=\frac{e^{ix}-e^{-ix}}{2i}$
>$+$ for cosine: $\cos(x)=\frac{e^{ix}+e^{-ix}}{2}$


- standing waves are obtained by superposition of plane waves when they are in certain shape...
- **fourth type of wave:**
4. $\alpha=0,k=\beta:\text{ }E=A\sin(\beta z)\text{ Waves of the type sin(kz), cos(kz) are known as standing waves and do not propagate energy.}$


![[power flow density.png|300]]![[power density visual.png|300]]
- traveling power wave everywhere in the x direction...
- at boundary power is 0 then it grows and then again 0
- the circled thing is distructive interference example if you are near car that could impact your fm radio...


**Wave guide:** Conducting plates at $x = 0 \text{ and } x = −d$, lossless medium
Additional **boundary condition:** $a_{x}\times E_{1}|_{x=-d}=0$
this requires: $\sin(k_{x}^+d)=0\to \frac{\omega d}{c_{1}}\cos \theta_{1}=n\pi$
[Waveguide - Wikipedia](https://en.wikipedia.org/wiki/Waveguide)


![[type of medium types.png|200]]![[medium 2 penetrable.png|300]]
![[polarization p and s.png|300]]![[field components of 2 sided wave propagation.png|300]]
- p polarized(right diagram) E field parallel to plane of incidents, while s(right diagram) is perpendicular
- x component vanishses in field component since itsn ormal to the surface and equal 0 when we apply boundary conditions...
- $E_{1y}=E_{2y}\text{ boundary condition for E field (orthogonal)}$
- $H_{1z}=H_{2z}\text{ boundary condntion for H field (orthogoal) since }\vec{J}=0\text{ at Dielectric}$


![[boundary conditions step.png|200]]![[snells law.png|200]]![[calc of kx.png|200]]
- z component only at surface continuous...
- $n_{i}=\frac{c_{0}}{c_{i}}=\sqrt{ \epsilon_{r}\mu_{r} }\text{ratio of speed of light in medium}$


![[reflections and transmission coefficients.png|300]]
**reflection and transmission coefficients:**
$T=1+\Gamma$
**s-polarization:**
if both mediums are dielectric materials ($\mu_{1}=\mu_{2}=\mu_{0}$)
we use $k/\mu=\omega/Z$ for both mediums
$\Gamma^s=\frac{Z_{2}\cos \theta_{1}-Z_{1}\cos \theta_{2}}{Z_{2}\cos \theta_{1}+Z_{1}\cos \theta_{2}}$
$\tau^s=\frac{2Z_{2}\cos \theta_{1}}{Z_{2}\cos \theta_{1}+Z_{1}\cos \theta_{2}}=1+\Gamma$
**p-polarization:**
by exchanging $\epsilon$ for $\mu$ and $E$ for $-H$
$\text{since }k_{x1}^+=k_{1}\cos \theta_{1},k_{x2}=k_{2}\cos \theta_{2},k_{i}/\epsilon_{i}=\omega Z_{i}$
$\Gamma^p=\frac{\epsilon_{1}k_{x2}-\epsilon_{2}k_{x1}^+}{\epsilon_{1}k_{x2}+\epsilon_{2}k_{x1}^+}=\frac{Z_{2}\cos \theta_{2}-Z_{1}\cos \theta_{1}}{Z_{2}\cos \theta_{2}+Z_{1}\cos \theta_{1}}$
$\tau^p=\frac{{2\epsilon_{2}Z_{2}k_{x1}^+}}{\epsilon_{1}Z_{1}k_{x2}+\epsilon_{2}Z_{1}k_{x1}^+}=\frac{2Z_{2}\cos \theta_{1}}{Z_{2}\cos \theta_{2}+Z_{1}\cos \theta_{1}}=1+\Gamma$

### Brewster angle and Critical angle
$\theta _B$ angle at which reflection and refraction are at $90 \degree$ angle means reflected light is polarized to a certain polarization
[Physics 53 Polarization (5 of 5) Brewster's Angle - YouTube](https://www.youtube.com/watch?v=ExVbUdDzEKg)
$\Gamma^p=0\text{ then: }Z_{2}\cos \theta_{2}=Z_{1}\cos \theta_{1}\to \frac{\mu_{2}}{\epsilon_{2}}(1-\sin^2\theta_{2})=\frac{\mu_{1}}{\epsilon_{1}}(1-\sin^2\theta_{1})$
$\text{snells second law: } \frac{\sin \theta_{2}}{\sin \theta_{1}}=\frac{n_{1}}{n_{2}}=\sqrt{ \frac{\mu_{1}\epsilon_{1}}{\mu_{2}\epsilon_{2}} }\to \sin^2\theta_{2}=\frac{\mu_{1}\epsilon_{1}}{\mu_{2}\epsilon_{2}}\sin^2\theta_{1}$
Substitution leads to a linear equation for $\sin^2\theta_{1}$
Solving the equation, it gives:
$\sin^2\theta_{B}=\frac{1-\frac{\epsilon_{1}\mu_{2}}{\epsilon_{2}\mu_{1}}}{1-\left( \frac{\epsilon_{1}}{\epsilon_{2}} \right)^2}$
![[if material not magnetic.png|400]]
$\tan^2\theta_{B}=\frac{\epsilon_{2}}{\epsilon_{1}}=\frac{n_{2}^2}{n_{1}^2}$


![[5EPB0/attachments/TIR.png|300]]![[inhomogeneous plane wave.png|300]]
5. $E=A\exp(-ax)\exp(-j\beta z) \text{ Waves that travel in one direction and decay (evanesce) in another direction Inhomogeneous wave}$
# Guided waves
## Summary
 $n_{1}>n_{2}\text{ then we have TIR, reasoning behind dielectric slab...}$
 ![[field description of TM modes inside and outside.png|300]]

![[TETM modes.png|300]]![[TM modes.png|300]]![[TE modes.png|300]]![[decoupling.png|300]]

### Resonant Cavities
- **TE Modes:**
  - Fundamental equation:
    $\nabla^2 H_{z} + \kappa^2_{mnp} H_{z} = 0$
    IF TM $\nabla^2 E_{z} + \kappa^2_{mnp} E_{z} = 0$
  - Solution with boundary conditions:
    $H_{z} = C\cos(\kappa_{m}x)\cos(\kappa_{n}y)\sin(\kappa_{p}z)$
    $\kappa_{p} = \frac{p\pi}{c}$
  - Cutoff frequencies:
    $f_{mnp} = \frac{1}{2\pi \sqrt{\epsilon \mu}} \sqrt{\left(\frac{m\pi}{a}\right)^2 + \left(\frac{n\pi}{b}\right)^2 + \left(\frac{p\pi}{c}\right)^2}$
    **cutoff frequency**, **corner frequency**, or **break frequency** is a boundary in a system's frequency response at which energy flowing through the system begins to be reduced (attenuated or reflected) rather than passing through.
    n=2 means two half-wavelengths fit along the y-axis.

The indices m, n, and p in the context of resonant cavities represent the mode numbers, which correspond to the number of half-wavelengths of the standing wave pattern along each of the three spatial dimensions (x, y, and z) inside the cavity.
### Dielectric Slab Waveguides
- **Waveguide Structure:**
  - For $n_{1} > n_{2}$, Total Internal Reflection (TIR) occurs.
  - Fields in each region:
    $\{E,H\}(x,z) = \{\vec{E},\vec{H}\}(z)\exp(-j\beta_{i}z)$
  
- **TM Modes:**
  - Inside the slab:
    $E_{z}(x,z) = \vec{E}_{z}(x)\exp(-j\beta z)$
    $\delta^2_{x}\vec{E_{z_{i}}}(x) + \kappa_{i}^2\vec{E_{z_{i}}}(x) = 0$
    $\kappa_{i}^2 = \omega^2\epsilon_{i}\mu_{i} - \beta^2$
  - ODD modes:
    $\vec{E_{z}}(x) = E_{0o}\sin(\kappa_{1}x)$
    $\gamma_{2} = \frac{\epsilon_{0}}{\epsilon_{1}}\kappa_{1}\tan\left(\frac{\kappa_{1}d}{2}\right)$
  - EVEN modes:
    $\vec{E_{z}}(x) = E_{0e}\cos(\kappa_{1}x)$
    $\gamma_{2} = -\frac{\epsilon_{0}}{\epsilon_{1}}\kappa_{1}\cot\left(\frac{\kappa_{1}d}{2}\right)$

- **TE Mode Summary:**
  - Similar expressions for TE modes can be derived by replacing $E_z$ with $H_z$ and adjusting boundary conditions.
  
- **Key Relationships:**
  - Evanescent field decay constant:
    $\gamma_2 = n_2 k_0 \left(\left(\frac{n_1}{n_2}\right)^2 \sin^2 \theta_1 - 1\right)^{1/2}$
  - Phase condition for modes:
    $\kappa_1 d + \phi_{TE} + \kappa_1 d + \phi_{TE} = 2m\pi$
    $\kappa_1 d + \phi_{TM} + \kappa_1 d + \phi_{TM} = 2m\pi$
  - Single mode condition:
    $k_0 d \sqrt{n_1^2 - n_2^2} \geq (m - 1)\pi \quad (m = 1, 2, 3, \ldots)$
    $\lambda > 2d\sqrt{n_1^2 - n_2^2} \quad \text{since } k=\frac{2\pi}{\lambda}$


## Parallel-Plate Waveguide
[Waveguides Explained - YouTube](https://www.youtube.com/watch?v=r9-m17IPOco)
![[mode propagation.png|200]]

[Slab Waveguide Explained - YouTube](https://www.youtube.com/watch?v=YwsBo36XYc0)
[Origin of TE and TM Modes - YouTube](https://www.youtube.com/watch?v=dYKGsJGPsDo)
- ampere, faraday law, $\gamma$ must be imaginary otherwise wave decays wont work.
- $\kappa_{m}^2=\omega^2\epsilon \mu+\gamma ^2$
- $\text{model index: }\kappa_{m}=\frac{m\pi}{d}$
![[basic assumption.png|300]]![[decoupling.png|300]]

- polarisation in terms of wave guides
- fundamental unknwon: able to find all other of the total 6 components
- $\text{TE Waves: Take }\vec{E}_{y}\text{ as fundamental unknown}$
- $\delta^2_{x}\vec{E_{y}}=-\kappa_{m}^2\vec{E_{y}}\to \vec{E}_{y(x)}=A\sin(\kappa_{m}x)+B\cos(\kappa_{m}x)$
- $\text{Based on boundary conditions: }\vec{E}_{y|x=0}=0\text{ and }\vec{E}_{y|x=a}=0$
- $\text{B has to be 0 }\vec{E}_{y(0)}=B=0\text{ and }\vec{E}_{y(a)}=A\sin(\kappa_{m}a)=0$
- $\text{the second part can only be 0 if: }\kappa_{m}=\frac{m\pi}{a}$
- $\vec{E}_{y}=E_{0}\sin\left( \frac{m\pi}a{x} \right)$
- Since TE waves... $E_{z}\text{ and }E_{x}=0$
- $m\neq 0\text{ TE waves}$
- $\text{TE wave: }E_{y},H_{z},H_{x}$
- decoupling:
- $\vec{H_{z}}=-\frac{1}{j\omega \mu}\delta_{x}\vec{E_{y}}=-\frac{m\pi}{j\omega \mu a}E_{0}\cos\left( \frac{m\pi}a{x} \right)$
- $\vec{H_{x}}=-\frac{\gamma}{j\omega \mu} \vec{E_{y}}=-\frac{\gamma}{j\omega \mu}E_{0}\sin\left( \frac{m\pi}{a}x \right)$
![[field distribution.png|200]]![[solution of Hx and Hz from book.png|200]]

- TM Waves: 
- $\vec{H_{y}}=H_{0}\cos\left( \frac{m\pi}{a}x \right)$
- $\vec{E_{x}}=\frac{\gamma}{j\omega \epsilon}H_{0}\cos\left( \frac{m\pi}{a}x \right)$
- $\vec{E_{z}}=\frac{jm\pi}{\omega \epsilon a}H_{0}\sin\left( \frac{m\pi}{a}x \right)$
![[field distribution tm.png|200]]

- TEM Waves:
- $\vec{H_{y}}=E_{0}$
- $\vec{E_{x}}=\frac{\gamma}{j\omega \epsilon}E_{0}$
- $\vec{E_{z}}=0$
![[field distribution tem.png|200]]
## Rectangular Waveguides
- **The rectangular guide will support the TE and TM modes, but it will not support a TEM mode.**
- $\text{propagation coefficient: }j\gamma \text{ free space: }\beta$
- so the graph $\omega,(j\gamma/\beta)\text{ has straight line if }j\gamma \text{ since plane wave, otherwise if }\beta=\frac{\omega}{c}\text{ not straight...}$
- $j\gamma=\sqrt{ k^2 -\frac{m^2\pi^2}{a^2}}$
- $\kappa=\sqrt{ k^2-\beta^2 }\text{ and }\kappa_{mp}=\sqrt{ k^2 -\beta_{mp}^2}\text{ where }k=\omega \sqrt{ \mu \epsilon }$
- $\text{phase constant: }\beta_{mp}=\sqrt{ k^2-\kappa^2_{mp} }$
- before only plates on top bottoms, now on left and right...
- $\kappa^2_{mp}=\omega^2\epsilon \mu+\gamma^2$
- $x=a\text{ and }y=b\text{ so }\kappa_{m}=\frac{m\pi}{a}\text{ and }\kappa_{p}=\frac{p\pi}{b}$
- certain combination of $m\text{ and }p$ there is a certain frequency ($\gamma \text{ must be negative}$)...
- $\text{propagation coefficient TM/TE: }\gamma=\sqrt{ \kappa_{mp}^2-\omega^2\epsilon \mu }=\sqrt{ \kappa_{m}^2+\kappa_{p}^2-\omega^2\epsilon \mu }=\sqrt{ \left( \frac{m\pi}{\alpha} \right)^2+\left( \frac{p\pi}{b} \right)^2-\omega^2\epsilon \mu }$
- $\text{cutoff frequency where: }\alpha=\beta=0\implies \frac{\omega_{mp}}{c}=\sqrt{ \left( \frac{m\pi}{\alpha} \right)^2+\left( \frac{p\pi}{b} \right)^2 }$
- $\text{if } \frac{\omega^2}{c^2}<\left( \frac{m\pi}{a} \right)^2+\left( \frac{p\pi}{b} \right)^2\text{ then }\alpha>0\text{ and }\beta=0\text{ then the wave attenuates}$
- $\text{if } \frac{\omega^2}{c^2}>\left( \frac{m\pi}{a} \right)^2+\left( \frac{p\pi}{b} \right)^2\text{ then }\alpha=0\text{ and }\beta>0\text{ then the wave propagates}$
![[definition of propagation and cutoff frequency.png|200]]
- when TE/TM have same cutoff frequency: degenerate mode
- $TE_{10}\to a=2b\text{ waveguide dimensions...}$



![[TM wave components.png|TM Wave Components|400]]
![[TE Wave components.png|TE Wave Components|400]]
![[TEm0 modes.png|TEm0 Wave Components|400]]
![[TE0p wave components.png|TE0p Wave Components|400]]


- $\text{phase constant: }\beta_{mp}=\sqrt{ k^2 -\kappa^2_{mp}}=\sqrt{k^2- \left( \frac{m\pi}{a} \right)^2- \left( \frac{p\pi}{b} \right)^2 }$
- $\text{ if }k=\omega \sqrt{ \mu \epsilon }\text{ and radian cutoff frequency: }\omega_{Cmp}\text{ then }\beta_{mp}=\omega \sqrt{ \mu \epsilon }\sqrt{ 1-\left( \frac{\omega_{Cmp}}{\omega} \right)^2 }$
- must exceed $\omega_{Cmp}$ to achieve real value for $\beta_{mp}$ so mp propagates...
- $a,b,\epsilon_{r},\mu_{r}\text{ determine number of modes}$
- $\omega_{Cmp}=\frac{1}{\sqrt{ \mu \epsilon }}\left[ \left( \frac{m\pi}{a} \right)^2+(\frac{p\pi}{b})^2 \right]^{1/2}$
- $\text{if }\mu_{r}=1\text{ and }n=\sqrt{ \epsilon_{r} }\text{ and }c=1/\sqrt{ \mu_{0}\epsilon_{0} }\to \omega_{Cmp}=\frac{c}{n}\left[ \left( \frac{m\pi}{a} \right)^2+\left( \frac{p\pi}{b} \right)^2 \right]^{-1/2}$
- $\text{this leads to free space cutoff wavelength }\lambda=\frac{2\pi c}{\omega_{Cmp}}=2n\left[ \left( \frac{m}{a} \right)^2+\left( \frac{p}{b} \right)^2 \right]^{-1/2}$
- $\text{so as long as }TE_{mp}\text{ and }TM_{mp}\text{ wavelength }\lambda<\lambda_{Cmp}\text{ then can propagate }\beta=\frac{2\pi n}{\lambda}\sqrt{ 1-\frac{\lambda}{\lambda_{Cmp}} }$
- $\text{cutoff wavelength }TE_{m0}\to \lambda_{Cm0}=2na$
- $\text{cutoff frequency }TE_{0p}\to \omega_{C0p}=\frac{p\pi c}{nb}$
- cutoff for both is same frequency and wavelength...


![[field equations 1.png|200]]![[field euqations 2.png|200 ]]![[decoupling the field.png|200]]
![[TETM modes.png|200]]![[TM modes.png|200]]![[TE modes.png|200]]
![[TE modes-1.png|200]]![[propagation coefficient.png|200]]![[cutoff frequency.png|200]]
![[TM modes 2.png|400]]
![[proof of propagation and evanescence.png|400]]
## Resonant Cavities and Dielectric Slab Waveguides
- for decoupling, only cavity formulas given (closed book) look and remember how those equations for parallel and rectangular those look like...
- $n_{1}>n_{2}\text{ then we have TIR, reasoning behind dielectric slab...}$
- [Evanescent field - Wikipedia](https://en.wikipedia.org/wiki/Evanescent_field#:~:text=In%20electromagnetics%2C%20an%20evanescent%20field,(oscillating%20charges%20and%20currents).)
![[dielectric slab propagation.png|300]]![[odd and even electromagnetic propagation refreaction.png|200]]
- so modes of TE, TM also split into (odd/even)
- standing wave inside, and 2 evanescent waves outside

### Resonant Cavities
fully enclosed space... producing standing waves inside... no direction of propagation
![[maxwell equations-1.png|200]]![[decoupling for cavity space.png|300]]
$\text{for TE modes }H_{z}\text{ is the fundamental unknown }\nabla^2H_{z}+\kappa^2_{mnp}H_{z}=0\to H_{z}=\cos(\kappa_{m}x)\cos(\kappa_{n}y)[A\cos(\kappa_{p}z)+B\sin(\kappa_{p}z)]$
$\text{boundary conditions applied: }H_{z|z=0,z=c}=0\to H_{z}=C\cos(\kappa_{m}x)\cos(\kappa_{n}y)\sin(\kappa_{p}z)$
$\kappa_{p}=\frac{p\pi}{c}$
even though now no propagation in (z) we still state it (**standard**).
![[complete field components for TE modes.png|300]]
$\kappa_{mnp}=\sqrt{ \kappa_{m}^2 +\kappa^2_{n}+\kappa_{p}^2}\to \text{cutoff frequencies: }f_{mnp}=\frac{1}{2\pi \sqrt{ \epsilon \mu }}\sqrt{ \left( \frac{m\pi}{a} \right)^2+\left( \frac{n\pi}{b} \right)^2 +\left( \frac{p\pi}{c} \right)^2}$
### Dielectric Slab
- not using metal but plastic, with $n_{1}(internal)>n_{2}(external)$
- assume no $y$ dependence for each homogeneous region $i$ : $\{E,H\}(x,z)=\{\vec{E},\vec{H}\}(z)\exp(-j\beta_{i}z)$
![[decoupling of field components of dielectric slab.png|300]]![[field description for tm modes.png|200]]
for outside $n_{1}\to \text{where }x=\pm \frac{d}{2}\text{ }E\text{ and }H\text{ are continuous... }\text{for all z: }\beta_{1}=\beta_{2}=\beta \text{ but }\kappa_{1}\neq \kappa_{2}\text{ since different mterial properties...}$
**solutions expressed in TM/TE modes below is analysis for TM:**
$E_{z}(x,z)=\vec{E}_{z}(x)\exp(-j\beta z)$ where $\delta^2_{x}\vec{E_{z_{i}}}(x)+\kappa_{i}^2\vec{E_{z_{i}}}(x)=0\text{ where }\kappa_{i}^2=\omega^2\epsilon_{i}\mu_{i}-\beta^2$
![[field description of TM modes inside and outside.png|inside and outside|300]]![[field tm modes look.png|200]]![[odd tm modes.png|200]]
$\text{continuity of }\vec{H_{y}}(x)\text{ at }x=\pm \frac{d}{2}\text{ result in: }$ 
$\vec{E_{z}}(x)=E_{0o}\sin(\kappa_{1}x)\text{ results in } \gamma_{2}=\frac{\epsilon_{0}}{\epsilon_{1}}\kappa_{1}\tan\left( \frac{\kappa_{1}d}{2} \right)$**ODD**
$\vec{E_{z}}(x)=E_{0e}\cos(\kappa_{1}x)\text{ results in } \gamma_{2}=-\frac{\epsilon_{0}}{\epsilon_{1}}\kappa_{1}\cot\left( \frac{\kappa_{1}d}{2} \right)$**EVEN**
$\text{since we know: }\kappa_{1}=\sqrt{ \omega^2\epsilon_{1}\mu_{1}-\beta^2 }>0$
$\gamma_{2}^2+\kappa_{1}^2=(\beta^2-\omega^2\epsilon_{0}\mu_{0})+(\omega^2\epsilon_{1}\mu_{1}-\beta^2)=\omega^2(\epsilon_{1}\mu_{1}-\epsilon_{0}\mu_{0})$
![[tm modes in general.png|200]]![[cutoff frequnecies.png|200]]![[cutoff frequnecies-1.png|200]]

**FINALLY FOR TE MODE SIMILAR:**
![[TE MODES IN DIELECTRIC SLAB.png|200]]![[interpretation of dielctric slab inside.png|200]]![[interpreation of dielectric slab outside.png|200]]

$\sin \theta_c = \frac{n_2}{n_1}$

$\Gamma_s = \frac{\eta_{2s} - \eta_{1s}}{\eta_{2s} + \eta_{1s}}$

$\Gamma_p = \frac{\eta_{2p} - \eta_{1p}}{\eta_{2p} + \eta_{1p}}$

$\eta_{2s} = \eta_2 \cos \theta_2$

$\eta_{2p} = \eta_2 / \cos \theta_2$

$\cos \theta_2 = \sqrt{1 - \left( \frac{n_1}{n_2} \sin \theta_1 \right)^2}$
-------------------------------------------------------------
$E_{y1s} = 2E_0 \cos(\kappa_1 x) e^{-j\beta z} \quad \left( -\frac{d}{2} < x < \frac{d}{2} \right)$

$E_{y2s} = E_0 \cos\left( \kappa_1 \frac{d}{2} \right) e^{-\gamma_2 (x - d/2)} e^{-j\beta z} \quad (x > d/2)$

$E_{y1s} = 2j E_0 \sin(\kappa_1 x) e^{-j\beta z} \quad \left( -\frac{d}{2} < x < \frac{d}{2} \right)$

$E_{y2s} = E_0 e^{\gamma_2 (x + d/2)} e^{-j\beta z} \quad (x < -d/2)$
![[final even and odd formulation.png|300]]
--------------------------------------------------------------
$\gamma_2 = n_2 k_0 \left( \left( \frac{n_1}{n_2} \right)^2 \sin^2 \theta_1 - 1 \right)^{1/2}$

$\kappa_1 d + \phi_{TE} + \kappa_1 d + \phi_{TE} = 2m\pi$

$\kappa_1 d + \phi_{TM} + \kappa_1 d + \phi_{TM} = 2m\pi$

$k_0 d \sqrt{n_1^2 - n_2^2} \geq (m - 1)\pi \quad (m = 1, 2, 3, \ldots)$

$k_0 d \sqrt{n_1^2 - n_2^2} < \pi$ single mode condition

$\lambda > 2d\sqrt{n_1^2 - n_2^2}\text{ since }k=\frac{2\pi}{\lambda}$ wavelength range of single mode operation
# Radiation
## Summary
see behavior of far field and how dipole electric properties behave ($r$)

$S_{h,max}=\frac{G_{d}P_{rad}}{4\pi r^2}$ **Radiated Power**
$S_{h}=\frac{1}{2}R\{ E \times H^* \}=\frac{\mid E_{\theta}\mid^2}{2Z_{0}(377 \Omega)}$ **Electric Field Calculation**

## The Electric Point Dipole
![[deriving the dipole field equation.png|200]]![[expressing magnetic field.png|200]]![[expressing electric field.png|200]]
![[inhomogeneous helmholtz equation p1.png|300]]![[p2.png|300]]

![[field equations of dipole.png|200]]
we can eliminate **E** $E=\frac{1}{j\omega \epsilon}[\nabla \times H-J_{0}]\to \text{sub into faraday law: }\nabla \times \left[ \frac{1}{j\omega \epsilon}\nabla \times H-\frac{1}{j\omega \epsilon}J_{0} \right]+j\omega \mu H=0$
$\text{with }\nabla \cdot H=0\text{ and }k^2=\omega^2\epsilon \mu \text{ we get inhomogeneous helmholtz eq: }\nabla ^2H+k^2H=-\nabla \times J_{0}$
$\nabla \cdot B=0\to B=\mu H=\nabla \times A\text{ sub into faraday law: }\nabla \times E+j\omega \mu H=0\to \nabla \times(E+j\omega A)=0\to E=-\nabla \Psi-j\omega A$
$\text{vector potential: }A(r)\text{ Scalar potential: }\Psi(r)$
![[inhomogeneous helmholtz equation lorenz gauge.png|300]]
### Point Dipole
![[point dipole electric density.png|200]]![[point dipole potential.png|200]]![[vector potential amplitude.png|200]]
$\text{potential: }rA_{z}=C^+\exp(-jkr)+C^-\exp(jkr)$
$A=\frac{\mu I_{0}d}{4\pi r}\exp(-jkr)a_{z}$
![[magnetic field calculation.png|200]]![[magnetic field calculation-1.png|200]]
$H=I_{0}d\left( jk+\frac{1}{r} \right) \frac{\exp(-jkr)}{4\pi r}\sin(\theta)a_{\phi}$
![[electric field calculation.png|200]]![[electric field calculation-1.png|200]]![[electric field calculation-2.png|200]]
$E=\frac{1}{j\omega \epsilon \mu}[\nabla \nabla \cdot A+k^2A]$
- The solution is a spherical, two-dimensional wave: the fields only depend on r and θ. 
- The solution is a TM-wave: there is no magnetic field component in the direction of propagation. 
- The wave propagates radially in all directions.

![[radiated power calculation.png|300]]
$\beta=\omega \sqrt{ \mu \epsilon } \text{ and } Z=\sqrt{ \frac{\mu}{\epsilon} } \to \vec{S_{h}}=|I_{0}|^2(\beta d)^2Z \frac{\sin^2(\theta)}{32\pi^2r^2}$
## Magnetic point dipole & Antenna Specifications
[Near and far field - Wikipedia](https://en.wikipedia.org/wiki/Near_and_far_field)
where antenna radiates: radiation pattern...
![[radiation pattern.png|300]]![[antenna load application.png|300]]
![[magnetic dipole antenna.png|200]]
solving magnetic dipole:
- working out fields
- using duality
- using potentials
### duality
pick solutions for electric dipole and replace:
- $E\text{ with }H$
- $H\text{ with }-E$
- $\epsilon \text{ with }\mu$
- $\mu \text{ with }\epsilon$
- $d\text{ with }j\omega \epsilon(\pi a^2)$
![[solutions become.png|200]]
### potentials
![[magnetic dipole potentials.png|300]]
### antennas
**far field, radiation pattern, radiation resistance, directive gain**
#### far field
![[far field how the parameters change.png|300]]
#### radiation pattern
as shown on the picture of the board its a polar diagram $\vec{S_{h}}(\theta,\phi)\text{ as function of }\theta \text{ and }\phi \text{ with }\vec{S_{h}}\text{ at large length from antenna}$
![[radiation patten-1.png|200]]
#### radiation resistance
![[radiation resistance.png|300]]![[power from a point dipole.png|300]]
as derived on the board, its needed to have a proper antenna circuit, we only care about the real part...
$\text{avg power: }P_{r}=40\pi^2\left( \frac{I_{0}d}{\lambda} \right)^2W=\frac{1}{2}I_{0}^2R_{rad}\text{ since radiation resistance: }R_{rad}=\frac{2P_{r}}{I_{0}^2}=80\pi^2\left( \frac{d}{\lambda} \right)^2$
#### directive gain
$\text{for point dipole }G_{d}=1.5\to G_{d}=\frac{\vec{S_{h}}(\theta,\phi)_{max}}{\vec{P_{h}}/(4\pi r^2)}$
The directive gain of an antenna is the ratio of the maximum power flux in the far field, and total power divided by $4\pi r^2$ (i.e. the power radiated by an isotropic radiator).
$\eta_{r}=\frac{P_{r}}{P_{in}}=\frac{G(\theta,\phi)}{D(\theta,\phi)}=\frac{G_{max}}{D_{max}}$
$D(\theta,\phi)=\frac{1}{\eta_{r}}G(\theta,\phi)$
## Dipole Arrays
controlling distance and phase...
![[example of controlling the dipole antenna.png|300]]![[2 dipoles analysis.png|300]]
![[dipole array control.png|200]]![[pair of dipoles.png|200]]![[pair of dipoles assumptions.png|200]]
![[pair of dipoles total field.png|200]]![[pair of dipoles radiated power.png|200]]![[array factor.png|200]]
![[n element linear arrays.png|200]]
$\vec{E_{total}}=jZ \frac{I_{0}L\beta}{4\pi} \frac{e^{-j\beta r}}{r}\left[ 2e^{j a/2}\cos\left( \beta  \frac{d}{2} \right)\cos \phi+\frac{a}{2} \right]a_{\theta}$
$\text{array factor }\vec{S_{h}}=F_{unit}F_{array}a_{r}$

![[three dipoles example.png|300]]