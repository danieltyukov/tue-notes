# Schedule
![[5XCC0/attachments/schedule.png]]
# Health Applications
![[5XCC0-01 Health Applications.pdf]]

>[!NOTE] Formulas
> **Electrode Capacitance**  
> $C = \varepsilon_0 \varepsilon_r \cdot \frac{A}{d}$
>
> **Impedance of a Capacitor**  
> $Z = \frac{1}{2\pi f C}$
>
> **Amplifier Gain (AC Coupling)**  
> $A_0 = \frac{C_1}{C_2}$
>
> **Cut-off Frequency (AC Coupling)**  
> $f_c = \frac{1}{2\pi R C_2}$
>
> **Input Impedance (Capacitive)**  
> $Z_{in} = \frac{1}{sC_1}$
>
> **Signal Attenuation due to Impedance**  
> $V_+ = V_a \cdot \frac{Z_{in}}{Z_{ETI} + Z_{in}}$  
> $V_- = V_b \cdot \frac{Z_{in}}{Z_{ETI} + Z_{in}}$
>
> **CMRR (Common-Mode Rejection Ratio)**  
> $CMRR = 20 \log_{10} \left( \frac{A_d}{|A_c|} \right)$  
> $V_{out} = A_d(V^+ - V^-) + \frac{1}{2}A_c(V^+ + V^-)$
>
> **CMRR due to Electrode Mismatch (Approx.)**  
> $CMRR \approx 20 \log_{10} \left( \frac{Z_{in}}{\Delta Z_{ETI}} \right)$
>
> **Dynamic Range**  
> $DR = 20 \log_{10} \left( \frac{V_{max}}{V_{min}} \right)$
>
> **1/f Noise Trend**  
> $S(f) \propto \frac{1}{f}$
>
> **Voltage Divider for Interference Sensitivity**  
> $V_{if2} = V_{if} \cdot \frac{Z_{cable}}{Z_{cable} + Z_{if}}$
>
> **Transfer Function for Capacitive Coupling Interference**  
> $|V_{if2}| = \left| \frac{V_{if} \cdot sC_{if} Z_{out}}{sC_{if} Z_{out} + 1} \right|$
> 
> **IRN**
> Adding them in RMS: $\sqrt{ 10^2+\left( \frac{70}{10} \right)^2+\left( \frac{120}{10} \right)^2 }$ After amplifier the filter and ADC see factor of 10 from amplifier.

## Other
![[biopotential interface.png|300]]![[electrode tissue interface (eti).png|300]]

>[!NOTE] Electrode types
>**Gel:** galvanic connection: lowest and reliable impedance -> skin prep.
>**Dry:** higher less reliable impedance -> no skin prep
>**Capacitive:** galvanic isolated electrode (capacitive coupling): highest impedance but best comfort.

**Measurement challenges:** small signal amplitudes, large ETI impedances, large disturbances, close to DC information needed

