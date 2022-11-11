### DAY 1,2,3 & Additional Session(12th Aug)

##INTRO TO BROWSER
1.Mosaic : - Mosaic is the first browser to display images inline with text instead
of in a separate window.

        - Uses for military purpose

2.  Browser war :
    The first war

        -  The browser war was between Netscape and Internet Explorer
           won by IE because IE offers free service with windows feature.On
           the other hand Netscape charges certain amount to access their browser.

    The second war

        -   Won by Google Chrome against IE because of user friendly and speed.

    Interesting facts: 1. Chromiam biased browser to Chrome,IE,Brave etc..,  
     2. Browser knows HTML,CSS and JS and Reactjs is the best tool
    for JS which is usefull to buid website.

            About HTTP :  Domain Name System(DNS) is creates IP address number so it's
                        initiate TCP connection and then HTTP request can be given to
                        the server.

                TCP connection: in this your data is guaranteed.eg: Email,
                                 gpay, govt. sites etc..,

                UDP connection: in this your data is not guaranteed. eg:
                                online games,live streaming etc..,

    HTML -> HTML parser -> DOM(which browser can undersand
    easily because it's not undersand HTML directly) .

    CSS -> CSS parser -> CSSOM

    JS -> JS engine -> DOM & CSSOM

##INTRO TO JS - it is build by Brandon Eich on 1995 created by Netscape. - Orginally named Livewire then Livescript. - ECMA is standardized JS today.

##Data types : Primitive and non primitive data type

    Primitive datatype => String, Number, Boolean

    Non -primitive datatype :
       console.log(type of[20,2,100]); => object
       console.log(type of { name: "Ganesh", class: "B38"}); =>

##Declaration assignment  
 var x = 5;
var y; //only declaration

##not defined vs undefined

console.log(y); //undefined
console.log(z); //not defined which means declaration does't exist

const x1 = NaN;
console.log("abc"/2); //JS is number -> NaN

console.log(typeof x1);// number

console.log("5"+5)
// Aim for + will be
// 1.Concatenation
//2.Addition
// So based on this 5(number) is converted into "5"(string) to achieve the first preference Concatenaton.Applying this, the answer will be 55(STRING)

console.log("5"-5);
// Aim for - will be
// only Subtraction
// So based on this "5"(string) is converted into 5(number) to achieve Subtraction.Applying this, the answer will be 0(NUMBER)

Type casting / coercion - Changing the datatype

1. Implicit => Decision is made by JS
2. Explicit => We are forcing JS to change datatype by using "+" or "parseInt"

console.log(5 == "5");
console.log(5 === "5");

1. == -> checks only value
2. === -> checks value and datatype

== -> allows typecasting
"5" -> 5 (string "5" convert into 5 number)
5 == 5 //true

=== -> does not allow typecasting
5 === "5" //false

So === is faster than == because there is no conversion step in ===.

##Copy by value and Copy by reference

var j1 = [5,6,7];
var j2 = [5,6,7];

var t1 = 5;
var t2 = 5;

console.log(j1===j2);
console.log(t1===t2);

Ans is

Js does not stores array directly in j1. it stores on meomory address(x1) which is in j1. So values will not be in j1, it will be on x1 which is a memory address of j1.

        j1 -> x1(memory address of j1)
        x1 -> [5,6,7]

Similarly,

Js does not stores array directly in j2. it stores on meomory address(x2) which is in j2. So values will not be in j2, it will be on x2 which is a memory address of j2.

        j2 -> x2(memory address of j2)
        x2 -> [5,6,7]

If we compare j1 &j2, we think that j1 value [5,6,7] is comparing to j2 value [5,6,7] and the answer will be true. But the truth is  
 JS check that whether they having same or stored in same memory address(like x1 and x2). Because JS compare only memory address.
Here x1 is seperate memory address & x2 is seperate memory address.But it does not check values inside x1 and x2. it compare x1 & x2.

x1 and x2 are not same. The ans is false.

COPY BY REFERENCE:

IF WE HAVE var j3 = j1
console.log(j1===j3);

     j3 -> x1 (because j1=j3,then the memory address will be same)
     x1 -> [5,6,7]

Here answer is true because the memory address of j1 and j3 are same which is x1.

var j1 = [5,6,7];
var j2 = [5,6,7];
var j3 = j1;

j1.push(2);
j2.push(10);
j3.push(100);

console.log(j1,j2,j3);

Ans will be
j1 = [5,6,7,2.100];
j2 = [5,6,7,10];
j3 = [5,6,7,2.100];

Because 2 and 100 will be stored on meomory address x1 of j1 and j3. Because As we know JS store only on memory address.

COPY BY VALUE:

var u1 = [90,10,100];
var u2 = [...u1];
console,log(u1,u2);

console,log(u1===u2); // False because of copy by reference

<!-- eg ;
    u1 -> x4
    u2 -> x5
    x4 = [90,10,100]
    x5 = [90,10,100] -->

In short, JS check or put values on memory address only in ARRAY & OBJECT.

##OBJECTS & JSON :

JSON -> Javascript Object Notation -> string
which is understandable to all language (like English which is International lang)
So if we want to communicate with other lang like java,python,etc.., We use JSON

Objects -> which is understandable to a particular lang.Like JS objects understanble only on JS

##ARRAY ITERATION(loop): ["if you want to convert from Array to string, Use toString(). To split the
string and to get output in a array format, Use split().]

     1.for loop
     2.for ... in loop
     3.for ... of loop
     4.forEach loop

