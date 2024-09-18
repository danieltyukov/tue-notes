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