---
modified: Monday, January 1st 2024, 21:17:43
created: Tuesday, November 14th 2023, 11:11:13
---
## MOSFET/MOST
![[Pasted image 20230312200929.png|400]]

![[Pasted image 20230313195803.png|400]]
### Deep Triode (small $v_{DS}$)
Conductance: $g_{DS} = (\mu_{n}C_{ox})\left( \frac{W}{L} \right)(v_{GS}-V_{th}) = (\mu_{n}C_{ox})\left( \frac{W}{L} \right)v_{OV}$
> $\mu_{n}$: mobility
> $C_{ox}$: oxide capacitance
> $\mu_{n}C_{ox} = k'_{n}$: process transconductance parameter
> W, L: width, length of MOST
> $v_{ov}=v_{GS}-V_{th}$: overdrive voltage
-> Voltage controlled resistor with small $v_{DS}$

### Tapered Channel
Triode: $i_{D}=k'_{n}\left( \frac{W}{L} \right)[(V_{GS}-V_{th})^{2}-(V_{GD}-V_{th})^{2}]=k'_{n}\left( \frac{W}{L} \right)* \frac{1}{2}[V_{OV}+(V_{OV}-v_{DS})]v_{DS}=k'_{n}\left( \frac{W}{L} \right)\left(  V_{OV}v_{DS}-\frac{1}{2} v^2_{DS} \right)$
Saturation: $v_{DS}=V_{OV} \to i_{D}=\frac{1}{2}k'_{n}\left( \frac{W}{L} \right)*V^2_{OV}$

Body effect: $V_{SB}\neq0$
$V_{t}=V_{t_{0}}+\gamma [\sqrt{ 2\phi_{f}+V_{SB}} - \sqrt{ 2\phi_{f} }]$
> $2\phi_{f} \approx 0.6V,\ \gamma \approx 0.4V^{1/2}$

## Amplifier
$v_{DS} = V_{DD} - I_{D}R_{D} = V_{DD} - \frac{1}{2}k_{n}(v_{GS}-V_{t})^2R_{D}$
> $v_{DS} = V_{DS} + v_{ds},\ v_{GS} = V_{GS} + v_{gs}$

