![[course perspective.png]]
# Goals
1. Understand and able to apply continuous Fourier analysis to convert between time and frequency representation of signals.
2. Apply Fourier analysis to functions (periodic and not periodic) to analyze their spectrum.
3. Apply Nyquist theory to determine the required sampling frequency of a given bandlimited signal and understand the implications of said choice.
4. Apply different types of sampling methods (ideal, gating and flat top sampling) and be able to described the impact of the choice on the time and spectral properties of sampled signals.
5. Apply quantization of signals when moving from analog to digital signaling and analyze the impact of both quantization and signal to noise ration of the performance of signal transmission.
6. Understand and apply Shannon-Hartley theorem for channel capacity to establish capacity limit for real systems.
7. Understand and apply Shannon-Hartley theorem for power limited and bandwidth limited channels.
8. Understand the concept of line-coding and apply the knowledge of power spectral density for making design choices of appropriate line-coding.
9. Understand basic concept of distance between code words and error correction and detection techniques based on information theory description of a transmission problem.
10. Understand the concept of inter-symbol interference (ISI) and how it can be mitigated using spectral/temporal shaping of pulses.
11. Understand how complex waveforms can be expressed using Phasors and constellation diagrams
12. Understand the difference between base band and pass band communication systems
13. Understand the basic circuits needed for filtering pass band and base band signals
14. Recognize basic circuits used to build pass band transmitters and receivers
15. Understand the basic concept of amplitude phase and frequency modulation
16. Extract and separate the modulated signal from the mathematical representation of the signal and derive the expected spectrum for simple pure tone modulations.
17. Understand the basic principles behind the physical layer for wireless and wired (optical) transmission including losses, and different distortion mechanisms (dispersion and fading) and apply this knowledge to determine what is the most suitable physical channel required to build a communication channel.
## Bandwidth
Network Bandwidth: $B_{pcm}\geq\frac{1}{\eta}R\geq nB_{analog}$ -> Better if we have less requirement of it
$f_{s}\geq 2B$
PCM bit rate: $R=f_{s} \cdot n=\frac{n}{T}$

$\text{bit-rate: } R=\frac{n}{T}=n \cdot f_{s}$
- **Process**: Analog signal → Sampling at Nyquist rate → Quantizing into discrete levels → Encoding into binary digits.
- **Quantization Levels**: $M = 2^n$, where $n$ is the number of bits per sample.
- **Bit-rate ($R$)**: $R = n \cdot f_S$ (bits/s), where $f_S$ is the sampling frequency. $f_{s}\geq 2B$
- **Spectral Efficiency ($\eta$)**: $\eta = \frac{R}{B_{pcm}}$ (bits/s)/Hz, where $B_{pcm}$ is the bandwidth.
- **(dimensionality theorem)Minimum Bandwidth ($B_{pcm}$)**: $B_{pcm} \geq \frac{1}{2} R = \frac{1}{2} n f_S \geq {nB_{analog}}$, where $\eta$ is spectral efficiency, $B$ is the bandwidth of the analog signal, and $n$ is the number of bits per sample. (**using sinc pulses, half baud rate**)
- $\frac{1}{2}\text{ when sinc otherwise: } \frac{1}{\eta}$ ![[example of b_pcm.png|100]]
# Orthogonal basis and the Fourier transform/series
## Orthogonal Basis
$orthogonal:u \cdot v=0$; if each vector in set $length:|v|=1\implies orthonormal$
gram shcmidt: $\mathbf{u}_1 = \mathbf{v}_1, \quad \mathbf{u}_k = \mathbf{v}_k - \sum_{j=1}^{k-1} \frac{\langle \mathbf{v}_k, \mathbf{u}_j \rangle}{\langle \mathbf{u}_j, \mathbf{u}_j \rangle} \mathbf{u}_j \quad \text{for } k = 2, \ldots, n.$
## Fourier series
$\omega=\frac{2\pi}{T},f=\frac{1}{T}, \omega=2\pi f$
$e^{jk\omega t}=\cos(k\omega t)+j\sin(k\omega t)$
any periodic function may be approximated by a limited series of sines and cosine functions. 
	**Changing between two, effects phase,**
	**phase effects ptp, doesnt effect rms(power content of wave)**
	**only odd or only even components -> symmetry**
conversion between time & frequency domain
![[fourier series and fourier transform.png]]
Commonly encountered, periodic signal shapes such as rectangular, squarewave or sawtooth may be described using only one of the two base functions ($sin \text{ or }cos$), since the only differentiating factor between the two is a phase delay of $90\degree$.
![[fourier coefficients.png|200]]
$F(\omega)=\int_{-\infty}^{\infty} f(t)\cdot \cos(\omega t) \, dt \text{ or } F(\omega)=\int_{-\infty}^{\infty} f(t)\cdot \sin(\omega t) \, dt$$

