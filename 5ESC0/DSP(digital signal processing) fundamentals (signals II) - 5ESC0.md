# Pre-knowledge
![[Introduction_5ESC0 (4).pdf]]
$z=|z|e^{j\theta}=Re\{ z \}+j \cdot Im\{ z \}\to \text{conjugate: }-j$
$\text{euler: }e^{j\theta}=\cos \theta+j\sin \theta \text{ where }\cos \theta=\frac{e^{j\theta}+e^{-j\theta}}{2}\text{ and }\sin \theta=\frac{e^{j\theta}-e^{-j\theta}}{2j}$
[Geometric series - Wikipedia](https://en.wikipedia.org/wiki/Geometric_series)
$iff\text{ } \text{ then convergence }|z_{0}|<1\text{ }\sum^\infty_{n=0}(z_{0})^n=\frac{1}{1-z_{0}}\text{ otherwise divergence }|z_{0}|\geq 1$
$\sum^{M-1}_{n=0}(z_{0})^n=\frac{1-z_{0}^M}{1-z_{0}}\text{ another geometic serie type???}$
$$\text{zeros of a complex equation: }a\text{ being complex number find zeros: }z^N-a=0\to z^N=a=ae^{jk \cdot_{2}\pi}\to z_{k}=a^{1/N} \cdot e^{jk \cdot 2\pi/N}\text{ for }k=0,1,\dots,N-1$$
$$z_{0}=r_{0}e^{j\theta_{0}}\to \text{conjugate: }z_{0}^*=r_{0}e^{-j\theta_{0}}\to \text{mirroring: } z_{0,mirr}=\left( \frac{1}{z_{0}} \right)^*=\frac{1}{r_{0}}e^{j\theta_{0}}\to \text{reversing }z_{0,rev}=z^*_{0,mirr}=\frac{1}{r_{0}}e^{-j\theta_{0}}=\frac{1}{z_{0}}$$
![[convolution.jpg]]

![[mirroring and conjugation.png|400]]
$x(t)\text{ continuous(analog) }x[n]\text{ discrete(digital)}$

rule of thumbs: zero refers to the function (e.g. polynomial) and root refers to the equation.
[3.6: Complex Zeros - Mathematics LibreTexts](https://math.libretexts.org/Bookshelves/Precalculus/Book%3A_Precalculus__An_Investigation_of_Functions_(Lippman_and_Rasmussen)/03%3A_Polynomial_and_Rational_Functions./3.06%3A_Complex_Zeros)
# Signals and System
![[Signals_and_Systems (1).pdf]]
![[discrete time signals.png|300]]![[discrete time signal graphs.png|100]]
$u[n]=\sum^n_{k=-\infty}\delta[k]$
$\delta[n]=u[n]-u[n-1]$
$$\text{fundamental signals: exponentially decaying function}x[n]=a^n \cdot u[n]\text{ with }|a|<1\text{ discrete complex exponential function }e^{jn\omega_{0}}=\cos(n\omega_{0})+j\sin(n\omega_{0})$$
$\text{periodic: }x[n]=x[n+N]\text{ some integer N}$
![[discrete signal symmetry.png|300]]![[function transformation.png|225]]
$\text{transformation of function var: }y[n]=x[f[n]]$
![[order dependency.png|300]]![[only running index inversed.png|215]]
$$\text{signal decomposition: any digital signal can be written as a sum of weighted delta pulses: }x[n]=\sum^\infty_{k=-\infty}=x[k]\delta[n-k]$$
$\text{difference equation and signal flow diagram (finite impulse response can be represented (FIR))}$
$DE=\sum^q_{{k=0}}=b_{k}x[n-k]-\sum^p_{{k=1}}a_{k}y[n-k]$
![[difference.png|300]]

Convolution: $\displaystyle y[n] = x[n]\ast h[n] = {\sum_{k=-\infty}^{\infty}} \, h[k]x[n-k]$
Frequency response: $\displaystyle y[n] =  {\sum_{k=-\infty}^{\infty}} \, h[n]Ae^{ -j[\theta(n-k) + \phi]} = {\sum_{k=-\infty}^{\infty}} \, h[k]e^{ -j\theta k } \cdot Ae^{ j(\theta n+\phi) }$
$\displaystyle \to H(e^{ j\theta })=\sum_{k=-\infty}^{\infty} \, h[k]e^{ -j\theta k }$
![[20240923_081401.jpg|400]]
$$T_{0}=\frac{2\pi m}{\omega_{0}}\text{ and period}=\frac{2\pi}{\omega_{0}}\text{ continuous time signal: }x(t)=A\cos(\omega_{0}t+\phi)\text{ respectively amplitude, frquency, phase}$$
$\text{for discrete: }A\cos(\Omega_{0}n+\phi)$
![[properties of discrete.png|300]]![[properties of discerete.png|300]]
![[5ESC0/attachments/lti properties.png|300]]
linearity: think of it in root locus plot: if line is continuous no jumps: linear
![[non causal example.png|300]]![[causal.png|300]]
![[time invariance.png|300]]![[time invariance-1.png|300]]

delayed impulses -> convolution
complex exponentials -> Fourier analysis
# Fourier Analysis
$\omega \cdot T_{s}=2\pi f \cdot \frac{1}{f_{s}}\text{ where normalized frequency: }\theta=2\pi\left( \frac{f}{f_{s}} \right)\text{ as }f,\omega=\text{ absolute frequency}$
[[Fourier Analysis - Transform(Series)]]
![[Fourier Analysis_Peri (1).pdf]]
### Continuous Time Fourier Transform (CTFT)
1. Forward Fourier Transform:
   $$
   X(\omega) = \int_{-\infty}^{\infty} x(t)e^{-j\omega t} \, dt
   $$

2. Inverse Fourier Transform:
   $$
   x(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} X(\omega)e^{j\omega t} \, d\omega
   $$

### Fourier Series for Periodic Signals
1. Fourier Series Representation:
   $$
   x(t) = \sum_{n=-\infty}^{\infty} c_n e^{j \frac{2 \pi}{T_0} n t}
   $$

2. Fourier Series Coefficients:
   $$
   c_n = \frac{1}{T_0} \int_{-T_0/2}^{T_0/2} x(t) e^{-j \frac{2 \pi}{T_0} n t} \, dt
   $$

### Fourier Transform of Discrete-Time Signals (FTD)
1. Forward Discrete-Time Fourier Transform (DTFT):
   $$
   X(e^{j\theta}) = \sum_{n=-\infty}^{\infty} x[n] e^{-j n \theta}
   $$

2. Inverse Discrete-Time Fourier Transform (IDTFT):
   $$
   x[n] = \frac{1}{2\pi} \int_{-\pi}^{\pi} X(e^{j\theta}) e^{j n \theta} \, d\theta
   $$

### Common FTD Pairs
- Delta function in time: 
  $$
  x[n] = \delta[n] \Rightarrow X(e^{j\theta}) = 1
  $$
  
- Exponential sequence: 
  $$
  x[n] = a^n u[n], \; |a| < 1 \Rightarrow X(e^{j\theta}) = \frac{1}{1 - a e^{-j\theta}}
  $$

### Frequency Response of an LTI System
1. Impulse Response and Frequency Response Pair:
   $$
   H(e^{j\theta}) = \sum_{k=-\infty}^{\infty} h[k] e^{-j k \theta}
   $$

2. Convolution in Time Domain:
   $$
   x[n] * h[n] \Rightarrow X(e^{j\theta}) \cdot H(e^{j\theta})
   $$

# Sampling
![[5ESC0/slides/TUe_Signals2_SamplingInterpolation2020.pdf]]
### Convolution Integral
1. Convolution in Time Domain:
   $$
   y(t) = f(t) * h(t) = \int_{-\infty}^{\infty} f(\tau) h(t - \tau) \, d\tau
   $$

2. Convolution Properties:
   - Time domain convolution $( f(t) * h(t) )$ corresponds to multiplication in frequency domain $( F(\omega) \cdot H(\omega) )$.
   - Multiplication in time domain $( f(t) \cdot h(t) )$ corresponds to convolution in frequency domain $( F(\omega) * H(\omega) )$.

### Fourier Transform of a Dirac Train (Pulse Train)
1. Dirac Train in Time Domain:
   $$
   s(t) = \sum_{n=-\infty}^{\infty} \delta(t - nT)
   $$

2. Corresponding Fourier Transform in Frequency Domain:
   $$
   S(\omega) = \frac{2\pi}{T} \sum_{k=-\infty}^{\infty} \delta \left( \omega - k \frac{2\pi}{T} \right)
   $$

### Nyquist Sampling Theorem
To avoid aliasing, the sampling rate $( f_s )$ should be:
   $$
   f_s > 2 f_{\text{max}}
   $$

### Discrete Fourier Transform (DFT)
1. DFT Expression:
   $$
   X[k] = \sum_{n=0}^{N-1} x[n] e^{-j \frac{2\pi}{N} kn}
   $$

2. Inverse DFT:
   $$
   x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] e^{j \frac{2\pi}{N} kn}
   $$

### Ideal Low Pass Filter
1. Time Domain:
   $$
   h(t) = \frac{\theta_c}{\pi} \cdot \frac{\sin(\theta_c t)}{\theta_c t}
   $$

2. Frequency Domain:
   $$
   H(e^{j\theta}) = \begin{cases} 
   1, & |\theta| \leq \theta_c \\
   0, & \text{otherwise}
   \end{cases}
   $$

### Interpolation Formula
For reconstructing a continuous signal $( x(t) )$ from samples $( x[n] )$:
   $$
   x(t) = \sum_{n=-\infty}^{\infty} x[n] \, \text{sinc}\left( \frac{t - nT}{T} \right)
   $$
where $( \text{sinc}(x) = \frac{\sin(\pi x)}{\pi x} ).$

# The DFT
![[5ESC0/slides/The DFT_2022_Peri.pdf]]
### Discrete Fourier Transform (DFT)
1. DFT Definition:
   $$
   X[k] = \sum_{n=0}^{N-1} x[n] e^{-j \frac{2\pi}{N} kn}
   $$

2. Inverse DFT (IDFT):
   $$
   x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] e^{j \frac{2\pi}{N} kn}
   $$

