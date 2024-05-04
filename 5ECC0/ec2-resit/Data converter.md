---
modified: Monday, January 1st 2024, 21:17:43
---

# DAC
Nominal Full Scale (NFS) output: max output
Full Scale (FS) output: output @ input = 11...11
Full Scale Range (FSR): max output swing

Integral Non Linearity (INL): maximum absolute deviation from conversion curve

Differential Non Linearity (DNL): maximum absolute deviation of 1 conversion step @ 1 LSB (derivative of INL)

Non monotonicity: 
Drift: changes due to external factors

Spurious-free Dynamic Range (SFDR)

![[dac_resistor_ladder.png]]
![[dac_current_steering.png]]

![[dac_charge_redistribution.png]]

# ADC

Same non-idealities as [[#DAC]] with:
- sample&hold: aliasing, time (aperture) jitter
- conversion: quantization errors

Max quantization error: $\frac{1}{2}V_{LSB}=\frac{V_{range}}{2^{n+1}}$
Quantization noise power: $\overline{V^{2}_{r}}=\frac{1}{V_{LSB}}\int_{-\frac{1}{2}V_{LSB}}^{\frac{1}{2}V_{LSB}} x^{2} \, dx = \frac{V_{range}^{2}}{2^{2n}\cdot 12}$
Max signal power: $\frac{V_{range}}{2\sqrt{ 2 }}^{2}=\frac{V_{range}^{2}}{8}$
SQNR (Signal-to-Quantization-Noise-Ratio): $\frac{P_{signal}}{P_{q.error}}=\frac{\frac{V_{range}^{2}}{8}}{\frac{V_{range}^{2}}{2^{2n}\cdot 12}}=3\cdot 2^{2n-1}=6.02n+1.76 [dB]$

Aperture jitter: error $\Delta t$ in sampling moment -> $\Delta v_{in,max}\approx \Delta t\cdot \left.\frac{ d v_{in} }{ d t }\right|_{max}=\frac{V_{range}}{2}\omega_{max}\cdot \Delta t$
$v\omega_{max}\cdot\Delta t< \frac{1}{2} \frac{V_{range}}{2^n}\to \Delta t < \frac{1}{2^n\omega_{max}}$

D: digital code
![[adc_single_slope.png|%]]
$@t = DT_{clk}: V_{in}=V_{ref} \frac{t}{RC}\to D=\frac{V_{in}}{V_{ref}} \frac{RC}{T_{clk}}$

![[adc_dual_slope.png|%]]
$D=\frac{N_{2}-N_{1}}{N_{1}}=\frac{V_{in}}{V_{ref}}$

![[adc_counter.png|%]]

![[adc_tracking.png|%]]
