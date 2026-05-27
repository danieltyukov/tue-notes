---
modified: Monday, January 1st 2024, 21:17:43
---
# Op-amp

![6B781FDF-4371-478A-A8E6-D662BD764AD4.jpeg|500](6B781FDF-4371-478A-A8E6-D662BD764AD4.jpeg)

![Untitled](Spaces/Study/EE/Op-amp/Untitled.png)

$V_{out} = G * (V_+ - V_-), \\ 1.\ G \approx \infty \\ 2.\ R_{in} \approx \infty, \ R_{out} \approx 0 \\ \rightarrow 3.\ I_{in-} = I_{in+} \approx 0$

Negative feedback: $4.\ V_{out} = G * (V_+ - V_-) \rightsquigarrow V_+ - V_- = \frac{V_{out}}{G} \approx 0$

![Buffer](D1C69FA9-3C17-4AEC-A4BC-5F9377F04978.jpeg)

Buffer

![Inverting amplifier (G = -R2/R1)](5EF1EEAA-D053-49CC-B0EC-D56F0A699E9F.jpeg)

Inverting amplifier (G = -R2/R1)

![Noninverting amplifier ( G = (R1+R2)/R1 )](E6B1CA21-5DC0-4EB6-B010-CC0AECCB36AA.jpeg)

Noninverting amplifier ( G = (R1+R2)/R1 )

![(-) Summing amplifier ( Vout = -(R3/R1*V1 + R3/R2*V2) )](4A170DD0-E176-47F8-83C4-841E4EB37AA5.jpeg)

(-) Summing amplifier ( Vout = -(R3/R1*V1 + R3/R2*V2) )

![(-) Summing amplifier + Inverting amplifier → (+) Summing amplifier](C61778D8-640F-4FE9-96BB-009B585EF696.jpeg)

(-) Summing amplifier + Inverting amplifier → (+) Summing amplifier

![Differential amplifier|500](BCE21912-787D-4ECB-9070-77DEF9404799.jpeg)

Inv + Non-inv amp → Differential amplifier (Vout = V2*(R1 + R2)/R1 - V1*R2/R1 = R2/R1*(V1 - V2))

![Instrumentation amplifier|600](5213E9A5-442B-4AB6-BE7F-4CAD99E8F695.jpeg)

Instrumentation amplifier (Differential amplifier + Noninverting amplifier → zero impedance to avoid CMRR from mismatched resistor) + Rg for adjusting gain



![[Integrator.png|Integrator (Vout = -1/(RC)F(Vin))]]
$\displaystyle \frac{V_{in}-V}{R}=CV',\, C(V_{out}-V)'=\frac{V}{R}\to \frac{V_{in}}{R}=CV_{out}'$

(Miller) Integrator (Vout = -1/(RC)F(Vin)) ^integrator

![Differentiator (Vout = -RCVin’)](67EC7D98-F47E-4E8F-8B49-0BE9D6A80973.jpeg)

(Inv) Differentiator (Vout = -RCVin’)
[Non-inv Differentiator](https://pdfs.semanticscholar.org/45a7/9f2384a0b692f54b8b199834bd882b8f4da6.pdf)

![Logarithmic amplifier](Spaces/Study/EE/Op-amp/Untitled%201.png)

Logarithmic amplifier

![Antilog amp](Spaces/Study/EE/Op-amp/Untitled%202.png)

Antilog amp

# Positive Feedback

![Schmitt trigger|500](positive_feedback.jpeg)

Schmitt trigger (hysteresis effect Vth = +- Vs*R1/R2)

![Square wave (Astable multivibrator, T = 2R1*ln(1+2*R3/R2))](Spaces/Study/EE/Op-amp/Untitled%203.png)

Square wave (Astable multivibrator, T = 2R1*ln(1+2*R3/R2))

![Triangle + Square wave](Spaces/Study/EE/Op-amp/Untitled%204.png)

Triangle + Square wave

![Sawtooth generator (PUT with ~0.5 Vdrop set threshold to quickly discharge C)](Spaces/Study/EE/Op-amp/Untitled%205.png)

Sawtooth generator (PUT with ~0.5 Vdrop set threshold to quickly discharge C)

## Comparator

Op-amp but output circuitry is a transistor

![Inverting comparator with hysteresis](C2346FAC-E9F4-4A10-AA89-8A1ED4DC0BEE.jpeg)

Inverting comparator with hysteresis

$V_{th1} = V_s * \frac{R_2}{R_2 + R_1 || R_3} \\ 
V_{th2} = V_s * \frac{R_1||R_3}{R_1||R_3 + R_2}$

![Noninverting comparator with hysteresis](021B07DB-46A8-4FA9-8BF6-74AF6B208A59.jpeg)

Noninverting comparator with hysteresis

$V_{th1} = V_{ref} * \frac{R_2}{R_2 + R_1} \\ 
V_{th2} = V_{ref} * \frac{R_2}{R_1 + R_2} - V_s * \frac{R_1}{R_2}$

![Window comparator ](49F0697E-C888-4D28-961C-CAA100EACF7F.jpeg)

Window comparator 

# Miscellaneous

![59E321E0-0F30-4754-9AAD-AB36FA177BA1.jpeg|500](59E321E0-0F30-4754-9AAD-AB36FA177BA1.jpeg)

![V to I converter](316E130F-F2C2-495E-9287-369450D8FE86.jpeg)

V to I converter

![[+ improved source follower](Spaces/Study/EE/Op-amp/Untitled%206.png)

[+ improved source follower](https://www.notion.so/17d61d19e42d4fa4b63f5419c322ac20)

![Untitled](Spaces/Study/EE/Op-amp/Untitled%207.png)

![Hold V in C (I_in ~ 0)](Spaces/Study/EE/Op-amp/Untitled%208.png)

Hold V in C (I_in ~ 0)

![Peak detector](Spaces/Study/EE/Op-amp/Untitled%209.png)

Peak detector

![+ Buffer (eliminate diode Vdrop) → **Superdiode**](Spaces/Study/EE/Op-amp/Untitled%2010.png)

+ Buffer (eliminate diode Vdrop) → **Superdiode**

![[Push-pull + Op-amp → Eliminate crossover](Spaces/Study/EE/Op-amp/Untitled%2011.png)

[Push-pull + Op-amp → Eliminate crossover](https://www.notion.so/17d61d19e42d4fa4b63f5419c322ac20)

![Untitled](Spaces/Study/EE/Op-amp/Untitled%2012.png)

![Smoke detector (use diode as LED and photodiode](Spaces/Study/EE/Op-amp/Untitled%2013.png)

Smoke detector (use diode as LED and photodiode


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