### Twiddle Factor
1. Twiddle Factor Definition:
   $$
   W_N = e^{-j \frac{2\pi}{N}}
   $$

2. Property of Twiddle Factor:
   $$
   \sum_{n=0}^{N-1} W_N^{nk} = \begin{cases} 
      N, & k = 0 \, (\text{mod } N) \\
      0, & \text{otherwise}
   \end{cases}
   $$

### DFT Properties
1. Linearity:
   $$
   a x_1[n] + b x_2[n] \xrightarrow{\text{DFT}} a X_1[k] + b X_2[k]
   $$

2. Symmetry for Real Sequences:
   $$
   X[k] = X^*[N - k] \quad \text{for } 0 \leq k \leq N-1
   $$

3. Circular Shift:
   - Time Shift:
     $$
     x[(n - m) \mod N] \xrightarrow{\text{DFT}} e^{-j \frac{2\pi}{N} km} X[k]
     $$
   - Frequency Shift:
     $$
     e^{j \frac{2\pi}{N} mn} x[n] \xrightarrow{\text{DFT}} X[(k - m) \mod N]
     $$

### Circular Convolution
1. Circular Convolution in Time Domain:
   $$
   y[n] = (x[n] \circledast h[n]) = \sum_{m=0}^{N-1} x[m] h[(n - m) \mod N]
   $$

