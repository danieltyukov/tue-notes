# Quantities and Units of Light (Ch 1,2)
## Electromagnetic Spectrum

>[!NOTE] Basic Units
>- $\lambda=\frac{c}{nf}=\frac{v}{f}\text{ where }n\text{ is refractive index and }v=\frac{c}{n}$
>- $f[THz]\text{ , }\lambda[nm]\text{ , }n[-]\text{ , }v=\frac{c}{n}[km/s]$
>- $\text{wave num: }\sigma=\frac{1}{\lambda}\left[ \frac{1}{cm} \right]$
>- $\text{wave num (EM): }k=\frac{2\pi}{\lambda}\left[ \frac{1}{cm} \right]$
>- $\text{photon energy: }E=h(\text{planck const}) \cdot f[eV]$

## Solid Angle

![[solid angle visual.png|500]]
$\alpha=\frac{l}{r}\to \alpha_{tot}=\frac{2\pi r}{r}=2\pi[rad]$
$\text{solid angle: }\Omega=\frac{A}{r^2}\to \Omega_{tot}= \frac{4\pi r^2}{r^2}=4\pi[sr(\text{steraradians})]=\frac{dS\cos \theta}{D^2}$
$d \Omega=\sin \theta d\theta d\phi \text{ polar angle: }(0\leq \theta\leq \pi)\text{ azimuthal angle: }(0\leq \phi\leq 2\pi)$
$\Omega=\int  \, d\Omega=\int^{2\pi}_{0} \int^{\theta_{max}}_{0}  \, \sin \theta d\theta \, d\phi \text{ where }\theta_{max}=\arcsin\left( \frac{\frac{d}{2}}{s} \right)$
## Energetic Quantities

$\text{radiant energy: }Q^e[J(joule)]$
$\text{radiant flux (radiation through surface per time unit): }F^e=\frac{dQ^e}{dt}[W(watt)]$
![[radiant flux.png|200]]
$\text{radiant intensity (radiant flux in given direction per unit solid angle for point source): }I^e=\frac{dF^e}{d\Omega}\left[ \frac{Watt}{sr} \right]$
![[radiant intensity visual.png|200]]
$\text{radiance (Radiant intensity of a surface around a given point in a given direction per unit of effective area of the surface): }L^e=\frac{dI^e}{dS_{eff}}[Watt/sr/m^2]\text{ where }dS_{eff}=dS\cos(\theta)$
![[radiance.png|200]]
$\text{radiant exitance (radiant flux emitted per unit area): }M^e=\frac{dF^e}{dS}[Watt/m^2]$
![[radiant exitance.png|200]]
$\text{irradiance (radiant flux received per unit area): }E^e=\frac{dF^e}{dS}[Watt/m^2]$
![[irradiance.png|200]]
![[types of geometric radiation.png|400]]

$\text{spectral density [subscript S] (Quantity per wavelength interval (PART OF ALL THE ENERGETIC QUANTITIES)) eg radiant flux: }F^e_{S}(\lambda)=\frac{dF^e}{d\lambda}$
It is the radiant flux in an interval $d\lambda$ around a wavelength $\lambda$, divided by this wavelength interval (in $W/nm$).
## Photoelectric Quantities
- photometric quantities take the response of the eye into account by taking visibility curve into account $V(\lambda)$.
- no superscript $e$ otherwise same as energetic quantities.
- spectral density and visibility curve used for conversion $V(\lambda)$.
$F_{S}^e\text{ radiant flux}\to F\text{ luminous flux }F=K\int F_{s}^e(\lambda)V(\lambda) \, d\lambda \text{ where }K=683[lumen/watt(lm/W)]$
- Luminous intensity $[lm/sr]=\text{candela }cd$ - I
- Luminance $[cd/m^2]$ - L
- Luminous exitance $[lm/m^2]$ - M
- Illuminance $[lm/m^2]=\text{lux}$ - E

$\text{spectral density: }F_{s}(\lambda)=KV(\lambda)F_{s}^e(\lambda)$
![[unit relation.png|500]]
##  Relations between different quantities (Illuminance)
$dF\text{ radiant energy can also be optained: }Power[Watt] \cdot \text{conversion efficiency}[lm/Watt]$
![[point source illuminance.png|500]]
![[not a point source illuminance.png|500]]
![[ratina illuminance.png|500]]
![[lamberts law.png|500]]