![[required gain.png|500]]
**Dealing with small signal:** high gain required for amplification, since the signal of interest is usually ($\mu V\text{ or }mV$). But **filters and ADCs** most efficient when signals large ($100's mV\text{ or V level}$). We need a trade-off:
- Minimum signal amplitude should be detectable by the system. (at ADC).
- Maximum signal, interference, DC, etc., should not saturate the system.

![[input referred noise.png|500]]
- electronics add random noise (**thermal noise, 1/f noise, quantization noise**).
- ETI, environment and tissue add noise.
- IRN (input-referred noise): sensitivity of system: **should be smaller than smallest signal you want to detect**.

![[ETI impedance.png|500]]

**ETI Impedance:** $C_{d}=\epsilon_{0}\epsilon_{r} \frac{A}{d}\text{ and }R=\rho\frac{ l}{A}$ where 
$\epsilon \text{ is permitivity and }\rho \text{ is resistivity}$
$A\text{: area, }d\text{: seperation distance, }l\text{: thickness of conductive path}$
$\epsilon_{0}=8.854 [pF/m]$
![[impedance reminder.png|300]]

![[EEG amplification.png|150]]
maximizing without saturation of amplifier (accounting for interference and disturbances): $A_{max}\leq \frac{V_{\text{output range,pp}}-V_{\text{interferance,pp}}}{V_{\text{signal,pp}}+V_{\text{disturbance,pp}}}$

![[powerline interference.png|400]]

![[common mode amplifier.png|150]]
**Common-mode Rejection Ratio (CMRR):** $V_{out}=A_{d}\left( V_{+}-V_{-}\right)+ \frac{1}{2}A_{c}(V_{+}+V_{-})\text{ where }A_{d}:\text{ differential gain and }A_{c}:\text{ common mode gain (ideally 0)}$
$CMRR=20\log_{10}\left( \frac{A_{d}}{|A_{c}|} \right)$
There are various (slight) differences in CMRR definitions.
CMRR looks at small signal behavior. If CM disturbance is large, amplifier might **saturate,** and the small signal model does not hold.
$v_{cm = \frac{1}{2}(v_{1}+v_{2})}\text{ and }v_{diff}=v_{1}-v_{2}$

![[impact finite cmrr amplifier.png|500]]
EEG signal (differential): $V_{EEG,out}=A_{d} \cdot V_{EEG,in}=400 \times 100\mu V=40mV$
Power-line interference (common-mode): $V_{PL,out}=A_{c} \cdot V_{PL,in}=0.4 \times 100mV=40mV$
$V_{out}=80mV_{pp}$
So we need enough dynamic range to accommodate both the signal/disturbance without saturation.

![[impact electrode mismatch and input impedance.png|500]]

![[motion artificats, interference.png|200]]
large dynamic range needed, spatial discrimination, frequency-domain filtering, time selection, advanced dsp.

![[dynamic range of system.png|500]]
dynamic range: $20\log_{10}\left( \frac{V_{max}}{V_{min}} \right)$ the **voltages must be same unit!**
$V(t)=A\sin(2\pi ft)\text{ where }V_{pp}=2A\text{ and }V_{rms}=\frac{A}{\sqrt{ 2 }}$
$V_{rms}=\frac{V_{pp}}{2\sqrt{ 2 }}$ to make sure that the voltages are same unit.
>[!NOTE] CMRR to Common-Mode Gain - Multiple differential contibutions
>common-mode interference: $V_{CM,pp}$ and CMRR given.
>eg: $CMRR:60=20\log_{10}\left( \frac{A_{d}}{A_{c}} \right)\to \frac{A_{d}}{A_{c}}=1000$
>since we care about **input voltage contribution** we don't need exact gain values.
>**CM suppression factor = 1000**
>if $V_{CM,pp}=100mV_{pp}$ then $V_{\text{CM,differential}}=\frac{100mV_{pp}}{1000}=0.1mVpp$
>
>if we have multiple differential contributions like EEG signal, disturbance signal, converted CM interference: $V_{total,pp}=\text{all of them added }mV_{pp}$

![[interference sensitivity.png|500]]
$Z_{cable}=Z_{in}//Z_{out}\text{ usually: }Z_{in}\gg Z_{out}\to Z_{cable}\approx Z_{out}\to V_{if2}=\frac{V_{if} \cdot Z_{cable}}{(Z_{cable} + Z_{if})}$

![[close to dc information.png|500]]

>[!NOTE] AC coupling & DC Coupling
>![[ac coupling circuit.png|200]]
>AC coupling should be before amplification, otherwise saturation:
>- Gain: $A_{0}=\frac{C_{1}}{C_{2}}$
>- Cut-off frequency: $f_{c}=\frac{1}{2\pi RC_{2}}$
>- $Z_{in}=\frac{1}{\omega C_{1}}$
>  signal attenuation: $20\log_{10}\left( \frac{Z_{in}}{Z_{in}+Z_{EFI}} \right)$
>
>Trade-off:
>- For large $Z_{in}\to C_{1}$ small
>- For low $f_{c}$, high gain $A_{0}\to C_{1}$ large
>  
>![[dc coupling.png|400]]
>
>Assume we have a DC coupled amplifier. Due to electrode mismatch, the half-cell potentials result in a differential DC level of up to 100mV. The signal of interest is 400µV. The amplifier has a 1V output range.
>![[dc coupling example.png|400]]
>![[max gain example.png|400]]

![[1f noise.png|300]]
- 1/f noise (flicker noise) has a power-spectral density (PSD) that is inversely proportional to the frequency 
- ExG signals are at low frequencies too 
- Often the 1/f noise is dominant compared to white noise sources

**Can look at slides for example details of health applications**

# Low-Power System Design
## Summary
![[5XCC0-02 Low-Power System Design.pdf]]

> [!NOTE] Formulas
> 
> Power vs bandwidth and noise for analog (amp):  
>   $P \propto BW$  
>   $V_{irn}^2 \propto \frac{1}{P}$
> 
> Noise Efficiency Factor (NEF):  
>   $\mathrm{NEF} = V_{irn} \sqrt{\frac{2 I_{BIAS}}{\pi V_t 4kT \cdot BW}}$
> 
> Power vs DR for ADC (mixed-signal):  
>   $P \propto BW$  
>   $DR \propto \frac{1}{V_{irn}} \propto \sqrt{P}$  
>   $DR_{dB} \propto 10 \log_{10}(P)$
> 
> Schreier Figure of Merit (FOMS):  
>   $\mathrm{FOMS} = DR_{dB} + 10 \log_{10}\left(\frac{BW}{P}\right)$
> 
> Dynamic Range (general):  
>   $DR = \frac{V_{rms,\ max}}{V_{irn}}$  
>   $DR_{dB} = 20 \log_{10}\left(\frac{V_{rms,\ max}}{V_{irn}}\right)$
> 
> DR due to quantization (digital):  
>   $SQNR_{dB} = DR_{dB} = 6.02N + 1.76$
> 
> Effective Number of Bits (ENOB):  
>   $DR_{actual,\ dB} = 6.02 \cdot \mathrm{ENOB} + 1.76$  
>   $\mathrm{ENOB} = \frac{DR_{actual,\ dB} - 1.76}{6.02}$
> 
> Quantization noise (uniform distribution):  
>   $\sigma^2 = \int_{-0.5}^{+0.5} x^2 dx = \frac{1}{12}$  
>   $\sigma = \frac{1}{\sqrt{12}}$
> 
> Input/Output referred noise:  
>   $V_{orn} = A \cdot V_{irn}$
> 
> Total input-referred noise (cascaded blocks):  
>   $V_{irn, total} = \sqrt{V_{irn1}^2 + \left(\frac{V_{irn2}}{A}\right)^2}$
>   
>  Input-referred quantization noise (ADC):  
> $V_{\text{IRN,q}} = \frac{1/\sqrt{12}}{\text{Gain}}$  
>  
> FOMS estimation rearrangement:
> $P = \frac{BW}{10^{(FOMS - DR_{dB})/10}}$  
> 
> Least significant bit
> $LSB=\frac{V_{pp}}{2^{bits}}$
> RMS->$\frac{LSB}{\sqrt{ 12 }}$

## V model, Risk, Optimization
![[v model.png|300]]![[system vs block specification.png|300]]
**requirements:** what can product do.
**specification:** how design meet requirements.
**verification:** whether circuits/blocks system meet specifications/requirements.
**validation:** overall solution meets needs.
![[risk management.png|300]]![[diff level optimizations.png|300]]
![[trade offs.png|300]]![[design approach.png|300]]
$P=Const \times BW/IRN^2$ IRN: input referred noise level, BW: bandwidth, P: power consumption.
## Analog, mixed-signal, and digital circuits
![[noise, distortion, interference.png|500]]
![[signal definition.png|300]]![[noise.png|300]]
![[adding signal or noise terms.png|500]]
![[input output referred noise.png|300]]![[dynamic range.png|300]]
![[dynamic range example.png|500]]
$SNR=20\log_{10}\left( \frac{V_{signal}}{V_{noise}} \right)\implies 12=20\log_{10}\left( \frac{V_{signal}}{10 \times 10^{-6}} \right)\implies 40\mu V_{rms}$

>[!NOTE] System Analysis Example
>Signal -> Amplifier (gain = 100) → Filter (gain = 1) → ADC
>
>$V_{IRN_{total}}=\sqrt{ (10\mu V_{rms,amp})^2 +\left( \frac{1mV_{rms,adc}+0.5mV_{rms,filter}}{100} \right)^2}$.
>
>input range of the system would be the most severe limit: $20mV_{pp,amp}, \frac{2.4V_{pp,filter}}{100}, \frac{1.8V_{pp,adc}}{100}$ in this case would be $18mV_{pp}$.
>
>$DR=20\log_{10}\left( \frac{V_{max}}{V_{min}} \right)\to \text{ where } \frac{V_{max}}{V_{min}=V_{IRN_{total}}}=\frac{18mV_{pp}/(2\sqrt{ 2 })}{15V_{rms}}$

![[analog, mixed, digital signals.png|300]]![[analog vs digital.png|300]]

![[direct range of SQNR of digital signal.png|500]]
$SQNR_{dB}=6.02N+1.76$

![[ADC resolution and DR.png|500]]
**ENOB** is the effective number of bits (or effective resolution) including the effects of quantization noise and circuit noise: ideally equal to N, but in practice smaller.

>[!NOTE] ADC Resolution and DR
>$DR_{digital}=6.02N+1.76=62dB$
>levels/codes: $2^N$
>
>gain of ADC from input voltage to output code: $\frac{codes}{\text{input range }V_{pp}}$.
>
>$IRN=\frac{ORN}{gain}$ where $ORN=\frac{1}{\sqrt{ 12 }}$ RMS value quantization noise
>
>$ENOB=(DR_{actual}-1.76)/6.02=\dots bits$

![[trade offs analog block amplifier.png|500]]
![[trade offs mixed signal block.png|500]]
![[trade offs digital block.png|500]]
The lower the **NEF** (closer to unity) the better.
Noise Efficiency Factor (NEF): $V_{irn}\sqrt{ \frac{2 \cdot I_{BIAS}}{\pi \cdot V_{t} \cdot 4kT \cdot BW} }$

![[analog vs digital-1.png|500]]
![[system budget.png|500]]
![[effect of gain on noise and power consumption.png|500]]

![[solving for series amplifier.png|300]]![[part2.png|300]]

**Models of power and performance in amplitude/frequency** 
	**Frequency:** analog & digital scale similar 
	**Amplitude:** analog favorable for low DR, digital favorable for high DR

# Electronics Fundamentals
![[5XCC0-03 Electronics Fundamentals.pdf]]

> [!NOTE] Formulas  
> **Sub-threshold region (MOSFET):**  
> $I_{DS} = I_0 \cdot \exp\left(\frac{K_s V_{GS}}{\Phi_t}\right)$  
>  
> **Above-threshold, Linear mode (MOSFET):**  
> $I_{DS} = \mu_n C_{ox} \frac{W}{L} \left[(V_{GS} - V_{th}) V_{DS} - \frac{1}{2} V_{DS}^2\right]$  
>  
> **Above-threshold, Saturation mode (MOSFET):**  
> $I_{DS} = \frac{1}{2} \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{th})^2$  
>  
> **Thermal voltage:**  
> $\Phi_t = \frac{kT}{q}$  
>  
> **Transconductance (gm):**  
> Sub-threshold:  
> $g_m = \frac{K_s}{\Phi_t} I_{DS} \approx 27 I_{DS}$  
>  
> Above-threshold:  
> $g_m = \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{th}) = \sqrt{2 \mu_n C_{ox} \frac{W}{L} I_{DS}}$  
>  
> **Efficiency ratio:**  
> Sub-threshold:  
> $\frac{g_m}{I_{DS}} = \frac{K_s}{\Phi_t} \approx 27$  
>  
> Above-threshold:  
> $\frac{g_m}{I_{DS}} = \sqrt{\frac{2 \mu_n C_{ox} \frac{W}{L}}{I_{DS}}}$  
>  
> **Shot noise (current):**  
> $S_I^2(f) = 2qI$  
>  
> **Thermal noise (resistor):**  
> Current PSD:  
> $S_I^2(f) = 4kTG$  
> Voltage PSD:  
> $S_V^2(f) = 4kTR$  
>  
> **Noise power (bandwidth $\Delta f$):**  
> Current noise:  
> $I_{n,rms}^2 = \Delta f \cdot S_I^2(f)$  
> Voltage noise:  
> $V_{n,rms}^2 = \Delta f \cdot S_V^2(f)$  
>  
> **Integrated noise amplitude:**  
> $I_{n,rms} = \sqrt{\Delta f} \cdot S_I(f)$  
> $V_{n,rms} = \sqrt{\Delta f} \cdot S_V(f)$  
>  
> **Noise at MOS input (sub-threshold):**  
> $S_{I}^2(f) = 2qI_{DSAT}$  
> $S_{V,g,n}^2(f) = \frac{S_I^2(f)}{g_m^2} \approx \frac{kT}{9 I_{DS}} \approx \frac{4kT \cdot \frac{2}{3}}{g_m}$  
>  
> **Noise at MOS input (above-threshold):**  
> $g_m \propto \sqrt{I_{DS}}$  
> $S_I^2(f) = \left(4kT \cdot \frac{2}{3}\right) g_m$  
> $S_{V,g,n}^2(f) \approx \frac{4kT \cdot \frac{2}{3}}{g_m}$  
>  
> **1/f noise:**  
> Sub-threshold:  
> $S_I^2(f) = \frac{K I_{DS}^2}{f}$  
>  
> Above-threshold:  
> $S_I^2(f) = \frac{K I_{DS}}{f}$  
>  
> General:  
> $S_I^2(f) \propto \frac{g_m^2}{f}$  
>  
> **Voltage divider ratio:**  
> $V_{out}/V_{in} = \frac{R_2}{R_1 + R_2}$  
>  
> **Effective resistance:**  
> $R_{eff} = \frac{R_1 R_2}{R_1 + R_2}$  
>  
> **Low-pass filter cutoff frequency:**  
> $f_{3dB} = \frac{1}{2\pi R_{eff} C}$  
>  
> **Sampled noise power (switched capacitor):**  
> $P_{n,out} = \frac{kT}{C}$  
>  
> **SNR (in dB):**  
> $SNR = 10 \log_{10} \left( \frac{P_{signal}}{P_{noise}} \right)$  
>  
> **Small signal gain of differential pair:**  
> $A_0 = g_m r_{out}$  
>  
> **Noise output of differential amplifier:**  
> $v_{n,out}^2(f) = \left(2 \cdot 2qI_{DS} + 2 \cdot 4kT/r_{out} \right) \cdot r_{out}^2$  
>  
> **Input-referred noise:**  
> $v_{n,in}^2(f) = \frac{v_{n,out}^2(f)}{A_0^2}$

