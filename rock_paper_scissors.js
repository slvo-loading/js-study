// rock = 0, paper = 1, scissors = 2
let user_input = 0
let computer = Math.floor(Math.random() * 3)

if (computer === 0){
    if (user_input === 1){
        console.log("You win!")
    } else if(user_input === 2){
        console.log("You lose :(")
    } else {
        console.log("You tied!")
    }
} else if (computer === 1){
    if (user_input === 2){
        console.log("You win!")
    } else if(user_input === 0){
        console.log("You lose :(")
    } else {
        console.log("You tied!")
    }
} else if (computer === 2){
    if (user_input === 0){
        console.log("You win!")
    } else if(user_input === 1){
        console.log("You lose :(")
    } else {
        console.log("You tied!")
    }
}

console.log(computer)
console.log(user_input)