"use script";

let userChoice = pariDispari(prompt("pari o dispari ?"));

let userNumber = numDefinedRange(Number(prompt("inserisci un numero da 1 a 5")));

function pariDispari(word){
    let correct = false;

    while(correct === false){
        if(word === "pari" || word === "dispari"){
            correct = true;
            console.log(word);
        }else{
            word = prompt("inserisci solamente o pari o dispari !");
        }
    }

    return word;
}

function numDefinedRange(num){
    let ranged = false;

    while(ranged === false){
        if(num > 5 || num < 1){
            num = Number(prompt("inserisci un numero da 1 a 5"));
        }else{
            ranged = true;
        }
    }

    return num;
}

while(isNaN(userNumber)){
    userNumber = Number(prompt("inserisci un numero da 1 a 5"));
}

console.log(userNumber);