$f(t) = \frac{a_0}{2} + \sum_{n=1}^{\infty} a_n \cos\left(\frac{n\pi t}{L}\right) + \sum_{n=1}^{\infty} b_n \sin\left(\frac{n\pi t}{L}\right)$

$a_n = \frac{1}{L} \int_{-L}^{L} f(t) \cdot \cos\left(\frac{n\pi t}{L}\right) dt$

$b_n = \frac{1}{L} \int_{-L}^{L} f(t) \cdot \sin\left(\frac{n\pi t}{L}\right) dt$

- Time Shift (time): $x(t - t_0) \xleftrightarrow{\mathcal{F}} e^{-j2\pi f t_0}X(f)$
- Frequency Shift (time): $e^{j2\pi f_0t}x(t) \xleftrightarrow{\mathcal{F}} X(f - f_0)$
- Time Scaling (time): $x(at) \xleftrightarrow{\mathcal{F}} \frac{1}{|a|}X\left(\frac{f}{a}\right)$
- Frequency Scaling (freq): $x\left(\frac{t}{a}\right) \xleftrightarrow{\mathcal{F}} |a|X(af)$
- Time Reversal (time): $x(-t) \xleftrightarrow{\mathcal{F}} X^*(-f)$
- Frequency Reversal (freq): $X(-f) \xleftrightarrow{\mathcal{F}} x(-t)$
- Convolution Theorem (time): $x(t) * y(t) \xleftrightarrow{\mathcal{F}} X(f) \cdot Y(f)$
- Multiplication in Time (time): $x(t) \cdot h(t) \xleftrightarrow{\mathcal{F}} X(f) * H(f)$
- Differentiation in Time (time): $\frac{d}{dt}x(t) \xleftrightarrow{\mathcal{F}} (j2\pi f)X(f)$
- Integration in Time (time): $\int_{-\infty}^{t} x(\tau)d\tau \xleftrightarrow{\mathcal{F}} \frac{X(f)}{j2\pi f} + \pi X(0)\delta(f)$

- Gibbs phenomenon: with bandwidth increase overshoot remains the same: https://www.youtube.com/watch?v=Ol0uTeXoKaU
- Fourier coefficients are numerical values that represent the **magnitude and phase** of the sine and cosine components of a periodic function when it is expressed as a Fourier series. (sometimes a negative coefficient considered in sine/cosine general wave).
- The Fourier series is a way to represent a complex periodic waveform as a combination of simple sine and cosine waves.
## Decibels
power amplification: $G=\frac{P_{out}}{P_{in}}$
$G_{dB}=10\log_{10}G=10\log_{10} \frac{P_{out}}{P_{in}}$
$G=10^{G_{dB}/10}$
power attenuation: $L=\frac{1}{G}=\frac{P_{in}}{P_{out}}$
$L_{dB}=10\log_{10}L=10\log_{10} \frac{P_{in}}{P_{out}}$
$L=10^{L_{dB}/10}$
![[sampling.png|200]]
# Sampling theory
![[sampling-1.png|200]]
![[sampling transforms.png|400]]
(t) dirac pulse --> (f) Constant amplitude full spectrum (can also be seen as infinitely wide sinc)
(t) long rect pulse --> (f) narrow sinc
(t) short rect pulse --> (f) long sinc : https://www.youtube.com/watch?v=ZcTWLwXGql0&list=WL&index=35
(t) infinitely long transmission --> (f) dirac pulse
max bandwidth frequency means the means:![[download.jpg|150]]

$\text{normalized sinc function: }sinc(t)=1(t=0)\cap \frac{\sin(\pi t)}{\pi t}(t\neq 0)$
## Sampling
https://www.youtube.com/watch?v=iQaFDpiNOlA&list=PLBlnK6fEyqRioD2C9Sa2Kf5Ms35GE8Eq1
**band-limited:** signal has non-zero frequency components only for a limited part of the frequency spectrum.
**time-limited:** signal has non-zero amplitude only for a limited part of the time
**A waveform is either time-limited or band-limited; not both**

sampling: continous to discrete time signal:
$m(t)$ **(band limited)**![[analog signal.png|100]] -->$M(\omega)$![[fourier transformed analog signal spectrum.png|100]]$\omega_{m}=$max freq ($B-bandwidth$)
(dirac comb) $c(t)=\sum^\infty_{n=-\infty}\delta(t-nT_{s})$where $\delta(t)=1$ for $t=0$, $\delta(t)=0$ for $t\neq 0$![[continuous periodic time signal.png|100]]$T_{s}=$sampling period, $\omega_{s}=\frac{2\pi}{T_{s}}=$sampling freq -->$C(\omega)=\omega_{s}\sum^\infty_{n=-\infty}\delta(\omega-n\omega_{s})$ 
sampler: $c(t)\cdot m(t)=s(t)$![[continous sample signal.png|100]]-->fourier transform: $s(\omega)=\frac{1}{2\pi}[M(\omega)*C(\omega)]$-->$S(\omega)$![[spectrum sample signal.png|100]]for no overlapping Nyquist’s sampling rate criteria: $\omega_{s}\geq 2\omega_{m}$ also must be band limited. 

