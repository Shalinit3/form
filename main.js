function validate(){
    document.getElementById("err_fname").innerHTML=validate_fname(document.getElementById("fname").value);
    document.getElementById("err_lname").innerHTML=validate_lname(document.getElementById("lname").value);
    document.getElementById("err_gender").innerHTML=validate_gender(document.getElementsByName("gender"));
    document.getElementById("err_email").innerHTML=validate_email(document.getElementById("email").value);
    document.getElementById("err_phone").innerHTML=validate_phone(document.getElementById("phone").value);
    document.getElementById("err_dob").innerHTML=validate_dob(document.getElementById("dob").value);
    document.getElementById("err_status").innerHTML=validate_status(document.getElementById("status").checked);

    function validate_email( email){
        var reg=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        if(!reg.test(email)){
        return "*Please Enter a valid Mail Address";
        }
    }
    function validate_phone(phone){
        var reg=/^(\+\d{1,2})?\(?\d{3}\)?\d{3}\d{4}$/;
        if(!reg.test(phone)){
        return "*Please Enter a valid Phone Number";
        }
    }
    function validate_fname(fname){
        var reg=/([A-Za-z][a-zA-Z0-9]*)/;
        if(!reg.test(fname)){
            return "*Please Enter a valid First name";
        }
    }

    function validate_lname(lname){
        var reg=/([A-Za-z][a-zA-Z0-9]*)/;
        if((lname.length>0) && !reg.test(lname)){
        return "*Please Enter a valid Last Number";
            
        }
    } 
    function validate_status(status){
        if(!status){
           return "*Please Select the following to proceed";
        }
    } 
    
    function validate_dob(dob){
        if(dob.length==0){
            return "*Please Select the DOB ";
        }
    }
    function validate_gender(gender){
        for(var i=0;i<gender.length;i++){
            if(gender[i].checked){
                break;
            }
            if(!gender[i].checked && i==2){
              return "*Please Select the Gender"; 

            }
        }
    } 
}