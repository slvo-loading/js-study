//ex
let array = ["Leonardo", "Michaelangelo", "Donatello", "Raphael"]
let lotterNumbers = [13, 56, 45, 57, 67, 14]
const lettersAndNumbers = ["a", "b", "c", 1, 2, 3]

const myNYCDestinations = [
    "🗽 Manhattan - Washington Square Park",
    "🏟️ The Bronx - Yankee Stadium",
    "🎡 Brooklyn - Coney Island",
    "✈️ Queens - Astoria Park",
    "🌉 Staten Island - Historic Richmond Town"
];
    
console.log(myNYCDestinations);

let numbers = [1, 2, 3]
numbers[3] = 4
console.log(numbers) //output: [1, 2, 3, 4]

let groceryList = ["🥛 Milk", "🥑 Avocado", "🥚 Eggs", "🍞 Bread"];
groceryList[2] = "🧈 Butter"
groceryList[4] = "🧼 Laundry Soap"
console.log(groceryList)

const testScores = [78, 96, 100, 88, 85, 81, 79];
const numberOfScores = testScores.length;

console.log(numberOfScores); // Output: 7

const musicNotes = ["Do", "Re", "Mi", "Fa", "So", "La", "Ti"];

for (let i = 0; i < musicNotes.length; i++) {
  console.log(musicNotes[i]);
}

multiple = 14
let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < num.length; i++){
    console.log(multiple + " x " + num[i] + " = " + (multiple * num[i]))
}

const characters = [
  "The Wally Watchers",
  "Wilma",
  "Fritz",
  "Wizard Whitebeard",
  "Odlaw",
  "Waldo",
  "Woof"
];

if(characters.includes("Waldo")){
  let index = characters.indexOf("Waldo")
  console.log("Found Waldo at index " + index + "!")
}
