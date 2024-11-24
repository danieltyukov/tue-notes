# requirements
![[Course Schedule.png]]
![[learning objectives.png]]
# formula sheet
![[Formula_Sheet.pdf]]
# Analog vs Digital Communication
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

$\text{gaussian pdf: } \frac{1}{\sqrt{ 2\pi }}e^{-u^2/2}$

![[M2.2.pdf]]
![[baseband transmission proofs.png|300]]![[analog baseband transmission.png|300]]
$\text{zero-mean: }E[N_{w}(t)]=0\text{ expected value of this process is 0}$

$\text{PSD or power spectral density of }signal_{w}(t)\text{ is gaussian: } \frac{N_{0}}{2}$

$R_{N_{w}}(t,s)=E[N_{w_{t}}N_{w_{s}}^*] \text{ is autocorrelation function}$
stationary autocorrelation function means $\delta(t-s)\text{ at 2 time points means its }0\text{ only when }t=s$
**autocorrelation is correlation of a signal with a delayed copy of itself. similarity between observations of a random variable a function of the time lag between them.**
![[convolution cross correlation autocorrelation.png|400]]

higher bandwidth for an analog channel would let in higher frequency range which may let in more noise.

$\text{for analog transmission: }s(t)*w_{b}(t)=s(t)\text{ since its already baseband}$
![[20241116_175611 1.jpg|300]]

$$E[D^2(t)]=\frac{U_{0}W}{P} \frac{N_{0}}{2}2W\text{ the reason for } \frac{N_{0}}{2}2W\text{ see how definition(first point) was derived}\text{ goal is to minimize distortion}$$

$E[U^2(t)]=U_{0}W\text{ and }E[D^2(t)]=U_{0}W \frac{N_{0}W}{P}\text{ where }SDR=SNR_{b}=\frac{E[U^2(t)]}{E[D^2(t)]}=\frac{P}{N_{0}W}$

![[bandpass analog signal analysis.png|500]]
DSB-SC might not change SNR but as we see diagram we see increase in bandwidth...

![[source and channel processing for digital signal.png|500]]
discrete encoder, since the information is of the sampled signal it reduced the information, while error correction encoder adds redundant bits to later retrieve original signal in case noise is added: Like hannon encoding etc (info bits).

[COS 126: Prefix Codes](https://www.cs.princeton.edu/courses/archive/spr01/cs126/assignments/prefix.html)
[ocw.tudelft.nl/wp-content/uploads/Algoritmiek\_Huffman\_Codes.pdf](https://ocw.tudelft.nl/wp-content/uploads/Algoritmiek_Huffman_Codes.pdf)
### Side Quest: Signals
[[Intro to Telecommunication - 5ETA0]]
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
modulation can be on digital and continuous.

![[modulation-1.png|400]]
**NOTE:** PCM is technically on analog data since it converts analog signal to digital.
[What is Modulation ? Why Modulation is Required ? Types of Modulation Explained. - YouTube](https://www.youtube.com/watch?v=mHvV_Tv8HDQ&t=143s)

# Decisions Rules for DIDO Channels
![[M3.1.pdf]]
![[DIDO interpretation.png|400]]
$$\hat{M}:\text{ random variable representing decision of receiver and }M:\text{ random variable representing transmitter message}$$
$\text{probability of error }P_{e}=Pr\{\hat{M} \neq M \}$
$\text{probability of correct }P_{c}=Pr\{\hat{M}=M \}=1-P_{e}$

![[M3.2.pdf]]

[MAP Interpretation Comparison](https://chatgpt.com/g/g-67391288c44c81919e9ee7f876d22b53-communication-theory-gpt/c/673b3f36-dd20-800b-83ce-59df0d6d82bb)
![[ML example.png|400]]
MAP is always better but when equally likely symbols, ML is the same.
We still care about ML, since with it you don't need to inform the receiver what the a-priori probabilities are. Its more adaptable, overall the ML is simpler to implement.
![[map ml summary.png|400]]

Maximum Likelihood (ML) detection is generally simpler and computationally more efficient compared to Maximum A Posteriori (MAP) detection, especially when the messages are equally likely. In such scenarios, MAP simplifies to ML because the a-priori probabilities $\Pr(M = m)$ are uniform, making MAP and ML equivalent. The ML decision rule, defined as:

$\hat{m}_{ML}(r) = \arg \max_{m \in M} \Pr(R = r \mid M = m)$

focuses only on maximizing the likelihood $\Pr(R = r \mid M = m)$, bypassing the need to compute a-priori probabilities $\Pr(M = m)$. This reduces complexity, especially in systems with unknown or uniform priors. While MAP minimizes error probability by incorporating prior probabilities, ML offers a more practical and scalable solution in many applications where computational simplicity is essential.
# Decision Rules for DICO Channels
![[M4.1.pdf]]

$p_{N}(n|S=s_{m})=p_{N}(n)\text{ since N is independent of signal S}$
![[MAP and ML for DICO channel.png|400]]

![[M4.2.pdf]]

$P_{e}=\{M=1\}Pr\{R<r^*|M=1\}+Pr\{M=2\}Pr\{R\geq r^*|M=2\}$
![[threshold r star.png|500]]

![[error probability derivation.png|300]]![[error probability derivation-1.png|300]]

![[M4.3.pdf]]

square of all elements in a vector: $||n||^2=\sum^n_{i=1}n_{i}^2=(\vec{n}\cdot \vec{n})$

![[upper bound interpretation.png|300]]
Take the union, basically find a sum of points in that area we can confirm the points are in that region by seeing that the distance between the correct and the wrong signal is different as the one that is correct is always FURTHER away.
(**minimum euclidean distance decision rule**)
$||\vec{r}-\vec{s_{m}}||^2,\text{ for all }m \in M$

$argmax\text{ }f(x)=argmin \text{ }-f(x)$
