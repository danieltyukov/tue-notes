# Content
**Lab, 1 Assigment, Homeworks, 2 Lecture Quizzes**
**Formula Sheet Given**
###### Background knowledge (given by Georgi Radulov) 
	o Network theory, poles and zeros 
	o Electronics (transistor circuits), MOSFET
	o Small signal and Large signal analysis, biasing 
	o Mathematics (differentiate, integrate, complex numbers)

###### Signal generators and waveform-shaping circuits (given by Georgi Radulov) 
	o sine-wave oscillators 
	o limiting and clamping 
	o op-amp RC oscillator circuits 
	o LC and Xtal oscillators
###### Frequency response (given by Georgi Radulov) 
	o frequency dependency 
	o multi-stage amplifier frequency response

###### Integrated-circuit amplifiers (given by Georgi Radulov) 
	o finite open-loop gain and bandwidth 
	o large-signal operation 
	o cmos transistor level design and analysis

###### Operational amplifier circuits (given by Georgi Radulov) 
	o two-stage CMOS op-amp characteristic properties 
	o Miller compensation 
	o Output stages 
	o CMOS class AB output stages

###### Data converters (given by Pieter Harpe) 
	o digital-to-analog converters 
		▪ Op-amp based 
		▪ R2R ladder 
		▪ Charge redistribution 
		▪ Current-steering 
	o analog-to-digital converters 
		▪ flash 
		▪ tracking 
		▪ SAR 
		▪ Dual-slope

###### CMOS digital logic circuits (given by Eugenio Cantatore) 
	o digital logic inverters 
	o CMOS inverter 
	o dynamic operation of CMOS inverter 
	o CMOS logic-gate circuits 
	o CMOS transmission gates

###### Memory circuits (given by Eugenio Cantatore) 
	o latches and flip-flops 
	o static and dynamic memories 
	o sense amplifiers 
	o read-only memories

# Background knowledge

#### General

![[voltage-divider.png|200]]

- $i=C \frac{dv}{dt}$, $v=L \frac{di}{dt}$ we convert it to imaginary so we don't use derivatives:
  $Ae^{st}=Ae^{(\sigma+jw)t}=Ae^{\sigma t}[\cos(\omega t)+j\sin (\omega t)]$
  
  Impedance (resistance, reactance): $Z=R_{L}+iX_{L}$
  V,I type: $Ae^{st}$ where $s=\sigma+j\omega$
  $\sigma>0\to \exp grow$, $\sigma<0\to \exp shrinking$, $\sigma=0\to const$ amplitude
  $\omega =2\pi f$
  
  Capacitors (Ohms law): $\frac{1}{sC}=Z_{c}$, $V=I \cdot Z_{c}$
  Inductors (Ohms law): $sL=Z_{L}$, $V=I\cdot Z_{L}$
  
  **charge in capacitor:** $Q=CV\to i=\frac{dq}{dt}\to i=C \frac{dv}{dt}$
  
