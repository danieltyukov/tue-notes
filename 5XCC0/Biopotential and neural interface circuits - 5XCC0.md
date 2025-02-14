# Schedule
![[5XCC0/attachments/schedule.png]]
# Introduction to biopotential and neural interfaces & other healthcare applications
![[biopotential interface.png|300]]![[electrode tissue interface (eti).png|300]]

>[!NOTE] Electrode types
>**Gel:** galvanic connection: lowest and reliable impedance -> skin prep.
>**Dry:** higher less reliable impedance -> no skin prep
>**Capacitive:** galvanic isolated electrode (capacitive coupling): highest impedance but best comfort.

**Measurement challenges:** small signal amplitudes, large ETI impedances, large disturbances, close to DC information needed

**Dealing with small signal:** high gain required for amplification, since the signal of interest is usually ($\mu V\text{ or }mV$). But **filters and ADCs** most efficient when signals large ($100's mV\text{ or V level}$). We need a trade-off:
- Minimum signal amplitude should be detectable by the system.
- Maximum signal, interference, DC, etc., should not saturate the system.

**PAGE 20** health applications
until: **PAGE 24** low power system design

$v_{cm = \frac{1}{2}(v_{1}+v_{2})}\text{ and }v_{diff}=v_{1}-v_{2}$
