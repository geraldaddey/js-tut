// -------HELLO WORLD------------------
// alert("Hello World");

// document.getElementById("gerald").innerHTML = "You're a genius";

// --------------INITIALIZING VARIABLES--------------
// var myVariable = "hello" + 5;

// alert(myVariable);
// // result is "hello5"

// var customrerAge = 32;
// alert(myVariable + " " + customrerAge);

// ----------------OPERATORS-----------------------

// var iLikeMeat = true; INITIALIZING
// var myNewAge = 25;
// myNewAge += 25;
// // result is 50

// document.write(myNewAge);

// --------IF AND ELSE IF  STATEMENTS---------------------------------
// var myNewAge = 25;
// if (myNewAge > 25) {
//   document.write("you're over 25");
// } else if (myNewAge < 25) {
//   document.write("you're not over 25");
// }

// -----------LOGICAL OPEREATORS---------------
// var guestAge = 31;

// if (guestAge >= 20 && guestAge <= 30) {
//   document.write("You're a valid. Come in");
// } else {
//   document.write("Sorry mate you aint allowed");
// }

// if (guestAge <= 20 || guestAge < 30 || guestAge > 25) {
//   document.write("Welcome in Buddy");
// } else {
//   document.write("Sorry bro, You're not allowed in here");
// }

// ------------WHILE LOOP----------------
// var age = 5;

// while (age < 11) {
//   console.log("You are less than 10");

// //   to break the code
//   age++;
// }

// document.write("you are now over 10");

// -----------FOR LOOP------------

// for (newGuestAge = 5; newGuestAge < 10; newGuestAge++) {
//   console.log("you are less than 10");
// }

// document.write("You are now over 10");

// var links = document.getElementsByTagName("a");

// for (i = 0; i < links.length; i++) {
//   console.log("this is link number" + " " + 1);
// }

// document.write("You are out of links on the page");

// ---------------BREAK AND CONTINUE-------------------

// for (i = 0; i < 10; i++) {
//   if (i === 6) {

//     // tells the loop to continue without this code
//     continue;
//   }
//   console.log(i);

//   if (i == 7) {
//     break;
//   }
// }
// console.log("i have broken out of the loop");
// document.write("out of the loop baby");

// ---------------PRACTICAL EXAMPLE (LOOPS)--------------------------

// var links = document.getElementsByTagName("a");

// for (i = 0; i < links.length; i++) {
//   links[i].className = "link" + " " + i;
// }

// displays a  class name added to each a tag in the html file on the browser only**

// ----------------FUCNTIONS--------------

// function getAverage(a, b) {
//   var average = (a + b) / 2;
//   console.log(average);

//   document.write("the average of the numbers is" + " " + average);
// }

// getAverage(7, 12);

// EXAMPLE 2

// function getAverage(a, b) {
//   var average = (a + b) / 2;
//   console.log(average);

// //   you have to return the result for it to be used
//   return average;
// }

// var myResult = getAverage(7, 8);

// console.log("the average is " + myResult);

// ----------VARIABLE SCOPE----------------------
// function getAverage(a, b) {
//   var average = (a + b) / 2; //local variable
//   console.log(average);

//   //   you have to return the result for it to be used
//   return average;
// }

// var myResult = getAverage(7, 8); //global variable

// console.log("the average is " + myResult);

// function logResult() {
//   document.write("the new average is " + myResult + " in the function");
// }

// logResult();

// ----------------NaN-------------------

// var a = "apple";
// var b = 6;

// if (isNaN(a)) {
//   console.log("so you see a  is not a number");
// } else {
//   console.log("the meaning of this is " + a * b);
// }

// --------STRING--------------

// var myString = "Gerald";
// var newString = 'I am  a lot of "fun" sometimes';
// var anotherString = 'I sometiems don\'t know "what" to say to gerald';

// console.log(anotherString);
// console.log(myString.length);
// console.log(newString.toUpperCase());
// console.log(anotherString.indexOf("gerald"));

// if (anotherString.indexOf("gerald") === -1) {
//   console.log('the word "gerald" was not found in the string');
// } else {
//   console.log(
//     'the position of "gerald" is at  ' + anotherString.indexOf("gerald")
//   );
// }

// COMPARING STRINGS

// LOWERCASES ARE GREATER THAN UPPERACASES IN JAVASCRIPT

// var fname = "abc";
// var lname = "Bcd";

// console.log(fname > lname);

// --------SLICE AND SPLIT STRINGS----------

