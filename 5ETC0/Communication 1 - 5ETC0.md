![[5ETC0/attachments/schedule.png|400]]

![[course map.png|500]]

POWERS ALWAYS IN DBM
CONVERSIONS BETWEEN W AND DB ALWAYS NOT DBM
ADDITION IN DB = MULTIPLICATION IN W -> same for div/sub
snr = dB
# Orthogonal basis and the Fourier transform/series
## Fourier series
- $\omega=\frac{2\pi}{T}$
- $f=\frac{1}{T}$
- $\omega=2\pi f$
- $e^{jk\omega t}=\cos(k\omega t)+j\sin(k\omega t)$
- Periodic functions approximated by sines and cosines series.
- Conversion affects phase, not RMS/power content.
- Symmetry indicated by only odd/even components.
- Time <-> Frequency domain conversion.
![[fourier series and fourier transform.png]]
$a_{k}=\frac{1}{\pi}\int_{-\pi}^{\pi} f(t)\cos(kt) \, dt$
$b_{k}=\frac{1}{\pi}\int_{-\pi}^{\pi} f(t)\sin(kt) \, dxt$

$F(\omega)=\int_{-\infty}^{\infty} f(t)\cdot \cos(\omega t) \, dt \text{ or } F(\omega)=\int_{-\infty}^{\infty} f(t)\cdot \sin(\omega t) \, dt$$

$f(t) = \frac{a_0}{2} + \sum_{n=1}^{\infty} a_n \cos\left(\frac{n\pi t}{L}\right) + \sum_{n=1}^{\infty} b_n \sin\left(\frac{n\pi t}{L}\right)$

$a_n = \frac{1}{L} \int_{-L}^{L} f(t) \cdot \cos\left(\frac{n\pi t}{L}\right) dt$

$b_n = \frac{1}{L} \int_{-L}^{L} f(t) \cdot \sin\left(\frac{n\pi t}{L}\right) dt$

![[Fourier Transformations.png|300]]![[5ETC0/attachments/fourier transform pairs.png|300]]

- Gibbs phenomenon: Overshoot constant with increased bandwidth.
- Fourier coefficients: Represent magnitude and phase of sine/cosine components in a Fourier series.
- Fourier series: Represents periodic waveforms as combinations of sine and cosine waves.

