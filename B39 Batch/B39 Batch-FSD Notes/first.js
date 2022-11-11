// console.log("This is my first JS");
// console.log("5"+5)
// // Aim for +   will be
// // 1.Concatenation
// //2.Addition
// // So based on this 5(number) is converted into "5"(string) to achieve the first preference Concatenaton.Applying this, the answer will be 55(STRING)
// typeof ("5" + 5);
// console.log("5"-5);
// // Aim for -  will be
// // only Subtraction
// // So based on this "5"(string) is converted into 5(number) to achieve Subtraction.Applying this, the answer will be 0(NUMBER)
// typeof("5"-5);
// console.log("5"*5);
// typeof("5"*5);
// console.log("5"/5);
// typeof("5"/5);

//  const userInput = ["guvigeek"]

// var userInput1 =userInput.toString();
// //   var expectedOutput= userInput1.split('');
//   for( var i in userInput1){
//       console.log(userInput1[i]);
//   }

// //  const str = ["Guvi"];
//  function guvi(str){
//   const str1 = str.toString("");
// //   console.log(str1);
    
//     c = str1.split('');

// //   console.log(c); 
   


//   for(var i in c) {
//   console.log(c[i]); 
//   } 
//   return c; 
//  }
//   console.log("The ans is",guvi("Jaganath"));

   // const str = ["Guvi"];
   //  const str1 = str.toString();
   //  // console.log(str1);
   //  const str2 = str1.split("");
   //     console.log(str2);



// setTimeout(() => {
//     console.log("Time taken to execute")
// },10000)

// var a =[1,2,3,4,5,6,7,8,9,10];

// setTimeout(()=> {

//     for(i in a ){
//         console.log(a[i])
//     }
//     console.log("Happy Teachers day")
// },1000)

// let a = 


   //   -> To get data from other websides
// const expectedOutput = new XMLHttpRequest();
// expectedOutput.open("GET", "https://restcountries.com/v3.1/all") 
// expectedOutput.send();
// expectedOutput.responseType = "json"; //Data format
// // console.log(countries.length);

// expectedOutput.onload = () => {
//      const countries = expectedOutput.response //Data

//     for (const i in countries) {
//       console.log(countries[i].name.common,countries[i].flags);
//       }
// }

// function findMax(marks){
// // const marks = [90,99,91,98,95];

// var max = -Infinity;
// for(var i in marks) {
//    if(marks[i]>max){
//     max = marks[i];
//    }
// }
//    return max;
// }

// console.log("The highest mark is",findMax([90,99,91,98,95,100]));

// function fullname(firstname, lastname) {
//    return `Welcome ${lastname}, ${firstname}` ;
// }

// console.log(fullname("MS","Dhoni"));

class Account {
   constructor(name,accountNumber,balance){
      this.name = name,
      this.accountNumber= accountNumber;
      this.balance= balance;
   }
   getBalance(){
      return`The balance is : ₹${this.balance}`;
   }
   withDraw(a){
      this.balance = this.balance - a;
      return this.getBalance();
   }
}

var bharathi = new Account("Bharathi", 1000, 20_00_000);
var sarathi = new Account("sarathi", 1001, 1_00_000);
var vanmathi = new Account("vanmathi", 1002, 10_00_000);

// console.log(bharathi.getBalance());
console.log(vanmathi.withDraw(9_00_000));
// console.log(vanmathi.getBalance());


