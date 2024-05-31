# Module A: Languages and Automata, Property Checking
## Week 1: A.1 and A.2
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
conversions between regular expressions, DFA, NFA, NFA-$\epsilon$
conversion between expressions and NFA-$\epsilon$, NFA is subset of NFA-$\epsilon$ and DFA is subset of NFA.
![[nfa-e to expression.png|300]]![[nfa-e to expression 2.png|300]]
![[nfa-e to expression 3.png|300]]![[nfa-e to expression final.png|300]]
basically repeat until only initial and final state remain
![[nfa-e to nfa.png|300]]![[nfa to dfa.png|300]]
![[nfa-e to nfa big example.png|300]]![[nfa to dfa-1.png|300]]




## Expressiveness A.2.3
[What is the Pumping Lemma - YouTube](https://www.youtube.com/watch?v=qtnNyUlO6vU)
[Nonregular languages: How to use the Pumping Lemma - YouTube](https://www.youtube.com/watch?v=Ph7Z9YttM0Q)
[Pumping lemma for regular languages - Wikipedia](https://en.wikipedia.org/wiki/Pumping_lemma_for_regular_languages)
[What Is the Pigeonhole Principle? - YouTube](https://www.youtube.com/watch?v=B2A2pGrDG8I)
any complete DFA $A$ can be complemented to $\overline{A}$ by **swapping final and non-final states**
$L(\overline{A})=\overline{L(A)}$
![[example of complementing incomplete DFA.png|300]]

infinite many options is impossible in regular languages.
**pumping lemma:** some section of a language can be repeated still keeping the language regular.
string in language can be "pumped" repeated if they are at least as long as pumping length p.
for example:![[example of repetion that shows pumping.png|300]]![[pumping the repeated words still keeps string in the language.png|pumping the repeated words still keeps string in the language|300]]
- so we can split strings into parts before being pumped, being pumped and part that takes us to final state.
![[pumping lemma 1.png|100]]![[pumping lemma 3.png|100]]![[pumping lemma 3-1.png|100]]![[pumping lemma 4.png|100]]
y can be pumped any number of times, y must be bigger than 0 (not $\epsilon$), cant pump words bigger than p

![[pumping lemma definition.png|300]]![[regular language pumping lemma.png|300]]

**pigeon hole principle:** if $n$ objects are put in $k$ boxes with $k<n$, then at least one box contains multiple objects
![[pumping lemma example contradictiction.png|300]]
![[non-regular pumping lemma.png|300]]![[pifeonhole principle example.png|300]]
![[exercise of proving lemmas.png|300]]
## Week 2: A.3 and A.4
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
## $\omega$-Regular Languages A4.1
