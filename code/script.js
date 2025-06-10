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
  if (subType === "1") subType = "Caesar";
  else if (subType === "2") subType = "Greek";
  else if (subType === "3") subType = "Chicken";
  else subType = "an invalid numner. Please select a number between 1 and 3 to choose your type of";
}

alert("You have choosen " + subType + " " + foodType);

// Step 4 - Age with number input
let age = prompt("Is the food for a child or an adult? Please type the age in numbers");

let ageGroup;
let price;

if (age < 12) {
  ageGroup = "child";
  price = 60;
} else {
  ageGroup = "adult";
  price = 90;
}

let orderMessage = "You have orderd a " + subType + " " + foodType + " for a " + ageGroup + ".\nPrice: " + price + " kr.";
alert(orderMessage);

// Step 5 - Order confirmation
let confirmOrder = prompt("Do you want to conform your? (yes/no)");

if (confirmOrder.toLowerCase() === "yes") {
  alert("Thank you for your order, " + userName + "! Your " + foodType + " will be prepared for you soon.");
} else {
  alert("No worries, " + userName + "! Please come back when you are hungry.");
}
