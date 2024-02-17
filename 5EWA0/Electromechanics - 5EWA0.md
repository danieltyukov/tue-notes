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
# Basics
**AC MACHINE:** https://www.youtube.com/watch?v=lV8iPKY-3ms&t=35s
	there is Induction Machines and Permanent Magnet Machines
**DC MACHINE:** https://www.youtube.com/watch?v=1AaUK6pT_cE
![[ac-dc-motor.png|300]]
https://hermitageautomation.com/difference-between-ac-and-dc-motor/
- **Mechanical Speed (nₘ)**: Measured in revolutions per second (rev/s), it represents the rotational speed of a mechanical component in an electromechanical system.
- **Field Voltage of the DC Machine (Vf)**: Expressed in volts (V), it refers to the voltage applied to the field winding of a DC machine, which generates the magnetic field necessary for its operation.
- **Field Current of the DC Machine (Iₑ)**: Measured in amperes (A), it denotes the electric current flowing through the field winding of a DC machine.
- **Armature Voltage of the DC Machine (Vₐ)**: In volts (V), this is the voltage across the armature winding of a DC machine, influencing its speed and torque.
- **Armature Current of the DC Machine (Iₐ)**: Measured in amperes (A), it represents the current flowing through the armature winding of a DC machine, impacting its torque production.
- **RMS Phase Voltage of the ACM (Vₚₕ)**: Root Mean Square (RMS) phase voltage in volts (V) of an Alternating Current Machine (ACM), indicating the effective voltage in one phase of the machine.
- **RMS Phase Current of the ACM (Iₚₕ)**: Root Mean Square (RMS) phase current in amperes (A) of an Alternating Current Machine (ACM), showing the effective current in one phase of the machine.
- **Power Factor of the ACM (PF)**: A dimensionless number (represented by -), it is the ratio of real power flowing to the load to the apparent power in the circuit in an Alternating Current Machine (ACM), indicating efficiency.

1. **MMF (Magnetomotive Force)**: MMF is analogous to voltage in electrical circuits but applies to magnetic circuits. It is the driving force that sets up magnetic flux in a magnetic circuit. It's calculated as the product of the current and the number of turns in the coil (MMF = NI, where N is the number of turns and I is the current).
    
2. **EMF (Electromotive Force)**: EMF is the electrical action produced by a non-electrical source. In electrical machines, it refers to the voltage induced in a coil by the change in magnetic flux. Faraday's law quantifies this as EMF = -dΦ/dt, where Φ is the magnetic flux.
    
3. **Flux Linkage**: Flux linkage is a measure of how much magnetic flux is 'intercepted' by a coil. It is the product of the number of turns in the coil and the magnetic flux through the coil (Ψ = NΦ). This quantity is crucial in understanding how effectively a coil couples with the magnetic field.
    
4. **Apparent and Incremental Inductance**: Apparent inductance is the overall inductance of a coil in a magnetic circuit, considering the core material's non-linearity and saturation. Incremental inductance is the derivative of the flux linkage with respect to the current (dΨ/dI), representing how the inductance changes for small changes in current.
    
5. **Leakage**: In electrical machines, leakage refers to the portion of the magnetic field that does not follow the intended path in the magnetic circuit, often due to air gaps or imperfect core materials. This phenomenon reduces the efficiency of magnetic coupling in devices like transformers and motors.
    
6. **Fringing**: Fringing occurs at air gaps in magnetic circuits where the magnetic field lines spread out. This effect can lead to a non-uniform distribution of the magnetic field and is particularly significant in devices with narrow air gaps.
    
7. **Stacking Factor**: This refers to the ratio of the actual volume of the steel (or core material) to the gross volume of the core. It accounts for the fact that in real-world cores, there are non-magnetic gaps (like insulation and air spaces) between the sheets or laminations of the core material.
    
8. **Saturation**: Saturation in a magnetic material refers to the state where an increase in magnetomotive force (MMF) produces little or no increase in magnetic flux. This occurs because the magnetic domains in the material are nearly fully aligned and cannot contribute further to the total magnetization.
    
9. **B-H Curve**: The B-H curve (or magnetization curve) plots the magnetic flux density (B) against the magnetic field strength (H) for a material. This curve shows the relationship between B and H and is crucial for understanding the magnetic properties of materials, including their behavior under different levels of magnetization and saturation.
    
