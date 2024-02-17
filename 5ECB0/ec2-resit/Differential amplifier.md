---
modified: Monday, January 1st 2024, 21:17:43
created: Friday, December 1st 2023, 10:10:57
---


# Resistor
![[5ECB0/ec2-resit/attachments/diff_amp.png|%|500]]
![[ss_diff_amp.png|%|500]]
![[5ECB0/ec2-resit/attachments/diff_amp_t_model.png|%]]

Common mode:

$$
\begin{flalign} 
\frac{I}{2}&=\frac{1}{2}k_{n}V_{OV_{CM}}^2\to V_{OV_{CM}}=\sqrt{ \frac{I}{k_{n}} } \\
V_{CM_{max}}&=V_{GS}+V_{S_{max}}=(V_{OV}+V_{t})+(V_{D}-V_{DS_{min}}) \\
&=(V_{OV}+V_{t})+\left( V_{DD}-\frac{I}{2}R_{D}-V_{OV} \right)=V_{t}+V_{DD}-\frac{I}{2}R_{D}=V_{t}+V_{D}&&
\end{flalign}
$$
$V_{CM_{min}}=V_{GS}+V_{S_{min}}=V_{OV}+V_{t}+V_{CS}-V_{SS}$
Differential mode:
> Virtual GND is established at D -> no bypass C to GND in SSA

One side switched off:
$v_{GS_{1}}=V_{t}+\sqrt{ \frac{2I}{k_{n}} }=V_{t}+\sqrt{ 2 }V_{OV_{CM}}, v_{id_{1}}=v_{GS_{1}}+v_{S}=\sqrt{ 2 }V_{OV}$
$i_{D}=\frac{I}{2}\pm\left( \frac{I}{V_{OV_{CM}}} \right)\left( \frac{v_{id}}{2} \right)\sqrt{ 1-\left( \frac{v_{id}}{2V_{OV_{CM}}} \right)^{2} }\approx \frac{I}{2}\pm\left( \frac{I}{V_{OV_{CM}}} \right)\left( \frac{v_{id}}{2} \right)=\frac{I}{2}\pm \frac{g_{m}v_{id}}{2}$
$A_{d}=\frac{v_{od}}{v_{id}}=g_{m}(R_{D}\parallel r_{o})$
-> Current source: $A_{d}=\frac{v_{od}}{v_{id}}=g_{m}(r_{o_{1}}\parallel r_{o_{3}})$ -> cascode

CMRR: 

![[5ECB0/ec2-resit/attachments/diff_amp_cmrr.png|%|500]]
![[ss_diff_amp_cmrr.png|%|500]]

$v_{cm}=\frac{i_{cm}}{g_{m}}+2i_{cm}R_{ss}\to i_{cm}=\frac{v_{cm}}{\frac{1}{g_{m}}+2R_{ss}}$
$\frac{v_{o_{1}}}{v_{cm}}=\frac{v_{o_{2}}}{v_{cm}}=-R_{D}i_{cm}=-\frac{R_{D}}{\frac{1}{g_{m}}+2R_{ss}}\approx -\frac{R_{D}}{2R_{ss}}$
$A_{cm}=-\frac{R_{D}}{2R_{ss}} \frac{\Delta R_{D}}{R_{D}}$
$CMRR=\frac{|A_{d}|}{|A_{cm}|}=(2g_{m}R_{ss}) / (\frac{\Delta R_{D}}{R_{D}}) \to (2g_{m}R_{ss}) / (\frac{\Delta g_{m}}{g_{m}})$
$CMRR(dB)=20log \frac{|A_{d}|}{|A_{cm}|}$

# Current Mirror
Active load:
![[diff_amp_current_mirror.png]]

![[diff_amp_current_mirror_analysis_dm.png|500]]
Differential gain:
$$
\begin{flalign}
 & g_{m_{1}} \frac{v_{in}}{2} + g_{m_{4}}v_{d_{1}} = 0 \to v_{d_{1}} = -\frac{g_{m_{1}}}{g_{m_{4}}} \frac{v_{in}}{2}\\
 & -g_{m_{2}} \frac{v_{in}}{2} - \frac{g_{m_{1}}g_{m_{5}}}{g_{m_{4}}} \frac{v_{in}}{2} + \frac{v_{out}}{r_{o_{2}}|r_{o_{5}}} \\
 & A_{DM} = \frac{v_{out}}{v_{in}} = \frac{1}{2}(r_{o_{2}}|r_{o_{5}})\left( g_{m_{2}}+g_{m_{1}} \frac{g_{m_{5}}}{g_{m_{4}}} \right) \\
 &&
\end{flalign}
$$
$\displaystyle A_{DM} = \frac{2g_{m_{3}}(R_{L}|r_{o_{2}}|r_{o_{4}})}{2}=g_{m}(R_{L}|r_{o_{2}}|r_{o_{4}})$

Common mode gain:
[[Current mirror]]
![[op_amp_current_mirror_analysis_cm.png]]

$$
\begin{flalign}
 & g_{mn}(v_{cm}-v_{s}) = \frac{v_{s}}{2r_{o_{3}}} \to v_{s} = v_{cm}-\frac{v_{cm}}{1+2g_{mn}r_{o_{3}}} \\
 & \frac{g_{mn}(v_{cm}-v_{s})}{g_{mp}r_{op}} + \frac{v_{out}}{r_{op}} = 0 \\
 & A_{CM} = \frac{v_{out}}{v_{cm}} = \frac{1}{2g_{mp}r_{o_{3}}} \\
 &  & 
\end{flalign}
$$


