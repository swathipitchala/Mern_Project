function adminLogin(){

let user = document.getElementById("adminuser").value;
let pass = document.getElementById("adminpass").value;

if(user === "admin" && pass === "1234")
{

localStorage.setItem("admin","true");   // this gives admin access

alert("Admin Login Successful");

window.location = "adminpanel.html";

}
else
{
alert("Wrong Admin Username or Password");
}

}