10. **Remanence**: Remanence (or residual magnetism) is the magnetization that remains in a magnetic material after an external magnetizing field is removed. It is a key property in permanent magnets, where a high remanence is desirable.
    
11. **Coercivity**: Coercivity is the measure of the resistance of a ferromagnetic material to becoming demagnetized. It is the intensity of the applied magnetic field required to reduce the magnetization of that material to zero after the magnetization of the sample has been driven to saturation.
    
12. **Lambda-i Diagram**: The lambda-i (Ψ-I) diagram is a graph representing the flux linkage (Ψ) versus the current (I) in an electrical machine. This diagram is useful in analyzing the magnetic characteristics of the machine, including saturation and non-linear inductance effects.
# Magnetic Circuits & Energy Conversion
magnetic circuits with air gap: https://www.youtube.com/watch?v=T99_3l0UqB8
b-h curve: https://www.youtube.com/watch?v=sEGLcpmIIBY

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

>Inductance
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
>
>linear system: $\frac{dL(x)}{dx}$ rotary system: $\frac{dL(\theta)}{d\theta}$
>**permanent magnet:** $\frac{1}{2}(MMF)^2 \frac{dP}{dx}$
>Multiple coils would mean addition of mutual inductance
>
>![[work-done-summary.png|500]]

![[calculate-force-in-circuit.png|500]]

