---
modified: Monday, January 1st 2024, 21:17:43
created: Thursday, November 23rd 2023, 22:09:22
tags:
  - "#concept"
---

# Oscillator Condition
![[oscillator_concept.png|Concept of a oscillator]]
$\displaystyle x_{out}=A(x_{in}+\beta x_{out}) \to \frac{x_{out}}{x_{in}} = \frac{A}{1- A\beta(\omega)}$

Open loop gain: $L(s)=A\beta(s)$
Barkhausen criteria for oscillation (**necessary, != sufficient**):
- $|L(s)|=1$
- $arg(L(s))=n*2\pi$

![[oscillator_wien_bridge.png|Wien bridge oscillator]]

![[oscillator_wien_bridge_wheatstone.png]]
$\displaystyle A=1+\frac{R_{2}}{R_{1}},\ \beta(s)=\frac{Z_{p}}{Z_{s}+Z_{p}}=\frac{1}{Z_{s}Y_{p}+1}=\frac{1}{\left( R_{s}+\frac{1}{sC_{s}} \right)\left( sC_{p}+\frac{1}{R_{p}} \right)+1}$
$\displaystyle L(s)=A\beta(s)=\frac{1+\frac{R_{2}}{R_{1}}}{3+sC_{s}R_{s}+\frac{1}{sC_{p}R_{p}}}=\frac{1+\frac{R_{2}}{R_{1}}}{3+j\left( \omega C_{s}R_{s}-\frac{1}{\omega C_{p}R_{p}} \right)},\ (R_{s}=R_{p}, C_{s}=C_{p})$
Barkhausen criteria:
- Zero phase at: $\omega_{0}C_{s}R_{s}-\frac{1}{\omega_{0}C_{p}R_{p}}=0\to\omega_{0}=\frac{1}{\sqrt{ C_{s}R_{s}C_{p}R_{p} }}$
- $|L(s)|=1\to A=1+\frac{R_{2}}{R_{1}}=3$

$|L(s)|:$
- = 1: stable
- > 1: increasing
- < 1: decreasing
-> To stabilize:
- $V_{out} < V_{0}\to|L(s)| > 1$
- $V_{out} = V_{0}\to|L(s)| = 1$
- $V_{out} > V_{0}\to|L(s)| < 1$

# Clipping ([[Limiter circuit]])

![[oscillator_wien_bridge_diode.png|%|500]]
$$
\begin{flalign}
 & v_{i}\mp V_{D}=v_{o} \frac{R_{6}}{R_{5}+R_{6}} \pm V_{dd} \frac{R_{5}}{R_{6}+R_{5}} \\
 & v_{o} \left( \frac{R_{1}}{R_{1}+R_{2}} - \frac{R_{6}}{R_{5}+R_{6}}\right) = \pm \left( V_{dd} \frac{R_{5}}{R_{6}+R_{5}}+V_{D} \right)
 &  & 
\end{flalign}
$$

## Phase Shift Oscillator
![[oscillator_phase_shift.png|%|500]]

Implement $\pi$ phase shift at finite frequency with 3 order of RC (each order gives $\frac{\pi}{2}$ phase shift $f\to\infty$ Hz)

