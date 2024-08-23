---
modified: Sunday, August 18th 2024, 09:49:29
created: Saturday, November 4th 2023, 3:13:37
tags:
  - concept
  - "#transform"
  - "#raw"
---

[Fourier Transform properties & proofs](https://lpsa.swarthmore.edu/Fourier/Xforms/FXProps.html)
![[transform_fourier_properties.png]]

# Fourier Series to Fourier Transform
 Generalize Fourier series to Fourier transform (discrete to continuous spectrum): $$
\begin{flalign}
&\tilde{x}(t)\,=\,\sum_{k\,=\,-\infty}^{+\infty}a_{k}e^{j k\omega_{0}t} \\
&a_{k}\,=\,{\frac{1}{T_{0}}}\int_{-T_{0}/2}^{T_{0}/2}{\tilde{x}}(t)e^{-j k\omega_{0}t}d t \\ 
&\rightarrow X(\omega)\,=\,\lim_{T_{0}\rightarrow\infty}a_kT_{0}\,=\,\int_{-\,\infty}^{+\infty}\,x(t)e^{-\,j\omega t}d t \\
&\tilde{x}(t)\,=\,\frac{1}{2\pi}\,\sum_{k=-\infty}^{+\infty}X(k\omega_{0})e^{j k\omega_{0}t}\omega_{0}, \ T_{0}=\frac{2\pi}{\omega_{0}} \\
&T \rightarrow \infty : x(t)\,=\,\tilde{x}(t)\,=\,{\frac{1}{2\pi}}\int_{-\infty}^{+\infty}X(\omega)e^{j\omega t}d\omega &&
\end{flalign}$$
(Continuous) Fourier Transform:$$
\begin{flalign}
x(t)&=\sum_{k=-\infty}^{+\infty} a_k e^{j k \omega_0 t} \\
a_k&=\frac{1}{T} \int_T x(t) e^{-j k \omega_0 t} d t\\
X(\omega)&=\int_{-\infty}^{\infty} x(t)e^{-j\omega t} \, dt,\   x(t)\,=\,{\frac{1}{2\pi}}\int_{-\infty}^{+\infty}X(\omega)e^{j\omega t}d\omega&&
\end{flalign}$$
**Relationship between Fourier series and Fourier transform (of one period):** $a_{k}=\frac{1}{T_{0}}X(k\omega_{0})$
Fourier transform of periodic signal:
$\tilde{X}(\omega) = \displaystyle{\sum_{k=-\infty}^{\infty}} \, 2\pi a_{k}\delta(\omega-k\omega_{0})$
Discrete Fourier transform:
$$
\begin{flalign}
x[n]&=\sum_{k=<N>}a_{k}e^{jk\Omega_{0}n},\ \Omega_{0}=\frac{2\pi}{N}\\
a_{k}&=\frac{1}{N}\sum_{n=<N>}x[n]e^{-jk\Omega_{0}n}\\
x[n]&=\frac{1}{2\pi}\int_{2\pi} X(\Omega)e^{j\Omega n} \, d\Omega,\ X(\Omega)=Na_{k}=\displaystyle{\sum_{n=-\infty}^{\infty}} \, x[n]e^{-j\Omega n}&& 
\end{flalign}
$$


Discrete Fourier transform of periodic signal: $\tilde{X}(\Omega) = \displaystyle{\sum_{-\infty}^{\infty}} \, 2\pi a_{k}\delta(\Omega-k\Omega_{0})$

![[Transforms#Properties]]

# Sampling

## Upsamling & Downsampling
Convert continuous signal to discrete sequence: $x\cdot p\leftrightarrow X\ast P,\ x\ast p \leftrightarrow X\cdot P$
$X_{c}(\omega)$: Fourier transform of continuous signal
$X_{p}(\omega)$: Fourier transform of discrete samples
$X_{ps}(\Omega)$: Fourier transform of discrete sequence
$X_{d}(\Omega)$: Fourier transform of decimated sample
$X_{ds}(\Omega)$: Fourier transform of decimated sequence

Sampling: $X_{p}(\omega)=\frac{1}{2\pi}\ X_{c}\ \ast \frac{2\pi}{T}\displaystyle{\sum_{k=-\infty}^{\infty}} \, \delta\left( \omega-k \frac{2\pi}{T} \right)=\frac{1}{T}\displaystyle{\sum_{n=-\infty}^{\infty}} \,X_{c}\left( \omega-k \frac{2\pi}{T} \right)$
$X_{p}(\omega)=\displaystyle{\sum_{n=-\infty}^{\infty}} \, x_{c}(nT)e^{-j\omega nT}$
Sequencing: $X_{ps}(\Omega)=\displaystyle{\sum_{n=-\infty}^{\infty}} \, x_{p}[n]e^{-j\Omega n},\ \Omega=\omega T$
Resampling: $X_{d}(\Omega)=\frac{1}{2\pi}\ X_{ps}\ \ast \frac{2\pi}{N}\displaystyle{\sum_{k=-\infty}^{\infty}} \, \delta\left( \Omega-k \frac{2\pi}{N} \right)=\frac{1}{N}\displaystyle{\sum_{k=0}^{N-1}} \, X_{ps}\left( \Omega-k \frac{2\pi}{N} \right)$
$X_{ds}=\displaystyle{\sum_{m=-\infty}^{\infty}} \, x_{d}[m]e^{ -j\Omega m },\ x_{ps}[mN]=x_{d}[m],\ n=mN$
$\to X_{ps}(\Omega)=\frac{1}{T}X_{p}\left( \frac{\Omega}{T} \right) \sim \ X_{ds}(\Omega)=\frac{1}{N}X_{d}\left( \frac{\Omega}{N} \right)$
Sampled at T1 -> Downsample & Decimate by 2 -> Reconstruct at T2=2T1
Sampled at T1 -> Upsample & Interpolate by 2 -> Downsample & Decimate 3 -> Reconstruct at T2=3/2T1

>[!note]
>$DFT <-> FS, DTFT<->FT$
> $f(x)\cdot\delta(x-x_{0})=f(x_{0})\cdot\delta(x-x_{0})$

## Zero Padding
Increase spectral resolution without new information (simply do more calculations with given samples)
![[signals_zero_padding_before.png|Before zero-padding]]

![[signals_zero_padding_after.png| After zero padding]]

## Windowing
Taking smaller samples of long signals -> spectral leakage due to windowing
![[signals_window_rect.png|Rectangular window of $x[n]=\cos(0.28\pi n)$]]

Common window functions (most used is Hann window)
![[transform_window.png]]

Relations between signal transformations:

![[transform_fourier_transformations.png]]

# Condition of Convergence
> [!important] [Dirichlet](<https://eng.libretexts.org/Bookshelves/Electrical_Engineering/Signal_Processing_and_Modeling/Signals_and_Systems_(Baraniuk_et_al.)/06%3A_Continuous_Time_Fourier_Series_(CTFS)/6.06%3A_Convergence_of_Fourier_Series>)
> Weak: $\displaystyle \int_{0}^{T} |f(x)| \, dx < \infty$
> Strong: in 1 period
> - Finite number of extrema
> - Finite number of discontinuities, each finite