## other
**diffusion current:** $I_{ds}=I_{0}\exp(K_{S}V_{gs}/\Phi_{t})$
**drift current:** $I_{ds}=\frac{1}{2} \mu_{n}C_{ox} \frac{W}{L}(V_{gs}-V_{th})^2$

$\Phi_{t}=kT/q\text{ where }4\Phi_{t}\approx100mV\text{ and in such subthreshold behaviour saturation is: }V_{ds}>4\Phi_{t}$.
In saturation the current $I_{ds}$ is constant since no longer depends on $V_{gs}$
![[saturation above threshold.png|300]]![[saturation below threshold.png|300]]


- **trans-conductance efficiency:** $\frac{g_{m}}{I_{ds}}$ the ration of trans-conductance to drain current, tells **how much gain** you get **per unit of current**. Which is power efficiency.
- It is constant in sub-threshold -> why that mode operation is great for low power electronics.
- Increasing $\frac{W}{L}$ improves performance in strong inversion mode.


signal power: $\frac{1}{2}A^2$
$P_{noise}=V_{n}^2(f) \cdot BW$
$V_{n,rms}=\sqrt{ P_{noise} }$
$SNR=10\log_{10}\left( \frac{P_{signal}}{P_{noise}} \right)$ not rms values

noise power spectral density: $V_{n}^2(f)=4kTR[V^2/Hz]$
total integrated noise power: $V_{n,out,rms}^2=\frac{kT}{C}$

