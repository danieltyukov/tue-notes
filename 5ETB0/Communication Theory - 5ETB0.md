# requirements
![[Course Schedule.png]]
![[learning objectives.png]]
# formula sheet
![[Formula_Sheet.pdf]]

# Course Introduction, Motivation, and Math Preamble
![[M1.1.pdf]]

![[M1.2.pdf]]

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
## Important Definitions
### MAP Decision Rule
$\Pr\{M = f(r)\} p_R(r|M = f(r)) \geq \Pr\{M = m\} p_R(r|M = m), \forall m \in M$
### Error Probability (Scalar System)
$P_e = \Pr\{M = 1\} \Pr\{R < r^*|M = 1\} + \Pr\{M = 2\} \Pr\{R \geq r^*|M = 2\}$
### Decision Variable (Gaussian Noise)
$\Pr\{M = m\} p_R(r|M = m) = \Pr\{M = m\} \frac{1}{\sqrt{2 \pi \sigma^2}} \exp\left(-\frac{(r - s_m)^2}{2 \sigma^2}\right)$
### Threshold for Decision Rule
$r^* = \frac{s_1 + s_2}{2}$ (when equal probabilities)
### Error Probability for AGN Channel
$P_e = Q\left(\frac{|s_1 - s_2|}{2 \sigma}\right)$ where $Q(x)$ is the Q-function.
### Multi-Vector Channel Decision Variables
$\Pr\{M = m\} p_{R_1, R_2}(r_1, r_2|S = s_m), \forall m \in M$
### Minimum Euclidean Distance Decision Rule
$m̂ = \arg\min_m \|r - s_m\|^2$
### Additive Gaussian Noise Channel (Vector Form)
$r = s + n$, where $n \sim \mathcal{N}(0, \sigma^2 I)$

### Optimum Receiver Decision Threshold
- For a scalar bi-AGN channel, the threshold $r^*$ for the optimum receiver is:
$$r^* = \frac{\sigma^2}{s_1 - s_2} \ln\left(\frac{\Pr\{M=2\}}{\Pr\{M=1\}}\right) + \frac{s_1 + s_2}{2}$$
- When $\Pr\{M=1\} = \Pr\{M=2\}$, the threshold simplifies to:
$$r^* = \frac{s_1 + s_2}{2}$$
### Error Probability (Scalar System)
- General formula:
$$P_e = \Pr\{M=1\} \Pr\{R < r^*|M=1\} + \Pr\{M=2\} \Pr\{R \geq r^*|M=2\}$$
### Error Probability Components
- $\Pr\{R \geq r^*|M=2\}$:
$$\Pr\{R \geq r^*|M=2\} = Q\left(\frac{r^* - s_2}{\sigma}\right)$$

- $\Pr\{R < r^*|M=1\}$:
$$\Pr\{R < r^*|M=1\} = Q\left(\frac{s_1 - r^*}{\sigma}\right)$$

### Error Probability for AGN Channel
- Combining the above:
$$P_e = \Pr\{M=1\} Q\left(\frac{s_1 - r^*}{\sigma}\right) + \Pr\{M=2\} Q\left(\frac{r^* - s_2}{\sigma}\right)$$

### Error Probability Using Distance
- For vector channels:
$$P_e \leq \sum_{m \in M} \frac{1}{|M|} \sum_{m' \neq m} Q\left(\frac{\Delta_{m'm}}{\sigma}\right)$$
where $\Delta_{m'm} = \|s_{m'} - s_m\|/2$ is the half-distance between signal points.

### Error Probability Upper Bound
- Upper bound using union bound:
$$P_e \leq \sum_{m \in M} \frac{1}{|M|} \sum_{m' \neq m} Q\left(\frac{\|s_{m'} - s_m\|}{2\sigma}\right)$$

### Q-function and Properties
- Q-function definition:
$$Q(x) = \int_{x}^{\infty} \frac{1}{\sqrt{2\pi}} \exp\left(-\frac{\alpha^2}{2}\right) d\alpha$$
- Symmetry property:
$$Q(x) = 1 - Q(-x)$$

### Probability of Error for a Hyperplane
- For the AGN vector channel:
$$P_I = Q\left(\frac{\Delta}{\sigma}\right)$$
where $\Delta$ is the perpendicular distance from the signal point to the hyperplane.
# Waveform Channels
![[M5.1.pdf]]

![[M5.2.pdf]]

### Energy of a Waveform
$E_x = \int_{-\infty}^{\infty} x^2(t) dt$
### Orthogonality of Waveforms
$$\int_{-\infty}^{\infty} \phi_i(t) \phi_j(t) dt = 
\begin{cases} 
E_i & \text{if } i = j \\
0 & \text{if } i \neq j 
\end{cases}$$
### Synthesis of Waveforms
$sm(t) = \sum_{i=1}^{N} sm_i \phi_i(t), \quad \forall m \in \{1, 2, \dots, |M|\}$
### Recovery of Signal Vector
$r_i = \int_{-\infty}^{\infty} r(t) \phi_i(t) dt, \quad \forall i \in \{1, 2, \dots, N\}$
### Additive Noise in Signal Vector
$r_i = sm_i + n_i, \quad \text{where } n_i = \int_{-\infty}^{\infty} n_w(t) \phi_i(t) dt$
### Vector Representation of Noise
$n(t) = \sum_{i=1}^{N} n_i \phi_i(t)$
### Relevant Noise Covariance
$$E[N_i N_j] = 
\begin{cases} 
\frac{N_0}{2} & \text{if } i = j \\
0 & \text{if } i \neq j 
\end{cases}$$
### Signal Space Projection
$r(t) = \sum_{i=1}^{N} r_i \phi_i(t)$

