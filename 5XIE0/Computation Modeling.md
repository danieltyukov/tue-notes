# Module A: Languages and Automata, Property Checking
## Week 1: A.1 & A.2
## Formal Languages A.1
[Kleene star - Wikipedia](https://en.wikipedia.org/wiki/Kleene_star)
precise means of specifying patterns/behaviors
$\sum=\{0,1,2,3,4,5,6,7,8,9,+.-,E\}\text{ if }L_{2}=<[+/-]\text{number}[\text{E number}]>\text{ in [] optional, are valid: }+481,-42,17E9,\text{ not valid: }1.7E10$
$\epsilon \text{ empty word}$
$+i:[rule]:1\text{ accumulation/union of 1 based on rule }$
$\sigma\to \text{words or strings from a language}$
**example:**
$\sum=\{0,1,2,3,4,5,6,7,8,9\}$ $L_{3}$ is the language of all numbers in which every 0 is eventually followed by a 1
$\left\{ \sigma \in \sum^*|(\forall i \in \mathbb{N}:\sigma(i)=0\implies(\exists j:j \in \mathbb{N} \wedge j>i:\sigma(j)=1))  \right\}$
$1201,1400315\text{ are all part of }L_{3}\text{ but }3210\text{ is not}$

$\text{where }\sum^*\text{ all finite words over }\sum$
$|\text{ must satisfy a set of conditions}$
$\sigma \text{ language}$
$\forall\text{ for all}\text{ and } \exists \text{ exists}$
$\sigma(i)=0\text{ string sigma on position i should be equal 0}$
![[set of words over alphabet example.png|400]]
## Regular Languages A.2.1
class of language specified by regular expressions
![[operations on languages.png|300]]![[regular expressions.png|300]]
powers: repetition where $L^0={\epsilon}\text{ empty word for purpose so: }L^0 \cdot L^1=L^1$.
concatenation: put words together.
$L^*\text{ zero or more repetitions }L^+\text{ 1 or more repetitions}$
$+i:\text{ union of all i}$
$\backslash \{\}\text{ not including}$
$(V^*)^*=V^*$ unary operator
$V^+=V^* \cdot V$
![[kleene star operator application.png|300]]

operations on languages: regular expressions define languages.
**concatenation**: combining strings of two languages to form a language.
**interaction**: find common elements between languages.

**empty word, you can perform concatenations on which would result in the other. cant concatenate empty language like multiplying by zero.**

![[regular expression example.png|400]]
$\alpha \alpha^*\text{ because we need at least one string}$
$\epsilon \text{ implying optional can be empty word or else}$
$\text{concatenation not commutative: }a \cdot b=ab\neq ba=b \cdot a$
$(\beta \alpha \alpha^*(\emptyset+E\alpha \alpha^*))$ is not the same since $\emptyset+\rho=\rho \text{ empty set not words}$
$a^*=(a^*)^*$
$\epsilon\to \text{empty word}$
![[example of regular expressions.png|400]]
![[language to regular expression conversion.png|400]]
((as long as repetition of $\alpha$ ends with 1 (concatenated)) that can be repeated) and that ends with any repetition of $\beta$ (concatenated) ensuring does not end with 0.
![[evaluation of a complex regular expression.png|400]]

**regular expression cant keep track of more than 1 count.**
for counting amount of amount of 1s making sure its even: $(0+10^*1)^*$.
## Finite Automata A.2.2
[Regular Languages: Deterministic Finite Automaton (DFA)](https://www.youtube.com/watch?v=PK3wL7DXuuw)
[Regular Languages: Nondeterministic Finite Automaton (NFA)](https://www.youtube.com/watch?v=W8Uu0inPmU8)
![[nfa.png|400]]
word/string $\sigma \in\sum^*$ is element of language $L(A)$ if A from init to final state labeled with that word.
![[finite automata example.png|400]]
left: DFA so is NFA, right: none
![[DFA.png|400]]
![[nfa vs dfa.png|400]]
![[completeness of nfa.png|400]]
dfa,nfa,nfa-$\epsilon$ all define precisely the class of regular languages.
### examples
![[basic finite example.png|300]]![[nfa vs dfa good exmaple.png|300]]
![[autometa exmaple 1.png|300]]![[autometa exmaple 2.png|300]]
a3 in picture above look at it as if it reuses a*
and thats why the image on the right shows that repetition logic
## Conversions Between Representations of Regular Languages A.2.4
[A Quick Non-Deterministic to Deterministic Finite Automata Conversion - YouTube](https://www.youtube.com/watch?v=N_N9Ky6tN_s)
Best conversion example

[Deterministic Finite Automata (Example 3) - YouTube](https://www.youtube.com/watch?v=_2cKtLkdwnc)
**revert a state machine DFA -> flip final states to none final and vice versa**
![[nfa and dfa.png|300]]

conversions between regular expressions, DFA, NFA, NFA-$\epsilon$
conversion between expressions and NFA-$\epsilon$, NFA is subset of NFA-$\epsilon$ and DFA is subset of NFA.
![[nfa-e to expression.png|300]]![[nfa-e to expression 2.png|300]]
![[nfa-e to expression 3.png|300]]![[nfa-e to expression final.png|300]]
![[full steps of conversion to a regular language.png|300]]
basically repeat until only initial and final state remain
![[nfa-e to nfa.png|300]]![[nfa to dfa.png|300]]
![[nfa-e to nfa big example.png|300]]![[nfa to dfa-1.png|300]]
## Expressiveness A.2.3
[What is the Pumping Lemma - YouTube](https://www.youtube.com/watch?v=qtnNyUlO6vU)
[Nonregular languages: How to use the Pumping Lemma - YouTube](https://www.youtube.com/watch?v=Ph7Z9YttM0Q)
[Pumping lemma for regular languages - Wikipedia](https://en.wikipedia.org/wiki/Pumping_lemma_for_regular_languages)
[What Is the Pigeonhole Principle? - YouTube](https://www.youtube.com/watch?v=B2A2pGrDG8I)

![[closure of regular language.png|500]]
any complete DFA $A$ can be complemented to $\overline{A}$ by **swapping final and non-final states**
$L(\overline{A})=\overline{L(A)}$
![[example of complementing incomplete DFA.png|300]]

**Best example for pumping lemma:** [Pumping Lemma (For Regular Languages) | Example 1 - YouTube](https://www.youtube.com/watch?v=Ty9tpikilAo)

infinite many options is impossible in regular languages.
**pumping lemma:** some section of a language can be repeated still keeping the language regular. (pumping lemma can prove is language is NOT REGULAR)
string in language can be "pumped" repeated if they are at least as long as pumping length p.
for example:![[example of repetion that shows pumping.png|300]]![[pumping the repeated words still keeps string in the language.png|pumping the repeated words still keeps string in the language|300]]
- so we can split strings into parts before being pumped, being pumped and part that takes us to final state.
![[pumping lemma 1.png|100]]![[pumping lemma 3.png|100]]![[pumping lemma 3-1.png|100]]![[pumping lemma 4.png|100]]
y can be pumped any number of times, y must be bigger than 0 (not $\epsilon$), cant pump words bigger than p

![[pumping lemma definition.png|300]]![[regular language pumping lemma.png|300]]

**pigeon hole principle:** if $n$ objects are put in $k$ boxes with $k<n$, then at least one box contains multiple objects
![[pumping lemma example contradictiction.png|300]]
![[non-regular pumping lemma.png|300]]![[pifeonhole principle example.png|300]]
So, if a language contains infinitely many words that need to be distinguished, this cannot be done with finitely many states. In such a case, using the pigeonhole principle, no finite automaton recognizing the language exists. So the language is not regular.
![[exercise of proving lemmas.png|300]]![[pifeonhole example.png|300]]
## Week 2: A.3 & A.4
## Property Checking A.3
![[property checking.png|400]]
computing language interaction product automation: think of matrix dot product.
$L(A \times B)=L(A) \cap L(B)$
![[product automation.png|400]]
![[property checking regular properties.png|400]]
complement -> invert normal states to final states and final states to normal states.
use logic to the determine the fact that final system is empty language, the one below is not empty since it has final states so does not satisfy $S=P$
![[example of a a full property checking system.png]]
must not have final states...
![[example of property checking.png|300]]![[final observation after the final product.png|300]]
## $\omega$-Regular Languages A.4.1
[Omega-regular language - Wikipedia](https://en.wikipedia.org/wiki/Omega-regular_language)
[Omega language - Wikipedia](https://en.wikipedia.org/wiki/Omega_language)
- a set of **infinite** words over some alphabet $\Sigma$ $L \subseteq \Sigma^\omega$.
- one infinite word abstracts infinitely many finite behaviors.
- useful when behavior is unbounded.
![[operations of omega languages.png|400]]
![[omega languages expressions.png|400]]
$\omega$-regular expressions pattern: $(+i:0\leq i<n:a_{i}\cdot \beta_{i}^\omega)$
legend: $a_{i},\beta_{i}$ regular expressions
![[example of omega languages.png|400]]
the * is all finite repetitions, while $\omega$ infinite repetitions, they are complementary.
![[iterations undersatding.png|200]]
## Büchi Automata A.4.2
[Büchi automaton - Wikipedia](https://en.wikipedia.org/wiki/B%C3%BCchi_automaton)
- indefinite automata...
- **Büchi** automaton is an **NFA** but with **different acceptance** conditions
- $\omega$-regular expressions and **NB(Buchi)A** both define precisely the class of $\omega$-regular languages
![[nfa-b.png|300]]![[nba.png|300]]
![[example of infinite automata.png|300]]![[buchi automata example.png|300]]
infinity happens in finite states...
complete means all symbols used...
![[buch auomata another example.png|300]]![[final state changed showcase.png|300]]
ending on a different final state makes a difference as shown above...
## Week 3: A.4
## Expressiveness A.4.3 & A.4.4
**DBA:** deterministic Buchi Automaton.
an $\omega$-language is **deterministically Büchi‐recognizable** if and only if there is a **DBA** accepting the language.
![[nbda dba complements.png|400]]
$L^\omega(D)\neq L^\omega(C)$ since $L^\omega(C)$ is not deterministically Büchi-recognizable.
**expressiveness of DBA:**
- **DBA** are strictly **less expressive than NBA**
- deterministically Büchi-recognizable languages are **not closed under development**
![[expressiveness of DBA.png|300]]![[example of expressiveness DBA.png|300]]
$L^\omega(D)=lim(L(D))$
The above proves that **DBA** can only exists if there is limit of a regular language...

class of $\omega$-regular languages is **closed under complement** and hence under intersection $(L_{0}\cap L_{1}=\overline{\overline{L_{0}} \cup \overline{L_{1}}})$

non-regular $\omega$-languages are possible
![[non regular omega language example.png|300]]


![[automation limits.png|300]]![[automata and limits-1.png|300]]
![[automata and limits that are equal.png|300]]
we can see that if languages are each others complements in infinite context **IT DOESNT** imply they are in finite context

!!! unbounded chain of finite words converges to an infinity allowing to say that $\omega=lim$, **this is always true for deterministic but not always true for non-deterministic automata**.
## Conversions A.4.5
similar to finite word language conversions...
split into 3 parts, make sure they are epsilon included, and then start elimination.
![[expressions to nba to nba epsilon.png|400]]
![[from nba to expressions.png|400]]
![[nba-e to expression 1.png|300]]![[nba-e to expression 2.png|300]]

![[nba to expression 1.png|200]]![[nba to expression 2.png|200]]![[nba to expression 3.png|200]]
![[nba to expression 4.png|200]]![[nba to expression 5.png|200]]
$a_{11}^\omega+a_{12}a_{22}^\omega$ pattern
## Property Checking A.4.7
- similar to finite language property checking...
- emptiness of a regular language can be checked by checking  for the reachability of a final state in an automaton.
- **But** emptiness of an ω‐regular language can be checked by a  nested depth‐first search on the automaton checking for the reachability of a final state and a cycle back to that final state.
- but complement of ω‐regular languages is not practical.
![[property checking omega regular properties.png|400]]
![[gnba example.png|400]]![[gnba-1.png|200]]
a GNBA is an NBA but with multiple sets of final states...
**GNBA vs NBA:**
![[nba-1.png|300]]![[gnba.png|300]]
![[generalized nba.png|300]]![[henerized nba conversion.png|300]]

empty language means that there is at least one state which is not visited infinite amount of times...
![[property checking-1.png|200]]![[property checking-2.png|200]]![[property checking-3.png|200]]
## Week 4: A.5
## Logic and Property Checking A.5.1 & A.5.3
![[propositional logic.png|400]]
![[evaluations and satisfaction.png|400]]
**propositions over an alphabet of symbols $\Sigma$**
- atomic propositions Π are sets of symbols from Σ characterizing those symbols that satisfy the proposition
- $s \models p \text{ iff } s \in p \text{ }(s \in \Sigma,p \in \Pi)$
![[arbiter example.png]]

![[mealy to dba.png|300]]![[mealy to dba-1.png|300]]
![[Checking LTL.png|400]]
# Module B: Markov Modeling, Discrete-Event Simulation
## Week 4: B.1 & B.2 & B.3
## Discrete-time Stochastic Processes B.1
- $X_{n}(n=0,1,\dots)$ **random state** of a system at **time** $n$
- $S=\{1,2,\dots,N\}$ finite set of **states**, state-space
- $P(X_{n}=i)=\pi^{(n)}_{i}\text{ which is a row vector}$ probability that system in state $i$ at time $n$ where $i \in S$ **realization** of $X_{n}$
- $\pi^{(n)}:S\to[0,1]$ **probability distribution** of $X_{n}$
![[probability distribution.png|400]]
- $r:S\to R$ **reward** and $r(X_{n})$ random variable denotes reward that is earned at time $n$
- $R=\{r(i)|i \in S\}$ set of possible realization of $r(X_{n})$
- $P(r(X_{n})=v)=\sum_{i \in S,r(i)=v}\pi_{i}^{(n)}$ probability reward $v$ earned at $n$
- $E(r(X_{n}))=\sum_{v \in R}vP(r(X_{n})=v)=\pi^{(n)} \cdot r^T$ **expected reward** earned at $n$ and $r$ is **row vector** also $\text{eg: }18 \cdot \frac{1}{37} \cdot 500+19 \cdot \frac{1}{37} \cdot -500$
sum of all values that can occur, of the value that occurs, times the probability that that value occurs. Expected value probability...
![[dice game example.png|400]]
## Markov Chains B.2
$|\text{ means given}$
![[markov chain summary.png|300]]![[transitonal probability.png|300]]
$\pi^{(m)}=\pi^{(n)}$ identically distributed
$P(X_{n}=i \mid X_{m}=j)=P(X_{n}=i)\text{ where }n\neq m\text{ and }i,j \in S$

$P(X_{n+1}=j\mid X_{n}=i,X_{n-1}=i_{n-1},\dots,X_{0}=i_{0})=P(X_{n+1}=j\mid X_{n}-i)=P_{ij}$ for all $n\geq 0$ and $i,j,i_{0},\dots i_{n-1} \in S$ -> (pairwise) **independent** iff

**markov chain is time homogeneous**

![[markov example.png|400]]
![[markov example-1.png|400]]
## Transient Analysis B.3
- **law of total probability:** $P(X_{m}=j)=\sum_{i \in S}P(X_{m}=j,X_{n}=i)=\sum_{i \in S}P(X_{m}=j \mid X_{n}=i)P(X_{n}=i)$
- $P(X_{n+1}=j)=\sum_{i \in S}P(X_{n+1}=j \mid X_{n}=i)P(X_{n}=i)$
- $\pi_{j}^{n+1}=\sum_{i \in S}\pi_{i}^{(n)}P_{ij}$
- So distribution vector: $\pi^{(n+1)}=\pi^{(n)}P\to \pi^{(n)}=\pi^{(0)}P^n$
![[gambler ruin transient analysis.png|400]]

**Transition Probability of Something Occurring:**
- **n-step transition probability from i to j:** $P_{ij}^n=P(X_{m+n}=j \mid X_{m}=i)$
- **sum of probabilities of paths:** $P_{ij}^n=\sum \{P(i,i_{1},\dots,i_{n-1},j)\mid i,i_{1},\dots i_{n-1},j \text{ is a path of length }n \}$
	- sum of probabilities of all paths from $i$ to $j$ of length $n$
	- **path** is a sequence of states
	- $n-1$ number of transitions made
![[gambler ruin example of transient probabilities.png|400]]
(row(i) 3 column(j) 4) = 0.667

![[example of probability distribution.png|400]]
![[n step probabilities and expected reward.png|400]]

## Week 5: B.4 & B.5 & B.6
## State Classification B.4
- $i\to j\text{ accesible iff }P_{ij}^n>0$
- $i\leftrightarrow j \text{ iff }i\to j\text{ and }j\to i$
$f_{ii}=\sum \{P(i,i_{1},\dots,i_{n-1},i) \mid i,i_{1},\dots i_{n-1},i \text{ is a path of length }n\geq 1\text{ s.t. }i_{k}\neq i(k=1,\dots,n-1)\}$
means start at $i$ and return to $i$

- **recurrent** iff $f_{ii}=1$ infinitely returns in one or more steps
- **transient** iff $f_{ii}<1$ eventually won't be visited
- both are **class properties** also could be **closed**
![[state movement.png|400]]![[periodicity.png|200]]

- **periodic** $d(i)>1$ if visited $n$ not visited $n+1$
- **aperiodic** $d(i)=1$ always visited from time $n+(N-1)^2-1$
- also class properties
- aperiodic class $C$ and all states $i,j \in C$ -> $P_{ij}^n>0\text{ for all }n\geq(N-1)^2+1$
![[aperiodic principle.png|300]]

**if recurrent state with a self loop then -> aperiodic otherwise periodic**

- **ergodic** recurrent & aperiodic
- **unichain** single recurrent & zero or more transient
![[markov chain types.png|400]]
![[periodic or non periodic.png|400]]
## Hitting Probabilities B.5
$f_{ij}=\sum \{P(i,i_{1},\dots,i_{n-1},j) \mid i,i_{1},\dots i_{n-1},j \text{is a path of length }n\geq 1 \text{ s.t. }i_{k}\neq i(k=1,\dots,n-1)\}$
- **hit probability** that **state** $j$ ever visited starting $i$
- **system of linear of equations as solution** $x_{i}=P_{ij}+\sum_{k \in S /j}P_{ik}x_{k}$
![[exampel of system of linear equations.png|400]]
![[hit ptobability over multiple steps.png|400]]

**probability-weighted average of cumulative rewards** $f_{ij}^r=\sum \{P(i,i_{1},\dots i_{n-1},j) \cdot(r(i)+r(i_{1})+\dots+r(i_{n-1})) \mid i,i_{1},\dots, i_{n-1},j \text{ is a path of length }n\geq 1\text{ s.t. }i_{k}\neq i(k=1,\dots,n-1) \}$
$\frac{f_{ij}^r}{f_{ij}}$ **expected cumulative reward** until **state** $j$ is hit starting from $i$

![[cumulative weighted probability.png|400]]

**set of states:** $H$
**probability to hit a set of states** $h_{iH}=\sum \{P(i,i_{1},\dots,i_{n}) \mid i,i_{1},\dots,i_{n} \text{ is a path of length } n\geq 0 \text{ s.t. }i \in H\text{ implies }n=0\text{ and }i \notin H \text{ implies } n\geq 1,i_{n} \in H \text{ and } i_{k} \notin H\text{ for all }k=1\dots n-1 \}$
$\frac{h^r_{iH}}{h_{iH}}$ is **expected cumulative reward** until **state set** $H$ is hit, starting from $i$

![[hitting a state vs hitting a set of states.png|400]]

![[probability of H.png|300]]![[reward probability H.png|300]]

![[gamblers ruin set of states markov.png|400]]
## Long-run Analysis B.6
$n\to \infty$
- **converge in distribution: ergodic unichain** $\lim_{ n \to \infty }\pi^{(n)}=\pi^{(\infty)}$
- $\lim_{ n \to \infty }E(r(X_{n}))=\lim_{ n \to \infty }\pi^{(n)} \cdot r^T=\pi^{(\infty)} \cdot r^T$
- **balance equation** $\pi=\pi \cdot P,\sum_{i \in S}\pi_{i}=1$ which have **stationary solution** which exist **iff** chain is **unichain**
- $\pi^{(\infty)}=\pi^{(0)} \cdot P^\infty \text{ where }P^\infty \text{ exists for every ergodic unichain where each row equals }\pi^{(\infty)}$
![[ergodic unichain infinity recurrent vs transient.png|300]]![[ergodic unichain example.png|300]]
- We can see that first 2 are transient and are zero in long run... 4 units in markov chain average reward...


- **non-ergodic unichain** those limits dont exist, still has a unique stationary solution: **cezaro limit**
- **cezaro limit:** $\pi^{(\propto)}=\lim_{ n \to \infty } \frac{1}{n} \sum^{n-1}_{k=0}\pi^{(k)}$ long-run expected fraction of **time** the chain spends in state $i$
- $\pi^{(\propto)}=\pi^{(0)} \cdot P^\propto \text{ where }P^\propto=\lim_{ n \to \infty } \frac{1}{n}\sum^{n-1}_{k=0}P^k$  long-run expected fraction of **time** the chains spends in state $j$, given that it started in $i$
- each row $P^\propto=\pi^{(\propto)}$
- $\pi^{(\propto)} \cdot r^T=\lim_{ n \to \infty }E\left( \frac{1}{n} \sum^{n-1}_{k=0} r(X_{k}) \right)$ long run expected average reward
![[non ergodic unichain example limit.png|400]]


![[overall long run analysis.png|400]]
![[5XIE0/attachments/summary.png|400]]
## Week 6: B.7
## Discrete-event Simulation B.7
[Discrete-event simulation - Wikipedia](https://en.wikipedia.org/wiki/Discrete-event_simulation)
### estimaiton theory
$Y_{n}\text{ where }n \in N$ identically distributed independent random variable.
$E(Y_{n})=\mu \text{ and }Var(Y_{n})=E((Y_{n}-\mu)^2)=\sigma^2$.

$\sigma=\sqrt{ E(r(X_{10})^2)-E(r(X_{10}))^2 }$ $r\text{ is reward}$

**goal:** estimate $\mu$ based on simulation sequence $y_{n}$ of length $M$.
**approach:** estimate $\mu$ by $\hat{\mu}=\frac{1}{M}\sum^{M-1}_{n=0}y_{n}$
![[strong law of large numbers.png|400]]
### errors
$\mid \mu-\hat{\mu}\mid$ **absolute estimation error**
$\frac{\mid \mu-\hat{\mu}\mid}{\mid \mu\mid}$ **relative estimation error**

**How big M(simulation sequence so acceptable error):**
![[central limit theorem.png|400]]
$\sigma$ standard deviation and point estimator $S_{M}$ are equivalent when $M\to \infty$
$\sigma=\sqrt{ \mu(1-\mu) }=\sqrt{ \frac{\sum(x_{i}-\mu)^2}{N} }$
![[confidece level.png|400]]
![[sochastic interval.png|400]]
**also called the confidence interval...**
$\mid \mu-\hat{\mu}\mid\leq \frac{cS_{M}}{\sqrt{ M }}$ success confidence bound
$\frac{\mid \mu-\hat{\mu}\mid}{\mid \mu\mid}\leq \frac{cS_{M}/\sqrt{ M }}{\hat{\mu}-cS_{M}/\sqrt{ M }}$ relative success confidence bound if doesn't contain 

### negative values
![[estimation error bounds.png|400]]
![[ethernet simultation to understand sochestic.png|400]]
### Transient Markov application
**markov chain application - transient properties:**
![[expected transient reward.png|400]]
![[application to markov chains transient properties.png|400]]
### long-run properties
![[how to setup long run properties for markov chain.png|400]]
**point estimation, interval estimation, generate estimation**

based on **strong law of large numbers**
![[point estimation.png|400]]
$E(L_{n})=\frac{1}{\pi^{(\propto)}_{i_{r}}}$ converges
$E(R_{n})=f_{i_{r}i_{r}}^r=\frac{\mu}{\pi_{i_{r}}^{(\propto)}}$ converges

based on **central limit theorem**
![[interval estimation.png|400]]
$Y_{n}=R_{n}-\mu L_{n}$
![[generate observations.png|400]]

### exercises
![[hitting probability.png|400]]
#  Module C: Dataflow, Max-Plus Linear Systems, Performance Analysis
[Module C Slides](https://es-courses.pages.tue.nl/5xie0/reader/module-c/)
## Week 6: C.1 & C.2 & C.3
## C.1 Timed Dataflow Models
**MULTI RATE DATAFLOW CHART OUTSIDE OF SCOPE (CAN BE DESCRIBED IN VECTOR) can be converted to single rate**
![[CONSUMPTION PRODUCTION MULTIPLE.png|200]]

- finite set of actors $A$
- firing durations $e:A\to\mathbb{R}_{\geq 0};$ (time units)
- finite set $C \subseteq A \times \mathbb{N} \times A$ of channels
- finite set $I$ of inputs with input dependencies $d_{I}:I\to A;$
- finite set $O$ of outputs with output dependencies $d_{O}:O\to A;$
![[dataflow ooperational view.png|400]]
![[dataflow exmaple.png|400]]
- BT actor models the transport of the top on the belt to the pick-and-place unit, where it is combined with a bottom.
- BB models its transport to the indexing table.
- initial token on the cycle ensures that the first object admitted is a top.
- initial token on the channel from Rot to PaP represents the bottom part that is initially placed in the system.
- dependency from PaP to Rot ensures that the indexing table does not rotate until the pick-and-place operation is complete.

![[grantt chart by hand.png|500]]
multi token production $n=2$:
![[n equal 2 grantt chart.png|500]]
Given the input sequence and the duration of the Sh actor, the decoder cannot decode symbols faster than 1 symbol per 4 time units. With two tokens on the channel from CE to DM, it operates at this maximum rate; with only one token, it does not. So the most recent channel-estimation information that DM can use is two symbols old.

- to have **synchronous** operation one after the other the actor should have a self referencing channel  dependency with a token.
- **hot to determine maximal operation:** squash the **synchronous** operation time units as close as possible and then determine the tokens required for that
- 2 units at A trigger I
![[2 units at A.png|400]]
- 4 units at A to trigger I
![[4 units at A.png|400]]

How to ensure order of operation:
![[order between 2 actors.png|200]]
F1 fires first in this case.

Reducing the number of processors:
![[before and after reducing the processors.png|400]]
## C.2 Schedules & Performance
schedule partial function: $\sigma:A \times \mathbb{N} \hookrightarrow \mathbb{R}$ that assigns starting times to the firings of actors of $A$, such that $\sigma(a,k)$ is the starting time of firing number $k$ of actor $a$.

schedule $\sigma$ is $valid$ for given input arrivals $a:I \times \mathbb{N} \hookrightarrow \mathbb{R}$ iff satisfies channel and input constraints:
![[constrants so that schedule is valid.png|500]]
![[schedule example.png|500]]

- **self-timed schedule: as soon as possible asap**
- **as late as possible alap**
- **complete** all actor firings assigned starting time
- **periodic** $\text{period }\mu \text{, if for all }a \in A,k>0\text{, such that }\sigma(a,k)=t\text{, then }\sigma(a,k-1)=t-\mu$
- **finite** if $\sigma(a,k)\text{ defined only finitely many }(a,k)$
- **live** if $\sigma(a,k)$ is defined for infinitely many $k$ for all actors $a \in A$
- example above: periodic: $\mu=3$

![[deadlock.png|400]]

**_Throughput_** intuitively refers to the amount of processing that a system can perform, on average, in the long run, per unit of time. It is relevant for indefinite operation. **_Makespan_**, in contrast, is a performance metric that can be associated with finite behaviors. It refers to the total amount of time that it takes to complete a job. Finally, **_latency_** is a metric that characterizes the time span between the start and the completion of the processing of individual elements.
![[throughput and makespan-1.png|300]]![[latency.png|300]]

**non periodic throughput example:**
![[grantt chart for throughput example.png|400]]
Actor C fires 2 times per 5 time units, so the throughput is $\frac{2}{5}$
## C.3 Max-plus Algebra
_time stamp_ os value from set $\mathbb{R} \cup \{ -\infty \}$ and set of time stamps: $\mathbb{T}=^{def} \mathbb{R} \cup \{ -\infty \}$

- compute time stamp: $x_{o}=x_{i}+d\text{ where }d=e(a)$
- assume self-timed firing of $a$ with 2 inputs: $x_{a}=max(x_{i_{1}},x_{i_{2}})$
- $x_{o}=x_{a}+d=max(x_{i_{1},x_{i_{2}}})+d=max(x_{i_{1}}+d,x_{i_{2}}+d)$

![[max plus algebra.png|500]]
- $\otimes\to \times$
- $\oplus\to +$
- $-\infty \in \mathbb{T}\to 0 \in \mathbb{R}$
- $0 \in \mathbb{T}\to 1 \in \mathbb{R}$

![[example of conveyor belt.png|400]] 
## Week 7: C.4 & C.5 & C.6 & C.7 & C.8
## C.4 Max-plus-linear Systems
**event sequence:** $s: \mathbb{I}\to \mathbb{T}\text{ where }\mathbb{I}=\{ 0,\dots,n-1 \}\text{ for a finite sequence of length }n\text{ and }\mathbb{I}=\mathbb{N}\text{ for infinite sequence}$
**note** event sequence does not require order: $s(k)\leq s(k+1)$

![[delayed event sequence.png|300]]![[maximum of event sequence.png|300]]
![[scaled event sequence.png|300]]![[zero and periodic event sequence.png|300]]

$\text{if }s\text{ infinite event sequence, then the throughput of }s\text{ is given by following limit: }\tau(s)=\lim_{ k \to \infty } \frac{k}{s(k)} \text{ and if periodic: } \frac{1}{\mu}$
![[max plus linear system definition.png|400]]
we operate always with index invariant systems since we have single rate dataflows...

![[additivity example.png|300]]![[homogeneity example.png|300]]

### superposition
- a linear system has the superposition property
- if a complex stimulus (input) can be described as the maximum (⊕, superposition) of two or more simpler stimuli, then
	- analyze the responses to the simpler stimuli separately
	- determine the superposition (max) of the separate responses
- **divide-and-conquer strategy**
	- typically among different inputs of the system

![[superposition example.png|300]]![[superposition example-1.png|300]]
## C.5 Impulse Response
- **impulse sequence:** is an event sequence $\delta: \mathbb{N}\to \mathbb{T}$ such that $\delta(0)=0$ and $\delta(k)=-\infty$ for $k>0$
- **impulse response:** of event system $S$ is the event sequence $h$ such that $\delta\to^Sh$ and multiple inputs and/or outputs $\epsilon,\dots,\epsilon,\delta,\epsilon,\dots,\epsilon,\to^Sh_{1},\dots,h_{m}$
- an impulse is the smallest part of an event sequence
- every event sequence is the maximum of scaled and delayed impulses
- linear and index-invariant event systems are completely characterized by their impulse response

![[impulse convolution.png|300]]![[impulse convolution-1.png|300]]
If $S$ is a max-plus-linear and index-invariant system with impulse response $h$, then for any input event sequence $i,i\to^s i \otimes h$

![[best convolution example.png|500]]
## C.6 Max-plus Linear Algebra
$v \in \mathbb{T}^n$
![[vector notations.png|300]]![[vectors.png|300]]
![[matrices.png|300]]![[matrix operations.png|300]]
![[normal vector.png|300]]![[linearity.png|300]]

![[example of matrix operations.png|500]]
## C.7 From Dataflow to Max-plus

## Week 8: C.9 & C.10 & C.11 & C.12
