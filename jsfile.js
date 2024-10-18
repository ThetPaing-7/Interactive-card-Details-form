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
    }else if(isOnlyNumbers(numbers) == false || isOnlyNumbers(cvc) == false){
        errorMessage.textContent = 'Please fill numbers only'
    }
    else if(!form.checkValidity()){
        errorMessage.textContent = 'Please fill the all the field correctly.';
    }else{
        cardNumber.textContent = fourGroup(numbers);
        cardholderName.textContent = name;
        expiredDate.textContent = expdate;
        cvcNumbers.textContent = cvc;
    }
});


// Check whether input has other than numbers
function isOnlyNumbers(text){
    let words = text.split('');
    for(let i = 0; i < words.length; i++){
        if(!(words[i].charCodeAt(0) >= 48 && words[i].charCodeAt(0) <= 59)){
            return false;
        }
    }
    return true;
}

//To Display numbers with four-numbersGroup
function fourGroup(num) {
    let eachNum = num.split(''); 
    let bankNumbers = [
        eachNum.slice(0, 4).join(''),
        eachNum.slice(4, 8).join(''),
        eachNum.slice(8, 12).join(''),
        eachNum.slice(12, 16).join('')
    ];
    return bankNumbers.join(' ');
}
