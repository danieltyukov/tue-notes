---
modified: Monday, January 1st 2024, 21:17:43
created: Friday, December 8th 2023, 09:19:14
---
## Current Steering
![[iv_current_mirror.png|%]]

Load curve: I-V of Q2 ($v_{o}=V_{DD}-v_{DS_{2}}$)

![[5ECC0/ec2-resit/attachments/ss_current_mirror.png]]

$$
\begin{flalign}
 & v_{g} = -\frac{i_{in}}{g_{m}+\frac{1}{r_{o_{4}}}}  \\
 & i_{out} = g_{m}v_{g} + \frac{v_{out}}{r_{o_{5}}} = i_{in} - \left(\frac{i_{in}}{g_{m}r_{o_{4}}+1} + \frac{v_{out}}{r_{o_{5}}}\right) \approx i_{in} - \frac{i_{in}}{g_{m}r_{o}}
\end{flalign}
$$
