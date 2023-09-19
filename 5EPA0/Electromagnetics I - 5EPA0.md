# Course Material
>**Mathematical tools:** 
>	– Vector calculus 
>	– Line integrals, surface and volume integrals 
>	– Gradient, divergence, Gauss’s theorem 
>	– Coordinate systems (cartesian, cylindrical, spherical)
>	 
>**Electrostatics:** 
>	– Electrostatic fields, Coulomb, Superposition, Gauss’s law 
>	– Work and electric (scalar) potential 
>	– Capacitance, dielectric materials 
>	– Laplace and Poisson equations 
>	– Energy 
>	– Finite difference method for electrostatics (Poisson, Laplace) 
>
>**Magnetostatics:** 
>	– Rotation (curl), Stokes’ theorem 
>	– Current, current density, magnetic flux density and Ampére’s law 
>	– Vector potential and Biot-Savart 
>	– Lorentz force – Magnetic fields and magnetic materials 
>	– Inductance (self, mutual) 
>	– Boundary conditions 
>
>**Time-dependent fields and waves:** 
>	– Faraday 
>	– Lenz’s law 
>	– Continuity equation, displacement current 
>	– Maxwell’s equations in differential and integral form 
>	– Maxwell’s equations in frequency domain, phasors 
>	– One-dimensional waves, plane waves (time domain and time harmonic), free space impedance 
>	– Skin effect 
>	– Poynting’s theorem

# Mathematical Tools

- unit vector, vector divide by distance
###### Two Points
Distance: $R=\mid r_{2}-r_{1}\mid=\sqrt{ (x_{2}-x_{1})^2+(y_{2}-y_{1})^2+(z_{2}-z_{1})^2 }$
Line through two points: $r=r_{1}+p(r_{2}-r_{1})$
Projection: A onto B $\frac{A \cdot{B} }{\mid B\mid}$
###### Dot Product - Scalar
$A \cdot B=\mid A\mid\mid B\mid \cos(\psi)$
###### Cross Product - Vector
$\mid A \times B \mid=\mid A\mid\mid B\mid \sin(\psi)$

![[cross-prod.png|300]]

###### Cartesian Coordinates
**Unit vectors: $a_{x},a_{y},a_{z}$, Position vector: $r_{p}=xa_{x}+ya_{y}+za_{z}$, Vector field: $A=A_{x}a_{x}+A_{y}a_{y}+A_{z}+Aa_{z}$, Line elements: $dx,dy,dz$, Incremental distance: $dl=dxa_{x}+d_{y}a_{y}+d_{z}a_{z}$, Volume element: $dV=dxdydz$**
![[cart-coord-1.png|100]]
![[cart-coord-2.png|100]]

###### Circular Cylindrical Coordinates
![[circ-coord.png|300]]
**Unit vector: $a_{p},a_{\phi},a_{z}$, Position vector: $r_{p}=\rho a_{\rho}(\phi)+za_{z}$, Vector field: $A=A_{\rho}a_{\rho}+A_{\phi}a_{\phi}+A_{z}a_{z}$, Line elements: $d\rho,\rho d\phi,dz$, Incremental distance: $dl=d\rho a_{\rho}+\rho d\phi a_{\phi}+dza_{z}$, Volume element: $dV=\rho do\rho d\phi dz$**
![[circl-coord-1.png|200]]
![[circ-coord-2.png|200]]

###### Spherical coordinates
![[spher-coord.png|300]]
**Unit vectors: $a_{r},a_{\theta},a_{\phi}$, Position vector: $r_{p}=ra_{r}(\theta,\phi)$, Vector field: $A=A_{r}a_{r}+A_{\theta}a_{\theta}+A_{\phi}a_{\phi}$, Line elements: $dr,rd\theta,r\sin \theta d\phi$, Incremental distance: $dl=dra_{r}+rd\theta a_{\theta}+r\sin\theta d\phi a_{\phi}$, Volume element: $dV=r^2\sin \theta drd\theta d\phi$**
![[spher-coord-1.png|200]]

# Electrostatics

$F=\frac{Qq}{4\epsilon_{0}r^2 }a_{r}\implies E=\frac{F}{q}$
![[electro-field.png|300]]
$\int \frac{1}{(x^2+d^2)^{3/2}} \, dx=\frac{x}{d^2\sqrt{ x^2+d^2 }}+C$
$\int_{0}^{2\pi} a_{\rho}(\phi) \, d\phi=\int_{0}^{2\pi} \cos \phi a_{x}+\sin \phi a_{y} \, d\phi=0$

- Total flux going through a closed surface = total charge inside that surface
- Gauss's law for electricity states that **the electric flux Φ across any closed surface is proportional to the net electric charge Q enclosed by the surface**

Electric flux density $D=\epsilon_{0}E=\frac{Q}{4\pi r^2}a_{r}$

![[electtric-flux.png|300]]
![[flux-through-surface.png|300]]
$dS=a_ndA$
- in a closed surface it must always point outwards