$g_{m}=\frac{I_{DS}}{nV_{T}}$

![[resistor noise.png|500]]
![[sub threshold noise, gain and power.png|500]]
![[adding noises.png|500]]
![[basic differential pair amplifier.png|500]]
# Amplifiers and Filters
![[5XCC0-04 Amplifiers and Filters.pdf]]

>[!NOTE] Formulas
> - Voltage amplifier: $V_{out} = A \cdot V_{in}$
> - Transconductance amplifier: $I_{out} = G_m \cdot V_{in}$
> - Current amplifier: $I_{out} = A \cdot I_{in}$
> - Transimpedance amplifier: $V_{out} = Z \cdot I_{in}$
> - TIA transfer function (ideal): $\frac{v_{out}}{i_{in}} = -\frac{R_f}{1 + sCR_f}$
> - TIA with op-amp gain $A$: $\frac{v_{out}}{i_{in}} = \frac{R_f}{1 + \frac{sCR_f}{A}}$
> - Transconductance amplifier: $i_{out} = g_m v_{in}$, $g_m = \frac{K_s}{\Phi_t} \cdot \frac{1}{2}I_B$
> - Input-referred noise OTA: $V_{n}^2(f) = \frac{4kT}{9I_B}$
> - CS voltage amplifier gain: $A = -g_{m1} \cdot (r_{o1} \parallel r_{o2})$
> - Inverter-based voltage amplifier gain: $A = -(g_{m1} + g_{m2}) \cdot (r_{o1} \parallel r_{o2})$
> - Input-referred noise CS VA: $V_n^2(f) = \frac{I_{n1}^2(f) + I_{n2}^2(f)}{g_{m1}^2}$
> - Input-referred noise INV VA: $V_n^2(f) = \frac{I_{n1}^2(f) + I_{n2}^2(f)}{(g_{m1} + g_{m2})^2}$
> - Positive feedback gain: $A_{cl} = \frac{A_0 R_2}{R_1 + R_2 - A_0 R_1}=1+\frac{R_{2}}{R_{1}}$
> - Condition for stability: $R_1 + R_2 - A_0 R_1 > 0$
> - Input impedance with positive feedback: $Z_{in} = \infty$ when $R_x = R_2 - R_1$
> - Capacitive amplifier gain: $\frac{C_1}{C_2}$
> - Gm-C filter time constant: $\tau = \frac{C}{G_m}$
> - Gm-C 1st-order LPF: $H(s) = \frac{1}{s\tau + 1}$
> - $\tau=\frac{1}{2\pi f}$
> - Gm-C 2nd-order LPF: $H(s) = \frac{1}{\tau_1 \tau_2 s^2 + \tau_1 s + 1}$
> - Gm from bias current (subthreshold): $G_m = \frac{K_s}{\Phi_t} \cdot \frac{1}{2} I_B$
> - Noise in Gm-C filters: $P_{noise} \propto \frac{kT}{C}$