2. Circular Convolution Property:
   - Convolution in the time domain corresponds to multiplication in the frequency domain:
     $$
     y[n] = x[n] \circledast h[n] \xrightarrow{\text{DFT}} Y[k] = X[k] \cdot H[k]
     $$

### Zero Padding
1. Zero Padding:
   - Extending a signal $( x[n] )$ with zeros to increase DFT resolution without changing signal content.
   - With zero padding, the DFT length $( N )$ increases, and frequency resolution improves.

2. Zero Padding and DFT Resolution:
   - For $( N = 8 )$, frequency bins are $( \frac{\pi}{4} )$ apart.
   - For $( N = 16 )$, frequency bins are $( \frac{\pi}{8} )$ apart.

### Practical Applications
1. Sampling in DFT Domain:
   - Sampling a continuous-time Fourier Transform (CTFT) creates repetitions in the DFT, commonly leading to spectral leakage if not handled with appropriate windowing.
   
2. Windowing:
   - Window functions like Hanning window:
     $$
     w[n] = \frac{1 - \cos\left( \frac{2\pi n}{N} \right)}{2}
     $$
   - Windowing minimizes edge effects and reduces spectral leakage.
# Z-transform
![[Z-transform.pdf]]
### Z-Transform Definition
1. Z-Transform:
   $$
   X(z) = \sum_{n=-\infty}^{\infty} x[n] z^{-n}
   $$

