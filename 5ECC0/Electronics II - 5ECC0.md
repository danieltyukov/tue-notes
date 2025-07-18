# Content
**Lab, 1 Assigment, 2 Homeworks, 2 Lecture Quizzes**
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
	o LC and Xtal oscillator
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
> V bias = ground

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
>![[p channel n channel mosfet.png|400]]
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
Zero phase at $\omega_{o}$ if $\omega_{o}CR-\frac{1}{w_{o}}CR=0\to \omega_{o}=\frac{1}{RC}=\frac{1}{\tau}$
at $\omega_{o}=\frac{1}{RC}\to L(j\omega_{o})=\frac{1+\frac{R_{2}}{R_{1}}}{3}$ magnitude = 1 if $R_{2}=2R_{1}$

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

wien bridge with a limiter
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

![[potentiometer-wien.png|300]]
$\beta=\frac{1}{3}\to A=3\to A=1+\frac{R_{2}}{R_{1}}\to1+\frac{10+50-x}{x}\to x=R_{1}=20k\Omega$
$f_{osc}=\frac{1}{2\pi RC}$
Amplitude (voltage divider between a and (b=o)): $v_{a}=0.7V$ for $R_{2}=10k\Omega\implies v_{o}=3.5V$ as $R_{1}=5\cdot R_{2}$

