// condtions to find prime numbers
// 1. The number should be positive and >1
// 2. The given number should divisible 1 and itself
// let num = Infinity;
// var numbers =[...num]

// const naturalNumbers = ()=>{
// for(var j = 2; j<10;j++){
//  console.log(j);
// }
// return j;
// }
// // console.log(naturalNumbers());

// // console.log(naturalNumbers);
var number = [1,99,5,7,53,43,100,3,4];
function prime() {
    for(i in number){
        if(number[i]>1){

        if(number[i]%1&number[i]%number[i]) {
            // console.log(`The given number ${number[i]} is a prime number`)
        // } 
        // if(number[i]%number[i]){
            console.log(`The given number ${number[i]} is a prime number`)  
        }
        // if(number[i]/1){

        }
        else{
            console.log(`The given number ${number[i]} is not a prime number`)
        }
    
}
}
prime()
//           for(i in number){
//             if(number[i]>1){
//         if(number[i]/1&number[i]) {
//             console.log(`The given number ${number[i]} is a prime number`);
//         }else{
//             console.log(`The given number ${number[i]} is not prime number`);  
//         } 
//     }
// }




// program to check if a number is prime or not

// take input from the user
// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;
var number = [1,8,11,7,99,87,56,53];
// check if number is equal to 1
// for(var i in number){
// if (number[i] === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number[i] > 1) {

//     // looping through 2 to number-1
//     for (let j = 2; j < number; j++) {
//         if (number[i] % j == 0) {
//             console.log(`${number} is a prime number`);
//             // break;
//         }else{
//             console.log(`${number} is a not prime number`);
//         }
//     }

    // if (isPrime) {
    //     console.log(`${number} is a prime number`);
    // } else {
    //     console.log(`${number} is a not prime number`);
    // }
// }
// }

























