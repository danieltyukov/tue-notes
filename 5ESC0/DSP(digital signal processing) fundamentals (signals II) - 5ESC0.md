# Info (delete after)
- **discrete-time system** in time and frequency domain with impulse response, frequency response, transfer function (Z-transform), and differential equation.
- relation between **continuous-time to discrete-time** signals and systems.
- **discrete-time stochastic** signal properties.
- how a **linear system can influence a stationary random input** signal.
- **stochastic signal processing** concepts.
- signal&systems, sampling, mathematical analysis tools and transformers, intro to stochastic signals processing. 
- first 3: Ch 1,  Ch 2, Chs 6 and 7, Ch 5, Ch 10, Ch 8, Ch 9. for Shaum book and Ch 3 for last part Statistic book.

- exam: 1 A4 paper notes 
- 30% labs
# Preknowledge
$z=|z|e^{j\theta}=Re\{ z \}+j \cdot Im\{ z \}\to \text{conjugate: }-j$
$\text{euler: }e^{j\theta}=\cos \theta+j\sin \theta \text{ where }\cos \theta=\frac{e^{j\theta}+e^{-j\theta}}{2}\text{ and }\sin \theta=\frac{e^{j\theta}-e^{-j\theta}}{2j}$
[Geometric series - Wikipedia](https://en.wikipedia.org/wiki/Geometric_series)
$iff\text{ } \text{ then convergence }|z_{0}|<1\text{ }\sum^\infty_{n=0}(z_{0})^n=\frac{1}{1-z_{0}}\text{ otherwise divergence }|z_{0}|\geq 1$
$\sum^{M-1}_{n=0}(z_{0})^n=\frac{1-z_{0}^M}{1-z_{0}}\text{ another geometic serie type???}$
$\text{zeros of a complex equation: }a\text{ being complex number find zeros: }z^N-a=0\to z^N=a=ae^{jk \cdot_{2}\pi}\to z_{k}=a^{1/N} \cdot e^{jk \cdot 2\pi/N}\text{ for }k=0,1,\dots,N-1$
$z_{0}=r_{0}e^{j\theta_{0}}\to \text{conjugate: }z_{0}^*=r_{0}e^{-j\theta_{0}}\to \text{mirroring: } z_{0,mirr}=\left( \frac{1}{z_{0}} \right)^*=\frac{1}{r_{0}}e^{j\theta_{0}}\to \text{reversing }z_{0,rev}=z^*_{0,mirr}=\frac{1}{r_{0}}e^{-j\theta_{0}}=\frac{1}{z_{0}}$
![[convolution.jpg]]

![[mirroring and conjugation.png|400]]

# Signals and System
$x(t)\text{ continuous(analog) }x[n]\text{ discrete(digital)}$
**MONDAY NOTES**
# Fourier Analysis
$\omega \cdot T_{s}=2\pi f \cdot \frac{1}{f_{s}}\text{ where normalized frequency: }\theta=2\pi\left( \frac{f}{f_{s}} \right)\text{ as }f,\omega=\text{ absolute frequency}$
[[Fourier Analysis - Transform(Series)]]
# Sampling
# Mathematical analysis tools, Transformers