# Geometrical Optics (Ch 3)
## General concepts
$dSd\Omega \approx \lambda^2\text{ otherwise useless, defraction theory}$
$\text{medium: }v=\frac{c}{n}$
$\text{time propagation: }\Delta t_{P\to P'}=\frac{d}{v}=\frac{nd}{v}$
$\text{optical path length: }L_{o}=nd$
$$\text{fermat principle: shortest path for light: }L_{o}=\int_{P}^{P'} n(r) \, ds=c \Delta t\text{ where Inhomogeneous optical medium: refractive index: }n(r)$$
$$\text{snell law: }n\sin \theta=n'\sin \theta'\to \theta_{crit}=\arcsin\left( \frac{n'}{n} \right)\text{ where }\theta_{crit}=\theta \text{ and }90 \degree=\theta'\text{ if }\theta\geq \theta_{cri}\to TIR$$
![[mirror reflections.png|300]]
$$\text{fresnel laws (reflection/transmission coefficients): }R=\left( \frac{n-n'}{n+n'} \right)^2\text{ and }T=1-R=\frac{4nn'}{(n+n')^2}$$
## Paraxial theory of imaging systems
### Paraxial approximation & examples
**Paraxial**=small angle with optical axis
$\sin \theta \approx \theta,\tan \theta \approx \theta,\cos \theta \approx 1$
$\text{snell law: }n\theta=n'\theta'$
![[paraxial approximation figure.png|300]]![[paraxial approximation equations.png|300]]
![[imaging.png|300]]![[magnification.png|300]]
$m_{a}=\frac{\theta'}{\theta}\approx \frac{x'/(L+|s'|)}{x/(L+|s|)}=m_{x} \frac{L+|s|}{L+|s'|}\text{ see fish bowl question}$
### Matrix formalism
[[Math I - 2DE20]]
![[basics of matrix formalism.png|150]]![[refraction and translation in matrix formalism.png|300]]
$r=\begin{bmatrix}x\\ na \end{bmatrix}$
$\text{refraction (spherical interface): }r'=Rr$
$\text{translation: }r'=Tr$
![[single lens.png|300]]![[thing lens.png|300]]
![[focal length of thins lens.png|300]]![[imagining with thin lens.png|300]]
![[apparent magnification.png|300]]
![[complex lens thin lens.png|300]]![[complex lens thin lens 2.png|300]]
### Spherical mirrors
![[spherical mirrors.png|400]]
### Graphical formalism
![[graphical formalism-1.png|300]]![[5XTB0/attachments/numerical aperture.png|300]]
## Aberrations in imaging systems
paraxial is 1st order approximation of sine, aberrations occur when imaging differs from paraxial imaging. **Check the reader for different types of lens optimizations.**
### Spherical aberration
![[spherical aberration.png|400]]
### Other
![[chromatic aberration.png|400]]
Larger aperture: 
- gathering more light (= larger intensity) 
- more aberrations 
- lower focus depth
## Materials
direction dependence (anisotropy).
wavelength dependence (dispersion).
reader: absorption...
![[anti reflection coating.png|400]]
## Applications
![[magnifying glass.png|180]]
$$\text{magnification (not perceived magnification): }M=-\frac{s'}{s}=\frac{|s'|}{s}=|s'|\left( \frac{1}{f} +\frac{1}{|s'|} \right)=1+\frac{|s'|}{f}$$
![[perceived magnification.png|300]]![[magnification types.png|220]]
![[ramsden eyepiece.png|400]]
![[microscope.png|300]]![[telescope.png|300]]
Microscope: $M_{ob}=-\frac{s'}{s}=-s'\left( \frac{1}{f}-\frac{1}{s'} \right)=1-\frac{s'}{f}$
Telescope: $M_{ob}=-\frac{s'}{s}=-\frac{1}{s}\left( \frac{1}{f}-\frac{1}{s} \right)^{-1}\approx-\frac{f}{s}\text{ and }M_{tot}=-\frac{f_{ob}}{f_{oc}}$
# Scalar Wave Optics (Ch 4)
[Fresnel equations - Wikipedia](https://en.wikipedia.org/wiki/Fresnel_equations)
## Postulates of wave optics
$\text{wave equation: }\nabla^2u-\frac{1}{v^2} \frac{\delta^2u}{\delta t^2}=0$
In a standing wave pattern, **intensity** is proportional to square of amplitude.
$\frac{I_{max}}{I_{min}}=\frac{(1+r)^2}{(1-r)^2}\text{ where }r=\sqrt{ R }$
$T(\lambda)=\frac{T_{max}}{1+F\sin^2\left( \frac{2\pi nd}{\lambda} \right)}$
$\frac{T_{max}}{T_{min}}=1+F=1+\frac{4R}{(1-R)}\text{ where }R=\left( \frac{n-1}{n+1} \right)^2\text{ so }\frac{T_{max}}{T_{min}}=\left( \frac{n^2+1}{2n} \right)^2$
$2d=\frac{m\lambda}{n}$
![[wave optics postulates.png|300]]![[intensity and power-1.png|300]]
$$<>\text{ stand for calculatin of the average over a time interval, larger than period of optical cycle}$$
## Monochromatic waves
![[monochromatic waves.png|300]]![[complex representation of wave number.png|300]]
![[helmholtz equations.png|300]]
![[plane waves.png|300]]![[evanescent plane waves.png|300]]![[evanescent plane waves-1.png|300]]![[evanescent plane waves-2.png|300]]![[spherical wave fronts.png|300]]![[fresnel approxiamation.png|300]]![[paraxial waves.png|300]]
## Ray theory from wave theory
Wave fronts: constant phase
Rays: Perpendicular to wave fronts
## Reflection & refraction
![[reflection and refraction.png|400]]
## Interference
![[interference of two waves.png|300]]![[interferometers.png|300]]![[interference of two plane waves.png|300]]![[interference between multiple waves.png|300]]
![[interference between multiple waves-1.png|300]]![[interference between multiple waves-2.png|300]]
![[interferometers-1.png|300]]
# Gaussian Beam Optics (Ch 5)
Gaussian beams are close to a laser beam IRL.
## Diffraction of a Gaussian light beam
**Monochromatic light beam in 2D:**
$$\text{helmholtz eq: }\nabla ^2U+k^2U=0\text{ with solution in inhomogeneous plane wave: }U(x,z)=A(x,z)e^{-jkz}$$
$$\text{paraxial approximation: }| \frac{\delta^2A}{dz^2}|\ll k| \frac{\delta A}{dz}|\text{ where paraxial helmholtz equation: } \frac{\delta^2A}{dx^2}-2jk \frac{\delta A}{dz}=0$$
Change of the amplitude profile during propagation = diffraction.
![[monochromatic light beam.png|150]]
![[gaussian beam.png|300]]![[deffraction of gaussian beam.png|300]]
![[dif gaus beam.png|300]]![[diff of gaus.png|300]]
$b_{0}=\frac{\pi w_{0}^2}{\lambda}\text{ Rayleigh range}$
![[rayleigh range.png|300]]![[2d to 3d transisiton.png|300]]
## Gaussian beams in lens systems
![[beams in lens.png|300]]![[focusing gaussian beam.png|300]]![[focusing gaussian beam-1.png|300]]
## Other
![[telescopes.png|300]]![[m2 factor.png|300]]
# Electromagnetic Optics (Ch 6)
[[Electromagnetics I - 5EPA0]]
[[Electromagnetics II - 5EPB0]]
![[EM reflection, transmission explained.png|400]]
**internal reflection/transmission**
![[expalined.png|300]]![[internal reflection transmission.png|300]]


# Photon Optics (Ch 8)
## Photon
standing wave: sum of two counterpropagating travelling waves.

all parts of the system move sinusoidally: same frequency - fixed phase relation.

$$\text{photons}\to \text{electromagnetic radiation or field mode }\to \text{standing plane waves in large cavity...}$$
**mode density per unit volume per unit frequency - independent of shape/size cavity**
$\nu=\text{frequency}$
$\text{mode density: }M(\nu)d\nu=\frac{8\pi \nu^2}{c^3}d\nu$

$\text{photon energy: }E=h\nu \text{ where planck const }h=6.626 \cdot 10^{-34}Js$
- energy in frequency mode change in **discrete steps**, quantized in **photons**.
- energy chance in EM mode: **absorption, generation.**
- beamsplitter where one photon probability $T\text{ and other }R=1-T$
$$\text{energy of EM mode: }E_{n}=\left( n+\frac{1}{2} \right)h\nu,n=0,1,2,\dots \text{ where } \frac{1}{2}\text{ is zero point energy}$$

$\text{momentum of photon: }\vec{p}=\hbar \vec{k}\text{ where }\hbar =\frac{h}{2\pi}$
$\text{magnitude of momentum: }|\vec{p}|=\hbar |\vec{k}|=\frac{h}{\lambda}=\frac{h\nu}{c}=\frac{E}{c}$
when N phtons absorbed -> momentum transferred.
$\text{radiation pressure: }P=\frac{dp}{dt}=N \frac{h}{\lambda}$
## Photon streams
$$\text{average phtono flux: Pwer density }[W/m^2]\to\text{average photon flux density }[photnos/s \cdot m^2]\text{ when }\lambda=200nm(UV)\text{ and }1nW=1\text{photon/}ns$$
![[photon stream single mode.png|500]]
# Photons & Atoms (Ch 10)
## Energy levels in atoms and molecules
![[particle as waves.png|500]]
$\nu=\text{frequency}$
$$\text{momentum: }p=m\nu=\sqrt{ E \cdot_{2} \cdot m }=\hbar k=\frac{h}{\lambda} \to \text{energy: } E=\frac{1}{2}m\nu^2=\frac{p^2}{2m}=\frac{\hbar^2k^2}{2m}=\frac{h^2}{\lambda^2 2m}$$
$\text{well levels: }n=1,2,3,\dots$
$\text{potential well: }n \frac{\lambda}{2}=a\text{ where well width is }a$
$E_{n}=\frac{p^2}{2m_{e}}=\frac{h^2}{2\lambda^2m_{e}}=E_{0}n^2$
$E_{0}=\frac{\bar{h}^2\pi^2}{2m_{e}a^2}\text{ where }\bar{h}=\frac{h}{2\pi}$
$\lambda=\frac{hc}{E_{n}-E_{0}}$
$v(velocity)=\sqrt{ \frac{2E_{n}}{m_{e}} }$
![[particle in infinite well 1dim.png|300]]![[particle in infinite potential well 1dim.png|300]]
$\text{3d potential well (cube): }E_{n_{1},n_{2},n_{3}}=E_{0}(n_{1}^2+n_{2}^2+n_{3}^2)\to E_{0}=\frac{\hbar^2\pi^2}{2ma^2}$
- Each state of a system means that it has a specific energy, we call this: the energy level of the system.
- Each state defined by quantum numbers: $n_{1},n_{2},n_{3}$
- **pauli exclusion:** no two identical particles can be same state...
- each state max 2 electrons. (spinup, spindown)
![[density of states in potential well.png|500]]

$$\text{hydrogen atom: }E_{n}=-\frac{m_{r}e^4}{2\hbar ^2n^2}=E_{1} \frac{1}{n^2}\text{ where }n=1,2,3\dots \text{ and }m_{r}=\frac{m_{e} \cdot M_{N}}{m_{e} + M_{N}}\approx m_{e}(m_{e}\ll M_{N})$$
![[energy levels of atoms.png|300]]![[hydrogen atom electronic states.png|300]]
![[energy levels in mocules.png|500]]
$\text{electronic states: }E_{0}$
$\text{vibrational states: }E_{\nu}=\left( \nu+\frac{1}{2} \right)\hbar \omega_{\text{res}}$
$\text{rotational states: }E_{r}=r\left( r+\frac{1}{2} \right)  \frac{\hbar}{2I}$

$\text{boltzman const: }1.381 \cdot10^{-23} \frac{J}{K}$
**boltzmann distribution:** group of atoms/molecules in seperate systems, the **probability** finding atom/molecule in particular state at specific temperature.
![[boltzmann distribution.png|500]]![[boltzman example.png|300]]
$\sum^n_{m=0}P(E_{m})=1$

![[solid state multiple atoms.png|300]]![[band occupation metals.png|300]]
![[band occupation isolator.png|300]]![[band occupation semiconductor.png|300]]

![[electrons over states in solid.png|300]]![[fermi dirac distribution.png|300]]
$\text{fermi firac distribution }f(e)=\frac{1}{e^{E-E_{f}/k_{B}T}+1}$
$\text{3d infinity deep quantum well density of states: }g(E)=a^3 \frac{(2m_{e})^{3/2}}{2 \bar{h}^3\pi^2}\sqrt{ E }$
$f(E_{f}+ \Delta E,T)\text{ also num of electrons: }N_{e}=g(E_{f})f(E_{f}+\Delta E,T)$

![[3d potential well model for metal.png|300]]![[e k relation.png|300]]
## Interactions between photons and atoms
![[emission and absorption.png|300]]![[probabilty of photon interaction.png|300]]
$p_{sp}=p_{abs}=p_{st}=\frac{c}{V}\sigma(\nu)$
![[spontaneous emission.png|300]]![[spontaneous emission-1.png|300]]
$\text{ spontaneous: }P_{sp}\approx=\frac{8\pi}{\lambda_{0}^2}\int \sigma(\nu) \, d\nu$
$\text{spontaneous lifetime: }\tau_{sp}=\frac{1}{P_{sp}}=\frac{1}{A_{21}}\text{ where }A_{21}\text{ independent coefficient of cavity volume V}$
$B_{21}=B_{12}=\frac{\lambda^3A_{21}}{8\pi h}$
![[stimuluated emission.png|300]]![[stimulated emission.png|300]]
$$\text{stimulated: }P_{st}=np_{st}=n \frac{c}{V}\sigma(\nu)=\frac{\lambda_{0}^3}{8\pi h\tau_{sp}}\text{ n being num of phtonos already present: }p_{sp}+P_{st}=(n+1) \frac{c}{V} \sigma(\nu)$$

![[stimulated emission-1.png|300]]![[absorption.png|300]]
## Thermal light
![[thermal equilibrium.png|300]]![[equilibrium between material and photons.png|300]]
![[equilibrium between material and phtons.png|300]]![[spectrum of balckbody radiator.png|300]]
$\rho(\nu)=\frac{8\pi h\nu^3}{c^3}=\frac{1}{\exp\left( \frac{h\nu}{k_{B}T} \right)-1}$
![[equilibrium between material and photons-1.png|300]]
![[properties of blackbody.png|300]]![[black body radiation neergy density.png|300]]
$\rho(\lambda)=\frac{8\pi hc}{\lambda^5} \frac{1}{\exp\left( \frac{hc}{\lambda k_{g}T} \right)-1}$
![[black body radaition spectral radiance.png|300]]
$\text{flux photons per unit }\lambda \text{ interval per steradian: }N(\lambda)=\frac{2c}{\lambda^4} \frac{1}{\exp\left( \frac{hc}{\lambda k_{B}T} \right)-1}$
## Luminescent light
![[photoluminescence.png|400]]
# Lasers (Ch 13)
## Gain medium
![[absorption or amplificaiton of field.png|300]]![[absorption amplification of a field.png|300]]
![[amplification and attenuation in unfirom material.png|300]]![[in decibel.png|300]]![[absorption and gain.png|300]]
![[thermal inversion.png|300]]![[pumping 2 level system.png|300]]
## Laser rate equations (Laser Cavities)
![[rate equations.png|300]]![[rate equations-1.png|300]]

![[stationary rate equations.png|300]]![[5XTB0/attachments/1.png|300]]![[5XTB0/attachments/2.png|300]]![[5XTB0/attachments/3.png|300]]![[5XTB0/attachments/4.png|300]]![[5XTB0/attachments/5.png|300]]![[6.png|300]]

### laser cavities, passive fabry-perot resonator, resonator with optical amplifier
![[resonance analysis with plane waves.png|300]]![[transmission spectrum FP resonator.png|300]]
$\phi=nLk_{0}\text{ where }k_{0}=\frac{2\pi}{\lambda_{0}}$
$t(\phi)=\frac{t_{1}t_{2}e^{-j\phi}}{1-r_{1}r_{2}e^{-j2\phi}}\text{ where }\phi=\frac{2\pi nL}{\lambda_{0}}$
$T_{max}=t_{1}t_{2}\left( \frac{|t_{1}t_{2}|}{1-r_{1}r_{2}} \right)^2\text{ where }T_{max}=1\text{ if }r_{1}=r_{2}$
![[transmission spectrum FP etalon.png|300]]![[finesse and quality factor of cavity.png|300]]
$\text{factor of cavity: }Q=\frac{2\pi}{\ln\left( \frac{1}{r_{1}^2r_{2}^2} \right)}$
![[fabry-perot etalon with gain.png|300]]![[fabry perot laser threshold spectrum.png|300]]
$\text{electric field gain is } \frac{1}{2}\text{ the power gain}$
$E_{2}=\frac{SE}{r_{1}r_{2}\exp\left( gL+i \frac{2\pi n}{\lambda}2L \right)-1}$
### cavity design using mirrors, transverse modes
![[cavity system matrix.png|300]]![[cavity system matrix-1.png|300]]
spherical mirror: see notes prior...
![[cavity system matrix-2.png|300]]![[cavity stability.png|300]]
$\text{satbility codntion: }0\leq\left( 1-\frac{P_{1}L}{2} \right)\left( 1- \frac{P_{2}L}{2}\leq 1 \right)$
![[gaussian beam in cavity.png|300]]![[gaussian beam cavity.png|300]]
![[transversal modes.png|300]]
## Characteristics of laser beams
$\text{coherence: }E(x,y,t)=A\sin(ky-\omega t+\phi)$
$\text{modelocking: laser spectrum has equally spaced laser modes: }\Delta u=\frac{c_{0}}{2nL}=\text{ and }T=\frac{1}{\Delta \nu}$
The wider the laser spectrum, the shorter the pulses.
