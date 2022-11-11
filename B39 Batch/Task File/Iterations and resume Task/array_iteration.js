const marks =[44,33,99,10,40,97,96,93,81,77];
marks.push(100,99);
console.log(marks.length);


// for loop
var m = -Infinity;
for (let i = 0; i < marks.length; i++) {
    if(marks[i]>m){
        m = marks[i];
    }
    // console.log("The highest mark is",m);   
}
console.log("The highest mark is",m); 



//for in loop
var n = -Infinity;
for(var i in marks){
    if(marks[i]>n){
        n = marks[i];
    }
    // console.log("The highest mark is",n);
}
console.log("The highest mark is",n);



// for of loop
var max= -Infinity;
for(var mark of marks) {
    if(mark>max){
        max=mark;
    }
}
console.log("The highest mark is",max);



//forEach loop
var x = -Infinity;
marks.forEach(function(mark){
    if(mark>x){
        x = mark;
    }
    // console.log(x);
})
console.log("The highest mark is",x);
