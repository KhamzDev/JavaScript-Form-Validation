
const nameError = document.getElementById('nameError');
const phoneError = document.getElementById('phoneError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const submitError = document.getElementById('submitError');

const nameInput = document.getElementById('nameInput');
const phoneInput = document.getElementById('phoneInput');
const emailInput = document.getElementById('emailInput');
const messageInput = document.getElementById('messageInput');

const submitBtn = document.getElementById('submitBtn')

let nValidd = false;
let pValidd = false;
let eValidd = false;
let mValidd = false;


nameInput.addEventListener('keyup', () => {
    let name = nameInput.value;
    if(name.length === 0){
        nameError.innerHTML = "Must enter name";
        nValidd = false
        return false;
    }
    if(!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)){
        nameError.innerHTML = "Please enter valid name";
        nValidd = false
        return false;
    }
    nameError.innerHTML = '<img src="Images/check.png">';
    nValidd = true;
    return true;
})

phoneInput.addEventListener('keyup', () => {
    let phone = phoneInput.value;
    if(phone.length === 0){
        phoneError.innerHTML = "Must enter phone number"
        pValidd = false;
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = "Please enter a valid number"
        pValidd = false;
        return false;
    }
    if(!phone.match(/^[0-9]*$/)){
        phoneError.innerHTML = "Please enter a number"
        pValidd = false;
        return false;
    }
    phoneError.innerHTML = '<img src="Images/check.png">';
    pValidd = true;
    return true;
})

emailInput.addEventListener('keyup', () => {
    let email = emailInput.value;
    if(email.length === 0){
        emailError.innerHTML = "Must enter email";
        eValidd = false;
        return false;
    }
    if(!email.match(/^[A-Za-z1-9! #$%&'*+-/=? ^_`{|}~.]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)){
        emailError.innerHTML = "Please enter a valid email";
        eValidd = false;
        return false;
    }
    emailError.innerHTML = '<img src="Images/check.png">';
    eValidd = true;
    return true;
})

messageInput.addEventListener('keyup', () => {
    let message = messageInput.value;
    let required = 30;
    let left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + ' characters left required';
        mValidd = false;
        return false;
    }
    messageError.innerHTML = '<img src="Images/check.png">';
    mValidd = true;
    return true;
})

submitBtn.addEventListener('click', (e) => {
    
    const ready = nValidd && pValidd && eValidd && mValidd
    if(!ready){
        submitError.style.display = "block"
        e.preventDefault();
        submitError.innerHTML = "Please enter full information before submitting";

        setTimeout(() => {
            submitError.style.display = "none"
        }, 3000);
        return false
    }
})