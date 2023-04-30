## 5ECB0 

## Carriers
- Intrinsic: electron-hole pair generated from thermal energy $n_{i} = p_{i}$
- Doped: n-type (donor, n) and p-type (acceptor, p) $\to p\neq q,$ fixed (local) charge, globally neutral
$$n_{i}*p_{i}=n*p=AT^3e^{-\frac{E_{g}}{kT}}$$
> $E_{g}: \text{bandgap energy}$
> $\text{k: Boltzmann's constant}$
> $A = B^{2}:\text{ material dependent}$
> $n_{i} - 300k = 1.5*10^{10} cm^3$
> $p = N_{a}$ and $n=\frac{n_{i}^2}{N_{a}}$
> $n = N_{d}$ and $p = \frac{p_{i}^2}{N_{d}}$

## Current
- Drift current: directional, ~E
	- $v_{pdrift} = \mu_{p}E,\ \mu=\frac{v}{E}$
	- $v_{ndrift} = \mu_{n}E\ (\mu_{n} \approx 3\mu_{p} > \mu_{p})$
	- $J = \frac{I}{S} = \frac{qnv_{drift}SE}{S}=q(n\mu_{n}+p\mu_{p})E \ \text{ (q = e)}$
	- $J = \frac{I}{S} = \frac{V}{RS} = \frac{V}{\rho \delta L} = \sigma E$
- Diffusion current: ~concentration difference
	- $F_{n} = -D_{n} \frac{ \partial n }{ \partial x },\ F_{d} = -D_{p} \frac{ \partial p }{ \partial x }$
	> $D = \mu\frac{kT}{q} = \mu V_{T} \\ \text{ (thermal voltage, } \frac{kT}{q} \approx 25mV - Si)$
- $J_{d} = q(F_{n} - F_{d}) = \frac{kT}{q}\left( \mu_{n}\frac{ \partial n }{ \partial x } - \mu_{p}\frac{ \partial p }{ \partial x }\right)$

## P-N junction
- Equilibrium: diffusion of majority carriers, forming depletion region with E ($V_{0} = V_{T}\ln{\frac{N_{A}N_{D}}{n_{i}^2}} \approx 0.7V$) that cause drift that balance diffusion 
![[Pasted image 20230220161228.png|300]]

- Reverse bias: temperature dependent, V independent, drift current $i_{drift} = -I_{s} = const\ \propto n_{i}^2 \propto e^{\frac{-qV_{0}}{kT}}$
- Forward bias: V dependent, diffusion current $i_{diff} = I_{s} e^{\frac{V_{D}}{V_{T}}}$ 
- $i_{D} = i_{drift} + i_{diff} = I_{s}\left( e^{\frac{V_{D}}{V_{T}}} - 1 \right) \approx I_{s}e^{\frac{V_{D}}{V_{T}}}$
$\to i_{D} \propto e^{\frac{V_{D}-V_{th}}{V_{T}}},\ 60mV/decade,\ \ (V_{th} = V_{0} \approx 0.7V,\ \partial v_{D}\approx-2mV/K)$

### Small signal
- Resistance: $r_{d} = \frac{1}{\frac{ \partial i_{D} }{ \partial v_{D} }} = \frac{1}{\frac{I_{D}}{V_{T}}} = \frac{V_{T}}{I_{D}} = 25\Omega @1mA$
- Capacitance:
	- Depletion: $Q \propto \sqrt{ V_{0} + V_{R}} \to C_{j} = \frac{ \partial Q }{ \partial V } = \frac{C_{j_{0}}}{1 + \frac{V_{R}}{V_{0}}}$
	- Diffusion: $C_{d} = \tau_{T} \frac{I_{D}}{V_{T}}$ 
	![[Pasted image 20230220180955.png|300]]

## Op-Amps

- $v_{o}=A(V_{+}-V_{-})$

### Inverting
![[inverting.png|500]]
- Ideal: $\frac{v_{o}}{v_{i}}=-\frac{R_{2}}{R_{1}}$
- $R_{i}=R_{1}$ and $R_{o}=0$

![[weighted-summer.png]]

### Non-Inverting
![[non-inverting.png|500]]
- Ideal: $\frac{v_{o}}{v_{i}}=1+\frac{R_{2}}{R_{1}}$
- $R_{i}=\infty$ and $R_{o}=0$

> Voltage follower where no resistances on Non-inverting -> Amplify Current while keeping the voltage the same.

### Difference Amplifiers
![[difference-amp.png]]
- $CMMR=20\log\left( \frac{A_{d}}{A_{cm}} \right)$
> **Difference**
> $v_{o1}=-\frac{R_{2}}{R_{1}}v_{I1}$
> $v_{{o2}}=\left( 1+\frac{R_{2}}{R_{1}} \right)\left( \frac{R_{4}}{R_{3}+R_{4}} \right)v_{I2}$
> $v_{o}=v_{o1}+v_{o2} \to A_{d}=\frac{R_{2}}{R_{1}}$
> $\frac{R_{4}}{R_{3}}=\frac{R_{2}}{R_{1}}$

> **Common Mode**
> $A_{cm}=\left( 1+\frac{R_{2}}{R_{1}} \right)\left( \frac{R_{4}}{R_{3}+R_{4}} \right)v_{cm} - \frac{R_{2}}{R_{1}}v_{cm}$

## Diodes

**Bias analysis:**
> V source = SC
> Capacitors = OC

**Small Signal Analysis:**
> I source = OC
> Capacitors = SC
> Diodes = R

- Primary goal to analyze diode circuits and precision rectifier.
![[precision-rect.png]]
- full wave (bridge) and precision rectifier: $V_{avg}=\frac{2vi-2(1.4)}{\pi}$ and $V_{avg}=\frac{2v_{i}}{\pi}$ respectively when $v>0 \to v_{o}=v_{i}$
- $v<0 \to v_{o}=0$
- half wave rectifier: $V_{avg}=\frac{v_{i}}{\pi}$

## MOSFET/MOST

**When we say for example $V_{GS}$ means current is S->G since that's how charge flows.**

![[Pasted image 20230312200929.png]]

![[Pasted image 20230313195803.png]]
### Small $v_{GS}$
Conductance: $g_{DS} = (\mu_{n}C_{ox})\left( \frac{W}{L} \right)(v_{GS}-V_{th}) = (\mu_{n}C_{ox})\left( \frac{W}{L} \right)v_{OV}$
> $\mu_{n}$: mobility
> $C_{ox}$: oxide capacitance
> $\mu_{n}C_{ox} = k'_{n}$: process trans-conductance parameter
> W, L: width, length of MOST
> $v_{ov}=v_{GS}-V_{th}$: overdrive voltage
-> Voltage controlled resistor with small $v_{DS}$

### Tapered channel 
**Triode:** $i_{D}=k'_{n}\left( \frac{W}{L} \right)* \frac{1}{2}[V_{OV}+(V_{OV}-v_{DS})]v_{DS}=k'_{n}\left( \frac{W}{L} \right)( V_{OV}v_{DS}-\frac{1}{2} v^2_{DS})$
	- Voltage controlled Resistor
edge of saturation $V_{ov}=V_{DS}$

**Saturation:** $v_{DS}=V_{OV} \to i_{D}=\frac{1}{2}k'_{n}\left( \frac{W}{L} \right)*V^2_{OV}$ when $V_{ov}\leq V_{DS}$
	-Voltage controlled Current source

Channel length modulation: $i'_{D} = i_{D} \frac{L}{L-\Delta L} \approx i_{D}\left( 1+\frac{\Delta L}{L} \right) = i_{D}(1+\lambda (v_{DS}-v_{OV})) \approx i_{D}(1+\lambda v_{DS})$
> @$v_{DS}=-V_{A}=-\frac{1}{\lambda}=-V'_{A}L$ (early voltage): $i'_{D}=0$

Output resistance: $r_{O} = \left( \frac{ \partial i'_{D} }{ \partial v_{DS} } \right)^{-1} = \frac{V_{A}}{i_{D}} \to \parallel to\  R_{D}$

Body effect: $V_{SB}\neq0$
$V_{t}=V_{t_{0}}+\gamma [\sqrt{ 2\phi_{f}+V_{SB}} - \sqrt{ 2\phi_{f} }]$
> $2\phi_{f} \approx 0.6V,\ \gamma \approx 0.4V^{1/2}$

## Amplifier

![[volt-transfer-char.png]]

$v_{DS} = V_{DD} - I_{D}R_{D} = V_{DD} - \frac{1}{2}k_{n}(v_{GS}-V_{t})^2R_{D}$
> $v_{DS} = V_{DS} + v_{ds},\ v_{GS} = V_{GS} + v_{gs}$

$$
\begin{align}
i_{D} &= \frac{1}{2}k_{n}(V_{GS}+v_{gs}-V_{t})^2=\frac{1}{2}k_{n}(V_{GS}-V_{t})^2+k_{n}(V_{GS}-V_{t})v_{gs}+\frac{1}{2}k_{n}v_{gs}^2 \\
&=I_{D}  + i_{d} + \frac{1}{2}k_{n}v_{gs}^2 \\
\end{align}
$$
$\frac{1}{2}k_{n}v_{gs}^2 \ll k_{n}(V_{GS}-V_{t})v_{GS} \to v_{gs} \ll 2V_{OV}$
$$
\begin{align}
A_{V} &= \frac{ \partial v_{DS} }{ \partial v_{GS} } = \frac{v_{ds}}{v_{gs}}|_{v_{GS} \approx V_{GS}}  = -k_{n}(v_{GS}-V_{t})R_{D}\approx k_{n}(V_{GS}-V_{t})R_{D} \\
&=-k_{n}V_{OV}R_{D}=-\frac{I_{D}R_{D}}{\frac{V_{OV}}{2}}=-\frac{V_{DD}-V_{DS}}{\frac{V_{OV}}{2}} \\
|A_{v,max}|&=\frac{V_{DD}-V_{OV}|_{B}} {\frac{V_{OV}|_{B}}{2}},\ V_{DS}|_{B} = V_{OV}|_{B} \ @B: \text{edge of saturation}
\end{align}
$$
$g_{m}=\frac{ \partial i_{d} }{ \partial v_{gs} }=k_{n}(V_{GS}-V_{t})=k_{n}V_{OV}=\frac{-A_{v}}{R_{D}}=\frac{2I_{D}}{V_{OV}}=\sqrt{ 2k'_{n} }\sqrt{ \frac{W}{L} }\sqrt{ I_{D} }$
Channel-length modulation: $A_{v}'=g_{m}(R_{D}\mid r_{o})$

**Small signal model:** 
- V source: SC
- I source: OC

Hybrid-$\pi$ model:

![[Pasted image 20230319174704.png|r_o]] 
![[Pasted image 20230319204910.png|CM+Body effect]]

T model:
![[ss_t_model.png]]

Body effect: $g_{mb}=\frac{ \partial i_{D} }{ \partial v_{BS} }|_{v_{GS}, v_{DS}=const}=\chi g_{m},\ \chi=\frac{ \partial V_{t} }{ \partial V_{SB} }$
Maximum $v_{gs}$ swing: $V_{DS}-A_{v}\hat{v}_{gs}\geq V_{OV}+\hat{v}_{gs} \to v_{gs} \leq \frac{V_{DS}-V_{OV}}{1+|A_{v}|}$
Input resistance: $R_{in} = \frac{v_{in}}{i_{in}} = \frac{v_{in}}{\frac{v_{in}-v_{out}}{R_{G}}} = \frac{R_{G}}{1-A_{v}},\ A_{v} < 0$

### Configurations
## Common source:
![[amp_cs.png]]
![[amp_cs_ideal.png]]

$R_{in}=\infty$
Gain: $A_{v}=-g_{m}(R_{D}\parallel R_{L} \parallel r_{o})$
Add $R_{S}$ for negative feedback: $A_{v}=\frac{v_{o}}{v_{i}}=-\frac{g_{m}(R_{D}\parallel R_{L} \parallel r_{o})}{1+g_{m}R_{S}},\ v_{gs}=\frac{v_{i}}{1+g_{m}R_{s}}$
Ideal gain: $A_{o}=-g_{m}r_{o}=\frac{2I_{D}}{V_{OV}} \frac{V_{A}}{I_{D}}=\frac{2V_{A}}{V_{OV}}$
- Very high/inf $R_{in}$, high $R_{out}$
- High V gain
- Add [[#Common drain (source follower)|CD]] for low $R_{out}$
## Common gate:

![[Pasted image 20230319221602.png|300]]
![[amp_cg_ss_in.png]]
![[amp_cg_ss_out.png]]

Ideal: $R_{in}=\frac{1}{g_{m}}$
Real: $R_{in}=\frac{r_{o}+R_{L}}{1+g_{m}r_{o}}\approx \frac{1}{g_{m}}+ \frac{R_{L}}{g_{m}r_{o}}$
$R_{out}=r_{o}+(1+g_{m}r_{o})R_{s}\approx r_{o}+g_{m}r_{o}R_{s}$
- Low, controllable $R_{in} \to$ impedance matching with low impedance sources (cables...) >< Input severely attenuated
- High $R_{out}$
- $CG+CS\to$ cascode amp

### Common drain (source follower)

![[Pasted image 20230319222924.png|300]]

$R_{o}=\frac{1}{g_{m}},\ R_{i}=\infty$
$A_{v}=\frac{g_{m}R_{L}v_{gs}}{v_{gs}(1+g_{m}R_{L})}=\frac{R_{L}}{R_{L}+\frac{1}{g_{m}}}$
- Very high, inf $R_{in}$, low, controllable $R_{out}$
- ~1 gain
- Last stage for low $R_{out}$

### Current steering
![[ss_current_mirror.png]]
![[iv_current_mirror.png]]

Load curve: I-V of Q2 ($v_{o}=V_{DD}-v_{DS_{2}}$)


Cascode (CG + CS):

![[cascode_current_source.png]]
![[cascode_multiple.png]]

$A_{v}=-g_{m_{1}}(R_{on}\parallel R_{op})$

![[diff_amp.png]]
![[ss_diff_amp.png]]
![[diff_amp_t_model.png]]


Common mode:
$\frac{I}{2}=\frac{1}{2}k_{n}V_{OV_{CM}}^2\to V_{OV_{CM}}=\sqrt{ \frac{I}{k_{n}} }$
$$
\begin{align}
V_{CM_{max}}&=V_{GS}+V_{S_{max}}=(V_{OV}+V_{t})+(V_{D}-V_{DS_{min}}) \\
&=(V_{OV}+V_{t})+\left( V_{DD}-\frac{I}{2}R_{D}-V_{OV} \right)=V_{t}+V_{DD}-\frac{I}{2}R_{D}=V_{t}+V_{D}
\end{align}
$$
$V_{CM_{min}}=V_{GS}+V_{S_{min}}=V_{OV}+V_{t}+V_{CS}-V_{SS}$
Differential mode:
> Virtual GND is established at D -> no bypass C to GND in SSA


$v_{GS_{1}}=V_{t}+\sqrt{ \frac{2I}{k_{n}} }=V_{t}+\sqrt{ 2 }V_{OV_{CM}}, v_{id_{1}}=v_{GS_{1}}+v_{S}=\sqrt{ 2 }V_{OV}$
$i_{D}=\frac{I}{2}\pm\left( \frac{I}{V_{OV_{CM}}} \right)\left( \frac{v_{id}}{2} \right)\sqrt{ 1-\left( \frac{v_{id}}{2V_{OV_{CM}}} \right)^{2} }\approx \frac{I}{2}\pm\left( \frac{I}{V_{OV_{CM}}} \right)\left( \frac{v_{id}}{2} \right)=\frac{I}{2}\pm \frac{g_{m}v_{id}}{2}$
$A_{d}=\frac{v_{od}}{v_{id}}=g_{m}(R_{D}\parallel r_{o})$
-> Current source: $A_{d}=\frac{v_{od}}{v_{id}}=g_{m}(r_{o_{1}}\parallel r_{o_{3}})$ -> cascode

CMRR: 

![[diff_amp_cmrr.png]]
![[ss_diff_amp_cmrr.png]]

$v_{cm}=\frac{i_{cm}}{g_{m}}+2i_{cm}R_{ss}\to i_{cm}=\frac{v_{cm}}{\frac{1}{g_{m}}+2R_{ss}}$
$\frac{v_{o_{1}}}{v_{cm}}=\frac{v_{o_{2}}}{v_{cm}}=-R_{D}i_{cm}=-\frac{R_{D}}{\frac{1}{g_{m}}+2R_{ss}}\approx -\frac{R_{D}}{2R_{ss}}$
$A_{cm}=-\frac{R_{D}}{2R_{ss}} \frac{\Delta R_{D}}{R_{D}}$
$CMRR=\frac{|A_{d}|}{|A_{cm}|}=(2g_{m}R_{ss}) / (\frac{\Delta R_{D}}{R_{D}}) \to (2g_{m}R_{ss}) / (\frac{\Delta g_{m}}{g_{m}})$
$CMRR(dB)=20log \frac{|A_{d}|}{|A_{cm}|}$