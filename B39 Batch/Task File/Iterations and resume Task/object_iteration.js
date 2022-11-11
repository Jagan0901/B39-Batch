var Myresume = {

    Name : "Jaganath G",

    Mail  : "Jaganath0901@gmail.com",

    Experience : " Fresher ",
    
    Degree : "BSC",

    Department : "Mathematics",

    CGPA : " 7.433",

    address : {
        houseno : "***",
        Streetname : "xyz",
        areaname : "abc",
        City : "Chennai",
        State : "Tamil Nadu",   
    },

    Skills  : "Javascript  CSS  HTML ",

   
        
}
Myresume.Interest = "Reading books, Learning to create video content, Music,Watching webseries, Trying to create my own website"

// for in loop

//In object iteraton i -> keys
for(var key in Myresume){
    console.log(key,Myresume[key]);
    console.log(JSON.stringify(key),JSON.stringify(Myresume[key]));
    
}


// for of loop

console.log(Object.keys(Myresume));
console.log(Object.values(Myresume));

for(let key of Object.keys(Myresume)){
    console.log(key, Myresume[key]);
    console.log(JSON.stringify(key),JSON.stringify(Myresume[key]));
}