
function reverser (word){
    
    let reverseWord;

    reverseWord = word.split('').reverse().join('');

    if (word == reverseWord){
        console.log('la parola è palindroma');
    }else{
        console.log('la parola non è palindroma');
    }
                                                                                                                                                                                                                                        
}

let userInput = prompt('Inserisci una parola').toLowerCase();

reverser(userInput);

/* const userInput = document.getElementById('wordInput');
let userInputValue = userInput.value;
const buttonInput = document.getElementById('wordButton');

buttonInput.addEventListener('click', function(){

    console.log(userInputValue, 'userInputValue' ,typeof userInputValue)

}) */
