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
$\text{solid angle: }\Omega=\frac{A}{r^2}\to \Omega_{tot}= \frac{4\pi r^2}{r^2}=4\pi[sr(\text{steraradians})]$
$d \Omega=\sin \theta d\theta d\phi \text{ polar angle: }(0\leq \theta\leq \pi)\text{ azimuthal angle: }(0\leq \phi\leq 2\pi)$
**CHECK THIS MORE INFO!!!**
$\Omega=\int  \, d\Omega=\int^{2\pi}_{0} \int^{\theta_{max}}_{0}  \, \sin \theta d\theta \, d\phi \text{ where }\theta_{max}=\arcsin\left( \frac{\frac{d}{2}}{s} \right)$

$d\Omega=\frac{dS\cos \theta}{D^2}$
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
- spectral density and visibility curve used for conversion $V(\lambda)$
$F_{S}^e\text{ radiant flux}\to F\text{ luminous flux }F=K\int F_{S}^e(\lambda)V(\lambda) \, d\lambda \text{ where }K=683[lumen/watt(lm/W)]$
- Luminous intensity $[lm/sr]=\text{candela }cd$ - I
- Luminance $[cd/m^2]$ - L
- Luminous exitance $[lm/m^2]$ - M
- Illuminance $[lm/m^2]=\text{lux}$ - E
![[unit relation.png|500]]
## Illuminance
$dF\text{ radiant energy can also be optained: }Power[Watt] \cdot \text{conversion efficiency}[lm/Watt]$
![[point source illuminance.png|500]]
![[not a point source illuminance.png|500]]
![[ratina illuminance.png|500]]
![[lamberts law.png|500]]
# Geometrical Optics (Ch 3)