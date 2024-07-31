function greetings() {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
  
    if (randomNumber == 1){
      console.log("Howdy!");
    } else if (randomNumber == 2) {
      console.log("Hi there!");
    } else if (randomNumber == 3) {
      console.log("Hey what's happening?");
    } else if (randomNumber == 4) {
      console.log("Hola!");
    } else {
      console.log("Heya!");
    }
  }

  function countDown(){
    for(let i = 10; i > 0; i--){
        console.log(i)
    }
    return("Blast off! 🚀")
  }

  function greeting(name, age){
    console.log()
    console.log("Hi! My name is " + name + ".");
    console.log("I am " + age + " years old.")
  }

  function relativeTheory(mass){
    return (mass * 299792458 ** 2)
  }

  function mean(viewsArray){
    let totalViews = 0;
    for(let i = 0; i < viewsArray.length; i++){
        totalViews += viewsArray[i];
    }

    return totalViews / viewsArray.length;
  }

  function median(viewsArray){
    let sortedStats = viewsArray.sort(function(a, b){return a-b});
    let middleIndex = Math.floor(viewsArray.length / 2);
    return sortedStats[middleIndex];
  }
  
  greetings();
  greetings();
  greetings();

  console.log()
  console.log(countDown())

  greeting("Nori", 0.5)

  console.log()
  console.log(relativeTheory(2))

const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];

// TikTok
console.log("TikTok");
console.log("Mean:", mean(recentTikTokViews));
console.log("Median:", median(recentTikTokViews));
console.log();

// Instagram
console.log("Instagram");
console.log("Mean:", mean(recentInstagramViews));
console.log("Median:", median(recentInstagramViews));
console.log();

// YouTube
console.log("YouTube");
console.log("Mean:", mean(recentYouTubeViews));
console.log("Median:", median(recentYouTubeViews));
console.log();



