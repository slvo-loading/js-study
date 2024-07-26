let randomNumber = Math.floor(Math.random() * 10)

while(randomNumber != 7){
    console.log("Duck 🦆")
    randomNumber = Math.floor(Math.random() * 10)
}

console.log("Goose! 🦢")
console.log("")

const luckyNumber = 7
let guess = Math.floor(Math.random() * 10) + 1

while (guess != luckyNumber){
    console.log("Nope, it isn't " + guess)
    guess = Math.floor(Math.random() * 10) + 1
}

console.log("My lucky number is " + guess)

console.log("")

// for(let i = 0; i < 100; i++){
//     console.log("I must not tell lies")
// }

for(let i = 1; i < 51; i++){
    if (i % 2 == 1){
        continue;
    } 

    console.log(i)
    
    if (i == 42){
        break;
    } 
}