- voltage source: short circuit, current source: open circuit
**Thevenin/Norton:** https://www.youtube.com/watch?app=desktop&v=h9rA42B1euw
![[thevenin-norton.png|300]] ![[port-impedence.png|300]]
![[thevenin-detail.png|400]]
Impedance (opamps): $Z_{x}=\frac{V_{x}}{I_{x}}\to I_{x}=\frac{V_{x}-AV_{x}}{Z}\to Z_{in}=\frac{Z}{(1-A)}$ and $Z_{out}=\frac{Z}{\left( 1+A \right)}$
gyrator: $\frac{sC}{Gm_{1}G_{m_{2}}}$
Admittance: $Y_{x}=\frac{1}{Z_{x}}$
[[Electronics I - 5ECB0#Op-Amps]]
#### Poles Zeros

**Poles & Zeros:** https://www.youtube.com/watch?v=AZ7_MvANy_Q
[[Systems - 5ESB0]]
![[poles-zeros.png|300]]
Gain (dB) = $20\log\left( \frac{V_{out}}{V_{in}} \right)$
Phase = $\tan^{-1}\left( -\frac{\omega}{\omega_{n}} \right)$
![[bode-plot.png|400]]

#### Analysis

[[Electronics I - 5ECB0#Diodes]]
large signal -> bias point -> tangent -> initialization -> small signal
**Small Signal Analysis:**
> I source = OC
> V source = SC
> Capacitors = SC
> Inductance = OC

**Bias analysis:**
> V source = SC
> Capacitors = OC

#### MOSFET

>small signal: https://www.youtube.com/watch?v=utBRWK4GmmE
>active-load: https://www.youtube.com/watch?v=IOCK41RNpGs
>cs: https://www.youtube.com/watch?v=T-0X1N9N5V8&t=363s
>cg: https://www.youtube.com/watch?v=2zr5ykXpyXY
>cascode: https://www.youtube.com/watch?v=uFxXgDCLhGw
>mirror: https://www.youtube.com/watch?v=Jmu02dErhdg
>differential-1: https://www.youtube.com/watch?v=IYR-FxjAym0&t=5s
>differential-2: https://www.youtube.com/watch?v=nWz6JGyT_fo

[[Electronics I - 5ECB0#MOSFET/MOST]]
MOSFET Visuals: https://www.youtube.com/watch?v=rkbjHNEKcRw
MOSFET Logic: https://www.youtube.com/watch?v=g3kn4yeAjEI
- $V_{GD}=V_{GS}-V_{DS}$
- $V_{OV}=V_{GS}-V_{tn}$
- **MOSFET Drain Currents:** $I_{Dn}=\frac{K_{n}}{2}{(V_{GS}-V_{tn})^2_{+}-(V_{GD}-V_{tn})^2_{+}}$
- $I_{Dp}=\frac{K_{p}}{2}{(V_{SG}-V_{tn})^2_{+}-(V_{DG}-V_{tn})^2_{+}}$
- $I_{Dn}=\frac{K_{n}}{2}{(V_{GS}-V_{tn})^2_{+}-(V_{GD}-V_{tn})^2_{+}}(1+\lambda V_{DS})$
- **NMOS Satured if:** $V_{GD}<V_{tn}$ so if $V_{DS}>V_{OV}$ -> V controlled I source
- **PMOS Saturated if:** $V_{DG}<|V_{tp}|$ so if $V_{SD}>|V_{OV}|$
- **When saturated:** $I_{D}=\frac{1}{2}\mu_{n}C_{ox} \frac{W}{L}V_{OV}^2,g_{m}=\frac{dI_{D}}{dV_{GS}}=\frac{2I_{D}}{V_{OV}},r_{o}=\frac{1}{dI_{D}/dV_{DS}}=\frac{V_{A}}{I_{D}}=\frac{1}{\lambda I_{D}}$
- **When triode:** $I_{D}=\mu_{n}C_{ox} \frac{W}{L}\left( V_{OV}-\frac{1}{2}V_{DS} \right)V_{DS}$
  
>[!NOTE] Modes
>triode: $V_{GS}-V_{tN}>0$ and $V_{GD}-V_{tN}>0$
>saturated: $V_{GS}-V_{tN}>0$ and $V_{GD}-V_{tN}<0$
>cut-off: $V_{GS}-V_{tN}<0$ and $V_{GD}-V_{tN}<0$
![[large-signal-behaviour.png|300]]![[signal-model-channel-length.png|300]]

>[!NOTE] Small signal equivalent of MOSFETs
>$g_{m}=\frac{\delta I_{D}}{\delta V_{GS}}|_{DC,bias,point}=\frac{2I_{D}}{V_{OV}}$ (saturation)
>$g_{o}=\frac{\delta I_{D}}{\delta V_{DS}}|_{DC,bias,point}\to r_{o}=\frac{1}{\frac{\delta I_{D}}{\delta V_{DS}}|_{DC,bias,point}}=\frac{1}{\lambda I_{D}}=\frac{L}{\lambda'I_{D}}$ (saturation)
>
>$i_{d}=g_{m}v_{gs}+g_{o}v_{ds}=g_{m}v_{gs}+\frac{v_{ds}}{r_{o}}$
>if body effect: $\dots+g_{mb}v_{bs}$
>![[nmos-pmos-small-signal.png|300]]
>
>transistors act as voltage ($V_{GS}$) controlled current ($I_{D}$) sources
>
>[[Electronics I - 5ECB0#Configurations]]

![[transistor-config-1.png|350]]![[transistor-config-2.png|350]]
![[transistor-config-3.png|350]]![[transistor-config-4.png|350]]

**common-source**
![[common-source-char.png|400]]
**common-drain**
![[common-drain-char.png|400]]
**common-gate**
![[common-gate-char.png|400]]
**cascode**
![[cascode-char.png|400]]
if all equal $A_{v}=(g_{m}r_{o})^2$
**current-mirror**
![[current-steering.png|500]]
![[current-mirror-small-signal-active-load.png|400]]
![[20231126_225534.jpg]]

# Signal generators and waveform-shaping circuits
oscillator: https://www.youtube.com/watch?v=XVS8Puf4tiw
there are: RC, LC, Crystal oscillators 
#### Sine-Wave Oscillators
**Oscillator Feedback Loop:** $\frac{x_{o}}{x_{s}}=\frac{A(s)}{1-A(s)\beta(s)}$
open-loop gain: $L(s)=A(s)\beta(s)$
![[oscillator-feedback-loop.png|300]]
Barkhausen criteria: At the oscillation frequency,
- the phase of the open loop gain should be $n\cdot360\degree$ ("right moment", no phase shift in signal) -> $arg(L(s))=\angle A\beta=0$
- and the magnitude should be $1$ ("right amount", no gain no decrease in amplitude) -> $|L(s)|=1$
- $2\pi f=\omega$
#### Op-Amp RC Oscillators
##### Wien-Bridge Oscillator
https://www.youtube.com/watch?v=gbUXbaxvX94
Zero phase at $\omega_{o}$ if $\omega_{o}CR-\frac{1}{w_{o}}CR=0\to \omega_{o}=\frac{1}{CR}$
at $\omega_{o}=\frac{1}{CR}\to L(j\omega_{o})=\frac{1+\frac{R_{2}}{R_{1}}}{3}$ magnitude = 1 if $R_{2}=2R_{1}$

![[wien-bridge-oscillator.png|400]]
$Y=\frac{1}{Z}$ admittance

>[!NOTE] Formulas
>$A=1+\frac{R_{2}}{R_{1}}$
>$\beta=\frac{1}{\left( R+\frac{1}{sC} \right)\cdot\left( sC+\frac{1}{R} \right)+1}$
>$A\cdot \beta=L=\frac{1+\frac{R_{2}}{R_{1}}}{3+sCR+\frac{1}{sCR}}$
>$\frac{x_{o}}{x_{s}}=\frac{A}{1-A\beta}$

Oscillations at stable amplitude $A0$, we need:
- $|L(s)|>1$ for $V_{o}<A0$
- $|L(s)|=1$ for $V_{o}=A0$
- $|L(s)|<1$ for $V_{o}>A0$

~=slightly
Small amplitude => Open-loop gain == >~1
Large amplitude => Open-loop gain == <~1 -> (as soft clipping comes on)
![[wien-bridge-oscillator-proper-analysis.png|400]]
>[!NOTE] Formulas
>top diode: min amplitude, bottom diode: max amplitude peak
>$\frac{V_{dd}-V_{o}}{R_{3}+R_{4}}=\frac{V_{a}-V_{o}}{R_{4}}$
>$V_{a}=\dots$
>$V_{i}=\frac{V_{o}}{3}$
>$V_{i}-V_{a}=v_{D_{1}}$
>then you can find $V_{o}$ meaning after amplitude reaches that voltage one of diodes turn on
>$\frac{v_{o}}{v_{i}}=1+\frac{R_{4}//R_{2}}{R_{1}}$

First the oscillations start where $|L(s)|>1$ then at certain point set by limiter resistors diodes turn on and we get $|L(s)|<1$ and then there is this variability which creates stable oscillations
![[20231202_011047 1.jpg|400]]

![[potentiometer-wien.png|200]]
$\beta=\frac{1}{3}\to A=3\to A=1+\frac{R_{2}}{R_{1}}\to1+\frac{10+50-x}{x}\to x=R_{1}=20k\Omega$
$f_{osc}=\frac{1}{2\pi RC}$
Amplitude (voltage divider between a and (b=o)): $v_{a}=0.7V$ for $R_{2}=10k\Omega\implies v_{o}=3.5V$ as $R_{1}=5\cdot R_{2}$

>[!NOTE] (Passive) Limiter Circuits
>amplitude dependent gain
>Hard Limiter (clipper): higher amplitude -> higher attenuation -> distortion
>**Soft Limiter:** less distortion: 
>- (ideal diode), 
>- (ideal diode with voltage source (0.7V))
>- (ideal diode with voltage source and resistor)
>- exponential model: $I=I_{S}e^{V/VT}$ where $V_{T}=20mV$ at $300K$
>  [[Electronics I - 5ECB0#LIMITERS]]
>  ![[clippers.png|250]]
>  **Soft Clipping** gets clipped in the **feedback loop** of an op amp. 
>  **Hard Clipping** gets clipped **after** the feedback loop.
>  ![[soft-vs-hard-clipping.png|250]]
##### Phase Shift Oscillator
https://www.youtube.com/watch?app=desktop&v=Gvb4GIV5ig8
$A\sin(\omega t)=-A\sin(\omega t+180\degree)$
If $K$ is real -> $\beta(j\omega_{o})$ should be real -> $6(\omega_{o}RC)-(\omega_{o} RC)^3=0$
-> $\omega_{o}=2\pi f_{osc}=\frac{\sqrt{ 6 }}{RC}\to \beta(j\omega_{o})=\beta\left( j \frac{\sqrt{ 6 }}{RC} \right)=-\frac{1}{29}$
-> demand amplifier $gain=29$ $phase=-180\degree$
![[phase-shift-oscillator.png|400]]
![[high-pass-low-pass.png|300]]
take voltage divider: high-pass: $\frac{R}{C+R}$
each pass filter is $60 \degree$ that's why total is $180\degree$ phase shift 3x60

![[complex-phase-osci.png|300]]
$L(j\omega)=\frac{\omega^2RR_{f}C^2}{4+j\left( 3\omega RC-\frac{1}{\omega RC} \right)}$
$\omega_{0}=\frac{1}{RC\sqrt{ 3 }}$
##### Quadrature Oscillator
circuit integrator: https://www.youtube.com/watch?v=OPvs7A554Rw
![[quadrature-oscillator-derive.png|300]]
![[quadrature-schematic.png|500]]
#### LC and Crystal Oscillators
##### LC Oscillators
intuition: https://youtu.be/2_y_3_3V-so?si=gklbMfbzDkME4z3v
colpitts: https://www.youtube.com/watch?v=1fgw-ONlAcc
![[lc-vs-rc.png|350]]

![[lc-tuned-oscillator.png|500]]
![[transistor-circuit-lc-amp.png|300]]
$L(j\omega)=-G \frac{Z_{1}\cdot Z_{3}}{Z_{1}+Z_{2}+Z_{3}}\to$Barkhausen$\to1$
$Z_{1}=R_{1}+jX_{1}$, $Z_{2}=R_{2}+jX_{2}$, $Z_{3}=R_{3}+jX_{3}$ where $R_{1},R_{2},R_{3},G\geq 0$
$\omega_{0}=\frac{1}{\sqrt{ LC }}$
we need the amplifier so that the oscillations don't die out (watch video for colpitts)

![[analayze-oscialltor.png|300]]
![[analysis-colpitts-oscillator.png|500]]
**Colpitts Oscillator:** $\omega_{0}=\frac{1}{\sqrt{ L \frac{C_{1}C_{2}}{C_{1}+C_{2}} }}$
Hartley: $\omega_{0}=\frac{1}{\sqrt{ LC }}$

