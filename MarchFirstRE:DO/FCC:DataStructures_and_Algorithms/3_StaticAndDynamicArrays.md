### Static and Dynamic Arrays

array is a fundamental building block for every dataStructure

- Discussion and examples about Arrays
  - What is an Array?
  - When and where is an array used?
  - Complexity
  - Static array usage example
- Dynamic Array implementation details
- Code implementation

#### discussion and examples

##### what is a static array?

A static array is a fixed length container contaioning n elements indecable from the range [0, n-1].

Q: what is meant by being `indexable`?
A: This means that each slot/index in the array can be referenced with a number, that there are no holes in your data. all addresses are contiguous.

##### when and where is a static array used?

1. storing and accessing sequential daya
2. Temporarily storing objects
3. used by io routines as buffers
4. lookup tables and inverse lookup tables
5. can be used to return multiple values from a function
6. used in dynamic programming to cahce answers to subproblems.