## Quadrature Oscillator
![[oscillator_quadrature.png|%|500]]
Similar to [[#Phase shift oscillator]], but implement phase shift $\pi$ with [[Op-amp#^3db075]]


# LC Oscillator
Difference:
- Complex poles and zeroes ??
- Better frequency selectivity
- Better roll off
- Osc freq more resilient to amplifier phase shift
- Better spectral purity
- **Only applicable to HF and RF** (as large inductance coils have large losses)

## Analysis Method
Method 1: Cut the loop at point with infinite impedance (transistor gate) or controlled voltage source
![[osc_3_point.png|%]]
$$
\begin{flalign}
&I_{O}+I_{1}+I_{2}=0 \\
&I_{O}=GV_{2}^* \\
&I_{2}=\frac{V_{2}}{Z_{3}}=\frac{V_{1}}{Z_{2}+Z_{3}} \\
&I_{1}=\frac{V_{1}}{Z_{1}}=V_{2} \frac{Z_{2}+Z_{3}}{Z_{3}Z_{1}}  \\
&\to GV_{2}^* + V_{2} \frac{Z_{2}+Z_{3}}{Z_{3}Z_{1}}+\frac{V_{2}}{Z_{3}}=0 \\
&L = \frac{V_{2}}{V_{2}^*}=-G\frac{Z_{3}Z_{1}}{Z_{1}+Z_{2}+Z_{3}} \\
&&
\end{flalign}
$$

![[oscillator_3_point_implementation.png]]
Method 2: KCL
![[oscillator_colpitt_analysis.png]]
$$
\begin{flalign}
 & g_{m}V_{gs}+\left( \frac{1}{R} + sC_{1} \right)V_{c}+sC_{2}V_{gs}=0 \\
 & s^3LC_{1}C_{2}+s^2 \frac{LC_{2}}{R}+s(C_{1}+C_{2})+\left( g_{m}+\frac{1}{R} \right)=0 \\
 & \left( g_{m}+\frac{1}{R}-\omega_{0}^{2} \frac{LC_{2}}{R} \right) + j(\omega_{0}(C_{1}+C_{2})-\omega_{0}^{3}LC_{1}C_{2})=0 \\
 & \omega_{0} = \frac{1}{\sqrt{ L \frac{C_{1}C_{2}}{C_{1}+C_{2}} }} = \frac{1}{\sqrt{ LC_{eq} }},\ g_{m} = \frac{C_{2}}{C_{1}R} \\
&&
\end{flalign}
$$
## Crystal Oscillator



# Capacitance

[[MOSFET#Common source]]
![[mosfet_capacitance_cs.png]]
[[MOSFET#Common gate]]
![[mosfet_capacitance_cg.png|%|500]]

[[MOSFET#Current steering]]
![[mosfet_capacitance_current_mirror.png]]
Only $\tau_{2}=r_{out}C_{2}$ is significant



Miller effect
![[oscillator_miller_effect.png]]
$\delta Q=C\delta V=C(\delta V_{in}-\delta V_{out})=C(1+A_{0})\delta V_{in}$

# Large Signal Operation

Limitations:
- Output voltage/current saturation
- Finite slew rate: $\displaystyle SR=\left.\frac{ d v_{out} }{ d t }\right|_{max}$
- Finite full power bandwidth: $\displaystyle SR=\left.\frac{ d v_{out} }{ d t }\right|_{max} = \omega_{max}v_{out,max}\to f_{max}=\frac{SR}{2\pi v_{out,max}}$

![[large_signal_slew_rate.png]]

![[Op-amp#Two-stage CMOS Op-amp]]

# Output Stage
## Switch Mode
Class D: very high efficiency (90-95%)

## Linear Mode
Class A: current flow in whole period -> low efficiency (max 25%, ~10-20%)

Class B: current flow in half period -> high efficiency (max $\displaystyle \frac{\pi}{4}=\frac{0.25V_{cc}I}{\frac{V_{cc}I}{\pi}}$, ~65-70% ) but have crossover distortion due to threshold voltage
![[Untitled 11.png]]


![[output_stage_amp_class_B.png]]

Class A/B: both are on for some time -> a bit lower efficiency than class B but no crossover distortion by introducing voltage difference

![[output_stage_amp_class_AB.png]]
![[output_stage_amp_class_AB_graph.png]]

Matching PMOS and NMOS current:
$\mu_{n} \frac{W_{n}}{L_{n}} = \mu_{p} \frac{W_{p}}{L_{p}},\ (\mu_{n} \approx 3\mu_{p})$ [[Semiconductor#Current]]

Output voltage swing:
Upper bound: $min\{ V_{BIAS} \}=V_{OVbias}\to V_{omax} = V_{DD}-V_{OVbias}-V_{gsn} = V_{DD}-V_{OVbias}-V_{tn}-V_{OVN}$
Lower bound: $V_{I,min}=V_{OV}|_{I}\to V_{omin}=-Vss+V_{OV}|_{I}+|V_{tp}|+|V_{OVP}|$
-> Output voltage swing is reduced 

-> Common source with negative feedback to reduce output resistance
![[output_stage_amp_class_AB_cs.png]]
Output voltage swing: 
$V_{Omin}=-V_{SS}+V_{OVN}$
$V_{Omax}=V_{DD}-|V_{OVP}|$
Output resistance: $r_{out}=r_{outN}|r_{outP}\to\frac{1}{\mu(g_{mn}+g_{mp})}$

![[output_stage_amp_class_AB_cs_analysis.png]]
Error: $v_{o}=\frac{v_{i}}{1+\frac{V_{OV}}{4\mu I_{Q}R_{L}}}\approx v_{i}\left( 1-\frac{V_{OV}}{4\mu I_{Q}R_{L}} \right)$
Negative feedback -> high frequency issues with [[#Oscillator condition|Barkhausen criteria]] 

Motivation:
<% tp.file.cursor(1) %> 

Definition:
<% tp.file.cursor(2) %> 

Properties:
<% tp.file.cursor(3) %>

Related concepts:
<% tp.file.cursor(4) %>




