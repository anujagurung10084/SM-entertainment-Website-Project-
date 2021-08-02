function validation() {
    
    var name = document.myform.name.value;
    var email = document.myform.email.value;
    var address = document.myform.address.value;
    var phoneno = document.myform.phoneno.value;
    var message = document.myform.message.value;

    if (name == "" && email == "" && address == "" && phoneno == "" && message == "") {
        document.getElementById("errormsg").innerHTML = "Please input in all the fields";
        document.myform.focus();
        return false;
    }
    else if (name == "") {
        document.myform.name.focus();
        return false;
    }

    else if (email == "") {
        document.myform.email.focus();
        return false;
    }

    else if (address == "") {
        document.myform.address.focus();
        return false;
    }
    else if (phoneno == "") {
        document.myform.phoneno.focus();
        return false;
    }
    else if (message == "") {
        document.myform.message.focus();
        return false;
    }

    alert('WELCOME TO SM FAMILY! <3')
    return true;
}