const memeArray = [
    "https://i.imgur.com/bSi4xLb.png",
    "https://i.imgur.com/6y0G7N0.png",
    "https://i.imgur.com/LXnRao1.png",
    "https://i.imgur.com/Qqoxh1N.png"
  ];


  const captionsArray = ["the one piece is real!", "that's when I realized, I f*cked up", "scibbidi", "sigma"];

  const img = document.getElementById("random_meme");
  const caption = document.getElementById("random-caption");
  const button = document.getElementById("generator-button");

  button.addEventListener("click", function(){
    const idx_meme = Math.floor(Math.random() * memeArray.length);
    const idx_caption = Math.floor(Math.random() * captionsArray.length);
    img.src = memeArray[idx_meme];
    caption.innerText = captionsArray[idx_caption]
  });