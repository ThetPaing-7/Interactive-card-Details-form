// Take placeholder to fill on the card
const cardNumber = document.querySelector("#cardNumbers");
const cardholderName = document.querySelector("#cardholderName");
const expiredDate = document.querySelector("#expiredDate");
const cvcNumbers = document.querySelector("#cvcNumbers");
const form = document.querySelector('#dataForm');

const errorMessage = document.querySelector("#error-message");

// Select the button
const submitButton = document.querySelector("#submit");

submitButton.addEventListener('click',(event)=>{
    event.preventDefault();
    const numbers = document.getElementById('cardnumbers').value;
    const name = document.getElementById('cardholder-name').value;
    const expdate = document.getElementById('expDate').value;
    const cvc = document.getElementById('cvc').value;

    if(numbers === '' || name === '' || expdate === '' || cvc === ''){
        errorMessage.textContent = 'Please fill the all the field correctly.';
    }else if(!form.checkValidity()){
        errorMessage.textContent = 'Please fill the all the field correctly.';
    }else{
        cardNumber.textContent = numbers;
        cardholderName.textContent = name;
        expiredDate.textContent = expdate;
        cvcNumbers.textContent = cvc;
    }
});