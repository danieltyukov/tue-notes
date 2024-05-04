# Waves in time and one spatial dimension
[Uniform Plane Waves: A 3D Journey to the Simplest Electromagnetic Wave Propagation](https://www.youtube.com/watch?v=zUBXiTkrmSo)
[Transmission Lines: Part 1 An Introduction](https://www.youtube.com/watch?v=yezmCNGTVYU)
[Maxwell Equations](https://www.youtube.com/watch?v=lMSgNwwrGlM)
[But how exactly do the voltage and current propagate through transmission lines?](https://www.youtube.com/watch?v=MbzmAE6s7SI&t=1s)
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
$\epsilon\geq \epsilon_{0}\text{ and }\mu\geq \mu_{0}$
at steady state TL is ignored
![[one way wave propagation.png|one way wave propagation|300]]![[one way wave equation decomposition.png|one way wave quation decomposition|196]]
-: progressive wave; +: regressive wave

$\frac{\delta I^{\pm}}{\delta t}=\pm\frac{1}{\mu_{0}c_{0}} \frac{\delta V^{\pm}}{\delta t}\implies I^{\pm}=\pm Y_{0}V^{\pm}\left( t\mp \frac{z}{c_{0}} \right)$ since $Y_{0}=\frac{1}{\mu_{0}c_{0}}=\sqrt{ \frac{\epsilon_{0}}{\mu_{0}} } \text{ free space plane wave admittance}\implies Z_{0}=\mu_{0}c_{0}=\frac{1}{Y_{0}}=\sqrt{ \frac{\mu_{0}}{\epsilon_{0}} }\to V^{\pm}=\pm Z_{0}I^{\pm}$
$\text{in summary: }I^{\pm}=\pm YV^\pm,V^\pm=\pm ZI^\pm$
## TEM-wave propagation along transmission lines (Transverse)
![[perfect electric conductor PEC.png|300]]![[free space uniform plane wave.png|238]]
![[application of boundary condition in a wire.png|boundary condition application wire|300]]
$LC=\mu \epsilon=\frac{1}{c^2}\to V=V^+\left( t-\frac{z}{c} \right)+V^-\left( t+\frac{z}{c} \right)\implies\left( \frac{\delta^2}{\delta z^2}-LC \frac{\delta^2}{\delta t^2} \right)V=0$
characteristic impedance: $Z=\frac{1}{Y}=\sqrt{ \frac{L}{C} }$
$V=V^++V^- \to I^+\left( t-\frac{z}{c} \right)=+YV^+\left( t-\frac{z}{c} \right)$
$I=I^++I^- \to I^-\left( t+\frac{z}{c} \right)=-YV^-\left( t+\frac{z}{c} \right)$
lumped components: $V(z,t)-V(z+\nabla z,t)=L\nabla z \frac{\delta I}{\delta t}(z,t)\text{ and } I(z,t)-I(z+\nabla z,t)=C\nabla z \frac{\delta V}{\delta t}(z,t)$
## Wave reflection
![[wave (de)composition.png|wave (de)composition|300]]![[wave composition example.png|wave composition|300]]
composition: $V^+\text{ and }V^-$ can compose $V\text{ and }I$
decomposition: $V\text{ and }I$ can decompose pro(re)gressive wave $V^+\text{ and }V^-$
$\Gamma$ reflection coefficient $V^-(t)=\Gamma V^+(t)$
$\frac{V(0,t)}{I(0,t)}=Z \frac{1+\Gamma}{1-\Gamma}=Z_{L}$ and so $\Gamma=\frac{Z_{L}-Z}{Z_{L}+Z}$
$\Gamma_{OC}=1$ and $\Gamma_{SC}=-1$
when there sudden OC -> compensation $I\text{ and }V\text{ are negative}$
$v=\frac{d}{t}$ so time of propagation $\frac{t}{2}$
$\text{steady state: }V(\infty,0)=0\text{ and }I(\infty,0)=0$
$\text{if TL length smaller than } \frac{1}{10}\lambda\to \text{imediatly steady state}$
![[transmission line example.png|transmission line|333]]![[wave decomposition.png|wave decomposition|200]]
![[voltage bounce diagram.png|voltage bounce diagram|400]]
![[current bounce diagram.png|current bounce diagram|400]]
![[detailed bounce diagram.png|bounce diagram detailed|600]]


