document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    let userInput = document.getElementById('userInput').value;

    let reversedWord = reverser(userInput);
    console.log(reversedWord);

    if (userInput == reversedWord){
        document.getElementById('result').innerHTML = 'La tua parola è palindroma';
    }else{
        document.getElementById('result').innerHTML = 'La tua parola non è palindroma';
    }

})



//---- FUNCTION --------------------------------------------------

function reverser (word){

    let reverseWord = '';
    
    for(i = word.length - 1; i >= 0; i--){

        console.log(word[i]);

        reverseWord += word[i];
    }

    return reverseWord;

}


                                                                                                                                                                                                                                        