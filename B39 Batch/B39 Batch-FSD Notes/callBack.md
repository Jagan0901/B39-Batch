General formula for attribute
element.setAttribute("attribute", "value");
 
To get `element` below methods could be used
 
1.  document.getElementById
2.  document.getElementsByClassName
3.  document.getElementsByTagName - HTML Collection
4.  document.querySelector
5.  document.querySelectorAll
 
document.querySelector & document.querySelectorAll - ??
 
1.  can do work of all the 3
 
    1. document.getElementById
    2. document.getElementsByClassName
    3. document.getElementsByTagName
 
2.  document.querySelector("css selector");
3.  Supports complex way of selecting elements
4.  Backward compatibility
5.  New feature is only introduced
6.  Inspired from JQuery
 
```js
document
  .getElementById("username")
  .setAttribute("placeholder", "Enter your name");
document
  .querySelector("#username")
  .setAttribute("placeholder", "Enter your name");
document.querySelectorAll("ul > li");
```
 
### Callback
 
1. When an event completes an action is taken
   1. Event completes -> Place reached | Action -> Calling mom
   2. Event completes -> Manager reached bank | Action -> PA is calling
   3. Event completes -> 4am | Action -> Reception is notifying
2. Time dependent
 
```js
[4, 5, 6].map((n) => n * 2); // Not a callback
 
setTimeout(function msg() {
  console.log("Hi");
}, 4 * 1000);
 
//  Event completes -> 4s | Action -> msg()
 
setInterval(function cool() {
  console.log("fun");
}, 2 * 1000);
 
//  Event completes -> every 2s | Action -> cool()
```
 
1.? `msg` function is the callback function 2. \* `cool` function is the callback function
 
### Callback hell
 
1. Nested callback
2. Async1 -> Async2 -> Async3 (Order series)
3. Debugging difficult
4. Five pillars - Quality
   1. Redablitiy - ⬇️
   2. Maintability - ⬇️
   3. Extensibility - ⬇️
   4. Tesablitiy - ⬇️
   5. Performance
5. Avoid callback hell
 
### Hackthon
 
1. 24hrs
2. Portion - Covered till that day
3. Next friday 16th - tentatively
4. Github & netlify
5. Monday & Tuesday (19th, 20th) - Mock interview
   1. 30mins
   2. Portion - Covered till that day
   3. Dress - professional
   4. Camera & Screen share
   5. Internet - Laptop & Phone (backup)
   6. Honest
   7. English
6. No classes - during hackathon & mock interview
 
### Event Loop
 
1. Call stack (FILO/LIFO) - JS run
2. Web api - Wait
   1. Async - eg: setTimeout, setInterval, EventListener
3. Call back Q (FIFO/LILO)
4. Event loop
5. Q -> stack | When stack is empty
 
For smooth 60Fps Animation - Stack (Main thread free)
 
1. Good algorithm
2. Avoid nested Loops
 
`setTimeout(() => console.log('Hi'), 2000)`
No gurantee - 2s it will run because stack should be empty
 

### Promsie
 
1. Promise object
   1. .then()
   2. .catch() - only when error happens
   3. .finally() - error or no error (It will run)
2. Promise has 2 callbacks
   1. resolve
   2. reject
3. .then() & .catch() always returns Promise object
 
   1. map & filter always returns Array
   2. Dot chaining
 
4. 1% - Promise create & 99% - Promise use
5. Promise states
   1. Pending
   2. Rejected
   3. Fulfilled
6. Promise - why to create? - Handles async function
7. Avoids callback hell
8. Promise methods
   1. .all() - takes array of Promises
      1. Calling Multiple promise at same time
      2. Waits all promises to complete
      3. P1, P2, P3 - 5secs
      4. Source order = Output order
      5. Any one Promise errors - it will come to .catch()
   2. .race() - takes array of Promises
      1. Waits the first promise to complete
      2. Multiple files - P1, P2, P3 all same file but it different locations
         1. India, US, and Europe - Keep it all places
         2. Promise.race() - Kalai (IN), Sridhar (US), Santhosh (EU)
         3. Promise.race(IN, US, EU)
         4. Before even any one promise an error occurs then it reaches catch block
  