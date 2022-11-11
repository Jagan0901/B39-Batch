let a= [2,3,4,5];
console.log(a[0], a[1], a[2], a[3]);

//Array from
const nums = "20304050";
const personmarks = Array.from(nums);
console.log(personmarks);

// Array push
const marks = [80,70,85,99,97];
marks.push(98,100);
const Totalmarks = console.log(marks);

console.log(Totalmarks);

// Array pop
// const 

// ARRAY MAP
// Conditions for map
// 1.It always return copy of array
// 2.It always inputArr.length===outputArr.length
// 3.Transform datatype
const num = [10,5,15];
const square = num.map((m) => m*m );
console.log(square);

const avengers = [
    "Hulk",
    "Iron man",
    "Black widow",
    "Captain America",
    "Spider man",
    "Thor",
];
const Character = avengers.map((n) => n.length);
console.log(Character);

//ARRAY FILTER
//Conditions for filter
// 1.It always returns copy of array
// 2.It always inputArr.length >= outputArr.length
// 3.input datatype === output datatype
const mark = [90,30,70,97,40];
const passedmarks = mark.filter((m) => m >= 40);
console.log(passedmarks);

const avengers1 = [
    "Hulk",
    "Iron man",
    "Black widow",
    "Captain America",
    "Spider man",
    "Thor",
];
const modifiedavengers1 = avengers1.filter((n)=> n.length> 10 );
console.log(modifiedavengers1);

const scores = [
    {
        markss:32,
        name: "Yvette Merritt" ,
    },
    {
        markss:57,
        name: "Lillian Ellis" , 
        },
    {
        markss:22,
        name: "Mccall Carter", 
    },
    {
        markss:21,
        name: "Pate Collier", 
    },
    {
        markss:91,
        name: "Debra Beard", 
    },
    {
        markss:75,
        name: "Nettie Hancock", 
    },
    {
        markss:20,
        name: "Hatfield Hodge", 
    },
];
const moifiednames = scores.filter((n) => n.name);
console.log(moifiednames);
// Array reduce

// Dot chaining
// 1.Dot chaining can continue untill the array methods returns new array

// Declarative vs Imperative
// 1. Declarative - What do? - map, filter
// 2.Imperative - How do? - for

const scores1 = [
    {
        markss:32,
        name: "Yvette Merritt" ,
    },
    {
        markss:57,
        name: "Lillian Ellis" , 
        },
    {
        markss:22,
        name: "Mccall Carter", 
    },
    {
        markss:21,
        name: "Pate Collier", 
    },
    {
        markss:91,
        name: "Debra Beard", 
    },
    {
        markss:75,
        name: "Nettie Hancock", 
    },
    {
        markss:20,
        name: "Hatfield Hodge", 
    },
];
const marks1 = scores1.map((n) => n.markss >60)
.filter((n) => n.name);
console.log(marks1);


