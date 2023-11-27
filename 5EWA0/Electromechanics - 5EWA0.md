magnetic circuits with air gap: https://www.youtube.com/watch?v=T99_3l0UqB8
b-h curve: https://www.youtube.com/watch?v=sEGLcpmIIBY
# Content

**2 Weekly Instructions, 4 Homework, Labs**
**Cheat Sheet 4 Pages**
#### **Magnetic equivalent circuits**

- apply all governing laws and rules which describe the relations among electrical, magnetic and mechanical quantities.
- use engineering language related to electrical machine and explain and define the related quantities (such as MMF, EMF, flux linkage, apparent and incremental inductance, leakage, fringing, stacking factor, saturation, BH-curve, remanence, coercivity, and $\lambda−i$ diagram).
- analyze magnetic circuits with coils and permanent magnets as source of the MMF.
- analyze magnetic circuits with and without non-linear magnetic materials.
- use the electrical quantity inductance to link magnetic field variables to an electric circuit.
- calculate the electromagnetic force using magnetic energy and magnetic co-energy.
#### **DC machines**

- describe the different parts of a DC machine and indicate them in a cross-section.
- derive an expression for the EMF in the armature as function of the construction of a DC machine.
- derive an expression for the electromagnetic torque as function of the construction of a DC machine.
- classify a DC machine depending on the connection of the field winding (separately excited, shunt excited and series excited machines).
- derive the equivalent circuits of the different types of DC machines and determine expressions for the electromagnetic torque and speed.
- analyse the DC machine with the equivalent circuit and the power flow.
- analyse and explain different speed control methods for DC machines.

#### **Synchronous machines**

- describe the different parts of a synchronous machine and indicate them in a cross-section.
- classify synchronous machines based on the physical construction of the stator and rotor.
- derive an equation for the rotor excitation field.
- derive an equation for the induced voltage in the stator due to the rotor excitation field.
- derive the per-phase equivalent scheme of a three-phase synchronous machine and determine expressions for the electromagnetic torque and speed (cylindrical rotor only).
- draw and analyze the phasor diagram of a three-phase synchronous machine.
- explain and evaluate the torque-speed characteristic in a synchronous machine.
- analyze the behaviour of an isolated synchronous machine.
- analyze the behaviour of interconnected/grid-connected synchronous machines.
- analyze the behaviour of a synchronous motor.

#### **Induction machines**

- describe the different parts of an induction machine and indicate them in a cross-section.
- classify an induction machine based on the physical construction of the stator and rotor.
- explain methods to reduce harmonics in the stator field of an induction machine.
- derive the equations of the rotating stator field and its speed.
- calculate the speeds of the fields inside an induction machine based on the quantity slip.
- derive the per-phase equivalent scheme of a three-phase induction motor and determine expressions for the electromagnetic torque and speed.
- derive the parameters of the per-phase equivalent scheme of a three-phase induction machine based on a no-load and a blocked rotor test.
- analyze the active power flow in an induction machine.
- explain and evaluate the torque-speed characteristic in an induction machine and its special characteristics.
- compare and describe speed control methods for induction machines.




# Magnetic Circuits & Energy Conversion

