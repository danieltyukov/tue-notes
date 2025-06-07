# Getting Started Information
## Contacts
**Primary:**
Daniel Tyukov (d.tyukov@student.tue.nl)
[Vojkan Vidojkovic](https://www.tue.nl/en/research/researchers/vojkan-vidojkovic) (v.vidojkovic@tue.nl)
[Marco Fattori](https://www.tue.nl/en/research/researchers/marco-fattori) (m.fattori@tue.nl)
[Georgi Radulov](https://www.tue.nl/en/research/researchers/georgi-radulov) (g.radulov@tue.nl)
[Timo Matray](https://www.tue.nl/en/research/researchers/timo-matray) (t.m.matray@tue.nl)
**Secondary:**
[Niek Kesteloo](https://www.tue.nl/en/research/researchers/niek-kesteloo) (n.kesteloo@tue.nl)
[Issac Wang](https://www.tue.nl/en/research/researchers/issac-wang) (w.wang5@tue.nl)
**Rooms of Interest:**
[Flux 8.070 Lab](https://www.tue.nl/faculteit-electrical-engineerin/onderzoek/onderzoeksgroepen/integrated-circuits-ic/about-the-mixed-signal-microelectronics-group/facilities)

## Preliminary BEP Info
![[BEP market info.png]]
### General description
There is a huge potential and many direct benfits in using flip chip technology within a system in package. For example, we can design systems that utlize different solid-state processes and hence harvest their unique advantages, e.g. the integration density and speed of modern CMOS processes, the high-power potential of InP processes and the price-efficiency of older IC processes. That is why we want in the IC group of EE, TU/e, to develop flip-chip and system-in-package integration know-how. Especially, interfacing chip-to-chip via a flip-chip integration is considered as a sophisticated packaging technique (directly interconnecting multiple IC dies within a single package) that can greatly advance applications like automotive radar and wireless communication. This method leverages the benefits of flip chip technology to create high-density, high-performance, and compact multi-chip modules.

We are specifically interested in direct IC interconnections, which can be realized via for example a) flip-chip bonding (In chip-to-chip flip chip integration, the individual ICs are flipped upside down, and their bond pads are aligned with corresponding pads on an interposer or substrate. Solder bumps or micro-bumps on the ICs facilitate the direct electrical connection); or b) Interposer/Substrate method: The interposer or substrate provides the mechanical support and routing necessary for connecting the multiple chips. It may be made of silicon, glass, or organic materials and includes multiple layers for routing electrical signals. This will allow us to make our research test chips with high integration density and improved speed performance.

That is why we want to develop in our lab the flip-chip and system-in-package integration know-how.
### Students task description
1. Literature survey about the alternative approaches and service suppliers
2. Develop a process to create gold bumps on a PCB/substrate/interposer.
3. Develop a process to bond a chip on a substrate using the Dr. Tresky T-5300 machine.
4. Design an interposer(s) that are (much) flatter than a PCB.
5. Realize a demonstrator of the acquired know-how
### Student task description for extension (if applicable)
1.  Iterate steps 4 and 5
2. Define existing problems in the developed know-how and propose further steps for research
## Initial Literature Review - done (including pdfs)
1. DONE. At this link you find a nice overview of all the major interconnection techniques available to connect electrically dies and substrates. Remember you will go for bumps (thermal compression or ultrasonic bonding) + flip chip. **Discusses bonding materials like gold/aluminium** [https://www.nextpcb.com/blog/wire-bonding](https://www.nextpcb.com/blog/wire-bonding "https://www.nextpcb.com/blog/wire-bonding")
2. DONE. How to make gold bumps? Check this .pdf file related to our machine. [https://www.tpt.de/wp-content/uploads/00_Media/99_Elemente_und_Platzhalter/Anleitungen/TPT-Application-Bumps-NEW-EN.pdf](https://www.tpt.de/wp-content/uploads/00_Media/99_Elemente_und_Platzhalter/Anleitungen/TPT-Application-Bumps-NEW-EN.pdf "https://www.tpt.de/wp-content/uploads/00_Media/99_Elemente_und_Platzhalter/Anleitungen/TPT-Application-Bumps-NEW-EN.pdf") and relative video [https://www.youtube.com/watch?v=0-UblD-Tv1w](https://www.youtube.com/watch?v=0-UblD-Tv1w "https://www.youtube.com/watch?v=0-UblD-Tv1w")
3. DONE. Here a recent relevant paper about an application of the flip chip approach [https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6848323A](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6848323A "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6848323A")
4. DONE. tutorial on the flip chip process step by step [https://www.integra-tech.com/hubfs/INTEGRA%20Flip-chip-Tutorial-video-042021.pdf](https://www.integra-tech.com/hubfs/INTEGRA%20Flip-chip-Tutorial-video-042021.pdf "https://www.integra-tech.com/hubfs/INTEGRA%20Flip-chip-Tutorial-video-042021.pdf")
5. DONE. Broad-band interconnects up to 80 GHz and more realized slide deck over flip chip processes for mmWave applications [https://ewh.ieee.org/r8/norway/ap-mtt/files/DML_Norwegen_2008_Handout.pdf](https://ewh.ieee.org/r8/norway/ap-mtt/files/DML_Norwegen_2008_Handout.pdf "https://ewh.ieee.org/r8/norway/ap-mtt/files/DML_Norwegen_2008_Handout.pdf")
6. DONE. Finally some info about interposers [https://anysilicon.com/semipedia/interposer/](https://anysilicon.com/semipedia/interposer/ "https://anysilicon.com/semipedia/interposer/")
## Prior Research Done in Project
**Topic:** Development and Characterization of Thermal Compression Flip-Chip Bonding Process.
The goal was interposer design & production, bump placement, die placement, testing. **But only interposer design was achieved and bump placement on interposer.**

![[chip building blocks.png|300]]![[Chip on PCB design.png|300]]
![[SiIP PKG.png|300]]![[flip chip vs wire bond.png|300]]
**Connector ball pitch is the primary research constraint.**

>[!NOTE] Interposer Design
>Interposer design can be made either from [silicon, glass](https://www.mosaicmicro.com/wp-content/uploads/ITRI_Glass_Interposer_2013.pdf) or organic materials.
>- **Silicon:** have great electrical performance and thermal conductivity. Uses through silicon vias (TSVs)
>- **Glass:** high electrical resistivity, best for high frequency applications due to low [dielectric loss](https://en.wikipedia.org/wiki/Dielectric_loss)
>  
>  **Interesting References:**
>  [TGV (Through glass vias)/ Interposers](https://www.rena.com/en/products/glass-sapphire/through-glass-vias-tgv)

>[!NOTE] Research on Methods of Depositing a Conductive Layer on Interposer
>[Metallization: Making Conductive Traces on Silicon Chips. - YouTube](https://www.youtube.com/watch?v=Ddd_-4D76do)
>[DIY Physical Vapor Deposition (PVD) using Thermal Evaporation - YouTube](https://www.youtube.com/watch?v=81jJsDixO70)
>
>**Etching:** using strong acid to remove unprotected layer of metal to carve out specific design.
>
>The 2 primary choices here were **physical vapor deposition ([PVD](https://en.wikipedia.org/wiki/Physical_vapor_deposition))** based. [Sputtering](https://en.wikipedia.org/wiki/Sputter_deposition) and [Evaporation](https://en.wikipedia.org/wiki/Evaporation_(deposition))
>
>There are other methods of PVD mentioned on the wikipedia page.
>
>![[PVD Methods.png|400]]
>
>**Interesting References:**
>- [Wet Etched Silicon Interposer for the Connection of CMOS ICs and Optoelectronic Dies](https://pure.tue.nl/ws/portalfiles/portal/19976020/wet.pdf)
>- [Etching (microfabrication) - Wikipedia](https://en.wikipedia.org/wiki/Etching_(microfabrication))
>
>**Wet Etching**: Involves immersing the material in a liquid chemical etchant that dissolves the exposed areas.
>[**Dry Etching**](https://en.wikipedia.org/wiki/Dry_etching): Employs gases or plasmas to etch the material, offering greater precision and control.
>
>[PVD vs CVD: Mastering Advanced Thin Film Deposition Techniques](https://www.wevolver.com/article/pvd-vs-cvd)
>
>In general in the video of Metalization he explains the difference between an etching and lift-off method, an etching method applies photoresist on a metal layer and then using an etching solution the metal layer NOT covered by photoresist is removed and then the photoresists is removed to expose the metal pattern.
>
>In our case though we focus on the lift off method (evaporation/sputtering as 2 available options), here the metal layer is deposited on top of photoresist and then the photoresists is removed and only the metal layer pattern remains.

>[!NOTE] Sputtering vs Evaporation
> **Evaporation** and **sputtering** are both physical vapor deposition (PVD) techniques, but differ in energy mechanisms, film properties, and adhesion.
>
> **1. Directionality & Step Coverage**
> - **Evaporation** is line-of-sight: atoms travel in straight paths.
> - **Sputtering** involves energetic collisions → more isotropic deposition and better **step coverage** over features.
>
> **2. Adhesion (especially on glass)**
> - **Sputtering** often yields better adhesion due to:
>   - Higher energy of deposited atoms
>   - Substrate bombardment during growth
>   - Partial intermixing at interface
>
> **3. Film Density**
> - **Sputtered films** are generally denser and more uniform due to higher atom energies ($\approx$ several eV).
> - **Evaporated films** can be porous or columnar due to low energy ($< 1$ eV) atoms.
>
> **4. Deposition Rate & Uniformity**
> - **Evaporation**: high rate but poor uniformity across large substrates.
> - **Sputtering**: lower rate but better uniformity.
>
> **5. Energy Considerations**
> - In sputtering, ions transfer momentum:
>   - $E_{\text{ion}} \approx 100 - 1000$ eV
>   - $E_{\text{atom}}^{\text{sputtered}} \approx 10$ eV
> - In evaporation:
>   - $E_{\text{atom}}^{\text{evaporated}} < 1$ eV
>
> **6. Film Stress & Morphology (Thornton Diagram)**
> - Evaporation often leads to tensile stress and columnar growth.
> - Sputtering can tailor compressive or tensile stress via parameters like pressure, bias, and temperature.
>
> **7. Material Suitability**
> - **Evaporation** struggles with compounds or high melting point materials.
> - **Sputtering** allows stoichiometric transfer of complex targets.
>
> **Summary Formula (Mean Free Path λ):**
> 
> $$
> \lambda = \frac{k_B T}{\sqrt{2} \pi d^2 P}
> $$
> 
> - In high vacuum (evaporation), $\lambda$ is large → ballistic transport.
> - In sputtering (low vacuum), more collisions → diffusive paths.
>
> **Conclusion**: 
> For high-quality metal films on **glass substrates**, **sputtering** generally provides superior **adhesion**, **step coverage**, **uniformity**, and **film density** — especially crucial for **interposer fabrication** and **high-frequency applications**.



Wafer and overall microelectronics die bonding methods: [Wafer bonding - Wikipedia](https://en.wikipedia.org/wiki/Wafer_bonding)

1. [Thermal Compression Bonding](https://en.wikipedia.org/wiki/Thermocompression_bonding)
	- Uses **heat and force** to connect the bumps. 
	- Relies on **diffusion and mechanical interlocking**. 
	- Requires precise temperature and pressure control to avoid damage. 
	- Commonly used in **fine-pitch interconnects** where high reliability is needed.
	- [Understanding Thermo-Compression Bonding \| Cadence](https://resources.pcb.cadence.com/blog/2024-understanding-thermo-compression-bonding)
	  
2. [Eutectic bonding](https://en.wikipedia.org/wiki/Eutectic_bonding)
	- Utilizes an **intermediate solder alloy** to form a continuous bond. 
	- Requires **precise composition** (e.g., Au-Si, Au-Sn) to achieve eutectic melting. 
	- Used in die packaging for **systems sensitive to [outgassing](https://en.wikipedia.org/wiki/Outgassing#:~:text=Outgassing%20(sometimes%20called%20offgassing%2C%20particularly,or%20absorbed%20in%20some%20material.)** of standard die attach materials. 
	- Benefits: **Strong, hermetic seal** with good electrical conductivity.
	- **This method utilized in prior BEP, Ti adhesion layer gold bonding.**
	  
3. [Ultrasonic welding](https://en.wikipedia.org/wiki/Ultrasonic_welding)
	- Employs **high-frequency vibrations** to bind surfaces. 
	- Reduces the **temperature budget** by utilizing localized friction at contact points. 
	- Suitable for **delicate or heat-sensitive materials**. 
	- Used in **wire bonding** and fine-pitch microelectronics assembly.
	  
4. Solder Bump Bonding 
- Involves **reflowing solder balls** to create electrical and mechanical connections. 
- Requires precise **flux application and thermal profile** to achieve good wetting. 
- Common in **flip-chip technology** for high-density interconnects. 
- Can support **high-speed and high-power applications**.

>[!NOTE] Ball Bump Placement
>- **Ball Bump Mode:** Creates a bump with a tail that can potentially cause shorts during die placement. A coining tool can flatten the tails to reduce the risk of a short circuit being formed. 
>- **Ball Wedge Mode:** Cuts off the tail, leaving a well- rounded top, which is preferred to reduce short circuit risk.

For [VNA (Vector Network Analyzer)](https://en.wikipedia.org/wiki/Network_analyzer_(electrical)) on top of other [methods](https://www.youtube.com/watch?v=LW5yV5qmnAg) explained the de-embedding method yields the most accurate result, and since we have access to a VNA machine in the lab, we can employ this method.
![[Developing de-embedding visualized.png|300]]
[Understanding De-embedding - YouTube](https://www.youtube.com/watch?v=LW5yV5qmnAg)
[A Visual Introduction to Scattering Parameters - YouTube](https://www.youtube.com/watch?v=CEA8njh4tLU)
![[input output ports.png|400]]
### Fabrication Challenges & Findings
Eutectic bonding was employed with the standard, Ti adhesion layer and sputtering/evaporation based deposit of conductive layer. Primarly failed due to required thermal profile not being achieved.

Used Au instead of Cu -> see research papers on why.

Design 1 and Design 3 were used for actual interposer testing they both were made in multiple batches some using **evaporation** and some using **sputtering** the paper mentions that the sputtering the interposers exhibited much higher resistivity due to more defects and having gassing effects present on the deposited layer.

Design 2 was used for ground and open circuit testing. For example for line testing since the connecting wires of the interposer exhibiting characteristic impedance to find [Coplanar waveguide](https://en.wikipedia.org/wiki/Coplanar_waveguide#:~:text=Conventional%20coplanar%20waveguide%20(CPW)%20consists,substrate%2C%20and%20hence%20are%20coplanar.).

On Design 2 gold bump placement were not gold bumps they were cone shaped deposits, due to increased amount of gold surface area that is used for ground plane.

There was a heating malfunction where the temperature went only to 270 degrees.

Biggest problem was **yielding issues** due to gold bumps of $25 \mu m$ were too large in gold bump format ($\approx75 \mu m$) this caused that for pads of $70 \mu m$ it had an overhang and way too little space between the pads. $17 \mu m$ how ever clogged the machine, but we must work with these smaller sizes.

The die placement was also an issue and broke overnight due to the mechanical stress due to ban interconnections.

Matlab code was used to find out the true size of gold bumps by identifying how they look and measuring in pixels and converting to micro meters.

>[!NOTE] Measurements Obtained & Calculated
>
> - **Conversion Rate (CR) for Image Analysis:**  
>   $CR = \frac{W}{N_{px}} = \frac{2000}{1166} \approx 1.715 \text{ µm/px}$
>
> - **Wavelength of Propagating Signal in Glass:**  
>   $\lambda = \frac{\lambda_{vacuum}}{\sqrt{\epsilon_{r,\text{glass}}}} = \frac{c}{f \sqrt{\epsilon_{r,\text{glass}}}} = \frac{3 \times 10^8}{10^7 \sqrt{7.75}} = 10.78 \text{ m}$
>
> - **Line Impedance Calculation:**  
>   $Z_{\text{line}} = Z_0 \frac{1 + S_{1,1}}{1 - S_{1,1}} - Z_0$
>
> - **Trace Resistivity Calculation:**  
>   $\rho_{\text{trace}} = \frac{Z_{\text{line}} \cdot T_{\text{trace}} \cdot W_{\text{trace}}}{l_{\text{trace}}}$
>
> - **Sheet Resistance and Resistivity for Different Metallization Methods:**  
>   - Evaporation (batch 2): $R_{sh} = 0.3797$ Ω/square, $\rho_{\text{trace}} = 3.9858 \times 10^{-8}$ S/m  
>   - Evaporation (batch 2): $R_{sh} = 0.3491$ Ω/square, $\rho_{\text{trace}} = 3.6363 \times 10^{-8}$ S/m  
>   - Sputtering (batch 1): $R_{sh} = 0.4796$ Ω/square, $\rho_{\text{trace}} = 5.0230 \times 10^{-8}$ S/m  
>   - Sputtering (batch 2): $R_{sh} = 0.4812$ Ω/square, $\rho_{\text{trace}} = 5.0071 \times 10^{-8}$ S/m  
>
> - **Resistivity Factor Compared to Pure Gold:**  
>   - Pure gold: $\rho_g = 2.041 \times 10^{-8}$ S/m  
>   - Evaporation samples: factors of 1.953 and 1.782  
>   - Sputtering samples: factors of 2.461 and 2.454  
>
> - **Measured RLCG Values per µm for Evaporation Sample:**  
>   (Values plotted over 10 MHz - 10 GHz)

### Fabrication Summary
>[!NOTE] **1. Interposer Design & Production**
> - **Glass interposer** is used as the substrate.
> - **Metallization process**:
>   - **Titanium adhesion layer (50 nm)** is first deposited to improve bonding between the glass and the conductive metal.
>   - **Conductive metal layer (gold)** is deposited on top of titanium.
>   - **Two deposition methods tested**:
>     - **Sputtering** – Higher resistance, less consistent bump placement.
>     - **Evaporation** – **Preferred** method due to lower resistance and more reliable bump placement.

>[!NOTE] **2. Bump Placement**
> - **Gold wire bumps** are formed for electrical connections.
> - **Wire sizes tested**:
>   - **25 µm wire**: Most reliable, but requires a **pad pitch > 90 µm**.
>   - **17 µm wire**: Good quality for small gold surfaces, but unreliable on large surfaces due to clogging.
> - **Placement method**:
>   - Alignment is improved by using a **cursor as a reference**.

>[!NOTE] **3. Die Placement**
> - **Key optimization parameters**:
>   - **Heat profile**, **force**, and **duration** must be tuned for a strong bond.
>   - **Weight distribution** is critical to ensure proper metal-to-metal contact.
> - **Challenges**:
>   - Initial attempts were **semi-successful** due to difficulties in **heat profile settings**.

>[!NOTE] **4. Testing & Characterization**
> - **Performed in**:
>   - **Cleanroom** (for fabrication control).
>   - **Electronics lab** (for electrical measurements).
> - **Further optimization required**:
>   - Improving **bump and die placement settings**.
>   - Investigating **AC behavior of interposer tracks at frequencies > 10 GHz**.
>   - Exploring **electrical characteristics of the bumps**.

![[coplanar waveguide maxwell diagram.png|500]]

[Kennisgeving voor omleiding](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.researchgate.net%2Ffigure%2Fa-Microstrip-transmission-line-structure-b-its-cross-sectional-view_fig1_283031989&psig=AOvVaw37qbnoT_W65bnXTWqcMc39&ust=1744656720999000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCMiz0_zW1YwDFQAAAAAdAAAAABBo)

>[!NOTE] Known Dimensions from Prior Research
> - **Gold wire diameters tested**: $25\ \mu\text{m}$ and $17\ \mu\text{m}$
> - **Bump diameter for 25μm wire**: $67{-}78\ \mu\text{m}$ (expected: $\approx 3\times$ wire diameter)
> - **Pad pitch size**: $90\ \mu\text{m}$ (requires increase to $100\text{-}110\ \mu\text{m}$ for 25μm wire)
> - **Pad size and spacing (Design 1)**: $70\ \mu\text{m}$ pad, $20\ \mu\text{m}$ spacing
> - **Pad size and spacing (Designs 2 & 3)**: $60\ \mu\text{m}$ pad, $30\ \mu\text{m}$ spacing
> - **Trace width**: Matches pad size
> - **CPWG spacing (Design 2)**: $20\ \mu\text{m}$
> - **Electrode thickness (Batch 1)**: $\text{Cr}(15\ \text{nm})/\text{Au}(100\ \text{nm})$
> - **Electrode thickness (Batches 2 & 3)**: $\text{Ti}(50\ \text{nm})/\text{Au}(100\ \text{nm})$
> - **Measured gold thickness (Batch 1 samples)**: $111\ \text{nm}$ and $104\ \text{nm}$
> - **Die size**: $2\times2\ \text{mm}$ (measured as $2000\ \mu\text{m}$)
> - **Camera pixel-to-metric conversion rate**: $CR = \frac{2000}{1166} \approx 1.715\ \mu\text{m/px}$
> - **Transmission line lengths measured**: $25$, $100$, $500$, and $2740\ \mu\text{m}$
> - **Relative permittivity of glass substrate**: $\varepsilon_r = 7.75$
> - **Wavelength at 10 MHz**: $\lambda = \frac{3 \cdot 10^8}{10^7 \sqrt{7.75}} \approx 10.78\ \text{m}$
> - **Gold resistivity (reference)**: $\rho_{\text{Au}} = 2.041 \cdot 10^{-8}\ \Omega\cdot\text{m}$
> - **Trace resistivity (Evaporation)**: $3.99 \cdot 10^{-8}$ and $3.64 \cdot 10^{-8}\ \Omega\cdot\text{m}$
> - **Trace resistivity (Sputtering)**: $5.02 \cdot 10^{-8}$ and $5.01 \cdot 10^{-8}\ \Omega\cdot\text{m}$
> - **Line impedance formula**: $Z_{\text{line}} = Z_0 \frac{1 + S_{1,1}}{1 - S_{1,1}} - Z_0$
> - **Trace resistivity formula**: $\rho_{\text{trace}} = \frac{Z_{\text{line}} \cdot T_{\text{trace}} \cdot W_{\text{trace}}}{l_{\text{trace}}}$

![[coplanar waveguide calculation.png]]

# Basic Definitions for Quick Reference and to Check Later
- [What is a PCB Substrate? - PCB Directory](https://www.pcbdirectory.com/community/what-is-a-pcb-substrate)
- **[Comparison of 2.5D TSV based assembly options: A closer look](https://www.yolegroup.com/industry-news/comparison-of-2-5d-tsv-based-assembly-options-a-closer-look/)**
- [BT Epoxy Resin as an Alternative PCB Substrate Material](https://resources.pcb.cadence.com/blog/bt-epoxy-resin-as-an-alternative-pcb-substrate-material)
- [Table of Electrical Resistivity and Conductivity](https://www.thoughtco.com/table-of-electrical-resistivity-conductivity-608499)
- **[Gold Stud Bump Flip Chip Bonding on Molded Interconnect Devices](https://www.ipc.org/system/files/technical_resource/E15%26S15_01.pdf)**
- **[Performance and Process Comparison between Glass and Si Interposer for 3D-IC Integration](https://www.mosaicmicro.com/wp-content/uploads/ITRI_Glass_Interposer_2013.pdf)**
- [Microstrip - Wikipedia](https://en.wikipedia.org/wiki/Microstrip)
- [RLC circuit - Wikipedia](https://en.wikipedia.org/wiki/RLC_circuit)
- **[Why Au is preferred over Ag as a bonding metal](https://engineering.purdue.edu/MSE/engagement/PastSeniorDesign/Poster%20Folder/2017%20posters/Juniper%20Networks%20Poster.pdf)**
- **[Why Au is preferred over Cu as bonding metal](https://www.jos.ac.cn/fileBDTXB/oldPDF/10092014.pdf)**
- [Why AMD's Chiplets Work - Heterogeneous Integration](https://www.youtube.com/watch?v=-x9nGo0Ge70)
- [S-Parameters for Antennas (S11, S12, ...)](https://www.antenna-theory.com/definitions/sparameters.php#:~:text=S%2Dparameters%20describe%20the%20input,Port%201%20to%20Port%202.)
- [TPT Wire Bonder - Made in Germany](https://www.tpt-wirebonder.com/)

- **[Design and Package Technology Development of Face-to-Face Die Stacking as a Low Cost Alternative for 3D IC Integration](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6897308)**
- [Study on Flip Chip Assembly of High Density Micro-LED Array](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6117235)
- [Solid Logic Technology: Versatile, High-Performance Microelectronics*](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=5392211)
- [Sapphire flip-chip thermocompression and eutectic bonding for dielectric laser accelerator](https://snfguide.stanford.edu/sites/default/files/sections/diplayfiles/engr241_final_rport_hd_ym.pdf)
- [S-Parameter-Based IC Interconnect Transmission Line Characterization](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=159877)
- [Sensitivity Analysis of Pb Free Reflow Profile Parameters Toward Flip Chip on Silicon Assembly Yield, Reliability and Intermetallic Compound Characteristics](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=5490844)
- [A Comparison of Electrical Performance between a Wire Bonded and a Flip Chip CSP Package](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=1225888)
- [Comparison of the “Pad-Open-Short” and “Open-Short-Load” Deembedding Techniques for Accurate On-Wafer RF Characterization of High-Quality Passives](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=1393218)
- [Study of Gold Wire Bonding on 0.1 ȝm Soft Gold Film Substrate](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6922635)
- [Gold Stud Bump Flip Chip Bonding on Molded Interconnect Devices](https://www.ipc.org/system/files/technical_resource/E15%26S15_01.pdf)
- [Comparative Analysis of Electrical Performance on Coreless and Standard Flip-Chip Substrate](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=4250148)
- [Bond-on-Lead: A Novel Flip Chip Interconnection Technology for Fine Effective Pitch and High I/O Density](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=1645620)
- [A High Throughput and Reliable Thermal Compression Bonding Process for Advanced Interconnections](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7159653)
- [Effects of Underfill Material Properties on the Reliability of Solder Bumped Flip Chip on Board with Imperfect Underfill Encapsulants](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=776237)
- [Study of Interconnection Process for Fine Pitch Flip Chip](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=5074092)`
- [MATLAB - Measuring Manufacturing Yield for Gold Bumping Processes Under Dynamic Variance Change](https://ir.lib.nycu.edu.tw/bitstream/11536/5564/1/000276270800001.pdf)

# BEP Research
![[types of bonding.png|500]]
>[!NOTE] Bonding Material (Why Gold?)
>- conductivity, corrosion resistance, capacity to get bonds in place in an ambient environment.
>- copper oxidizes easily.
>- [Bump bonding](https://www.tpt.de/wp-content/uploads/00_Media/99_Elemente_und_Platzhalter/Anleitungen/TPT-Application-Bumps-NEW-EN.pdf)

explore the idea of bump to pillar bonding techniques.
[Everything to consider during bonding](https://www.microwavejournal.com/articles/3622-gold-stud-bumps-in-flip-chip-applications)
![[planarity.png|300]]
**planarity**, in flip-chip bonding, refers to the height consistency

![[interposer design patterns.pdf]]

![[considerations for research.png|500]]

**PARALLEL PLATE LINE (UNDERSTAND)**
thin film microstrip on carrier

[parallel plate line](https://chatgpt.com/c/67ea5ef4-2e68-800b-9d1b-75e05c2487c5)

[Interconnection signal property details](https://ewh.ieee.org/r8/norway/ap-mtt/files/DML_Norwegen_2008_Handout.pdf)
[Planar transmission line - Wikipedia](https://en.wikipedia.org/wiki/Planar_transmission_line)

>[!NOTE] Advantages of Flip chip
>- high pin count
>- high signal density
>- better power dissipation
>- low signal inductance and good power/ground connectivity
>- ideal for high speed interfaces (including RF) that wire bonds cannot support
>- good assembly dynamics
>- FCBGA (flip chip ball grid array): good thermal performance, finer pitch routing, preferred for high power design (look into power amplification chips).
>- best for lower frequencies due to short interconnections
>- suitable for mm-waves because of small dimensions
>- **RF-effects:** detuning of on-chip circuit, reflections at bump transition.
>  - Broad-band interconnects up to 80 GHz and more realized

![[assembly considerations.png|500]]
![[performance characteristics.png|500]]

>[!NOTE] Advantages of Interposer
>- higher interconnect density
>- iimproved signal integrity
>- lower power consumption
>- enhanced power efficiency
>- potential for cost savings in manufacturing processes
>- primary reason is fro RDL (redistribution layers) -> reroute connects from dense pitch to wider pitch of substrate.
>  - look into Intel **embedde multi-die interconnect bridge (EMIB)**


[Reliability of Silver Wire Bonds](https://engineering.purdue.edu/MSE/engagement/PastSeniorDesign/Poster%20Folder/2017%20posters/Juniper%20Networks%20Poster.pdf):
>[!NOTE] Formulas
> **Acceleration Factor (Peck's Model)**  
> $AF=\left(\frac{V_{Test}}{V_{Use}}\right)\left(\frac{RH_{Test}}{RH_{Use}}\right)^n e^{\frac{E_a}{k}\left(\frac{1}{T_{Use}}-\frac{1}{T_{Test}}\right)}$
>
> **Mean Time To Failure (MTTF)**  
> $MTTF=AF \cdot \text{Total Device Test Hours} \cdot \frac{2}{6.3}$
>
> **Failure Criterion**  
> A chip is considered failed if its resistance increases by $\geq15\%$.
>
> **Material Properties**  
> - **Silver (Ag):**  
>  Thermal conductivity: $430\ \mathrm{W/mK}$  
>  Electrical resistivity: $1.63\times10^{-8}\ \Omega \cdot m$  
>  Young’s modulus: $83\ \mathrm{GPa}$  
>  Vickers hardness: $251\ \mathrm{MPa}$  
>  Price: $\$19.59/\mathrm{oz}$
>
> - **Gold (Au):**  
>  Thermal conductivity: $320\ \mathrm{W/mK}$  
>  Electrical resistivity: $2.2\times10^{-8}\ \Omega \cdot m$  
>  Young’s modulus: $78\ \mathrm{GPa}$  
>  Vickers hardness: $216\ \mathrm{MPa}$  
>  Price: $\$1322.10/\mathrm{oz}$
>
> - **Copper (Cu):**  
>  Thermal conductivity: $400\ \mathrm{W/mK}$  
>  Electrical resistivity: $1.72\times10^{-8}\ \Omega \cdot m$  
>  Young’s modulus: $130\ \mathrm{GPa}$  
>  Vickers hardness: $369\ \mathrm{MPa}$  
>  Price: $\$0.14/\mathrm{oz}$
>
> **Testing Conditions**  
> - **HTST:** $150^\circ C$  
> - **Biased HTST:** $130^\circ C,\ 3.3\ \mathrm{V}$  
> - **u-THS:** $130^\circ C,\ 85\%$ RH  
> - **b-THS:** $130^\circ C,\ 85\%$ RH, $3.3\ \mathrm{V}$
>
> **Experimental Insights**  
> - Silver wire bonds have MTTFs:  
>  Type 6: $55.3$ years  
>  Type 7: $73.4$ years  
> - Gold wire bonds: No failure observed in test period
> - Acceleration Factor computed: $AF = 337.92$
>[!NOTE] Ball Bonding Material Recommendation
> **Recommended Material: Gold (Au)**  
> Gold remains the best choice for **ball bonding** between chip and interposer due to its **proven long-term reliability**. In accelerated stress testing, **no gold wire bond failures** were observed, while **silver** showed failures under bias, humidity, and temperature conditions.
>
> **Why Material Properties Matter in Ball Bonding**  
> - **Thermal Conductivity** ($W/mK$): Measures how well heat dissipates. Important to prevent thermal buildup at the bond interface.  
> - **Electrical Resistivity** ($\Omega \cdot m$): Lower is better for signal integrity and power efficiency.  
> - **Young’s Modulus** ($GPa$): Reflects stiffness. Lower modulus (as in gold) allows better compliance with thermal expansion, reducing stress and cracking.  
> - **Vickers Hardness** ($MPa$): Indicates material hardness. Too hard (like copper) risks damaging bonding pads; too soft (like silver) risks deformation and reliability loss.
>
> Gold offers the **best balance** of these properties, making it ideal for reliable, damage-free, and high-performance ball bonds in microelectronics.

>[!NOTE] Types of Interposer
> - **Open Test Structure**  
>   • **Purpose**: Baseline measurement of parasitics (pads, traces) without loading  
>   • **Use for**: De-embedding using open reference  
>   • **S-parameter setup**: Port to open-end  
>   • **Key idea**: Used to extract pad capacitance and stray inductance  
>   • **Example use**: OS (Open-Short) de-embedding  
>
> - **Short Test Structure**  
>   • **Purpose**: Estimate inductive and resistive components of interconnects  
>   • **Use for**: De-embedding with shorted reference  
>   • **S-parameter setup**: Port to GND short  
>   • **Key idea**: Combined with open test to isolate bump resistance/inductance  
>   • **De-embedding equation**: $Z_{\text{device}} = Z_{\text{measured}} - Z_{\text{short}}$  
>
> - **Through-Line (Matched Line)**  
>   • **Purpose**: Measure the characteristics of a transmission line  
>   • **Use for**: Extracting $R$, $L$, $C$, $G$ per unit length  
>   • **S-parameter setup**: $S_{21}$ for insertion loss, $S_{11}$ for reflections  
>   • **Length examples**: $l = 100\ \mu\text{m},\ 500\ \mu\text{m},\ 2.5\ \text{mm}$  
>   • **Equation**: $\rho_{\text{trace}} = \frac{Z_{\text{line}} \cdot T_{\text{trace}} \cdot W_{\text{trace}}}{l_{\text{trace}}}$  
>
> - **Open Bump Chain**  
>   • **Purpose**: Evaluate parasitics of bump-only interconnects  
>   • **Use for**: Modeling bump resistance and inductance  
>   • **S-parameter setup**: End left floating  
>   • **Key idea**: Useful to isolate bump contribution from trace contribution  
>
> - **Terminated (Load-Matched)**  
>   • **Purpose**: Validate impedance matching  
>   • **Use for**: Reflection coefficient, return loss  
>   • **Termination**: Load with $Z_L = 50\ \Omega$  
>   • **Key metric**: $S_{11} \approx 0$ if matched properly  
>
> - **Loopback Interposer**  
>   • **Purpose**: Simple continuity and total path loss check  
>   • **Use for**: Insertion loss test, system-level check  
>   • **Setup**: Connect input pad directly to output pad via trace  
>
> - **Multi-Length Line Structures**  
>   • **Purpose**: Characterize delay and extract RLCG via linear fitting  
>   • **Use for**: Time delay $\Delta t$, slope-based parameter extraction  
>   • **Length variation**: $l = 100,\ 500,\ 1000,\ 2740\ \mu\text{m}$  
>   • **Key formula**: $\lambda = \frac{c}{f\sqrt{\varepsilon_r}}$  
>
> - **Coplanar Waveguide (CPWG)**  
>   • **Purpose**: Validate controlled impedance trace layout  
>   • **Use for**: High-frequency signal propagation  
>   • **Design goal**: $Z_0 = 50\ \Omega$  
>   • **Tools**: Qucs, LineCalc, or ADS to design with $W$, $S$, $H$, $T$  
>
> - **Die Bonded Structure**  
>   • **Purpose**: Final test including actual bonded die  
>   • **Use for**: Validating electrical contact and full signal chain  
>   • **S-parameter setup**: VNA probes on die I/O or breakout pads  
>   • **Note**: Only used after confirming open/short/through integrity  

[Single-Layer RF Interposer on Glass: Research, Designs, and Test Strategies](https://chatgpt.com/c/68036d28-0098-800b-a1ab-fea9beb1c5c4)

[QUCS Design](https://chatgpt.com/c/68063118-3740-800b-b59f-6e610bde7e49)
[Ball Bonding](https://chatgpt.com/c/6808d09e-fc00-800f-9838-3db01d2e5c37)
[evaporation vs sputtering](https://chatgpt.com/c/680e4a76-6cb4-800f-82f7-63085aa72724)
[interposer pad size calculation](https://chatgpt.com/c/680e5c27-20dc-800f-80f2-d0401ff3e029)
[amplifier interposer design1](https://chatgpt.com/c/6819e9ef-1908-800b-8fbf-db3921ad4cf1)
[amplifier interposer design0](https://chatgpt.com/c/68192ef4-e820-800b-a2aa-e8f590781c12)

[coplanar waveguide version of amplifier](https://chatgpt.com/c/681b78f9-7274-800b-a857-ff7ca8e1e761)

[The planar capacitor calculations](https://chatgpt.com/c/6821775a-d8b0-800b-8e38-7d532b53d268)

[useful](https://chatgpt.com/c/68192ef4-e820-800b-a2aa-e8f590781c12)


[presentation](https://chatgpt.com/c/6822b756-4f44-800b-8286-950499679351)
# Practical, Theory & Lab-Execution Plan
## Simulations & Formulas
### 1. Gold Bump Lump Model (S1P)
[calculations for simulations](https://chatgpt.com/c/683c0341-a47c-800b-9d7c-9541408d9f4c)
[Relevant Paper](file:///home/danieltyukov/workspace/tue/tue-notes/BEP-SiP_Integration_of_Large_Scale_DAC_Arrays/litrature/comparing%20coplanar%20waveguide%20to%20a%20grounded%20version.pdf)
S-parameter extracted from simulated lumped models of a GSG CPW line of below dimensions (Length: 1.5mm, Signal line width: 69 microns, Ground line width: 153 microns). The goal is to first use the VNA machine to calibrate for measuring the RF TXFE die and extracting the 1 port S parameters directly from it. Since the die is already on a PCB the calibration happens using a PCB without the die but just with a substrate. The second step is to calibrate and extract the 1 port S parameters from the interposer, specifically of the dimensions previously mentioned of the GSG CPW lines, the goal is to calibrate with an open and a short. The 3rd step is to place the gold bumps on the interposer and then perform a successful flip chip of the RF die onto the interposer with a successful bonding achieved a DC measurement will happen which will confirm the connection and then we will perform the VNA the 1 port s parameter extraction of the full interconnected system. We then perform de-embedding in MATLAB and by subtracting the S parameters of the die and substrate from the full system, achieve the S parameters of the gold bump which can be used to determine the R or RC lump model of the gold bump.

After the first step the goal is to also perform QUCS simulations based on the S parameters from the die and calculated lumped components of the gold bump and the interposer GSG lines and compare them with reality. We will use a 1 port file from the die in the qucs simulation and the calculated estimated lump model of the bump and the line.

The practical experiement:
1. probe chip, $Z_{in_{die}}(f)$.
2. probe the open and short GSG lines of the interposers, calculate the reference plain at transmission line end.
3. probe the chip + interposer + gold bumps (connecting the interposer to die) on the GSG lines.
4. Use de-embedding to  extract the S-parameters and then the lump model of the gold bumps by subtrsating from the full system in step 3 the step 1 and 2 of the die and interposer.
5. (all of the above is done as a 1 port system).
![[gsg assumption.png|300]]
#### Lump Model of the GSG Lines (Simulation)
##### Symbols & Geometry

| Symbol          | Meaning                | Your CPW                              |
| --------------- | ---------------------- | ------------------------------------- |
| $w$             | Signal-strip width     | 69 µm                                 |
| $s$             | Gap (signal ↔ ground)  | 41 µm                                 |
| $g$             | Ground-bar width       | 153 µm                                |
| $t$             | Metal thickness        | 150 nm (Ti/Au)                        |
| $\rho$          | Resistivity            | $3.9858 \times 10^{-8}\ \Omega\cdot$m |
| $\varepsilon_r$ | Substrate permittivity | 7.75 (glass)                          |
| $\tan\delta$    | Loss tangent           | 0.005                                 |
| $\ell$          | Physical length        | 1.15 mm                               |

Effective permittivity approximation (quasi-TEM):

- $\varepsilon_{\mathrm{eff}} = \frac{\varepsilon_r + 1}{2} = \frac{7.75 + 1}{2} = 4.375$

##### Closed-form CPW Formulas

$k = \frac{w}{w + 2s} = \frac{69}{69 + 2 \cdot 41} = 0.457$

$k' = \sqrt{1 - k^2} = \sqrt{1 - 0.457^2} = 0.889$

$K = \text{EllipticK}(k^2) = \text{EllipticK}(0.209) \approx 1.664$

$K' = \text{EllipticK}(k'^2) = \text{EllipticK}(0.79) \approx 2.238$

$Z_0 = \frac{30\pi}{\sqrt{\varepsilon_{\mathrm{eff}}}} \cdot \frac{K'}{K} = \frac{30\pi}{\sqrt{4.375}} \cdot \frac{2.238}{1.664} \approx 60.6\ \Omega$

$C' = 4 \varepsilon_0 \varepsilon_{\mathrm{eff}} \cdot \frac{K}{K'} = 4 \cdot 8.854 \times 10^{-12} \cdot 4.375 \cdot \frac{1.664}{2.238} \approx 115\ \text{pF/m}$

$L' = Z_0^2 \cdot C' = (60.6)^2 \cdot 115 \times 10^{-12} \approx 423\ \text{nH/m}$

$R'_{\text{dc}} = \frac{\rho}{w \cdot t} = \frac{3.9858 \times 10^{-8}}{69 \times 10^{-6} \cdot 150 \times 10^{-9}} = 3.85\ \text{k}\Omega/\text{m}$

$G'(\omega) = \omega C' \tan\delta = 2\pi \cdot 5 \times 10^9 \cdot 115 \times 10^{-12} \cdot 0.005 \approx 0.018\ \text{S/m}$
##### Lumped $\pi$-Model Values (for $\ell = 1.15$ mm)

$R_1 = R'_{\text{dc}} \cdot \ell = 3850\ \Omega/\text{m} \cdot 1.15 \times 10^{-3} = 4.43\ \Omega$

$L_1 = L' \cdot \ell = 423 \times 10^{-9}\ \text{H/m} \cdot 1.15 \times 10^{-3} = 0.486\ \text{nH}$

$C_1 = C_2 = \frac{C' \cdot \ell}{2} = \frac{115 \times 10^{-12} \cdot 1.15 \times 10^{-3}}{2} = 66.3\ \text{fF}$

$R_2 = \frac{1}{G' \cdot \ell} = \frac{1}{0.018 \cdot 1.15 \times 10^{-3}} = 48.3\ \text{k}\Omega$

$C_3 = 0\ \text{pF}$ (negligible pad-to-pad coupling)

##### QUCS Simulation Values

| Element           | Value             |
| ---------------- | ----------------- |
| Series $R_1$      | 4.43 Ω            |
| Series $L_1$      | 0.486 nH          |
| Shunt $C_1$       | 66.3 fF (top node)|
| Shunt $C_2$       | 66.3 fF (bottom)  |
| Shunt $R_2$       | 48 kΩ             |
| End-to-end $C_3$  | 0 pF (omit)       |
| Sweep range       | 100 MHz to 5 GHz, 100 MHz step |
##### Formula Reference Sheet

$k = \frac{w}{w + 2s}$

$k' = \sqrt{1 - k^2}$

$\frac{K'}{K} = \frac{\text{EllipticK}(k'^2)}{\text{EllipticK}(k^2)}$

$Z_0 = \frac{30\pi}{\sqrt{\varepsilon_{\mathrm{eff}}}} \cdot \frac{K'}{K}$

$C' = 4\varepsilon_0\varepsilon_{\mathrm{eff}} \cdot \frac{K}{K'}$

$L' = Z_0^2 \cdot C'$

$R' = \frac{\rho}{wt}$

$G'(\omega) = \omega C' \tan\delta$

$R = R' \ell$

$L = L' \ell$

$C = C' \ell$

$R_2 = \frac{1}{G' \ell}$
#### Lump Model of the **3 bumps — one per line on (GSG) lines** (Simulation)
What we will get from the practical simulation is for 3 bumps since that is the reality but then to create a lump model of 1 we will use the equations below to report on.

| Parameter              | Symbol            | Value | Notes                |
| ---------------------- | ----------------- | ----- | -------------------- |
| Free-air ball diameter | $D_{\text{ball}}$ | 70 µm | After EFO            |
| Compressed bump height | $h_b$             | 25 µm | Final bonded height  |
| Contact diameter       | $D_b$             | 70 µm | Assumed same as ball |
| Bump radius            | $r_b=D_b/2$       | 35 µm | $35\times10^{-6}$ m  |
##### 2 Lumped element formulas for one bump
$R_b=\frac{\rho_{\text{Au}}\,h_b}{\pi r_b^2}$  
$L_b=\mu_0 h_b \left[\ln\left(\frac{4h_b}{r_b}\right)+1\right]$  
$C_b\approx\frac{\varepsilon_0 \varepsilon_{\text{eff}} \pi r_b^2}{s}$
##### 3 Values for a **single bump**

| Element | Formula & Calculation                                                                                   | Value       |
| ------- | ------------------------------------------------------------------------------------------------------- | ----------- |
| $R_b$   | $\frac{2.44\times10^{-8} \cdot 25\times10^{-6}}{\pi\cdot(35\times10^{-6})^2}$                            | **0.16 mΩ** |
| $L_b$   | $4\pi\times10^{-7}\cdot25\times10^{-6}\cdot\left[\ln\left(\frac{4\cdot25}{35}\right)+1\right]$          | **64 pH**   |
| $C_b$   | $8.854\times10^{-12}\cdot4.375\cdot\pi\cdot(35\times10^{-6})^2/(41\times10^{-6})$                        | **3.6 fF**  |
##### 4 Lumped model of **3 bumps** (1 signal, 2 grounds in parallel)
$R_{\text{3-bump}}=R_b+\frac{R_b}{2}=\frac{3}{2}R_b$  
$L_{\text{3-bump}}=L_b+\frac{L_b}{2}=\frac{3}{2}L_b$  
$C_{\text{3-bump}}\approx C_b$
##### 5 Final simulation values for QUCS (combined 3-bump model)

| Element             | Formula          | Value       |
| ------------------- | ---------------- | ----------- |
| $R_{\text{3-bump}}$ | $\frac{3}{2}R_b$ | **0.24 mΩ** |
| $L_{\text{3-bump}}$ | $\frac{3}{2}L_b$ | **96 pH**   |
| $C_{\text{3-bump}}$ | $C_b$            | **3.6 fF**  |

### 2. Yield Testing
Just follow the procedure outlines in types of experiments, there are no predictions or simulations the goal is compare 2 profiles -> calculated vs provided by acceleronix. Both for the gold bump bonding profile and the flip chip bonding profile.

After performing the gold bump placement and the flip chip the goal is extract analyze for [planarity](https://www.microwavejournal.com/articles/3622-gold-stud-bumps-in-flip-chip-applications) which is basically opens between connections and for shorts between parallel rows. The increment count for the analysis and report.
### 3. Amplifier Performance Testing (Simulation)
Values were used to create an interposer mask, and also to choose the passive components that will be used on the interposer when fabricated.

Bias at: Vds=Vdd=28V, Ids=128mA bias, Vgs = -2.8V
#### Passive Component Table
| Ref                                             | Value / Rating                  | Pkg  |
| -----------------------------------------------| -------------------------------- | ---- |
| **R<sub>S</sub>**                               | 22 Ω, 0.333 W                   | 0603 |
| **R<sub>D</sub>**                               | 18 Ω, 0.333 W *(optional)*      | 0603 |
| **R<sub>1</sub>**                               | 10 MΩ, 0.1 W                    | 0603 |
| **R<sub>2</sub>**                               | 1 MΩ, 0.1 W                     | 0603 |
| **C<sub>1</sub>, C<sub>2</sub>, C<sub>3</sub>** | 100 pF, 50 V, NP0               | 0402 |
| **L<sub>bias</sub>**                            | 4.7 µH, I<sub>sat</sub> = 620 mA | 0603 |
#### Design Calculations and Formulas
| Quantity                       | Formula                                           | Inputs                  | Result / Value                                              |
| ------------------------------| ------------------------------------------------- | ----------------------- | ------------------------------------------------------------ |
| **R<sub>S</sub>**              | $R = \frac{V_S}{I_D}$                             | 2.8 V / 0.128 A         | 21.9 Ω → **22 Ω**                                            |
| Power in R<sub>S</sub>         | $P = I^2 R$                                       | $0.128^2 \times 22$     | **0.36 W**                                                   |
| **R<sub>D</sub>** (optional)   | $R = \frac{V_{DD} - V_D}{I_D}$                    | (32 V–30 V) / 0.128 A   | 15.6 Ω → **18 Ω**                                            |
| Power in R<sub>D</sub>         | $P = I^2 R$                                       | $0.128^2 \times 18$     | 0.30 W                                                       |
| **Gate bias**                  | $V_G = V_{DD} \cdot \frac{R_2}{R_1 + R_2}$        | 28 V, 10 MΩ / 1 MΩ      | 2.55 V                                                       |
| $V_{GSQ}$                      | $V_G - I \cdot R_S$                               | 2.55 V − 0.128 A × 22 Ω | ≈ −0.27 V                                                    |
| **L<sub>bias</sub> head-room** | $I_{sat} \geq 2 \cdot I_D$                        | $2 \times 0.128$ A      | 0.256 A                                                      |

We have 2 simulation types we have one qucs simulation using the provided amplifier transistor S2P file which is probed and direct S-parameters are extracted that showcase the 5 GHz S21 amplification are around 10.4 dB and with the transistor die on the interposer with the passive components create a common source amplifier with around 8.5 dB at 5GHz which showcases a good design of an interposer. 

The transistor will be flip chipped onto the interposer and then since the gate pad is on the top the gate will be wire bonded after the flip chip. We are using the TGF-2023-2-02 transistor. 
## Types of Experiments (In order)

Die metal line (TXFE rf die): $5.14 m \Omega/sq$

164.8/2=82.4

32.2/5=6.4


6 * 20 + 2*30 + 5 * 10   /  4 = 57.5 = 58 


147 squares internally of signal through inductor curled to ground.

147

0.6



### 1. RF - Gold Bump Lump Model (S1P)

> **Objective**  
> Extract the lumped $R$ (or $R+j\omega L$, optionally $+\dfrac{1}{j\omega C}$) of the **three-bump GSG interconnect** by **1-port de-embedding**, then validate the model in **QUCS**.
#### A. Physical Items & Measurements

| Item                          | Measured? | Calibration? | Purpose                 |
| ----------------------------- | --------- | ------------ | ----------------------- |
| Bare **RF die on PCB**        | ✔         | 1-port OSL   | $S_{11,\text{die}}(f)$  |
| **Interposer CPW** (no bumps) | ✔         | OSL          | $S_{11,\text{line}}(f)$ |
| **Die + Interposer + Bumps**  | ✔         | Uses above   | $S_{11,\text{full}}(f)$ |

![[gsg assumption.png|300]]
![[RF die pinout.png|400]]
#### B. Common VNA Settings  
- Frequency span 10 MHz→10 GHz, 10 MHz step  
- Port impedance 50 Ω  
- File format Touchstone *.s1p*
#### C. Step-by-Step Procedure  

##### Step 0 — Prepare Coupons  
1. **PCB substrate coupon** (die footprint, no die).  
2. **Interposer coupon** (CPW pads, no bumps).  
##### Step 1 — Calibrate & Probe the Die  
1. On substrate coupon perform **OSL**:  
   - *Open* bare pads • *Short* • *Load* 50 Ω resistor.  
1. Shift reference plane to pad centres.  
2. Probe real die on PCB → save **die_on_pcb.s1p**.  
   - $Z_{in_\text{die}}(f)=Z_0\frac{1+S_{11}}{1-S_{11}}$
##### Step 2 — Calibrate Interposer Pads  
1. On interposer coupon perform **OSL** at GSG pads.  
2. Set reference plane at CPW-to-bump transition.  
3. Store as **Cal Set #2**.
##### Step 3 — Measure CPW (No Bumps)  
- With Cal Set #2 active probe CPW line → **interposer_openline.s1p**.  

Expected lumped-$\pi$ parameters (for $\ell=1.15\text{ mm}$):  

| Element | Value |
| ------- | ----- |
| $R_1$ | 4.43 Ω |
| $L_1$ | 0.486 nH |
| $C_{1}=C_{2}$ | 66.3 fF |
| $R_2$ | 48 kΩ |
##### Step 4 — Assemble & DC-Verify  
1. Place **Au bumps** (Ø 70 µm) on interposer.  
2. Flip-chip bond die; reflow.  
3. Confirm $R_\text{dc}<0.5 \Omega$ between signal nodes.
##### Step 5 — Measure the Full Stack  
- Using Cal Set #2 probe the bonded assembly → **full_stack.s1p**.
##### Step 6 — Data Reduction (MATLAB/Python)  
1. Load the three *.s1p* files → convert to impedance: $Z=Z_0\frac{1+S_{11}}{1-S_{11}}$.  
2. Compute bumps-only impedance:
   $Z_{\text{bump}}(f)=Z_{\text{full}}(f)-Z_{\text{die}}(f)-Z_{\text{line}}(f)$  
3. $Z_{\text{model}}(f)=R_b+j\omega L_b+\dfrac{1}{j\omega C_b}$  
4. Scale to 1 bump:  
   $R_{b}=\frac{R_1}{1.5},\;L_{b}=\frac{L_1}{1.5},\;C_{b} \approx C_1$  
##### Step 7 — QUCS Validation  
1. Schematic: port → `die_on_pcb.s1p` → 3-bump RLC → CPW $\pi$.  
2. Sweep 10 MHz→10 GHz; overlay with **full_stack.s1p**.  
3. Acceptance: $|S_{11,\text{sim}}-S_{11,\text{meas}}|<0.5\text{ dB}$, phase < 5°.

#### D. Deliverables  

| File                      | Description        |
| ------------------------- | ------------------ |
| `die_on_pcb.s1p`          | Die input $S_{11}$ |
| `interposer_openline.s1p` | CPW line $S_{11}$  |
| `full_stack.s1p`          | Die + bumps + CPW  |
| MATLAB notebook           | De-embed & fit     |
| QUCS project              | Validation         |
#### E. Key Equations  

$Z_{in}=Z_0\frac{1+S_{11}}{1-S_{11}}$  

$Z_{\text{bump}}=Z_{\text{full}}-Z_{\text{die}}-Z_{\text{line}}$  

$R_b=\frac{\rho_{\text{Au}}h_b}{\pi r_b^2}$  

$L_b=\mu_0h_b\left[\ln\left(\frac{4h_b}{r_b}\right)+1\right]$  

$C_b\approx\frac{\varepsilon_0\varepsilon_{\text{eff}}\pi r_b^2}{s}$  
### 2. Yield Testing
**Continuity** test, check for opens, measuring the **resistance** left and right ends of the same row. The goal is that $R_{measured} \approx R_{DC}$.

**Short** test, check for shorts between the parallel rows the expectation is very high resistance $M\Omega$ range.

We will perform 2 tests on 2 gold bumps and assume 1 gold bump.

We will get the $R_{DC}$ by probing the interposer line before flip chip and then multiplying by a ratio as the ratio after the flip chip happens is 3 times longer + the bumps but bumps can be counted as irrelevant the goal is to just observe $R_{measured} \approx R_{DC}$.
### 3. Amplifier Performance Testing (s2p) (Practical)
#### Amplifier Die
28V voltage bias, S parameter extraction at 2 ports to verify against simulation for 10MHZ to 5GHz in 10MHz step.

Bias at: Vds=Vdd=28V, Ids=128mA bias, Vgs = -2.8V.

SMD component adding  performing a ball bonding flip chip and then wire bonding for the ground pad -> complex operation. Then extracting the S parameters and comparing with the S parameters in the QUCS simulation, as well as comparing it with the BEST direct die transistor S parameters, to really evaluate the quality of the interposer and ability of creating a fully functional transistor amplifier circuit on an interposer (common source amplifier SiP).
## Gold Bump Bonding Profile (TPT HB16)
The goal is to have 2 thermalsonic bonding profiles of creating gold bumps. One from acceleronix and one personally made based off calculations from the substrate.

[Wire bonder TPT HB 16 (WIRE-BONDER)](https://nano.ceitec.cz/wire-bonder-tpt-hb-16-wire-bonder/)

**Up CO:** After the second bond, the clamp is **opened**, and the bondhead (Z-axis) **moves upward**, thereby cutting the wire.

**Bump without Tail**:
![[bump without tail.png|500]]
### Acceleronix (Ballbond)
**Bond 1**
US(mW): 220
Time(ms): 200
Force(mN): 200
**Bond 2**
US(mW): 70
Time(ms): 50
Force(mN): 20
**Other**
YWay($\mu m$) (horizontal direction after BOND1): 135
Looph($\mu m$) (vertical direction after BOND1): 100
Heater($\degree C$): 110 (108)
Tail Step($\mu m$): 20
EFO Power(mW): 95
Up CO(clamp open and bondhead move upwards): 300
### Calculated (Daniel) (Ballbond)
**Bond 1**
US(mW): 180
Time(ms): 150
Force(mN): 100
**Bond 2**
US(mW): 60
Time(ms): 60
Force(mN): 35
**Other**
YWay($\mu m$) (horizontal direction after BOND1): 120
Looph($\mu m$) (vertical direction after BOND1): 120
Heater($\degree C$): 120
Tail Step($\mu m$): 450 (100 max)
EFO Power(mW): 90
Up CO(clamp open and bondhead move upwards): 300


### Changed Parameters with Justification
Based on interposer stack: **Ti (50 nm) / Au (100 nm) on glass**, 25 µm Au wire, HB-16 Wire Bonder.

| **Parameter**           | **Acceleronix** | **Calculated**                 | **Justification**                                                                                                                                                                                                                       |
| ----------------------- | --------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1st Bond Force**      | 200 mN          | 100 mN                         | Lowered to 100 mN, which is ~3× the plastic-flow threshold for 25 µm Au at 120°C. Calculated using: $F_{\min} = \frac{\pi}{4} \cdot \sigma_y(T) \cdot D_w^2$ where $\sigma_y(120^\circ C) \approx 35$ MPa, $D_w = 25 \times 10^{-6}$ m. |
| **1st Bond Power**      | 220 mW          | 180 mW                         | Reduced to match energy $E = 27$ mJ needed for $\eta \ge 0.98$. Using: $E = P_{\mathrm{US}} \cdot t$ and $E_{\min} = \frac{-\ln(0.02)}{\gamma F}$ with $\gamma = 4.2 \times 10^{-4}$ mJ⁻¹N⁻¹.                                           |
| **1st Bond Time**       | 200 ms          | 150 ms                         | Shorter time avoids overheating and still delivers required energy: $E = 180 \cdot 150 = 27$ mJ.                                                                                                                                        |
| **Chuck Temperature**   | 110 °C          | 120 °C                         | Slight increase to soften Au. Lower $\sigma_y(T)$ improves bond coverage at lower force. $\sigma_y(T) = \sigma_0 \cdot e^{-\beta(T - T_0)}$ with $\beta \approx 0.01 \, \text{K}^{-1}$.                                                 |
| **Y-Way (Forward)**     | 135 µm          | 120 µm                         | Reduced to centre Bond 2 on the mashed bump crown. Too much lateral shift increases risk of off-centre coin tap and uneven break.                                                                                                       |
| **Looph (Up)**          | 100 µm          | 120 µm                         | Adjusted to ensure second bond head tap clears the ball without hitting it at an angle. Ensures bump height ≈ 40 µm.                                                                                                                    |
| **Tail Length**         | 20 µm           | 100 µm (press 4 times for 400) | Changed to HB-16 standard (400–500 µm) for Table-Tear. Ensures large, uniform FAB ~75–80 µm.                                                                                                                                            |
| **2nd Bond Force**      | 20 mN           | 35 mN                          | Slightly increased to just exceed plastic deformation threshold and create a visible groove without squashing the ball. Same $\sigma_y(T)$ relation applies.                                                                            |
| **2nd Bond Power/Time** | 70 mW / 50 ms   | 60 mW / 60 ms                  | Lowered to deliver ~3.6 mJ: $E = P_{\mathrm{US}} \cdot t$. Enough to create groove for Table-Tear without collapse.                                                                                                                     |
| **Up CO**               | 300 µm          | 300 µm                         | Retained default. Adequate head lift for wire break without introducing unnecessary delay.                                                                                                                                              |

### Summary of Targeted Design

- **Goal**: Minimize ultrasonic energy and force to protect **thin Ti/Au on glass**.
- **Result**: 27 mJ bonding energy at 100 mN yields ≥98% bonded area per slip-energy model.
- **Equations Used**:
  - $\sigma_y(T) = \sigma_0 \cdot e^{-\beta(T - T_0)}$
  - $F_{\min} = \frac{\pi}{4} \cdot \sigma_y(T) \cdot D_w^2$
  - $E = P_{\mathrm{US}} \cdot t$
  - $\eta = 1 - \exp[-\gamma F E]$
  - $E_{\min} = \frac{-\ln(0.02)}{\gamma F}$


### equations in detail

>[!NOTE] Key Equations for Optimising Gold Stud Bump Bonding  
> All symbols are defined immediately below each formula. These equations link the controllable bonder parameters ($P_{\mathrm{US}},F,t,T$) to bump quality metrics (bond coverage, diameter, strength) and enable predictive optimisation for any wire diameter or substrate stack.  
>  
> ### 1. Temperature-dependent yield strength  
> $\sigma_y(T)=\sigma_0\exp[-\beta(T-T_0)]$  
> * **$\sigma_y(T)$** – yield strength of gold at temperature $T$  
> * **$\sigma_0$** – yield strength at reference temperature $T_0$  
> * **$\beta$** – empirical softening coefficient (≈ 0.01 K⁻¹)  
> * **$T$** – chuck / pad temperature (°C)  
> * **$T_0$** – reference temperature (°C)  
>  
> ### 2. Minimum normal force for plastic flattening  
> $F_{\min}=k\,\sigma_y(T)D_w^{2}$  
> * **$F_{\min}$** – least force that initiates plastic flow  
> * **$k$** – geometric constant for a hemispherical free-air ball (≈ π/4)  
> * **$\sigma_y(T)$** – yield strength from Eq 1  
> * **$D_w$** – wire diameter  
>  
> ### 3. Ultrasonic energy delivered  
> $E=P_{\mathrm{US}}\,t$  
> * **$E$** – ultrasonic energy coupled into the interface  
> * **$P_{\mathrm{US}}$** – ultrasonic power set on the bonder  
> * **$t$** – ultrasonic vibration time  
>  
> ### 4. Fraction of bonded area (slip-energy model)  
> $\eta=1-\exp[-\gamma F E]$  
> * **$\eta$** – bonded-area fraction ($\eta=1$ ⇒ full interface)  
> * **$\gamma$** – empirical constant ($4.2\times10^{-4}$ mJ⁻¹ N⁻¹ for 25 µm Au)  
> * **$F$** – applied normal force  
> * **$E$** – ultrasonic energy from Eq 3  
>  
> ### 5. Minimum energy for ≥ 98 % coverage  
> $E_{\min}=\dfrac{-\ln(0.02)}{\gamma F}$  
> * **$E_{\min}$** – least energy that yields $\eta\ge0.98$  
> * **$\gamma,F$** – as defined in Eq 4  
>  
> ### 6. Mash-diameter growth with excess energy/force  
> $D_m=D_{\mathrm{FAB}}\bigl[1+\alpha\bigl(\tfrac{F}{E}\bigr)\bigr]$  
> * **$D_m$** – final (mashed) bump diameter  
> * **$D_{\mathrm{FAB}}$** – free-air-ball diameter (≈ 3 $D_w$)  
> * **$\alpha$** – deformation coefficient (0.18 mJ N⁻¹ for 25 µm Au)  
> * **$F,E$** – force and energy from Eqs 2 & 3  
>  
> ### 7. Cycle-time relation (chosen set-point)  
> $t = \dfrac{E_{\min}}{P_{\mathrm{US}}}$  
> * **$t$** – ultrasonic time required when power $P_{\mathrm{US}}$ is fixed  
> * **$E_{\min}$** – energy from Eq 5  
> * **$P_{\mathrm{US}}$** – ultrasonic power

## Flip chip Bonding Profile (Dr. Tretsky T-5300)
[SC: Values](https://chatgpt.com/c/68357f0e-737c-800f-85c2-44490cd15f72?model=gpt-4o)
The goal is to have 1 personally made bonding pressure and thermal changing profile for creating a successful flip chip.

| Parameter          | Value                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------ |
| Place Force        | $F_\text{bump} ≈ 0.035\ \text{kg} = 35\ \text{g}$ per bump                                                   |
|                    | $F_\text{total} = N_\text{bump} × 0.035\ \text{kg}$                                                          |
| Interface Pressure | $P = \frac{F}{A} ≈ \frac{0.035\ \text{kg} × 9.81\ \text{m/s}^2}{\pi (37.5\ \mu\text{m})^2} ≈ 80\ \text{MPa}$ |
| Place Duration     | $60\,000\ \text{ms} = 60\ \text{s}$                                                                          |
| Diffusion Length   | $x = \sqrt{Dt} ≈ \sqrt{5 × 10^{-17}\ \text{m}^2/\text{s} × 60\ \text{s}} ≈ 55\ \text{nm}$                    |
75/2 = 37.5
### substrate

| Stage   | Segment Type | Start Trigger      | Start Delay [ms] | Duration [ms] | Ramp [$^\circ$C/s] | Target Temp [$^\circ$C] | Wait for Completion | Wait Target       | Logic     |
| ------- | ------------ | ------------------ | ---------------- | ------------- | ------------------ | ----------------------- | ------------------- | ----------------- | --------- |
| Stage 1 | Heat         | –                  | 0                | 30000         | $5$                | $90$                    | No                  | –                 | –         |
| Stage 2 | Heat         | –                  | 0                | 15000         | $8$                | $150$                   | No                  | –                 | –         |
| Stage 3 | Heat         | Wait for Touchdown | 0                | 10000         | $15$               | $220$                   | No                  | –                 | –         |
| Stage 4 | Heat         | Wait for Touchdown | 0                | 60000         | $20$               | $300$                   | Yes                 | Apply place force | PRE_EXEC  |
| Stage 5 | Cooling      | –                  | 0                | 30000         | $10$               | $80$                    | Yes                 | –                 | SKIP_EXEC |

### tool-tip (IN our case this is not used)

| Stage   | Segment Type | Start Trigger           | Start Delay [ms] | Duration [ms] | Ramp [$^\circ$C/s] | Target Temp [$^\circ$C] | Wait for Completion | Wait Target             | Logic       |
|---------|---------------|--------------------------|-------------------|----------------|--------------------|--------------------------|----------------------|--------------------------|--------------|
| Stage 1 | Heat          | –                        | 0                 | 30000          | $5$                | $50$                     | No                   | –                        | –            |
| Stage 2 | Heat          | –                        | 0                 | 15000          | $8$                | $120$                    | No                   | –                        | –            |
| Stage 3 | Heat          | Wait for Touchdown       | 0                 | 10000          | $10$               | $180$                    | No                   | –                        | –            |
| Stage 4 | Heat          | –                        | 0                 | 60000          | $8$                | $240$                    | Yes                  | Apply place force        | PRE_EXEC     |
| Stage 5 | Cooling       | –                        | 0                 | 30000          | $-5$               | $100$                    | Yes                  | –                        | SKIP_EXEC    |

Only Thermal Profile for Substrate Provided:
![[Acceronix thermal profile.png]]
## Intermediate Paper Feedback
- title too long try fitting 2 lines.
- too concerned providing numbers, provide more motivation, interpretation, explain how to do things and why you are doing these like that.
- structure of report: 1. Theory, theoretical model, 2. modeling and simulation. Comparison between theory and simulation. Validation of the simulated model vs the design on paper (expectations from the theory). 3. measurements. comparison between simulated models and the measurement results. explain differences.
- ![[BEP-SiP_Integration_of_Large_Scale_DAC_Arrays/attachments/1.png|200]]
- add footnote on first page, with the context of this paper: BEP project, from to, in which group, supervised by, add all relevant details for the context of the paper.
- maybe dont use the standard bep paper structure, improve to capture specifics of the project.
- write in present simple tense, facts are written in present simple tense, avoid future tense.
- introduction should communicate what has been done and why, right now we are missing the why part, missing the motivation. should better connect the 2 parts of the introduction. EXPLAIN WHAT IS THE PROBLEM dont just jump into numbers. QUANTIFY the problem and tell us how this research solves it. And then put the numbers in the (context of state of the art). Show us how these numbers compare to what the others report in literature.
- ![[BEP-SiP_Integration_of_Large_Scale_DAC_Arrays/attachments/2.png|200]]
- MISSING CURRENTLY: Explicit problem definition, Research question and goals of the project, Research approach: what are you going to do in order to reliably reach the goals and answer the research questions, Literature review that connect to the problem definition and the goals of the BEP. Alternative state-of-the-art approaches and examples.
- first refer to the figures in the paper and then only add show them visually.
- Introduce all variables of the equations before using them.
- If results provided, provide interpretation
- "made in simulation is not formulated in a good style" rewrite: modeled and simulated perhaps.
- When writing, think about next student, what can next student use from the report, how can you help the next student have an easier bep.
- Very important to have measurements and concrete deliverables.
- dont use term: continuity.
- what test is used to validate planarity? if not then dont mention.
- where do these opens and shorts occur?
- the flow is used to design... dont used "mapped".
- dont mentioned aluminium or copper wire we use gold usually.
- dont use "a few" use for example "GHz range".
- START CITING AT [1]
- ![[BEP-SiP_Integration_of_Large_Scale_DAC_Arrays/attachments/3.png|200]] why is this relevant?
- ![[BEP-SiP_Integration_of_Large_Scale_DAC_Arrays/attachments/4.png|200]]
- ![[BEP-SiP_Integration_of_Large_Scale_DAC_Arrays/attachments/5.png|200]]
- dont remention things you mention in the table for example.
- dont write what you dont know for sure.
- "coupon is not the right word".
- do not reference diamensions or somehting without providing reference.
- zoom to relevant structures (USE LATEXT SVG PDF).
- Sideview diagram
- ![[BEP-SiP_Integration_of_Large_Scale_DAC_Arrays/attachments/6.png|200]]
- ![[7.png|200]]
- dont use parameter "matrix"
- ![[8.png|200]]
- clear models
- export graphs to matlab and generate better figures.
- not conforting comparing/evaluating
- not wafers, substrates/samples.
- through and short is the same.
- ![[9.png|200]]
- ![[elaborate dont randomly reference.png|200]]


## Actual Data
### deembedding gold bump
$Z(f)=Z_{0}\frac{1+S_{11}(f)}{1-S_{11}(f)}$

$Z_{\rm de\!-\!emb}(f)=Z_{\rm OC}(f)\frac{Z_{m}(f)-Z_{\rm SC}(f)}{Z_{\rm OC}(f)-Z_{m}(f)}$

$Z_{3b}(f)=Z_{\rm de\!-\!emb}(f)-Z_{\rm die}(f)$

$Z_{b}(f)=\frac{2}{3}Z_{3b}(f)$

$S_{11}(f)=\frac{Z(f)-Z_{0}}{Z(f)+Z_{0}}$

$Z_{m}$ represents the full system of the: die flip chipped with gold bumps onto the interposer in this case relevant onto the GSG line ends where there were gold bumps. So it includes: die + 3 bumps + 3 lines (GSG). With de-embedding we moved the reference plane removing the line and leaving only die + 3 bumps and then we obtained just the bump. 
### rlcg of line
$\omega=2\pi f$

$Z_{\mathrm{in,op}}=Z_0\frac{1+S_{11}^{\mathrm{op}}}{1-S_{11}^{\mathrm{op}}}$

$Z_{\mathrm{in,sh}}=Z_0\frac{1+S_{11}^{\mathrm{sh}}}{1-S_{11}^{\mathrm{sh}}}$

$Z_c=\sqrt{Z_{\mathrm{in,op}}Z_{\mathrm{in,sh}}}$

$\gamma\,l=\operatorname{atanh}\left(\frac{Z_{\mathrm{in,sh}}}{Z_c}\right)$

$\gamma=\frac{\gamma\,l}{l}$

$\alpha=\Re\{\gamma\}$

$\beta=\Im\{\gamma\}$

$R_{\text{per m}}=2\alpha\Re\{Z_c\}$

$G_{\text{per m}}=\frac{2\alpha}{\Re\{Z_c\}}$

$L_{\text{per m}}=\Re\{Z_c\}\frac{\beta}{\omega}$

$C_{\text{per m}}=\frac{\beta}{\omega\Re\{Z_c\}}$

$R=R_{\text{per m}}\times10^{-6}$

$G=G_{\text{per m}}\times10^{-6}$

$L=L_{\text{per m}}\times10^{-6}$

$C=C_{\text{per m}}\times10^{-6}$

$\text{scale}=10^{-6}$
### rlc of bump
$Z(f)=Z_0\:\dfrac{1+S_{11}(f)}{1-S_{11}(f)}$
$R(f)=\Re\{Z(f)\}$
$L_{\rm eq}(f)=\dfrac{\Im\{Z(f)\}}{\omega}$
$\omega=2\pi f$
$C_{\rm eq}(f)=-\dfrac{1}{\omega\,\Im\{Z(f)\}}$
### Other calculations
$Z_{0}=50 \Omega$
GSG line params: $l=1.15mm$, $w_{g}=153 \mu m$, $w_{s}=69 \mu m$
$R_{DC_{line_{G}}}=2.5 \Omega$

$L = 1.15\times10^{-3}\ \text{m}$  
$W = 153\times10^{-6}\ \text{m}$  
$t = 150\times10^{-9}\ \text{m}$  
$R_{\text{DC}_{line_{G}}} = 2.5\ \Omega$

$A = W \cdot t = (153\times10^{-6}) \cdot (150\times10^{-9}) = 2.295\times10^{-11}\ \text{m}^2$

$\rho = R_{\text{DC}} \cdot \frac{A}{L}$  
$\rho = 2.5 \cdot \frac{2.295\times10^{-11}}{1.15\times10^{-3}} = 4.989\times10^{-8}\ \Omega\cdot\text{m}$

$R_{\text{sheet}} = \frac{\rho}{t}$  
$R_{\text{sheet}} = \frac{4.989\times10^{-8}}{150\times10^{-9}} = 0.3326\ \Omega/\square$

$\rho = 4.99\times10^{-8}\ \Omega\cdot\text{m}$  
$R_{\text{sheet}} = 0.333\ \Omega/\square$
