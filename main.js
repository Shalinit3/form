function validate(){
    var error=0;
    validate_fname(document.getElementById("fname").value);
    validate_lname(document.getElementById("lname").value);
    validate_gender(document.getElementsByName("gender"));
    validate_email(document.getElementById("email").value);
    validate_phone(document.getElementById("phone").value);
    validate_dob(document.getElementById("dob").value);
    validate_status(document.getElementById("status").checked);

    function validate_email( email){
        var reg=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        if(!reg.test(email)){
            document.getElementById("err_email").innerHTML="*Please enter a valid Mail Address";
            error=1;
        }
    }
    function validate_phone(phone){
        var reg=/^(\+\d{1,2})?\(?\d{3}\)?\d{3}\d{4}$/;
        if(!reg.test(phone)){
            document.getElementById("err_phone").innerHTML="*Please enter a valid Phone Number";
            error=1;
            
        }
    }
    function validate_fname(fname){
        var reg=/([A-Za-z][a-zA-Z0-9]*)/;
        if(!reg.test(fname)){
            document.getElementById("err_fname").innerHTML="*Please enter a valid First name";
            error=1;
            
        }
    }

    function validate_lname(lname){
        var reg=/([A-Za-z][a-zA-Z0-9]*)/;
        if((lname.length>0) && !reg.test(lname)){
            document.getElementById("err_lname").innerHTML="*Please enter a valid Last Name";
            error=1;
        }
    } 
    function validate_status(status){
        if(!status){
            document.getElementById("err_status").innerHTML="*Please select the following to proceed";
            error=1;            
        }
    } 
    
    function validate_dob(dob){
        if(dob.length==0){
            document.getElementById("err_dob").innerHTML="*Please enter the DOB ";
            error=1;            
        }
    }
    function validate_gender(gender){
        for(var i=0;i<gender.length;i++){
            if(gender[i].checked){
                break;
            }
            if(!gender[i].checked && i==2){
                document.getElementById("err_gender").innerHTML="*Please select the Gender"; 
                error=1;
                
            }
        }
    } 

    if(error==0){
        return true;
    }
    else{
        return false;
    }

}