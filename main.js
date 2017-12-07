function printdata(){
var fname=document.getElementById("fname").value;
var lname=document.getElementById("lname").value;
var gender=document.getElementsByName("gender").value;
var email=document.getElementById("email").value;
var phone=document.getElementById("phone").value;
var state=document.getElementById("state").value;
var country=document.getElementById("nation").value;
var dob=document.getElementById("dob").value;
   
    if(email.length<=0){
        alert("Email Required");
    }
    if(phone.length<=0){
        alert("Phone Number Required");
    }
    if(dob.length<=0){
        alert("Date of Birth Required");
    }
}