const header = document.createElement("h1");
header.innerText = 10;
header.setAttribute("class","countdown");
document.body.append(header);

// const countDown = document.querySelector(".countdown");
const timerMsg = (num) => new Promise((resolve,reject) => {

if(num>0){
    setTimeout(()=> {
        console.log(num);
        // coundown.innerText = num;
        header.innerText = num;
        resolve(num);
    },1000);
}else{
    setTimeout(()=> {
        // coundown.innerText = "Happy Birthday";
        header.innerText = "Happy Birthday";
        reject("Happy Birthday")        
    },1000);
}
});
console.log("Time started")
timerMsg(10)
.then((n)=> timerMsg(--n))
.then((n)=> timerMsg(--n))
.then((n)=> timerMsg(--n))
.then((n)=> timerMsg(--n))
.then((n)=> timerMsg(--n))
.then((n)=> timerMsg(--n))
.then((n)=> timerMsg(--n))
.then((n)=> timerMsg(--n))
.then((n)=> timerMsg(--n))
.then((n)=> timerMsg(--n))//skip
.then((n)=> timerMsg(--n))//skip
.then((n)=> timerMsg(--n))//skip
.catch((msg) => console.log(msg));


