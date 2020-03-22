const addbtn = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.getElementById("list");
const lista = document.getElementsByTagName("li");

// create element on button click of Enter Press
function createElement() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  li.addEventListener("click", markAsDone);
}

function addOnClick() {
  if (input.value.length > 0) {
    createElement();
  }
}

function addOnEnter(event) {
  if (input.value.length > 0 && event.keyCode === 13) {
    createElement();
  }
}

function markAsDone() {
  this.classList.toggle("done");
}

addbtn.addEventListener("click", addOnClick);
input.addEventListener("keypress", addOnEnter);
// End of Process 1

// Toggle Done
function doneTgl() {
  for (let i = 0; i < lista.length; i++) {
    lista[i].addEventListener("click", markAsDone);
  }
}

doneTgl();
// end of Toggle Done