now we represent continuous signal $m(t)$ in continuous samples $s(t)$ and it can be recovered if no overlapping (aliasing).
![[sampling summary.png|200]]

oversampling: Number of independent pieces of info: $N=2\omega_{m}T_{0}$
## Reconstruction
https://www.youtube.com/watch?v=rmDg3eVWT8E
$s(t)$-->LPF(low-pass-filter) $H(\omega)$![[low pass filter signal.png|100]]-->$m_{r}(t)$-->fourier transform: $M_{r}(\omega)$ then $H(\omega)=\frac{M_{r}(\omega)}{S(\omega)}$ so $M_{r}(\omega)=H(\omega)\cdot S(\omega)$![[recovered analog signal spectrum.png|100]]-->inverse fourier transform: $m_{r}(\omega)$
![[low pass filter applied on the sample signal.png|400]]
$\omega_{m}\leq \omega_{c}\leq \omega_{s}-\omega_{m}$
$m(t)=\sum^\infty_{n=-\infty}m_{n} \frac{\sin\left( \pi f_{s}\left[ \frac{n}{f_{s}} \right] \right)}{\pi f_{s}\left[ t-\left( \frac{n}{f_{s}} \right) \right]}$
# Sampling Methods (Pulse Amplitude Modulation)
## Gating (natural sampling)
Natural sampling is a method where an analog signal $w(t)$ is allowed to pass through for a certain amount of time $\tau$ , and then not allowed again
![[gating.png|400]]
$w_{s}(t)=w(t)\cdot s(t)$ or $W_{s}(f)=W(f)*S(f)$
clock with duty cycle: $d=\frac{\tau}{T_{s}}=f_{s}\tau$ can do it
$\omega_{s}(t)=\sum^\infty_{k=-\infty}\omega(kT_{s})h(t-kT_{s}) \text{ where } h(t) = \Pi\left(\frac{t}{\tau}\right) \text{ so }w_s(t) = h(t) * \left[ w(t) \sum_{k=-\infty}^{\infty} \delta(t - kT_s) \right]$
fourier series: $W_{s}(f)=d\sum^\infty_{n=-\infty}=\sin c(nd)W(f-nf_{s})$ first zero of bandwidth: $f=\frac{1}{\tau}$
![[gating sample spectrum.png|400]]
$\sin(nd)=\sin c(n\tau f)=\sin c\left( n\tau  \frac{1}{T_{s}} \right)=\sin\left( \frac{n}{3} \right)$

>$\text{absolute null bandwidth: } f=\frac{1}{\tau}$
>$f_{s}=\frac{1}{T_{s}}$
>$\text{duty cycle: } d=\frac{\tau}{T_{s}}=f_{s}\tau$
## Flat-top sampling (instantaneous sampling)
In flat-top sampling, the value of the analog signal is captured at the sampling instant $kT_{s}$ and held constant for the duration of the sample pulse $\tau$
Unlike gated sampling, which results in a sampled signal with varying amplitude during the sample time, Flat-top sampling produced a single voltage value for the duration of the sampling pulse duration. This makes it a practical method since the fixed value can be easily converted into a digital value.
![[flat top sampling.png|400]]
$w_{s}(t)=\sum^\infty_{k=-\infty}\omega(kT_{s})h(t-kT_{s})$ where $h(t)$ squere pulse
fourier series: $W_{s}(f)=\frac{1}{T_{s}}|H(f)|\sum^\infty_{k=-\infty}|W(f-kf_{s})|$ where $H_f=d\sin c(\tau f)$
![[flat top sampling-1.png|400]]
some high-frequency components might be altered, due to the filtering effect of flat-top sampling. This is known as aperture effect.
- resolved by narrowing pulse width $\tau$
- equalization filter with transfer func $\frac{1}{H(f)}$ where $H(f)$ e transfer function of flat-top sampling
# Digitization
##  Pulse code modulation (PCM)
![[quantization.png|200]]
$\text{bit-rate: } R=\frac{n}{T}=n \cdot f_{s}$
- **Process**: Analog signal → Sampling at Nyquist rate → Quantizing into discrete levels → Encoding into binary digits.
- **Quantization Levels**: $M = 2^n$, where $n$ is the number of bits per sample.
- **Bit-rate ($R$)**: $R = n \cdot f_S$ (bits/s), where $f_S$ is the sampling frequency. $f_{s}\geq 2B$
- **Spectral Efficiency ($\eta$)**: $\eta = \frac{R}{B_{pcm}}$ (bits/s)/Hz, where $B_{pcm}$ is the bandwidth.
- **(dimensionality theorem)Minimum Bandwidth ($B_{pcm}$)**: $B_{pcm} \geq \frac{1}{2} R = \frac{1}{2} n f_S \geq {nB_{analog}}$, where $\eta$ is spectral efficiency, $B$ is the bandwidth of the analog signal, and $n$ is the number of bits per sample. (**using sinc pulses, half baud rate**)
- $\frac{1}{2}\text{ when sinc otherwise: } \frac{1}{\eta}$ ![[example of b_pcm.png|100]]
![[quantization and encoding.png|400]]
### PCM Bandwidth Overview
- **Importance**: PCM signals (binary waveforms) must fit within channel bandwidths to avoid intersymbol interference (ISI), which corrupts data.
- **Dependency**: PCM bandwidth ($B_{pcm}$) depends on bit rate ($R$) and pulse shape (line coding) $\eta$.
- **Minimum Bandwidth**: For no aliasing, $f_S \geq 2B_{analog}$, where $B$ is the analog signal bandwidth.
- **Implication**: PCM requires at least $n$ times the bandwidth of the input analog signal.

