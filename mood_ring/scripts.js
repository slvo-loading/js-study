const randomNumber = Math.floor(Math.random() * 8) + 1

const item = document.getElementById('stone')
if(randomNumber == 1){
    item.style.backgroundColor = "red"
} else if(randomNumber == 2){
    item.style.backgroundColor = "orange"
} else if(randomNumber == 3){
    item.style.backgroundColor = "yellow"
} else if(randomNumber == 4){
    item.style.backgroundColor = "green"
} else if(randomNumber == 5){
    item.style.backgroundColor = "blue"
} else if(randomNumber == 6){
    item.style.backgroundColor = "#4169e1"
} else if(randomNumber == 7){
    item.style.backgroundColor = "#00008b"
} else if(randomNumber == 8){
    item.style.backgroundColor = "purple"
} else if(randomNumber == 9){
    item.style.backgroundColor = "black"
}