>[!NOTE] All inductances as function of position of moving member
>**System with multiple coils:** $F_{d}=\frac{\delta W'_{f}}{\delta x}=\frac{1}{2} \frac{\delta L_{1}}{\delta x}i_{1}^2 + \frac{1}{2} \frac{\delta L_{2}}{\delta x}i_{2}^2+\frac{\delta M}{\delta x}i_{1}i_{2}$
>1st: reluctance force by coil 1
>2nd: reluctance force by coil 2
>3rd: interaction between the coils
>
>**System with permanent magnet and coil:** $F_{d}=\frac{1}{2} \frac{\delta L_{1}}{\delta x}i_{1}^2 + \frac{1}{2} \frac{\delta P_{tot,pm}}{\delta x}(H_{c}l_{m})^2+\frac{\delta \lambda_{c,pm}}{\delta x}i_{1}$
>1st: Reluctance torque due to coil
>2nd: Reluctance torque due to magnets
>3rd: Interaction between magnet & coil --> $\frac{\delta \lambda_{c,pm}(x)}{\delta x}i_{1}=\frac{\delta M(x)}{\delta x}(H_{c}l_{m})i_{1}$
>$P_{tot,pm}=\frac{1}{\mathcal{R}}$: is the total permeance of magnetic circuit seen from permanent magnet

>[!NOTE] Faraday Law
>- Faraday Law: $e=\pm \frac{Nd\phi}{dt}=\frac{d\lambda}{dt}$
>- Lenz Law: The voltage induced in a coil by a changing flux will be of such a polarity that, if a current could flow as a result of that induced voltage, the flux established by that current would oppose the causing or original flux change.
>- **Transformer emf** devices are based on the generation of emf in a stationary circuit, in which the emf is generated by a time-varying magnetic field linking the circuit. **Motional emf** devices are based on the generation of emf due to a moving conductor within a stationary magnetic field.
>$\lambda=B_{y}A=-Bylx$
>$e=-\frac{d\lambda}{dt}=B_{y}lv$
>$F_{x}=\frac{d\lambda}{dx}I=\frac{d(-B_{y}lx)}{dx}I=-B_{y}lI$
>$F_{x.lorentz}=\int J \times B \, dV=\vec{J} \times Bl\cos \theta=-B_{y}lI$

>[!NOTE] DC Machine Principle
>The armature winding combines with the magnetic field formed in the air gap. The function of an armature is multi-purposed. The main role is **to conduct current over the field, thus generating shaft torque within an active machine**. The secondary purpose of an armature is to produce Electromotive Force (EMF).
>
>$\lambda_{a}=L_{a}i_{a}+N_{a}\phi_{a}=L_{a}i_{a}+\lambda_{a\phi}$
>$\lambda_{a\phi}=N_{a}\phi_{p}=M_{af}(\theta)i_{f}$
>$\lambda_{a}=N_{a}\phi_{p}\cos(\theta)=\lambda_{a\phi}^{top}\cos(\theta)$
>
>so: flux in coil $\lambda_{a}=L_{a}i_{a}+\lambda_{a\phi}^{top}\cos(\theta)$
>**torque:** $T_{d}=\frac{dM_{af}(\theta)}{d\theta}i_{a}i_{f}=\frac{d\lambda_{a\phi}}{d\theta}i_{a}=\frac{\delta \lambda_{a\phi}^{top}\cos(\theta)}{\delta \theta}i_{a}$ and $T_{d}=-\lambda_{a\phi}^{top}\sin(\theta)i_{a}$
>
>**due to motion of coil emf induced:** $\lambda_{a\phi}=\lambda_{a\phi}^{top}\cos(\theta)$
>$E_{a}$ Lenz law counteracts change in flux: $E_{a}=-\frac{\delta \lambda_{a\phi}}{\delta t}=-\frac{\delta \lambda_{a\phi}}{\delta \theta} \frac{d\theta}{dt}$
>$E_{a}=-\frac{\delta \lambda_{a\phi}}{\delta \theta}\omega_{m}=\lambda_{a\phi}^{top}\sin(\theta)\omega_{m}$
>**summary: $e=-N_{a} \frac{d\phi_{p}}{dt}=-\frac{d\lambda_{a\phi}}{d\theta} \frac{d\theta}{dt}=-\frac{d\lambda_{a\phi}}{d\theta} \omega_{m}=\lambda^{top}_{a\phi}\sin(\theta) \omega_{m}$** 
>
>**emf $\propto$ speed
>torque $\propto$ current**
>
>![[motor-generator-quadrant-graph.png|400]]
>regenerative: Generator
>motoring: motor

# DC Machines
https://www.youtube.com/watch?v=LAtPHANEfQo

![[dc-machine-cross-section.png|300]]

>[!NOTE] EMF and Torque in Armature
>$Z:$ number of conductors $\frac{Z}{2}$ coils
>$a:$ number of parallel coils
>$p:$ number of poles
>
>**EMF constant**
>induced armature voltage (emf):
>$E=| \frac{\delta \lambda_{a\phi}}{\delta t} | = | N \frac{\delta \phi_{p}}{\delta \theta} | \omega_{m}=\frac{Z}{2} \frac{1}{a} \frac{2\phi_{p}}{\frac{2\pi}{p}}\omega_{m}=\frac{p}{a} \frac{Z}{2\pi} \phi_{p}\omega_{m}=K\phi_{p}\omega_{m}$
>
>**Torque constant**
>torque:
>$T_{d}=| \frac{\delta \lambda_{a\phi}}{\delta \theta} |i_{a}=| N \frac{\delta \phi_{p}}{\delta \theta} |i_{a}=\frac{Z}{2} \frac{2\phi_{p}}{\frac{2\pi}{p}} \frac{i_{a}}{a}=\frac{p}{a} \frac{Z}{2\pi} \phi_{p} i_{a}=K\phi_{p}i_{a}$
>
>where: $K=\frac{p}{a} \frac{Z}{2\pi}=$ Torque or emf const
>
>![[emf-constant.png|200]]
>
>Power Conversion:
>$P_{d}=EI_{a}=K\phi_{p}\omega_{m}I_{a}$
>$T_{d}=\frac{P_{d}}{\omega_{m}}=K\phi_{p}I_{a}$
>
>![[power-conversion.png|300]]

>[!NOTE] DC Machine Operation
>![[motor-generator-circuits.png|500]]
>![[field-winding-config.png|500]]
>
>**generator: $T_{d}$ in opposite direction of shaft rotation as its resisting motion and generates power
>motor: direction of rotation $\omega _m$ providing driving force.**

>[!NOTE] Field Winding
>https://www.youtube.com/watch?v=xi0jaPAl2II
>Field winding (producing $\phi_{p}$) connections:
>	- Separately: excited
>	- Shunt : parallel to armature
>	- Series: in series with armature
>	- Permanent magnet: fixed value $\phi_{p}$
>
>Connection determines:
>	- Torque speed ($T,\omega$) - characteristic (**motor** operation)
>	- Voltage current ($V,I$) - characteristic (**generator** operation)
>	  
>
>![[separetly-excited-dc-machine.png|350]]![[shunt-excited-dc-machine.png|350]]
>![[series-excited-dc-machine.png|350]]![[open-circuit-char.png|350]]
>
>reluctance network field winding: $\phi_{p}=\frac{N_{f}I_{f}}{R_{gap}+R_{core}}=\frac{F_{p}}{R_{gap}+R_{core}}$
>
>Open-circuit characteristic: $I_{f}=0$ due to hysteresis
>
>$\eta=\frac{P_{shaft}}{P_{in}}$, $P_{in}=V_{a}I_{a}$, $P_{developed}=T_{d}\omega_{m}$, $P_{shaft}=T_{s}\omega_{m}$
>
>for shunt $I_{a}$ is calculated with KCL, while for separate $I_{a}$ calculated $\frac{V_{t}}{V_{L}}$
>
>The field winding of a series DC motor has fewer turns with a higher cross-section area. For constant terminal voltage, a shunt excited DC motor has a linear dependency between shaft torque and shaft speed. A series excited DC motor has a nonlinear dependency between shaft torque and shaft speed.

Open circuit characteristic: $\Phi_{pol}(I_{f})=\frac{N_{f}I_{f}}{R_{gap}+R_{co\mathrm{Re}}}$, and $\frac{E_{2}}{E_{1}}=\frac{\omega_{2}}{\omega_{1}}$
$T_{d}=K_{l}I_{a}^2$

![[magnetic-linearity.png|500]]
![[windings.png|400]]
we have multiple fields on the motor that effect the torque. field and armature.

**armature reaction:** when armature is neglected $I_{L}=I_{noload}$ due to saturation, there is reduced flux density on other side of saturation in motor, so flux is reduced, so emf and torque also reduce.
speed regulation for shunt dc motor: $SR=\frac{n_{m,noload}-n_{m,full load}}{n_{m,full load}}\cdot100$%
- When it is operated as a motor, the machine will have a higher shaft speed. When it is operated as a generator, it will have a lower terminal voltage.

###### Power Flow
generator: $P_{out}=V_{t}I_{L}=I_{a}^2R_{L}$ motor: $P_{out}=P_{s}$
generator: $P_{in}=EI_{a}+P_{fw}+(V_{f}I_{f})$, motor: $P_{in}=V_{t}I_{L}+(V_{f}I_{f})$

![[power-flow-generator.png|700]]
![[power-flow-motor.png|700]]
**Additional input power when separately excited: $V_{f}I_{f}\implies P_{in}=V_{a}I_{a}+(V_{f}I_{f})$**
https://www.tutorialspoint.com/types-of-dc-generator-separately-excited-and-self-excited-dc-generators
**DC Generator Characteristics:** Stable voltage source: Separately and shunt excited • Reduced voltage for higher currents due to : • Internal series resistance: Ra • Internal parallel resistance Rf (shunt only).
**Separately excited DC Generator:** • Nearly constant output voltage at constant shaft speed • Additional DC source for field supply
**Shunt excited DC Generator:** • No additional source for field necessary • Without voltage regulator, field current decreases directly with terminal voltage due to load current increase (at constant shaft speed), • Iterative process needed to determine EMF with varying load
	no load ($I_{a}=I_{f}$):
	$V_{t}=(R_{f}+R_{rh})I_{h}$
	$V_{t}\approx E(R_{a}\ll R_{f}+R_{rh})$
	field resistance line: $E=(R_{f}+R_{rh})I_{f}$
**Series DC Generator:** • Independent source for field excitation is not required. • Terminal voltage changes significantly with a change in load current; • Unacceptable to be used as a DC power supply.

**DC Motor Characteristics:** • At constant terminal voltage: Shunt DC and separately excited motors have identical performance • Shunt and separately excited motors have small change of speed when load is varied (constant voltage)
**Shunt excited DC Motor:** • Shunt motor has the most constant speed of all DC motor configurations without field current control.
	$\omega_{m}=\frac{V_{t}-I_{a}R_{a}}{K\phi_{p}}$
	$\omega_{m}=\frac{V_{t}}{K{\phi_{p}}}-\frac{R_{a}}{(K\phi_{p})^2}T_{d}$
	$SR=\frac{n_{m,noload}-n_{m,full load}}{n_{m,full load}}\cdot100$%
**Series excited DC Motor:** • Field current is equal to armature current • High torque at low speed o Traction o Automotive cranking (starter) motors.
	linearization of $\phi(I_{f})$ or $\phi(I_{a})$
	$\phi_{p}=C_{\phi}I_{a}$
	$E=K\phi_{p}\omega_{m}=(KC_{\phi})I_{a}\omega_{m}=K_{l}I_{a}\omega_{m}=V_{t}-I_{a}(R_{a}+R_{s})$
	$T_{d}=K\phi_{p}I_{a}=(KC_{\phi})I_{a}^2=K_{l}I_{a}^2$
	$\omega_{m}=\frac{V_{t}-I_{a}(R_{a}+R_{s})}{K_{l}I_{a}}$
	$\omega_{m}=\frac{V_{t}}{\sqrt{ K_{l} }\sqrt{ T_{d} }}-\frac{R_{a}+R_{s}}{K_{l}}$

motor starting: $I_{a}=\frac{V_{a}-K\phi_{p}\omega_{m}}{R_{a}+R_{st}}$
speed control through: field, armature resistance, armature voltage control
**field** control for shunt DC motor: $R_{rh}$ is used to control $I_{f}$ so $\omega_{m}=\frac{V_{t}}{K\phi_{p}}-\frac{R_{a}}{(K\phi_{p})^2}T_{d}$
**field** control for series DC motor: $R_{diverter}$ in parallel with $R_{s}$ so $I_{s}=\frac{R_{diverter}}{R_{s}+R_{diverter}}I_{a}$
**armature resistance** control for shunt motor: external resistors added to armature circuit so $\omega_{m}=\frac{V_{t}}{K\phi_{p}}-\frac{R_{a}+\sum_{i}R_{i}}{(K\phi_{p})^2}T_{d}$
**armature voltage** control for seperatly DC motor: variable high power DC voltage source feeds armature, so $\omega_{m}=\frac{V_{adc}}{K\phi_{p}}-\frac{R_{a}}{(K\phi_{p})^2}T_{d}$
# Synchronous Machines
https://www.youtube.com/watch?v=Vk2jDXxZIhs
**always: do equivalent circuit, phasor diagram, equations, simulations**

- In DC the coil rotated in the field, in synchronous the field rotates while the coil is stationary.
- nameplate = line voltage -> terminal voltage
- excitation voltage = phase voltage
- circuit model requires phase voltage
- only work with (wye) connection
- always transfer line voltages to phase voltages
- **resistive load:** in phase V, I so pf=1, **inductive:** I lagging, **capacitive:** I leading
- $R_{s}$ phase resistance
- $X_{s}$ synchronous reactance

**synchronous, mechanical, electric frequency**
$\omega_{m}=\omega_{s}=\frac{d\theta}{dt}=\frac{2}{p}\omega_{e}=\frac{2}{p} 2\pi f[rad/s]$ angular speed
$n_{m}=n_{s}=\frac{120f}{p}[rpm]$ speed
$\omega_{s}=\omega_{m}=\frac{\pi n_{s,m}}{30}$
**electric frequency:** $\omega_{e}=\frac{p}{2}\omega_{m}=2\pi f_{s}\to electrical,speed$

![[frequency-of-poles.png|500]]
$\phi_{coils}=\frac{3}{2}P_{c}NI_{peak}\cos\left( \omega t-\frac{p}{2}\theta \right)$
![[fields-armature-coils.png|500]]

>$V_{an}=V_{ph}=\frac{V_{l}}{\sqrt{ 3 }}$
>$I_{a}=I_{ph}=\frac{I_{l}}{\sqrt{ 3 }}$
>$S=V_{ph}I_{ph}\to[VA]$
>$P=V_{ph}I_{ph}\cos \theta\to[W]$
>$Q=V_{ph}I_{ph}\sin \theta\to [VAr]$
>$pf=\cos \theta=\frac{P}{S}=\frac{P_{t}}{S}=\frac{P_{s}}{\eta\cdot S}$
>$\theta=\angle V_{ph}-\angle I_{ph}$ lag behind $V_{ph}$, - lead
>
>$P=S\cdot pf$
>$S=VI^*=P+jQ\implies P=Re(VI^*)\cap Q=Im(VI^*)$
>$S=P^2+Q^2$
>
>![[Pasted image 20231216174216.png|300]]

![[three-phase-sync-machine.png|400]]
but since $i_{a}=-(i_{b}+i_{c})\to \lambda_{a}=Li_{a}-Mi_{a}+\lambda_{m}$
$Ls = L − M$ is the synchronous inductance -> $\lambda_{a}L_{s}i_{a}+\lambda_{m}$
flux linkage affected by mutual inductance

>IF $R_{s}\neq 0$
>![[developed-torque-phasor.png|150]]
>$\omega _s=\omega_{m}$
>$V_{an}=E_{f}$
>$E_{f}=\lambda_{m} \frac{p}{2}\omega_{m}=\lambda_{m}\omega_{e}$
>$3P_{d}=3Re(E_{f}I^*_{a})=3T_{d}\omega_{m,s}=3E_{f}I_{a}\cos \beta$
>$3T_{d}=\frac{3Re(E_{f}I_{a}^*)}{\omega_{m}}=\frac{3E_{f}I_{a}\cos(\angle E_{f}-\angle I_{a})}{\omega_{m}}=3 \frac{p}{2} \lambda_{m} I_{a}\cos \beta$
>$\beta=\angle E_{f}-\angle I_{a}$, $I_{a}$ lags behind $E_{f}$
>![[developed-torque-graph.png|400]]
>![[sync-circuit.png|400]]

>IF $R_{s}=0$
>![[developed-torque-rs-0.png|400]]
>$3P_{d}\implies 3E_{f}I_{a}\cos \beta=3V_{an}I_{a}\cos \theta$
>$\to I_{a}\cos \beta=\frac{V_{an}}{X_{s}}\sin \delta$
>or we can also say $E_{f}\cos \beta=V_{an}\cos \theta$
>$3T_{d}=\frac{3E_{f}V_{an}}{\omega_{m,s}X_{s}}\sin \delta$
>![[developed-torque-graph-2.png|400]]

>$X_{s}=\omega_{e} L_{s}$
>**generator:** $V_{an}=-R_{s}I_{a}-jX_{s}I_{a}+E_{f}$
>$T_{s}=3T_{d}+T_{fw}$
>**motor:** $V_{an}=R_{s}I_{a}+jX_{s}I_{a}+E_{f}$
>$T_{s}=3T_{d}-T_{fw}$
>![[per-phase-circuit-sync.png|500]]

$\delta=\angle E_{f}-\angle V_{an}$
$3P_{elec,at,terminal}=3V_{an}I_{n}\cos \theta=\frac{3E_{f}V_{an}}{X_{s}+R_{s}}\sin(\delta)$
$3P_{cu,s}=3I_{a}^2R_{s}$
$P_{mech}=T_{s}\omega_{m}+(P_{fw})$
$\eta=\frac{P_{out}}{P_{in}}\cdot100\%=\frac{P_{mech}}{P_{el}}\cdot100\%=\frac{3P_{d}-P_{fw}}{3P_{d}+3P_{cu}}\cdot100\%=\frac{3I_{a}E_{f}-P_{fw}}{3I_{a}E_{f}+3R_{s}I_{a}^2}\cdot100\%$

pf lagging => $Im{[I_{a}]}<0$
pf leading => $Im{[I_{a}]}>0$
pf unity => $Im{[I_{a}]}=0$

>**PHASOR REPRESENTATIONS**
>![[steady state only.png|200]]
>![[generator-lagging.png|400]]
>![[generator-leading.png|400]]
>![[motor-in-phase.png|400]]
>![[motor-lagging.png|400]]
>![[summery of phasor ac machines.png|300]]

>**POWER FLOW**
>![[power-flow-gen-exciter.png|400]]
>![[power-flow-generator-1.png|400]]
>![[power-flow-motor-1.png|400]]

![[operation-modes.png|300]]

![[sync vs dc.png|300]]![[sync vs dc 2.png|300]]
###### Isolated & Interconnected Generator
![[isolated-generator.png|300]]![[interconnected sync gen.png|300]]

![[field weakaning.png|300]]
# Induction Machines
#### General Theory
https://www.youtube.com/watch?v=AOC7uTnxmTI
https://www.electricaleasy.com/2015/06/difference-between-synchronous-and-induction-motor.html
![[model for induction machine mmf.png|300]]
$Elec_{degrees}=\frac{p}{2}Mech_{degrees}$
![[120 displaced induction machines currents.png|300]]
![[airgap addition.png|300]]
(total airgap mmf added together) total airgap mmf is a *traveling or revolving wave:* $F_{g}=\frac{3}{\pi}N_{1eff}I_{m}\cos\left( \omega t-\frac{p}{2}\theta \right)$

(s-stator) (r-rotor)
$\omega_{e}$ electrical quantity
synchronous speed(speed of wave): $\omega_{s}=\frac{d\theta}{dt}=\frac{2}{p}\omega_{e}[rad/s]$
$n_{s}=\omega_{s} \frac{60}{2\pi}=\frac{120f}{p}[rpm]$
unlike synchronous machine $\omega_{m}\neq \omega_{s}$ (same speed, not in phase) we have a **slip**
*slip:* $s=\frac{\omega_{s}-\omega_{m}}{\omega_{s}}=\frac{n_{s}-n_{m}}{n_{s}}$
- $mtr:sync>mech$
- $gen:sync<mech$
![[slip in induction motor.png|300]]
**rotor induced voltages:**
- reference point on rotor
- mechanical speed difference with stator field (stator field passes rotor): $\omega_{s}-\omega_{m}=s\omega_{s}$
- p-pole field induces a voltage in the rotor winding with frequency: $\omega_{r}=s\omega_{s}\cdot \frac{p}{2}=s\omega_{e}$
- frequency of the rotor induced voltages: $f_{rotor}=s\cdot f_{stator}$
*speed of rotor relative to:*
- rotor: $\omega_{rr}=\frac{2}{p}s\omega_{e}=s\cdot \omega_{s}\implies\frac{120f}{p}s$ -> *speed difference between stator, rotor*
- stator: $\omega_{rs}=s\omega_{s}+\omega_{m}\implies(\omega_{s}-\omega_{m})+\omega_{m}=\omega_{s}\implies\frac{120f}{p}$ -> *have same speed*
- stator rotations field: $0$
- ![[summery of induction speed quantities.png|350]]

![[induced field and torque 1.png|400]]

induction machine can be represented as a transformer:
![[induction motor transformer.png|300]]
![[per phase equivelant circuit for 3 phase induction motor.png|400]]
![[three phase induction motor (active) power flow.png|400]]
*if something comes after for instance after $3P_{d}=P_{fw}+P_{s}$
if something comes before for instance before: $3P_{g}=P_{t}-3P_{cu,s}-3P_{core}$

>$\omega_{m}=(1-s)\omega_{s}$
>rotor ohmic losses: $3P_{r,cu}=3(I_{2}')^2R_{2}'=3P_{gap} \cdot s$
>$3P_{d}=3(I_{2}')^2 \frac{1-s}{s}R_{2}'=3(1-s)P_{gap}=P_{T}+P_{fw}$
>$3T_{d}=\frac{3P_{d}}{\omega_{m}}=\frac{3P_{gap}}{\omega_{s}}$
>$3T_{d}=\frac{3(1-s)}{\omega_{m}}(I_{2}')^2 \frac{R_{2}'}{s}=\frac{3(I_{2}')^2 \frac{R_{2}'}{s}}{\omega_{s}}$
>$T_{s}=\frac{P_{s}}{\omega_{m}}=3T_{d}-T_{fw}$
>$P_{gap}=3(I_{2}')^2 \frac{R_{2}'}{s}=P_{t}-3P_{cu,s}-3P_{core}=S\cdot PF-3P_{cu,s}-3P_{core}$
>$P_{s}=3V_{1}I_{1}\cos \theta$
>core losses: $3P_{d}=P_{s}\cdot3I_{a}^2\cdot R_{1}-3P_{g}$

>efficiency at point of operation
>developed power (power supplied, rotational losses): $3P_{d}=P_{s}+P_{fw}$
>active power at terminals: $P_{t}=3P_{s,cu}(3R_{1}I_{1}^2)+3P_{core}+3P_{g}$
>efficiency: $\eta=\frac{P_{s}}{P_{t}}=\frac{P_{out}}{P_{in}}=\frac{P_{s}}{P_{s}+P_{loss}}$

![[modes of operation of induction machine.png|300]]
- Unstable for high slips: speed increase results in torque increase 
- Stable operation for small slip: a speed increase results in a torque decrease

![[assumed stator rpm.png|300]]
![[rms value of phase voltage.png|300]]
**If the shaft speed is equal to the synchronous speed, the slip is zero, and there is no current flowing in the rotor. Therefore, the equivalent impedance seen from the terminals does not include the secondary side (as the rotor impedance is infinite due to zero slip)**
#### Model Parameters
##### Blocked Rotor
Motor is excited with three-phase supply at rated rotor frequency and current (hence, requires reduced supply voltage and frequency)
![[blocked rotor schematic.png|300]]
$\omega_{m}=0$, sleep $s=1$
input current: $I_{1}=I_{br}$
input voltage: $V_{1}=V_{br}=\frac{V_{L}}{\sqrt{ 3 }}$
input power (per phase): $P_{br}=\frac{P_{T}}{3}$
$R_{eq}=\frac{P_{br}}{I^2_{_{br}}}$, $Z_{br}=\frac{V_{br}}{I_{br}}$, $X_{br}=\sqrt{ Z_{br}^2-R_{eq}^2 }$
$R_{1}=\frac{1}{2} \frac{V_{dc}}{I_{dc}}\implies R_{2}'=R_{eq}-R_{1}$
$X_{eq}=\frac{f}{f_{br}}X_{br}\implies X_{eq}=X_{1}+X_{2}$
##### No-load Rotor
Motor is operated with rated voltage and frequency but without mechanical load
![[no load rotor.png|300]]
$s\approx0$
$\frac{R_{2}'}{s}\approx \infty$, $I_{2}'\approx0$ but not 0
input voltage: $V_{1}=V_{nl}=\frac{V_{L}}{\sqrt{ 3 }}$
input current: $I_{1}=I_{nl}$
input power (per phase): $\frac{P_{T}}{3}$
shaft speed: $\omega_{nl}$

Power supplied to secondary accounts for friction, windage and rotor ohmic losses:
$\theta_{nl}=\cos^{-1}\left[ \frac{P_{nl}}{V_{nl}I_{nl}} \right]\implies \vec{E_{1}}=\vec{V_{1}}\angle0\degree-I_{nl}\angle-\theta_{nl}(R_{1}+jX_{1})$
$s_{nl}=\frac{\omega_{s}-\omega_{nl}}{\omega_{s}}=\frac{n_{s}-n_{nl}}{n_{s}}\implies\vec{I_{2}'}=\frac{\vec{E_{1}}}{\frac{R_{2}'}{s_{nl}}+jX_{2}'}$

Primary and secondary currents are determined:
active power balance:
$P_{c}=P_{nl}-I_{nl}^2R_{1}-(I_{2}')^2 \frac{R'_{2}}{s_{nl}}\implies R_{c}=\frac{E_{1}^2}{P_{c}}$
reactive power balance:
$Q_{m}=V_{nl}I_{nl}\sin \theta_{nl}-I^2_{nl}X_{1}-(I_{2}')^2X_{2}'\implies X_{m}=\frac{E_{1}^2}{Q_{m}}$

the current is lagging the voltage due to inductive reactance

*if we have the rated operating point slip: $s_{1}$ then no-load condition slip $s_{2}\implies s_{2}=\frac{3T_{d_{2}}}{3T_{d_{1}}}s_{1}\implies n_{m_{2}}=(1-s_{2})\cdot n_{s}$ where $3T_{d_{2}}=T_{fw}$*
#### Final Parameters
![[thevenin analysis.png|300]]![[nature of developed torque.png|300]]
*small slip approximation is only valid in that drop line in the graph, where speed and developed torque is proportional in manipulating the slip in that area of graph*
![[small slip approximation.png|300]]![[small slip approximation last.png|300]]
#### General unimportant
![[max torque.png|400]]
*effects of rotor resistance:* • Large $R_{2}'$ typically for small induction motors • Large $R_{2}'$ is inefficient, but more stable • Heat in rotor may increase $R_{2}'$ with 0.4%/°C

*induction machine performance*
- Maximum power coincides with maximum torque
- Plugging mode: no output power (all mechanical and electrical power is dissipated)
- Generator mode: power supplied to the shaft not always larger than power required for establishing stator field
- Induction machine is the single-excited (stator coils only)
- Power supply is required to produce the stator field
- Induction machine is only operating as a generator when more power on the shaft is supplied than required for producing the stator field
- Maximum efficiency at rated load • Low efficiency for small loads
- Maximum power factor at rated load • Low power factor for small loads
- • Starting current is often 5-6 times rated (nameplate) current

*speed control*
- Torque speed characteristic is anchored by the zero-crossing at the synchronous speed
- *Limited speed range:* changing slope torque speed characteristics • Voltage control • Rotor resistance control
- *Wide speed range* • Frequency control
![[voltage and rotor resistance control.png|300]]![[frequency control.png|300]]
frequency control: • Both voltage and frequency have to be controlled • For same torque at lower supply frequency, the slip is larger, and hence, the efficiency lower • Efficiency for Ts=50 Nm indicated with circle