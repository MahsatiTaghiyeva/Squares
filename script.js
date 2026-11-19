const form = document.getElementById("myForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");

let button = document.getElementById("email");
let result = document.getElementById("result");

button.addEventListener("click", function() {
    result.textContent = "Submission successful!";
    result.style.color = "green";
});

Swal.fire({
  title: "Drag me!",
  icon: "success",
  draggable: true
});

if(email.ariaValueMax.trim() ===""){
    
}