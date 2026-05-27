---
modified: Monday, January 1st 2024, 21:17:43
---
# Op-amp

![6B781FDF-4371-478A-A8E6-D662BD764AD4.jpeg|500](op_amp_analog.jpeg)

![Untitled](op_amp_two_stage_ex.png)

$V_{out} = G * (V_+ - V_-), \\ 1.\ G \approx \infty \\ 2.\ R_{in} \approx \infty, \ R_{out} \approx 0 \\ \rightarrow 3.\ I_{in-} = I_{in+} \approx 0$

Negative feedback: $4.\ V_{out} = G * (V_+ - V_-) \rightsquigarrow V_+ - V_- = \frac{V_{out}}{G} \approx 0$

![Buffer](op_amp_buffer.jpeg)

Buffer

![Inverting amplifier (G = -R2/R1)](op_amp_inv.jpeg)

Inverting amplifier (G = -R2/R1)

![Noninverting amplifier ( G = (R1+R2)/R1 )](op_amp_noninv.jpeg)

Noninverting amplifier ( G = (R1+R2)/R1 )

![(-) Summing amplifier ( Vout = -(R3/R1*V1 + R3/R2*V2) )](op_amp_summing.jpeg)

(-) Summing amplifier ( Vout = -(R3/R1*V1 + R3/R2*V2) )

![(-) Summing amplifier + Inverting amplifier → (+) Summing amplifier](op_amp_summing_noninv.jpeg)

(-) Summing amplifier + Inverting amplifier → (+) Summing amplifier

![Differential amplifier|500](op_amp_diff.jpeg)

Inv + Non-inv amp → Differential amplifier (Vout = V2*(R1 + R2)/R1 - V1*R2/R1 = R2/R1*(V1 - V2))

![Instrumentation amplifier|600](op_amp_instrumentation.jpeg)

Instrumentation amplifier (Differential amplifier + Noninverting amplifier → zero impedance to avoid CMRR from mismatched resistor) + Rg for adjusting gain



![[Integrator.png|Integrator (Vout = -1/(RC)F(Vin))]]
$\displaystyle \frac{V_{in}-V}{R}=CV',\, C(V_{out}-V)'=\frac{V}{R}\to \frac{V_{in}}{R}=CV_{out}'$

(Miller) Integrator (Vout = -1/(RC)F(Vin)) ^integrator

![Differentiator (Vout = -RCVin’)](op_amp_differentiator.jpeg)