- With ideal impulse sampling (meeting Nyquist criteria) and sinc interpolation, a signal can be reconstructed perfectly. And the sinc pulse is a bandlimited signal with bandwidth Bpcm. Hence that leads to the inequality whereas using waveforms other than sinc pulse would have higher frequency components
![[bpcm.png|300]]
## Signal-to-noise ratio
not mentioned in the reader: $SNR_{input}=\frac{P_{signal}}{P_{noise}}=\frac{P}{N_{O}\cdot n\cdot f_{s}}=\frac{SNR_{analog}}{\text{Bandwidth ratio}}=Q=\sqrt{ SNR_{in} }=SNR_{old} \cdot n_{ratio}$
$n \uparrow\to SNR_{in}\downarrow\to P_{e}\uparrow\to SNR_{out}\downarrow\left( \text{only when }P_{e} \approx \frac{M^2}{10} \right)$

- **Quantization Noise**: Caused by rounding errors in M-step quantizer.
- **Bit errors in the recovered PCM signal:** caused by channel noise and intersymbol interference due to improper channel filtering.
- **Aliasing noise:** due to non-ideal band limitation (usually most time signals even audio ones are not fully band-limited to 40 kHz.)
![[quantization noise.png|300]]
- **compander if amplitude not uniform betters pcm performance but cant maximize snr_out but less effect of P_e. (With companding, output SNR relatively insensitive to input level)

- **Receiver Output SNR (UNIFORM)**: $SNR_{out} = \frac{M^2}{1 + 4Pe(M^2 - 1)}$, where $Pe$ is bit error probability. This equation defines the average SNR at the output of the receiver. **The M term is squared because power is proportional to voltage squared.
- **Peak SNR**: $SNR_{pkout} = \frac{3M^2}{1 + 4Pe(M^2 - 1)}$.
- $SNR_{out,db}=6.02n+a\text{ }[dB]\text{ n is the number of bits per sample and α = 4.77 dB}$
- for the peak $SNR_{out,max}=6 \cdot n$ and α = 0 for the average SNR. This equation is called the 6-dB rule --> $\text{An additional 6-dB improvement in SNRout is obtained for each bit per sample added to the PCM word}$
![[convert between dB.png|200]]![[pcm signal to noise.png|300]]
![[snr analog vs pcm.png|300]]![[snr improvement.png|300]]
## Bit-error probability $Pe$ and channel noise
![[pcm decoding.png|300]]
### General
#### Channel Noise
- **Definition**: Unwanted signals interfering with information transmission, arising from thermal noise, electromagnetic interference, and crosstalk.
- **Impact**: Corrupts transmitted data, necessitating error analysis.
#### Bit-error Probability $P_e$
- **Importance**: Measures the likelihood of transmission errors per bit.
- **Typical Rate**: Acceptable rate for digital communications is around $P_e \approx 10^{-6}$, significant in high-speed data transfer.
#### Additive White Gaussian Noise (AWGN)
- **Characteristics**:
    - **Additive**: Noise added to signal, summing their effects.
    - **White**: Constant power spectral density across frequencies.
    - **Gaussian**: Noise amplitude follows a Gaussian distribution, with power related to variance.
#### Bit-error Probability $P_{e}$ on AWGN Channels
- **Process**: Determine error likelihood based on noise characteristics and decoding thresholds.
- **Error Calculation**: Involves assessing the probability of signal values falling into incorrect decision regions, using the Q-function.

