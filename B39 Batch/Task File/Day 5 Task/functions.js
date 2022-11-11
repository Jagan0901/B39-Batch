var number = [1,8,11,7,99,87,56,53];
// check if number is equal to 1
for(var i in number){
if (number[i] === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else{ 
    if (number[i] > 1) {

    // looping through 2 to number-1
    for (let j = 2; j < ; j++) {
        if (number[i] % j == 0) {
            console.log(`${number} is a prime number`);
            // break;
        }else{
            console.log(`${number} is a not prime number`);
        }
    }
}
}
}