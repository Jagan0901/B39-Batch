var head = document.createElement("h1");
head.innerHTML = "Hello guys"
document.body.append(head)

var division = document.createElement("div");
division.innerHTML= "Happy to be here as a"
division.setAttribute("id","bar");
document.body.append(division)

// container->row->column

var containerDiv = document.createElement("div")
containerDiv.setAttribute("id","container")
// containerDiv.classList.add("container")
containerDiv.innerHTML= "Senior Software Engineer"
var rowDiv = document.createElement("div")
// rowDiv.setAttribute("id","row")
rowDiv.classList.add("row")
rowDiv.innerHTML ="Associative Software Engineer"
var colDiv = document.createElement("div")
colDiv.setAttribute("id","column")
// colDiv.classList.add("column")
colDiv.innerHTML = "Software Engineer Trainee"



rowDiv.append(colDiv)
containerDiv.append(rowDiv)


document.body.append(containerDiv)

