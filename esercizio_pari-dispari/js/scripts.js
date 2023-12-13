

let validationForm = document.getElementById('validation-form');
let userStatus = document.getElementById('user-status');


validationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    playerNumber = parseInt(document.getElementById('user-input').value);
    computerNumber = document.getElementById('cmptr-number').innerHTML = randomNumber(1, 5);
    console.log(randomNumber(1, 5))


    let sumNumber = summ(playerNumber, computerNumber);
    document.getElementById('summ-number').innerHTML = sumNumber;



    if(((evenOdd(sumNumber) == true) && (userStatus.value == 'even')) || ((evenOdd(sumNumber) == false) && (userStatus.value == 'odd'))){
        document.getElementById('result').innerHTML = 'Hai vinto !';

    }else{

        document.getElementById('result').innerHTML = 'Ha vinto il computer';
    }
    
});


//----- FUNCTIONS ---------------------------------


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function summ (n1, n2){

    let mySum = n1 + n2;
    return mySum;

};

function evenOdd (n1){
    if(n1 % 2 == 0){
        return true
    }

    return false
}