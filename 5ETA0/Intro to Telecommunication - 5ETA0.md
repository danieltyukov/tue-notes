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

# Orthogonal basis and the Fourier transform/series
### Orthogonal Basis
The dot product of vectors $\mathbf{v}$ and $\mathbf{w}$ is $\mathbf{v} \cdot \mathbf{w} = \mathbf{v}^T\mathbf{w} = \sum_{i=1}^{n} x_i y_i$. A set of vectors $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k\}$ is linearly independent if the only solution to $c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \cdots + c_k\mathbf{v}_k = 0$ is $c_1 = c_2 = \cdots = c_k = 0$. These vectors span a space $W$ if every vector in $W$ can be expressed as a linear combination of them. For instance, the vectors $\mathbf{i}, \mathbf{j}, \mathbf{k}$ span $\mathbb{R}^3$ as any vector $\mathbf{v} = (a, b, c)$ can be written as $a\mathbf{i} + b\mathbf{j} + c\mathbf{k}$. The standard bases for $\mathbb{R}^2$ and $\mathbb{R}^3$ are defined by $\mathbf{i} = (1, 0)$, $\mathbf{j} = (0, 1)$ and $\mathbf{i} = (1, 0, 0)$, $\mathbf{j} = (0, 1, 0)$, $\mathbf{k} = (0, 0, 1)$ respectively.

$orthogonal:u \cdot v=0$; if each vector in set $length:|v|=1\implies orthonormal$
gram shcmidt: $\mathbf{u}_1 = \mathbf{v}_1, \quad \mathbf{u}_k = \mathbf{v}_k - \sum_{j=1}^{k-1} \frac{\langle \mathbf{v}_k, \mathbf{u}_j \rangle}{\langle \mathbf{u}_j, \mathbf{u}_j \rangle} \mathbf{u}_j \quad \text{for } k = 2, \ldots, n.$
### Fourier series
$\omega=\frac{2\pi}{T},f=\frac{1}{T}, \omega=2\pi f$
$e^{jk\omega t}=\cos(k\omega t)+j\sin(k\omega t)$
any periodic function may be approximated by a limited series of sines and cosine functions
conversion between time & frequency domain
![[fourier series and fourier transform.png]]
Commonly encountered, periodic signal shapes such as rectangular, squarewave or sawtooth may be described using only one of the two base functions ($sin \text{ or }cos$), since the only differentiating factor between the two is a phase delay of $90\degree$.
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
- $a_{n}$ cosine coefficients, $b_{n}$ sine coefficients
### Decibels
power amplification: $G=\frac{P_{out}}{P_{in}}$
$G_{dB}=10\log_{10}G=10\log_{10} \frac{P_{out}}{P_{in}}$
$G=10^{G_{dB}/10}$
power attenuation: $L=\frac{1}{G}=\frac{P_{in}}{P_{out}}$
$L_{dB}=10\log_{10}L=10\log_{10} \frac{P_{in}}{P_{out}}$
$L=10^{L_{dB}/10}$
# Sampling theory
![[sampling transforms.png|400]]
(t) dirac pulse --> (f) Constant amplitude full spectrum (can also be seen as infinitely wide sinc)
(t) long rect pulse --> (f) narrow sinc
(t) short rect pulse --> (f) long sinc
(t) infinitely long transmission --> (f) dirac pulse
max bandwidth frequency means the means:![[download.jpg|150]]

$\text{normalized sinc function: }sinc(t)=1(t=0)\cap \frac{\sin(\pi t)}{\pi t}(t\neq 0)$
### Sampling
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
### Reconstruction
https://www.youtube.com/watch?v=rmDg3eVWT8E
$s(t)$-->LPF(low-pass-filter) $H(\omega)$![[low pass filter signal.png|100]]-->$m_{r}(t)$-->fourier transform: $M_{r}(\omega)$ then $H(\omega)=\frac{M_{r}(\omega)}{S(\omega)}$ so $M_{r}(\omega)=H(\omega)\cdot S(\omega)$![[recovered analog signal spectrum.png|100]]-->inverse fourier transform: $m_{r}(\omega)$
![[low pass filter applied on the sample signal.png|400]]
$\omega_{m}\leq \omega_{c}\leq \omega_{s}-\omega_{m}$
$m(t)=\sum^\infty_{n=-\infty}m_{n} \frac{\sin\left( \pi f_{s}\left[ \frac{n}{f_{s}} \right] \right)}{\pi f_{s}\left[ t-\left( \frac{n}{f_{s}} \right) \right]}$
# Sampling Methods (Pulse Amplitude Modulation)
### Gating (natural sampling)
Natural sampling is a method where an analog signal $w(t)$ is allowed to pass through for a certain amount of time $\tau$ , and then not allowed again
![[gating.png|400]]
$w_{s}(t)=w(t)\cdot s(t)$ or $W_{s}(f)=W(f)*S(f)$
clock with duty cycle: $d=\frac{\tau}{T_{s}}$ can do it
$\omega_{s}(t)=\sum^\infty_{k=-\infty}\omega(kT_{s})h(t-kT_{s}) \text{ where } h(t) = \Pi\left(\frac{t}{\tau}\right) \text{ so }w_s(t) = h(t) * \left[ w(t) \sum_{k=-\infty}^{\infty} \delta(t - kT_s) \right]$
fourier series: $W_{s}(f)=d\sum^\infty_{n=-\infty}=\sin c(nd)W(f-nf_{s})$ first zero of bandwidth: $f=\frac{1}{\tau}$
![[gating sample spectrum.png|400]]
$\sin(nd)=\sin c(n\tau f)=\sin c\left( n\tau  \frac{1}{T_{s}} \right)=\sin\left( \frac{n}{3} \right)$
### Flat-top sampling (instantaneous sampling)
In flat-top sampling, the value of the analog signal is captured at the sampling instant $kT_{s}$ and held constant for the duration of the sample pulse $\tau$
Unlike gated sampling, which results in a sampled signal with varying amplitude during the sample time, Flat-top sampling produced a single voltage value for the duration of the sampling pulse duration. This makes it a practical method since the fixed value can be easily converted into a digital value.
![[flat top sampling.png|400]]
$w_{s}(t)=\sum^\infty_{k=-\infty}\omega(kT_{s})h(t-kT_{s})$ where $h(t)$ squere pulse
fourier series: $W_{s}(f)=\frac{1}{T_{s}}|H(f)|\sum^\infty_{k=-\infty}|W(f-kf_{s})|$ where $H_f=d\sin c(\tau f)$
![[flat top sampling-1.png|400]]
some high-frequency components might be altered, due to the filtering effect of flat-top sampling. This is known as aperture effect.
- resolved by narrowing pulse width $\tau$
- equalization filter with transfer func $\frac{1}{H(f)}$ where $H(f)$ e transfer function of flat-top sampling

