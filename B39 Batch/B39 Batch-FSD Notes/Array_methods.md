## map
 
1.  It always returns copy of array
2.  It always inputArr.length === outputArr.length
3.  Transform data type
 
## filter
 
1.  It always returns copy of array
2.  It always inputArr.length >= outputArr.length
3.  input data type === output data type
 
## dot chaining (pattern)
 
1. Dot chaining can continue until the array methods returns new array
 
## Declarative vs Imperative
 
1. Declarative - What do? - map, filter
2. Imperative - How do? - for
 
## reduce
 
1. Array -> any data type
 
`[1, 7, 3, 10, 5]`
Initial Value -> 0
 
| acc | curr | result (acc + curr) |
| --- | ---- | ------------------- |
| 0   | 1    | 1                   |
| 1   | 7    | 8                   |
| 8   | 3    | 11                  |
| 11  | 10   | 21                  |
| 21  | 5    | 26                  |
 
Final result
`26`
 
No initial value
accumulator -> first element
current -> second element
 
| acc | curr | result (acc + curr) |
| --- | ---- | ------------------- |
| 1   | 7    | 8                   |
| 8   | 3    | 11                  |
| 11  | 10   | 21                  |
| 21  | 5    | 26                  |
 
Final result
`26`
 


## map
 
1.  It always returns copy of array
2.  It always inputArr.length === outputArr.length
3.  Transform data type
 
## filter
 
1.  It always returns copy of array
2.  It always inputArr.length >= outputArr.length
3.  input data type === output data type
 
## dot chaining (pattern)
 
1. Dot chaining can continue until the array methods returns new array
 
## Declarative vs Imperative
 
1. Declarative - What do? - map, filter
2. Imperative - How do? - for