(Inv) Differentiator (Vout = -RCVin’)
[Non-inv Differentiator](https://pdfs.semanticscholar.org/45a7/9f2384a0b692f54b8b199834bd882b8f4da6.pdf)

![Logarithmic amplifier](op_amp_log.png)

Logarithmic amplifier

![Antilog amp](op_amp_antilog.png)

Antilog amp

# Positive Feedback

![Schmitt trigger|500](positive_feedback.jpeg)

Schmitt trigger (hysteresis effect Vth = +- Vs*R1/R2)

![Square wave (Astable multivibrator, T = 2R1*ln(1+2*R3/R2))](op_amp_wave_square.png)

Square wave (Astable multivibrator, T = 2R1*ln(1+2*R3/R2))

![Triangle + Square wave](op_amp_wave_triangle_square.png)

Triangle + Square wave

![Sawtooth generator (PUT with ~0.5 Vdrop set threshold to quickly discharge C)](op_amp_sawtooth.png)


Sawtooth generator (PUT with ~0.5 Vdrop set threshold to quickly discharge C)

## Comparator

Op-amp but output circuitry is a transistor

![Inverting comparator with hysteresis](op_amp_hysteresis_inv.jpeg)

Inverting comparator with hysteresis

$V_{th1} = V_s * \frac{R_2}{R_2 + R_1 || R_3}$
$V_{th2} = V_s * \frac{R_1||R_3}{R_1||R_3 + R_2}$


![Noninverting comparator with hysteresis](op_amp_hysteresis_noninv.jpeg)

Noninverting comparator with hysteresis

$V_{th1} = V_{ref} * \frac{R_2}{R_2 + R_1} \\ 
V_{th2} = V_{ref} * \frac{R_2}{R_1 + R_2} - V_s * \frac{R_1}{R_2}$

![Window comparator ](op_amp_window_comparator.jpeg)

Window comparator 



# Two-stage CMOS Op-amp
![[op_amp_2_stage.png]]
> First gain stage: Q1-5 ([[Differential amplifier#Current mirror]])
> Second gain stage: Q6-7 ([[MOSFET#Common source|CS with active load current source]])

## Frequency Response
Without C between D2 and D6:
![[op_amp_2_stage_analysis.png]]
$\displaystyle G=\frac{V_{o}}{V_{i}} = \frac{V_{o}}{V_{i_{2}}} \frac{V_{i_{2}}}{V_{i_{1}}} = -\frac{G_{m_{1}}R_{1}}{1+sC_{1}R_{1}}\cdot-\frac{G_{m_{2}}R_{2}}{1+sC_{2}R_{2}}=\frac{G_{m_{1}}R_{1}G_{m_{2}}R_{2}}{(1+sC_{1}R_{1})(1+sC_{2}R_{2})}$
For $|G|>1$: Phase > -$135^o$
![[op_amp_2_stage_phase.png|400]]
$\omega_{p_{2}}>\omega_{t} = A_{0}\omega_{p_{1}}\to \frac{1}{C_{2}R_{2}} > \frac{G_{m_{1}}R_{1}G_{m_{2}}R_{2}}{C_{1}R_{1}}\to C_{1}> (G_{m_{1}}G_{m_{2}}R_{2}^{2}) C_{2}$

With C between D2 and D6
![[op_amp_2_stage_analysis_capacitance.png|%]]

$$
\begin{flalign}
& G_{m 1} V_{i d}+\frac{V_{i 2}}{R_1}+s C_1 V_{i 2}+s C_C\left(V_{i 2}-V_o\right)=0 \\ 
& G_{m 2} V_{i 2}+\frac{V_o}{R_2}+.s C_2 V_o+s C_C\left(V_o-V_{i 2}\right)=0 \\
 & \frac{V_o}{V_{i d}}=\frac{G_{m 1}\left(G_{m 2}-s C_C\right) R_1 R_2}{1+s\left[C_1 R_1+C_2 R_2+C_C\left(G_{m 2} R_1 R_2+R_1+R_2\right)\right]+s^2\left[C_1 C_2+C_C\left(C_1+C_2\right)\right] R_1 R_2} \\
 & \omega_{p_{1}} = \frac{1}{R_{1}(C_{1}+C_{C}(1+G_{m_{2}}R_{2}))} \approx \frac{1}{R_{1}C_{c}G_{m_{2}}R_{2}} \\
 & \omega_{p_{2}}\approx \frac{G_{m_{2}}C_{C}}{R_{1}(C_{1}+C_{C}(1+G_{m_{2}}R_{2})}\approx \frac{G_{m_{2}}}{C_{2}} \gg \omega_{p_{1}}\\
 & \omega_{z} = \frac{G_{m_{2}}}{C_{c}}
\end{flalign}
$$


> [!note] Intuition
> Adding $C_{c}$ also improves stability by switching to single stage amplifier (shorting Q6) at high frequencies


## Offset
![[op_amp_2_stage.png]]
$$
\begin{flalign}
 & I_{D_{3}}=I_{D_{4}}=\frac{1}{2}|I_{D_{5}}| \\
 & V_{D_{3}}=V_{D_{4}}=V_{G_{3}}=V_{G_{4}}=V_{G_{6}} \to I_{D_{6}}=I_{D_{4}} \frac{\frac{W_{6}}{L_{6}}}{\frac{W_{4}}{L_{4}}} = \frac{1}{2}|I_{D_{5}}| \frac{\frac{W_{6}}{L_{6}}}{\frac{W_{4}}{L_{4}}} \\
 & I_{D_{6}}=|I_{D_{7}}|\to \frac{\frac{W_{6}}{L_{6}}}{\frac{W_{4}}{L_{4}}}=2 \frac{\frac{W_{7}}{L_{7}}}{\frac{W_{5}}{L_{5}}}
\end{flalign}
$$
## Common-mode Range
Lower bound: $Q_{1}, Q_{2}$ in saturation
$V_{DG_{1}} \leq |V_{tp}| \to V_{D_{1}}-V_{ICM} \leq |V_{tp}| \to V_{ICM} \geq -V_{ss} + V_{OV_{3}}+V_{tn}-|V_{tp}|$

Upper bound: $Q_{5}$ in saturation
$V_{SD_{5}}\geq|V_{OV_{5}}|\to V_{dd}-(V_{ICM}+|V_{tp}|+|V_{OV_{1}}|) \geq |V_{OV_{5}}|\to V_{ICM}\leq V_{dd} - |V_{tp}| - |V_{OV_{5}}| - |V_{OV_{1}}|$
## Output Swing
Lower bound: $Q_{6}$ in saturation
$V_{DS_{6}}>V_{OV_{6}}\to V_{out}\geq-V_{ss}+V_{OV_{6}}$
Upper bound: $Q_{7}$ in saturation
$V_{SD_{7}}>|V_{OV_{7}}|\to V_{out}\geq V_{dd}-|V_{OV_{7}}|$

## Small-signal Gain
$A = A_{1}A_{2} = G_{m_{1}}R_{1}G_{m_{2}}R_{2}$
1st stage: $G_{m_{1}}=g_{m_{1}}=\frac{2I_{D_{1}}}{|V_{OV_{1}}|}=\frac{I}{|V_{OV_{1}}|},\ R_{1}=r_{o_{2}}|r_{o_{4}}=\frac{2}{I(\lambda_{2}+\lambda_{4})}\to A_{1}=-G_{m_{1}}R_{1}=-\frac{2}{|V_{OV_{1}}|I(\lambda_{2}+\lambda_{1})}$
$G_{m_{2}}=g_{m_{2}}=\frac{2I_{D_{6}}}{|V_{OV_{6}}|},\ R_{2}=r_{o_{6}}|r_{o_{7}}=\frac{1}{I_{D_{6}}(\lambda_{6}+\lambda_{7})}\to A_{2}=-G_{m_{2}}R_{2}=-\frac{1}{|V_{OV_{6}}|I(\lambda_{6}+\lambda_{7})}$

## Phase Margin
$\phi_{margin} = \pi+\phi_{unity}$
$\displaystyle H=A_{0} \frac{1-\frac{s}{s_{z}}}{\left( 1-\frac{s}{s_{p_{1}}} \right)\left( 1-\frac{s}{s_{p_{2}}} \right)}$
$$
\begin{flalign}
 \phi(\omega) &=-\arctan\left( \frac{\omega}{s_{z}} \right)+\arctan\left( \frac{\omega}{s_{p_{1}}} \right)+\arctan\left( \frac{\omega}{s_{p_{2}}} \right) \\
 & = -\arctan\left( \frac{\omega}{\omega_{z}} \right) -\arctan\left( \frac{\omega}{\omega_{z}} \right) -\arctan\left( \frac{\omega}{\omega_{p_{2}}} \right),\ (s_{p_{1}}, s_{p_{2}} < 0) \\
 \phi_{margin} & \approx \frac{\pi}{2}-\arctan\left( \frac{\omega_{t}}{\omega_{z}} \right)-\arctan\left( \frac{\omega_{t}}{\omega_{p_{2}}} \right) \\
 &  & 
\end{flalign}
$$
## Slew Rate
![[op_amp_slew_rate.png]]
> [!note] 
> Finite SR cause large differential voltage -> turn off one side of differential pair current


$SR = \frac{I}{C_{c}},\ (I_{max}=I) = \frac{I}{V_{OV_{1}}} \frac{V_{OV_{1}}}{C_{c}} = V_{OV_{1}}\omega_{t}$

## Common Mode Rejection Ratio
Only first stage [[Differential amplifier#Current mirror]]

## Power Supply Rejection Ratio

$\displaystyle PSRR^+ \coloneqq \frac{A_{d}}{A^+}\ (A^+\coloneqq \frac{v_{o}}{v_{dd}}) \gg$ ($V_{dd}$ don't affect circuit function)
$\displaystyle PSRR^- \coloneqq \frac{A_{d}}{A^-}\ (A^-\coloneqq \frac{v_{o}}{v_{ss}})$ 

![[op_amp_2_stage_psrr_negative.png]]
$$
\begin{flalign}
 & -g_{m_{6}}v_{ss} + \frac{v_{o}-v_{ss}}{r_{o_{6}}} + \frac{v_{o}}{r_{o_{7}}} = 0 \\
 & A^-=\frac{v_{o}}{v_{ss}}=\frac{r_{o_{7}}(g_{m_{6}}r_{o_{6}}+1)}{r_{o_{7}}+r_{o_{6}}} \\
 & PSRR^- = \frac{g_{m_{1}(r_{o_{2}}|r_{o_{4}})g_{m_{6}}(r_{o_{6}}|r_{o_{7}})}}{\frac{r_{o_{7}}(g_{m_{6}}r_{o_{6}}+1)}{r_{o_{7}}+r_{o_{6}}}} \\
 &  & 
\end{flalign}
$$
