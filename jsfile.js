// Take placeholder to fill on the card
const cardNumber = document.querySelector("#cardNumbers");
const cardholderName = document.querySelector("#cardholderName");
const expiredDate = document.querySelector("#expiredDate");
const cvcNumbers = document.querySelector("#cvcNumbers");

// Select the button
const submitButton = document.querySelector("#submit");

submitButton.addEventListener('click',(event)=>{
    event.preventDefault();

    const numbers = document.getElementById('cardnumbers').value;
    cardNumber.textContent = numbers;
    
    const name = document.getElementById('cardholder-name').value;
    cardholderName.textContent = name;

    const expdate = document.getElementById('expDate').value;
    expiredDate.textContent = expdate;

    const cvc = document.getElementById('cvc').value;
    cvcNumbers.textContent = cvc;
});