- **Purpose**: Evaluates digital system performance under noise, crucial for system design and optimization.
- **Formula**: $P_e = Q(\sqrt{ SNR_{in}})$, where SNR is signal-to-noise ratio. $Q=\sqrt{ SNR_{in} }$
- **Q-function**: Represents probability of a Gaussian tail event, $Q(x) = \frac{1}{\sqrt{2\pi}} \int_x^{\infty} e^{-\frac{u^2}{2}} du\implies P_{e}=\frac{1}{\sqrt{ 2\pi }Q}e^{-z^2/2}(\text{for Q>3})$
- **SNR**: A key determinant of $P_e$, higher SNR → lower $P_e$.
- **Application**: Essential for assessing and mitigating error rates in telecommunication systems.
![[probability of AWGN noise.png|400]]
#### Relating $SNR_{in}$ and $SNR_{out}$
- **SNR Dynamics**: The input signal-to-noise ratio ($SNR_{in}$) primarily influenced by channel noise, whereas the output signal-to-noise ratio ($SNR_{out}$) also depends on quantization and error probability.
- **Trade-offs**: Increasing resolution (bits per sample) can improve $SNR_{out}$ but may reduce $SNR_{in}$ due to wider bandwidth increases noise power.
![[snr in snr our.png|400]]
if you keep increasing bits per sample n to increase the $SNR_{out}$, at some point instead of increasing it will start to decrease: Noise Variance: $N=\sigma^2=\left( \frac{N_{O}}{2} \right)(2B_{pcm})=N_{O}B_{pcm}\implies SNR_{in}=\frac{P_{signal}}{N}=\frac{P_{signal}}{N_{O}B_{pcm}}=\frac{P_{signal}}{N_{O}\cdot n\cdot f_{s}} \propto \frac{1}{n}\text{ as }B_{pcm}=n \cdot f_{s}$
$\frac{N_{O}}{2}$ is noise spectral density used in transmission channel: (use N0/2 because we, by convention, also distribute the noise power over the negative frequencies).
**If $N_{O}$ given then $N_{O} \cdot2B_{PCM}$
$\text{attenuation: } \frac{1}{P_{signal}}$

![[higher B captures more noise.png|200]]
$SNR_{analog} =SNR_{input}=SNR_{output}= \frac{P_{signal}}{P_{noise}}$
Preference for analog could arise from its continuous nature vs. digital's discrete errors. (only case where analog can outperform digital if if you suppose a very noisy channel, which has a Pe=0.01>)

### Increasing Number of Bits
1. $B_{pcm} \geq \frac{1}{2} n f_S\text{ as R}\uparrow$ Higher Bandwidth
2. $SNR_{in} = \frac{P}{N_0B_{pcm}}$ Lower 
4. $Q=\sqrt{ SNR_{in} }$ Lower
5. $Q\propto \frac{1}{P_{e}}\implies P_e$ Higher
6. $SNR_{out}$ Lower
7. **MORE M Levels -> HIGHER CHANCE OF OVERLAP OVER THOSE LEVELS -> $P_{e}$**

Baud rate is **the measure of the number of changes to the signal**
# Digital signaling
## Vectorial representation of digital signaling
![[pcm signaling.png|200]]
- **Orthogonality Condition**: $\int_a^b \phi_n(t)\phi_m^*(t) dt = 0$ for $n \neq m$.
- **Signal Representation**: $w(t) = \sum_{k=1}^{N} w_k\phi_k(t)$.
- **Signal Reconstruction**: $w(t) = \sum_{n=n_1+1}^{n_1+N} a_n \frac{\sin(\pi f_s[t - (n/f_s)])}{\pi f_s[t - (n/f_s)]}$.
- **Orthogonal Decomposition**: Decode signal by integrating with basis function $\phi_k(t)$.
![[orthogonal decomposition.png|300]]
- **3-bit Signal Example**: $s(t) = \sum_{j=1}^{3} d_j\phi_j(t)$, with orthogonal basis $\phi_j(t)$. dimensions: **symbols**
## Multi-level signaling
- **Concept**: Multi-level signaling involves sending more than one bit per symbol, increasing data rate without requiring more bandwidth.
![[polar nrz.png|200]]![[multi level polar nrz.png|200]]
- illustrating the conversion of a digital transmission from 2 levels to 4 levels, showing that you can transmit the same amount of information in a faster time. Less bandwidth needed...

- **Levels and Bits Relationship**:
    - $L = 2^l$
    - $l = \log_2(L)$
    - Where $L$ is the number of levels per symbol, and $l$ is the number of bits per level.

- **Advantages**: Allows higher data rates and more efficient use of bandwidth.
- **Disadvantages**: More susceptible to noise, making it harder to distinguish between levels as the number of levels increases.

- **Comparison to Single-bit Transmission**:
    - Single-bit transmission (2 levels) is more robust against noise but less efficient in data rate and bandwidth usage compared to multi-level signaling.

- **Bits per Sample vs. Bits per Level**:
    - Bits per sample ($n$) refer to digitization (quantization) stage, indicating the resolution of analog to digital conversion.
    - Bits per level ($l$) refer to the line coding stage, indicating how many bits are represented by each level in a multi-level signaling scheme.
    ![[bits per sample vs bits per level.png|300]]