FOR LOOP :

for(let i=0; i < marks.length; i++){
console.log(marks[i]);
}

FOR ...in LOOP :

// in -> index

      for(let i in marks){
        console.log(marks[i]);

}

FOR ...of LOOP :

// of -> value

for(let val of marks){
console.log(val);

}

FOREACH LOOP:

marks.forEach(function(mark) {
console.log(mark);
})

##OBJECT ITERATION(loop):

Only (for in loop) is applicable for object

FOR ...in LOOP :

// in -> key(in object)

      for(let key in player){
        console.log(player[key]);

}

FOR ...OF LOOP : (This is not prefered in Object but still consider as a reference)

console.log(Object.keys(player));
console.log(Object.values(player));

for(var key of player) {
console.log(player[key]);
}

### DAY 4

Conversion of Object into JSON:

                JSON.stringify(objectName);

Conversion of JSON into Object:

                JSON.parse(JSONname);

##Types of Declaration: [ Which(Declaration) is used to create a variable]

There are three types of declaration namely,

                                   Redeclare            Reassign

                       *var          Yes                  Yes
                       *let          No                   Yes
                       *const        No                   No

In Const, We can change the keys value inside the object but we can't change the Object(Which means Declaration).

For example:

const personalDetails = {
name : Ram,
location : Kashmir,
wifeName : Sita,
profession : Army man,
};

personalDetails.profession = Military man;

console.log(personalDetails);

We'll get

  <!--  personalDetails = {
        name : Ram,
        location : Kashmir,
        wifeName : Sita,
        profession : Military man,
  };  --> -->

So it's changes inside the object.(which is keys and values)

But, if we declare as

    const personalDetails = 10(or anything);

It'll show error,because we can't change(which is redeclarable) objectName or variableName in const

Similarly, it'll applicable to array also.

Example:
const movies = ["KGF 2", "Sita ramam", "Ponniyan selvan", "Pushpa"];

     movies[3] = "Venthu Thanithathu Kaadu"

     console.log(movies);

We'll get,

  <!-- movies = ["KGF 2", "Sita ramam", "Ponniyan selvan", "Venthu Thanithathu Kaadu"] -->

But, if we declare as

    const movies = 10(or anything);

It'll show error,because we can't change(which is redeclarable) objectName or variableName in const

##Functions :

         *  which is used to create logic once then we can use this logic to get our result 'n' no of times while giving 'n' no of inputs.
         * In simple words, it's Reusable.

->Function Declaration:

     function add(a,b) {
       let result = a + b;
       return result;
     }

    console.log(add(10,15)); // The logic starts from line 327(a = 10, b = 15;),then we get '25' as a
                                 answer in line no.328. The answer gets '25' from line no. 329 to 332, if return not mentioned the answer will be stuck within block which is
                                 line no.330. So, return only providing answer to 332.

    console.log(add(100,15)); // The logic starts from line 327(a = 100, b = 15;),then we get '115' as a
                                 answer in line no.328. The answer gets '115' from line no. 329 to 332, if return not mentioned the answer will be stuck within block which is
                                 line no.330. So, return only providing answer to 332.
    console.log(add(200,15)); // The logic starts from line 327(a = 200, b = 15;),then we get '215' as a
                                 answer in line no.328. The answer gets '215' from line no. 329 to 332, if return not mentioned the answer will be stuck within block which is
                                 line no.330. So, return only providing answer to 332.

    line 327 to 330 -> Function block
    line 332 to 334 -> which is called function call
    add             -> Function name
    a & b           -> Function parameters or arguments
    {}              -> Function body