### **Gram-Schmidt Process** (See Question 5.1)
### Step 1: Define the First Basis Function
$\phi_1(t) = \frac{s_1(t)}{\sqrt{E_1}}, \quad \text{where } E_1 = \int_{-\infty}^{\infty} s_1^2(t) dt\text{ and }s_{11}=\sqrt{ E_{1} }$
### Step 2: Define the Auxiliary Signal for Subsequent Functions
$\theta_m(t) = s_m(t) - \sum_{i=1}^{n-1} sm_i \phi_i(t)$  
where  
$sm_i = \int_{-\infty}^{\infty} s_m(t) \phi_i(t) dt$
### Step 3: Compute Energy of Auxiliary Signal
$E_{\theta_m} = \int_{-\infty}^{\infty} \theta_m^2(t) dt$
### Step 4: Define the New Orthogonal Basis Function
$\phi_n(t) = \frac{\theta_m(t)}{\sqrt{E_{\theta_m}}}$
### Step 5: Express Each Signal in Terms of Basis Functions
$s_m(t) = \sum_{i=1}^{N} sm_i \phi_i(t)$

#### **see 5.1.c for a different distance based approach**
#### **see 5.4 and 5.7 for an intuition on gram-schmidt process**
# Receiver Implementation, Matched Filters
![[M6.1.pdf]]

16 messages -> 16 filters needed (needed same amount as messages)

![[M6.2.pdf]]

$SNR=\frac{u_{s}^2(T)}{E[U_{n}^2(T)]}=\frac{E_{s}}{\frac{N_{0}}{2}}$
![[matched filter signal to noise ratio.png|400]]

$||\vec{r}-\vec{s_{m}}||^2=||\vec{r}||^2-2(\vec{r} \cdot \vec{s_{m}})+||\vec{s_{m}}||^2$
$\text{optimum receiver: }\hat{m}=argmax_{m \in M}\{(\vec{r} \cdot \vec{s_{m}})+c_{m} \}\text{ where }c_{m}=\frac{N_{0}}{2}\ln Pr\{ M=m \}-\frac{||\vec{s_{m}}||^2}{2}$
![[correlation receiver.png|500]]
![[macther filter receiver.png|500]]
![[direct receiver.png|500]]
# Signal Energy Considerations, Orthogonal Signals
![[M7.1.pdf]]

![[M7.2.pdf]]

Translation and rotation of signal structures maintain the signal energy $E$.

Average energy:
$E_{\text{av}} \triangleq \sum_{m \in M} \Pr\{M = m\} E_{s_m} = \sum_{m \in M} \Pr\{M = m\} \|s_m\|^2 = E[\|S\|^2].$
![[signal structure.png|400]]

**Binary Orthogonal vs. Binary Antipodal Signals:** - For binary orthogonal signaling, the error probability under AWGN is $$ P_{e,\text{orthog.}} = Q\biggl(\sqrt{\tfrac{E_s}{N_0}}\biggr). $$ - For binary antipodal signaling, the error probability is $$ P_{e,\text{antipod.}} = Q\biggl(\sqrt{\tfrac{2E_s}{N_0}}\biggr). $$ To achieve the same $P_e$, orthogonal signaling requires twice the energy of antipodal signaling (a 3 dB disadvantage).

Antipodal signaling is more energy-efficient than orthogonal signaling in the binary case.

![[antipodal vs orthogonal vector.png|400]]
![[optimum receiver.png|400]]

$\text{energy per transmitted but of information: }E_{b}=\frac{E_{s}}{\log_{2}|M|}$

![[reliable communication achieved.png|400]]
![[more messages higher energy for same Pe needed.png|400]]
# Message Sequences, Bandwidth
![[M8.1.pdf]]

$\mathcal{M}=\text{number of messages}$

![[M8.2.pdf]]

# Capacity of the Baseband and Wideband Channels
![[M9.1.pdf]]

![[M9.2.pdf]]
# Pulse Transmission
![[M10.1.pdf]]

![[M10.2.pdf]]

# Pass-Band Channels
![[M11.1.pdf]]

![[M11.2.pdf]]

![[quandrature multiplexing.png|500]]
Q1: $N_{c}+N_{s}$.
Q2: Set frequency $f_{0}=0$ (2nd addition of sine is now 0) and the number of cosine building block waveforms $N_{c}=1$.
Q3: 1

