Gauss Divergence Theorem: https://www.youtube.com/watch?v=zZqxbwl3Dno | https://www.youtube.com/watch?v=pY4t-ikhzhU
Stokes Theorem: https://www.youtube.com/watch?v=0UvNF_cfBJ4

Boundary Conditions (normal and tangential components): 
https://www.youtube.com/watch?v=_FS6csrxBPU
https://www.youtube.com/watch?v=vlNUGyDzJ90
[Tangential Magnetic Field Boundary Conditions](https://www.youtube.com/watch?v=BMUz8AjYzOc)
[Normal Magnetic Field Boundary Conditions](https://www.youtube.com/watch?v=7NdMcBmjpuo)

https://www.youtube.com/watch?app=desktop&v=MPzdh9ZshLI

Lorentz Force: https://www.youtube.com/watch?v=grgNdIYP6zI
Hall Effect: https://www.youtube.com/watch?v=1OZCWetFCps
Lenz Law: https://www.youtube.com/watch?v=u7Rg0TcHQ4Y
Maxwell Equations: https://www.youtube.com/watch?v=hJD8ywGrXks
Motional & Transformer EMF: https://www.youtube.com/watch?v=Xi_wZ1IYLo8
flux: https://www.youtube.com/watch?v=m1PPujngqAw
[Electromagnetic Wave Equation in Free Space](https://www.youtube.com/watch?v=GMmhSext9Q8&t=1s)
[What Is a Plane Wave?](https://www.youtube.com/watch?v=ES2WFevGM0g)
[Here's What Maxwell's Equations ACTUALLY Mean.](https://www.youtube.com/watch?v=XAKAlNH9dDw)
# Mathematical Tools

![[phasor form.png|200]]![[polar to phasor.png|150]]
![[fourier transform properties.png|200]]![[5EPB0/attachments/fourier transform pairs.png|200]]
![[unit vector cross product.png|200]]

### Vector calculations for EM shapes
- Dot product: cos
- Cross product: sin
- So think if things are parallel or perpendicular to each other in the plane, if its 0 or 1
- take into account the direction for negative/positive
- For angles clockwise -> positive
- $a \times b$ means a is thumb and b is point finger, middle finger is the output vector you get the + or -

![[some examples for vector cals.png|400]]

>[!NOTE] GEOMETRY
>Cylinder: Area: $2\pi (r+h)$ Volume: $\pi r^2h$
>Sphere: Area: $4\pi r^2$ Volume: $\frac{4}{3}\pi r^3$
>Circle: Area: $\pi r^2$ Circumference: $2\pi r$
>
>$\rho _s=area$ $\rho_{V}=volume$

- unit vector, vector divide by distance
###### Two Points
Distance: $R=\mid r_{2}-r_{1}\mid=\sqrt{ (x_{2}-x_{1})^2+(y_{2}-y_{1})^2+(z_{2}-z_{1})^2 }$
Line through two points: $r=r_{1}+p(r_{2}-r_{1})$
Projection: A onto B $\frac{A \cdot{B} }{\mid B\mid}$
###### Dot Product - Scalar
$A \cdot B=\mid A\mid\mid B\mid \cos(\psi)$
>[!NOTE] Dot Product of Unit Vectors
>$a_{z}\cdot a_{r}=\cos(\theta)$ as they are unit vectors
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

![[divergence.png|500]]
![[paramtrization.png|300]]
![[differential-operatorss.png]]
# Electrostatics

$E=\frac{V}{length}$

$Q=\int_{-x}^{x} \rho(x) \, dx$
$\text{COULOMB LAW: }F=\frac{Qq}{4\epsilon_{0}r^2 }a_{r}\implies E=\frac{F}{Q}$
![[electro-field.png|300]]
$\int \frac{1}{(x^2+d^2)^{3/2}} \, dx=\frac{x}{d^2\sqrt{ x^2+d^2 }}+C$
$\int_{0}^{2\pi} a_{\rho}(\phi) \, d\phi=\int_{0}^{2\pi} \cos \phi a_{x}+\sin \phi a_{y} \, d\phi=0$

- Total flux going through a closed surface = total charge inside that surface
- Gauss's law for electricity states that **the electric flux Φ across any closed surface is proportional to the net electric charge Q enclosed by the surface**
- $Q=\rho V$

Electric flux density $D=\epsilon_{0}E=\frac{Q}{4\pi r^2}a_{r}$

![[electtric-flux.png|300]]
![[flux-through-surface.png|300]]
$dS=a_ndA$
- in a closed surface it must always point outwards

>[!NOTE] $Qencl$
>$\sum Q$
>$\int \rho_{l}\, dl$
>$\int \int \rho _{s} \, \, dS$
>$\int \int \int \rho_{V} \,  \,  \, dV$

>[!NOTE] Vector Operators
>$\nabla \cdot A$ Divergence
>	`Is a way to differentiate a vector field -> to a scalar field`
>	For $\nabla \cdot A=0$ flux in= flux out of volume -> if not enclosing any charge
>	$\int \int D \, \, dS=Q_{encl}=\int \int \int \rho_{V} \,  \,  \, dV=\int \int \int \nabla \cdot D \,  \,  \, dV$
>	
>$\nabla \cdot A$ Gradient
>$\nabla \times A$ Curl

>[!NOTE] Work Done
>force on particle: $F_{E}=QE$
>force to hold particle: $F_{appl}=-F_{E}$
>work done by field: $dW_{E}=F_{E} \cdot dl=QE \cdot dl$
>work done by applied force: $dW=F_{appl} \cdot dl=-QE \cdot dl$
>
>$W=q\int_{initial}^{final} E \cdot \, dl$ -> work performed on the charge by the electric field
>-> same but negative sign -> work required to move the charge through the field

![[work-done.png|300]]
$W=-Q\int_{P_{1}}^{P_{2}} E(r) \, dl=-Q\int_{t_{1}}^{t_{2}} E(r(t)) \, \frac{dr(t)}{dt}dt\implies dl=dr(t)$
>[!NOTE] Line Integral
>$\int_{A}^{B} V(r) \, dr=\int_{A}^{B} V(r(t)) \, \frac{dr}{dt}dt$
>use of preregistration: $r=r(t)$ for $t_{1}\leq t\leq t_{2}$

![[potential-point-charges.png|300]]
![[potential-field-charges.png|300]]
![[e-field.png|300]]

>[!NOTE] Gradient
>relationship between E(electric) and V(potential) field
>Potential difference: $\nabla V=\nabla V \cdot \nabla r$
>Line integral: $\nabla V=V(r+\nabla r)-V(r)=-\int E\cdot \, dl=-E\cdot \nabla r$
>In a limit $\nabla r \downarrow_{0}\implies E=-\nabla V$
>integrate E to find V, differentiate V to find E

**The gradient operator can only be applied to a scalar field, and gives a vector
field in return. Beware that the definition of the gradient operator is dependent
on the coordinate system. A common mistake is to forget the additional constants $\frac{1}{\rho}$ in cylindrical or $\frac{1}{r}$ and $\frac{1}{r\sin \theta}$ in spherical coordinate systems!**


How are Kirchhoff's current law (KCL) and Ampère-Maxwell's law (AML) related?
**AML reduces to KCL when quasi-static conditions are assumed.**

**Under quasi-static conditions, the assumption is that the fields and currents change sufficiently slowly so that the dynamic effects (like displacement currents) are negligible, thereby simplifying AML to essentially KCL.**

![[electrostatic-potential-energy.png|300]]

cross product: tangential
dot product: normal
**Electric flux density for dielectrics**: $D=\epsilon E$ $\epsilon=\epsilon_{r}\epsilon_{0}\implies B=\mu H$
$\text{electric|magnetic flux densities}=D|B$
$\nabla \times E=-\frac{\delta B}{\delta t}-K$ Faraday-Henry Law
$\nabla \times H=\frac{\delta D}{\delta t}+J$ Ampere-Maxwell Law
$E:\text{electric field}$
$H:\text{magnetic fieldz}$
$F=q(E+v \times B)$
**Uniform electric field accelerates a charge, while a uniform magnetic field makes keeps charge constant**
![[lorentz law-1.png|400]]
![[maxwell summary.png|400]]
![[electromagnetic wave.png|400]]

>[!NOTE] Capacitance
>capacitance for point charge: $C=\frac{Q}{V}=4\pi \epsilon_{0}r$ self capacitance
>E field: $E=-\frac{\rho_{s}}{\epsilon_{0}}a_{z}$ independent of distance plates
>
>$C=\frac{\epsilon_{0}\epsilon_{r}A}{d}$

![[parallel-plate-capacitor.png|300]]


![[dielctric-capacitance.png|400]]

>[!NOTE] Poisson/Laplace
>In empty space $\rho_{V}=0$ => Laplace is special case of Poisson => $\nabla^2V=-\frac{\rho_{V}}{\epsilon}=0$
>Laplace/Poisson must satisfy boundary conditions to have a unique solution
>
>Mesh Calculation: 
>Poisson:$\frac{\delta^2V}{\delta x^2}+\frac{\delta^2V}{\delta y^2}=-\frac{\rho_{S}}{\epsilon}$
>Laplace: ~=0
>
>$V_{0}=\frac{1}{4}(V_{1}+V_{2}+V_{3}+V_{4})$ Laplace
>$V_{0}=\frac{1}{4}\left( V_{1}+V_{2}+V_{3}+V_{4}+\frac{h^2\rho_{S}}{\epsilon} \right)$ Poisson

![[find-capacitance.png|300]]

>[!NOTE] Divergence / Gauss's Theorem
>$\int \int \int _{V} \, \nabla \cdot \vec{A} \,  \, dV=\oint\oint_{A}\vec{A} \cdot d\vec{S}$
>
>Gauss Law: $\oint\oint_{S}\vec{D}\cdot d\vec{S}=\int \int \int _{V} \nabla \cdot \vec{A} \,  \,  \, dV$

$q \cdot \vec{v}=I$
# Magnetostatics

**The magnetic field H might be thought of as the magnetic field produced by the flow of current in wires and the magnetic field B as the total magnetic field including also the contribution M made b OP for Live Preview. You can also use Minimal Theme which includes the snippet bundled in, and is kept up to date for new versions of Obsidian.y the magnetic properties of the materials in the field.**

![[biot-savart-law.png|300]]
![[Screenshot from 2023-10-17 22-00-53.png|300]]

Ampere law easier: use when symmetry | like Gauss Law
Biot-Savart law: general | like Coulomb law

$\vec{r}$ observation point $\vec{r'}$ source of field

>$|\vec{r}-\vec{r'}|=(z\vec{a_{z}}-\rho \vec{d_{\rho}})=(z^2-\rho^2)^{3/2}$

![[ampere-point-law.png|300]]
![[stoke-theorem.png|300]]

>[!NOTE] Stokes Theorem
>$\oint\oint_{S}\nabla \times \vec{A}\cdot d\vec{S}=\oint_{C}\vec{A}\cdot d\vec{l}$
>
>$\oint\vec{H}\cdot d\vec{L}=\int \int _{S}(\nabla \times \vec{H}) \,  \, d\vec{S}$

- **The magnetic flux passing through a closed surface is zero.**

![[lorentz-law.jpg|300]]
- **FBI: (F thumb) Left Hand Rule for (-), same but right hand for (+) charge & (conventional current)**
- A circle with a dot in it, represents a vector out of the page. **A circle with an x in it**
- https://physics.stackexchange.com/questions/395851/left-or-right-hand-rule

![[magnetic-force-on-charge-distribution.png|300]]
![[polar-magn.png|300]]

The magnetic field H might be thought of as the magnetic field produced by the flow of current in wires and the magnetic field B as the total magnetic field including also the contribution M made by the magnetic properties of the materials in the field.

Magnetic permeability is the realitive strength of a magnetic field that a material can achieve. Electric permittivity is the realitive ease with which an electric field propagates through a material.
**permittivity: opposition** against electric field
**permeability: easiness** magnetic flux to pass when applied by external magnetic field
![[electric permiativity.png|300]]

- **If an exercise mentions a (perfect) conductor, you should immediately remember two things: (1) there cannot exist an electric field inside the conductor, and (2) all free charges accumulate at the boundary of the conductor.**
>PEC MATERIAL: $D-inside=E-inside=0$ => Gaussian Surface outside object
- **If an exercise mentions a (perfect) dielectric, you should remember that (1) there cannot exist free charges inside the dielectric and that (2) the surface charge density at the border of the dielectric $\rho_{S}=0$**
![[boundary-conditions.jpg|500]]

- **When an electrical conductor carrying a current is located in a magnetic field perpendicular to that current, a voltage difference will be generated across the conductor in a direction perpendicular to both the current and the magnetic field. This is called the Hall effect.**

![[boundary-conditions.png|300]]
![[boundary-cond-magn.png|300]]

![[dielectrical boundary conditions.png|300]]
![[boundary conditions adjacent to perfect conductor.png|400]]
[Boundary conditions for electromagnetic fields](https://phys.libretexts.org/Bookshelves/Electricity_and_Magnetism/Electromagnetics_and_Applications_(Staelin)/02%3A_Introduction_to_Electrodynamics/2.06%3A_Boundary_conditions_for_electromagnetic_fields)
The dot product boundary condition: Normal, while the cross product is the tangential fox exmaple:
![[tangential-component.png|800]]
![[normal-component.png|800]]
>[!NOTE] Magnetic Flux Density
>$\phi=\int \int \vec{B} \cdot \, \, d\vec{S}$
>if normal component of flux density is constant across surface: $\phi=BS$
>  
**Magnetic field strength or field intensity (H) is the amount of magnetising force**. Magnetic flux density (B) is the amount of magnetic force induced on the given body due to the magnetising force H.

- Inductance measures the ability of a circuit to generate a magnetic field when an electric current flows through it.

![[flux-linkage.png|400]]
![[mutual-coupling.png|400]]
# Time-Dependent Fields & Waves

**Lenz's Law: The direction of the induced current is such as to oppose the very cause producing it**

$J$ and $K$ electric and magnetic current densities
![[maxwell-1.png|400]]
![[maxwell-vaccum.png|400]]
![[maxwell-2.png|400]]

>[!NOTE] Steady Current
>steady current
>Current density: $J(A / m^2)\implies I=\int \int J \cdot \,  \, dS$
>$=\oint\oint J \cdot a_{n}dA$
>$=-\frac{dQ}{dt}$ -> accumulation of charges
>$=-\int \int \int \frac{\delta \rho}{\delta t} \,  \,  \, dV$ -> accumulation of continuous point charge density
>
>$\nabla \cdot J=-\frac{\delta \rho_{V}}{\delta t}$-> divergence of current density = of change over time of volume density -> negative sink, positive source

![[continuity.png|400]]

>[!NOTE] Charge Conservation
> $I=\oint\oint J \cdot dS=\oint\oint\sigma E \cdot dS$
> potential: $V_{AB}=-\int_{B}^{A} E \cdot  \, dl$
> $R=\frac{V_{AB}}{I}$
> $\vec{J}=\frac{\vec{I}}{A}$
> $Iencl=J\times \pi \rho^2$

**Electric flux density for dielectrics**: $D=\epsilon E$ $\epsilon=\epsilon_{r}\epsilon_{0}\implies B=\mu H$
$\text{electric|magnetic flux densities}=D|B$
$\nabla \times E=-\frac{\delta B}{\delta t}-K$ Fraday-Hnery Law
$\nabla \times H=\frac{\delta D}{\delta t}+J$ Apere-Maxwell Law

![[faraday-staionary-loop.png|290]] ![[waves-maxwell.png|290]]

![[waves-maxwell.png|290]] ![[helmotz-eq.png|290]]
![[maxwell-source-free.png|290]] ![[poynting-theorem.png|290]]

![[images.png|300]] ![[inductance-capacitance.png|300]]
$v=\omega r$

**coloumb potential referenced at infinity**

$I_{encl}=IN$ N number of turns in coil

![[sphere-gauss.png|500]]

**surface integral = area of the object**

$J=\frac{I}{A}$

**Example, if you wanted to find the volume of a cylindrical shell with inner radius R1​ and outer radius R2​, you might integrate dr from R1​ to R2​, and then integrate dz for the height of the shell.**

# Extra notes due to EM2
- hollow metal sphere; neutral; small negative charge on surface; -> will distribute veenly over surface. if out of insulating material charge stays where it is.
![[newton laws.png|200]]
- negative positive attraction
- there is equal magnitude where 2 things act on each other
- positive charge; uniform electric field; -> constant acceleration
- electric potential energy: energy of opposition
- in uniform field force on particles is same but not zero, same for work done
- $f=qvb\sin(\theta)=q(\vec{v}\times \vec{B})$ force by magnetic field on a charge 
![[fleming hand rule.png|300]]![[right hand rule.png|300]]![[right hand rule motion.png|300]]![[electromagnetic induces current.png|200]]

- [Electromagnetic wave equation](https://en.wikipedia.org/wiki/Electromagnetic_wave_equation)
![[electromagnetic wave equation.png|200]]

Kirchoff and Maxwell law relation:
![[maxwell laws.png|200]]![[kirchoff maxwell relation.png|300]]
$\mu_{0}\text{ and }\epsilon_{0}\to0$ then $\text{faraday law: }\nabla \times E=0$ and $\text{ampere law: }\nabla \times H=J$
as long as $l\ll \lambda$

An electric field 'points' from a high to a lower voltage. So, if the potential voltage difference is positive, and the distance is as well, the field is negative, and thus points in the direction of the lower voltage (to the left in our case).