[!NOTE] (Passive) Limiter Circuits
>amplitude dependent gain
>Hard Limiter (clipper): higher amplitude -> higher attenuation -> distortion
>**Soft Limiter:** less distortion: 
>- (ideal diode), 
>- (ideal diode with voltage source (0.7V))
>- (ideal diode with voltage source and resistor)
>- exponential model: $I=I_{S}e^{V/VT}$ where $V_{T}=20mV$ at $300K$
>  limiters: [[Electronics I - 5ECB0#Summery for EC2]]
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
lc-tuned: https://www.youtube.com/watch?v=u-B9YRWMtpQ
![[lc-vs-rc.png|350]]

![[lc-tuned-oscillator.png|500]]
![[transistor-circuit-lc-amp.png|300]]
$L(j\omega)=-G \frac{Z_{1}\cdot Z_{3}}{Z_{1}+Z_{2}+Z_{3}}\to$Barkhausen$\to1$
$Z_{1}=R_{1}+jX_{1}$, $Z_{2}=R_{2}+jX_{2}$, $Z_{3}=R_{3}+jX_{3}$ where $R_{1},R_{2},R_{3},G\geq 0$
$\omega_{0}=\frac{1}{\sqrt{ LC }}$
we need the amplifier so that the oscillations don't die out (watch video for colpitts)

![[analayze-oscialltor.png|300]]
![[analysis-colpitts-oscillator.png|500]]
**Colpitts Oscillator:** $\omega_{0}=\frac{1}{\sqrt{ L \frac{C_{1}C_{2}}{C_{1}+C_{2}} }}$ therefor $A\beta=\frac{A_{v}\cdot C_{2}}{C_{1}}\implies A_{v}=\frac{C_{1}}{C_{2}}\implies A\beta=1$ also $\beta=\frac{C_{2}}{C_{1}}$
$g_{m}R> \frac{C_{2}}{C_{1}}$
**Hartley Oscillator:** $\omega_{0}=\frac{1}{\sqrt{ (L_{1}+L_{2})C }}$
$g_{m}R > \frac{L_{1}}{L_{2}}$
##### Crystal Oscillators
summary: https://www.youtube.com/watch?v=YzcKQWwkzWs
![[crystal-oscillator.png|500]]
>$f_{S}=freq_.start\mid\mid f_{P}=freq_.peak$
>$f<f_{S}$ capacitive (no DC current possible)
>$f=f_{S}$ **series resonance:** resistive, *low ohmic*, determined by crystal properties
>$f_{S}<f<f_{P}$ inductive: phase corrections->small $f$ shifts
>$f=f_{P}$ **parallel resonance:** resistive, *high ohmic*, slightly influenced by $C_{P}$
>$f>f_{P}$ capacitive
>![[series-parallel-resonator.png|300]]
>series: $\omega_{S}=\frac{1}{\sqrt{ L_{S}C_{S} }}$
>parallel: $\omega_{P}=\frac{1}{\sqrt{ L_{S} \frac{C_{P}C_{S}}{C_{P}+C_{S}} }}$
>parallel: $Q=R \sqrt{ \frac{C}{L} }$
# Frequency response
#### Amplifier Circuits
##### Frequency Dependence
>It is an important value because it **signifies the circuit's growth rate or decay**. The lower the value of the time constant of a circuit, the higher the rate of growth or decay of the circuit. And the higher the value of the time constant of a circuit, the lower the rate of growth or decay.
>**decay:** discharge of capacitance
![[influence-capacitance.png|500]]
$\tau=RC$-> settle to a constant voltage after $\tau$ time, $\omega=$ poll frequency
$\omega_{3db}=\frac{1}{RV}=\frac{1}{\tau}$ everything after -> $\frac{1}{\omega \tau}$
long time constants = long setting
short time constants = quick settings
##### Capacitance in CS gain stage
![[capacitance-cs-gain-stage.png|500]]
![[small-signal-capacitance-amp.png|400]]
>CS Amplifier 
>phase rotation: $\pi$
>input resistance: $\infty$
>gain at high $f$: low
>gain at low $f$: high
>
>**$\frac{vo}{vi}=-g_{m}(ro//Rs)$ so effect of time constant $-\frac{g_{m}(ro//Rs)}{1+s \tau}$ so higher as this signal $\frac{vo}{vi}$ passes through that time constant (single pole, low pass filter) -> the higher frequencies the more attenuation we will have. So the gain will reduce as it passes through this low pass filter.** that's why gain at low $f$: high
>
>attenuation -> reduction in signal strength
>one pole adds attenuation and phase shift
##### Capacitances in CG gain stage
![[capacitance-cg-gain-stage.png|500]]
![[t model for capacitance model.png|300]]
![[cg-small-signal-analysis.png|400]]
![[cg-continue.png|400]]

![[1-gm-cg-analysis.png|400]]
if we considered $ro$ then it would $Zx=\frac{1}{gm+\frac{1}{ro}}$ but in saturation $gm\cap ro$ are big so $gm\gg \frac{1}{ro}$ that's why we don't consider it.
##### Capacitance in Current Mirrors
![[capacitance-in-current-mirros.png|500]]

![[differential stage dm dc.png|400]]
in DM both signals are affected as $V_{sis}=V_{+}-V_{-}$
in CM $V_{sis}=\frac{V_{+}+V_{-}}{2}$
##### Miller capacitances
![[miller capacitance.png|500]]
>In electronics, the **Miller effect** accounts for the increase in the equivalent input capacitance of an inverting voltage amplifier due to amplification of the effect of capacitance between the input and output terminals. The virtually increased input capacitance due to the Miller effect is given by: $C_{eff}=(1+A_{0})C_{M}$.
##### Effect in CS amplifier
cascode amplifier miller: https://www.youtube.com/watch?v=Op_I3Ke7px0
![[miller in cs amplifier.png|500]]
$Z_{in}=\frac{1}{\left( g_{m}+\frac{1}{R_{L}} \right) }+\frac{1}{(g_{m}R_{L}+1)sC}$
![[cascode decreases miller effect.png|400]]1
![[miller capacitabce cascode.png|400]]
# Integrated-circuit amplifiers
#### Finite Open-Loop Gain and Bandwidth on Circuit Performance
gain bandwidth: https://www.youtube.com/watch?v=wfkzz1rg-xk
gain bandwidth product: https://en.wikipedia.org/wiki/Gain%E2%80%93bandwidth_product
slew rate: https://www.youtube.com/watch?v=2DFIr6t1hbc
![[frequency dependence of the open loop gain.png|400]]
![[frequency dependence graph.png|400]]
$A(s)=\frac{A_{0}}{1+\frac{s}{\omega_{b}}}$, $\omega_{b}=\frac{\omega_{t}}{A_{0}}$
$-20db$ per decade
$\omega_{b}=-3db$
$\tau=\frac{1}{\omega_{t}}$
$\omega_{t}=A_{0}\omega_{b}\implies UGBW=Gain \times Bandwidth$
cascading put a gain to the power of cascades, 3 cascades -> to power 3.
**open loop gain->$20\log(Gain)=\dots dB$**
##### For an inverting/non-inverting amplifier
![[frequency respomse inverting amplifier.png|400]]
$\frac{V_{o}}{V_{i}}(s)=\frac{-R_{2}/R_{1}}{1+(1+R_{2}/R_{1})/A(s)}$
->$\frac{1}{A_{0}}(1+R_{2}/R_{1})\ll 1\to\frac{V_{o}}{V_{i}}(s)=\frac{-R_{2}/R_{1}}{1+\frac{s}{\omega_{t}}(1+R_{2}/R_{1})}$
![[non inverting frequency response.png|400]]
inverting: $(V_{in+}-V_{in-})A(s)=V_{o}$ so since $V_{in+}=0\implies V_{in-,1}=-\frac{V_{o}}{A(s)}$
#### Large – Signal Operation of Op Amps
![[large signal operation of opamps.png|400]]
$SR=\frac{dv_{out}}{dt}|_{max}$
$v_{out}=V_{out,max}\sin(\omega t)\to \frac{dv_{out}}{dt}|_{max}=\omega V_{out,max}\to \omega_{max}V_{out,max}=SR$
clipping: imagine a non inverting amplifier with a gain of 10, and if you provide $V_{in}=1.5V\to V_{out}=15V$ but clipping is at $13V$ -> harmonic distortion not expected signal as in small signal.
$SR\geq \omega_{max}V_{out,max}$ no distortion 
# Operational amplifier circuits
current mirror ota: https://www.youtube.com/watch?v=Gzpn_oywnf4
##### Frequency response of a Two-Stage CMOS Op Amp
Transistor Config: [[Electronics I - 5ECB0#Summery for EC2]]
- **no small signal component in the the first part of the schematic so small signal ground, explained in lecture, since as different signal changes, one side increases current and the other lowers.**
- stage is completed when: $V\to^{gm}i\to^{R_{eq}/\tau}V$ conversions happen at 2 stages of the schematic
https://videocollege.tue.nl/mediasite/Showcase/11d4c5f4423c453ba67db38aef7ba22744/Presentation/8ab31336825f4736b934bcd9949e4c121d
![[CM and DM analyzing.png|200]]
we reject common mode since if there is a disturbance the common signal is affected while differential doesn't so we amplify it with amplifier.
- $I_{5}$ splits in 2 -> $\frac{I_{5}}{2}=I_{3}=I_{4}$ due to current mirror
- increasing $\frac{\nabla V}{2}\to \frac{I_{5}}{2}+\nabla i$ and on the other side vice versa decrease and $-\nabla i$
- $I_{5}$ is the bias current and then we modulate it
- **for stable amplifier the between $0Hz$ and $UGBF$ total phase rotation must be lower than $180\degree$ phase margin, or else we get an oscillator...
- **$\omega_{p_{1}}=\frac{1}{R_{1}C_{1}}$ 1 pole

![[two stage op amp topology.png|400]]
![[cont.png|400]]
![[small signal model of two stage op amp.png|500]]
**Stage 1 $\frac{V_{i2}}{V_{id}}=-\frac{G_{m1}R_{1}}{1+sC_{1}R_{1}}$
Stage 2 $\frac{V_{O}}{V_{id}}=-\frac{G_{m_{2}}R_{2}}{1+sC_{2}R_{2}}$
$\frac{V_{O}}{V_{id}}=\frac{V_{O}}{V_{i2}} \frac{V_{i2}}{V_{id}}=\frac{G_{m_{1}}R_{1}G_{m2}R_{2}}{(1+sC_{1}R_{1})(1+sC_{2}R_{2})}$->two pole roll-off**
$\omega_{P_{1}}$ in the branch connecting 2 stages, $\omega_{P_{2}}$ at $v_{o}$
![[two pole roll off.png|400]]
we want: $\omega_{p2}>\omega_{t}$ but we also want **HIGH DC GAIN** $A_{0}=G_{m1}R_{1}G_{m2}R_{2}$
$\omega_{P_{1}}=\frac{1}{C_{1}R_{1}}$, $\omega_{P_{2}}=\frac{1}{C_{2}R_{2}}$, $\omega_{t}=A_{0}\omega_{P_{1}}$
so we want $\omega_{P_{2}}>\omega_{t}\to \omega_{P_{2}}>A_{0}\omega_{P_{1}}$
-> $C_{1}>A_{0}C_{2} \frac{R_{2}}{R_{1}}$ **Difficult to realize when $A_{0}$ is large** but it would allow us to have roll off earlier and reach $UGBF$ so 2nd pole would have a good **phase margin.**
![[miller effect to realize large capacitance.png|400]]
![[two stage op amp full circuit.png|400]]
- **pole splitting** when they were close they were rotating phase $180\degree$, now they are further apart as one becomes $\omega_{P_{1}}$ lower and $\omega_{P_{2}}$ higher frequencies.
- **transmission zero** we have a zero when 2 parts arrive at certain point, these 2 parts have different transfers, there can be point in frequency where they cancel each other. since we add miller capacitance we give 2 ways for signal to reach output. We must control the zero, we can add a variable resistor after $C_{C}$. At **high frequencies (1 stage amplifier, C low impedance path, MORE STABLE, diode connected transistor)** we can assume that the $C_{C}$ path shorts the other, at **low frequencies (C path is high impedance, gain of both stages, MORE GAIN)** it takes the $Q_{6}$ path where the signal has high gain.
 
miller effect: $C_{eq}=C_{C}G_{m_{2}}R_{2}$->
$\omega_{P_{1}}=\frac{1}{R_{1}(C_{1}+C_{C}(1+G_{m_{2}}R_{2}))}\approx \frac{1}{R_{1}C_{C}G_{m_{2}}R_{2}}$ instead of $\frac{1}{R_{1}C_{1}}$ (without Miller-C)
-> **$\omega_{P_{1}}$ has become lot more low-frequency due to Miller-C**

since we have a diode connected transistor to $Q_{6}\to R_{2}=\frac{1}{G_{m_{2}}}=\frac{1}{g_{m_{6}}}$
$\omega_{P_{2}} \approx \frac{G_{m_{2}}C_{C}}{C_{1}C_{2}+C_{C}(C_{1}+C_{2})}\approx \frac{G_{m_{2}}}{C_{2}}=\frac{g_{m_{6}}}{C_{C}}$ instead of $\frac{1}{R_{2}C_{2}}$
->**$\omega_{P_{2}}$ has become lot more high-frequency**
- (note: $C_{2}\gg C_{1}$ as $C_{2}$ includes load capacitance)
- transmission zero $\omega_{Z}=\frac{G_{m_{2}}}{C_{C}}$
- $A_{0}=G_{m_{1}}G_{m_{2}}R_{1}R_{2}$

$\frac{V_{o}}{V_{id}}=K \frac{s_{z}-s}{(s_{p_{1}-s})(s_{p_{2}}-s)}$
has two negative real poles: $s_{p_{1}}$ and $s_{p_{2}}$,can each contribute negative phase shifts up to $-90 \degree$ and one positive real zero: $s_{z}$, can contribute negative phase shift up to $-90 \degree$.
- **In total the negative phase shift can become large->dangerous for stability!**
![[frequency grpah of two stage op amp.png|400]]

![[two stage op amp circuit offset.png|400]]
$V_{D_{4}}=V_{D_{3}}=V_{G_{3}}=V_{G_{4}}=V_{G_{6}}$
**no output DC offset:** $I_{D_{6}}=|I_{D_{7}}|\to \frac{1}{2} |I_{D_{5}}| \frac{\left( \frac{W}{L} \right)_{6}}{\left( \frac{W}{L} \right)_{4}}=|I_{D_{5}}| \frac{\left( \frac{W}{L} \right)_{7}}{\left( \frac{W}{L} \right)_{5}}\to \frac{\left( \frac{W}{L} \right)_{6}}{\left( \frac{W}{L} \right)_{4}}=2 \frac{\left( \frac{W}{L} \right)_{7}}{\left( \frac{W}{L} \right)_{5}}$
##### Common mode range
saturation mode: NMOS: $input:V_{GD}<V_{tn}\to output:V_{DS}>V_{OV}$, PMOS: $V_{DG}<|V_{tp}|\to V_{SD}>|V_{OV}|$
>$V_{DS}>V_{GS}-V_{th}$
>$V_{DG}<V_{th}$
![[Pasted image 20230313195803.png|300]]
![[common mode range of  two stage op amp.png|600]]
$-V_{SS}+V_{OV_{3}}+V_{tn}-|V_{tp}|\leq V_{ICM}\leq V_{DD}-|V_{tp}|-|V_{OV_{5}}|-|V_{OV_{1}}|$
$max:V_{o}<V_{DD}-|V_{OV_{7}}|$, $min:V_{o}>-V_{ss}+|V_{OV_{6}}|$
##### Small signal voltage gain
![[small signal voltage gain of 2 stage op amp.png|500]]
$g_{m}=2 \frac{I_{D}}{V_{OV}}$ and $r_{O}=r_{ds}=\frac{1}{\lambda I_{D}}$
**DC gain first stage:** $\frac{-2}{|V_{OV}|(\lambda_{2}+\lambda_{4})}$
**DC gain second stage:** $\frac{-2}{V_{OV_{6}}(\lambda_{6}+\lambda_{7})}$
$R_{1}=\frac{2}{I(\lambda_{2}+\lambda_{4})}$ & $R_{2}=\frac{1}{I_{D_{6}}(\lambda_{6}+\lambda_{7})}$
![[small signal voltage gain example.png|500]]
##### Common mode rejection ration
![[common mode rejection ratio.png|500]]
**diff mode of 1st stage:** $-g_{m_{1}}(r_{o_{2}}//r_{o_{4}})$
**comm mode of 1st stage:** $-\frac{1/g_{m_{3}}}{2r_{ds_{5}}}$
$CMRR=2g_{m_{1}}(r_{o_{1}}//r_{o_{4}})g_{m_{3}}r_{ds_{5}}$
>If Q1 and Q2 change than Q5 modulates in common mode, which modulates the current, due to channel length modulation. This makes the drain current of  Q1 and Q2 modulate, Q3 copied to Q6 with an error, because of finite gm of Q3 transistor.
>The error at D6 is the error different between current of Q2 and Q4, at D6 its translated to voltage through resistance level at this node. -> common mode gain.
##### Frequency response
![[frequency response of two stage op amp full.png|500]]
##### Phase margin
![[phase margin two stage op amp.png|400]]
$\phi_{margin}=180 \degree+\phi_{total}(\omega_{t})\to 90 \degree-\arctan\left( \frac{\omega_{t}}{\omega_{P_{Z}}} \right)-\arctan\left( \frac{\omega_{t}}{\omega_{P_{2}}} \right)$
poles and zeros manipulation allows for designing the circuit to achieve specific frequencies.
![[phase margin of two stage op amp cont.png|400]]
adding R -> $\omega_{z}=\frac{1}{1-G_{m_{2}}R}$ where zero can be moved to infinitly high frequencies if $R=\frac{1}{G_{m_{2}}}$ or $\omega_{z}=s_{p_{2}}$ which results in single pole role off.
##### Slew rate
maximum range at which the output voltage changes
![[finite slew rate.png|500]]
![[two stage op amp slew rate.png|400]]
$SR=\frac{I}{C_{C}}$ since we have $G_{m_{1}}=\frac{2I_{D_{1}}}{V_{OV_{1}}}=\frac{I}{V_{OV_{1}}}$ and $\omega_{t}=\frac{G_{m_{1}}}{C_{c}}$ ==> $SR=V_{OV_{1}}\cdot \omega_{t}$
##### Power supply rejection ratio
reject disturbances from power supply to the voltage
![[power supply rejection ration.png|400]]
$PSRR^+=\frac{A_{d}}{A^+}$ where $A^+=\frac{v_{o}}{v_{dd}}$
$PSRR^-=\frac{A_{d}}{A^-}$ where $A^-=\frac{v_{o}}{v_{ss}}$
![[psrr approximation.png|400]]
![[psrr accurate approximation.png|400]]
$A^-=\frac{v_{o}}{v_{ss}}=\frac{r_{o_{7}}(g_{m_{6}}r_{o_{6}}+1)}{(r_{o_{7}}+r_{o_{6}})}$
$PSRR^-=\frac{A_{d}}{A^-}=\frac{g_{m_{1}}(r_{o_{2}}//r_{o_{4}})\cdot g_{m_{6}}(r_{o_{6}}//r_{o_{7}})}{A^-}$
first psrr calc: $g_{m} = \frac{2I_{D}}{|V_{OV}|}$ and $r_{o}=\frac{|V_{A}|}{I_{D}}$ plug in
##### CMOS Class AB output stages
- ideal current source: $R=\infty$ while ideal voltage source $R=0$
- output stages should have:
	- large output voltage swing
	- large output current range
	- low output impedance
	- little distortion
	- good power efficiency
- switch and linear mode,  class D switch mode: transistors used as switches if ideal switches they are efficient.
- How to distinguish between classes of linear-mode output stages? Observe drain (or collector) currents of output stage for sine wave input.
![[class a linear mode output stage.png|200]]![[class b linear mode output stage.png|200]]![[class ab linear mode output stage.png|200]]![[class c stage linear mode output stage.png|200]]

**To avoid deadband in classical AB connection we have:**
![[classical ab output stage.png|400]]
![[output stage utilizing cm transistors.png|400]]
![[ab output stage with common source transistors.png|200]]
output impedance can be decreased by negative feedback:
$r_{out}=r_{outN}||r_{outP}$
$r_{outP}=\frac{r_{oP}||1}{\mu g_{mP}}\approx \frac{1}{\mu g_{mP}}$
similarly for $r_{outN}\approx \frac{1}{\mu g_{mN}}$
**gain error:** $-\frac{V_{OV}}{4\mu I_{Q}R_{L}}$
so: $r_{out}\approx \frac{1}{\mu(g_{mN}+g_{mP})}\to low$ large possible output sing and low output resistance
when matches transistors we have the same current so $I_{Q}=\frac{1}{2}kV_{OV}^2$
$gm=\frac{2I_{Q}}{V_{OV}}$
![[ab output stage with none-zero voltage input.png|300]]

# Data Converters
#### Data representation
adc, dac: https://www.youtube.com/watch?v=HicZcgdGxZY

![[signal processing chain.png|300]]![[analog sampling.png|300]]
![[types of adcs dacs.png|300]]![[number representations.png|300]]
![[representations of fractions.png|300]]![[dac static properties.png|300]]
- **Nyquist:** sampling frequency must be at least double. anti aliasing filter used to make sure.
- clock period: $T=\frac{1}{f_{s}}$
- **binary** doesn't have negative, **sign magnitude** LMB 1->-, 0->+, **offset** additional offset , **2s compliment** invert binary string and then +1 and then result is same as sign magnitude.
- $D_{fraction}=D_{integer}\cdot weight_{LSB ofFraction}$ similar to above for integers but for instance 001 -> $2^{-1},2^{-2},2^{-3}$ example: $011001:binary:25\to frsction:25\cdot \frac{1}{2^6}$
- $A[V]=G[V]\cdot D[-]\to A=G\cdot \sum^n_{k=1}b_{k}2^{-k}$ -> A is analog output 
- ![[binary vals calc.png|300]]
- offset if 011001: 16+8+1-32=-7
![[DAC example of static properties.png|400]]
$FSR\to$FULL SCALE RANGE
$NFS$->NOMINAL FULL SCALE range which is half of $FSR$
$FS=NFS-LSB[resolution]$
$FSR=2^n\cdot LSB$
$MSB=2^{n-1}\cdot LSB$
$FSR=2\cdot MSB$
**STATIC ERRORS:**
![[static errors.png|400]]
- INL you can make a curve graph showing the absolute deviation which plots the distortion curve. From curve you can take absolute min max val to find INL. Causes non-linearity.
- INL is integral of DNL
- ideal steo should be 1 DNL but if the actual isn't and is smaller than -1LSB since the step moves down...:
  ![[non monotonicity.png|300]]
**DYNAMIC ERRORS:**
*Settling time:* time it takes between:
	  - input changing from 000..00 to 111..11
	  - output signal stabilizing within 0.5LSB from final value
*Slew Rate:* maximum speed with which output signal can change
*SFDR-(spurious free dynamic range):* difference in height between:
	- wanted spectral peak (due to sine wave at input)
	- highest unwanted peak (= spurious tone)
#### DAC
##### Weighted resistances Network
summery: https://www.youtube.com/watch?v=PoOm_G4s1dE
$V_{out}=V_{ref}\cdot\left( \frac{1}{2}b_{1}+\frac{1}{4}b_{2}+\frac{1}{8}b_{3}+\dots \right)$
$V_{out}[0,V_{ref})=V_{ref}\sum^n_{k=1}b_{k}2^{-k}$ after Vref -> D
![[dac with weighted resistances network.png|400]]
if switch ON or OFF the voltage at that node is always zero, since inverting amplifier always equates to virtual zero at the two branches so we have $V_{b}--V_{ref}=0+V_{ref}=V_{ref}$.
$i_{k}=b_{k} \frac{V_{ref}}{2^kR}$
$i_{sum}=\frac{V_{r}}{R}\sum^n_{k=1}b_{k}2^{-k}$
$V_{out}=FSR=R_{o}i_{sum}$

when: $R_{1}=R$ and not $R_{1}=2^1R$
$R_{k}=2^{k-1}R_{1}$
$i_{k}=b_{k} \frac{V_{ref}}{2^{k-1}R}$
$V_{out}=i_{sum}R_{o}=\frac{2V_{r}R_{o}}{R}\sum^n_{k=1}b_{k}2^{-k}$
$V_{MSB}=V_{ref} \frac{R_{o}}{R_{1}}$

![[weighted error.png|400]]

*MSB*: smallest resistor, largest current (left side)
*LSB*: largest resistor, smallest current (right side)
binary weighted resistors->binary weighted currents
![[disadvantages of WRN design.png|400]]
$\Delta i_{1}\to$ (largest) current error
$|\Delta i_{1}|<i_{n}\implies i_{n}=\frac{i_{1}}{2^{n-1}}\implies \frac{|\Delta i_{1}|}{i_{1}}< \frac{1}{2^{n-1}}$ current error of largest current branch must remain lower than lowest current branch
- as NUM of bits increases NUM of resistors increases, and if they are not accurate can cause error in output...
*example:* $\frac{1}{2^{10-1}}=\frac{1}{512}\approx0.2\%$ error must be less than that percentage for 10 bit converter.  so we have to increase the amount of resistors in the circuit which is hard to achieve that's why we have, for high accuracy high resolution:
##### R2R ladder
summery: https://www.youtube.com/watch?v=Pc1aFloxSMw
![[r-2r ladder init.png|400]]
![[r-2r ladder formula.png|400]]
$i_{k-1}=2i_{k}$
we calculate the first block: $i_{1}=\frac{V_{ref}}{2R}$ and then based on relation above we can calculate the rest of currents.
$i_{o}=\frac{V_{ref}}{R}\sum^n_{k=1}b_{k}2^{-k}$
$V_{out}=-i_{o}\cdot R_{o}$
if deviation: $V_{o}=i_{sum}R_{o}\left( 1+\frac{p}{100} \right)$
![[r2r ladder dac error.png|300]]

summation can also be done with KCL using current sources:
$V_{out}=i_{out}\cdot R_{out}=2^nI\cdot R_{out}\cdot\sum^n_{k=1}b_{k}2^{-k}$
![[differential configuation of current steering.png|300]]![[unit current sources.png|300]]
we can also use triode transistors where the source is $W=2^{n-1}a$
![[triode implementation of current steering.png|300]]
##### Charge – redistribution DAC
![[chareg distribution dac.png|400]]
$V_{out}=\frac{C_{sum}}{C_{total}}V_{ref}\sum^n_{k=1}b_{k}2^{-k}$

if all off and then we turn on lets say S4: $V_{ref} \cdot \frac{1/8}{C_{total}}$
![[charge dac error.png|400]]
![[error calculation charge dac.png|400]]
![[charge redistribution adv disadv.png|300]]
#### ADC
##### Specifications
non-linearity: https://www.youtube.com/watch?v=TTO35V3XgiU
It will face the same non-infidelities as DAC +:
![[errors on ADC.png|200]]
![[quantization ADC.png|300]]![[quantization 2 adc.png|300]]
$max(V_{r})=\frac{1}{2} V_{LSB}=\frac{1}{2} \frac{V_{range}}{2^n}=\frac{V_{range}}{2^{n+1}}=\frac{1}{2} \frac{V_{range}}{2^n-1}$
**Quantization Noise (power):** $V_{r}^2=\frac{V_{range}^2}{2^{2n}\cdot12}$

$V_{error,RMS}=\sqrt{ mean(V_{error}^2) }$
$mean(V_{error}^2)=\frac{1}{V_{LSB}}\int_{-\frac{1}{2}V_{LSB}}^{+\frac{1}{2}V_{LSB}} x^2 \, dx=\frac{2}{V_{LSB}} \frac{1}{3}\left( \frac{1}{2}V_{LSB} \right)^3=\frac{V_{LSB}^2}{12}\to V_{error,RMS}=\frac{V_{LSB}}{\sqrt{ 12 }}$

max amplitude: $\frac{V_{range}}{2}$->RMS (voltage)->$\frac{V_{range}}{2\sqrt{ 2 }}$->**signal power:**$P_{signal}=\left( \frac{V_{range}}{2\sqrt{ 2 }} \right)^2=\frac{V_{range}^2}{8}$
**MAX signal quantization error:** $\frac{P_{signal}}{P_{q.error}}=\frac{\frac{V_{range}^2}{8}}{\frac{V_{range}^2}{2^{2n}\cdot12}}=\frac{2^{2n}\cdot12}{8}=3\cdot2^{2n-1}=10\log(3)+10\log(2^{2n-1})=10\log(3)+(2n-1)\cdot10\log(2)=\alpha+\beta\cdot n=(6n+1.76)dB$
*SQNR (signal to quantization noise ratio)->where n is number of bits in ADC*
there is also a non-linearity when quantization is larger than the $V_{range}-max$

![[aperture jitter.png|400]]
max error in sampling: $\Delta V_{in}|_{max}\approx \vec{v}\omega_{max}\cdot \Delta t$
we must keep it $\mathrm{Re}sulting.error< \frac{1}{2}V_{LSB}$
$\vec{v}\omega_{max}\cdot \Delta t< \frac{1}{2}\cdot \frac{V_{range}}{2^n}$ so:
**to have no aperture jitter:** $\Delta t< \frac{1}{2^n\omega_{max}}$ in order to keep $error< \frac{1}{2}V_{LSB}$
##### Flash ADC
https://www.youtube.com/watch?v=NASkjo7s8f4&t=1s
![[flash adc.png|400]]
- very fast
- $2^n-1$ comparators needed as you increase bits
##### Slope ADC
https://www.youtube.com/watch?v=2gF_nfaBV_0
![[single slope adc.png|300]]
![[dual slope adc.png|400]]
![[cont dual slope ADC.png|400]]
$D=\frac{T_{2}}{T_{1}}=\frac{V_{in}}{V_{ref}}$
- slower than single slope
- very accurate
- error in capacitance or clock freq does not result in an error in the conversion of the D
$\frac{T_{1}}{RC}V_{in}=\frac{T_{2}}{RC}V_{ref}\implies T_{2}=T_{1} \frac{V_{in}}{V_{ref}}$
$T=\frac{cycles}{f}$
conversion time: $T_{c}=T_{1}+T_{2}\implies T_{2}=T_{1}\cdot \frac{V_{in}}{V_{\mathrm{Re}f}}$
integrator voltage: $V_{1}=V_{ref} \frac{T_{1}}{RC}$

![[dual slope problem.png|300]]
##### Counter & Tracking ADC
counter: https://www.youtube.com/watch?v=4zwtA2pG6Vc
tracking: https://www.youtube.com/watch?v=MMQwa416Cmo
![[counter adc.png|300]]![[tracking adc 2.png|300]]
tracking: Looks similar to counter ADC, but instead of resetting the counter to zero at the start of each conversion, the counter value is maintained, and simply incremented or decremented at each clock cycle to follow (track) the input signal.
$SW=\frac{V_{LSB}}{T_{clock}}$
![[tracking dac.png|300]]
##### Successive Approximation ADC
![[sar adc.png|400]]
- For an n-bit ADC, n cycles are sufficient (as compared to $2^n$ cycles for the slope and counting ADC).
- $V_{a}$ is applied to all capacitors.
- Requires only as many search cycles as we have bits: an n-bit SAR ADC needs n search steps.
![[final adc comparison.png|300]]

![[example of ADCs.png|400]]CMOS digital logic circuits
# CMOS digital logic circuits
#### CMOS logic Circuits Dynamic Operation of the CMOS Inverter
##### Basics
![[voltage transfer characteristic.png|300]]![[power dissipation in cmos.png|300]]
![[power dissipation of cmos explained.png|300]]![[cmos inverter.png|100]]
Energy dissipated in one charging-discharging period: $V_{DD}:E_{DD}=CV_{DD}^2$
Inverter with complementary switches, switching @ frequency f: $P_{D}=fCV_{DD}^2$
![[cmos inverter analysis.png|]]
##### Propagation Delay
![[propagation delay of cmos circuit.png|400]]
Power-Delay Product ( PDP): $PDP=P_{D}\cdot t_{P}$
Inverter with complementary switches: $P_{D}\to fCV_{DD}^2\to PDP=fCV_{DD}^2t_{P}$
*worst case PDP when f is max*
$f_{max}=\frac{1}{2t_{P}}\to PDP=\frac{1}{2}CV^2_{DD}$
*PDP doesnt reflect propagtion delay*
Better FoM: Energy-Delay Product ( EDP): $EDP=\frac{1}{2}CV^2_{DD}t_{P}$

$t_{PLH}:$
1st order circuits step response: $v_{o}(t)=v_{o}(\infty)+(v_{o}(0)-v_{o}(\infty))e^{-t/\tau}$
$\tau_{LH}=R_{U}\cdot C$
$v_{o}(0)=0$ and $v_{o}(\infty)=V_{DD}$
$\frac{1}{2}(v_{o,low}+v_{o,high})=\frac{V_{DD}}{2}$ at $t=t_{PLH}$
=> $v_{o}(t_{PLH})=V_{DD}(1-e^{-t_{PLH}/\tau})=\frac{V_{DD}}{2}$
$e^{-t_{PLH}/\tau_{LH}}=\frac{1}{2}\implies t_{PLH}=0.69\tau_{LH}$

$t_{PHL}:$
same...

$t_{p}=\frac{t_{PLH}+t_{PHL}}{2}$

it could also be that one opens and the other closes which means:
$v_{o}(0)=V_{DD}$ and $v_{o}(\infty)=0$

can also calculate the propagation delay graphically:
example: $t_{THL}=$ time it takes the output to decrease from $0.9V_{DD}$ down to $0.1V_{DD}$
=> $0.9V_{DD}=\dots$ and $0.1V_{DD}=\dots$ instead of doing $\frac{V_{DD}}{2}$
$t_{THL}=t_{2}-t_{1}=\dots$
#### CMOS Inverter
##### Basics
![[voltage transfer characteristic-1.png|400]]
you can draw the line through this matrix as derived in week 7 slides conclusion:S
![[voltage transfer characteristic summery.png|400]]
trip voltage $V_{M}=\frac{a(V_{dd}+V_{tP})+V_{tN}}{1+a}=\frac{V_{dd}}{2}(if.equal)$ where $a=\sqrt{ \frac{K_{P}}{K_{N}} }=\sqrt{ \frac{\mu_{p} W_{p}}{\mu_{n}W_{n}} }$ if $a=1\implies matched\implies \sqrt{ \frac{W_{p}}{4W_{n}} }$
![[voltage transfer characteristic final.png|400]]
*Noise margin=$V_{dd}-V_{inH}\mid\mid0+V_{inL}$*
![[small signal diagram of cmos inverter.png|300]]
*for symmetric configurations:*
![[symmetric config.png|400]]
$V_{inL}=\frac{3}{8}V_{dd}+\frac{1}{4}V_{t}$
$V_{inH}=\frac{5}{8}V_{dd}-\frac{1}{4}V_{t}$
Pull down resistance(at NMOS): $R_{on}=\frac{1}{\frac{\delta I_{DN}}{\delta V_{DS}}}$
where: $I_{D}=\frac{K_{N}}{2}[(V_{GS}-V_{tN})^2-(V_{GS}-V_{DS}-V_{tN})^2]\implies V_{GS}-V_{DS}=V_{GD}$
so then: $R_{on}=\frac{1}{\frac{K_{N}}{2}[2(V_{GS}-V_{DS}-V_{tN})]}\implies \frac{1}{K_{N}(V_{GS}-V_{DS}-V_{tN})}$
![[derivation.png|300]]

>SUMMARY
>$V_{outH}=V_{DD}$ and $V_{outL}=0$
>$V_{inL}=\frac{3}{8}V_{dd}+\frac{1}{4}V_{t}$ and $V_{inH}=\frac{5}{8}V_{dd}-\frac{1}{4}V_{t}$
>$V_{NH}=V_{outH}-V_{inH}$ and $V_{NL}=V_{inL}-V_{outL}$

*static power max:* $V_{M}=\frac{V_{DD}}{2}\implies K_{n}=\mu_{n}C_{ox}\left( \frac{W}{L} \right)_{n}\implies I_{D}=\frac{1}{2}K_{n}(V_{m}-V_{tn})^2\implies P_{max}=V_{DD}I_{D}$![[WhatsApp Image 2024-01-16 at 23.56.36.jpeg|300]]

frequency of ring oscillator: $f=\frac{1}{2Nt_{p}}$ since it has odd number of inverters

equivelant load capacitance: $C_{L}=\frac{1}{V_{B}-V_{A}}\int ^{V_{B}}_{V_{A}} C_{Lv}(v) \, dv$ for example $V_{A}=0$ $V_{B}=V_{DD}$

![[inverter sizing.png|300]]
##### Static CMOS Inverter
$t<0$ NMOST off, PMOST triode, $C_{L}$ fully charged till $V_{DD}$
$0\leq t\leq t_{1}$ NMOST saturated, PMOST off, $C_{L}$ is being discharged by constant 
$t_{1}<t\leq t_{X}$ NMOST triode, PMOST off, $C_{L}$ is further discharged by non-constant current:![[step response 3rd part.png|250]]
take into account $K$ and $V_{t}$ if its for PMOS or NMOS if symmetric assume NMOS
![[symmetric propagation delay.png|300]]
there is 2 other methods you can find in formula sheet...
![[propagation delay methods summary.png|300]]
#### CMOS Digital Logic Circuits
##### Basics
$Y=\overline{A+B}=\overline{A}\cdot \overline{B}$ and $Y=\overline{A\cdot B}=\overline{A}+\overline{B}$
$\overline{Y}=\overline{\overline{A+B}}=A+B$ and $\overline{Y}=\overline{\overline{A\cdot B}}=A \cdot B$
![[cmosl logic gate circuits.png|300]]![[cmos digital logic circuit examples.png|300]]
![[cmos logic gate exmaple of making it.png|300]]
##### NOR || NAND
![[NOR logic gate circuit.png|300]]![[nor logic gate logic.png|100]]
![[NAND logic gate circuit.png|300]]![[NAND formulation.png|100]]
![[transistor sizing.png|300]]
![[NAND NOR area.png]]
#### CMOS Transmission Gates as Switches
- **Transmission gate can be used as a (floating) switch, of which the state (on or off) can be controlled by a voltage**
- NMOS transistor charges $C$ only up to $V_{DD}-V_{tN}$
- PMOS transistor charges C all the way up to $V_{DD}$
![[cmos tramission with gates.png|300]]![[transmission gate discharges.png|300]]
![[transmission gate resistance.png|300]]empirical approximation: $R_{TG}\approx\frac{12.5k\Omega}{(W/L)_{n}}$ as $R_{TG}$ is quite constant over $0\leq v_{o}\leq V_{DD}$
$t_{PLH}=0.69R_{TG}C$
# Memory Circuits
#### Static memories
it remembers its input, and therefor to reset it you would have to reconnect power.
![[static memories.png|400]]
![[static memory metastability.png|400]]
#### The Latch
dynamic memory
latch: https://www.youtube.com/watch?v=KM0DdEaY5sY
flip flop: https://www.youtube.com/watch?v=F1OC5e7Tn_o
![[latch graph.png|300]]![[SR latch design.png|300]]
R: reset, S: Set
![[sr flip flops.png|300]]
With the SR flip flop we are able to have more control and remove the 1 1 error, by having a clock speed to trigger the changes same as the latch. Due to a capacitor there is only at trigger when there is that quick discharge moment from the signal at the start, check video. There different flips flops check slides for further info.
#### Static Memory SRAM Cell
SRAM: https://www.youtube.com/watch?v=veJs793zvz4&t=49s
![[static memory SRAM cell.png|400]]
**READ OPERATION:**
$Q_{1}<Q_{5}$
![[SRAM read.png]]
**WRITE OPERATION:**
$Q_{1}>Q_{5}$
![[SRAM write.png]]
The only way to flip the SRAM cell is that the state on the right side flips, by pulling $V_{Q}$ sufficiently down, to initiate the regenerative action of the latch.
#### Dynamic memory cell
![[dynamic memory cell.png]]
![[sense amplifier.png]]

ROMs are floating gate transistors, see slides it stores permanently above the channel.