DRY (Don't Repeat Yourself) which is a thumb rule to do programming but it's not compulsory. But always try follow this rule. Because it'll give a good impression towards your code.

#Scope:
-> Lifetime of a variable.

-> Types of scope:

        * Function scope    - var. It'll escape from the block. But it'll stuck inside function scope.
        * Block scope({})   - let and const. So, it can't escape from the block. it'll stuck inside block
                               scope

    Function scope is stronger than block scope.

For example:

1.  {
    let a = 10
    var b = 20
    }

    console.log(a); // answer is not defined. Because 'let' & 'const' is a block scope,it'll stuck
    inside the block.  
    console.log(b); // answer is 20. Because, 'var' is not a block scope,So it will escape from the  
     block, we'll get the answer.

2.  function fun() {
    let c = 30
    var d = 40
    }

    console.log(c); // answer is not defined.
    console.log(d); // answer is not defined. Because 'var' is a function scope. it'll will stuck
    inside the function.

#Hoisting:(To be honest there is no word called 'hoisting' in JS)

Javascript - Is it compiler language? (This could be ask in interview)

             Yes, JS is compiler language. JIT plays a key role in this compiler process.Which occurs two phase process. They are;

       * Compilation phase -> Reads only Declaration
       * Execution   phase ->  Executing the code

Let us consider two thing JS and context(Full name is Execution context) (it knows lifetime of the variable )

Example : 1

console.log(h1);
var h1 =70;
console.log(h1);

1. Compilation Phase:

console.log(h1); //Skip(Because it's reads only declaration)

var h1 =70; // (JS to context) Do you know 'h1'.If you say "NO" ,Take a note of it,'h1' is occurs but
I don't know the value. Just remember 'h1' occurs. So, context added "undefined" as
a value of'h1' [ (JS ASKED CONTEXT TO REMEMBER 'h1' BECAUSE IT IS "var") ]

console.log(h1); //Skip(Because it's reads only declaration)

2. Execution Phase:

console.log(h1); // (JS to context) Do you know 'h1'. (context to JS) Yes,'h1' is undefined
[line number: 403].

var h1 =70; // (JS to context) Do you know 'h1'.(context to JS) Yes,'h1' is undefined
[line number: 403].(JS to context) Update 'h1' value from undefined to 70.

console.log(h1); // (JS to context) Do you know 'h1'.(context to JS) Yes,'h1' is 70[line number:415]

Example : 2

console.log(h2);
let h2 =70;
console.log(h2);

1. Compilation Phase:

console.log(h2); //Skip(Because it's reads only declaration)

let h2 =70; // (JS to context) Do you know 'h2'.If you say "NO" ,Take a note of it,'h2' is occurs but
don't initialize any value. So, context doesn't add any value to 'h2'.  
 [ (JS ASKED CONTEXT TO DON'T INITIALIZE ANY VALUE TO 'h2' BECAUSE IT IS "let") ]

console.log(h2); //Skip(Because it's reads only declaration)

2. Execution Phase:

console.log(h2); // (JS to context) Do you know 'h2'. (context to JS) Yes,I know 'h2' but I didn't
initiate the value as you said.(On the [line number: 440].)

       NEXT STEP SHOULD NOT BE FOLLOWED BECAUSE OF IN ABOVE STEP IT THROWS ERROR DUE TO CONTEXT DIDN'T INITIALIZED.

var h2 =70;

console.log(h2);

**_Same will be followed to const_**

IN SHORT, TRY TO REMEMBER AS A MYTH:

               * var and Functions  - HOISTED
               * let & const        - NOT HOISTED

#Function Reference:

 <!-- function findMax(marks){
 // const marks = [90,99,91,98,95];

      var max = -Infinity;
         for(var i in marks) {
           if(marks[i]>max){
               max = marks[i];
                }
          }
             return max;
  }

console.log("The highest mark is",findMax([90,99,91,98,95,100])); -->

#XML HTTP Format:

    -> USES : To get data from other websides
    -> To print name and flags

<!-- // const expectedOutput = new XMLHttpRequest();
// expectedOutput.open("GET", "https://restcountries.com/v3.1/all")
// expectedOutput.send();
// expectedOutput.responseType = "json"; //Data format
// // console.log(countries.length);

// expectedOutput.onload = () => {
//      const countries = expectedOutput.response //Data

//     for (const i in countries) {
//       console.log(countries[i].name.common,countries[i].flags);
//       }
// }    -->

### DAY 5

##ES6(2015) features:

             * let & const
             * `` Template literal
             * ...Spread Operator
             * ...Rest Operator
             * Destructuring
             * Class
             * Arrow Function =>
             * Promise
             * Number Separator (1_00_00_000) -> To understanding purpose

#Template literal :

                -> Makes code simple and Understandable
                -> Supports muli-line string
                -> $() - Interpolation (Substitution)
        Example:

          Normal format:

           function fullname(firstname, lastname) {
              return "Welcome" + lastname + "," + firstname"
           }

          Using Template literal,

           function fullname(firstname, lastname) {
              return `Welcome ${lastname}, ${firstname}` ;
           }

           Both will give same results.

            `  -> Template literal
           ${} -> Interpolation

#Array Destructuring :

           -> Here, We matches or compare through INDEXES

         1. const  [t1,t2] = [100,200] ;
          console.log(t1,t2); //we get, t1-> 100, t2 -> 200


         2. const [t1,t2,t3] = [100,200] ;
          console.log(t1,t2,t3); //we get, t1-> 100, t2 -> 200, t3 -> undefined


         3. const [t1,t2,t3 = 80] = [100,200] ; // Here, 80 is DEFAULT value
          console.log(t1,t2,t3); //we get, t1-> 100, t2 -> 200, t3 -> 80

            DEFAULT VALUE WILL BE TAKEN ONLY WHEN t3 IS UNDEFINED


         4. const [t1,t2,t3 = 80] = [100,200,500] ; // Here, 80 is DEFAULT value
          console.log(t1,t2,t3); //we get, t1-> 100, t2 -> 200, t3 -> 500

            DEFAULT VALUE WILL BE TAKEN ONLY WHEN t3 IS UNDEFINED

         5. const [t1,t2,t3 = 80] = [100,200,null] ; // Here, 80 is DEFAULT value
          console.log(t1,t2,t3); //we get, t1-> 100, t2 -> 200, t3 -> null

            DEFAULT VALUE WILL BE TAKEN ONLY WHEN t3 IS UNDEFINED

         6. const [,t1,t2,t3 = 80] = [100,200,null] ; // Here, 80 is DEFAULT value
          console.log(t1,t2,t3); //we get, t1-> 200, t2 -> null, t3 -> 80

            DEFAULT VALUE WILL BE TAKEN ONLY WHEN t3 IS UNDEFINED

            Here "," is consider as variable. As like we consider (t1,t2,t3). Which is called Holes

       ##Nested Array Destructuring :


       var [a,b,c,d] = ["tam", "eng", ["chem","phy","bio"], "maths"]
       <!-- In this, you have print c as "phy" without using c[1]. What will be the answer?      -->
      Sol:

        var [a, b, [,c,], d] = ["tam", "eng", ["chem","phy","bio"], "maths"]
        We get,

        c = "phy"

       Array.isArray(c) Shows whether the 'c' is array or not

#Object Destructuring :

           -> Here, We matches or compare through KEYS
           -> Here, We not have any Object name

       const {name,power,phrase} = {

        name  : "Tony Stark" ,
        house : 3,
        networth : xxx,
        power    : Robotics,
        phrase   : " I love you 3000 "
       };

       console.log(name);
       console.log(power);
       console.log(phrase);


       1. const {name,power,phrase.skill} = {

        name  : "Tony Stark" ,
        house : 3,
        networth : xxx,
        power    : Robotics,
        phrase   : " I love you 3000 "
       };

       console.log(skill); // undefined



       2. const {name,
                 power,
                 phrase,
                 skill = ["genius","billionaire,"playboy","philanthropist"] //DEFAULT value
       } = {

        name  : "Tony Stark" ,
        house : 3,
        networth : xxx,
        power    : Robotics,
        phrase   : " I love you 3000 "
       };

       console.log(skill); // ["genius","billionaire,"playboy","philanthropist"]

         DEFAULT VALUE WILL BE TAKEN ONLY WHEN SKILL IS UNDEFINED


       3. const {name = "Ironman", //DEFAULT value
                 power,
                 phrase,
                 skill = ["genius","billionaire,"playboy","philanthropist"] //DEFAULT value
       } = {

        name  : "Tony Stark" ,
        house : 3,
        networth : xxx,
        power    : Robotics,
        phrase   : " I love you 3000 "
       };

       console.log(name); // Tony stark

         DEFAULT VALUE WILL BE TAKEN ONLY WHEN NAME IS UNDEFINED

#Types of Function:
_ Normal function
_ Arrow function
_ Anonymous function
_ IIFE(Pattern) -> It's not be listed under the type of function but it's very close related
to type of function

        1. Normal function:

              function double(n) {
                return n * 2;
              };

           console.log(double(100));


        2. Arrow function:

             (1) Method
              const double = (n)=> {
                return n * 2;
              };
           console.log(double(100));


              (2) Method
               const double = (n)=> n * 2; //Applicable only when the arrow function contains single line
                                           // code

           console.log(double(100));

    #Difference between arrow & Normal function :
              1. Arrow function - `this` does not point anything.Hence, we do not use `this` in arrow fn
              2. Arrow function - Shorter syntax - one function
                        1. no return statement needed(one line function)
                        2. `{}` not needed (one line function)

        3. Anonymous function:
                      -> The function which has no name is called Anonymous function.
                      -> Which is used in Array methods like map,filter and reduce.

            [5,6,7].forEach(function(n){
               console.log(n + 2);
            });


        4. Anonymous Arrow function: - TRENDING(Using by Developers)

          [5,6,7].forEach((n) => console.log(n + 2)); //It's contain single line code.So, I use (2)Method


        5. IIFE(Immediately Invoked Function expression):

              -> It'll used for library authors
              -> Declaration and call will be occur on single line

              function double(n) {
                console.log(n * 2);
              };
              double(7);

              -> Step 1: Put bracket on line 702
              (double)(7);

              -> Step 2: Substitute line 699 to 701 in double. We'll get,

              (function double(n) {
                console.log(n * 2);
              })(7);

             The above line 709 to 711 is called IIFE


        6. IIFE(Immediately Invoked Function expression) + Anonymous function:


               (function (n) {
                console.log(n * 2);
              })(7);                 //()creates expressions


        6. IIFE(Immediately Invoked Function expression) + Anonymous + Arrow function:


               ((n) => {
                console.log(n * 2);
              })(7);                 //()creates expressions


    ##Spread Operator:
            -> It's uses to Copy by value
            ->Concat/Merge Arrays
            ->Concat/Merge Objects
            ->Copy arrays & objects
            ->Override keys in objects
            ->Spread is used in any position in array
            ->To pass array as seperate arguments


          (1)Array:


        const a1 = [80,40,90];
        const a2 = [180,240,390];

        const a3 = [...a1];
        console.log(a3);   //[80,40,90]

        const a4 = [...a1,...a2];
        console.log(a4)     // [80,40,90,180,240,390]



          (2)Object:


          const avg = {
               name      : "Tony Stark" ,
                house    : 3,
                networth : xxx,
                power    : Robotics,
                phrase   : " I love you 3000 "
               };


          const avg1 = {...avg, nation : "US"}

          console.log(avg1);

          We'll get,


            {
                name     : "Tony Stark" ,
                house    : 3,
                networth : xxx,
                power    : Robotics,
                phrase   : " I love you 3000 "
                nation   : "US"
               };


          const avg = {
                name     : "Tony Stark" ,
                house    : 3,
                networth : xxx,
                power    : Robotics,
                phrase   : " I love you 3000 "
               };


          const avg1 = {...avg, nation : "US", name : "Ironman" } // "name" replace to Ironman Because
                                                                  // "...avg" places first. In avg, we
                                                                  // have "Tony Stark".So, name "Iron
                                                                  // man"(Secondary came) replaces
                                                                  // "Tony Stark"(First came) in avg

          console.log(avg1);

          We'll get,


            {
                name     : "Ironman" ,
                house    : 3,
                networth : xxx,
                power    : Robotics,
                phrase   : " I love you 3000 "
                nation   : "US"
               };

### DAY 6 :

##Rest operator(...) :
-> Rest element must be last element

    1. Destructuring:
                -> Collecting rest of the values


       Examples:

       (1) var [s1,s2] = ["tam", "eng", "social", "maths"]
        console.log(s1,s2); // We get s1= "tam" & s2 = "eng"


       (2)  var [s1,...s2] = ["tam", "eng", "social", "maths"]
         console.log(s1,s2); // We get s1 = "tam" & s2= "eng", "social", "maths"



       (3) var [s1,...s2,s3] = ["tam", "eng", "social", "maths"]
         console.log(s1,s2,s3); // We get, Error(Rest element must be the last element)

       (4) function sum (a,b) {
              return a+b;
       }
       console.log(sum(4,5)); //We get, 9
       console.log(sum(4,5,6,7,8)); //We get,9


       (5) To get expected output(30) on line 862
        function sum1 (...nums) {
             console.log(nums);
             let total = 0;
             for(let val of nums){
               total = total + val;
             }
             return total;
       }
       console.log(sum(4,5)); //We get, 9
       console.log(sum(4,5,6,7,8)); //We get,30

##Object Short-hand :
-> Key name & Value name should be same

     Examples:

        (1)
            const age = 20;
            const batch = "B39WD"

            const student = {
              name : "Manju",
              age,
              batch,
            }

            console.log(student);// Manju,20 & B39WD


        (2)
            const mark = 90;
            const student1 = {
              name: "Manju"
              age,
              batch,
              score,
            }

            console.log(student1);// error(not defined)


       ##this keyword :
                      -> 'this' requires context (book)
                      -> 'this' reference word
                      -> until the function is called `this` does not point to anything
                      -> `this` does not point anything  when it's comes to arrow function eventhough
                           you force to do it. Hence, we do not use `this` in arrow function.
                      -> Manually providing (explicit) context
                            * call - passing arguments by coma seperated
                            * apply - passing arguments as a array
                            * bind - always returns a new function


        Examples:

        (1)
           const student = {
            firstName : "Badri"
            lastName : "Narayanan"
            fullName : function(){
              return `${this.lastName},${this.firstName}`
            }
           }
           console.log(student.fullName()); //Narayanan Badri

           Here, 'this'  points student. The above line 925, Function has been called. So, 'this' points student(student.fullName()).Context -> student.


        (2)
          const student1 = {
            firstName : "Prabu"
            lastName : "Veer"
            fullName : student.fullName()

           }

             console.log(student1.fullName()); // Veer Prabu

           Here, 'this'  points student1. The above line 938, Function has been called. So, 'this' points student1(student1.fullName()).Context -> student1.


        (3)
           const printFullName = function () {
             return this.lastName + "," + this.firstName;
           };

            console.log(printFullName()); //undefined because there is no context occur


        (4)
          const student2 = {
            firstName : "Keerthy"
            lastName : "Sagar"
            fullName : printFullName, //function () {
                                      // return this.lastName + "," + this.firstName;
           };


           };
           console.log(student2.fullName()); // Sagar Keerthy


           Here, 'this'  points student2. The above line 958, Function has been called. So, 'this' points student2(student2.fullName()). Context -> student2.


         #Call :
                console.log(printFullName.call(student2)); // Sagar Keerthy

            Here, we manually providing (explicit) context which is 'student2'

         #Apply :
                console.log(printFullName.apply(student2)); // Sagar Keerthy
                Arguments must be passed in ARRAY

          Example for differences in call & apply

          const student4 = {
            firstName : "Guru"
            lastName : "Prasad"
           };

          const intro = function (state,country){
            return `${this.lastName}, ${this.firstName} is from ${state},${country}`
          };

          console.log(intro.call(student4, "TN","India"));// Prasad,Guru is from TN India
          console.log(intro.apply(student4, ["AP","India"]));// Prasad,Guru is from AP India




     ##OOP - Object Oriented Programming
       Style of Progtamming - Paradigm
         1. OOP        - JAVA
         2. Functional
         3. Procedural
         4. Logic


         JAVA class != JS class

         JS class implementation is done using functions

         1. class is the blueprint, which can create different objects (model)
         2. class name starts with Capital letter
         3. new creates an object
         4. new calls the constructor
         5. new makes `this` point the object(ferrari)

         Name      Wheels    Doors   Engine

         Ferrari    4          2       v8
         Venue      4          4       v3
         BMW x6     4          4       v6
         Innova     4          4       v4


         class Car {
          constructor(name, wheels, doors, engine) {
             this.name = name;
             this.wheels = wheels;
             this.doors = doors;
             this.engine = engine;
          }
         }

         //creating the object (Car) -  instantiating an object (ferrari)

         const ferrari = new Car("Ferrari", 4, 2, "v8");

         console.log(ferrari);

         We'll get,
                 <!-- Car {
             name = Ferrari;
             wheels = 4;
             doors = 2;
             engine = v8;
          } -->

### Additional session - 19th August 2022
