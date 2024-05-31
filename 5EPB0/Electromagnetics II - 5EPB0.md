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
![[boundary conditions.png|300]]![[transient signal transfer.png|265]]
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

**!!!** **moment in time just after the switch has been activated, but before possible reflections from the end of the line have returned: **$\frac{V_{comp}}{Z}+I_{steady}=0\text{ since }I_{total}|_{z=0,t>0}$
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

# Stuff Missed During Midterm
# Plane waves in arbitrary directions - reflection and refraction at planar interfaces
$kx-\omega t$