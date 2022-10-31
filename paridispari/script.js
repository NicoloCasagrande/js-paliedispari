"use script";

let userChoice = pariDispari(prompt("pari o dispari ?"));

let userNumber = numDefinedRange(Number(prompt("inserisci un numero da 1 a 5")));

function pariDispari(word){
    let correct = false;

    while(correct === false){
        if(word === "pari" || word === "dispari"){
            correct = true;
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

console.log(userChoice);
console.log(userNumber);


function randomOneFive(num1, num2){
    return Math.floor(Math.random() * (num2 - num1 + 1) + num1);
}

cpuNumber = randomOneFive(1,5);

console.log(cpuNumber);

sum = sumOddEase(cpuNumber, userNumber);

function sumOddEase(num1, num2){
    return num1 + num2;
}

console.log(sum);

function isEven(num){

    if(num % 2 === 0){
        return true;
    }
    return false;
}

if(isEven(sum) === true && userChoice === "pari"){
    console.log("hai vinto");
}else if(isEven(sum) === false && userChoice === "dispari"){
    console.log("hai vinto");
}else{
    console.log("hai perso");
}




