// objects in js are like dictionaries in python!

// you can access values of properties like this:
const stadium = {
    name: "Dodger Stadium",
    location: "Los Angeles, CA",
    capacity: 56000,
    soldOut: false
  };

  console.log(stadium.name);    // Dodger Stadium
  console.log(stadium.events);  // undefined

  const car = {
    model: "Tesla",
    year: 2012,
    color: "white",
    used: false // only used by me lol
  };

  if (car.used){
    console.log("I'm looking for a " + car.year + " " + car.model + " that is used.")
  } else {
    console.log("I'm looking for a " + car.year + " " + car.model + " that is new.")
  }

  //assigning new values
  const user = {
    username: "@emmachamberlain",
    location: "Los Angeles, CA",
    followers: 15725078,
    following: 3, 
    verified: false
  };
  
  user.verified = true;
  user.location = "🌐";
  
  console.log(user);

  // assign new property

  const fruit = {
    name: "apple",
    quantity: 10,
  }
  
  console.log(fruit);

  fruit.organic = true;

console.log(fruit);

// Output: {name: 'apple', quantity: 10, organic: true}

pokemon = {
    name: "Pikachu",
    type: "Electric ⚡️",
    level: 25,
}

pokemon.isCaught = false;
console.log(pokemon)

pokemon.isCaught = true;
pokemon.name = "my lil toe"
console.log(pokemon)
  
  // Output: {name: 'apple', quantity: 10}

  //methods in objects
  const phone = {
    model: "iPhone 11 Pro Max",
    brand: "Apple",
    version: 11.6,
    owner: "John Appleseed",
    ringtone: function () { //ringtone (){
      console.log("Ring, ring! Ring, ring! 📲")
    }
  }
  
  phone.ringtone();
  // Output: Ring, ring! Ring, ring! 📲

  const pig = {
    name : "piggy",
    type:"pig",
    age :  5,
    makeSound (){
        return ("oink oink oink 🐷")
    }
  }

  const sheep = {
    name:"sheepy",
    type:"sheep",
    age:4,
    makeSound(){
        return ("baaaaaaaaa baaaa baaa")
    }
  }

  const dog = {
    name:"doggy",
    type:"dog",
    age:3,
    makeSound(){
        return "woof woof woof"
    }
  }

  console.log(dog.name + " is a " + dog.age + " year old " + dog.type + " that goes " + dog.makeSound())
  console.log(sheep.name + " is a " + sheep.age + " year old " + sheep.type + " that goes " + sheep.makeSound())
  console.log(pig.name + " is a " + pig.age + " year old " + pig.type + " that goes " + pig.makeSound())

  