$$
\begin{flalign}
i_{D} &= \frac{1}{2}k_{n}(V_{GS}+v_{gs}-V_{t})^2=\frac{1}{2}k_{n}(V_{GS}-V_{t})^2+k_{n}(V_{GS}-V_{t})v_{gs}+\frac{1}{2}k_{n}v_{gs}^2 \\
&=I_{D}  + i_{d} + \frac{1}{2}k_{n}v_{gs}^2 \\&&
\end{flalign}
$$
$\frac{1}{2}k_{n}v_{gs}^2 \ll k_{n}(V_{GS}-V_{t})v_{GS} \to v_{gs} \ll 2V_{OV}$
$$
\begin{flalign}
A_{V} &= \frac{ \partial v_{DS} }{ \partial v_{GS} } = \left.\frac{v_{ds}}{v_{gs}}\right|_{v_{GS} \approx V_{GS}}  = -k_{n}(v_{GS}-V_{t})R_{D}\approx -k_{n}(V_{GS}-V_{t})R_{D} \\
&=-k_{n}V_{OV}R_{D}=-\frac{I_{D}R_{D}}{\frac{V_{OV}}{2}}=-\frac{V_{DD}-V_{DS}}{\frac{V_{OV}}{2}} \\
|A_{v,max}|&=\frac{V_{DD}-V_{OV}|_{B}} {\frac{V_{OV}|_{B}}{2}},\ V_{DS}|_{B} = V_{OV}|_{B} \ @B: \text{edge of saturation}\\&&
\end{flalign}
$$
Transconductance: $g_{m}=\frac{ \partial i_{d} }{ \partial v_{gs} }=k_{n}(V_{GS}-V_{t})=k_{n}V_{OV}=\frac{-A_{v}}{R_{D}}=\frac{2I_{D}}{V_{OV}}=\sqrt{ 2k'_{n} }\sqrt{ \frac{W}{L} }\sqrt{ I_{D} }$
Channel length modulation: $i'_{D} = i_{D} \frac{L}{L-\Delta L} \approx i_{D}\left( 1+\frac{\Delta L}{L} \right) = i_{D}(1+\lambda (v_{DS}-v_{OV})) \approx i_{D}(1+\lambda v_{DS})$
> @$v_{DS}=-V_{A}=-\frac{1}{\lambda}=-V'_{A}L$ (early voltage): $i'_{D}=0$

-> Equivalent output resistance: $r_{O} = \left( \frac{ \partial i'_{D} }{ \partial v_{DS} } \right)^{-1} = \frac{V_{A}}{i_{D}} \to r_{DS} \parallel  R_{D}$
Gain with channel-length modulation: $A_{v}'=-g_{m}(R_{D}\mid r_{o})$

Hybrid-$\pi$ model: Current source dependent on input voltage
![[Pasted image 20230319174704.png|Channel modulation (CM)|400]]![[Pasted image 20230319204910.png|CM+Body effect|400]]

T model: modified version of Hybrid-$\pi$
![[ss_t_model.png|%]]

Body effect: $g_{mb}=\frac{ \partial i_{D} }{ \partial v_{BS} }|_{v_{GS}, v_{DS}=const}=\chi g_{m},\ \chi=\frac{ \partial V_{t} }{ \partial V_{SB} }$
Maximum $v_{gs}$ swing: $V_{DS}+A_{v}\hat{v}_{gs}\geq V_{OV}+\hat{v}_{gs} \to v_{gs} \leq \frac{V_{DS}-V_{OV}}{1+|A_{v}|}$

## Configurations
### Diode connected
Equivalent diode with resistance: $\displaystyle R_{ds} = \frac{1}{g_{m}} \parallel r_{o}$

### Common Source
![[5ECB0/ec2-resit/attachments/amp_cs.png|%]]
![[5ECB0/ec2-resit/attachments/amp_cs_ideal.png|%]]
![[amp_cs_with_rg.png|%|400]]

Input resistance: $R_{in} = \frac{v_{in}}{i_{in}} = \frac{v_{in}}{\frac{v_{in}-v_{out}}{R_{G}}} = \frac{R_{G}}{1-A_{v}},\ A_{v} < 0$
$R_{in}=\infty$
Gain: $A_{v}=-g_{m}(R_{D}\parallel R_{L} \parallel r_{o})$
Add $R_{S}$ for negative feedback: $A_{v}=\frac{v_{o}}{v_{i}}=-\frac{g_{m}(R_{D}\parallel R_{L} \parallel r_{o})}{1+g_{m}R_{S}},\ v_{gs}=\frac{v_{i}}{1+g_{m}R_{s}}$
Ideal gain: $A_{o}=-g_{m}r_{o}=\frac{2I_{D}}{V_{OV}} \frac{V_{A}}{I_{D}}=\frac{2V_{A}}{V_{OV}}$
- Very high/inf $R_{in}$, high $R_{out}$
- High V gain
- Add [[#Common drain (source follower)|CD]] for low $R_{out}$
### Common Gate

![[Pasted image 20230319221602.png|400]]
![[5ECB0/ec2-resit/attachments/amp_cg_ss_in.png|%|400]]
![[5ECB0/ec2-resit/attachments/amp_cg_ss_out.png|%|400]]


Ideal: $\displaystyle R_{in}=\frac{1}{g_{m}}$
Real: $\displaystyle R_{in}=\frac{r_{o}+R_{L}}{1+g_{m}r_{o}}\approx \frac{1}{g_{m}}+ \frac{R_{L}}{g_{m}r_{o}} = \frac{1}{g_{m}}+ \frac{R_{D}}{g_{m}r_{o}}$
$R_{out}=r_{o}+(1+g_{m}r_{o})R_{s}\approx r_{o}+g_{m}r_{o}R_{s}$
Gain: $\displaystyle G =\frac{v_{out}}{v_{in}} = \frac{i_{x_{in}}R_{L}}{v_{in}}=\frac{\frac{v_{in}}{r_{in}}R_{L}}{v_{in}}=\frac{R_{L}(1+g_{m}r_{o})}{r_{o}+R_{L}}$
- Low, controllable $R_{in} \to$ impedance matching with low impedance sources (cables...) >< Input severely attenuated
- High $R_{out}$
- $CG+CS\to$ cascode amp

### Common Drain (source follower)

![[Pasted image 20230319222924.png|300]]

$R_{o}=R_{L}|\frac{1}{g_{m}},\ R_{i}=\infty$
$A_{v}=\frac{g_{m}R_{L}v_{gs}}{v_{gs}(1+g_{m}R_{L})}=\frac{R_{L}}{R_{L}+\frac{1}{g_{m}}}$
- Very high, inf $R_{in}$, low, controllable $R_{out}$
- ~1 gain
- Last stage for low $R_{out}$

![[Current mirror]]

### Cascode ([[#Common gate]] + [[#Common source]])
Active loading: replace load resistance with current source
![[5ECB0/ec2-resit/attachments/cascode_current_source.png|%|400]]
![[5ECB0/ec2-resit/attachments/cascode_multiple.png|%|300]]

$A_{v}=-g_{m_{1}}(R_{on}\parallel R_{op})$
[[#Common gate]] $R_{in}, R_{out}$ 


## [[Differential amplifier]]

![[Differential amplifier]]

# Inverter
![[mosfet_inverter.png]]
> $\displaystyle V_{M}:$ mid/trip point

Load line analysis
![[mosfet_inverter_chain.png|%]]


## Dynamic power dissipation
Source input energy: $\displaystyle E_{in}=V_{dd}Q=CV_{dd}^{2}$
Dissipated power when charging: $\displaystyle E_{charge}=E_{in} - E_{C} = CV_{dd}^{2}-\frac{1}{2}CV_{dd}^{2}=\frac{1}{2}CV_{dd}^{2}$
When discharging: $\displaystyle E_{discharge}=E_{C}=\frac{1}{2}CV_{dd}^{2}$
Power dissipated: $\displaystyle P_{D}=f(E_{charge}+E_{discharge})=fCV_{dd}^{2}$

Propagation delay: $\displaystyle t_{p}=\frac{1}{2}(t_{phl}+t_{plh})\to f_{max}=\frac{1}{2t_{p}}$
Figure of Merit (FoM) to compare technology:
- Power-Delay Product PDP := $\displaystyle P_{D}t_{p}$ ($\displaystyle t_{p}$ might be cancelled out at maximum frequency)
- Energy-Delay Product EDP := $\displaystyle \frac{1}{2}CV_{dd}^{2}t_{p}$


## Complemetary inverter
![[mosfet_complementary_inverter.png|%]]
$\displaystyle I_{dN} = \frac{k_{n}}{2}[(V_{gs}-V_{tN})^{2}-(V_{gd}-V_{tN})^{2}]=\frac{k_{n}}{2}[(V_{in}-V_{tN})^{2}-(V_{in}-V_{out}-V_{tN})^{2}]$
$\displaystyle I_{dP} = \frac{k_{p}}{2}[(V_{sg}+V_{tP})^{2}-(V_{dg}+V_{tP})^{2}]=\frac{k_{p}}{2}[(V_{dd}-V_{in}+V_{tP})^{2}-(V_{out}-V_{in}+V_{tP})^{2}]$

Triode: $\displaystyle V_{gs} - V_{tN} > 0, V_{gd} - V_{tN} > 0\, \mid V_{sg} + V_{tP} > 0, V_{dg} + V_{tP} > 0$
Saturation: $\displaystyle V_{gs} - V_{tN} > 0, V_{gd} - V_{tN} \leq 0\, \mid V_{sg} + V_{tP} > 0, V_{dg} + V_{tP} \leq 0$ 
When both N and P in saturation (ignoring channel-length modulation): $\displaystyle V_{in}=V_{M}=\frac{\alpha(V_{dd}+V_{tN})+V_{tp}}{1+\alpha},\, \alpha=\sqrt{ \frac{k_{p}}{k_{n}} } \perp\!\!\!\perp V_{out}$ 

For matched transistor $\displaystyle V_{tN}=-V_{tp},\ k_{n}=k_{p}$
- $\displaystyle V_{M}=\frac{V_{dd}}{2}$
- $\displaystyle V_{inL}=\frac{3}{8}V_{dd}+\frac{1}{4}V_{t},\, V_{inH}=\frac{5}{8}V_{dd}-\frac{1}{4}V_{t}$
![[mosfet_cmos_inverter_delay.png|%]]

Static power << Dynamic power (if input transition >>)

## Propagation delay
### $\displaystyle V_{out}: V_{dd}\to V_{dd}-V_{tN}$
$\displaystyle V_{out}=V_{dd}-i_{dN}t=V_{dd}-\frac{k_{n}}{2C_{L}}(V_{dd}-V_{tN})^{2}t$
$\displaystyle \to @ V_{out}=V_{dd}-V_{tN}: t_{1}=\frac{2C_{L}V_{tN}}{k_{n}(V_{dd}-V_{tN})^{2}}$
### $\displaystyle V_{out}: V_{dd}-V_{tN} \to V_{m}$
$\displaystyle i_{dN}=k_{n}v_{out}\left( V_{dd}-V_{tN}-\frac{V_{out}}{2} \right)\to C_{L}\frac{ d v_{out} }{ d t }=-i_{dN}$
$\displaystyle \to\int_{t_{hl}}^{t_{1}}  \, dt=-\int_{V_{dd}-V_{tN}}^{V_{x}} \frac{C_{L}}{k_{n}v_{out}\left( V_{dd}-V_{tN}-\frac{V_{out}}{2} \right)} \, dv_{out}$
$\displaystyle \to t_{hl}=C_{L}k_{n}\left( \frac{2V_{tN}}{(V_{dd}-V_{tN})^{2}}+\frac{1}{V_{dd}-V_{tN}}\ln\left( \frac{2V_{dd}-2V_{tN}-V_{x}}{V_{x}} \right) \right)$

Similar for $\displaystyle t_{lh}: t_{lh}=C_{L}k_{n}\left( \frac{-2V_{tP}}{(V_{dd}+V_{tP})^{2}}+\frac{1}{V_{dd}-V_{tN}}\ln\left( \frac{2V_{dd}+2V_{tP}+V_{x}}{V_{dd}-V_{x}} \right) \right)$
For matched transistor: $\displaystyle V_{m}=\frac{V_{dd}}{2}$
- For $\displaystyle V_{t} > \frac{V_{dd}}{2} \to t_{phl}=t_{plh}=\frac{V_{dd} \frac{C_{L}}{k}}{(V_{dd}-V_{t})^{2}}$
- For $\displaystyle V_{t} < \frac{V_{dd}}{2}\to t_{phl}=t_{plh}=C_{L}k_{n}\left( \frac{2V_{t}}{(V_{dd}-V_{t})^{2}}+\frac{1}{V_{dd}-V_{t}}\ln\left( 3-4 \frac{V_{t}}{V_{dd}} \right) \right)$

# CMOS logic
![[mosfet_inverter_complementary_switch.png|%]]
![[cmos_logic_ex.png|%]]
Transistor sizing:
- minimize area -> minimum length of tech
- ensure min discharge current ~ 1 mos -> $\displaystyle R_{series}=\frac{R_{on}}{k}\to \frac{W}{L} \propto  k$ 

# Transmission gate
Can be used as:
- Controllable switch
- Combine with capacitor to mimic resistor
- Building block in transistor-transistor logic (TTL)
![[cmos_gate.png|%]]
## Resistor
$\displaystyle R_{Neq} =$
- Saturated mode: $\displaystyle \frac{V_{dd}-V_{o}}{\frac{k_{n}}{2}(V_{dd}-V_{tN}-v_{o})^{2}}$
- Off mode: $\displaystyle \infty$
$\displaystyle R_{Peq}=$
- Saturated mode: $\displaystyle \frac{V_{dd}-v_{o}}{\frac{k_{p}}{2}(V_{dd}+V_{tP})^{2}}$
- Triode mode: $\displaystyle \frac{1}{k_{p}\left( V_{dd}+V_{tP}-\frac{1}{2}(V_{dd}-V_{o}) \right)}$
$\displaystyle R_{eq}=R_{Neq}\parallel R_{Peq}$
![[cmos_gate_resistor.png|%]]
## TTL building block
![[cmos_gate_ttl_logic.png|%]]

# Memory circuit
- Static: only need supply
- Dynamic: based on charge conservation -> need refresh
Requirements:
- 2 stable states
- Controllable
- Observable

## 2 stable states
![[mem_latch_base.png|%]]Stable: $\displaystyle \frac{ d S(V_{in}) }{ d V_{in} } < 1$
Metastable: $\displaystyle \frac{ d S(V_{in}) }{ d V_{in} } > 1$
For a continuous static transfer characteristic  
between two stable points there will always be a metastable point  
Every (practical) loop with a metastable point has (at least)  
two stable points  
out inV S V  
('saturation', for example due to limited supply voltage)  
A circuit with exactly two stable states is called 'bi-stable'  
A bi-stable circuit will need an amplifier, that for a certain voltage range  
has >a (positive) small-signal voltage gain 1


## Controllable
![[mem_latch_sr.png|%]]



## Static
read write operation
![[mem_read_write.png|%]]

Read: $\displaystyle B\ \&\ \overline{B}$ are precharged -> Q5 will discharge 1 line
> [!note] 
> Non destructive -> Need to design so that $\displaystyle Q,\bar{Q} < V_{t}\to I_{3,max} \geq I_{6} @ V_{Q}=V_{t}$
> Bit lines are precharged

Write: 
Suppose writing 0
- $\displaystyle \bar{Q} < V_{t}$ -> wait for Q to switch to 0


## Dynamic
![[mem_dynamic.png|%]]

Need to maintain precharge voltage of bit lines every cycle

Read: $\displaystyle V_{C_{s}}=V_{dd}-V_{t}|0$
Write:
1. Bit lines are precharged -> sense amp in metastable state
2. $\displaystyle C_{s}$ and $\displaystyle C_{B}$ exchange charges: $\displaystyle C_{s}V_{s}+C_{b}V_{pre}=(C_{s}+C_{b})(V_{pre}+\Delta V)\to \Delta V=\frac{C_{s}}{C_{s}+C_{b}}(V_{s}-V_{pre})$
3. Unbalance $\displaystyle B,\bar{B}$
4. Sense amplifier raise to stable states
