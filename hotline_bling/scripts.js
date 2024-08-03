//can access any element in the DOM with 
//console.log(document);

//select by element name
//document.querySelector("p")

//select by class name
//document.querySelector(".class-name")

//select by id name
//document.querySelector("#id-name")

//access contents of elements
//document.querySelector("div").innterHTML;

//most commonly used, strings as parameters
//.getElementById()
//.getElementsByClassName()
    //returns an HTMLCollection where individual elements
    //can be accessed with indexes

//.innerText
    //returns the rendered text inside of a selected element
    //assign a new string value
    //let newText = document.getElementById("posted").querySelector("p").innerText = "I'm about to take off! It's an early flight, so I'm ready to sleep! 😴"

//.src
    //working with imgs
    //console.log(document.querySelector("img").src);
    //update img src
    //document.querySelector("img").src = "smiley2.png"

let drakePicTwo = document.getElementById("drake-pic-2");
let heading = document.getElementById("heading-2");
drakePicTwo.src = "drake-pic-one.png";
heading.innerText = "Learn By Doing";