// var str = "hello world";
// var str1 = str.slice(0, 5);
// var str2 = str.slice(6, 11);

// console.log(str1 + " " + str2);

// var tags = "gerald, lily, sally, ronald, henry ";

// var tagsArray = tags.split(",");

// console.log(tagsArray);

// ------------ARRAYS------------

// var myArray = [];

// myArray[0] = "Gerald";
// myArray[2] = "Sally";
// myArray[1] = 25;
// myArray[4] = true;
// myArray[3] = "Ronald";

// var newArray = ["gereald", true, "ronald", 35, "sally"];

// console.log(newArray);

// -------------OBJECTS-----------

// SHORT-HAND

// var myCar2 = {
//   maxSpeed: 70,
//   driver: "Ronald",
//   drift: function (speed, time) {
//     console.log("THis user is drfiting this code at " + speed * time + "km/s");
//   },
// };

// console.log(myCar2.maxSpeed);
// myCar2.drift(50, 3);

// // --------THIS KEYWORD-------------

// var myBike = {
//   driverName: "Peter",
//   color: "white",
//   price: 120000,
//   logDriver: function () {
//     console.log(this.driverName + " is the name of the bike driver");
//   },
// };

// console.log(myBike.color);

// myBike.logDriver();

// var newClass = {
//   number: 200,
//   teacher: "Elizabeth",
//   course: "English",
//   level: "university",
//   prefects: 5,
//   classPresident: "Maria",

//   getClassPresident: function () {
//     console.log(this.classPresident + " is the name of the class president");
//   },

//   getCourse: function (params) {
//     console.log(
//       this.course +
//         " is the name of the course that " +
//         this.teacher +
//         " teaches"
//     );
//   },
// };

// newClass.getClassPresident();

// newClass.getCourse();

// ------------CONSTRUCTOR FUNCTIONS----------------
// they all start with capital letters

// var Car = function (speed, driverName, model, color) {
//   this.model = model;
//   this.speed = speed;
//   this.driverName = driverName;
//   this.color = color;

//   this.drive = function () {
//     console.log(
//       "this car is been driven by " +
//         this.driverName +
//         " and this car is a " +
//         this.color +
//         " " +
//         this.model +
//         " that runs at a speed of " +
//         this.speed +
//         "km/h"
//     );

//     this.distance = function (time, speed) {
//       console.log(
//         time * speed +
//           " is  the distance it takes for " +
//           this.driverName +
//           " to reach their destination"
//       );
//     };
//   };
// };

// var geraldCar = new Car(50, "Gerald", "BMW M4", "blue");
// geraldCar.drive();

// var ronaldCar = new Car(40, "Ronald", "Benz CLA", "black");
// ronaldCar.drive();

// var lilyCar = new Car(30, "Lily", "Nissan JUke", "pink");
// lilyCar.drive();

// lilyCar.distance(2, 8);

// geraldCar.distance(4, 20);

// -----------DATE OBJECT---------------

// var newDate = Date();
// console.log(newDate);

// var name = "Gerald";

// var myBirthDate = new Date(1999, 0, 27);
// console.log(myBirthDate + " is the day " + this.name + " was born");

// var name2 = "Twinnie";

// var twinBirthDtate = new Date(1999, 0, 27);
// console.log(myBirthDate + " is the day " + this.name2 + " was born");

// console.log(myBirthDate.getTime());

// if (myBirthDate.getTime() == twinBirthDtate.getTime()) {
//   console.log("you have the same birthdays");
// } else {
//   console.log("you don't have the same birthdays");
// }

// ---------------JAVASCRIPT DOM---------------

// var boxDivs = document.getElementsByClassName("container");

// var redText = boxDivs[0].getElementsByTagName("h2");

// redText[0].innerHTML = "JavaScript Red";

// var blueText = document.getElementById("bluebox");
// blueText.innerHTML = "JavaScript Blue";

// var greenText = boxDivs[2].getElementsByTagName("span");
// greenText[0].innerHTML = "JavaScript Green";

// -----------CHANGING PAGE CONTENT-------------------

var boxDivs = document.getElementsByClassName("container");

var redText = boxDivs[0].getElementsByTagName("h2");

redText[0].innerHTML = "JavaScript Red";

var blueText = document.getElementById("bluebox");
blueText.innerHTML = "JavaScript Blue";

var greenText = boxDivs[2].getElementsByTagName("span");
greenText[0].innerHTML = "JavaScript Green";

var greenBox = boxDivs[2].getElementsByTagName("div");
greenBox[0].onclick();
