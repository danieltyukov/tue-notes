# Getting Started Information
## Contacts
**Primary:**
[Vojkan Vidojkovic](https://www.tue.nl/en/research/researchers/vojkan-vidojkovic) (v.vidojkovic@tue.nl)
[Marco Fattori](https://www.tue.nl/en/research/researchers/marco-fattori) (m.fattori@tue.nl)
[Georgi Radulov](https://www.tue.nl/en/research/researchers/georgi-radulov) (g.radulov@tue.nl)
[Timo Matray](https://www.tue.nl/en/research/researchers/timo-matray) (t.m.matray@tue.nl)
**Secondary:**
[Niek Kesteloo](https://www.tue.nl/en/research/researchers/niek-kesteloo) (n.kesteloo@tue.nl)
[Issac Wang](https://www.tue.nl/en/research/researchers/issac-wang) (w.wang5@tue.nl)
## Initial Literature Review
1. At this link you find a nice overview of all the major interconnection techniques available to connect electrically dies and substrates. Remember you will go for bumps (thermal compression or ultrasonic bonding) + flip chip. [https://www.nextpcb.com/blog/wire-bonding](https://www.nextpcb.com/blog/wire-bonding "https://www.nextpcb.com/blog/wire-bonding")
2. How to make gold bumps? Check this .pdf file related to our machine. [https://www.tpt.de/wp-content/uploads/00_Media/99_Elemente_und_Platzhalter/Anleitungen/TPT-Application-Bumps-NEW-EN.pdf](https://www.tpt.de/wp-content/uploads/00_Media/99_Elemente_und_Platzhalter/Anleitungen/TPT-Application-Bumps-NEW-EN.pdf "https://www.tpt.de/wp-content/uploads/00_Media/99_Elemente_und_Platzhalter/Anleitungen/TPT-Application-Bumps-NEW-EN.pdf") and relative video [https://www.youtube.com/watch?v=0-UblD-Tv1w](https://www.youtube.com/watch?v=0-UblD-Tv1w "https://www.youtube.com/watch?v=0-UblD-Tv1w")
3. Here a recent relevant paper about an application of the flip chip approach [https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6848323A](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6848323A "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6848323A")
4. tutorial on the flip chip process step by step [https://www.integra-tech.com/hubfs/INTEGRA%20Flip-chip-Tutorial-video-042021.pdf](https://www.integra-tech.com/hubfs/INTEGRA%20Flip-chip-Tutorial-video-042021.pdf "https://www.integra-tech.com/hubfs/INTEGRA%20Flip-chip-Tutorial-video-042021.pdf")
5. A slide deck over flip chip processes for mmWave applications [https://ewh.ieee.org/r8/norway/ap-mtt/files/DML_Norwegen_2008_Handout.pdf](https://ewh.ieee.org/r8/norway/ap-mtt/files/DML_Norwegen_2008_Handout.pdf "https://ewh.ieee.org/r8/norway/ap-mtt/files/DML_Norwegen_2008_Handout.pdf")
6. Finally some info about interposers [https://anysilicon.com/semipedia/interposer/](https://anysilicon.com/semipedia/interposer/ "https://anysilicon.com/semipedia/interposer/")
## Prior Research Done in Project
**Topic:** Development and Characterization of Thermal Compression Flip-Chip Bonding Process.
The goal was interposer design & production, bump placement, die placement, testing. **But only interposer design was achieved and bump placement on interposer.**

![[chip building blocks.png|400]]
![[Chip on PCB design.png|400]]
![[SiIP PKG.png|400]]
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
>[Wet Etched Silicon Interposer for the Connection of CMOS ICs and Optoelectronic Dies](https://pure.tue.nl/ws/portalfiles/portal/19976020/wet.pdf)
>**Wet Etching**: Involves immersing the material in a liquid chemical etchant that dissolves the exposed areas.
>**Dry Etching**: Employs gases or plasmas to etch the material, offering greater precision and control.
>[PVD vs CVD: Mastering Advanced Thin Film Deposition Techniques](https://www.wevolver.com/article/pvd-vs-cvd)

### Fabrication Summary
>[!NOTE] **1. Interposer Design & Production**
> - **Glass interposer** is used as the substrate.
> - **Metallization process**:
>   - **Titanium adhesion layer (50 nm)** is first deposited to improve bonding between the glass and the conductive metal.
>   - **Conductive metal layer (gold)** is deposited on top of titanium.
>   - **Two deposition methods tested**:
>     - **Sputtering** – Higher resistance, less consistent bump placement.
>     - **Evaporation** – **Preferred** method due to lower resistance and more reliable bump placement.

---

>[!NOTE] **2. Bump Placement**
> - **Gold wire bumps** are formed for electrical connections.
> - **Wire sizes tested**:
>   - **25 µm wire**: Most reliable, but requires a **pad pitch > 90 µm**.
>   - **17 µm wire**: Good quality for small gold surfaces, but unreliable on large surfaces due to clogging.
> - **Placement method**:
>   - Alignment is improved by using a **cursor as a reference**.

---

>[!NOTE] **3. Die Placement**
> - **Key optimization parameters**:
>   - **Heat profile**, **force**, and **duration** must be tuned for a strong bond.
>   - **Weight distribution** is critical to ensure proper metal-to-metal contact.
> - **Challenges**:
>   - Initial attempts were **semi-successful** due to difficulties in **heat profile settings**.

---

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