2. Inverse Z-Transform:
   $$
   x[n] = \frac{1}{2\pi j} \oint_{C} X(z) z^{n-1} \, dz
   $$

### Z-Transform Properties
1. Linearity:
   $$
   a x_1[n] + b x_2[n] \xrightarrow{\text{Z}} a X_1(z) + b X_2(z)
   $$

2. Time Shift:
   $$
   x[n - k] \xrightarrow{\text{Z}} z^{-k} X(z)
   $$

3. Scaling in the z-Domain:
   $$
   a^n x[n] \xrightarrow{\text{Z}} X\left(\frac{z}{a}\right)
   $$

4. Convolution:
   - Convolution in time domain is multiplication in the z-domain:
     $$
     x[n] * h[n] \xrightarrow{\text{Z}} X(z) H(z)
     $$

### Region of Convergence (ROC)
- For a right-sided sequence (causal):
   $$
   |z| > a
   $$
- For a left-sided sequence:
   $$
   |z| < a
   $$
- For a two-sided sequence, ROC is a ring:
   $$
   r_1 < |z| < r_2
   $$

### Common Z-Transform Pairs
1. Delta Function:
   $$
   x[n] = \delta[n] \Rightarrow X(z) = 1
   $$

2. Shifted Delta Function:
   $$
   x[n] = \delta[n - k] \Rightarrow X(z) = z^{-k}
   $$

3. Exponential Sequence:
   $$
   x[n] = a^n u[n] \Rightarrow X(z) = \frac{1}{1 - a z^{-1}}, \quad |z| > |a|
   $$

4. Cosine Sequence:
   $$
   x[n] = \left(\frac{1}{3}\right)^n \cos(n \omega_0) u[n] \Rightarrow X(z) = \frac{1 - \frac{1}{3} \cos(\omega_0) z^{-1}}{1 - \frac{2}{3} \cos(\omega_0) z^{-1} + \frac{1}{9} z^{-2}}
   $$

### Examples of Z-Transforms
1. For $( x[n] = a^n u[n] )$:
   $$
   X(z) = \frac{1}{1 - a z^{-1}}, \quad \text{ROC: } |z| > |a|
   $$

2. For $( x[n] = -a^n u[-n-1] )$:
   $$
   X(z) = \frac{1}{1 - a z^{-1}}, \quad \text{ROC: } |z| < |a|
   $$

### Z-Transform of Convolution
1. Convolution in the Time Domain:
   $$
   y[n] = x[n] * h[n] \Rightarrow Y(z) = X(z) \cdot H(z)
   $$
   where \( * \) denotes convolution.

2. Example with Exponential Input:
   - For $( x[n] = a^n u[n] )$ and $( h[n] = \delta[n] - a \delta[n-1] )$:
     $$
     X(z) = \frac{1}{1 - a z^{-1}}, \quad H(z) = 1 - a z^{-1}
     $$
   - Then, $( Y(z) = X(z) H(z) = 1 )$.

### Inverse Z-Transform (Partial Fraction Expansion)
1. Example:
   Given:
   $$
   X(z) = \frac{5 - 2z^{-1}}{1 - \frac{5}{6}z^{-1} + \frac{1}{6}z^{-2}}
   $$
   Decompose as:
   $$
   X(z) = \frac{A}{1 - \frac{1}{2}z^{-1}} + \frac{B}{1 - \frac{1}{3}z^{-1}}
   $$
   Solve for constants \( A \) and \( B \), and apply inverse Z-transform.

### Summary of Important Concepts
- The Z-transform provides a method for analyzing discrete-time signals and systems, particularly useful for characterizing stability and frequency response.
- The ROC determines the stability and applicability of the Z-transform for different signals.
- Common Z-transform pairs and properties allow quick transformations between time and z-domains.
# System function
![[System_function.pdf]]
### System Function Definition
1. System Function (Z-transform of impulse response):
   $$
   H(z) = \sum_{n=-\infty}^{\infty} h[n] z^{-n}
   $$

