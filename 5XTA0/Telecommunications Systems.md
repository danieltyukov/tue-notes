# Modulation Formats and Wireless Networks (Simon)
![[ee-1.png|300]]
## Digital modulation formats
![[digital transmission baseband vs passband.png|300]]
#### why linecoding for baseband
Linecoding generally doesn't work well on bandpass signals for a few key reasons:

1. Spectral mismatch: Linecodes are designed for baseband transmission, while bandpass signals occupy a specific frequency band away from DC. This fundamental mismatch in spectral characteristics makes direct application of linecoding ineffective.

2. Loss of low-frequency components: Bandpass signals inherently lack the low-frequency components that many linecodes rely on for proper decoding and clock recovery.

3. Interference with carrier: Applying linecoding directly to a bandpass signal would interfere with the carrier frequency, potentially distorting the signal and making recovery difficult.

4. Modulation incompatibility: Bandpass signals often use specific modulation schemes (like QAM or PSK) that are incompatible with traditional linecoding techniques.

5. Increased bandwidth requirements: Attempting to apply linecoding to a bandpass signal would likely increase the bandwidth requirements beyond what's typically allocated for bandpass transmission.

Instead of linecoding, bandpass signals typically use modulation techniques specifically designed for their frequency characteristics. These methods allow for efficient use of the available bandwidth while maintaining signal integrity.

Would you like me to elaborate on any of these points or discuss alternative techniques used for bandpass signals?

#### baseband vs bandpass example
I understand this can be confusing, and I'll try to explain it in a simple way. Don't worry, you're not stupid - these concepts can be tricky! Let's break it down with an analogy and then a more technical example.

Analogy: Radio Stations

Think of baseband and bandpass like different types of radio stations:

1. Baseband (AM radio):
   - Broadcasts at a low frequency
   - Takes up a small range of frequencies near zero
   - Can only fit one station in this space

2. Bandpass (FM radio):
   - Broadcasts at higher frequencies
   - Each station occupies a specific "band" of frequencies
   - Multiple stations can exist side by side at different frequency bands

Technical Example: Sending a Simple Message

Let's say we want to send the binary message "1010" (representing some data).

Baseband Modulation:
1. We might represent this directly:
   - '1' as a high voltage
   - '0' as a low voltage
2. The signal would look like: high, low, high, low
3. This signal contains frequencies starting from 0 Hz (DC) up to some maximum

