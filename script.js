function register(){

let email=document.getElementById("regemail").value;
let pass=document.getElementById("regpass").value;

localStorage.setItem("email",email);
localStorage.setItem("pass",pass);

alert("Account Created");

window.location="index.html";
}

function login(){

let email=document.getElementById("email").value;
let pass=document.getElementById("password").value;

let storedEmail=localStorage.getItem("email");
let storedPass=localStorage.getItem("pass");

if(email==storedEmail && pass==storedPass)
{
alert("Login Successful");
window.location="canteens.html";
}
else
{
alert("Wrong Email or Password");
}

}

/* Add item to cart */
function addCart(name,price){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let found = cart.find(item => item.name === name);

if(found){
    found.qty += 1;
}else{
    cart.push({
        name:name,
        price:price,
        qty:1
    });
}

localStorage.setItem("cart",JSON.stringify(cart));

alert(name + " added to cart");

}
function placeOrder(){

let place=document.getElementById("place").value;
let payment=document.getElementById("payment").value;

if(place==""){
alert("Please select your Bhavan");
return;
}

if(payment==""){
alert("Please select payment method");
return;
}

alert("Order Confirmed!");

localStorage.removeItem("cart");

window.location="canteens.html";

}
function goToPayment(){

let place=document.getElementById("place").value;

if(place==""){
alert("Please select your Bhavan");
return;
}

localStorage.setItem("place",place);

window.location="payment.html";

}
let paymentMethod="";

function showUPI(){
document.getElementById("upiOptions").style.display="block";
}

function selectPayment(method){
paymentMethod=method;
alert(method + " selected");
}

function placeOrder(){

if(paymentMethod==""){
alert("Please select payment method");
return;
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];

orders.push({
items: cart,
payment: paymentMethod,
time: new Date().toLocaleTimeString()
});

localStorage.setItem("orders", JSON.stringify(orders));

document.getElementById("msg").innerText="✅ Order Confirmed!";

localStorage.removeItem("cart");

}


function togglePassword() {
  let pass = document.getElementById("password");
  let icon = document.getElementById("eyeIcon");

  if (pass.type === "password") {
    pass.type = "text";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    pass.type = "password";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  }
}

let foods = JSON.parse(localStorage.getItem("foods")) || [];

let menuContainer = document.getElementById("menu"); // your menu div

function showMenu() {
  menuContainer.innerHTML = "";

  foods.forEach(function(food) {
    let div = document.createElement("div");

    div.className = "food";

    div.innerHTML = `
      <h4>${food.name}</h4>
      <p>₹${food.price}</p>
      <button>Add to Cart</button>
    `;

    menuContainer.appendChild(div);
  });
}

showMenu();