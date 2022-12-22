var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');


function validateName() {
    var name=document.getElementById('contact-name').value.trim();  

    if (name.length==0) {
        nameError.innerHTML='Name is Required';
        nameError.style.color='red'
        return false;
    }

    if (!name.match(/^[A-Za-z ]*$/)){
        nameError.innerHTML='Write a FullName';
        nameError.style.color='red'
        return false;
    }

    if (name.length<3){
        nameError.innerHTML='enter minimum 3 characters';
        nameError.style.color='red'
        return false;
    }else{
    
    nameError.innerHTML='Name is valid';
    nameError.style.color='green'
    return true;
    }
}

function validateEmail(){
    var email = document.getElementById('contact-email').value.trim();
    if (email.length==0) {
        emailError.innerHTML='Email is Required';
        emailError.style.color='red'
        return false;
    }

    if (!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError.innerHTML='Email is Invalid';
        emailError.style.color='red'
        return false;
    }else{
    emailError.innerHTML='Email is valid';
    emailError.style.color='green'
    return true;
    }
}

function validateMessage() {
    var message =document.getElementById('contact-message').value.trim();
    var Required=15;
    var left=Required - message.length;
    
    if(message.length==0 || message.length<10){
        messageError.innerHTML ='Minimum 10 character Required';
        messageError.style.color='red'
        return false;
    }else{
    messageError.innerHTML='Message is valid';
    messageError.style.color='green'
    return true;  
    }  
    
}

function validateSubject(){
	var phone = document.getElementById("contact-subject").value.trim();
	if (phone.length == 0) {
		subjectError.innerHTML = 'phone number is Required';
		subjectError.style.color = 'red'
		document.getElementById("contact-subject").style.borderColor = "red"
		document.getElementById("contact-subject").style.color = "red"
		return false;
	}
	if (phone.length != 10) {
		subjectError.innerHTML = "Enter Valid phonenumber"
		subjectError.style.color = "red"
		document.getElementById("contact-subject").style.borderColor = "red"
		document.getElementById("contact-subject").style.color = "red"
		return false

	}
	if (!phone.match(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/)) {
		subjectError.innerHTML = "Phonenumber must be digits"
		subjectError.style.color("red")
		document.getElementById("contact-subject").style.borderColor = "red"
		document.getElementById("contact-subject").style.color = "red"


		return false;
    }else{
    subjectError.innerHTML = ""
	document.getElementById("contact-subject").style.borderColor = "green"
	document.getElementById("contact-subject").style.color = "green"
	return true;
    }
}
  