## Amplifier Types

>[!NOTE] Concepts to be familiar with
>- Differential pair 
>- Current mirror 
>- Common-mode, differential-mode 
>- Common-mode feedback 
>- Open-loop, closed-loop, stability, phase margin

![[amplifier types.png|300]]![[amplifier types-1.png|300]]
![[photodiodes.png|300]]
### Transimpedance Amplifiers
![[transimpedance amplifier.png|400]]
### Transconductance Amplifiers
![[transconducatance amplifier.png|400]]
### Voltage Amplifiers
![[common source and voltage amplifiers.png|400]]
$\text{Gain: }A=-g_{m_{1}}\cdot(r_{o1} //r_{o2})\text{ and Input-referred noise: }V_{n}^2(f)\{I_{n1}^2(f)+I_{n2}^2(f)\}/g_{m1}^2$
The reason for small signal model **not** having $g_{m2}V_{B}$ is because in small signal model $v_{B}\text{ and }v_{DD}\text{ are both = }0$ so $v_{GS}=0$ so there is no current, so there is no gain. The top part basically just acts as a resistor in small signal model, so we only consider $r_{o2}$.

![[inverter-based voltage amplifier.png|400]]
$\text{Gain: }A=-(g_{m1}+g_{m2}) \cdot(r_{o1}//r_{o2})\text{ and Input-referred noise: }V_{n}^2(f)=\{I_{n1}^2(f)+I_{n2}^2(f)\}/(g_{m1}+g_{m2})^2$
More gain (about 2x) and lower input-referred noise power spectral density (about 4x) compared to CS VA.
## Advanced Amplifier Techniques

>[!NOTE] Low-Voltage Analog Design
>- Each transistor needs a certain $V_{DSAT}\to$
>	- Minimize number of stacked transistors
>	- Use sub-threshold biasing (lower $V_{DSAT}$)
>- Use cascaded stages rather than cascoded transistors to increase gain.
>- Increase DC gain by positive feedback.

![[positive feedback loops.png|300]]![[enhance gain with positive feedback.png|300]]
$V_{out}=A_{0}(V_{+}-V_{-})\text{ so closed loop gain: } A_{cl}=\frac{V_{out}}{V_{in}}=A_{0} \frac{R_{2}}{[R_{1}+R_{2}-A_{0}R_{1}]}\text{ only stable when }R_{1}+R_{2}-A_{0}R_{1}>0\text{ and gain can be }A_{0}>0$
negative feedback: $|A_{cl}|<A_{0}$ and positive feedback: $|A_{cl}|>A_{0}$

>[!NOTE] Positive vs Negative Feedback Amplification
>- **Positive feedback** entails adding the output of a function or process to its input. **Negative feedback** is subtracted from the input instead of being added.
>- The effect, generally, is that positive feedback causes the output, or its amplitude, to grow without bound or until a saturation level is reached.
>- Another purpose for **positive amplification** is to enhance impedance. So either increase gain or enhance impedance.

![[positive feedback to enhance impedance.png|400]]
$V_{out}=\frac{R_{2}}{R_{1}}\cdot V_{in}\text{ the input impedance: }Z_{in}\approx2R_{1}\text{ (differential)}$
With positive feedback, $Z_{in}$ can be increased... theoretically can be increased to infinity but that's impractical. for $Z_{in}=\infty \text{ the }I_{in}=0=0.5V_{in}/R_{1}(0.5V_{in}-0.5V_{out})/R_{x}=0$:
![[increasing impedance to infinity.png|200]]
$I_{in}=I_{R1}+I_{{Rx}}\text{ where }I_{R1}=\frac{0.5V_{in}}{R_{1}}\text{ and } \frac{I_{Rx}(0.5V_{in}-0.5V_{out})}{Rx}$
$\text{since: }V_{out}=\frac{R_{2}}{R_{1}}V_{in}\text{ leads to }R_{x}=R_{2}-R_{1}$

![[capacitively coupled amplifiers.png|300]]
![[chopping amplifier.png|300]]![[chopping amplifier-1.png|300]]
[Chopper (electronics) - Wikipedia](https://en.wikipedia.org/wiki/Chopper_(electronics)#:~:text=Chopper%20amplifiers,-One%20classic%20use&text=A%20chopper%20circuit%20is%20used,DC%20signals%20can%20be%20amplified.)
****A chopper circuit is used to break up the input signal so that it can be processed as if it were an AC signal, then integrated back to a DC signal at the output**. In this way, extremely small DC signals can be amplified.*
## $G_{m}-C$ Filters
![[filters.png|400]]
- [Passive RLC](https://en.wikipedia.org/wiki/RLC_circuit) for high $f$ requires very large passive RLC values so cant be used on integrated circuits.
- [Opamp-RC](https://www.electronics-tutorials.ws/filter/filter_5.html)
- [OPAMP-Switched-capacitor](https://en.wikipedia.org/wiki/Switched_capacitor)
- [Mosfet-RC](https://electronics.stackexchange.com/questions/76037/designing-a-mosfet-circuit-for-low-pass-filtered-pwm-operation-and-with-saftey-c)

![[Gm-C filters.png|400]]
![[2nd order Gm-C filter.png|400]]
![[higher order gm-c filter.png|300]]![[noise in gm-c filter.png|300]]

# Digital. ADCs, and Layout
![[5XCC0-07 Digital, ADCs, and Layout.pdf]]

>[!NOTE] Formulas
> 
> **Dynamic Power Consumption**  
> $P_{dyn} = f_{switch} \cdot C_L \cdot V_{DD}^2$  
> $E = C_L \cdot V_{DD}^2$
> 
> **Quantization noise (rms):**
>$V_{q,rms}=\frac{V_{FS}=V_{signal,pp}}{\sqrt{ 12 } \cdot 2^N}$
> 
> **Total Power Consumption**  
> $P_{total} = P_{dyn} + P_{short} + P_{leakage}$
>
> **Average Power from Simulation**  
> $P = \frac{1}{T} \int_0^T V_{DD} \cdot I_{supply}(t)\,dt$
>
> **Dynamic IR Drop**  
> $V_{drop,peak} = I_{peak} \cdot (R_1 + R_2)$  
> $V_{drop,avg} = I_{avg} \cdot (R_1 + R_2)$  
> $\Delta V_{dec} = \frac{Q_{peak}}{C_{dec}}$
>
> **ADC Parameters**  
> $T_s = \frac{1}{f_s}$
>
> **ADC Resolution / Dynamic Range**  
> $DR_{ideal,dB} = 6.02N + 1.76$  
> $DR_{actual,dB} = 6.02 \cdot ENOB + 1.76$
>
> **Nyquist Criterion**  
> $BW \leq \frac{1}{2}f_s$
>
> **SAR ADC Voltage Step**  
> $\Delta V_{out} = \frac{C_i}{C_{sum}} \cdot V_{FS}$
>
> **Capacitor Array for SAR ADC**  
> $C_i = 2^i \cdot C_0$  
> $C_{sum} = 2^{N-1} \cdot C_0$
>
> **Parasitic Impact on Full-Scale Range**  
> $\Delta V_{out} = \frac{C_i}{C_{DAC} + C_p} \cdot V_{FS}$  
> $FS_{new} = \frac{C_{DAC}}{C_{DAC} + C_p} \cdot V_{FS}$
>
> **Sampling Noise**  
> $P_n = \frac{kT}{C_{sum}}$ (single-ended)  
> $P_n = \frac{2kT}{C_{sum}}$ (differential)
>
> **Signal Power and SNR**  
> $P_{signal} = \frac{1}{2}V_{FS}^2$  
> $\text{SNR} = \frac{P_{signal}}{P_{noise}}$
>
> **Power Consumption of DAC**  
> $E_{DAC} \propto C_{sum} \cdot V_{FS}^2$  
> $P_{DAC} \propto f_s \cdot E_{DAC}$
>
> **MIM Capacitor**  
> $C = \varepsilon \varepsilon_0 \frac{A}{d}$
>
> **Random Mismatch**  
> $\sigma_{\%} \propto \frac{1}{\sqrt{Area}}$  
> $\sigma_{offset} = \frac{2\,\text{mV}}{\sqrt{W \cdot L}}$
>
> **Systematic Gradient Offset**  
> $V_{offset} = 0.01\,\text{mV} \cdot d$
>
> **Wire Resistance and Capacitance**  
> $R = R_{\square} \cdot \frac{L}{W}$  
> $C = C_b \cdot A + C_f \cdot P$  
> $\text{bottom plate: }C_{b}(LW)\text{ finging: }C_{f}L_{9}\text{ sum of these is }C$
> $\tau = (R_{source} + R_{wire})(C_{load} + C_{wire})$
> $\tau=RC=\frac{R_{s}L}{W}(C_{b}WL+C_{f}L)$
> $R=\frac{V_{drop}}{I}$
>
> **Static IR Drop**  
> $V_{DROP} = I_{DC} \cdot (R_1 + R_2)$
> $\Delta V=\frac{Q}{C}$
> 
> **Thermal noise**
> $\frac{kT}{C_{sum}}=\text{sampling noise}^2=V_{rms}^2=$
# Acquisition of neural signals
![[5XCC0-05 Acquisition of neural signals.pdf]]

>[!NOTE] Formulas
> **High-pass filter cutoff frequency (from AC coupling):**  
> $f_{HP} = \frac{1}{2\pi RC}$
>
> **Amplifier Gain (capacitive feedback amplifier):**  
> $A_0 = \frac{C_1}{C_2}$
>
> **Low-pass cutoff frequency (in capacitive feedback):**  
> $f_{LP} \approx \frac{g_m}{2\pi C_L}$
>
> **Input-Referred Noise (IRN):**  
> $v_{IRN}^2 = \left(\frac{C_1}{C_1 + C_2}\right)^2 v_{n,OTA}^2 + v_{n,R}^2 + \frac{C_P^2}{(C_1 + C_2)^2}v_{n,C}^2$
>
> **Input Impedance (for capacitive input):**  
> $Z_{in} \approx \frac{1}{j\omega C}$
>
> **Pseudo-Resistor Effective Resistance:**  
> $R_{eq} \approx 100\ \text{G}\Omega$
>
> **Noise corner shift due to increased bias current:**  
> (not a formula, but remember that increasing bias shifts $f_c$ to a higher frequency)
>
> **Chopping Requirement:**  
> Chopping frequency $f_{chop} > f_{corner}$
>
> **Chopping Duty Cycle Requirement:**  
> Must be exactly $50\%$ to avoid DC offset in modulated signal

![[NFP acquisition system.png]]
# Stimulation of neural tissues