![[orthogonality orthonomality.png|500]]
## Decibels
power amplification: $G=\frac{P_{out}}{P_{in}}$
$G_{dB}=10\log_{10}G=10\log_{10} \frac{P_{out}}{P_{in}}$
$G=10^{G_{dB}/10}$
power attenuation: $L=\frac{1}{G}=\frac{P_{in}}{P_{out}}$
$L_{dB}=10\log_{10}L=10\log_{10} \frac{P_{in}}{P_{out}}$
$L=10^{L_{dB}/10}$
![[convert between dB.png|200]]
$dBm(\text{absolute})=dB(\text{ratio})+30$
# Sampling theory
![[sampling visualized.png|400]]
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
**dimensionality:** $N=2BT_{0}$
## Reconstruction
https://www.youtube.com/watch?v=rmDg3eVWT8E
$s(t)$-->LPF(low-pass-filter) $H(\omega)$![[low pass filter signal.png|100]]-->$m_{r}(t)$-->fourier transform: $M_{r}(\omega)$ then $H(\omega)=\frac{M_{r}(\omega)}{S(\omega)}$ so $M_{r}(\omega)=H(\omega)\cdot S(\omega)$![[recovered analog signal spectrum.png|100]]-->inverse fourier transform: $m_{r}(\omega)$
![[low pass filter applied on the sample signal.png|400]]
$\omega_{m}\leq \omega_{c}\leq \omega_{s}-\omega_{m}$
$m(t)=\sum^\infty_{n=-\infty}m_{n} \frac{\sin\left( \pi f_{s}\left[ \frac{n}{f_{s}} \right] \right)}{\pi f_{s}\left[ t-\left( \frac{n}{f_{s}} \right) \right]}$
$\omega_{m}=\text{always }B_{analog}$
# Sampling Methods (Pulse Amplitude Modulation)
![[graph analysis.png|400]]
[Signals Sampling Techniques](https://www.tutorialspoint.com/signals_and_systems/signals_sampling_techniques.htm)
## Gating (natural sampling)
- **Natural Sampling Summary**:
- Analog signal $w(t)$ passes for certain time $\tau$ only
  - **Sampling**: $w_{s}(t)=w(t)\cdot s(t)$; $W_{s}(f)=W(f)*S(f)$.
  - **Clock**: Duty cycle $d=f_{s}\tau$.
  - **Signal Representation**: $w_{s}(t)=h(t) * [w(t) \sum \delta(t - kT_s)]$; $h(t)=\Pi(\frac{t}{\tau})$.
  - **Fourier Series**: $W_{s}(f)=d\sum\sin c(nd)W(f-nf_{s})$.
  - **Absolute Null Bandwidth**: First zero at $f=1/\tau$. (first position at which spectrum not repeated). $B_{nulltonull}={2R}$

The Fourier transform of a PN code produces a line spectrum for which the magnitude is confined by a sinc function. The first null of the sinc function occurs at frequency equivalent to the bit rate of the PN code. For example, a bit rate of 10 MBits/s translates to a frequency at the first null of 10 Mhz. Since the magnitude of the spectrum is symmetrical around DC, the null-to-null bandwidth is twice the bit rate - 20 MHz.
[Definitions - ITS](https://its.ntia.gov/research-topics/radio-propagation-data/rcirms/definitions)

  - **Key Metrics**: Bandwidth $f=1/\tau$; Sampling frequency $f_{s}=1/T_{s}$; Duty cycle $d=\tau/T_{s}$.
  - $\sin(nd)=\sin c(n\tau f)=\sin c\left( n\tau  \frac{1}{T_{s}} \right)=\sin\left( \frac{n}{3} \right)$
  - $d\sin c(\tau f)=\frac{d\sin(\tau f\pi)}{\tau f\pi}$
  - $\text{ for gating: }f=\frac{n}{T_{s}}\text{ and flat top (continuous spectrum): }f=(\text{actual freqency at that point})$
$sinc(x)=\frac{\sin(x)}{x}\implies \text{ limit ratio as both approach 0 l'hopital the ratio is one. (keep in mind sinc pulse)}$
  - **can reconstruct the original signal since we obtain frequency copies of the original analog waveform that are undistorted just may differ in magnitude scaling**
![[gating.png|300]]![[gating sampling spectrum.png|300]]
![[natural sampling.png|300]]![[gating sampling example.png|300]]

![[gating sampling.png|400]]
## Flat-top sampling (instantaneous sampling)
- **Flat-top Sampling**:
  - Instant captures at $kT_{s}$; constant hold for $\tau$.
  - Yields stable digital conversion levels.
  - **Can reconstruct using nyquist filtering. Not fully due to distortion.**
![[flat top sampling.png|300]]![[flat top sampling-1.png|300]]
![[flat top sampling-2.png|300]]![[flat top example.png|300]]
- **Formulation**:
  - $w_{s}(t)=\sum_{k=-\infty}^{\infty}w(kT_{s})h(t-kT_{s})$, $h(t)$ is square pulse.
  - Fourier: $W_{s}(f)=\frac{1}{T_{s}}|H(f)|\sum_{k=-\infty}^{\infty}|W(f-kf_{s})|$, $H(f)=d\sin c(\tau f)$.
- **Aperture Effect Mitigation (high-frequency components might be altered)**:
  - Narrow $\tau$.
  - Equalization: $\frac{1}{H(f)}$ filter.

![[flat top sampling-3.png|400]]
# Digitization
## Pulse Code Modulation (PCM)
$\text{RZ: }B_{PCM}=\frac{1}{2}R=\frac{1}{2}nf_{s}$
$\text{NRZ: }B_{PCM}=R=nf_{s}$

Bandwidth of PCM signal depends on the bit rate and the pulse shape.

Let the bit rate be R (of the PCM signal generated), then

R = n*fs

n = number of bits on the PCM word (M= 2^n …. M is no. of levels of quantization)

fs = sampling rate to which analog signal is sampled

For no aliasing i.e. the Nyquist rate : fs= 2B,

where B is the bandwidth of the analog signal that is to be converted.

Bandwidth of the PCM (BPCM) waveform is bounded by

BPCM>= R/2

BPCM>= n*B

(so R/2 is the minimum bandwidth of the PCM signal)

For one using a rectangular pulse with polar NRZ (Non return to zero) line code:

BPCM = R = n*fs = n*2*B

This means the bandwidth of PCM is greater than the bandwidth of the analog signal.

![[bit rate.png|400]]

![[quantization.png|200]]
PCM involves converting an analog signal into a digital one through santizmpling, quaation, and binary encoding. The process starts by sampling the analog signal at or above the Nyquist rate, then quantizing these samples into discrete levels, and finally encoding these levels into binary digits. 

- digital: better snr
- time to send independent of amount/time of duration of info sent
- but more bandwidth needed.

- **Quantization Levels**: Determined by $M = 2^n$, where $n$ is the number of bits per sample.
- **Bit-rate ($R$)**: Defined as $R = n \cdot f_S=\frac{n}{T}$ (bits/s), where $f_S$ is the sampling frequency, satisfying nyquist criteria $f_S \geq 2B_{analog}$ with $B$ being the analog signal bandwidth.
- **Spectral Efficiency ($\eta$)**: Given by $\eta = \frac{R}{B_{pcm}}$ (bits/s)/Hz, indicating how efficiently the bandwidth is used. can be bigger than 2 in that case multilevel.
- **Minimum Bandwidth ($B_{pcm}$)**: The least bandwidth required, $B_{pcm} \geq \frac{1}{\eta} R\geq n\cdot2\cdot \frac{1}{\eta}\cdot B_{analog}$, necessary to avoid intersymbol interference (ISI) and ensure signal integrity. 
![[example of b_pcm.png|300]]![[quantization and encoding.png|300]]
![[bpcm.png|300]]![[5ETC0/attachments/Untitled.png|300]]

![[types of errors.png|500]]
![[snr.png|500]]
## Signal-to-noise ratio
[Signal-to-noise ratio - Wikipedia](https://en.wikipedia.org/wiki/Signal-to-noise_ratio#:~:text=SNR%20is%20defined%20as%20the,indicates%20more%20signal%20than%20noise.)
[Noise spectral density - Wikipedia](https://en.wikipedia.org/wiki/Noise_spectral_density)i
not mentioned in the reader: $SNR_{input}=\frac{P_{signal}}{P_{noise}}=\frac{P}{N_{O}\cdot n\cdot f_{s}}=\frac{SNR_{analog}}{\text{Bandwidth ratio}}=Q=\sqrt{ SNR_{in} }=SNR_{old} \cdot n_{ratio}\left( \frac{old}{new} \right)$
$n \uparrow\to SNR_{in}\downarrow\to P_{e}\uparrow\to SNR_{out}\downarrow\left( \text{only when }P_{e} \approx \frac{M^2}{10} \right)$

- $P_{noise}=P_{noise/khz}[W] \cdot f_{s}[KHz,2*B_{ana\log}]$ same but addition in in dBm and dB
- $SNR_{in}=P_{Rx[\text{include KE}]}[dBm]-P_{noise[from quantizing]}[dB]$

- **Quantization Noise**: Caused by rounding errors in M-step quantizer.
- **Bit errors in the recovered PCM signal:** caused by channel noise and intersymbol interference due to improper channel filtering.
- **Aliasing noise:** due to non-ideal band limitation (usually most time signals even audio ones are not fully band-limited to 40 kHz.)
![[quantization noise.png|300]]
- **compander if amplitude not uniform betters pcm performance but cant maximize snr_out but less effect of P_e. (With companding, output SNR relatively insensitive to input level)

- **Receiver Output SNR (UNIFORM)**: $SNR_{out} = \frac{M^2}{1 + 4Pe(M^2 - 1)}$, where $Pe$ is bit error probability. This equation defines the average SNR at the output of the receiver. **The M term is squared because power is proportional to voltage squared.
- **Peak SNR**: $SNR_{pkout} = \frac{3M^2}{1 + 4Pe(M^2 - 1)}$.
- $SNR_{out,db}=6.02n+a\text{ }[dB]\text{ n is the number of bits per sample and α = 4.77 dB}$
- for the peak $SNR_{out,max}=6 \cdot n$ and α = 0 for the average SNR. This equation is called the 6-dB rule --> $\text{An additional 6-dB improvement in SNRout is obtained for each bit per sample added to the PCM word}$
![[pcm signal to noise.png|300]]
![[snr analog vs pcm.png|300]]![[snr improvement.png|300]]
## Bit-error Probability $P_e$ and Channel Noise
![[pcm decoding.png|300]]
Channel noise, including thermal noise and electromagnetic interference, affects the transmission quality by increasing the bit-error probability ($P_e$), which measures the likelihood of errors per bit in transmission.

- **AWGN Channels**: Characterized by additive, white, and Gaussian noise, impacting the calculation of $P_e$ through the Q-function, which relates to the tail probability of a Gaussian distribution.
- **Bit-error Probability**: $P_e = Q(\sqrt{SNR_{in}})=\frac{1}{\sqrt{ 2\pi }Q}e^{-z^2/2}(\text{for Q>3})$, showing the dependence on the input SNR. A higher SNR leads to a lower $P_e$, enhancing transmission reliability.
![[probability of AWGN noise.png|400]]
Increasing the number of bits per sample improves $SNR_{out}$ but can lead to higher channel noise power ($N$) due to wider bandwidth, affecting $SNR_{in}$. The interplay between increasing resolution and the bandwidth's impact on noise illustrates the complex balance in optimizing digital signal transmission.
$N=\sigma^2=\left( \frac{N_{O}}{2} \right)(2B_{pcm})=N_{O}B_{pcm}\implies SNR_{in}=\frac{P_{signal}}{N}=\frac{P_{signal}}{N_{O}B_{pcm}}=\frac{P_{signal}}{N_{O}\cdot n\cdot f_{s}} \propto \frac{1}{n}\text{ as }B_{pcm}=n \cdot f_{s}$
$\frac{N_{O}}{2}$ is noise spectral density used in transmission channel: (use N0/2 because we, by convention, also distribute the noise power over the negative frequencies).
**If $N_{O}$ given then $N_{O} \cdot2B_{PCM}$
$\text{attenuation: } \frac{1}{P_{signal}}$
![[snr in snr our.png|400]]![[higher B captures more noise.png|200]]

![[Q function definition.png|500]]
### Increasing Number of Bits
1. $B_{pcm} \geq \frac{1}{2} n f_S\text{ as R}\uparrow$ Higher Bandwidth
2. $SNR_{in} = \frac{P}{N_0B_{pcm}}$ Lower 
4. $Q=\sqrt{ SNR_{in} }$ Lower
5. $Q\propto \frac{1}{P_{e}}\implies P_e$ Higher
6. $SNR_{out}$ Lower
7. **MORE M Levels -> HIGHER CHANCE OF OVERLAP OVER THOSE LEVELS -> $P_{e}$**
# Digital signaling
[Line code - Wikipedia](https://en.wikipedia.org/wiki/Line_code#:~:text=In%20telecommunication%2C%20a%20line%20code,code%20in%20data%20storage%20systems.)
## Vectorial representation of digital signaling
![[pcm signaling.png|200]]
- **Orthogonality Condition**: $\int_a^b \phi_n(t)\phi_m^*(t) dt = 0$ for $n \neq m$.
- **Signal Representation**: $w(t) = \sum_{k=1}^{N} w_k\phi_k(t)$.
- **Signal Reconstruction**: $w(t) = \sum_{n=n_1+1}^{n_1+N} a_n \frac{\sin(\pi f_s[t - (n/f_s)])}{\pi f_s[t - (n/f_s)]}$.
- **Orthogonal Decomposition**: Decode signal by integrating with basis function $\phi_k(t)$.
![[orthogonal decomposition.png|300]]
- **3-bit Signal Example**: $s(t) = \sum_{j=1}^{3} d_j\phi_j(t)$, with orthogonal basis $\phi_j(t)$. dimensions: **symbols**
## Multi-level signaling
Multi-level signaling sends more than one bit per symbol, enabling higher data rates without increasing bandwidth.
![[polar nrz.png|200]]![[multi level polar nrz.png|200]]
- **Levels and Bits Relationship**:
    - $L = 2^l$
    - $l = \log_2(L)$(bits per symbol)
    - Where $L$ is the number of levels per symbol, and $l$ is the number of bits per level.
- **Pros and Cons**: Increases bandwidth efficiency and data rates but introduces greater susceptibility to noise.
- **Single-bit vs Multi-level**: Multi-level signaling is more bandwidth-efficient but less noise-resistant compared to binary transmission.
- **Bits per Sample vs. Bits per Level**:
    - Bits per sample ($n$) refer to digitization (quantization) stage, indicating the resolution of analog to digital conversion.
    - Bits per level ($l$) refer to the line coding stage, indicating how many bits are represented by each level in a multi-level signaling scheme.
    ![[bits per sample vs bits per level.png|300]]

![[bits per sample vs bits per symbol.png|500]]
## Baud-rate (or Symbol rate)
- **Baud Rate ($D$)**: $D(\text{symbols/sec}) = \frac{N}{T_0}=B \cdot \eta \text{ null bandwidth}=\frac{1}{T_{s}}=\frac{R}{l}$, where $N$ is dimensions, $T_0$ is time per dimension. Number of symbols transmitted per second.
- $T_{s}=lT_{b}$ also $R=\frac{n}{T_{s}}=\frac{l}{T_{s}}$
$D\leq 2B \text{ it can only become worse, higher bandwidth, (2 is sinc) nyquest criteria}$
- Each symbol can represent or/ convey one or several bits of data.
- $\eta=\frac{D}{B}$
- **Bit Rate ($R$)**: $R = lD = D\log_2(L) = \frac{N}{T_0}\log_2(L) = \frac{n}{T_0}$ [bits/s], with $L$ levels, $D$ baud rate. One symbol can represent multiple bits.
- **Binary Signaling**: For $L=2$, $R = D$.
- **Channel Capacity:** $C=B\log_{2}(1+SNR)\to \frac{bits}{sec}\to \eta_{max}=\frac{C}{B}=\log_{2}\left( 1+SNR \right)$
- **Channel Capacity (bps):** $C=2B\log_{2}(L)$
![[multilevel transmission.png|300]]
- **Bandwidth ($B$)**: $B \geq \frac{1}{2}D$. Minimum bandwidth achieved with sinc pulses.
- Dimensionality theorem states the number of orthogonal dimensions $N_D = 2BT_0$, with $B$ as bandwidth and $T_0$ as time period.`
- Relationship between bandwidth $B$ and baud rate $D$: $D = \frac{N}{T_0} \leq \frac{N_D}{T_0} = 2B$.
- **Baseline wander:** occurs when the signal has a strong Low Frequency component, together with AC coupling in the system.
# Linecodes and their spectras
## Power spectral density (PSD)
![[power spectral density.png|500]]


![[direct method for power spectral density.png|200]]![[autocorrelation function and PSD.png|200]]![[wiener khintchine.png|200]]![[autocorrelation psd example.png|200]]![[psd multilevel signals.png|200]]
https://www.youtube.com/watch?v=DoSLMEEo1Y0
- **PSD** analyzes signal power across frequencies, akin to an audio EQ.
- **Autocorrelation Function**: Correlation of a signal with its delayed version. Crucial for PSD.
- **PSD Formula**: $P_w(f) = \lim_{T\to\infty} \frac{1}{T} |W(f)|^2$, the Fourier transform of the autocorrelation function.
- Line codes transform symbols into physical waveforms, influencing performance. Types include Unipolar NRZ, Polar NRZ, Unipolar RZ, Bipolar RZ, and Manchester.
- **sharp peak in PSD -> DC component**
## Linecode Types
[Differences in PSDs between line codes](https://chatgpt.com/c/68170689-d3c4-800b-84b8-3ebc7b70341d)


The RZ (Return to Zero) signal transmission of a logic "1" will always begin at zero and end at zero. Whereas NRZ (Non Return to Zero) signal transmission of a logic "1" may or may not begin at zero and end at zero.
![[nrz vs rz.png|400]]
### Unipolar NRZ
- Uses one power level for "1" and ground for "0".
- **PSD**: Includes a DC component. Formula: $P_{\text{unipolarNRZ}}(f) = \frac{A^2}{T_b} \sin c^2(fT_b) \left[1 + \frac{1}{T_b}\delta(f)\right]$.
![[unipolar nrz.png|200]]![[unipolar nrz psd.png|200]]
### Polar NRZ
- Uses positive and negative levels for binary states.
- **PSD**: Lacks a DC term. Formula: $P_{\text{polarNRZ}}(f) = \frac{A^2}{T_b} \sin c^2(fT_b)$.
![[polar nrz-1.png|200]]![[polar nrz psd.png|200]]
### Unipolar RZ
- Returns to zero within each bit period, includes DC component.
- **PSD**: Formula adjusts for duty cycle. $P_{\text{unipolarRZ}}(f) = \frac{A^2d^2T_b}{16} \sin c^2\left(\frac{f dT_b}{2}\right)\left[1 + \frac{1}{T_b}\sum_{n=-\infty}^{\infty} \delta\left(f - \frac{n}{T_b}\right)\right]$.
![[unipolar rz.png|200]]![[unipolar rz psd.png|200]]
### Bipolar RZ
- Alternates between positive, negative, and zero levels. No DC component.
- **PSD**: $P_{\text{bipolarRZ}}(f) = \frac{A^2T_b}{4} \sin c^2\left(\frac{fT_b}{2}\right) \sin^2(\pi fT_b)$.
![[bipolar rz.png|200]]![[bipolar rz psd.png|200]]
### Manchester
- Inherently synchronizes with the data stream, doubling bandwidth compared to Polar NRZ. No DC component. Behaves like a clock.
- **PSD**: $P_{\text{Manchester}}(f) = {A^2}T_b \sin c^2(fT_b)$.
![[manchester.png|200]]![[manchester psd.png|200]]
## Multilevel Signaling for Multilevel Signaling and Spectral Efficiency of Linecodes
- Moving to multilevel signaling ($l > 1$) affects both signal PSD and spectral efficiency.
- **Symbol Rate and PSD**: For $l=3$, PSD adjusts to $\frac{\left|\left|F(f)\right|\right|^2}{T_s} = 3T_b \cdot sinc^2(3T_bf)$.
- **Spectral Efficiency**: Varies with duty cycle and levels used. 
$\text{Unipolar RZ (50\%): }\eta=\frac{1}{2}\text{ if 25\% then }\eta=\frac{1}{4}\text{ if multilevel eg: 64 : }l=\log_{2}(64)=6\implies \eta=\eta \cdot l=6 \cdot \frac{1}{4}=\frac{6}{4}$
**any signal can be multilevel and in that case their spectral effiency is multiplied by $l$**
$\frac{D}{B}\text{cant be }>2\text{ but } \frac{R}{B}\text{ can}$
$\frac{R}{B}=2.5\to l=2\to \frac{D}{B}=1.25\to \text{cosine rolloff}$

![[power spectra for multilevel signaling.png|500]]
![[5ETC0/attachments/spectral efficiency of linecodes.png|500]]

![[spectral eff linecodes.png|300]]![[Binary signalling waveforms.png|300]]![[pcm transmission example so far.png|500]]

![[summary of first part of pipeline.png|500]]
![[derivation of dealing with digitzation and encoding.png|500]]
![[line code quiz.png|500]]
![[more walk throughs.png|500]]
[ChatGPT](https://chatgpt.com/c/68173752-0334-800b-a099-8bebe173bf45)
# Inter-symbol interference
[Intersymbol interference - Wikipedia](https://en.wikipedia.org/wiki/Intersymbol_interference)
![[isi topic map.png|300]]
## What is inter-symbol interference?
- **Inter-Symbol Interference (ISI):** Overlapping of signals in a communication channel, corrupting information. (smearing into other timeslots).
- **Cause:** Bandwidth limitations (channel passband) of channel smooth rectangular pulses, spreading them in time. (frequency attenuated -> time domain less rectangular).
- **Prevention:** equalization techniques, proper pulse shaping, controlled bandwidth.
![[isi example.png|300]]![[isi practical.png|300]]
## Modelling ISI
![[base-band pulse transmission system.png|400]]
The baseband model of a digital signaling system is given by $w_{in}(t) = \sum a_{n}h(t - nT_s)$, where the output signal is the convolution of input with the combined effect of transmitter, channel, and receiver filters, $w_{out}(t) = w_{in}(t) \ast h_{T}(t) \ast h_{C}(t) \ast h_{R}(t)$. The goal is to design transmitter and receiver filters to minimize ISI, considering a fixed channel impulse response.
## Nyquist's first method (Zero ISI)
Nyquist's First Criterion for zero ISI suggests that ideal sinc pulses, which are non-zero only at designated timeslots, can eliminate ISI completely. However, practical implementation faces challenges due to the infinite bandwidth or time domain requirements of such pulses. **Raised cosine spectrum (RACOS)** filtering emerges as a realizable method to minimize ISI within practical bandwidth constraints.

![[sinc pulse.png|300]]![[sinc pulse-1.png|300]]![[summary of idea zero isi.png|300]]![[zero isi pulse shape.png|300]]
## Raised cosine-rolloff Nyquist filtering (one of zero isi filters)
- **Raised Cosine-Rolloff Filtering:** Minimizes ISI, customizable rolloff factor $r$ (more bandwidth).
- [Module 5: Pulse Shaping - YouTube](https://www.youtube.com/watch?v=uTI0qLLbS74)
![[raised cosine rolloff nyquist filter transfer function.png|300]]![[raised-cosine pulses.png|300]]
![[impulse.png|100]]
- **Transfer Function:** $He(f) = \begin{cases} 1 & |f| \leq f_1 \\ \frac{1}{2}[1 + \cos(\frac{\pi(|f|-f_1)}{2f_{\Delta}})] & f_1 < |f| < B \\ 0 & |f| \geq B \end{cases}$.
- **Parameters:** $f_{\Delta} = B - f_0$, $f_1 = f_0 - f_{\Delta}$, Rolloff $r = \frac{f_{\Delta}}{f_0}$, $f_{0}=6-dB\text{ bandwidth}$.
- **Bandwidth:** $B = f_0(1 + r)$.
- **Ideal for Bandlimited Channels:** Reduces pulse spreading, fits channel bandwidth.
- **Time-Domain Pulse:** $h_{e}(t) =F^{-1}[H_{e}(f)]= 2f_0 \cdot sinc(2f_0t) \cdot \frac{\cos(2\pi f_{\Delta}t)}{1 - (4f_{\Delta}t)^2}$.
- **Max Symbol Rate (No ISI):** $D_{max} = 2f_0$.
- $D=B\eta$
- **Practical Application:** Transmits data through bandlimited channels with minimal distortion.
- $0\leq r\leq1$

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
[Hamming code - Wikipedia](https://en.wikipedia.org/wiki/Hamming_code)
[But what are Hamming codes? The origin of error correction - YouTube](https://www.youtube.com/watch?v=X8jsijhllIA)
- **Parity Bit Checking:** Fails with multiple bit flips, only detects odd number of errors.
- **Hamming Codes:** Enables both error detection and correction.
- **Hamming Code Structure:** $n = m + k$, $m$ = data bits, $k$ = parity bits.
- **Hamming(7,4) Example:** Adds 3 parity bits to 4-bit message, corrects single bit error. **CAN CORRECT 1 ERROR BIT PER MESSAGE IF THERE IS 24 BIT STRING AND WE HAVE 7/4 MEANS IT CAN CORRECT 1 BIT IN BITS OF 7 SO UP TO 3 IN WHOLE STRING**
- **Parity Bit Positions:** Set at powers of 2 (1, 2, 4, 8, ...).
- **Limitations of Hamming:** Corrects 1-bit errors but only detects multiple errors.
- **Advanced Schemes:** Modern systems use LDPC, polar codes for better error correction.
![[parity bit example.png|200]]![[parity bit example-1.png|200]]
# Amplitude, Frequency and Phase Modulation
[Pulse-code modulation - Wikipedia](https://en.wikipedia.org/wiki/Pulse-code_modulation)
[Amplitude modulation - Wikipedia](https://en.wikipedia.org/wiki/Amplitude_modulation)
[Frequency modulation - Wikipedia](https://en.wikipedia.org/wiki/Frequency_modulation)

![[amplitude modulation-3.png|300]]![[frequency modulation.png|300]]

SEE INSTRUCTION 8 AND 9
## Main
[What is Modulation ? Why Modulation is Required ? Types of Modulation Explained. - YouTube](https://www.youtube.com/watch?v=mHvV_Tv8HDQ)
[Amplitude Modulation – Physics and Radio-Electronics](https://www.physics-and-radio-electronics.com/blog/amplitude-modulation/)
- **Baseband(when frequency spectrum irrelevant) vs. Bandpass(eg: for open air transmisison) (spectrum of signal):** Baseband centered at 0Hz, Bandpass re-centered to carrier frequency for open-air transmission.
- Baseband transmission sends the information signal as it is without modulation (without frequency shifting) while passband transmission shifts the signal to be transmitted in frequency to a higher frequency and then transmits it, where at the receiver the signal is shifted back to its original frequency.
![[relative baseband bandpass eg.png|200]]![[mixer.png|200]]![[amplitude modulation.png|200]]![[amplitude modulation-2.png|200]]
- **Upconversion:** Shifts baseband to bandpass via mixer, enabling transmission on specific frequencies. $\cos(a) \cdot \cos(\beta)=\frac{1}{2}\cos(a+\beta)+\frac{1}{2}\cos(a-\beta)\text{ input signal x LO frequency}$
- **Downconversion:** Mixer(circuit) reverses process, extracting baseband from received bandpass signal.

- **Amplitude Modulation (AM):** Encodes input signal information in carrier amplitude.
- $g(t)=A_{c}[1+m(t)]\implies s(t)=g(t)\cos(w_{c}t)\text{ where g(t) is the envelope}$
- [Envelope (waves) - Wikipedia](https://en.wikipedia.org/wiki/Envelope_(waves))
- **AM Signal:** $s(t) = A_{c}[1 + m(t)] \cos(\omega_c t)$, where $Ac$ = carrier amplitude, $m(t)$ = modulation coefficient $\cos(\omega_{c}t)$ carrier signal.
- $m(t)=A_{m}\cos(\omega_{m}t)$

- **Modulation Efficiency:** $\frac{\langle m^2(t) \rangle}{1+\langle m^2(t) \rangle} \cdot 100\%\implies \langle m^2(t) \rangle=\frac{A_{m}^2}{2}$ for sinusoidal signals $\langle m^2(t)\rangle=\frac{1}{T}\int_{0}^{T} \sin^2(\omega t) \, dt=\frac{1}{T}\int_{0}^{T} (1-2\cos(2\omega t)) \, dt=\frac{1}{2}$.
- for square waves its 1 not $\frac{1}{2}$
- $<m^2(t)\geq A_{m}^2 \cdot \sin^2(\omega _{m}2\pi t)\implies A_{m}^2\cdot \frac{1}{2}\text{ because sine avges 1/2 over period}$


- **Peak Envelope Power (PEP):** $P_{PEP_{norm}} = \frac{1}{2R}[max(|g(t)|)]^2 = \frac{A_c^2}{2R} [1 + \max(m(t))]^2$, measures maximum signal power.
- **Percentage of Modulation:** $\%mod=\frac{\max(m(t)) - \min(m(t))}{2} \cdot 100\%=\frac{A_{max} - A_{min}}{2A_{c}} \cdot 100\%$, indicates modulation depth for $\text{envelope of signal: }g(t)=A_{c}[1+m(t)]$.
- $P_{AM}=\frac{A^2_{c}}{2R_{b}}[1+ \langle m^2(t) \rangle]\implies P_{carrier}=\frac{A_{c}^2}{2R_{b}}$
- $A_{c}(1\pm A_{m})=A_{max/min}\implies \text{how to find Am}$
- $A_{c}\text{ when graph appears}$
- [Amplitude Modulation Waveform and Equation | Communication System - YouTube](https://www.youtube.com/watch?v=G4Y8TO8fX_Y)
## DSB-SC - Double-Sideband Supressed Carrier - type of AM modulation
[Introduction to Amplitude Modulation | Double Side Band Suppressed (DSB-SC) Carrier Explained - YouTube](https://www.youtube.com/watch?v=3wBlB-TFwkQ)
[Double-sideband suppressed-carrier transmission - Wikipedia](https://en.wikipedia.org/wiki/Double-sideband_suppressed-carrier_transmission#:~:text=Double-sideband%20suppressed-carrier%20transmission%20(DSB-SC),level%2C%20ideally%20being%20completely%20suppressed.)
[Sideband - Wikipedia](https://en.wikipedia.org/wiki/Sideband)
![[dsbsc.png|200]]
- **Signal Representation:** $s(t) = A_{c} \cdot m(t) \cdot cos(\omega_ct)=\frac{A_{c}}{2}m(t)(e^{j\omega_{c}t}+e^{-j\omega_{c}t})$.
- **Envelope and Carrier:** $g(t) = A_{c} \cdot m(t)$.
- $P_{AVG}= \frac{\langle s^2(t)\rangle}{R_{b}}=\frac{\langle |g(t)|^2 \rangle}{2R_{b}}=\frac{A^2_{c}}{2R_{b}}\langle m^2(t) \rangle$
- $B_{T}=2B\text{ where }B=f_{m}$
- $\frac{\langle m^2(t) \rangle}{\langle m^2(t) \rangle} \cdot 100\%=100\%$
- **Modulation Efficiency:** 100% due to absence of carrier.
- **Percentage of Modulation:** Infinite, as carrier is suppressed.
- Double-sideband suppressed-carrier transmission (DSB-SC) is transmission in which frequencies produced by amplitude modulation (AM) are symmetrically spaced above and below the carrier frequency and the carrier level is reduced to the lowest practical level, ideally being completely suppressed.
![[dsbsc advantage.png|200]]![[dsbsc modulator.png|200]]![[signal modulation.png|200]]
## Detector circuits
[AM Demodulation - Envelope Detector Explained (with Simulation) - YouTube](https://www.youtube.com/watch?v=4JrryefRNFk)
$\frac{1}{f_{c}}\ll RC\ll \frac{1}{f_{m}}$
![[product detector.png|200]]![[modulation appendix.png|200]]![[dsb-sc summary.png|200]]![[detector types.png|200]]
- **Detector Circuits:** Decode information from waveform; crucial for demodulation.
- **Envelope Detector:** Simple, passive devices; ideal for AM signals with positive modulation under 100%.
- **Drawbacks:** Fails with negative modulation >100%; not suitable for all modulation types.
- **Product Detector:** Demodulates AM and PM; uses local oscillator for downconversion to baseband. **allows for %mod > 1** (where LO (local oscillator) has same frequency and phase as carrier).
- **Phase Detection:** Works as a phase detector with sinusoidal characteristic; versatile for AM/PM signals.
## Frequency and Phase Modulation
![[fm and pm.png|200]]
**FM (Frequency Modulation)**
- Encodes information in signal frequency, amplitude remains constant.
- Higher fidelity than AM due to frequency-based encoding.
- FM & AM: $A_{c}$ constant, $\theta(t)$ linear func of $m(t)$, $g(t)$ nonlinear func of $m(t)$
- $D_{f}=\frac{d\theta(t)}{dt}$
- $\text{envelope: }g(t) = A_c e^{j\theta(t)}=A_{c}e^{j\beta \sin(\omega_{m}t)}$
- $\text{signal: }s(t) = \Re[g(t) \cdot e^{j\omega_c t}] = A_c \cos[\omega_c t + \theta(t)]$
- $f_d(t) = \frac{1}{2\pi} \frac{d\theta(t)}{dt} = \frac{D f}{2\pi} m(t)$
- $\theta(t) = D_{f} \int_{-\infty}^{t} m(\tau) d\tau=\beta\cos (\omega_{m} t)$
**PM (Phase Modulation)**
- Encodes information directly into signal phase.
- $\theta(t) = D_p m(t)$
- $D_{p}\text{ phase sensitivity}\text{ and }D_{f}\text{ frequency deviation constant }$$P_{avg}=\frac{A_{c}^2}{2R_{b}}$
## Frequency and phase deviation
![[phase and frequency deviation.png|200]]![[spectrum of pm or fm signal with sinusoidal signal.png|200]]![[carsons rule.png|200]]
- **Peak Frequency Deviation:** $\Delta F = \frac{1}{2\pi}D_f \max[m(t)]$; measures max frequency change.
- **Frequency Modulation Index:** $\beta_f = \frac{\Delta F}{B}$; ratio of peak deviation to bandwidth.
- **Peak Phase Deviation:** $\Delta \theta = D_p \max[m(t)]$; measures max phase change.
- **Phase Modulation Index:** $\beta_p = \Delta \theta$; indicates extent of phase variation.
## Carson’s rule
- **Carson's Rule:** Estimates bandwidth containing 98% of total power for FM/PM signals.
- **Total Bandwidth (BT):** $B_{T} = 2(\beta + 1) \cdot B \text{ where }B=f_{m} \implies 2\Delta F + 2B$; $\beta$ = modulation index, $B$ = modulating signal bandwidth. $\beta=A_{m}$
## Frequency spectrum of FM and PM
Represents signal in the frequency domain, where the spectrum is a sum of Bessel functions.
- **Frequency Spectrum:** $G(f) = A_{c} \sum_{n=-\infty}^{\infty} J_n(\beta) \delta(f - n f_m)$.
- **Spectrum Conversion:** $S(f) = \frac{1}{2}[G(f - f_c) + G(-f - f_c)]$; accounts for carrier frequency shift.
- $s(t)=A_{c}\sum^{n=\infty}_{n=-\infty}J_{n}(\beta)\cos(\omega_{c}+n\omega_{m})t\implies \langle s^2(t)\rangle=\frac{A_{c}^2}{2}\sum^{n=\infty}_{n=-\infty}J_{n}^2(\beta)=\frac{A_{c}^2}{2} \text{ where } \left( \sum^{n=\infty}_{n=-\infty}J_{n}^2(\beta)=1 \right)$
- $\%\text{Transfered Power}=\frac{\frac{A_{c}^2}{2}\sum^{n=2}_{n=-2}J_{n}^2(\beta)}{\frac{A_{c}^2}{2}} \cdot100 \%$
- **Bessel Functions:** $J_{-n}(\beta) = \frac{1}{2\pi} \int_{-\pi}^{\pi} e^{j(\beta \sin(\theta) - n\theta)} d\theta$; $J_{-n}(\beta) = (-1)^n J_n(\beta)$.
- **Carson's Rule Context:** Links total bandwidth $BT$ with modulation index $\beta$ and modulating signal bandwidth $B$.
![[fm and pm in frequency domain.png|200]]![[am fm pm.png|200]]![[evaluation of power.png|200]]
![[phasors and line spectra.png|200]]![[phasors and line spectra one sided.png|200]]![[spectrum bandpass.png|200]]
![[amplitude modulation-1.png|200]]![[envolope detector for am.png|200]]![[amplitude spectrum of AM.png|200]]
![[modulation efficiency.png|200]]![[of negative modulation.png|200]]![[product detector-1.png|200]]
![[bandpass signal represention.png|200]]![[peak envelope power.png|200]]![[IQ receiver.png|200]]
![[generalized transmitter.png|200]]![[bessel funcs.png|200]]![[narrowband angle modulation.png|200]]
![[narrowband fm modulation.png|200]]![[vsb.png|200]]![[percentage moudlation.png|200]]
### Detector Explanation
- **AM Modulation:** Uses carrier signal amplitude to encode information, extracted by an envelope detector for modulation percentages < 100%.
- **DSB-SC:** Lacks a carrier, encoding information in the amplitude variations around the carrier frequency, requiring a product detector for demodulation.
![[product detector-2.png|200]]![[modulated signal.png|200]]
![[5ETC0/attachments/noncoherent detection.png|200]]![[coherent product detector.png|200]]
# The Physical channel
## Wired and wireless comparison
- radio frequency (RF) wireless channel, wired optical fiber channel
- **Wired:** stable, higher capacity via cables/fibers, constant delay, low BER(bit error rate) ($\text{exponential on SNR}$), high fidelity, secure, fixed, size variable, grid power, health-safe.
- **Wireless:** dynamic, capacity via tech/cell size, variable delay, higher BER ($\text{linear on SNR}$), lower fidelity, easily jammed/intercepted, mobile, size constrained, battery-powered, health-regulated.
## Wireless channel
- **RF propagation:** Power spreads equally on sphere surface; atmospheric absorption varies by frequency/humidity.
- **Free space propagation:** $\text{power captured by the receiver: A: area of receiver antenna: d: diameter of signal propagation: }P_{Rx}(d) = \frac{P_{Tx} \times A_{Rx}}{4\pi d^2}$
single path
- omnidirectional antenna gain: $G_{Rx}=\frac{4\pi}{\lambda^2}A_{Rx}$
- $\lambda \text{(wavelength)}=\frac{v(c)}{f}$
- Friis equation for gain: $P_{Rx}(d) = P_{Tx} \times G_{Tx} \times G_{Rx} \times (\frac{\lambda}{4\pi d})^2$.
- **Logarithmic scale power:** $P_{Rx}(d)[dB] = P_{Tx} + G_{Tx} + G_{Rx} + 20\log_{10}(\frac{\lambda}{4\pi d})\text{ actually you do minus on last term}$
![[fspl.png|200]]
multi path
- Single reflection from ground causes phase difference, affecting signal at receiver. $d^{-4}\text{ rule}$
- Total electric field at receiver ($E_{\text{tot}}(d)$) combines direct and reflected signals.
- Path length difference: $d_{\text{refl}} - d_{\text{direct}} = \frac{2h_{Tx}h_{Rx}}{d}$.
- Total field strength for large $d$: $|E_{\text{tot}}(d)| \approx E(1m)\frac{4\pi h_{Tx}h_{Rx}}{\lambda d^2}$.
- Break distance ($d_{\text{break}}$) where multipath dominates: $d_{\text{break}} = \frac{4\pi h_{Tx}h_{Rx}}{\lambda}$.
- Power at receiver for $d > d_{\text{break}}$: $P_{Rx}(d) \approx P_{Tx}G_{Tx}G_{Rx}\left(\frac{h_{Tx}h_{Rx}}{d^2}\right)^2$, showing $d^{-4}$ rule.
![[derivation of reflection.png|100]]![[derivation of reflection-1.png|100]]![[knife edge trigonometry.png|100]]![[knife edge trigonometry-1.png|100]]![[deriving d -4 rule.png|100]]![[knife edge power loss calc.png|100]]

- **Knife Edge:** Diffraction causes additional power loss; $A(v) = P_{loss} = 6.9 + 20\log_{10}(\sqrt{v^2 + 1} + v - 0.1)$ for object blocking path. for $v>-0.7$
- $v=a\sqrt{ \frac{2d_{1}d_{2}}{\lambda(d_{1}+d_{2})} }$
- $P_{RX}(dB)=P_{Rx}(d)(dB)-P_{loss}(dB)\to P_{RX}(dB)+30\to \text{convert this to final power since thats how you get absolute value...}$
- $a=\beta+\gamma\implies \beta=\tan^{-1}\left( \frac{h_{obs}-h_{TX}}{d_{1}} \right)\cap \gamma=\tan^{-1}\left( \frac{h_{obs}-h_{RX}}{d_{2}} \right)$
- knife edge is worse when you are closer to the obstacle...

![[diffraction loss graph reading.png|400]]
when positive it means loss = $-loss\to P_{RX}(d)--P_{loss}$
![[rms delay.png|300]]![[narrowband wideband.png|300]]
![[baseband bandwidth.png|100]]![[received power of narrowband.png|100]]![[received power of narrowband-1.png|100]]![[doppler shift.png|100]]![[wideband received power.png|100]]![[wideband received power-1.png|100]]![[coherence bandwidth.png|100]]![[coherence bandwidth-1.png|100]]
wideband: power constant over time;
![[wideband-narrowband 1.jpg|200]]
## Wired Connections.
![[cable material cmaprison.png|100]]![[wave propagation in fiber optic tube.png|100]]![[single mode and multi mode.png|100]]![[chromatic dispersion.png|100]]
- Optical support both step and graded index fibers. remember TIR.
- Mode propagation condition: $\tan\left(\frac{\pi d \sin(\theta)}{\lambda} - \frac{\pi m}{2}\right) = \frac{\sqrt{\cos^2(\theta) - \left(\frac{n1}{n2}\right)^2 }}{\sin(\theta)}$.
- no TIR after $45 \degree$, as angle increase -> propagation time increase
- [Single Mode vs. Multimode Fiber... What's the Difference? | NSI-LYNN Electronics, LLC](https://www.tlnetworx.com/blogs/news/single-mode-vs-multimode-fiber-whats-the-difference)
- $P_{Rx}=P_{Tx}-(\text{fiber loss})\cdot d$
- $t_{n}=\frac{d/\cos(\text{angle mode[n]})}{c/\eta}$ where $\eta=\text{refractive index}$ and $\sigma_{optimal}[\text{additional delay}]=t_{2}-t_{0}$ also $v[speed]=\frac{c}{\eta}$ basically $delay=\frac{d}{v}\implies \text{ distance between transmitter and receiver}$
- as $\sigma$ increase the 2 pulses may not overlap -> so might become indistinguishable (**more sensitive to smaller pulses**). this is a problem for multi mode fibers. problem for fast modulation.
- $B_{C} \propto \frac{1}{\sigma_{\tau}}$ where $\sigma =\text{RMS delay spread}$ lower spread -> faster communication
- modulation speed as inversely proportional to the RMS delay spread than a longer delay spread will entail lower modulation speed.

- **single mode: no model dispersion but has chromatic dispersion**
![[fiber optic graph properties.png|100]]
- modulation bandwidth small [modulation speed slow] -> attenuation most critical -> choose bigger wavelength
- modulation bandwidth high[modulation speed high] -> dispersion most critical[frequency components arrive at different time problem] -> choose lower wavelength