2. Frequency Response:
   $$
   H(e^{j\theta}) = \sum_{n=-\infty}^{\infty} h[n] e^{-j n \theta}
   $$

### LTI System Properties
1. Convolution Property:
   - Output $( y[n] )$ as a convolution of input $( x[n] )$ with impulse response $( h[n] )$:
     $$
     y[n] = x[n] * h[n]
     $$
   - In the Z-domain, this corresponds to multiplication:
     $$
     Y(z) = H(z) X(z)
     $$

2. System Function Expression:
   $$
   H(z) = \frac{Y(z)}{X(z)}
   $$

### Example System Function
1. For a system with difference equation:
   $$
   Y(z) = b_0 X(z) + b_1 z^{-1} X(z) + b_2 z^{-2} X(z) - a_1 z^{-1} Y(z) - a_2 z^{-2} Y(z)
   $$
   - Rearrange to find $( H(z) )$:
     $$
     H(z) = \frac{b_0 + b_1 z^{-1} + b_2 z^{-2}}{1 + a_1 z^{-1} + a_2 z^{-2}}
     $$

### Poles and Zeros
- Zeros $( \beta_k )$ are the roots of the numerator polynomial.
- Poles $( \alpha_k )$ are the roots of the denominator polynomial.
  
### Stability and Causality
1. Stability (Bounded Input, Bounded Output - BIBO):
   - System is stable if the sum of impulse response values is finite.
   - ROC (Region of Convergence) must include the unit circle for stability.

2. Causality:
   - A causal system has a right-sided impulse response.
   - For a causal system, ROC is outside the outermost pole:
     $$
     |z| > \text{largest pole magnitude}
     $$

### Example: FIR and IIR Filters
1. FIR (Finite Impulse Response) Filter:
   - Poles are located at $( z = 0 )$.

2. IIR (Infinite Impulse Response) Filter:
   - Poles are within the ROC, but not limited to $( z = 0 )$.

### All-Pass System
1. Pole-Zero Relationship for All-Pass Filters:
   - Zeros are reflected across the unit circle to obtain poles.
   - If $( z_0 = r_0 e^{j \theta_0} )$, then the mirrored pole $( z_{0,\text{mirr}} )$ is:
     $$
     z_{0,\text{mirr}} = \frac{1}{r_0} e^{j \theta_0}
     $$

### Minimum and Maximum Phase
- Minimum-phase system: All zeros are inside or on the unit circle.
- Maximum-phase system: Zeros are outside the unit circle.
# Filter structure
![[8 - Filter_structure.pdf]]
### FIR Filter Structure
1. FIR Filter:
   - Finite Impulse Response (FIR) filter has no feedback loops, meaning it has no poles except at $( z = 0 )$ and $( z = \infty )$.
   - The FIR filter output can be expressed as:
     $$
     y[n] = \sum_{k=0}^{N} h[k] x[n - k]
     $$
   - Can be implemented using a delay line and multiply-add structure:
     - Each delayed signal $( x[n - k] $) is multiplied by $( h[k] )$ and summed to produce $( y[n] )$.

### Linear Phase Filters
1. Linear Phase Condition:
   - A filter has linear phase if its impulse response satisfies:
     $$
     h[n] = \pm h[N - n]
     $$
     where \( N \) is the filter order.
   - The phase shift $( \phi = \alpha \omega - \beta )$ is linearly dependent on frequency $( \omega )$, ensuring that all frequencies are delayed by the same amount.

2. Impulse Response Symmetry:
   - For odd \( N \): symmetry axis coincides with a sample $( h[N/2] )$.
   - For even \( N \): symmetry axis lies between two samples.

### Types of Linear Phase FIR Filters
1. **Type I**: Symmetric impulse response, odd length.
   - No restrictions on filter type (can be used as low-pass, high-pass, band-pass, or band-stop).

2. **Type II**: Symmetric impulse response, even length.
   - Has a zero at \( z = -1 \) (cannot be used as a high-pass filter).

3. **Type III**: Antisymmetric impulse response, odd length.
   - Has zeros at $( z = \pm 1 )$, suitable for band-pass but not low-pass or high-pass.

