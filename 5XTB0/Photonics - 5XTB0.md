# Quantities and Units of Light (Ch 1,2)
![[02-Units.pdf]]
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
![[03-Geometric.pdf]]
## General concepts
$dSd\Omega \approx \lambda^2\text{ otherwise useless, defraction theory}$
$\text{medium: }v=\frac{c}{n}$
$\text{time propagation: }\Delta t_{P\to P'}=\frac{d}{v}=\frac{nd}{v}$
$\text{optical path length: }L_{o}=nd$
$$\text{fermat principle: shortest path for light: }L_{o}=\int_{P}^{P'} n(r) \, ds=c \Delta t\text{ where Inhomogeneous optical medium: refractive index: }n(r)$$
$$\text{snell law: }n\sin \theta=n'\sin \theta'\to \theta_{crit}=\arcsin\left( \frac{n'}{n} \right)\text{ where }\theta_{crit}=\theta \text{ and }90 \degree=\theta'\text{ if }\theta\geq \theta_{cri}\to TIR$$
![[mirror reflections.png|500]]
$$\text{fresnel laws (reflection/transmission coefficients): }R=\left( \frac{n-n'}{n+n'} \right)^2\text{ and }T=1-R=\frac{4nn'}{(n+n')^2}$$
## Paraxial theory of imaging systems
### Paraxial approximation & examples
**Paraxial**=small angle with optical axis
$\sin \theta \approx \theta,\tan \theta \approx \theta,\cos \theta \approx 1$
$\text{snell law: }n\theta=n'\theta'$

![[paraxial approximation figure.png|300]]
$m_{a}=\frac{\theta'}{\theta}\approx \frac{x'/(L+|s'|)}{x/(L+|s|)}=m_{x} \frac{L+|s|}{L+|s'|}\text{ see fish bowl question}$
### Matrix formalism
[[Math I - 2DE20]]
![[basics of matrix formalism.png|150]]
$r=\begin{bmatrix}x\\ na \end{bmatrix}$
$\text{refraction (spherical interface): }r'=Rr$
$\text{translation: }r'=Tr$
$P_{thin}=(n_{l}-1)\left( \frac{1}{R} - \frac{1}{R'} \right)\text{ if }n=n'=1$
$$P_{thin}'= \frac{n_{l}-n'}{-R'}-\frac{n_{l}-n}{-R} \text{ and } P_{thin}=\frac{n_{l}-n}{R}-\frac{n_{l}-n}{R'} \text{ if }n=n'\text{ and overall }P_{thin}=P_{thin}'$$
$\text{focal length of a thin lens: }f'=\frac{n'}{P_{thin}}\text{ and }f=\frac{n}{P_{thin}'}$
$\text{imagining with thin lens: } \frac{n}{S}+\frac{n'}{S'}=P_{thin}=\frac{n'}{f'}=P_{thin}'=\frac{n}{f}$
$\text{apparent magnification: }m_{x}=\frac{x'}{x}$
### Spherical mirrors
$\text{spherical mirrors: }P=\frac{2n}{R}$
$\text{for concave mirror: }R>0\text{ has focal length: }f=\frac{n}{p}=\frac{R}{2}$
### Graphical formalism
![[graphical formalism-1.png|300]]![[5XTB0/attachments/numerical aperture.png|300]]
## Aberrations in imaging systems
paraxial is 1st order approximation of sine, aberrations occur when imaging differs from paraxial imaging. **Check the reader for different types of lens optimizations.**
### Spherical aberration
![[spherical aberration.png|500]]
### Other
$\text{chromatic aberration: }V=\frac{n_{Y}-1}{n_{B}-n_{R}}$

Larger aperture: 
- gathering more light (= larger intensity) 
- more aberrations 
- lower focus depth
## Materials
direction dependence (anisotropy).
wavelength dependence (dispersion).
reader: absorption...
![[anti reflection coating.png|500]]
## Applications
![[magnifying glass.png|180]]
$$\text{magnification (not perceived magnification): }M=-\frac{s'}{s}=\frac{|s'|}{s}=|s'|\left( \frac{1}{f} +\frac{1}{|s'|} \right)=1+\frac{|s'|}{f}$$
Microscope: $M_{ob}=-\frac{s'}{s}=-s'\left( \frac{1}{f}-\frac{1}{s'} \right)=1-\frac{s'}{f}$
Telescope: $M_{ob}=-\frac{s'}{s}=-\frac{1}{s}\left( \frac{1}{f}-\frac{1}{s} \right)^{-1}\approx-\frac{f}{s}\text{ and }M_{tot}=-\frac{f_{ob}}{f_{oc}}$
# Scalar Wave Optics (Ch 4)
![[04-waves.pdf]]
[Fresnel equations - Wikipedia](https://en.wikipedia.org/wiki/Fresnel_equations)
## Postulates of wave optics
$\text{wave equation: }\nabla^2u-\frac{1}{v^2} \frac{\delta^2u}{\delta t^2}=0$
In a standing wave pattern, **intensity** is proportional to square of amplitude.
$\frac{I_{max}}{I_{min}}=\frac{(1+r)^2}{(1-r)^2}\text{ where }r=\sqrt{ R }$
$T(\lambda)=\frac{T_{max}}{1+F\sin^2\left( \frac{2\pi nd}{\lambda} \right)}$
$\frac{T_{max}}{T_{min}}=1+F=1+\frac{4R}{(1-R)}\text{ where }R=\left( \frac{n-1}{n+1} \right)^2\text{ so }\frac{T_{max}}{T_{min}}=\left( \frac{n^2+1}{2n} \right)^2$
$2d=\frac{m\lambda}{n}$

$$<>\text{ stand for calculatin of the average over a time interval, larger than period of optical cycle}$$
## Monochromatic waves
$\text{complex amplitude for spherical wave fronts: } U(r)=\frac{A}{r}e^{-j\omega r}$
## Ray theory from wave theory
Wave fronts: constant phase
Rays: Perpendicular to wave fronts
## Reflection & refraction
![[reflection and refraction.png|500]]
## Interference
$\text{two wave interference: }I=I_{1}+I_{2}+2\sqrt{ I_{1}I_{2} }\cos \phi$
$\text{interference measured with Interferometers: }I=2I_{0}\left[ 1+\cos\left( 2\pi \frac{d}{\lambda} \right) \right]$
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
![[06-electromagnetism.pdf]]

![[5XTB0/attachments/tir.png|200]]![[5XTB0/attachments/boundary conditions.png|300]]
[[Electromagnetics I - 5EPA0]]
[[Electromagnetics II - 5EPB0]]
$$\text{monochromatic plane wave freq propagating in z-dir with E-field in xy-plane: }E(z,t)=Re[Ae^{j_{2}\pi \nu(t-z/c)}]=Re[Ae^{j\omega t}e^{-jkz}]\text{ where }A=A_{x}e_{x}+A_{y}e_{y}$$
![[reflection and transmission TE and TM waves.png|500]]
$T_{circular}=50\%\text{ and }T_{linear}=\cos^2\theta$

![[EM reflection, transmission explained.png|400]]
**internal reflection/transmission**
![[expalined.png|300]]![[internal reflection transmission.png|300]]
$r_{TM}\text{ and }r_{TE}\text{ represent reflection coefficients, ratio, and negative value means }180 \degree\text{ phase shift. THESE ARE FRESENL COEFFICIENTS}$
$r_{TE}=-0.3035\approx30 \%\text{ if wave's electric field amplitude is reflected.}$
$R=|r|^2=0.09\approx 4\%\text{ of incident power reflected}$
$T=1-R$
![[reflection equations summary.png|500]]
![[te polarization.png|300]]![[tm polarization.png|300]]

![[power reflection and transmission.png|500]]

$R=\frac{4|r_{12}|^2\sin^2\phi}{|1-r_{12}^2e^{-j2\phi}|^2}\text{ and }T=\frac{|t_{12}t_{21}|^2}{|1-r_{12}^2e^{-j2\phi}|^2}$

$\text{airy equation: }F=\frac{4R_{1}}{(1-R_{1})^2}\text{ where }T=\frac{1}{1+F\sin^2\phi}$

$d=\frac{\lambda_{2}}{4n_{2}}\text{ and }n_{2}=\sqrt{ n_{1}n_{3} }$
$R_{min}=\left( \frac{n_{2}^2-n_{1}n_{3}}{n_{2}^2+n_{1}n_{3}} \right)^2$

$\text{for highly reflective coating: }n_{2}>n_{1}\text{ and }n_{2}>n_{3}$
there is also complex coatings in filters, power/polarization splitters, needs CAD tools.
![[from exercise.png|300]]
# Waveguides (Ch 7)
![[07-waveguides.pdf]]
# Photon Optics (Ch 8)
![[08-Photons.pdf]]
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
![[10-atoms_and_photons.pdf]]
## Energy levels in atoms and molecules
$\nu=\text{frequency}$
$$\text{momentum: }p=m\nu=\sqrt{ E \cdot_{2} \cdot m }=\hbar k=\frac{h}{\lambda} \to \text{energy: } E=\frac{1}{2}m\nu^2=\frac{p^2}{2m}=\frac{\hbar^2k^2}{2m}=\frac{h^2}{\lambda^2 2m}$$
$\text{well levels: }n=1,2,3,\dots$
$\text{potential well: }n \frac{\lambda}{2}=a\text{ where well width is }a$
$E_{n}=\frac{p^2}{2m_{e}}=\frac{h^2}{2\lambda^2m_{e}}=E_{0}n^2$
$E_{0}=\frac{\bar{h}^2\pi^2}{2m_{e}a^2}\text{ where }\bar{h}=\frac{h}{2\pi}$
$\lambda=\frac{hc}{E_{n}-E_{0}}$
$v(velocity)=\sqrt{ \frac{2E_{n}}{m_{e}} }$

$\text{3d potential well (cube): }E_{n_{1},n_{2},n_{3}}=E_{0}(n_{1}^2+n_{2}^2+n_{3}^2)\to E_{0}=\frac{\hbar^2\pi^2}{2ma^2}$
- Each state of a system means that it has a specific energy, we call this: the energy level of the system.
- Each state defined by quantum numbers: $n_{1},n_{2},n_{3}$
- **pauli exclusion:** no two identical particles can be same state...
- each state max 2 electrons. (spinup, spindown)

$$\text{hydrogen atom: }E_{n}=-\frac{m_{r}e^4}{2\hbar ^2n^2}=E_{1} \frac{1}{n^2}\text{ where }n=1,2,3\dots \text{ and }m_{r}=\frac{m_{e} \cdot M_{N}}{m_{e} + M_{N}}\approx m_{e}(m_{e}\ll M_{N})$$
![[energy levels in mocules.png|500]]
$\text{electronic states: }E_{0}$
$\text{vibrational states: }E_{\nu}=\left( \nu+\frac{1}{2} \right)\hbar \omega_{\text{res}}$
$\text{rotational states: }E_{r}=r\left( r+\frac{1}{2} \right)  \frac{\hbar}{2I}$

$\text{boltzman const: }1.381 \cdot10^{-23} \frac{J}{K}$
**boltzmann distribution:** group of atoms/molecules in seperate systems, the **probability** finding atom/molecule in particular state at specific temperature.
![[boltzmann distribution.png|500]]![[boltzman example.png|300]]
$\sum^n_{m=0}P(E_{m})=1$

![[fermi dirac distribution.png|500]]
$\text{fermi firac distribution }f(e)=\frac{1}{e^{E-E_{f}/k_{B}T}+1}$
$\text{3d infinity deep quantum well density of states: }g(E)=a^3 \frac{(2m_{e})^{3/2}}{2 \bar{h}^3\pi^2}\sqrt{ E }$
$f(E_{f}+ \Delta E,T)\text{ also num of electrons: }N_{e}=g(E_{f})f(E_{f}+\Delta E,T)$
## Interactions between photons and atoms
$\text{einstein description: }p_{sp}=p_{abs}=p_{st}=\frac{c}{V}\sigma(\nu)$
![[spontaneous emission.png|500]]
$\text{ spontaneous: }P_{sp}\approx=\frac{8\pi}{\lambda_{0}^2}\int \sigma(\nu) \, d\nu$
$\text{spontaneous lifetime: }\tau_{sp}=\frac{1}{P_{sp}}=\frac{1}{A_{21}}\text{ where }A_{21}\text{ independent coefficient of cavity volume V}$
$B_{21}=B_{12}=\frac{\lambda^3A_{21}}{8\pi h}$

$$\text{stimulated emission: }P_{st}=np_{st}=n \frac{c}{V}\sigma(\nu)=\frac{\lambda_{0}^3}{8\pi h\tau_{sp}}\text{ n being num of phtonos already present: }p_{sp}+P_{st}=(n+1) \frac{c}{V} \sigma(\nu)$$
## Thermal light
$\text{spectral energy density: }\rho(\nu)=\frac{8\pi h\nu^3}{c^3}=\frac{1}{\exp\left( \frac{h\nu}{k_{B}T} \right)-1}$
$\text{average number of photons with frequency: }\bar{n}=\frac{1}{e^{h\nu/k_{g}T}-1}$

$\rho(\lambda)=\frac{8\pi hc}{\lambda^5} \frac{1}{\exp\left( \frac{hc}{\lambda k_{g}T} \right)-1}$
![[black body radaition spectral radiance.png|500]]
$\text{flux photons per unit }\lambda \text{ interval per steradian: }N(\lambda)=\frac{2c}{\lambda^4} \frac{1}{\exp\left( \frac{hc}{\lambda k_{B}T} \right)-1}$
# Lasers (Ch 13)
![[13-lasers.pdf]]
## Gain medium
$g=\frac{h\nu}{\nu_{g}}B_{21}(N_{2}-N_{1})$
$\text{aplification: }G=e^{gL}$
$\text{gain: }I(x)=I_{0}e^{gx}$

pumping between energy levels is caused by multiple factors...
## Laser rate equations (Laser Cavities)
$\text{stationary regime: }g=(2N_{2}-N)\sigma=\frac{1}{\nu_{g}\tau_{p}}=\frac{n}{c\tau_{p}}$
### laser cavities, passive fabry-perot resonator, resonator with optical amplifier
$\text{phase change: }\phi=nLk_{0}\text{ where }k_{0}=\frac{2\pi}{\lambda_{0}}$
$\text{electric field amplitude: }t(\phi)=\frac{t_{1}t_{2}e^{-j\phi}}{1-r_{1}r_{2}e^{-j2\phi}}\text{ where }\phi=\frac{2\pi nL}{\lambda_{0}}$
$\text{transmission: }T_{max}=t_{1}t_{2}\left( \frac{|t_{1}t_{2}|}{1-r_{1}r_{2}} \right)^2\text{ where }T_{max}=1\text{ if }r_{1}=r_{2}$
![[finesse and quality factor of cavity.png|500]]
$\text{factor of cavity: }Q=\frac{2\pi}{\ln\left( \frac{1}{r_{1}^2r_{2}^2} \right)}$
![[fabry-perot etalon with gain.png|500]]
$\text{electric field gain is } \frac{1}{2}\text{ the power gain}$
$E_{2}=\frac{SE}{r_{1}r_{2}\exp\left( gL+i \frac{2\pi n}{\lambda}2L \right)-1}$
### cavity design using mirrors, transverse modes
spherical mirror: see notes prior...
![[cavity stability.png|500]]
$\text{satbility codntion: }0\leq\left( 1-\frac{P_{1}L}{2} \right)\left( 1- \frac{P_{2}L}{2}\leq 1 \right)$
$w_{0}=\sqrt{ \frac{2}{k} \sqrt{ \frac{L}{2} \left( R-\frac{L}{2} \right)} }$
![[gaussian beam in cavity.png|500]]
## Characteristics of laser beams
$\text{coherence: }E(x,y,t)=A\sin(ky-\omega t+\phi)$
$\text{modelocking: laser spectrum has equally spaced laser modes: }\Delta u=\frac{c_{0}}{2nL}=\text{ and }T=\frac{1}{\Delta \nu}$
The wider the laser spectrum, the shorter the pulses.
## Types of lasers
see reader...
# Semiconductor Light Sources (Ch 14)
![[5XTB0/slides/14-SemiLS.pdf]]
## Optical properties of semiconductors (semidconductor materials)
[[Electronics I - 5ECB0]]
**conduction band and valence band**
**intrinsic (pure material) semiconductors**
$\text{concentration electrons in conduction band: }n_{i}\text{ and oncentration holes in valence band: }p_{i}$
electrons promoted to conduction band -> a hold in valence band: $n_{i}=p_{i}\text{ and }n_{i} \cdot p_{i}=n_{i}^2$

$\text{density of states of electrons: in CB: }g_{c}(E)=\frac{4\pi(m_{n}^*)^{3/2}}{h^3}\sqrt{ E-E_{c} }\text{ where }E-E_{c}>0$
$\text{density of states for holes in VB: }g_{v}(E)= \frac{4\pi (m_{p}^*)^{3/2}}{h^3}\sqrt{ E_{v}-E }\text{ where }E_{v}-E>0$

in general $\text{photon energy} << \text{bandgap}$
but the electrons can be excited from valence band to conduction band by absorbing light but $\text{k-vector of electron stays the same}.$

$\text{probability energy level occupied at energy E: }f_{c}(E)= \frac{1}{\exp\left( \frac{E-E_{Fn}}{k_{B}T} \right)+1}$
$f_{v}(E)=\frac{1}{\exp\left( \frac{E-E_{Fp}}{k_{B}T} \right)+1}$

**Probability finding an electron at energy $E_{2}$ in conduction band:** $f_{c}(E_{2})=\frac{1}{\exp\left( \frac{E_{2}-E_{Fn}}{k_{B}T} \right)+1}$
Probability of finding a hole at energy $E_{1}$ in valence band: = probability of not finding an electron at $E_{1}$: $1-f_{v}(E_{1})=1-\frac{1}{\exp\left( \frac{E_{1}-E_{Fp}}{k_{B}T} \right)+1}$
## Dioes (role of pn junctions and heterojunctions)
n-doping in equilibrium -> **fermin level up** -> **conductivity up** -> $n_{0}>p_{0}\text{ but still }n_{0} \cdot p_{0}=n_{i}^2$

p-doping in equilibrium -> **fermin level down** -> **conductivity up** -> $n_{0}<p_{0}\text{ but still }n_{0} \cdot p_{0}=n_{i}^2$

$V_{bi}=\frac{kT}{e}\ln\left( \frac{N_{a}N_{d}}{n_{i}^2} \right)$

in reverse potential as you decrease the potential of the n-junction you increase the band gap and the barrier becomes unpassable for electrons from p to n so no energy flow from n to p.

$$\text{I-V characteristic of pn-junction: }J=J_{s}\left[ \exp\left( \frac{eV_{a}}{k_{B}T} \right)-1 \right]\text{ where }J_{s}=e\left( \frac{D_{n}n_{p_{0}}}{L_{n}}  + \frac{D_{p}p_{n_{0}}}{L_{p}}  \right)$$
>[!NOTE] Heterojunction
>Heterojunction in semiconductor devices combines materials with different bandgaps (between n and p junctions) $(Eg1 > Eg2)$, creating a potential barrier that confines carriers and enables efficient light generation in the smaller bandgap region, with the equation for photon energy: $E = h\nu = E_g$.

connections between the materials indicate which material can be used as the junction in between and on p-n-junctions: for instance **GaAs (MID-GAP) and AlAs (PN-JUNC)**. since GaAs has a smaller bandgap it should be in the middle. That straight connection between the material showcases good material relation.
## LED's
$\eta_{e}\text{ is extraction efficiency}$
$\eta_{ex}\text{ external quantum-efficiency}$
$\eta_{ex}=\eta_{e} \eta_{i}$
$\Phi_{0}=\eta_{e} \Phi_{i}=\eta_{e}\eta_{i} \frac{I}{e}=\eta_{ex} \frac{I}{e}$
$P =\Phi_{0} E_{ph}$
$M^e=\frac{P}{A}$
## Laser Diodes
$\text{amplificaiton: }g(J)=a\left( \frac{J}{J_{T}} -1\right)$
$\text{resonator losses: }a_{m}=\frac{1}{2L}\ln\left( \frac{1}{R_{1}R_{2}} \right)$
$a_{s}=\text{losses due to scattering so total loss: }a_{r}=g_{th}=a_{m}+a_{s}$
$J\to J_{th}\implies J_{th}=\frac{a_{r}+a}{a}J_{T}\text{ the smaller the threshold current density the better}$

$\text{if }J>J_{th}\text{ laser oscillations begin and photon flux produced}$
$\text{ photon flux leaving resonator: }\Phi_{o}=\eta_{e}\eta_{i} \frac{i-i_{th}}{e}$
# Semiconductor Detectors (Ch 15)
![[15-Detectors.pdf]]
## Phototubes, Photoconductors
$\text{photoconductivity: }\Delta \sigma=e\Delta n(\mu_{e}+\mu_{h})\text{ where }\Delta n\text{ change in carrier density and }\mu_{e}\mu_{h}\text{ are electron hole mobilities}$
$\eta=\text{internal quantum efficiency}\text{ and }\tau=\text{lifetime of photo electrons and holes}$
$\text{rate of generation of }e^-h^+:G_{L}=\frac{\eta \Phi}{wA}\text{ where photon flux }\Phi=\frac{P_{0}}{hv}\text{ and for stationary: }\Delta n=\frac{\eta \tau \Phi}{wA}$
$\text{rate of recombination: }U=\frac{\Delta n}{\tau}\text{ in a stablesystem: }G_{L}=U\text{ recombination and generation are in a system}$

$\Delta n \propto \Phi \text{ so }\Delta \sigma=\frac{e\eta \Phi(\mu_{e}+\mu_{h})}{wA}$

$E=\frac{V}{w}\text{ so }v_{e}=\mu_{e}E\text{ and }v_{h}=\mu_{h}E$

$\text{ current density: }J_{ph}=\Delta \sigma E=\frac{e\eta \tau(v_{e}+v_{h})}{wA}\Phi$
$\text{transfer time } \frac{\tau_{e}w}{v_{e}}$
$i_{ph}= \frac{e \eta \tau(v_{e}+v_{h})}{w}\Phi=e \eta\frac{\tau}{\tau_{e}}\Phi$
## Photodiodes
$\eta=(1-R)[1-e^{-a_{dep}d}]e^{-a_{clad}D}\zeta \text{ where }\zeta \text{ is quality of material overall the goal is maximize absoption}$

$\text{diode responsitivity: } R_{r}=\frac{e}{h\nu}=\frac{e\lambda}{hc}=\frac{\eta e}{h\nu}$
$I_{rev}=\eta e\Phi=\frac{\eta eP_{opt}}{h\nu}=R_{r}P_{opt}$

# Technology (Ch 16)
![[16-Technology.pdf]]
# Displays (Ch 18)
![[18-Displays.pdf]]