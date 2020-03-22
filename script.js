const addbtn = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.getElementById("list");
const lista = document.getElementsByTagName("li");
const bodyS = document.querySelector("body");
const css = document.querySelector("h3");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");

// create element on button click of Enter Press
function createElement() {
  const li = document.createElement("li");
  const deleteButton = document.createElement("button")
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  li.appendChild(deleteButton);
  deleteButton.innerHTML="Delete";
  deleteButton.className="btn btn-danger"
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

addbtn.addEventListener("click", addOnClick);
input.addEventListener("keypress", addOnEnter);
// End of Process 1



// toggling done on click
bodyS.addEventListener("click", function(event){
  if (event.target.tagName.toLowerCase() === 'li'){
      event.target.classList.toggle("done");
  }
})
// end of process 2

ul.addEventListener("click", function(event2){
  if(event2.target.tagName.toLowerCase() === 'button'){
    event2.target.parentNode.remove();
  }
})

//Color Gradient
function colorGrad(){
  bodyS.style.background =
  "linear-gradient(to right, "
   + color1.value
   + ", "
   + color2.value
   + ")";
   css.textContent = bodyS.style.background + ";";
}

color1.addEventListener("input", colorGrad);
color2.addEventListener("input", colorGrad);
