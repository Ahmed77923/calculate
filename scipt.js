const dark = document.getElementById("dark");
let input = document.getElementById("input");
let d = document.querySelector(".calculet");
let del = document.querySelector(".del");

function darkMood() {
  if (d.style.backgroundColor === "black") {
    d.style.color = "balck";
    d.style.backgroundColor = "white";
    input.style.color = "black";
    del.style.color = "black";
    del.style.backgroundColor = "white";
  } else {
    d.style.color = "white";
    d.style.backgroundColor = "black";
    input.style.color = "white";
    del.style.color = "white";
    del.style.backgroundColor = "black";
  }
}
function calculet(num) {
  input.value += num;
}
function sumNumbers() {
  input.value = eval(input.value);
}
function clearInput() {
  input.value = "";
}
