# Course Introduction (Modifying open-loop transfer function properties using feedback)
[[Systems - 5ESB0]]
# Root Locus (Modifying closed-loop transfer functions using Feedback)
[The Root Locus Rules](https://www.mit.edu/people/klund/weblatex/node8.html)
[(VERY USEFUL) How To Sketch a Root Locus](https://www.youtube.com/watch?v=vckPtXDrEsw)
[Departure Angle Example](https://www.youtube.com/watch?v=L8tqIbO5zbE)
$\text{closed-loop poles of transfer function (k-compensator): }T(s)=\frac{kL(s)}{1+kL(s)}\text{ change when gain }k \text{ changes.}$
![[compensator.png|300]]![[angles og locus.png|300]]
$1+kL(s)=0\to L(s)=\frac{z(s)\text{ or }b(s)}{p(s)\text{ or }a(s)}\implies p(s)+kz(s)=0\text{ when }k=0\text{ depend on }p(s)\text{ as increases to }\infty \text{ depend on }z(s).$
$k=\frac{1}{|L(s_{0})|}$
$\angle L(s)_{k>0}=\sum\psi_{i}-\sum\phi_{i}=180 \degree+360\degree(l-1)\text{ where angle of zero: }\psi_{i}\text{ and angle of pole: }\phi_{i}$
$\angle L(s)_{k<0}=\dots=0 \degree+360 \degree(l-1)\dots$
$\text{if } (n)num_{poles}-(m)num_{zeros}\text{ num of poles>zeros loci go to infinity}$
$\text{if } (m)num_{zeros}-(n)num_{poles}\text{ num of zeros>poles loci come from infinity}$
![[root locus rules-3.png]]
> [!NOTE] Departure Angles
> $K>0$
> $q\phi_{l,dep}=\frac{1}{q}(\sum\psi_{i}-\sum\phi_{i\neq l,dep}-180 \degree-360 \degree(l-1))\text{ where }l=1,2,\dots,q\text{ where }q:\text{repeated poles (on same position eg -1, -1)}$
> $q\psi_{l,arr}=\frac{1}{q}(\sum\phi_{i}-\sum\psi_{i\neq l,arr}+180 \degree+360 \degree(l-1))\text{ where }l=1,2,\dots,q\text{ where }q:\text{repeated zeros (on same position eg -1, -1)}$
> 
> $K<0$
> *same just without $180 \degree$*
# Frequency Response Functions / Bode Diagrams (Understanding the relevance of frequency-domain control-design methods and frequency-responses on Bode plots)
[Bode Plots by hand](https://web.mit.edu/2.010/www_f00/psets/hw2_dir/tutor2_dir/tut2_e.html)
![[steady state behaviour.png]]
![[representations for bode.png]]

$A_{P(dB)}=20\log A_{P(ratio)}\text{ then }A_{P(ratio)}=10^{A_{P(dB)}/20}$
![[bode plot sketching.png]]
$\text{class 1: }K_{0}(j\omega)^n$
$\text{class 2: }(j\omega \tau+1)^{\pm1}$
$\text{class 3: }\left( \left( \frac{j\omega}{\omega_{n}} \right)^2 + 2\zeta  \frac{j\omega}{\omega_{n}} +1 \right)^{\pm_{1}}$
