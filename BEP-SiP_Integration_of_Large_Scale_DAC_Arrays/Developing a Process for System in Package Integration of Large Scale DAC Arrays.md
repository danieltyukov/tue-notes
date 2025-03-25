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
1. At this link you find a nice overview of all the major interconnection techniques available to connect electrically dies and substrates. Remember you will go for bumps (thermal compression or ultrasonic bonding) + flip chip. **Discusses bonding materials like gold/aluminium** [https://www.nextpcb.com/blog/wire-bonding](https://www.nextpcb.com/blog/wire-bonding "https://www.nextpcb.com/blog/wire-bonding")
2. How to make gold bumps? Check this .pdf file related to our machine. [https://www.tpt.de/wp-content/uploads/00_Media/99_Elemente_und_Platzhalter/Anleitungen/TPT-Application-Bumps-NEW-EN.pdf](https://www.tpt.de/wp-content/uploads/00_Media/99_Elemente_und_Platzhalter/Anleitungen/TPT-Application-Bumps-NEW-EN.pdf "https://www.tpt.de/wp-content/uploads/00_Media/99_Elemente_und_Platzhalter/Anleitungen/TPT-Application-Bumps-NEW-EN.pdf") and relative video [https://www.youtube.com/watch?v=0-UblD-Tv1w](https://www.youtube.com/watch?v=0-UblD-Tv1w "https://www.youtube.com/watch?v=0-UblD-Tv1w")
3. Here a recent relevant paper about an application of the flip chip approach [https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6848323A](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6848323A "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6848323A")
4. tutorial on the flip chip process step by step [https://www.integra-tech.com/hubfs/INTEGRA%20Flip-chip-Tutorial-video-042021.pdf](https://www.integra-tech.com/hubfs/INTEGRA%20Flip-chip-Tutorial-video-042021.pdf "https://www.integra-tech.com/hubfs/INTEGRA%20Flip-chip-Tutorial-video-042021.pdf")
5. A slide deck over flip chip processes for mmWave applications [https://ewh.ieee.org/r8/norway/ap-mtt/files/DML_Norwegen_2008_Handout.pdf](https://ewh.ieee.org/r8/norway/ap-mtt/files/DML_Norwegen_2008_Handout.pdf "https://ewh.ieee.org/r8/norway/ap-mtt/files/DML_Norwegen_2008_Handout.pdf")
6. Finally some info about interposers [https://anysilicon.com/semipedia/interposer/](https://anysilicon.com/semipedia/interposer/ "https://anysilicon.com/semipedia/interposer/")
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

![[flip chip interconnect mm-wave characteristics.png|300]]![[comparison small large bumps.png|300]]
![[measurement results on inut reflection.png|300]]![[parasitic substrate modes.png|300]]
[Interconnection signal property details](https://ewh.ieee.org/r8/norway/ap-mtt/files/DML_Norwegen_2008_Handout.pdf)
