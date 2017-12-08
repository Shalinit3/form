var error=0;

    
    function validate_email( ){
        var email=document.getElementById("email").value;
        var reg=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        if(!reg.test(email)){
            document.getElementById("err_email").style.display="inline-block";            
            document.getElementById("err_email").innerHTML="Please enter a valid Mail Address";
            error=1;
        }
        else{
            document.getElementById("err_email").style.display="none";
            error=0;
        }
    }

    function validate_phone(){
        var phone = document.getElementById("phone").value
        var reg=/^(\+\d{1,2})?\(?\d{3}\)?\d{3}\d{4}$/;
        if(!reg.test(phone)){
            document.getElementById("err_phone").style.display="inline-block";            
            document.getElementById("err_phone").innerHTML="Please enter a valid Phone Number";
            error=1;
            
        }
        else{
            document.getElementById("err_phone").style.display="none";
            error=0;
            
        }
    }

    function validate_fname(){
        var fname=document.getElementById("fname").value;
        var reg=/^[a-zA-Z]([._-]?[a-zA-Z0-9]+)*$/;
        if(!reg.test(fname)){
            document.getElementById("err_fname").style.display="inline-block";            
            document.getElementById("err_fname").innerHTML="Please enter a valid First name";
            error=1;
        }
        else{
            document.getElementById("err_fname").style.display="none";
            error=0;
            
        }
    }

    function validate_lname(){
        var lname=document.getElementById("lname").value
        var reg=/^[a-zA-Z]([._-]?[a-zA-Z0-9]+)*$/;
        if((lname.length>0) && !reg.test(lname)){
            document.getElementById("err_lname").style.display="inline-block";            
            document.getElementById("err_lname").innerHTML="Please enter a valid Last Name";
            error=1;
        }
        else{
            document.getElementById("err_lname").style.display="none";
            error=0;            
        }
    } 

    function validate_status(){
        var status=document.getElementById("status").checked;
        if(!status){
            document.getElementById("err_status").style.display="inline-block";            
            document.getElementById("err_status").innerHTML="Please select the following to proceed";
            error=1;            
        }
        else{
            document.getElementById("err_status").style.display="none";
            error=0;            
        }
    } 
    
    function validate_dob(){
        var dob=document.getElementById("dob").value;
        if(dob.length==0){
            document.getElementById("err_dob").style.display="inline-block";            
            document.getElementById("err_dob").innerHTML="Please enter the DOB ";
            error=1;            
        }
        else{
            document.getElementById("err_dob").style.display="none";
            error=0;            
        }
    }

    function validate_gender(){
        var gender=document.getElementsByName("gender");
        for(var i=0;i<gender.length;i++){
            if(gender[i].checked){
                document.getElementById("err_gender").style.display="none";
                error=0;                
                break;
            }
            if(!gender[i].checked && i==2){
                document.getElementById("err_gender").style.display="inline-block";                
                document.getElementById("err_gender").innerHTML="Please select the Gender"; 
                error=1;
                
            }
        }
    } 

  
function validate(){
    validate_fname();
    validate_lname();
    validate_gender();
    validate_email();
    validate_phone();
    validate_dob();
    validate_status();
    if(error==0){
        return true;
    }
    else{
        return false;
    }

}