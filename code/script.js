// Start here

// Step 1 - Welcome and introduction
// Your code goes here
/*alert(
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

if (foodChoice === "1") {
  let pizzaType = prompt(`Select a pizza type: Enter a number: 1 - Napolitana, 2 - Hawaian, 3 - Pepperoni`);
}

if (foodChoice === "1" && pizzaType === "1") {
  alert(`You have choosen napolitana`);
}

// Step 4 - Age
// Your code goes here
let age = prompt("Is this food for a child or an adult? Type your age:");

// Step 5 - Order confirmation
// Your code goes here
/*if (age < 18) {
  alert(`Child`);
} else {
  alert(`Adult`);
}

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
} */

// Step 1 - Welcome and introduction
alert("Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.");

// a) Fråga efter användarens namn
let userName = prompt("Please type your name");

// b) Visa ett välkomstmeddelande med användarens namn
alert("Hi and welcome, " + userName + "!");

// Step 2 - Food choice
let foodChoice = prompt("What type of food would you like to order? Enter a number:\n1. Pizza\n2. Pasta\n3. Salad");

let foodType;

if (foodChoice === "1") {
  foodType = "Pizza";
} else if (foodChoice === "2") {
  foodType = "Pasta";
} else if (foodChoice === "3") {
  foodType = "Salad";
} else {
  alert("Invalid choise! Please select a number between 1 and 3");
  foodType = "an invalid number";
}

alert("You have choosen: " + foodType);

// Step 3 - Subtype choice
let subType;

if (foodType === "Pizza") {
  subType = prompt("What type of pizza would you like?\n1. Margherita\n2. Vesuvio\n3. Capricciosa");
  if (subType === "1") subType = "Margherita";
  else if (subType === "2") subType = "Vesuvio";
  else if (subType === "3") subType = "Capricciosa";
  else subType = "an invalid numner. Please select a number between 1 and 3 to choose your type of";

} else if (foodType === "Pasta") {
  subType = prompt("What type of pasta would you like?\n1. Carbonara\n2. Bolognese\n3. Alfredo");
  if (subType === "1") subType = "Carbonara";
  else if (subType === "2") subType = "Bolognese";
  else if (subType === "3") subType = "Alfredo";
  else subType = "an invalid numner. Please select a number between 1 and 3 to choose your type of";

} else if (foodType === "Salad") {
  subType = prompt("What type of salad would you like?\n1. Caesarsalad\n2. Greek salad\n3. Chicken salad");
  if (subType === "1") subType = "Caesarsalad";
  else if (subType === "2") subType = "Greek salad";
  else if (subType === "3") subType = "Chicken salad";
  else subType = "an invalid numner. Please select a number between 1 and 3 to choose your type of";
}

alert("You have choosen " + subType + " " + foodType);

// Step 4 - Age
let ageGroup = prompt("Är maten till ett barn eller en vuxen? (Skriv 'barn' eller 'vuxen')");
let price;

if (ageGroup.toLowerCase() === "barn") {
  price = 60;
} else {
  price = 90;
}

let orderMessage = "You have orderd a " + subType + " " + foodType + " för en " + ageGroup + ".\nPris: " + price + " kr.";
alert(orderMessage);

// Step 5 - Order confirmation
let confirmOrder = prompt("Do you want to conform your? (yes/no)");

if (confirmOrder.toLowerCase() === "ja") {
  alert("Thank you for your order, " + userName + "! Your " + foodType + " will be prepared for you soon.");
} else {
  alert("No worries, " + userName + "! Please come back when you are hungry.");
}