## Baud-rate (or Symbol rate)
- **Baud Rate ($D$)**: $D = \frac{N}{T_0}=B \cdot \eta \text{ null bandwidth}$, where $N$ is dimensions, $T_0$ is time per dimension. Number of symbols transmitted per second. $D\leq 2 \text{ it can only become worse, higher bandwidth, (2 is sinc)}$

- **Bit Rate ($R$)**: $R = lD = D\log_2(L) = \frac{N}{T_0}\log_2(L) = \frac{n}{T_0}$ [bits/s], with $L$ levels, $D$ baud rate. One symbol can represent multiple bits.
- **Binary Signaling**: For $L=2$, $R = D$.
- **Channel Capacity:** $C=B\log_{2}(1+SNR)\to \frac{bits}{sec}\to \eta_{max}=\frac{C}{B}=\log_{2}\left( 1+SNR \right)$
- **Channel Capacity (bps):** $C=2B\log_{2}(L)$
![[multilevel transmission.png|400]]

- **Bandwidth ($B$)**: $B \geq \frac{1}{2}D$. Minimum bandwidth achieved with sinc pulses.
- Dimensionality theorem states the number of orthogonal dimensions $N_D = 2BT_0$, with $B$ as bandwidth and $T_0$ as time period.
- Relationship between bandwidth $B$ and baud rate $D$: $D = \frac{N}{T_0} \leq \frac{N_D}{T_0} = 2B$.
- **Baseline wander:** occurs when the signal has a strong Low Frequency component, together with AC coupling in the system.
# Linecodes and their spectras
## Power spectral density (PSD)
https://www.youtube.com/watch?v=DoSLMEEo1Y0 : allows to analyze digital signals in frequency domain
- **PSD Concept**: PSD shows the power level at specific frequencies, similar to an EQ in audio setups.

- **Autocorrelation**: Correlation of a signal with a delayed copy of itself as a function of delay $\tau$. Key for understanding PSD. $R_{w}(\tau)$

- **PSD Formula**: PSD is the Fourier transform of the autocorrelation function. $F[R_{w}(\tau)]=P_w(f) = \lim_{T\to\infty} \frac{1}{T} |W(f)|^2$.

- **Autocorrelation in Signals**: $R(k) = \sum_{i=1}^{I} (a_n \cdot a_{n+k})_i P_i$, where $P_i$ is the probability of occurrence of the $(a_n \cdot a_{n+k})_i$ product.

- **PSD of a Random Signal**: $P_s(f) = \lim_{T\to\infty} \left( \frac{|S_T(f)|^2}{T} \right) = \frac{|F(f)|^2}{T_s} \sum_{k=-\infty}^{\infty} R(k)e^{j2\pi kfT_s}$.

- **Line Codes**: Choice of waveform for transmitting physical waveforms in the channel, affecting system performance. Types include Unipolar NRZ, Polar NRZ, Unipolar RZ, Bipolar RZ, and Manchester. 
- Symbols(which we got through encoder) -> physical waveforms.

- **sharp peak in PSD -> DC component**

