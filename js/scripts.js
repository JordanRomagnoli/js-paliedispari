

function reverser (word){
    
    let reverseWord;

    reverseWord = word.split('').reverse().join('');

    console.log(reverseWord);

    if (word == reverseWord){
        console.log('la parola è palindroma');
    }else{
        console.log('la parola non è palindroma');
    }
                                                                                                                                                                                                                                        
}

reverser('oro');