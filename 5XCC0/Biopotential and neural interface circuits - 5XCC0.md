# Schedule
![[5XCC0/attachments/schedule.png]]
# Health Applications
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

# Low-Power System Design
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
