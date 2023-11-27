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
