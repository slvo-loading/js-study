//add event listeners to make things interactive
// let likeButton = document.getElementById("like-button");
// let likeCount = document.getElementById("like-count");

// let numberOfLikes = 0

// likeButton.addEventListener("click", function() {
//   numberOfLikes++;
//   likeCount.innerText = numberOfLikes;
// });

const quoteList = [
    "Some doors only open from the inside. Breath is a way of accessing that door.",
    "What has to be taught first, is the breath.",
    "Remember the blue sky. It may at times be obscured by clouds, but it is always there.",
    "In the midst of movement and chaos, keep stillness inside of you.",
    "We can't control the sea, but we can learn how to surf the waves.",
    "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.",
    "To understand the immeasurable, the mind must be extraordinarily quiet, still."
  ];
  
const colors = ["#e81416", "#ffa500", "#faeb36", "#79c314", "#487de7", "#4b369d", "#70369d"];

const wrapperDiv = document.getElementById("wrapper");
const quoteText = document.getElementById("quote-text");
const quoteButton = document.getElementById("quote-button");

quoteButton.addEventListener("click", function(){
    let randomIndex = Math.floor(Math.random() * quoteList.length);
    let randomQuote = quoteList[randomIndex];
    quoteText.innerText = randomQuote;
    wrapperDiv.style.backgroundColor = colors[randomIndex]
})