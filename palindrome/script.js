"use strict";

const userWord = prompt("inserisci una parola per verificare se è palindroma");

function palindroma(word){
    let polindromWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        polindromWord += word[i];
    }
    
    if(word === polindromWord){
        return true;
    }else{
        return false;
    }
}

console.log(palindroma(userWord));


