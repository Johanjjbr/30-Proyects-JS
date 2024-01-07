var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var phoneError = document.getElementById("phone-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName(){
    var name = document.getElementById("contact-name").value;


    if( name.length == 0){
        nameError.innerHTML="Nombre es requerido";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="El Apellido es requerido";
        return false;
    }
    nameError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;

}

function validatePhone(){
    var phone = document.getElementById("contact-phone").value;

    if(phone.length == 0){
        phoneError.innerHTML="Telefono es Requerido";
        return false;
    }

    if(phone.length !== 10){
        phoneError.innerHTML="El telefono debe ser de 10 digitos";
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML="Telefono no valido"
        return false;
    }

    phoneError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById("contact-email").value;

    if(email.length == 0){
        emailError.innerHTML="Email Requerido";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML="Email Incorrecto";
        return false;
    }
    
    emailError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById("contact-message").value;
    var required = 30;
    var left = required - message.length;

    if(left>0){
        messageError.innerHTML = left + " Mas caracteres son requeridos";
        return false;
    }

    messageError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;

}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = "block";
        submitError.innerHTML = "Por Favor corriga el error";
        setTimeout(function(){submitError.style.display ="none";}, 3000);
        return false;
    }

}