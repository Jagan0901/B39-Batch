var division = document.createElement("div");
division.innerHTML = "Color a span/div element content when a user moves the mouse over the element";
division.setAttribute("id","Button");
document.body.append(division);





var colorMouseover = document.getElementById("Button")
colorMouseover.addEventListener("mouseover",() =>{
    colorMouseover.style.color="blue"

setTimeout(()=>{
    colorMouseover.style.color = ""
},1000)    
})