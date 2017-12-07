function printdata(){
var fname=document.getElementById("fname").value;
var lname=document.getElementById("lname").value;
var gender=document.getElementsByName("gender").checked;
var email=document.getElementById("email").value;
var phone=document.getElementById("phone").value;
var state=document.getElementById("state").value;
var country=document.getElementById("nation").value;
var dob=document.getElementById("dob").value;
var status=document.getElementById("status").checked;
var reg=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(!reg.test(email)){
        err['email']="Please Enter a valid mail Address.";
    }
  document.getElementById("err_email").innerHTML=err['email'];

}