**NRZ (Non-Return-to-Zero) line coding uses less bandwidth than RZ (Return-to-Zero) because NRZ represents a binary '1' with one signal level and a binary '0' with another signal level, without returning to a neutral or zero level between bits. In contrast, RZ signals return to the zero level within each bit period. This means RZ effectively doubles the number of transitions and therefore requires more bandwidth to accommodate these additional transitions. NRZ's fewer transitions result in a more bandwidth-efficient encoding scheme.**
## Unipolar NRZ
- **Concept**: Unipolar NRZ signaling uses a single power supply, switching between supply voltage (for a "1") and 0 (ground, for a "0").
- **PSD of Unipolar NRZ**: $P_{\text{unipolarNRZ}}(f) = \frac{A^2}{T_b} \sin c^2(fT_b) \left[1 + \frac{1}{T_b}\delta(f)\right]$. This formula includes a DC component due to the presence of a constant level when transmitting "1".
- **Analysis**: The power spectral density reflects how power is distributed across different frequencies for Unipolar NRZ signals, highlighting the impact of signal time base $T_b$ and the presence of a DC component in the spectrum.
![[unipolar nrz.png|200]]![[unipolar nrz psd.png|200]]
## Polar NRZ
- **Polar NRZ Transmission**: Utilizes positive and negative power supplies for signal representation. Has a weak DC term (no dc).
- **PSD Formula**: $P_{\text{polarNRZ}}(f) = \frac{A^2}{T_b} \sin c^2(fT_b)$, where $A$ is the signal amplitude, and $T_b$ is the bit duration.
![[polar nrz-1.png|200]]![[polar nrz psd.png|200]]
## Unipolar RZ
- **Unipolar RZ Transmission**: Uses a single power supply and includes a DC component. Incorporates 'Returning-to-Zero' to add synchronization information and doubles bandwidth. has clock info.
- **PSD for Fixed Duty Cycle**: $P_{\text{unipolarRZ}}(f) = \frac{A^2T_b}{16} \sin c^2\left(\frac{fT_b}{2}\right)\left[1 + \frac{1}{T_b}\sum_{n=-\infty}^{\infty} \delta\left(f - \frac{n}{T_b}\right)\right]$
- **PSD for Variable Duty Cycle**: $P_{\text{unipolarRZ}}(f) = \frac{A^2d^2T_b}{16} \sin c^2\left(\frac{f dT_b}{2}\right)\left[1 + \frac{1}{T_b}\sum_{n=-\infty}^{\infty} \delta\left(f - \frac{n}{T_b}\right)\right]$, where $d$ is the duty cycle.
![[unipolar rz.png|200]]![[unipolar rz psd.png|200]]![[polar rz.png|200]]
## Bipolar RZ
- **Bipolar RZ Transmission**: Uses positive and negative power supplies, with three possible voltage levels (positive, 0, negative). There is no DC component due to bipolar signaling.
- **PSD Formula**: $P_{\text{bipolarRZ}}(f) = \frac{A^2T_b}{4} \sin c^2\left(\frac{fT_b}{2}\right) \sin^2(\pi fT_b)$, where $A$ is the signal amplitude, and $T_b$ is the bit duration.
![[bipolar rz.png|200]]![[bipolar rz psd.png|200]]
## Manchester
- **Manchester Encoding**: Features inherent clock signal within the data stream, allowing for synchronization and error detection. A string of zeros does not result in clock signal loss. no dc component. Doesn't correct for errors. double bandwidth to polar nrz.
- **PSD Formula**: $P_{\text{Manchester}}(f) = {A^2}T_b \sin c^2(fT_b)$, where $A$ is the signal amplitude, and $T_b$ is the bit duration.
![[manchester.png|200]]![[manchester psd.png|200]]
## Power spectra for multilevel signaling
- **Transition to Multilevel Signaling**: When increasing bits per symbol ($l > 1$), PSD must be adjusted for both the signal and its spectral efficiency.
- **Symbol Rate ($D$) and PSD Conversion**:
    - Symbol rate: $D = \frac{1}{T_s} = \frac{1}{lT_b} = \frac{R}{l}$, where $T_s$ is symbol duration, $T_b$ is bit duration, and $R$ is bit rate.
    - PSD formula: $P_s(f) = \frac{\left|\left|F(f)\right|\right|^2}{T_s} \sum_{k=-\infty}^{\infty} R(k)e^{j2\pi kfT_s}$.
- **Example for 8-level Polar NRZ**:
    - For $l = 3$, $T_s = 3T_b$.
    - Adjusted PSD: $\frac{\left|\left|F(f)\right|\right|^2}{T_s} = \frac{{T_s^2 sinc^2(fT_s)}}{T_s} = 3T_b \cdot sinc^2(3T_bf)$.

## Spectral efficiency of linecodes
![[spectral eff linecodes.png|300]]![[Binary signalling waveforms.png|300]]
$\text{Unipolar RZ (50\%): }\eta=\frac{1}{2}\text{ if 25\% then }\eta=\frac{1}{4}\text{ if multilevel eg: 64 : }l=\log_{2}(64)=6\implies \eta=\eta \cdot l=6 \cdot \frac{1}{4}=\frac{6}{4}$
![[pcm transmission example so far.png|500]]