Bandpass Modulation:
1. We start with a carrier wave (let's say at 100 MHz)
2. We modify this carrier based on our data:
   - For '1', we might increase the amplitude
   - For '0', we might decrease the amplitude
3. The resulting signal is centered around 100 MHz, not at 0 Hz

Key Differences:

1. Frequency range:
   - Baseband: Starts at 0 Hz
   - Bandpass: Centered around a specific frequency (like 100 MHz)

2. Signal shape:
   - Baseband: Directly represents the data
   - Bandpass: Data modifies a carrier wave

3. Multiple channels:
   - Baseband: Typically one channel in the available spectrum
   - Bandpass: Can have multiple channels at different frequencies

4. Applications:
   - Baseband: Often used in wired communications (like Ethernet)
   - Bandpass: Common in wireless communications (like Wi-Fi, cellular)

Does this help clarify the differences? Would you like me to expand on any part of this explanation?
### Baseband Systems
[Line code - Wikipedia](https://en.wikipedia.org/wiki/Line_code)
Baseband uses lincoding for modulation
which results in PAM
[Pulse-amplitude modulation - Wikipedia](https://en.wikipedia.org/wiki/Pulse-amplitude_modulation)
Baseband is used in wire transmission


Baseband modulation techniques **encode information directly as the amplitude, width, or position of a pulse**. They do not utilize a sinusoidal carrier. Some of these modulation schemes are known by the acronyms PWM ( pulse width modulation), PPM ( pulse position modulation), and PAM ( pulse amplitude modulation).

[theory - Baseband vs Passband modulation - Signal Processing Stack Exchange](https://dsp.stackexchange.com/questions/26214/baseband-vs-passband-modulation)


low frequency signal...
**A modulated baseband signal is called a passband signal**.
Baseband is just a message signal...
[What is a Baseband Equivalent Signal in Communications? - YouTube](https://www.youtube.com/watch?v=etZARaMNN2s)
[Baseband - Wikipedia](https://en.wikipedia.org/wiki/Baseband)
- passband signal in frequency domain centered at $f_{c(carrier)}$
- to sample it we need nyquist criteria: $f_{s(sample)}\geq2B(f_{max})$
- which may be too large frequency...
- where baseband comes in so we only reconstruct around that signal
- frequency domain has duplicity in negative domain, we ignore it and take only the positive through Fourier transfer $x(t)\to F.T\to shift$ and shift to 0... $X_{+}(f+f_{c})$
- now when we sample at nyquest criteria its a much lower frequency range (beauty of baseband).
- **we moved passband to baseband**

**Baseband:** no signal modulation; **Bandpass:** modulation.

![[digital modulation.png|300]]![[bandpass vs baseband.png|300]]
**Baseband Signaling (fibre optic):** Binary Modulation, Multi-level modulation (multi-level PAM) : Just PSD stuff line coding so multilevel is like intro telecom.
[[Intro to Telecommunication - 5ETA0#Linecodes and their spectras]]

[What is Baseband and Passband? Baseband and Passband in Digital & Analog Modulation Tutorial - YouTube](https://www.youtube.com/watch?v=Wo8qeDD6H0M)
![[passband after baseband modulation.png|300]]
### Bandpass Systems
[Band-pass filter - Wikipedia](https://en.wikipedia.org/wiki/Band-pass_filter)
[Passband - Wikipedia](https://en.wikipedia.org/wiki/Passband)
[Modulation - Wikipedia](https://en.wikipedia.org/wiki/Modulation#Digital_modulation_methods)
Bandpass being at a lot higher frequencies due to carry signal applied to the message signal(the baseband signal). Making it a lot higher frequency for the purpose of antenna practicality.

#### Binary Modulation
[On–off keying - Wikipedia](https://en.wikipedia.org/wiki/On%E2%80%93off_keying)
[Amplitude-shift keying - Wikipedia](https://en.wikipedia.org/wiki/Amplitude-shift_keying)
[Phase-shift keying - Wikipedia](https://en.wikipedia.org/wiki/Phase-shift_keying)
[Frequency-shift keying - Wikipedia](https://en.wikipedia.org/wiki/Frequency-shift_keying)
[Passband Modulation](https://en.wikipedia.org/wiki/Passband)
[Understanding Amplitude Shift Keying - YouTube](https://www.youtube.com/watch?v=eJ5m0Sbr2qw)
[Understanding Frequency Shift Keying - YouTube](https://www.youtube.com/watch?v=ogJB5fiQ9kM)

Coherent detection (OOK, BPSK(sync detection), FSK) 
Non-coherent detection (OOK, FSK, DPSK)
**In coherent detection, the receiver has precise knowledge of the carrier signal's phase and frequency.**

![[Telecommunications Systems.png|200]]
$\text{bandpass waveform: }s(t)=R\{g(t)e^{j\omega_{c}t}\}\implies \text{Avg normalized power: }P_{S} \frac{<s^2(t)>}{R}=\frac{1}{2}<|g(t)|^2> \implies \text{Peak envelope power (PEP): }P_{PEP}=\frac{1}{2R}[max|g(t)|]^2\implies \text{Normalized PEP: }P_{PEP,norm}=\frac{1}{2}[max|g(T)|]^2$
$T=\frac{1}{R}$ 
$T_{0}=lT$ 
$f_{0}=D=\frac{1}{T_{0}}=\frac{R}{l}$
$B_{null}=2R$
**OOK (On-off Keying)(Amplitude Shift Keying ASK)**
$s(t)=x(t)\cos(\omega_{c}t)\to x(t)=A_{c}m(t)$
$T=\frac{1}{R(\text{bits/s})}$
$T_{0}=lT$
$\text{periodic: }T_{0}=2T$ and $f_{0}=\frac{1}{T_{0}}=\frac{1}{2T}=\frac{R}{2}\text{ in general }f_{0}=D=\frac{R}{l}\text{ and }T_{0}=lT$
$\text{first zero: }B_{\omega_{T}}=2(2f_{0})$ in general absolute bandwidth $B_{T}=2B$
bandpass waveform: $s(f)=\frac{1}{2}[x(f-f_{c})+x^*(-f-f_{c})]\implies x(f)=\sum^\infty_{-\infty}c_{n}\delta(f-nf_{0})$
$x(t)=\sum^\infty_{\infty}c_{n}e^{jn\omega_{0}t}\implies \text{coeff}=c_{n}=\frac{1}{T_{0}}\int ^{T_{0}/4} _{-T_{0}/4} A_{c}e^{-jn\omega_{0}t} \, dt=\dots=\frac{A_{c}}{2} \frac{\sin\left( n \frac{\pi}{2} \right)}{n \frac{\pi}{2}}$plug that into $x(f)$
$\text{frequency spectrum: }S(f)=\frac{1}{2}[X(f-f_{c})+X^*(-f-f_{c})]$
![[5XTA0/attachments/ook signal.png|400]]
**BPSK (Phase Shift Keying PSK)**
$s(t)=A_{c}\cos[\omega_{c}t+D_{p}m(t)]$
![[bpsk signal.png|300]]![[bpsk signal-1.png|222]]
**FSK (Frequency Shift Keying)**
$s(t)=Re[g(t) \cdot e^{j\omega_{t}t}]\text{ where }g(t)=A_{c}=e^{j\theta(t)}\text{ and }\theta(t)=\int_{-\infty}^{t} m(\tau) \, d\tau$
but for FSK $g(t)$ is hard to evaluate so we use carsons rule $B_{T}=2(\Delta F+B)$ where $B=f_{0}(1+r)\text{ where }f_{0}=\frac{R}{l}$
if sinc pulse $B=R$


always use carsons rule for FSK.
requires approximation. $f_{center}=f_{c}=\frac{f_{1}+f_{2}}{2}$
$h=\frac{2\Delta F}{R}\text{ where }\Delta F=f_{1}-f_{c}$
$\beta=\frac{\Delta F}{B}\to B=R\text{ so }B_{T}=2(\beta+1)B$
cosine roll-off: $r=\frac{f_{\Delta}}{f_{0}}\text{ so }B=f_{0}(1+r)\text{ where there is zeros at: }t=\frac{n}{2f_{0}}\text{ for no ISI }D_{max}=2f_{0}$
$\text{envelope decay: }\frac{1}{|t|^3}$ and $\text{sinc pulse: }r=0\text{ where } \frac{1}{2}f_{0}$
$f_{0}=\frac{R}{2}$

![[raised cosine roll off filtering.png|300]]

![[fsk signal-1.png|200]]![[fsk signal-2.png|200]]![[fsk spectra.png|200]]
##### Binary Modulation
![[complex representation.png|200]]![[spectrum of bandpass.png|200]]![[signal with digital binary modulation.png|200]]
##### Bandpass Modulation Types
![[dpsk signal.png|80]]![[fsk signal.png|80]]
##### Detector Types
![[5XTA0/attachments/noncoherent detection.png|100]]![[coherent detector.png|100]]![[banspass transmitted and receiver.png|100]]![[fsk detection.png|100]]
coherent: generated by same oscillator. non-coherent multiple oscillators.
For detection see envelope/product detectors. Converters convert bandpass to baseband.
![[matches filter receiver.png|200]]
#### Multilevel Modulation
[Understanding Phase Shift Keying - YouTube](https://www.youtube.com/watch?v=lDSzyEQKE6o)
[Quadrature amplitude modulation - Wikipedia](https://en.wikipedia.org/wiki/Quadrature_amplitude_modulation)
[Phase-shift keying](https://en.wikipedia.org/wiki/Phase-shift_keying)
[modulation - Envelope behavior dIfference between QPSK, OQPSK and $\\pi/4$-QPSK](https://dsp.stackexchange.com/questions/41130/envelope-behavior-difference-between-qpsk-oqpsk-and-pi-4-qpsk)
- Multi-level Phase Shift Keying (QPSK, M-PSK)
- Multi-level Quadrature Amplitude Modulation (M-QAM)
Q -> Quaternary -> $L=4$ levels -> $l=2[\text{bits/symbol}]$
![[multilevel digital modulation.png|300]]
$\text{M-PSK: }g(t)=x(t)+jy(t)=A_{c}e^{j\theta(t)}$
$\text{M-QAM: }g(t)=x(t)+jy(t)=R(t)e^{j\theta(t)}$
will primarly use $\frac{\pi}{4}QPSK$
[Constellation diagram](https://en.wikipedia.org/wiki/Constellation_diagram#:~:text=A%20constellation%20diagram%20is%20a,plane%20at%20symbol%20sampling%20instants.)
phase modulation: angles
amplitude modulation:  distance from origin
transition between states: lines
![[multilevel PSK signal constellation.png|300]]![[QAM quadrature amplitude modulation signal.png|210]]
![[PSD for M-PSK and M-QAM.png|270]]
$\text{for QPSK: }B_{nulltonull}=\frac{2R}{l}\to B_{null}=\frac{R}{l}=D$
![[spectral effiency of bandpass signal.png|300]]

![[null to null 2nd.png|300]]
BPSK: Not bandwidth efficient but not sensitive to amplitude variation and requires only two decision points: binary 1 and 0 separated by 180 deg. 

QPSK: More bandwidth efficient than BPSK but requires more decision points than BPSK. Has a complex carrier symbol with each level having 90 deg phase shift. Requires 4 decision points. Multilevel modulation formats: More bandwidth efficient in order to achieve the same data rate. However, higher order modulations are more complex to generate, e.g encoding and decoding bits, requiring more processing power and costly equipment.
##### Transmitter
![[generalized quadrature transmitter.png|200]]![[QAM transmitter in action.png|200]]![[qam receiver.png|200]]
#### Orthogonal Frequency Division Multiplexing (OFDM)
- **Principle**: OFDM divides the available bandwidth into multiple orthogonal subcarriers, each modulated with a low bit rate signal.
- **Orthogonality**: Ensures that subcarriers do not interfere with each other, allowing for efficient spectrum usage.

**type of digital transmission used in digital modulation for encoding digital (binary) data on multiple carrier frequencies.**
[OFDM Waveforms - YouTube](https://www.youtube.com/watch?v=F6B4Kyj2rLw&list=PLx7-Q20A1VYIvtMUWX3yd_sQGbQx1qPGP)
[Orthogonal frequency-division multiplexing - Wikipedia](https://en.wikipedia.org/wiki/Orthogonal_frequency-division_multiplexing)
[OFDM Network Optimization Using a QPSK Based on a Wind-Driven Genetic Algorithm - PMC](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9415329/#:~:text=QPSK%20is%20one%20of%20the,can%20undergo%20numerous%20phase%20changes.)
higher spectral efficiency than spread spectrum (other double sideband modulation schemes).
OFDM uses QPSK as a modulation scheme
used for wideband transmission
[Sideband - Wikipedia](https://en.wikipedia.org/wiki/Sideband)
![[OFDM waveforms.png|400]]
to fill more channels in the bandwidth
![[OFDM.png|300]]![[ofdm transmitter-1.png|300]]
FFT: fast fourier transform
carrier spacing: $\frac{1}{T}=\frac{B}{N}\text{ where N is number of carriers}$
$B=N \Delta f=N \frac{1}{T}$
$T=NT_{s}\text{ N chosen to be larger then delay}$
OFDM receiver: serial data recovered by: demodulating signal to produce I, Q; converting serial to parallel data; evaluating FFT; converting FFT from parallel to serial
$B_{null}=\frac{N+1}{T}=\frac{N+1}{NT_{s}} \approx \frac{1}{T_{s}}=D_{s}\text{ where }D_{s}\text{ is the symbol (Baud) rate of the input serial data of the transmitter}$
null to null oduble that
![[PSD of OFDM.png|300]]![[peak to average power ratio PAPR.png|300]]
>[!NOTE] adapting signaling
> In adaptive Bit-loading **the number of bits that can be transmitted in each subcarrier is determined by the SNR on the subcarrier**. According to Shannon's theorem we should be able to get more bps/Hz using subcarriers that have higher SNR. Data rate can be varied per carrier.

![[OFDM digital signal processing.png|300]]

$\text{relation between carrier specing, bandwidth, num of carriers: }B=N\Delta f=N \frac{1}{T}$
$T=NT_{s}\text{where T is OFDM symbol duration and }T_{s}\text{is the input signal duration}$
$IFFT:\text{each subarrier needs IFFT sample: }N_{IFFT}\geq N$

![[OFDM example.png|400]]
$\text{actual usable BW: }95MHz\to30kHz\text{ spacing}\to30kHz \cdot3168=95.04MHz$
$\text{12 subarriers per PRB that can fit in available spectrum: }12 \cdot 30kHz=360kHz/PRB$
$95MHz/360kHz/PRB=263.888PRBs\to263\text{ active PRBs}$
![[OFDM max data rate.png|300]]
#### Spread Spectrum Systems
[Spread spectrum - Wikipedia](https://en.wikipedia.org/wiki/Spread_spectrum)
spreading the signal over a large frequency band.
use bandwidth maintaining signal power: good for military low signal transmission.
![[principle idea of narrowband.png|300]]

**Spread spectrum systems:** 
**Direct sequence (DSSS):** rapid phase transition to the data to make it larger in bandwidth. (noise like signal masking).
[DSSS - Direct Sequence Spread Spectrum - YouTube](https://www.youtube.com/watch?v=-1mxYWvfVWQ)
**Frequency Hopping (FHSS):** narrow band signal jump in random narrow bands within a larger bandwidth. (doesn't spread spectrum). Hops around the band to avoid jammers(random noise targeted to specific band).
[FHSS - Frequency Hopping Spread Spectrum - YouTube](https://www.youtube.com/watch?v=CkhA7s5GIGc)
![[DSSS circuits.png|300]]![[FSSS.png|300]]
$FSK:m(t)=\cos\{\omega_{c}t+\theta(t)\}$
### Bit Error Rate performance (BER)
[Bit error rate - Wikipedia](https://en.wikipedia.org/wiki/Bit_error_rate)
![[receiving signals.png|300]]![[q and error functions.png|300]]
$N(0,\sigma^2)+jN(0,\sigma^2)\text{ with }\sigma^2=\frac{N_{0}}{2}$
Gaussian probability of error occurring.
![[BER.png|400]]
![[BER Threshold.png|200]]![[BER matched filter.png|200]]![[example of binary signaling ber.png|200]]
**matched filter reception:** $P_{e}=Q\left( \sqrt{ \frac{E_{d}}{2N_{0}} } \right)$ used to evaluate binary signaling schemes where matched filter reception is used.
![[coherent detection of bandpass digital signals.png|300]]![[coherent detection QPSK.png|300]]


**NON-COHERENT DETECTION**
![[OOK non coherent error detction.png|200]]![[FSK non coherent detection FSK.png|200]]![[non coherent detection PSK.png|200]]
$\text{DPSK prefered over BPSK doesn't need carrier recovery}$

**Union Bounds:** serves as upper bound to error probability with complex modulation with multiple alternatives, since we cant calculate the exact symbol error rate.
![[BER union bound.png|200]]![[BER multilevel signals.png|200]]
![[BER for sifferent signaling methods.png|400]]
## Wireless networks
### Introduction to Wireless Networks
![[wireless disadv.png|300]]![[wirelesswired networks.png|300]]
### Antennas, Link power budget, Atmospheric losses
[Link budget - Wikipedia](https://en.wikipedia.org/wiki/Link_budget)


[Inside Wireless: Antenna Gain - YouTube](https://www.youtube.com/watch?v=errdGMyQF6k)
[What are Antenna Gain, EIRP, and Friis Equation? - YouTube](https://www.youtube.com/watch?v=mHo2-f5V8V4)
![[antenna summary.png|400]]
$\text{isotropic receiver/transmitter: }P_{o}=\frac{P_{t}}{4\pi d^2}$
- Friis equation for gain: $P_{Rx}(d) = P_{Tx} \times G_{Tx} \times G_{Rx} \times (\frac{\lambda}{4\pi d})^2$.
- isotropic gain if at receiver or transmitter is = 1

- **Isotropic Radiator:** Theoretical antenna radiating equally in all directions.
- **Beam Width:** Measure of directivity of an antenna.
- **Sidelobes and Nulls:** Extra energy outside the main lobe and very low energy between the main lobe and sidelobes respectively.
- **Antenna Power Density (Isotropic)**: $P_{density}=\frac{P_{tx}}{4\pi d^2}\text{ where }P_{tx}\text{ is the transmitted power, and }d\text{ is the distance from the antenna (power per unit area)}$
- $G=\frac{4\pi A}{\lambda^2}$ Antenna Gain multiply it $P_{density}$ for directional antennas.
![[antenna radiiated power density.png|300]]![[antenna received power-1.png|300]]
- $\text{Frii's transmission equation: } \frac{P_{Rx}}{P_{Tx}}=G_{AT}G_{FS}G_{AR}=G_{AT}\left( \frac{\lambda}{4\pi d} \right)^2G_{AR}$
![[antenna gain exercise.png|300]]![[antenna diversity.png|300]]

![[mimo.png|200]]
$\text{Receiving power proportional: } \frac{1}{d^2}\text{ if attenaution: }d^{3.5}\text{ for example}$

- Wireless channel ALWAYS shared channel, needs sharing protocol.
- multiplexing to optimize the channel capacity.
- **space,time,frequency,code,polarization** multiplexing
- **OFDM** is time AND frequency multiplexing for example...
- **DSSS** code multiplexing where one spectrum used (spread spectrum)

$\text{antenna gain: }10\log_{10}\left( \frac{\text{new dist}^2}{\text{old dist}^2} \right)$

#### multipath propagation
**Multipath Propagation:**

- Occurs when transmitted signals take multiple paths to reach the receiver due to reflections, diffractions, and scattering from obstacles like buildings, trees, and other structures.
**Impact on Quality:**

- Causes constructive and destructive interference, leading to signal fading, distortion, and inter-symbol interference.
- Can result in poor signal quality, reduced data rates, and increased error rates.

**Reducing the Impact:**

1. **Diversity Techniques:** Use of multiple antennas (spatial diversity) or multiple frequencies (frequency diversity) to combine multiple received signals and mitigate fading.
2. **Equalization:** Signal processing techniques that compensate for the time dispersion caused by multipath propagation.
3. **Error Correction:** Implementing error correction codes to detect and correct errors caused by multipath effects.
4. **Adaptive Modulation and Coding (AMC):** Adjusts the modulation scheme and coding rate based on the channel conditions to optimize data transmission.
### Cellular Networks 1G, 2G, 3G, 4G (LTE), 5G
![[lte better.png|300]]
When a user requests for access to a LTE network, mutual authentication between the user and the network is conducted using EPS AKA procedure. An MME, upon receipt of such request, identifies the user using his/her IMSI and requests authentication vector(s) (AVs) from an HSS

[What are the advantages and disadvantages of cellular systems comprised of small cells? - Quora](https://www.quora.com/What-are-the-advantages-and-disadvantages-of-cellular-systems-comprised-of-small-cells#:~:text=Advantages%3A,-%E2%80%A2&text=Increased%20capacity%3A%20Small%20cells%20provide,existing%20networks%2C%20improving%20user%20experience.&text=Improved%20coverage%3A%20They%20fill%20in,in%20areas%20with%20weak%20signal.&text=Lower%20cost%3A%20Small%20cells%20are,than%20traditional%20macro%20cell%20towers.)
[Beamforming - Wikipedia](https://en.wikipedia.org/wiki/Beamforming)
increased capacity, better coverage, enhanced data rates
increased interference, costs, complex


**Impact of Mobility:**

1. **Signal Fading**: Rapid changes in signal strength due to movement, causing fluctuations in connection quality.
2. **Handover Issues**: Frequent handovers can lead to dropped connections or temporary loss of service.
3. **Doppler Shift**: Movement at high speeds can cause frequency shifts, affecting communication quality.
4. **Latency Variations**: Variations in latency as the user moves can impact real-time applications like voice or video calls.

[LTE (telecommunication) - Wikipedia](https://en.wikipedia.org/wiki/LTE_(telecommunication))
[Cellular network - Wikipedia](https://en.wikipedia.org/wiki/Cellular_network)
![[cellular principle.png|300]]![[capacity increase strategies.png|300]]
- High frequency for capacity 
- Low frequency for IoT and ultrareliable communications
### Local and Personal Area Networks
Radio over fiber (RoF) or RF over fiber (RFoF) refers to **a technology whereby light is modulated by a radio frequency signal and transmitted over an optical fiber link**.
[Radio over fiber - Wikipedia](https://en.wikipedia.org/wiki/Radio_over_fiber#:~:text=Radio%20over%20fiber%20(RoF)%20or,over%20an%20optical%20fiber%20link.)
[Wireless LAN - Wikipedia](https://en.wikipedia.org/wiki/Wireless_LAN)
[Bluetooth - Wikipedia](https://en.wikipedia.org/wiki/Bluetooth)
[Carrier-sense multiple access with collision avoidance - Wikipedia](https://en.wikipedia.org/wiki/Carrier-sense_multiple_access_with_collision_avoidance)

Multiple access & scheduling - ALOHA protocol
[ALOHAnet - Wikipedia](https://en.wikipedia.org/wiki/ALOHAnet)
![[aloha example.png|200]]![[wireless networks classification.png|200]]
$\text{aloha throughput: }\lambda_{P}T_{P}\exp(-2\lambda_{P}T_{P})\text{ max throughput } \frac{1}{2e}$
$\text{slotted aloha (transmission allowed only at specific times...) max throughput: } \frac{1}{e}$
- Distributed Coordination Function (DCF) • Also known as CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance)
- Local and Personal Area Networks • WLAN (IEEE 802.11x) • Bluetooth, Zigbee, etc.

![[pico and scatternets.png|400]]
[Scatternet - Wikipedia](https://en.wikipedia.org/wiki/Scatternet)
[Wireless ad hoc network - Wikipedia](https://en.wikipedia.org/wiki/Wireless_ad_hoc_network)
# MAC Technologies and Fixed Networks (Eduward)
![[ee-2.png|400]]
## Medium Access
### Basics of MAC Strategies
media access (MAC) protocol for multi user communication.
**media access control:**
- Multiplexing ('point-to-point' communication)
- Multiple Access ('multipoint-to-point' communication)

**multiplexing**
[Multiplexing](https://en.wikipedia.org/wiki/Multiplexing)
- Permanent sender-receiver connections.
- Receivers optimized for specific signals.
- Data can be continuous or packet-based, needing synchronization.
- Channels defined by physical parameters (e.g., time, frequency).
**multiple access**
[Channel access method](https://en.wikipedia.org/wiki/Channel_access_method)
- Multiple stations access and share one channel.
- Receivers handle varying transmissions and select the correct one.
- Transmission starts with a preamble for synchronization.
- Examples include Ethernet and cellular systems.
- MAC differs from MUX but both manage channel access.
- Stations are logically separated by time, frequency, or code to avoid collisions.

$\text{frequency division: }N=\frac{B_{t}-B_{guard}}{B_{c}}\text{ and adding time division: }N=\frac{m(B_{t}-B_{guard})}{B_{c}}$
$\text{where }B_{t}:\text{total available spectrum }B_{guard}:\text{guard spectrum }B_{c}:\text{channel bandwidth }m:\text{number of time slots (num of users)}$
**erlang-b**
[Erlang (unit)](https://en.wikipedia.org/wiki/Erlang_(unit))
[Erlangs B-formule](https://nl.wikipedia.org/wiki/Erlangs_B-formule)
erlang loss model: queuing system, **describes the stochastic behavior of the number of customers receiving service at a service center**
Erlang-B (Loss) model: to get a certain blocking probability, channel number and/or load should be adjusted.
N-number of channels available
you can increase channels or decrease the size of network (coverage)
![[erlang loss model.png|200]]
![[performance modelling 1.png|100]]![[performance modelling 2.png|100]]![[performance modelling 3.png|100]]![[performance modelling 4.png|100]]![[erlanf c model.png|100]]
[erlang graph reading](https://www.youtube.com/watch?v=3nDmy7Q7F5Y)
$\lambda=\text{call arrival intensity } \frac{1}{\mu}=\text{call duration } \rho_{u}=\frac{\lambda}{\mu}=Erl\text{ and }\rho=\text{total Erl}$
![[using the erlang b model.png|500]]
Erlang-C instead of block -> on hold
he see here that we get $\text{traffic load}=2 \cdot10^0=2\to 10\log_{10}(2)=3\to \text{ so }3Erl$
$\text{probability "on hold" has to wait more than t seconds: }Pr(\text{wait time>1|wait time>0})=\exp\left( -\frac{t(N-\rho)}{1/\mu} \right)$
$\text{probability user wait more than t sec: } Pr(\text{wait time >t})=Pr(\text{wait time>0}) \cdot \exp\left( -\frac{t(N-\rho)}{1/\mu} \right)$
$\text{channels per cell: } \frac{channels}{cells}$
$\text{direct formula erlang-b}=\rho_{b}=\frac{\rho}{\text{total channels N}}=\text{eg: } \frac{\ln 0.03}{250}$
![[application of erlanf-b.png|300]]

Total Call Duration (hours): Traffic Load: $\frac{\text{Total call duration (seconds)}}{\text{Duration of Observation period (seconds)}}=Erlangs$

$\text{percentage of calls dropped}=\left( \frac{\text{Num of rejected calls (no channels)}}{\text{Total num of call requests}} \right) \cdot100$
### FDMA (/ SCMA and WDMA in fibre networks)
[Subcarrier multiplexing - Wikipedia](https://en.wikipedia.org/wiki/Subcarrier_multiplexing)
[Wavelength-division multiplexing - Wikipedia](https://en.wikipedia.org/wiki/Wavelength-division_multiplexing)


[Frequency Division Multiple Access (FDMA) Techniques](https://www.geeksforgeeks.org/frequency-division-multiple-access-fdma-techniques/)
[Channelization Protocols](https://www.youtube.com/watch?v=KviHyRss-dE)
[Frequency-division multiple access - Wikipedia](https://en.wikipedia.org/wiki/Frequency-division_multiple_access)
![[fdma summary.png|300]]![[uplink downlink exmaple.png|300]]
Frequency Division Duplex: FDD: to communicate between stations
**The communication going from a satellite to ground is called downlink, and when it is going from ground to a satellite it is called uplink**
$\text{reuse frequencies: }M(\text{min dist freq reuse})=\frac{N(\text{chan avail})}{k(\text{group of chan to cell})}$

**Frequency-Division Duplex (FDD):**

- FDD uses separate frequency bands for upstream and downstream communications.
- Each direction has its own dedicated frequency band, allowing simultaneous bi-directional communication.

**Time-Division Duplex (TDD):**

- TDD uses a single frequency band but divides the time into slots.
- Communication alternates between upstream and downstream in different time slots.

![[problem downstream upstream.png|300]]

**cellular concept:** divide coverage areas into many subareas
![[example of cellular division.png|300]]![[visual show of cluster size to coverage.png|150]]
**decreasing** cluster size **increases** system capacity.
num of times cluster repeated in area inversely proportional to size of cluster.

clust size = 7
channels = 1001
area = $7\times 6=42km^2$
clusters in system = $\frac{2100}{42}=50$ -> smaller area more clusters -> more channels 
channels in system = $50 \times 1001=50050$



![[channel calculation.png|200]]![[channel calculation-2.png|200]]![[channel grapphing.png|200]]
$\text{Frequency reuse factor} = \frac{1}{M}$
**Hexagonal cell network formula:**  $M = i^2 + ij + j^2$
$\text{Total system capacity} = \left( \frac{\text{Total area}}{\text{Cluster area}} \right) \times \text{Total channels}$
$\text{Cluster area} = k \times \text{Area per cell}$
$\text{Number of clusters} = \frac{\text{Total area}}{\text{Cluster area}}$
$\text{System capacity} = \left( \frac{2100 \, \text{km}^2}{42 \, \text{km}^2} \right) \times 1001$
**Cluster size and channels per cell:** $k = \frac{N}{M}$
**Co-channel reuse ratio (Q):** $Q = (3M)^{\frac{1}{2}}$
$P_{rx}=P_{tx}(d/d_{0})^{-n}$


![[cluster size and signal quality.png|200]]![[cell capacity.png|200]]![[CI ratio vs cluster size.png|200]]
![[traffic load and call blocking probability.png|300]]![[traffic load and call blocking probability-1.png|300]]

$E=\lambda_{total} \cdot h\text{ where }\lambda \text{ arrival rate (num calls per hour) and }h\text{ avg call duration in hours}$
$\lambda=\frac{\text{requests per hour }(\lambda_{total})}{users}$

![[TDMA vs MAC technique.png|200]]![[adv disadv fdma.png|200]]![[improve fdma for higher data rates.png|200]]
### TDMA
[Passive optical network - Wikipedia](https://en.wikipedia.org/wiki/Passive_optical_network)
[Carrier-sense multiple access - Wikipedia](https://en.wikipedia.org/wiki/Carrier-sense_multiple_access)

[Time-division multiple access - Wikipedia](https://en.wikipedia.org/wiki/Time-division_multiple_access)
Shares single carrier frequency with multiple users
Less power control than CDMA, but more flexible than FDMA
Time-division multiple access (TDMA) is a channel access method for shared-medium networks. It allows several users to share the same frequency channel by dividing the signal into different time slots. The users transmit in rapid succession, one after the other, each using its own time slot.
![[TDMA sharing medium.png|300]]
required Time Division Duplex TDD.
$\text{number of carriers in a cell cluster}=\frac{B_{system}-B_{guard}}{B_{channel}}\to carriers$
$\text{users/cell}=\frac{carriers}{\text{cells in cluster}}$
$\text{trunking efficiency}=\eta_{T}=\frac{\text{Traffic in Erlang}}{Number of Channels} \cdot100\text{ TE increases as num of channel per cell increase, num of cells per cluster determine TE}$
![[trunking effiency.png|200]]
$\text{num of simultaneous users each call cluster}=\text{duplex carriers} \cdot \text{slots fit in channel}$
$\text{num cells}=\text{covered area} / \text{area per cell}$
$\text{num carriers per cell}=\text{total num carriers}/\text{num cells per cluster}$
$\text{num channels per cell}=\text{num of time slots per carrier} \cdot \text{num carriers per cells}$
now we can calculate trunking efficiency

$\text{avg user density}=\text{num users per cell}/\text{cell area}$
### CDMA
[Difference between FDMA and CDMA - GeeksforGeeks](https://www.geeksforgeeks.org/difference-between-fdma-and-cdma/)
[Code-division multiple access - Wikipedia](https://en.wikipedia.org/wiki/Code-division_multiple_access)
![[CDMA vs fdma.png|300]]
allows several users to share a band of frequencies.
it uses spread spectrum mentioned before. Using spread spectrum or spectrum hopping
$\text{spreading factor}\to G=\frac{W}{R}\text{ transmission bandwidth W and information bandwidth R(data rate)}$
faster hopping -> less probability jammer would interact with your frequency
![[direct sequence.png|300]]![[direct sequence against interferer.png|300]]
and vice versa if the jammer is spread
interference power of jamming signal reduced with processing gain: $G=\frac{R_{c}}{R_{b}}$
![[slow and fast FHSS multiple access.png|300]]

$\text{to accomodate max certain amount of users: } \frac{E_{b}}{I_{0}}=\frac{NP}{N_{0}+(K-1)P}=\dots dB$
$\text{max num of users: }K=\frac{N}{E_{b}/I_{0}}-\frac{1}{P/N_{0}}+1$
where power per chip: $P$ and bandwidth: $N$
### NOMA
coordinated multiuser access method that transmits different data streams over the same radio resources and employs detection algorithms such as SIC to decode the multiplexed data streams at the receiver.

SIC: allows decoding of two or more packets that arrived simultaneously

**Non Orthogonal Multiple Access**
uses power domain to separate signals.
![[oma vs noma.png|300]]![[oma vs noma-1.png|300]]

- users with better channel conditions, like a closer channel are allocated less power...
- Successive interference cancellation (SIC) is used at receivers.
![[nima beamforming.png|300]]

## Wired Networks
[Peer-to-peer - Wikipedia](https://en.wikipedia.org/wiki/Peer-to-peer)
[Point-to-multipoint communication - Wikipedia](https://en.wikipedia.org/wiki/Point-to-multipoint_communication)
[Network topology - Wikipedia](https://en.wikipedia.org/wiki/Network_topology)
[Digital subscriber line - Wikipedia](https://en.wikipedia.org/wiki/Digital_subscriber_line)
[DOCSIS - Wikipedia](https://en.wikipedia.org/wiki/DOCSIS#:~:text=Data%20Over%20Cable%20Service%20Interface,cable%20television%20(CATV)%20system.)

- Channel bonding **combines multiple network connections into a single, high-speed “superhighway” for your data**.
- **Optical code division multiple access** (OCDMA) is a type of multiplexing technology that is utilized in optical communication systems. It enables the simultaneous transmission of several signals over a single optical fiber, with each signal being identified by a distinct code.



[Wavelength-division multiplexing (fiber optic)(WDM) - Wikipedia](https://en.wikipedia.org/wiki/Wavelength-division_multiplexing)
-  capacity upgrade
- different transmission formats
- scalability
- wavelength routing/switching
- Wavelength spacing practically depends on
	- modulation bandwidth
	- optical filter bandwidth
	- $\Delta v=\left( \frac{c}{\lambda^2} \right)\Delta \lambda$
### Transmission Media
[Numerical aperture - Wikipedia](https://en.wikipedia.org/wiki/Numerical_aperture)
![[transmission media.png|300]]![[optical fiber transmission system.png|300]]
**attenuation:** signal get smaller.
**dispersion:** signals get mis-shaped.
**Numerical aperture** (a measure for the coupling efficiency of light into the fiber).
**numerical aperture** (**NA**) of an optical system is a dimensionless number that characterizes the range of angles over which the system can accept or emit light.
$n_{0}\sin(\theta_{0})=NA=\sqrt{ n_{1}^2-n_{2}^2 }$
![[5XTA0/attachments/TIR.png|300]]![[ray propagation.png|300]]
![[5XTA0/attachments/numerical aperture.png|300]]![[light guiding capacity.png|300]]
![[modal dispersion.png|300]]![[modal dispersion example.png|300]]
![[modal dispersion step index fiber.png|300]]![[refractive index profiles.png|300]]
![[chromatic dispersion of signle mode fibre.png|300]]![[attenuation in silica single mode fiber.png|300]]

- Polymer is ductile → POF easier to handle than silica fibre 
- Large core diameter → eases fibre coupling; small dust particles and scratches on fibre end face have less impact.

![[twister pair cable.png|300]]![[coaxial vable properties.png|300]]


Graded-index multimode fibers have a core in which the refractive index gradually decreases from the center towards the cladding. This design reduces modal dispersion compared to step-index multimode fibers, where the refractive index changes abruptly at the core-cladding boundary. The advantages are:

1. **Reduced Modal Dispersion**: The gradual change in refractive index helps to equalize the travel times of different light modes, reducing modal dispersion and allowing higher bandwidth over longer distances.
2. **Higher Bandwidth**: Because of reduced modal dispersion, graded-index fibers can support higher data rates compared to step-index fibers.
3. **Improved Signal Quality**: The reduction in dispersion leads to a cleaner signal with less inter-symbol interference, improving overall data integrity and reducing error rates.


### Optical Networking
For a star coupler with N outputs, the power loss due to splitting is: Loss (dB)=$10log⁡10(N)\text{Loss (dB)} = 10 \log_{10}(N)Loss (dB)=10log10​(N)$

Thus, the loss introduced by the star coupler increases logarithmically with the number of rooms connected.

Total allowable loss = Transmitter power - Receiver sensitivity - Link margin


bus, ring, star, mesh network topologies...
![[passive linear bus coupler.png|300]]![[simplex linear bus.png|300]]
![[simplex linear bus 2.png|300]]![[star network.png|300]]
- star topology is more power efficient, while linear grows linearly, star network levels off.
- Single hop broadcast-and-select.
- Multi-hop broadcast-and-select.
- [Single-Hop vs. Multi-Hop Networks | Advanced PCB Design Blog | Cadence](https://resources.pcb.cadence.com/blog/2023-single-hop-vs-multi-hop-networks)
![[single hop vs multi hop.png|300]]![[wavelength routing.png|300]]

- **A scalable optical network can be constructed by taking several WDM links and connecting them at a node by a switching subsystem**. Using such nodes (also called wavelength routers) interconnected by fibers.
- Avoiding λ-collision by λ-conversion
### Passive Optical Networks
[Passive optical network - Wikipedia](https://en.wikipedia.org/wiki/Passive_optical_network)
fiber-optic telecommunications network that uses only unpowered devices to carry signals, as opposed to electronic equipment. In practice, PONs are typically used for the last mile between Internet service providers and their customers.
![[ex1.png|300]]![[sol1.png|300]]
![[ex2.png|300]]![[sol2.png|300]]
![[ex3.png|300]]![[sol3.png|300]]
![[ex4.png|300]]![[sol4.png|300]]
![[ex5.png|200]]![[sol5.png|200]]![[sol5-1.png|200]]
# Internetworking and Transport Reliability (Georgios)
![[ee.png|300]]
[Border Gateway Protocol - Wikipedia](https://en.wikipedia.org/wiki/Border_Gateway_Protocol)
[Autonomous system (Internet) - Wikipedia](https://en.wikipedia.org/wiki/Autonomous_system_(Internet))
[Internet Control Message Protocol - Wikipedia](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol)
[Hierarchical routing - Wikipedia](https://en.wikipedia.org/wiki/Hierarchical_routing#:~:text=Most%20Transmission%20Control%20Protocol%2FInternet,that%20can%20deliver%20it%20directly.)
[Reliability (computer networking) - Wikipedia](https://en.wikipedia.org/wiki/Reliability_(computer_networking))
## Networking
[Difference between Hub, Switch and Router - GeeksforGeeks](https://www.geeksforgeeks.org/difference-between-hub-switch-and-router/)
**Hub:** A L1 physical device which forwards all signals to all connected devices.
**Swicth:** A L2 data device which can determine to whom the data needs to be sent. (MAC)
**Router:** A L3 network device uses a routing table, several paths for a source.(IP)

0.0.0.0/0 default route to internet
### OSI model
**IP is L3 while MAC is L2**
[OSI Model - Text](https://en.wikipedia.org/wiki/OSI_model)
[OSI Explained - Video](https://www.youtube.com/watch?v=vv4y_uOneC0&list=WL&index=90)
![[OSI Layering.png|150]]![[OSI Layering 2.png|143]]![[OSI Layering 3-1.png|104]]![[OSI Layering 4.png|155]]
![[visual of osi model.png|400]]
**APSTNDP (All People Seem To Need Data Processing)**
- **Application:** Protocols network apps use (HTTP,FTP)(host communication).
- **Presentation:** Data modulation.
- **Session:** Manage connection (API).
- **Transport:** Data flow control (TCP(slower,feedback)/UDP).
- **Network:** Routers communication (IP(packet)/ROUTING/Pathing).
	- logical addressing: data packet (ip1,ip2/segment).
- **Data Link:** Access media, access control.
	- physical addressing:  frame (mac1/mac2/ip1,ip2/segment/tail).
- **Physical:** Bits to Physical signal and Transfer.
![[OSI Model Flow.png|300]]![[routing.png|300]]

[User Datagram Protocol - Wikipedia](https://en.wikipedia.org/wiki/User_Datagram_Protocol)
[Transmission Control Protocol - Wikipedia](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)
![[UDP vs TCP.png|300]]
- UDP being a connectionless protocol, them messages are forwarded without establishing a connection between the two communicators...
- A UDP datagram consists of a datagram _header_ followed by a _data_ section (the payload data for the application). The UDP datagram header consists of 4 fields, each of which is 2 bytes (16 bits)
### Interconnected World, Datagram Switching, Datagram Networks
[Switching Techniques in Computer Networks - YouTube](https://www.youtube.com/watch?v=-HlJ4psu5aU)
[Basics of Bridge - YouTube](https://www.youtube.com/watch?v=NSDAYnixdgc)
[Datagram - Wikipedia](https://en.wikipedia.org/wiki/Datagram)
![[internet consists of.png|300]]
 **hosts** connected over **communication links** which do **packet switching and routing.**
 **packet-switching:** hosts break application-layer messages into packets. Packets go from router to router, to connect ISPs (internet service providers).
 ![[packet switching.png|200]]![[two key network core.png|200]]
- packet switching has queueing and delays.
- Circuit switching reserves a dedicated physical path for the entire connection duration. (can be TDM or FDM based).
- It is connection-oriented; a path must be established before data transmission.
- Packet switching, a connectionless method, sends data packets independently without a dedicated path.
- ISPs communicate between IXPs (Internet exchange point)
- Regional networks may arise to connect access nets to ISPS
- content provider networks  (e.g., Google, Microsoft, Akamai) may run their own network, to bring services, content close to end users.
![[network structure.png|300]]

**datagram is a transfer unit associated with packet switching network**
- header and payload sections...
![[datagram switching.png|300]]
![[types of switches.png|200]]![[types of switched internetworks.png|200]]
In the datagram-forwarding model of packet delivery, packet headers contain a destination address. It is up to the intervening switches or routers to look at this address and get the packet to the correct destination.
[1.4: Datagram Forwarding - Engineering LibreTexts](https://eng.libretexts.org/Bookshelves/Computer_Science/Networks/Book%3A_An_Introduction_to_Computer_Networks_(Dordal)/01%3A_An_Overview_of_Networks/1.04%3A_Datagram_Forwarding)

- A datagram network is **a computer network system that transmits and receives individual data packets**. It has a header that defines its source and destination addresses, in addition to additional data needed to transmit the packet.
- reordering is done by the receiver.
- The link layer, built upon the physical layer, specifies the protocols for sending and receiving bit packets, with Ethernet being the protocol used
- [Difference Datagram Switching & Virtual Circuit](https://www.geeksforgeeks.org/difference-between-datagram-switching-virtual-circuit/#:~:text=Datagram%20packet%20switching%20is%20a,no%20need%20to%20reserve%20resources.)
- [Network bridge](https://en.wikipedia.org/wiki/Network_bridge)
- See GE.1C for bridging flow (Ethernet Briding and Bridging with Loops)

[Switching Loops | Switch Networking Loop - ManageEngine OpManager](https://www.manageengine.com/network-monitoring/tech-topics/switching-loops.html#:~:text=A%20switching%20loop%2C%20or%20bridge,and%20creating%20a%20broadcast%20storm.)
A switching loop, or bridge loop, **occurs when more than one path exists between the source and destination devices**.
![[bridging with loops.png|300]]
loops are not something we want to end up with as it fills the routing tables with redundancy.
## Reliable communications
### Spanning Trees
[Spanning Tree Protocol Explained | Step by Step - YouTube](https://www.youtube.com/watch?v=japdEY1UKe4)
[What is Spanning Tree Protocol (STP)? - YouTube](https://www.youtube.com/watch?v=Sq18I90zuHQ)
[Spanning Tree Protocol (STP) - YouTube](https://www.youtube.com/watch?v=GSKoQ8ZR8rw)
#### STP Analysis Summary
Caused due to layer 2 redundancy in the first place

**Problems without STP:**
- Communication loops formed
- Unstable MAC address tables
- Duplicate Frames

**Solution with STP:**
- Just mark one port in a switch to be ignored (ignored because we still want redundancy in case other link goes down)
- BPDU(bridge protocol date unit) probe messages to discover loops (if it receives it within 2 sec)

**How to do STP:**
- Elect root bridge
- Place root interfaces into forwarding state
- Each non-root switch selects its root port
- Remaining links choose a designated port
- All other ports are put in to a blocking state

**Some info:**
- **ports**(root(best to root), designated(best route to root on link), undesignated(blocking state))
- **port states**(disabled, blocking(traffic), listening(not forwarding, not learning), learning(mac addresses), forwarding(sending, receiving traffic))
- **Lowest BID**(bridge priority/mac address) -> root bridge (determined after one communicated (BPDU) between all switches, since initially all bridges list themselves as root)
- 

![[STP basic setup.png|200]]![[election of root bridge.png|200]]
#### other

The need for the Spanning Tree Protocol (STP) arose because switches in local area networks (LANs) are often interconnected using redundant links to improve resilience should one connection fail.  However, this connection configuration creates a switching loop resulting in broadcast radiations and MAC table instability.  If redundant links are used to connect switches, then switching loops need to be avoided.


[Spanning Tree Protocol - Wikipedia](https://en.wikipedia.org/wiki/Spanning_Tree_Protocol)
[Switching loop - Wikipedia](https://en.wikipedia.org/wiki/Switching_loop)
Hubs are L1, which form connection to devices, and are interconnected through bridges forming a network.
![[interconnected ethernets.png|400]]
**circles: switches(bridges), squares: hubs(terminal,node)**
- One bridge is the root Union of shortest paths to root = spanning tree.
- Many spanning trees possible Bridge B2 out of tree Ports in B7, B4 deactivated.
- Rule 1: Root = bridge with smallest ID. **B1**
- Rule 2: Each network has one designated bridge closest to the root. Each bridge selects the port that gives best path to root. **why B3 eliminated**
- Rule 3: If two bridges tie in distance from the root, the smallest ID wins **Distance = # hops**. **why loop to B7 disconnected**. $dist=bridge-bridge$
![[perlman spanning tree.png|300]]![[perlman STP.png|300]]
**numbers in image below are ports**
![[5XTA0/attachments/STP example.png|300]]![[stp example 2.png|300]]
![[stp 3.png|300]]
**limitations of bridges:**
- Forwarding tables can get huge: one entry per node!
- Too much flooding until forwarding tables converge
- Trees can be misbalanced
	- Bridges can become hotspots

![[stp p2.png|300]]![[stp p2 2.png|300]]

### Address Resolution Protocol & L2 to L3 traversal (Link Layer Routing & ARP)
**Address Resolution Protocol (ARP) is a protocol or procedure that connects an ever-changing Internet Protocol (IP) address to a fixed physical machine address, also known as a media access control (MAC) address, in a local-area network (LAN).**

[Address Resolution Protocol - Wikipedia](https://en.wikipedia.org/wiki/Address_Resolution_Protocol)
[What Is Address Resolution Protocol (ARP)? | Fortinet](https://www.fortinet.com/resources/cyberglossary/what-is-arp#:~:text=Address%20Resolution%20Protocol%20(ARP)%20is,%2Darea%20network%20(LAN).)
![[address resolution protocol ARP.png|300]]

**Address Resolution Protocol**
Table of IP <-> physical address bindings: entries expire after 15min

Step 1: broadcast request if IP not in table
Step 2: target machine responds with its physical address
Step 3: table refresh at receiver machines
	If requestor already in table, restart expiration timer
	Else if receiver=target machine, add entry for requestor
	Else, do not update
Physical address could be an extra column of routing table
![[addr res protocol.png|400]]

**hub: L1**
**router: L3**
**left part is L2**
![[l2 to l3 traversal.png|400]]
- Assume that every device has empty forwarding tables.
- Show all the steps taken by the network so that HTTP request from A reaches S.
1. ARP request with target address 200.0.0.11
	1. Router rejects the request as target is in same domain as requestor
	2. S replies with own MAC address
2. Frame composed and sent to MAC 8A:53
3. Switch checks on forwarding table and forwards directly to S
4. IP identifies target address 156.64.199.21 is out of local domain. Go to gateway 200.0.1.1
5. ARP request with target address 200.0.1.1
	1. Router replies with own MAC address 71:D4
6. Frame composed and sent to MAC 71:D4
7. Router checks on routing table and forwards directly through eth1 to 156.64.199.21
### Traversal Exercise
**Forwarding (link layer):** select an output port based on destination address and routing table.
**Routing (network layer):** process by which routing table is built.
![[fowarding table.png|300]]![[routing table.png|300]]
**routing tables:**
![[traversal and router table.png|400]]
router: L3
everything before the router to the right: L2
hub: L1 so we skip it since A is L2
![[address resolution protocol-1.png|300]]

**Assume that every edge device has empty forwarding tables. Show all the steps taken by the**
**network so that HTTP request from A reaches S and another one reaches W.**
![[telecom structure.png|400]]
**S:**
1. ARP request with target address **200.0.0.11**
	1. Router rejects the request as target is in same domain as requestor
	2. S replies with own MAC address
2. Frame composed and sent to MAC **8A:53**
3. Switch checks on forwarding table and forwards directly to S
![[more indepth view.png|400]]
**W:**
1. IP identifies target address **156.64.199.21** is out of local domain. Go to gateway **200.0.1.1**
2. ARP request with target address **200.0.1.1**
	1. Router replies with own MAC address **71:D4**
3. Frame composed and sent to MAC **71:D4**
4. Router checks on routing table and forwards directly through **eth1** to **156.64.199.21**
![[routing to W detailed.png|400]]
###  Internetworking & Reliable Transport
#### Internet Protocol Packets
![[ip packet format.png|400]]
![[router data transmission packets.png|300]]![[packet fragmentation.png|300]]
**IP Packet Fragmentation**
- One IP packet split into multiple link-layer packets
- One IP packet split into multiple link-layer packets
- **Indent** (Identifier of fragment sequence), **Flags**(More fragments to follow?), **Offset** (pointer to the first byte from original IP packet this payload corresponds to measured in 8-byte blocks)
#### IP Datagram Forwarding
[IP address classes explained | class A , B ,C ,D ,E | Free CCNA 200-301 - YouTube](https://www.youtube.com/watch?v=0dFNpNgiTAA)
![[datagram forwarding.png|400]]![[example of datagram forwarding.png|200]]
#### IP Subnets
[Classless Inter-Domain Routing - Wikipedia](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
[Subnet - Wikipedia](https://en.wikipedia.org/wiki/Subnet)
split the last part of IP from host id to subnetid.hostid

- Physical networks with same Network ID
- Network IDs from class A or B addresses
- IP split: $\text{network-num.subnet-id.host-id}$
- Network IDs from class A or B addresses
- subnet_mask AND ip_address = subnet_number
- subnet_number = $\text{network-num.subnet-id}$
![[ip subnet example.png|300]]![[i subnet forwarding.png|300]]
![[ip subnet forwarding.png|300]]![[classless adressing CIDR.png|300]]

![[CIDR.png|400]]
- Group addresses under common prefixes
- Instead of subnet masks use /X notation
- Assumed subnet masks of X first bits equal to 1
- 192.4.16/20 represents all addresses from 192.4.16 to 192.4.31

If ethernet address known, route to IP router...
IP characteristics, packet structure & fragmentation...
IP addresses, subnetting, forwarding tables...
Classless Addressing...

![[ip addressing-1.png|300]]
/24 subnet indicating that the first 24 bits are common. since **8bits.8bits.8bits.8bits**
[IP addressing and Subnetting | CIDR | Subnet | TechTerms - YouTube](https://www.youtube.com/watch?v=OqsXzkXfwRw)
### Distance Vector Routing
- **determines the best route for data packets based on distance**.
- find lowerst cost path between nodes
- **dynamic approach:** distance vector path built during...
[Distance-vector routing protocol - Wikipedia](https://en.wikipedia.org/wiki/Distance-vector_routing_protocol#:~:text=A%20distance%2Dvector%20routing%20protocol,router%20counts%20as%20one%20hop.)
[Routing Information Protocol - Wikipedia](https://en.wikipedia.org/wiki/Routing_Information_Protocol)
[Bellman–Ford algorithm - Wikipedia](https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm)
![[starting spot.png|300]]

each node(**router**) has a cost, and it is shared with neighboring nodes.
![[init state DV.png|300]]![[dv node init state.png|300]]
![[final state DV.png|300]]![[DV final state.png|300]]
**Bellman ford:**
- each router had original vector of costs to all other routers
- every (T sec) each router sends its routing table to neighbour
- each router updates its table based on info
- can deal with node failures/instability

[Route Poisoning and Count to infinity problem in Routing - GeeksforGeeks](https://www.geeksforgeeks.org/route-poisoning-and-count-to-infinity-problem-in-routing/)
![[count to infinity problem.png|300]]![[split horizon poison reverse.png|300]]
- connection to E cut so A gets stuck in a loop with (B,C) in cost distance to E...
- sol1: small num to approx infinity eg: 16
- sol2: split horizon, no routesl earned from neighbour back to neighbour
- sol3: split horizon poison reverse
[Split horizon route advertisement - Wikipedia](https://en.wikipedia.org/wiki/Split_horizon_route_advertisement)


[Routing Information Protocol - Wikipedia](https://en.wikipedia.org/wiki/Routing_Information_Protocol)
To prevent routing loops, RIP imposes a limitation on the number of hops allowed in a path from the source to the destination.
![[RIP table.png|300]]
### Link State Routing
![[link state example.png|300]]
[Link-state routing protocol - Wikipedia](https://en.wikipedia.org/wiki/Link-state_routing_protocol)
[Open Shortest Path First - Wikipedia](https://en.wikipedia.org/wiki/Open_Shortest_Path_First)
[Dijkstra's algorithm - Wikipedia](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)
- This contrasts with distance-vector routing protocols, which work by having each node share its routing table with its neighbors, in a link-state protocol the only information passed between nodes is _connectivity related_.
- OSPF uses Djikstra
- The cost factors may be the distance of a router (round-trip time), data throughput of a link, or link availability and reliability, expressed as simple unitless numbers.
- **TTL (Time to Live)** determines how far a Link State Packet (LSP) can travel within the network. It limits the number of hops an LSP can make starting from its originator.

- **static approach:** pre calculate path.
- sends info to all nodes not only neighbors.
![[link state packet.png|300]]![[reliable flooding.png|300]]
![[djikstra example.png|300]]![[in practice.png|300]]
![[forward search algorithm.png|300]]
## Practice
![[table.png|300]]![[the network 2017.png|300]]
![[2017.png|300]]![[2017 R1 interactive.png|300]]
![[2017 R2.png|300]]
- terminal routing table is always a default gateway
- routing table of a router will always have a default gateway at e0
- the connecting route TO R1 (copy) of actual
- the connecting route FROM R1 changed to (/32) to specify unique network
- S1 is root since it has the smallest cost


![[2018.png|300]]![[2018 quiz.png|300]]
...


