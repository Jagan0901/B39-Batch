var spanElem = document.createElement("span");
spanElem.setAttribute("id","prompt");


var spanElement = document.getElementById("prompt");
var a = prompt("Enter name");
// console.log(a);
spanElement.innerText = a;
document.body.append(a);