4. **Type IV**: Antisymmetric impulse response, even length.
   - Has a zero at \( z = 1 \), not suitable for low-pass filters.

### Frequency Response of Linear Phase FIR Filters
1. For Type I FIR Filter:
   - Can be used to design any filter type without restrictions.

2. For Type II FIR Filter:
   - Cannot be used to design a high-pass filter.

3. For Type III FIR Filter:
   - Cannot be used for low-pass, high-pass, or band-stop due to zeros at $( z = \pm 1 )$.

4. For Type IV FIR Filter:
   - Not suitable for low-pass filters as it has a zero at \( z = 1 \).

### Key Properties of FIR Filters
1. FIR filters with linear phase have the advantage of maintaining the shape of signals within the passband.
2. They are commonly implemented as non-recursive structures with a finite number of taps (coefficients \( h[n] \)).
3. Filters are stable as they do not rely on feedback, meaning there is no risk of poles moving outside the unit circle.

### Summary
- FIR filters can be implemented in various forms (transversal, cascade, etc.) based on application requirements.
- Linear phase is only possible with FIR filters and requires specific symmetry in the impulse response.
- Different types of linear phase FIR filters have distinct applications based on their frequency response characteristics.
# Filter design
![[5ESC0/attachments/9 - Filter Design.pdf]]

### Ideal Filter Examples
1. **Ideal Low-Pass Filter**:
   $$
   H(e^{j\theta}) = 
   \begin{cases} 
      1, & |\theta| \leq \theta_c \\
      0, & |\theta| > \theta_c 
   \end{cases}
   $$
   where $( \theta_c )$ is the cutoff frequency.

2. **Ideal High-Pass Filter**:
   $$
   H(e^{j\theta}) = 
   \begin{cases} 
      1, & |\theta| \geq \theta_c \\
      0, & |\theta| < \theta_c 
   \end{cases}
   $$

3. **Ideal Band-Pass Filter**:
   $$
   H(e^{j\theta}) = 
   \begin{cases} 
      1, & \theta_1 \leq |\theta| \leq \theta_2 \\
      0, & \text{otherwise}
   \end{cases}
   $$

4. **Ideal Band-Stop Filter**:
   $$
   H(e^{j\theta}) = 
   \begin{cases} 
      1, & |\theta| \leq \theta_1 \text{ or } |\theta| \geq \theta_2 \\
      0, & \theta_1 < |\theta| < \theta_2 
   \end{cases}
   $$

### Filter Design Specifications
1. **Passband Ripple** $( \delta_p )$: Allows a specified maximum ripple in the passband.
2. **Stopband Attenuation** $( \delta_s )$: Defines the minimum attenuation level in the stopband, often given in dB.

### FIR Filter Design Process (Windowing Method)
1. **Filter Length**:
   - The filter length \( N \) is chosen to control the filter's main lobe width and transition width.
   - As \( N \) increases, the main lobe narrows, decreasing the transition width.

2. **Window Types** and Characteristics:
   - **Rectangular Window**:
     $$
     w[n] = 1, \quad 0 \leq n \leq N - 1
     $$
     - Main lobe width $( \Delta \theta \approx \frac{4\pi}{N} )$
     - Peak sidelobe level: -13 dB.
   
   - **Hanning Window**:
     $$
     w[n] = 0.5 - 0.5 \cos\left(\frac{2\pi n}{N}\right)
     $$
     - Main lobe width $( \Delta \theta \approx 3.1 \times \frac{2\pi}{N} )$
     - Peak sidelobe level: -31 dB.
   
   - **Hamming Window**:
     $$
     w[n] = 0.54 - 0.46 \cos\left(\frac{2\pi n}{N}\right)
     $$
     - Main lobe width $( \Delta \theta \approx 3.3 \times \frac{2\pi}{N} )$
     - Peak sidelobe level: -41 dB.
   
   - **Blackman Window**:
     $$
     w[n] = 0.42 - 0.5 \cos\left(\frac{2\pi n}{N}\right) + 0.08 \cos\left(\frac{4\pi n}{N}\right)
     $$
     - Main lobe width $( \Delta \theta \approx 5.5 \times \frac{2\pi}{N} )$
     - Peak sidelobe level: -57 dB.

