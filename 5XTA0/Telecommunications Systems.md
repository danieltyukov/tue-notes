# Modulation Formats and Wireless Networks
## Digital modulation formats
**Baseband:** no signal modulation; **Bandpass:** modulation.
![[digital modulation.png|179]]![[bandpass vs baseband.png|200]]
**Baseband Signaling (fibre optic):** Binary Modulation, Multi-level modulation (multi-level PAM) : Just PSD stuff.
[[Intro to Telecommunication - 5ETA0#Linecodes and their spectras]]
### Bandpass Signaling (Telecom)
[Passband Modulation](https://en.wikipedia.org/wiki/Passband)
Coherent detection (OOK, BPSK(sync detection), FSK) 
Non-coherent detection (OOK, FSK, DPSK)
$\text{bandpass waveform: }s(t)=R\{g(t)e^{j\omega_{c}t}\}\implies \text{Avg normalized power: }P_{S} \frac{<s^2(t)>}{R}=\frac{1}{2}<|g(t)|^2> \implies \text{Peak envelope power (PEP): }P_{PEP}=\frac{1}{2R}[max|g(t)|]^2\implies \text{Normalized PEP: }P_{PEP,norm}=\frac{1}{2}[max|g(T)|]^2$
**OOK**
$s(t)=x(t)\cos(\omega_{c}t)\to x(t)=A_{c}m(t)$
$T=\frac{1}{R(\text{bits/s})}$
$\text{periodic: }T_{0}=2T$ and $f_{0}=\frac{1}{T_{0}}=\frac{1}{2T}=\frac{R}{2}$
$\text{first zero: }B_{\omega_{T}}=2(2f_{0})$
bandpass waveform: $s(f)=\frac{1}{2}[x(f-f_{c})+x^*(-f-f_{c})]\implies x(f)=\sum^\infty_{-\infty}c_{n}\delta(f-f_{0})$
$x(t)=\sum^\infty_{\infty}c_{n}e^{jn\omega_{0}t}\implies \text{coeff}=c_{n}=\frac{1}{T_{0}}\int ^{T_{0}/4} _{-T_{0}/4} A_{c}e^{-jn\omega_{0}t} \, dt=\dots=\frac{A_{c}}{2} \frac{\sin\left( n \frac{\pi}{2} \right)}{n \frac{\pi}{2}}$![[5XTA0/attachments/ook signal.png|400]]
#### Binary Modulation
![[complex representation.png|200]]![[spectrum of bandpass.png|200]]![[signal with digital binary modulation.png|200]]
#### Bandpass Modulation Types
![[bpsk signal.png|80]]![[bpsk signal-1.png|80]]![[dpsk signal.png|80]]![[fsk signal.png|80]]![[fsk signal-1.png|80]]![[fsk signal-2.png|80]]
#### Detector Types
![[5XTA0/attachments/noncoherent detection.png|100]]![[coherent detector.png|100]]![[banspass transmitted and receiver.png|100]]![[fsk detection.png|100]]
For detection see envelope/product detectors. Converters convert bandpass to baseband.

![[matches filter receiver.png|200]]
## Wireless networks
# MAC Technologies and Fixed Networks
## Medium Access
## Wired networks
# Internetworking and Transport Reliability
## Networking
### OSI Model
[OSI Model - Text](https://en.wikipedia.org/wiki/OSI_model)
[OSI Explained - Video](https://www.youtube.com/watch?v=vv4y_uOneC0&list=WL&index=90)
![[OSI Layering.png|150]]![[OSI Layering 2.png|143]]![[OSI Layering 3-1.png|104]]![[OSI Layering 4.png|155]]
- **Application:** Protocols network apps use (HTTP,FTP).
- **Presentation:** Data modulation (SSL).
- **Session:** Manage connection (API).
- **Transport:** Data flow control (TCP(slower,feedback)/UDP).
- **Network:** Routers communication (IP(packet)/ROUTING/Pathing).
	- logical addressing: data packet (ip1,ip2/segment).
- **Data Link:** Access media, access control.
	- physical addressing:  frame (mac1/mac2/ip1,ip2/segment/tail).
- **Physical:** Bits to Physical signal and Transfer.
![[OSI Model Flow.png|300]]
### Internet Structure (Interconnection, Datagram Switching & Networks)
 **hosts** connected over **communication links** which do **packet switching and routing**
 ![[packet switching.png|200]]![[two key network core.png|200]]
- packet switching has queueing and delays.
- Circuit switching reserves a dedicated physical path for the entire connection duration.
- It is connection-oriented; a path must be established before data transmission.
- Packet switching, a connectionless method, sends data packets independently without a dedicated path.
- ISPs communicate between IXPs
![[types of switches.png|200]]![[types of switched internetworks.png|200]]
The link layer, built upon the physical layer, specifies the protocols for sending and receiving bit packets, with Ethernet being the protocol used.
[Difference Datagram Switching & Virtual Circuit](https://www.geeksforgeeks.org/difference-between-datagram-switching-virtual-circuit/#:~:text=Datagram%20packet%20switching%20is%20a,no%20need%20to%20reserve%20resources.)
[Network bridge](https://en.wikipedia.org/wiki/Network_bridge)
See GE.1C for bridging flow (Ethernet Briding and Bridging with Loops)
## Reliable communications