![[QAM modulation.png|300]]![[qam modulator scheme.png|300]]
![[constelaltion diagrams.png|300]]![[higher MCS rate = higher required sir.png|300]]

[Inside Wireless: QAM modulation (Quadrature Amplitude Modulation) - YouTube](https://www.youtube.com/watch?v=IbUflaeJcU8)
![[constellation diagram bits per symbol.png|300]]![[more qam better time signal sent.png|300]]
![[qam modulation animation.png|300]]![[16 qam animation.png|300]]

![[quadrature recovery.png|300]]![[show how changing the frequency moves one of the components in frequency domain to be extracted.png|300]]

[Quadrature Amplitude Modlation (QAM): Explained - YouTube](https://www.youtube.com/watch?v=1asY7-NZ93g)

![[demodulator of qam.png|400]]
[Quadrature amplitude modulation - Wikipedia](https://en.wikipedia.org/wiki/Quadrature_amplitude_modulation)

$\text{capacity in bit per dimension: }C_{N}=\frac{1}{2}\log_{2}\left( 1+\frac{P_{s}}{2N_{0}W} \right)\left[ \frac{bit}{dimension} \right]$
$\text{capacity per bit per second: }C=4WC_{N}\left[ \frac{bit}{second} \right]$

$\text{dealyed signal version: }s(t-\Delta)+n_{w}(t)$

![[coherent reception.png|300]]![[pulse shaping function.png|300]]
[What You Need to Know about Wideband Signal Analysis](https://www.keysight.com/blogs/en/tech/rfmw/2021/04/19/what-you-need-to-know-about-wideband-signal-analysis)

![[serial quadrature.png|400]]
# Random Carrier-Phase
coherent vs **incoherent** reception: no knowledge of $\theta$ means there is only cosine but it can be decomposed to have the sine component.

$\cos(a-b)=\cos a\cos b+\sin a\sin b$
![[incoherent signal decomposition.png|400]]

![[M12.1.pdf]]

![[M12.2.pdf]]

**optimum incoherent reception (and when equal energy)**
![[optimum incoherent reception.png|300]]![[optimum reception equal energy.png|300]]
![[incoherent receiver structure.png|400]]

**envelope simplified representation**
![[output of simplified filter.png|300]]![[receiver structure.png|300]]
the green box the linear filter is a basically a mix of baseband and passband(carrier) signals.

![[envelope dection example.png|500]]
i. we have a binary message, ii. vector representation of the received signal in the time domain, iii. linear filter: invert + delay, iv: what you get out of the linear filter,  v: then you get the envelopes, and now you can optimally detect messages (receive something close to 1 then message 2 and if close to 0 then message 1).

If message 1 if just inverted of message 1: would be identical to $u_{2}(t)$, so cant detect message differences: **antipodal signaling** BUT in **coherent** reception we have the phase so we can differentiate between them. For **incoherent** we dont have the phase so we cant differentiate. **ANTIPODAL SIGNALING DOES NOT WORK IN INCOHERENT RECEPTION.**

only orthogonal signaling possible...

![[random phase transmission, maximization.png|400]]
![[same energy maximization.png|400]]

# Nice to knows
signal like this can be split in the following way:
$s(t)=\sum^\infty_{k=0}a_{k}\phi(t-kT)\psi_{I}(t)+b_{k}\phi(t-kT)\psi_{Q}(t)$
where:
- **Message component:**$(a_{k},b_{k})$ encodes the actual data.
- **Building block:**$\phi(t-kT)$ structures the signal in time, shapes it in frequency and minimizes the inter-symbol interference.
- **Carrier component:**$\psi(t)$ modulates the signal to the desired transmission frequency while preserving orthogonality between **in-phase** and **quadrature** components.

# Invited Lecture
![[5ETB0_Invited_Lecture_Optical_Satellite_Communications.pdf]]

- Satellites operate on RF band -> could be a problem?
- Infrared c-band spectrum -> allows a much larger bandwidth that classic RF like FM or 5G MMWAVE BAND.

	- Sat RTT: 46ms and 
	- Great circle fibre: 55ms  -> takes longer over long distance than satellite.
	- free space optical communication is better over long distance than RF.

FSO vs RF 
$P_{R}=\eta P_{r}\left( \frac{\pi Dr}{\lambda} \right)^2\left( \frac{\pi D_{R}}{\lambda} \right)^2\left( \frac{\lambda}{4\pi R} \right)^2$ Receive power 
proportional to: $\frac{1}{\lambda^2}\text{ and }f^2$
**Example:** Ka-band vs FA
with RF Ka-band (30GHz) vs FSO C-band (193 THz).
This gives about **75 dB gain** in receive power for FSO over RF.
Assuring antenna $D_{T}$ and $D_{P}$ transmit power $P_{T}$ distance $R$ all the same.


objective of communication networks:
- throughput
- reliability
- high-availability
- low-latency

minimizing:
- cost per bit
- bandwidth / wavelength
- power/safety
- form factor (size/weight)
- complexity of the system

UP link: diversity gain: temporal diversity, spatial diversitty, site diversity, frequency diversity.

![[Pasted image 20250123224550.png]]