3. **Filter Coefficients**:
   - Impulse response \( h[n] \) for a low-pass filter:
     $$
     h[n] = \frac{\sin(\theta_c (n - \frac{N}{2}))}{\pi (n - \frac{N}{2})} \cdot w[n]
     $$

### FIR Filter Design Using Frequency Sampling
1. Desired frequency response $( H(e^{j\omega}) )$ is sampled at uniformly spaced frequencies.
2. FIR filter coefficients \( h[n] \) are obtained via Inverse Discrete Fourier Transform (IDFT).

### Equiripple Linear Phase FIR Filter
1. Allows ripple to be uniformly distributed across the passband and stopband, producing a smaller peak ripple than non-equiripple methods.
# Stochastic signals
![[5ESC0/attachments/Stochastic Signals.pdf]]

### Stochastic Process Basics
1. **Ensemble Average (Expected Value)**:
   $$
   E\{x[n]\} = \mu_x = \sum_k x[k] \cdot p_k
   $$
   where $( p_k )$ is the probability of occurrence of the random variable $( x[k] )$.

2. **Mean Estimate**:
   $$
   \hat{\mu} = \frac{1}{N} \sum_{n=0}^{N-1} x[n]
   $$

### Second-Order Statistics
1. **Mean**:
   $$
   \mu_x[n] = E\{x[n]\}
   $$

2. **Variance**:
   $$
   \sigma_x^2[n] = E\{(x[n] - \mu_x[n])^2\} = E\{|x[n]|^2\} - |E\{x[n]\}|^2
   $$

3. **Autocorrelation**:
   $$
   r_x[n_1, n_2] = E\{x[n_1] \cdot x^*[n_2]\}
   $$

4. **Autocovariance**:
   $$
   \gamma_x[n_1, n_2] = E\{(x[n_1] - \mu_x[n_1]) \cdot (x[n_2] - \mu_x[n_2])^*\} = r_x[n_1, n_2] - \mu_x[n_1] \cdot \mu_x^*[n_2]
   $$

5. **Cross-Correlation** (between two processes $( x[n] )$ and $( y[n] )$):
   $$
   r_{xy}[n_1, n_2] = E\{x[n_1] \cdot y^*[n_2]\}
   $$

6. **Cross-Covariance**:
   $$
   \gamma_{xy}[n_1, n_2] = r_{xy}[n_1, n_2] - \mu_x[n_1] \cdot \mu_y^*[n_2]
   $$

### Wide Sense Stationarity (WSS)
- A process $( x[n] )$ is WSS if:
  - Mean $( \mu_x )$ is constant over time.
  - Autocorrelation $( r_x(l) = E\{x[n] \cdot x^*[n - l]\} )$ depends only on the lag $( l )$, not on $( n )$.
  
### Ergodicity
1. **Time-Averaged Mean for Ergodic Signals**:
   $$
   \hat{\mu}_x = \frac{1}{N} \sum_{n=0}^{N-1} x[n]
   $$

2. **Time-Averaged Variance**:
   $$
   \hat{\sigma}_x^2 = \frac{1}{N} \sum_{n=0}^{N-1} (x[n] - \hat{\mu}_x)^2
   $$

3. **Autocorrelation for Ergodic Signals**:
   $$
   \hat{r}_x(l) = \frac{1}{N} \sum_{n=0}^{N-1-|l|} x[n] \cdot x[n + l]
   $$

### Power Spectral Density (PSD)
- **Wiener-Khinchin Relation**:
   $$
   P_x(e^{j\theta}) = \sum_{l=-\infty}^{\infty} r_x[l] e^{-j\theta l} \quad \Leftrightarrow \quad r_x[l] = \frac{1}{2\pi} \int_{-\pi}^{\pi} P_x(e^{j\theta}) e^{j\theta l} \, d\theta
   $$
- The average power:
   $$
   \frac{1}{2\pi} \int_{-\pi}^{\pi} P_x(e^{j\theta}) \, d\theta = r_x[0] = E\{|x[n]|^2\} \geq 0
   $$

### Example PSD Calculation
1. For $( r_x[l] = a^{|l|} )$ with $( |a| < 1 )$:
   $$
   P_x(e^{j\theta}) = \frac{1 + a^2}{1 + a^2 - 2a \cos \theta}
   $$