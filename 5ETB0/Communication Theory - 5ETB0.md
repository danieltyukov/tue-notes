# requirements
![[Course Schedule.png]]
![[learning objectives.png]]
# formula sheet
![[Formula_Sheet.pdf]]
# analog vs digital communication
[[Math II - 5EMA0]]
[[DSP(digital signal processing) fundamentals (signals II) - 5ESC0]]
![[5ETB0/slides/M2.1.pdf]]
$\omega=2\pi f$
$|G(f)|^2=G(f) \cdot G^*(f)$
$\text{energy of pulse g: }E_{g}= \int_{-\infty}^{\infty} g^2(t) \, dt$
$\mathcal{A}=\{a_{1},a_{2}\}\text{ and }\mathcal{B}=\{b_{1},b_{2},b_{3}\}\text{ so }|\mathcal{A} \times \mathcal{B}|=6$
$f(x^*)=f^*=min_{x}\{f(x)\}\text{ and }x^*=argmin_{x}\{f(x)\}$
$|\text{ in probability means: (given that)}$
![[prdr.png|200]]
$p_{R}(r)dr\text{ probability }R\text{ takes value between }r\text{ and }r+dr$

Conditional PDF formula can be thought of of as Discrete Input, Continuous Output probability. $p_{R}(r|X=x)$.
![[M2.2.pdf]]
![[baseband transmission proofs.png|400]]
$\text{zero-mean: }E[N_{w}(t)]=0\text{ expected value of this process is 0}$
$R_{N_{w}}(t,s)\text{ is autocorrelation function}$
stationary autocorrelation function means $\delta(t-s)\text{ at 2 time points means its }0\text{ only when }t=s$

**autocorrelation is correlation of a signal with a delayed copy of itself. similarity between observations of a random variable a function of the time lag between them.**
![[convolution cross correlation autocorrelation.png|400]]

higher bandwidth for an analog channel would let in higher frequency range which may let in more noise.

discrete encoder reduces size of information sent whilst the error correction encoder adds redundant bits in order to retrieve the original signal in case noise is added.

### Side Quest: Signals
Bandwidth of a signal is defined as **the difference between the highest and the lowest frequency**

$$f_{m}\text{ max spectrum frequency so }f_{s}\text{ sampling and nyquist }f_{s}\geq 2f_{m}\text{ to avoid overlapping, since nature of sampling produces aliasing}$$
![[baseband analog signal before and after sampling.png|300]]
[Baseband vs Bandpass](https://electroagenda.com/en/signal-propagation-in-communications/)
bandpass basically produces another carrier signal
![[baseband bandpass.png|300]]
Bandpass signal is created when modulation or a constant carrier signal is added to the orignal message signal which **is important for open air transmission in a noisy environment so you can occupy your specific carrier frequency spectrum and your bandwidth of it.**
![[modulation.png|300]]
[Sampling in Digital Communication - GeeksforGeeks](https://www.geeksforgeeks.org/sampling-in-digital-communication/)
![[quantization and encoding.png|500]]
after sampling we can encode and digitize our signal to then transmit this information.

Modulation maps the digital signal onto a carrier wave, which is better suited for transmission over the chosen medium. It modifies the carrier wave’s properties (amplitude, frequency, or phase) to encode the information.
![[modulation of digital signal.png|500]]