# Inter-symbol interference
![[isi topic map.png|300]]
## What is inter-symbol interference?
- **Inter-Symbol Interference (ISI):** Overlapping of signals in a communication channel, corrupting information. (smearing into other timeslots).
- **Cause:** Bandwidth limitations (channel passband) of channel smooth rectangular pulses, spreading them in time. (frequency attenuated -> time domain less rectangular).
- **Prevention:** equalization techniques, proper pulse shaping, controlled bandwidth.
![[isi example.png|300]]![[isi practical.png|300]]
## Modelling ISI
![[base-band pulse transmission system.png|400]]
- **Digital Signaling System Modeling (baseband):** $w_{in}(t) = \sum a_{n}h(t - nT_s)\text{ where }h(\dots)=\delta(\dots)*h(t)$.
- **Output Signal:** $w_{out}(t) = w_{in}(t) \ast h_{T}(t) \ast h_{C}(t) \ast h_{R}(t)=\left( \sum_{n}a_{n}\delta(t-nT_{s}) \right)*h_{e}(t)$, convolution with transmitter, channel, receiver filters.
- **Overall Impulse Response:** $h_{e}(t) = h(t) \ast h_{T}(t) \ast h_{C}(t) \ast h_{R}(t)$.
- **Frequency Domain Representation:** $He(f) = H(f)H_{T}(f)H_{C}(f)H_{R}(f)$.
- **Zero-ISI Criterion:** $h_{e}(\tau + kT_s) = C$ for $k=0$, and $0$ for $k \neq 0$ (Nyquist’s first criterion). **(represented in convolution between (rect spectrum (sinc in time)) and another function which is finite in spectrum).
- **Objective:** Design $h_{T}(t)$ and $h_{R}(t)$ to minimize ISI, given fixed $h_{C}(t)$.
## Nyquists first method (Zero ISI)
- **Nyquist's First Criterion:** Ideal sinc pulse = zero-ISI, non-zero only at designated timeslot. (no overlap at sampling moments).
![[sinc pulse.png|300]]![[sinc pulse-1.png|300]]
- **Sinc Pulse:** Satisfies zero-ISI, $sinc(t) = \frac{\sin(\pi t/T_s)}{\pi t/T_s}$, zero at $t \neq kT_s$. They overlap but not at sampling times -> so still correct data.
- **Waveform Pulses for Zero-ISI:** Rectangular, sinc, triangular; practical issues with infinite bandwidth/time.
![[summary of idea zero isi.png|300]]![[zero isi pulse shape.png|300]]
- **Raised-Cosine Spectrum (RACOS):** Realizable, minimizes ISI, practical bandwidth.
## Raised cosine-rolloff Nyquist filtering (one of zero isi filters)
- **Raised Cosine-Rolloff Filtering:** Minimizes ISI, customizable rolloff factor $r$ (more bandwidth).
![[raised cosine rolloff nyquist filter transfer function.png|300]]![[raised-cosine pulses.png|300]]
![[impulse.png|100]]

- **Transfer Function:** $He(f) = \begin{cases} 1 & |f| \leq f_1 \\ \frac{1}{2}[1 + \cos(\frac{\pi(|f|-f_1)}{2f_{\Delta}})] & f_1 < |f| < B \\ 0 & |f| \geq B \end{cases}$.
- **Parameters:** $f_{\Delta} = B - f_0$, $f_1 = f_0 - f_{\Delta}$, Rolloff $r = \frac{f_{\Delta}}{f_0}$, $f_{0}=6-dB\text{ bandwidth}$.
- **Bandwidth:** $B = f_0(1 + r)$.
- **Ideal for Bandlimited Channels:** Reduces pulse spreading, fits channel bandwidth.
- **Time-Domain Pulse:** $h_{e}(t) =F^{-1}[H_{e}(f)]= 2f_0 \cdot sinc(2f_0t) \cdot \frac{\cos(2\pi f_{\Delta}t)}{1 - (4f_{\Delta}t)^2}$.
- **Max Symbol Rate (No ISI):** $D_{max} = 2f_0$.
- **Practical Application:** Transmits data through bandlimited channels with minimal distortion.

- eg: When sending a square pulse with a bandwidth exceeding the channel’s maximum rated bandwidth, higher frequency components are attenuated, causing pulse spreading, interfering in adjacent time slots and oscillations
- To address this, on the otherhand sending a raised-cosine filtered pulse with a 0.75 roll-off factor, fitting the channel’s bandwidth, results in significantly reduced pulse spreading
![[reason for cosine rolloff.png|300]]![[raised cosine filter example.png|300]]

# Information Theory
![[error correction map.png|300]]
## Shannon–Hartley channel capacity theorem
- **Shannon-Hartley Theorem:** $C = B \log_2(1 + SNR_{in})\implies xB\implies xB\log_{2}\left( 1+\frac{SNR_{in} \cdot B}{xB} \right)$ [bits/s], defines max information rate $\text{error free}$.
- **Max Spectral Efficiency:** $\eta_{max} = \frac{C}{B} = \log_2(1 + SNR_{in})$ [bits/s/Hz], efficiency of bandwidth usage.
- **Power-Limited Region:** Low SNR ($\text{SNR} << 1$), capacity increases with SNR.
- **Bandwidth-Limited Region:** High SNR ($\text{SNR} >> 1$), capacity constrained by bandwidth, not SNR.
![[shannon hartley channel capacity.png|300]]

## Error detection and correction schemes
[But what are Hamming codes? The origin of error correction - YouTube](https://www.youtube.com/watch?v=X8jsijhllIA)
- **Parity Bit Checking:** Fails with multiple bit flips, only detects odd number of errors.
- **Hamming Codes:** Enables both error detection and correction.
- **Hamming Code Structure:** $n = m + k$, $m$ = data bits, $k$ = parity bits.
- **Hamming(7,4) Example:** Adds 3 parity bits to 4-bit message, corrects single bit error.
- **Parity Bit Positions:** Set at powers of 2 (1, 2, 4, 8, ...).
- **Limitations of Hamming:** Corrects 1-bit errors but only detects multiple errors.
- **Advanced Schemes:** Modern systems use LDPC, polar codes for better error correction.
![[parity bit example.png|200]]![[parity bit example-1.png|200]]