>[!NOTE] Definitions
>$u\to i\to[H\to B\to \phi\to \lambda]\to e$
>**Inductance:** Link between $\lambda$ - Magnetic flux linkage & $i$ - Current => $L=\frac{\lambda}{i}$
>There is also **Reluctance**
>
>Magnetic field strength or field intensity (H) is the amount of magnetising force. Magnetic flux density (B) is the amount of magnetic force induced on the given body due to the magnetising force H.
>
>**Coercivity**, also called the **magnetic coercivity**, **coercive field** or **coercive force**, is a measure of the ability of a [ferromagnetic](https://en.wikipedia.org/wiki/Ferromagnetic "Ferromagnetic") material to withstand an external [magnetic field](https://en.wikipedia.org/wiki/Magnetic_field "Magnetic field") without becoming [demagnetized](https://en.wikipedia.org/wiki/Magnetization "Magnetization").
>
>**Inductance** is the ratio of the flux linkage of the coil, and the current which flows in that coil. Flux linkage (Ψ) is the product of the number of turns and flux which penetrates the coil: $L=\frac{\psi}{I}$

>[!NOTE] Formulas
>**Magneto-motive force (MMF):** $\mathcal{F}=\oint Hdl=NI$
>**Flux:** $\phi=\int B \, ds=BA$ or 
>Permanent Magnet: $\frac{mmf}{R_{total}}=\frac{H_{c}l_{m}}{R_{m}+R_{c}\dots}$ or
>C-shape with electromagnet: $\phi=\frac{NI}{R_{g}}=\frac{NI\mu_{0}A_{g}}{l_{g}}$
>
>$i\to Ni\to H\dots \phi\to N\phi\to \lambda$
>
>$B=\frac{\phi}{SF\cdot A}$
>$H=\frac{\mathcal{F}}{l}$
>$\mathcal{R}=\frac{\mathcal{F}}{\phi}\to \phi=\frac{\mathcal{F}}{\mathcal{R}}$
>
>**Permeance of Air Gap(no fringing):** $\mathcal{P}^b_{g}=\mu_{0} \frac{wd}{\delta}$
>**Coil current:** $I=\frac{\mathcal{F_{b}}}{N}$

![[ampere-law.png|500]]

**Flux:** amount of fields passing through surface, $\phi=\int B \, dS[Wb,Tm^2,Vs]$, 
closed loop $\phi=0$
**Lamination:** $A*SF$ -> stacking factor: $SF$
**Fringing:** Magnetic field doesn't cross air-gap
**Leakage:** Considered when magnet saturated as it increases then: $R_{leakage}=\frac{h}{\mu_{0}wd}$
>Paramagnetism refers to materials like aluminum or platinum which become magnetized in a magnetic field but their magnetism disappears when the field is removed. Ferromagnetism refers to materials (such as iron and nickel) that can retain their magnetic properties when the magnetic field is removed.

**Hysteresis loss & Eddy current loss:** https://www.motioncontroltips.com/hysteresis-loss/
>Hysteresis: magnetization removed, doesnt return to original state, low frequency
>Eddy current: switching magnetic, induce voltage/current: $V=-N\frac{d\phi}{dt}$, high frequency, lamination helps

![[electric-magnetic-circuit.png|500]]
![[mc-2.png|500]]
$MMF=H_{1}l_{1}+H_{2}l_{2}+H_{3}l_{3}+H_{4}l_{4}$

>[!NOTE] Magnetic Circuit Analysis
>MMF: $\mathcal{F}=NI=\phi\mathcal{R}=H_{c}l_{m}=\oint Hdl=\sum_{n} \frac{B_{n}}{\mu_{0}\mu_{r,n}}l_{n}=\sum_{n} \frac{l_{n}}{\mu_{0}\mu_{r,n}A_{n}}\phi_{n}=\sum_{n}R_{n}\phi_{n}$
>
>$R=\frac{l}{\mu_{0}\mu_{r}A}[H^{-1}]$
>$P=\frac{1}{R}[H]$
>
>$I=\frac{mmf}{N}=\frac{Bl}{\mu_{0}N}$
>
>$emf=V=-\frac{d\phi_{core}}{dt}$
>
>Air gap are added for increasing the reluctance -> lowers the flux intensity -> which lowers saturation (lower slope) meaning the can operate with higher MMF. Since reluctance is how MMF affects magnetic flux.

>[!NOTE] Permanent Magnet Modelling
>$B_{m}=\mu_{0}\mu_{r,pm}H_{m}+B_{r}$
>$H_{m}=\frac{B_{m}}{\mu_{0}\mu_{r,pm}}-\frac{B_{r}}{\mu_{0}\mu_{r,pm}}=\frac{B_{m}}{\mu_{0}\mu_{r,pm}} - H_{c}$
>as $H_{c}=\frac{B_{r}}{\mu_{0}\mu_{r,pm}}$
>
>![[permenant-magnet.png|400]]

![[comparison.png|500]]
![[coil-circuit-calculations.png|500]]
![[bh-curve.png|500]]
![[soft-hard-magnet-material.png|500]]

>[!NOTE] Inductance
>$e=N \frac{d\phi}{dt}$
>$\lambda=N\phi$
>$e=N \frac{d\phi}{dt}=\frac{d\lambda}{dt}=\frac{d\lambda}{di} \frac{di}{dt}=L \frac{di}{dt}$
>**linear case:** $L=\frac{\lambda}{i}=\frac{N\phi}{i}$
>
>eg: $\phi=\frac{Ni}{\mathcal{R}_{tot}}$ so $\lambda=\frac{N^2i}{\mathcal{R_{tot}}}$ so $L=\frac{N^2}{\mathcal{R_{tot}}}$
>
>**non-linear:** (apparent) $L_{apparent}=\frac{\lambda_{0}}{i_{0}}$, (incremental) $L_{incremental}=\frac{\delta \lambda}{\delta i}|_{i=i_{0}}$
>
>due to coupling coefficient (apparent inductance): $k$, eg: $\lambda_{1}=N_{1}(\phi_{1}+k_{2}\phi_{2})$ -> Causes mutual inductance $M$
>
>**mutual inductance:** $M_{12}=N_{1} \frac{\delta \phi_{1}}{\delta i_{2}}=M_{21}=N_{2} \frac{\delta \phi_{2}}{\delta i_{1}}$
>
>![[mutual-self-inductance.png|400]]

>[!NOTE] Energy
>$E=\frac{d\lambda}{dt}$
>Stored magnetic energy:
>**(no displacement, no motion):** $(\lambda-i)$ $W_{f}=\int_{0}^{t} iv \, dt=\int_{0}^{t} i\left( \frac{d\lambda}{dt} \right) \, dt=\int_{0}^{\lambda_{0}} id\lambda \,$
>
>**(no displacement):** $(H-B)$ $i=\frac{Hl}{N}$ and $\lambda=N\phi=NBA$ so: $W_{f}=\int_{0}^{\lambda_{0}} \frac{Hl}{N} NA\, dB=lA\int_{0}^{B_{0}} H \, dB$
>
>**linear case**
>![[linear-energy-case.png|200]]
>$(\lambda-i)\to W_{f}=\int_{0}^{\lambda_{0}} i \, d\lambda=\int_{0}^{i_{0}}  iL\, di=\frac{1}{2}Li_{0}^2$
>$(B-H)\to W_{f}=lA\int_{0}^{B_{0}} H \, dB=V\int_{0}^{B_{0}} \frac{B}{\mu} \, dB=V \frac{B_{0}^2}{2\mu}$

![[energy-and-coenergy.png|500]]
- $electrical\to magentic\to mechanical$ $\Delta W_{e}=\Delta W_{m}+\Delta W_{f}$, m-mechanical, f-magnetic
- e-(ohmic losses in coil), m-(friction), f-(hysteresis & eddy current losses)

>[!NOTE] Work
>$\Delta W_{e}=\Delta W_{m}+\Delta W_{f}\to dW_{e}=dW_{m}+dW_{f}$
>$dW_{m}=F_{d}dx$
>$dW_{e}=vidt=N \frac{d\phi}{dt}idt=\frac{d\lambda}{dt}idt=id\lambda$
>$id\lambda=dW_{f}+F_{d}dx$
>![[work-done-final.png|200]]

>[!NOTE] Virtual work
>![[virtual-work-constant-flux.png|400]]
>![[virtual-work-constant-current.png|400]]

![[linear-rotary-systems.png|500]]
**permanent magnet:** $\frac{1}{2}(MMF)^2 \frac{dP}{dx}$

Multiple coils would mean addition of mutual inductance

**System with multiple coils:** $F_{d}=\frac{\delta W'_{f}}{\delta x}=\frac{1}{2} \frac{\delta L_{1}}{\delta x}i_{1}^2 + \frac{1}{2} \frac{\delta L_{2}}{\delta x}i_{2}^2+\frac{\delta M}{\delta x}i_{1}i_{2}$
1st: reluctance force by coil 1
2nd: reluctance force by coil 2
3rd: interaction between the coils

**System with permanent magnet and coil:** $T_{d}=\frac{1}{2} \frac{\delta L_{1}}{\delta \theta}i_{1}^2 + \frac{1}{2} \frac{\delta P_{tot,pm}}{\delta \theta}(H_{c}l_{m})^2+\frac{\delta \lambda_{c,pm}}{\delta \theta}i_{1}$
1st: Reluctance torque due to coil
2nd: Reluctance torque due to magnets
3rd: Interaction between magnet & coil
$P_{tot,pm}$: is the total permeance of magnetic circuit seen from permanent magnet

