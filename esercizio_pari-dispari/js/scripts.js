

let validationForm = document.getElementById('validation-form');
let userStatus = document.getElementById('user-status');


validationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    playerNumber = parseInt(document.getElementById('user-input').value);
    computerNumber = document.getElementById('cmptr-number').innerHTML = randomNumber(1,5);

    document.getElementById('summ-number').innerHTML = summ(playerNumber, computerNumber);



    if(((summ(playerNumber, computerNumber) % 2 == 0) && (userStatus.value == 'even')) || ((summ(playerNumber, computerNumber) % 2 == 1) && (userStatus.value == 'odd'))){
        document.getElementById('result').innerHTML = 'Hai vinto !';
        console.log('player win');

    }else{

        document.getElementById('result').innerHTML = 'Ha vinto il computer';
        console.log('player lose');
    }
    
});


//----- FUNCTIONS ---------------------------------


function randomNumber (max, min){

    return Math.floor(Math.random() * (max - min + 1)) + min;

};

function summ (n1, n2){

    let mySum = n1 + n2;
    return mySum;

};