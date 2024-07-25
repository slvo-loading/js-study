let num = Math.random()
if(num > .5){
    console.log("Heads")
} else {
    console.log("Tails")
}

hour = 13
if (hour < 12){
    console.log("Good morning")
} else {
    console.log("Good afternoon")
}

ph = 13
if (ph > 7){
    console.log("Basic")
} else if(ph < 7){
    console.log("Acidic")
} else {
    console.log("Neutral")
}

Math.floor(Math.random() * 10)


console.log("")
console.log("Question: ")
console.log("Answer: ")
answer = Math.floor(Math.random())
if (answer === 1){
    console.log("Yes - definitely")
} else if( answer == 2){
    console.log("It is decidedly so")
} else if( answer == 3){
    console.log("Without a doubt.")
} else if( answer == 4){
    console.log("Reply hazy, try again.")
} else if( answer == 5){
    console.log("Ask again later.")
} else if( answer == 6){
    console.log("Better not tell you now")
} else if( answer == 7){
    console.log("My sources say no")
}  else if( answer == 8){
    console.log("Outlook not so good")
} else{
    console.log("Very doubtful")
}

console.log("")
aqi = 33
if (aqi > 0 && aqi < 50){
    console.log("Good")
} else if (aqi > 51 && aqi < 100){
    console.log("Moderate")
} else if (aqi > 101 && aqi < 150){
    console.log("Unhealthy (Sensitive Groups)")
} else if (aqi > 151 && aqi < 200){
    console.log("Unhealthy")
} else if(aqi > 201 && aqi < 300){
    console.log("Very Unhealthy")
} else {
    console.log("Hazardous")
}


