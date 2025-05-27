// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let person = prompt("Please enter your name");

if (person != null) {
  alert(`Hi and welcome, ${person}!`);
}

// Step 2 - Food choice
// Your code goes here
let foodChoice = prompt("What type of food would you like to order? Enter a number: 1 - Pizza 2 - Pasta 3 - Salad");

if (foodChoice === "1") {
  alert(`You have choosen pizza`);
} else if (foodChoice === "2") {
  alert(`You have choosen pasta`);
} else if (foodChoice === "3") {
  alert(`You have choosen salad`);
}

// Step 3 - Subtype choice
// Your code goes here

/*if (foodChoice === "1") {
  let pizzaType = prompt(`Select a pizza type: Enter a number: 1 - Napolitana, 2 - Hawaian, 3 - Pepperoni`);
}

if (foodChoice === "1" && pizzaType === "1") {
  alert(`You have choosen napolitana`);
}*/

// Step 4 - Age
// Your code goes here
let age = prompt("Is this food for a child or an adult? Type your age:");

// Step 5 - Order confirmation
// Your code goes here
/*if (age < 18) {
  alert(`Child`);
} else {
  alert(`Adult`);
}*/

if (age < 18 && foodChoice === "1") {
  alert(`Child Pizza`);
} else if (age < 18 && foodChoice === "2") {
  alert(`Child Pasta`);
} else if (age < 18 && foodChoice === "3") {
  alert(`Child Salad`);
} else if (age > 18 && foodChoice === "1") {
  alert(`Adult Pizza`);
} else if (age > 18 && foodChoice === "2") {
  alert(`Adult Pasta`);
} else if (age > 18 && foodChoice === "3") {
  alert(`Adult Salad`);
}
