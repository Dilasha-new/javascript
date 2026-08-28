// console.log(`Hello`);
// console.log(`I like pizza`);

// window.alert(`This is an alert`);
// window.alert(`I like pizza`)

// document.getElementById("myH1").textContent = `Hello`;
// document.getElementById("myP").textContent = `I like pizza!`;

// declaration let x;

// let x;
// x = 123;

// console.log(x);

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// let firstName = "Bro";
// let favoriteFood = "pizza"
// let email = "dilasha@gmail.com"


// console.log(typeof age)
// console.log(typeof firstName)
// console.log(`Your name is ${firstName}`)
// console.log(`You like ${favoriteFood}`)
// console.log(`Your email is ${email}`)
// console.log(`You are ${age} years old`);
// console.log(`The price is $${price}`);
// console.log(`Your gpa is ${gpa}`);

// let online = true;
// let forSale = true;

// console.log(`Bro is online: ${online}`);
// console.log(`Is this car for sale: ${forSale}`);

// let fullName = "Dilasha Sunuwar";
// let age = 25;
// let isStudent = false;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;

// let students = 30;
// // students = students + 1;
// students = students ** 2
// console.log(students)



// This is a comment

/* This
 is
 a
 comment */

//  let username;
//  username = window.prompt("what's your username?");
// const PI = 3.14159;
// let radius;
// let circumference;
// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;

// increaseBtn.onclick = function(){
//   count++;
//   countLabel.textContent = count;
// }

// decreaseBtn.onclick = function(){
//   count--;
//   countLabel.textContent = count;
// }

// resetBtn.onclick = function(){
//   count = 0
//   countLabel.textContent = count
// }

// document.getElementById("mySubmit").onclick = function(){
//   // username = document.getElementById("myText").value;
//   // document.getElementById("myH1").textContent = `Hello ${username}`
//   // radius = document.getElementById("myText").value ;
//   // radius = Number(radius);
//   // circumference = 2 * PI * radius;
//   // document.getElementById("myH3").textContent = circumference;
// }

// ludo
// const myButton = document.getElementById("myButton");
// const label1 = document.getElementById("label1");
// const label2 = document.getElementById("label2");
// const label3 = document.getElementById("label3");
// const min = 1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function(){
//   randomNum1 = Math.floor(Math.random() * max) + min;
//   randomNum2 = Math.floor(Math.random() * max) + min;
//   randomNum3 = Math.floor(Math.random() * max) + min;
//   label1.textContent = randomNum1;
//   label2.textContent = randomNum2;
//   label3.textContent = randomNum3;
// }

// const myCheckBox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const mastercardBtn = document.getElementById("mastercardBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function(){

//   if(myCheckBox.checked){
//     subResult.textContent = `you are subscribed`
//   }
//   else{
//     subResult.textContent = `you are not subscribed`
//   }
//   if(visaBtn.checked){
//     paymentResult.textContent = `you are paying with visa`;
//   }
//   else if(mastercardBtn.checked){
//     paymentResult.textContent = `you are paying with master card`;
//   }
//   else if(payPalBtn.checked){
//     paymentResult.textContent = `you are paying with paypal`;
//   }
//   else{
//     paymentResult.textContent = `you must select a payment type`;
//   }
// }

// let age = 21;
// let message = age >= 18 ? "you're an adult" : "you're a minor";

// let time = 9;
// let greeting = time < 12 ? "Good morning" : "Good afternoon";
// let isStudent = true;
// let message = isStudent ? "You are a student" : "You are not a student";
// console.log(message);

// let purchaseAmount = 125;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);


// let day = 1;

// switch(day){
//     case 1:
//       console.log("It is monday");
//       break;
//     case 2:
//       console.log("It is tuesday");
//       break;
//     case 3:
//       console.log("It is wednesday");
//       break;
//     case 4:
//       console.log("It is thursday");
//       break;
//     case 5:
//       console.log("It is friday");
//       break;
//     case 6:
//       console.log("It is saturday");
//       break;
//     case 7:
//       console.log("It is sunday");
//       break;
//     default:
//       console.log(`${day} is not a day`)
//  }

// let testScore = 92;
// let letterGrade;

// switch(true){
//   case testScore >= 90:
//     letterGrade = "A";
//     break;
// }
// console.log(letterGrade);

// string methods

// let userName = "    BroCode";

// char = userName.charAt(0);
// console.log(char);

// console.log(userName.indexOf("o"));
// console.log(userName.length);

// userName = userName.trim();
// console.log(userName)

// userName = userName.repeat(3);
// console.log(userName)

// userName = userName.includes("b");
// userName = userName.padStart(15, "b"); position, character
// userName = userName.padEnd();

// const fullName = "Bro Code";
// let firstName = fullName.slice(0, 2); (inclusive, exclusive)
// let lastName = fullName.slice(4, 8)
// console.log(firstName)
// fullName.slice(0, fullName.indexOf(" "));
// fullName.slice(fullName.indexOf(" ") + 1); // sliced all the things after " " 

// const email = "Bro@gmail.com"

// let username = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1)
// console.log(username);
// console.log(extension);

// method chaining

// userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLocaleLowerCase()
// console.log(username);

// guessing game

// const minNum = 50;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
// // console.log(answer);
// let attempts = 0;
// let guess;
// let running = true;

// while(running){
//   guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
//   guess = Number(guess);
//   if (isNaN(guess)){
//     window.alert("Please enter a valid number");
//   }
//   else if(guess < minNum || guess > maxNum){
//     window.alert("Please enter a valid number");
//   }
//   else {
//       attempts++;
//       if(guess < answer){
//         window.alert("Too low try again");
//       }
//       else if(guess > answer){
//         window.alert("too high try again")
//       }
//       else{
//         window.alert(`correct! the answer was ${guess}. It took you ${attempts} guesses` );
//           running = false;
//       }
//     }

// }

// const textBox = document.getElementById("textBox");

// const textBox = document.getElementById("textBox");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelsius = document.getElementById("toCelsius");
// const result = document.getElementById("result");
// let temp;


// function convert(){
//   if(toFahrenheit.checked){
//     temp = Number(textBox.value);
//     temp = temp * 9/5 + 32;
//     result.textContent = temp.toFixed(1) + "F";
//   }
//   else if(toCelsius.checked){
//     temp = Number(textBox.value);
//     temp = (temp - 32) * 5/9;
//     result.textContent = temp.toFixed(1) + "C";
//   }
//   else{
//     result.textContent ="Select a unit"
//   }
// }

// const matrix = [[1, 2, 3],
//                 [4, 5, 6],
//                 [7, 8, 9],
//                 ['*', 0, '#']];

// matrix[0][0] = 'x';
// matrix[0][1] = 'o';
// matrix[0][2] = 'x';

// matrix[1][0] = 'o';
// matrix[1][1] = 'x';
// matrix[1][2] = 'o';

// matrix[2][0] = 'x';
// matrix[2][1] = 'o';
// matrix[2][2] = 'x';

// for(let row of matrix){
//   const rowString = row.join(' ');
//   console.log(rowString);
// }

// let username = "Bro Code";
// let letters = [...username].join('-');

// console.log(letters);

// let fruits = ["apple", "orange", "banana"]

// sum of numbers using rest

// function sum(...numbers){
//   let result = 0;
//   for(let number of numbers){
//     result += number;
//   }
//   return result;
// }
// const total = sum(5, 6, 7)
// console.log(total);


// function sum(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }

// // const numbers = [5, 6, 7];
// console.log(sum([5, 6, 7]));

// function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

//   const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//   const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const numberChars = "0123456789";
//   const symbolChars = "!@#$%^&*()_-{}[]"
//   let allowedChars = "";
//   let password = "";
//   allowedChars += includeLowercase ? lowercaseChars : "";
//   allowedChars += includeUppercase ? uppercaseChars : "";
//   allowedChars += includeNumbers ? numberChars : "";
//   allowedChars += includeSymbols ? symbolChars : "";

//   if(length <= 0) {
//     return `(password length must be at least 1)`
//   }
//   if(allowedChars.length === 0){
//     return `(at least 1 set of character needs to be selected)`;
//   }
//   for(let i = 0; i < length; i++){
//     const randomIndex = Math.floor(Math.random() * allowedChars.length);
//     password += allowedChars[randomIndex];
//   }
//   // console.log(allowedChars)
//   return password;
  
// }


// const passwordLength = 12;
// const includeLowercase = true;
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols)
// console.log(`Generated password: ${password}`)

// hello(goodbye);
// function hello(callback){
  
//   console.log("hello!");
//   callback();
// }

// function wait(){
//   console.log("wait");
// }

// function leave(){
//   console.log("Leave!");
// }

// function goodbye(){
//   console.log("Goodbye!");
// }

// sum(displayConsole, 1, 2);
// function sum(callback, x, y){
//   let result;
//   result = x + y;
//   callback(result);
// }

// function displayConsole(result){
//   console.log(result);
// }

// function displayPage(result){
//   document.getElementById("h1").textContent = result;
// }

// let numbers = [1, 2, 3, 4, 5];

// // numbers.forEach((double));
// // numbers.forEach((triple));
// // numbers.forEach(square);
// numbers.forEach(cube);
// numbers.forEach(display);
// // function double(element, index, array){
// //   array[index] = element * 2;
// // }

// // function triple(element, index, array){
// //   array[index] = element * 3;
// // }

// // function square(element, index, array){
// //   array[index] = Math.pow(element, 2);
// // }

// function cube(element, index, array){
//   array[index] = Math.pow(element, 3);
// }

// function display(element){
//   console.log(element);
// }

// let fruits = ["apple", "orange", "banana", "coconut"]
// fruits.forEach(upperCase)
// fruits.forEach(display);

// function upperCase(element, index, array){
//   array[index] = element.toUpperCase();
// }

// function display(element){
//   console.log(element);
// }

// const numbers = [1, 2, 3, 4, 5];
// const numbers.map(square);

// function square(element){
//   return Math.pow(element, 2)
// }

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);
// const cubes = numbers.map(cube);

// console.log(cubes);

// function square(element){
//   return Math.pow(element, 2)
// }

// function cube(element){
//   return Math.pow(element, 3)
// }

// const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
// const studentUpper = students.map(upperCase);
// const studentsLower = students.map(lowerCase);
// console.log(studentsLower);

// function upperCase(element){
//   return element.toUpperCase();
// }

// function lowerCase(element){
//   return element.toLowerCase();
// }

// const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
// const formattedDates = dates.map(formatDates);
// console.log(formattedDates);

// function formatDates(element){
//   const parts = element.split("-");
//   return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);

// console.log(evenNums);
// console.log(oddNums)

// function isEven(element){
//   return element % 2 === 0; 
// }

// function isOdd(element){
//   return element % 2 !== 0; 
// }

// const ages =[16, 17, 18, 19, 20, 60];
// const  adults = ages.filter(isAdult);
// const children = ages.filter(isChild);

// console.log(adults);
// console.log(children);

// function isAdult(element){
//   return element >= 18;
// }

// function isChild(element){
//   return element < 18;
// }

// const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
// const shortWords = words.filter(getShortWords);
// const longWords = words.filter(getLongWords);

// console.log(shortWords);
// console.log(longWords);

// function getShortWords(element){
//   return element.length <= 6;
// }

// function getLongWords(element){
//   return element.length > 6;
// }

// const prices = [5, 30, 10, 25, 15, 20];
// const total = prices.reduce(sum);
// console.log(`$${total.toFixed(2)}`)

// function sum(previous, next){
//   return previous + next;
// }

// const grades = [75, 50, 90, 80, 65, 95];
// const maximum = grades.reduce(getMax);
// console.log(maximum);



// function getMax(previous, next){
//   return Math.max(previous, next);
// }

// const hello = function(){
//   console.log("Hello");
// }

// hello();

// function sum(b, c){
//   let a = b + c;
//   return a;
  
// }

// const total = sum(5, 6);
// console.log(total);

// const sum = function(b, c){
//   let a = b + c;
//   return a;
// }

// console.log(sum(5, 6));

// setTimeout(useCallback, time waiting before next callback)
// function hello(){
//   console.log("hello")
// }

// setTimeout(hello, 3000);


// setTimeout(function(){
//   console.log("hello")
// }, 3000);

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);

// console.log(squares);


// function square(element){
//   return Math.pow(element, 2);
// }

// const numbers = [1, 2, 3, 4, 5];
// // const squares = numbers.map(function(element){
// //   return Math.pow(element, 2);
// // });
// // const cube = numbers.map(function(element){
// //   return Math.pow(element, 3);
// // });
// const isEven = numbers.filter(function(element){
//   return element % 2 === 0;
// });
// console.log(isEven);
// const hello = (name, age) => {console.log(`hello ${name}`)
// console.log(`you are ${age} years old`)};

// hello("dilasha", 25);

// setTimeout(() => {
//   console.log("hello");
// }, 3000);

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map((element) => Math.pow(element, 2));
// console.log(squares);


// const squares = numbers.map(function(element){
//   return Math.pow(element, 2);
// });
// console.log(squares);
 // const squares = numbers.map(function(element){
// //   return Math.pow(element, 2);
// // });


// const squares = numbers.map(square);
// function square(element){
//   return Math.pow(element, 2);
// }
// console.log(squares);

// const square = numbers.map(Math.pow(element, 2));
// console.log(square)

// const numbers = [1, 2, 3, 4, 5, 6];

// const squares = numbers.map((element) => Math.pow(element, 2));
// console.log(squares);

// const cubes = numbers.map(function (element) {
//   return Math.pow(element, 3);
// });
// console.log(cubes)

// const squares1 = numbers.map(square)

// function square(element){
//   return Math.pow(element, 2);
// }
// console.log(squares1);

// const evenNums = numbers.filter((element) => element % 2 === 0);
// const oddNums = numbers.filter((element) => element % 2 !== 0);
// const total = numbers.reduce((previous, next) => previous + next);
// console.log(evenNums);
// console.log(oddNums);
// console.log(total);

// const person1 = {
//   firstName: "Spongebob",
//   lastName: "Squarepants",
//   age: 30,
//   isEmployed: true,
//   sayHello: function(){console.log("Hi!")}
// }
// const person2 = {
//   firstName: "Patrick",
//   lastName: "Star",
//   age: 42,
//   isEmployed: false
// }

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person2.firstName);
// console.log(person2.lastName);
// person1.sayHello();

// const person1 = {
//   name: "spongebob",
//   favFood: "hamburgers",
//   sayHello: function(){console.log(`Hi! I am ${this.name}`)}
// }

// person1.sayHello();

// function Car(make, model, year, color){
//   this.make = make,
//   this.model = model,
//   this.year = year,
//   this.color = color
// }

// const car1 = new Car("ford", "mustand", 2024, "red")
// console.log(car1.make);

// class Product{
//   constructor(name, price){
//     this.name = name;
//     this.price = price;
//   }
//   displayProduct(){
//     console.log(`Product: ${this.name}`);
//     console.log(`Price: $${this.price.toFixed(2)}`);
//   }
//   calculateTotal(salesTax){
//     return this.price + (this.price * salesTax);
//   }
  
// }

// const product1 = new Product("Shirt", 19.99);
// product1.displayProduct();
// const total = product1.calculateTotal(0.05);
// console.log(`Total price (with tax): $${total.toFixed(2)}`);

// class MathUtil{
//   static PI = 3.14159;
//   static getDiameter(radius){
//     return radius * 2;
//   }
//   static getCircumference(radius){
//     return 2 * this.PI * radius;
//   }
//   static getArea(radius){
//     return this.PI * radius * radius;
//   }
// }
// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));

// class User{
//   static userCount = 0;
//   constructor(username){
//     this.username = username;
//     User.userCount++;
//   } 
//   static getUserCount(){
//     console.log(`There are ${User.userCount} users online`)
//   }
// }

// const user1 = new User("Spongebob");
// console.log(user1.username);
// console.log(User.userCount);
// User.getUserCount();

// class Animal{
//   alive = true;
//   eat(){
//     console.log(`Thia ${this.name} is eating`);
//   }
//   sleep(){
//     console.log(`This ${this.name} is sleeping`);
//   }
// }

// class Rabbit extends Animal{
//   name = "rabbit";

//   run(){
//     console.log(`This ${this.name} is running.`)
//   }
// }
// class Fish extends Animal{
//   name = "Fish";
//   swim(){
//     console.log(`This ${this.name} is swimming`);
//   }
// }
// class Hawk extends Animal{
//   name = "hawk";
//   fly(){
//     console.log(`This ${this.name} is flying`);
//   }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// rabbit.alive = false;
// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.run();
// fish.eat();
// fish.swim();
// console.log(fish.alive);

// class Animal{
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }
//   move(speed){
//     console.log(`The ${this.name} moves at a speed of ${speed}mph`);
//   }
// }
// class Rabbit extends Animal{

//   constructor(name, age, runSpeed){
//     super(name, age);
//     this.runSpeed = runSpeed;
//   }
//   run(){
//     console.log(`This ${this.name} can run`)
//     super.move(this.runSpeed)
//   }

// }
// class Fish extends Animal{
//   constructor(name, age, swimSpeed){
//     super(name, age);
//     this.swimSpeed = swimSpeed;
//   }
//   swim(){
//     console.log(`This ${this.name} can swim`)
//   }
// }
// class Hawk extends Animal{
//   constructor(name, age, flySpeed){
//     super(name, age);
//     this.flySpeed = flySpeed;
//   }
// }

// const rabbit = new Rabbit("rabbit", 1, 25);
// console.log(rabbit.name);
// rabbit.run();

// getter and setter

// class Rectangle{
//   constructor(width, height){
//     this.width = width;
//     this.height = height;
//   }

//   set width(newWidth){
//     if(newWidth > 0){
//       this._width = newWidth;
//     }
//     else{
//       console.error("width must be a positive number");
//     }
//   }
//   set height(newheight){
//     if(newheight > 0){
//       this._height = newheight;
//     }
//     else{
//       console.error("height must be a positive number");
//     }
//   }

//   get width(){
//     return `${this._width.toFixed(1)}cm`;
//   }

//   get height(){
//     return `${this._height.toFixed(1)}cm`;
//   }

//   get area(){
//     return `${(this._width * this._height.toFixed(1))}cm`;
//   }
// }

// rectangle = new Rectangle(3, 4);

// rectangle.height = -100;
// rectangle.width = "pizza";
// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

// class Person{
//   constructor(firstName, lastName, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   set firstName(newFirstName){
//     if(typeof newFirstName === "string" && newFirstName.length > 0){
//       this._firstName = newFirstName; 
//     }
//     else{
//       console.log("First name must be a non-empty string");
//     }
//   }

//   set lastName(newLastName){
//     if(typeof newLastName === "string" && newLastName.length > 0){
//       this._lastName = newLastName; 
//     }
//     else{
//       console.log("Last name must be a non-empty string");
//     }
//   }
//   set age(newAge){
//     if(typeof newAge == "number" && newAge >= 0){
//       this._age = newAge; 
//     }
//     else{
//       console.error("Age must be a non-negative number");
//     }
//   }
//   get firstName(){
//     return this._firstName;
//   }

//   get lastName(){
//     return this._lastName;
//   }
//     get age(){
//     return this._age;
//   }

//   get fullName(){
//     return this._firstName + " " + this._lastName;
//   }

// }

// const person = new Person("Rabin", "Shrestha",33);
// console.log(person.firstName)
// console.log(person.age)
// console.log(typeof(person.age))

// destructoring

// let a = 1;
// let b = 2;

// [a, b] =[b, a];

// console.log(a);
// console.log(b);

// const colors = ["red", "green", "blue", "black", "white"];

// // [colors[0], colors[4]] =[colors[4], colors[0]];
// // console.log(colors);

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(...extraColors);

// extract values from objects

// const person1 ={
//   firstName: "Spongebob",
//   lastName: "Squarepants",
//   age: 30,
//   job: "Fry Cook",
// }
// const person2 ={
//   firstName: "Patrick",
//   lastName: "Star",
//   age: 34,
// }

// const {firstName, lastName, age, job} = person1;

// destructuring in function parameters

// function displayPerson({firstName, lastName, age, job="Unemployed"}){
//   console.log(`name: ${firstName} ${lastName}`);
//   console.log(`age: ${age}`);
//   console.log(`job: ${job}`);
// }

// const person1 = {
//   firstName: "Spongebob",
//   lastName: "Squarepants",
//   age: 30,
//   job: "Fry Cook",
// }

// const person2 = {
//   firstName: "Patrick",
//   lastName: "Star",
//   age: 34,
// }

// displayPerson(person1);

// nested object

// function displayPerson({address}){
//   console.log(address);
// }

// const person = {
//   fullName: "Spongebob Squarepants",
//   age: 30,
//   isStudent: true,
//   hobbies: ["karate", "jellyfishing", "cooking"],
//   address: {
//     street: "124 Conch St.",
//     city: "Bikini Bottom",
//     country: "Int. Water"
//   }
// }

// for(const property in person.address){
//   console.log(person.address[property]);
// }


// displayPerson(person);
// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[2]);
// console.log(person.address)

// class Person{
//   constructor(name, age, ...address){
//     this.name = name;
//     this.age = age;
//     this.address = new Address(...address);
//   }
// }

// class Address{

//   constructor(street, city, country){
//     this.street = street;
//     this.city = city;
//     this.country = country;
//   }
// }

// const person1 = new Person("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters")
// const person2 = new Person("Patrick", 37, "124 Conch St.", "Bikini Bottom", "Int. Waters")
// const person3 = new Person("Squidward", 45, "124 Conch St.", "Bikini Bottom", "Int. Waters" )
// console.log(person3.address.city);

// array of objects

// const fruits =[{name: "apple", color: "red", calories: 95},
//   {name: "orange", color: "orange", calories: 45},
//   {name: "banana", color: "yellow", calories: 105},
//   {name: "coconut", color: "white", calories: 95},
//   {name: "pineapple", color: "red", calories: 95}

// ];
// console.log(fruits[0].name)

// fruits.push({name: "grapes", color: "purple", calories: 62});
// console.log(fruits);

// foreach
// fruits.forEach(fruit =>  console.log(fruit.name));

//----------- map -----------

// const fruitNames = fruits.map(fruit => fruit.name);
// const fruitColors = fruits.map(fruit => fruit.color);
// const fruitCalories = fruits.map(fruit => fruit.calories);
// console.log(fruitNames);
// console.log(fruitColors);
// console.log(fruitCalories);

// ------ filter -------
// const yellowFruits = fruits.filter(fruit => fruit.color == "yellow");
// console.log(yellowFruits);

// ------- reduce -------
// const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? 
// fruit : max);
// console.log(maxFruit);

// sort

// let numbers = [1, 10, 9, 2, 3, 8, 4, 7, 5, 6];
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// ---------- sorting object by given property -----

// const people = [{name: "Spongebob", age: 30, gpa: 3.0},
//   {name: "Patrick", age: 37, gpa: 1.5},
//   {name: "Squidward", age: 51, gpa: 2.5},
//   {name: "Sandy", age: 27, gpa: 4.0}

// ]
// // people.sort((a, b) => a.age - b.age);
// people.sort((a, b) => a.name.localeCompare(b.name)); // ascending order for names
// console.log(people)

// Fisher-Yates algorithm

// const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'J', 'Q', 'K'];

// shuffle(cards)

// console.log(cards);
// function shuffle(array){
//   for(let i = array.length - 1; i > 0; i--){
//     const random = Math.floor(Math.random() * (i + 1));
//     [array[i], array[random]] = [array[random], array[i]]
//   }
// }

// const date = new Date();

// console.log(date);          

// closure used with function based components

// function outer(){

//   let message = "Hello";
//   function inner(){
//     console.log(message);
//   }
//   inner();
// }

// outer();


// function createCounter(){
//   let count = 0;
//   function increment(){

//   count++;
//   console.log(`Count increased to ${count}`)
//   }

//   function getCount(){
//     return count;
//   }

//   return {increment, getCount}; // returning property, object containing the variable

// }
// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();


// console.log(`The current count is ${counter.getCount()}`);



// function createGame(){
//   let score = 0;

//   function increaseScore(points){
//     score += points;
//     console.log(`+${points}pts`);
//   }

//   function decreaseScore(points){
//     score -= points;
//     console.log(`-${points}pts`)
//   }

//   function getScore(){
//     return score;
//   }

//   return {increaseScore, decreaseScore, getScore}

// }
// const game = new createGame();

// game.increaseScore(5);
// game.increaseScore(6);
// game.decreaseScore(3);
// console.log(`The final score is ${game.getScore()}`);

// setTimeout()

// function sayHello(){
//   window.alert("Hello");
// }
// setTimeout(sayHello, 3000);

// const timeoutId = setTimeout(function(){window.alert("Hello")}, 3000);

// clearTimeout(timeoutId);

// let timeoutID;
// function startTimer(){
//   timeoutId = setTimeout(() => window.alert("Hello"), 3000);
//   console.log("STARTED");
// }

// function clearTimer(){
//   clearTimeout(timeoutID);
//   console.log("CLEARED");
// }

// console.time("test")
// for(let i = 0; i < 1000000; i++){
//   // 
// }
// console.timeEnd("test");

// function loadData(){
//   console.time("loadData");
//   for(let i = 0; i< 1000000000; i++);{

//   }
//   console.timeEnd("loadData");
// }

// function processData(){
//   console.time("processData");
//   for(let i = 0; i< 1000000000; i++);{

//   }
//   console.timeEnd("processData");
// }
// loadData();
// processData();

// let number = 123456.789;
// // number = number.toLocaleString("en-US");
// // number = number.toLocaleString("hi-IN");
// // number = number.toLocaleString("de-DE");
// // number = number.toLocaleString(undefined);//viewers browser format
// // number = number.toLocaleString("en-US", {style: "currency", currency: "USD"});
// number = number. 
// console.log(number);

// calculator

// function calculate(){
//   const totalAmount = document.getElementById("total-amount");
//   const principalInput = document.getElementById("principal");
//   const rateInput = document.getElementById("rate");
//   const yearsInput = document.getElementById("years");

//   let principal = Number(principalInput.value);
//   let rate = Number(rateInput.value/100);
//   let years = Number(yearsInput.value);

//   if(principal < 0 || isNaN(principal)){
//     principal = 0;
//     principalInput.value =0;

//   }
//   if(rate <0 || isNaN(rate)){
//     rate =0;
//     rateInput.value = 0;
//   }
//   if(years<0 || isNaN(years)){
//     years =0;
//     yearsInput.value = 0;
//   }

//   const result = principal * Math.pow((1+rate/1), 1* years);
//   totalAmount.textContent = result.toLocaleString(undefined, {style: "currency", currency: "USD"});
// }

// clock
// function updateClock(){
//   const now = new Date();
//   let hours = now.getHours();
//   const meridian = hours >= 12 ? "PM" : "AM"
//   hours = hours % 12 || 12;
//   hours = hours.toString().padStart(2, 0);
//   const minutes = now.getMinutes().toString().padStart(2, 0);
//   const seconds = now.getSeconds().toString().padStart(2, 0);
//   const timeString = `${hours}:${minutes}:${seconds}${meridian}`;
//   document.getElementById("clock").textContent = timeString;
// }
// updateClock();
// setInterval(updateClock, 1000);

// stopwatch

// const display = document.getElementById("display");
// let timer = null;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;

// function start(){
//   if(!isRunning){
//     startTime = Date.now() - elapsedTime;
//     timer = setInterval(update, 10)
//     isRunning = true;
//   }
 
// }
// function stop(){
//   if(isRunning){
//     clearInterval(timer);
//     elapsedTime = Date.now() - startTime;
//     isRunning = false;
//   }

// }

// function reset(){
//   clearInterval(timer);
//   startTime = 0;
//   elapsedTime = 0;
//   isRunning = false;
//   display.textContent = "00:00:00:00"
//   }

// function update(){
//   const currentTime = Date.now();
//   elapsedTime = currentTime - startTime;
//   let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//   let minutes = Math.floor(elapsedTime/(1000*60)%60)
//   let seconds = Math.floor(elapsedTime/ 100 %60);
//   let milliseconds = Math.floor(elapsedTime % 1000 /10)

//   hours = String(hours).padStart(2, "0");
//   minutes = String(minutes).padStart(2, "0");
//   seconds = String(seconds).padStart(2, "0");
//   milliseconds = String(milliseconds).padStart(2, "0");
//   display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
// }

// es6 modules

// import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

// console.log(PI);
// const circumference = getCircumference(10);
// const area = getArea(10);
// const volume = getVolume(10);
// console.log(`${circumference.toFixed(2)}cm`);

// function func1(callback){
//   setTimeout(() => {console.log("Task 1");
//     callback()}, 3000);
  
// }

// function func2(){
//   console.log("Task 2");
//   console.log("Task 3");
//   console.log("Task 4");
// }

// func1(func2);


// error
// network errors
// promise rejection
// security errors

// try{
//       console.log(x);
// }
// catch(error){
//   console.error(error);
// }
// finally{
//   // closing Files
//   // close connections
//   // release resources
// }

// console.log("You have reached the end");

// try {
//   const dividend = Number(window.prompt("Enter a dividend: "));
//   const divisor = Number(window.prompt("Enter a divisor: "))

//   if(divisor === 0){
//     throw new Error("You can't divide by zero!");
//   }
//   if(isNaN(dividend) || isNaN(divisor)){
//     throw new Error("Values must be a number");
//   }

//   const result = dividend / divisor;
//   console.log(result);
// }
// catch(error){
//   console.log(error);
// }

// const display = document.getElementById("display");

// function appendToDisplay(input){
//   display.value += input;
// }
// function clearDisplay(){
//   display.value = "";
// }

// function calculate(){
//   try{
//     display.value = eval(display.value);
//   }
//   catch(error){
//     display.value = "Error";
//   }
  
// }

// const myBox = document.getElementById("myBox");

// function changeColor(e){
//   event.target.style.backgroundColor = "tomato"
// }
// myBox.addEventListener("click", function changeColor(e){
//   event.target.st yle.backgroundColor = "tomato"
// });
// myBox.addEventListener("click", e => {
//   event.target.style.backgroundColor = "tomato"
// });
// const myBox = document.getElementById("myBox");
// const moveAmount = 10;
// let x = 0;
// let y = 0;

// document.addEventListener("keydown", e => {
//   if(e.key.startsWith("Arrow")){
//     switch(e.key){
//       case "ArrowUp":
//         y -= moveAmount;
//         break;
//       case "ArrowDown":
//         y += moveAmount;
//         break;
//       case "ArrowLeft":
//         x -= moveAmount;
//         break;
//       case "ArrowRight":
//         x += moveAmount;
//         break;
//     }
//     myBox.style.top = `${y}px`;
//     myBox.style.left = `${x}px`;
//   }
// });

// const myButton = document.getElementById("myButton");
// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");

// const choices =["rock", "paper", "scissors"];
// const playerDisplay = document.getElementById("playerDisplay");
// const computerDisplay = document.getElementById("computerDisplay");
// const resultDisplay = document.getElementById("resultDisplay");
// const playerScoreDisplay = document.getElementById("playerScoreDisplay");
// const computerScoreDisplay = document.getElementById("computerScoreDisplay");
// let playerScore = 0;
// let computerScore = 0;

// function playGame(playerChoice){
//   const computerChoice = choices[Math.floor(Math.random()*3)];
//   // console.log(computerChoice)
//   if(playerChoice === computerChoice){
//     result = "It's a tie!"
//   }
//   else{
//     switch(playerChoice){
//       case "rock":
//         result = (computerChoice === "scissors") ? "You win" : "You lose";
//       break;
//       case "paper":
//         result = (computerChoice === "rock") ? "You win" : "You lose";
//         break;
//       case "scissors":
//          result = (computerChoice === "paper") ? "You win" : "You lose";
//         break;

//     }
//   }
//   playerDisplay.textContent = `PLAYER: ${playerChoice}`;
//   computerDisplay.textContent = `Computer: ${computerChoice}`;
//   resultDisplay.textContent = result;
//   resultDisplay.classList.remove("greenText", "redText")

//   switch(result){
//     case "You win":
//       resultDisplay.classList.add("greenText");
//       playerScore++;
//       playerScoreDisplay.textContent = playerScore;
//       break;
//     case "You lose":
//       resultDisplay.classList.add("redText");
//       computerScore++;
//       computerScoreDisplay.textContent = computerScore;
//       break;

//   }

// }


// const slides = document.querySelectorAll(".slides img");

// let slideIndex = 0;
// let intervalId = null;

// document.addEventListener("DOMContentLoaded", initializeSlider);


// function initializeSlider() {
//     if (slides.length > 0) {
//         slides[slideIndex].classList.add("displaySlide");
//         intervalId = setInterval(nextSlide, 5000);
//         console.log(intervalId)
//     }
// }

// function showSlide(index) {

//   if(index >= slides.length){
//     slideIndex = 0;
//   }
//   else if(index < 0){
//     slideIndex = slides.length - 1;
//   }

//   slides.forEach(slide => {
//     slide.classList.remove("displaySlide");
//   });
//   slides[slideIndex].classList.add("displaySlide");
  
//   }

   

// function prevSlide() {
//     slideIndex--;
//     showSlide(slideIndex);
// }

// function nextSlide() {
//     slideIndex++;
//     showSlide(slideIndex);
// }


// promises

// function walkDog(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dogwalked = true;
//       if(dogwalked){
//         resolve("You walk the dog");
//       }
//       else{
//         reject("You didn't walk the dog");
//       }
 
//     },1500);
//   });
// }

// function cleanKitchen(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {

//       const kitchenCleaned = true;

//       if(kitchenCleaned){
//         resolve("You clean the kitchen");
//       }
//       else{
//         reject("You didn't clean the kitchen");
//       }

      
//     }, 2500); 
//   });
// }

// function takeoutTrash(){

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {

//       const trashTakOout = false;
//       if(trashTakOout){
//         resolve("You take out trash");
//       }
//       else{
//         reject("You didn't take out the trash");
//       }
      
//     }, 500);
//   });
// }

// walkDog().then(value => {console.log(value); return cleanKitchen()}).then(value => {console.log(value); return takeoutTrash()}).then(value => {console.log(value); console.log("You finished all the chores!")}).catch(error => console.error(error));

// async function doChores(){

//   try{
//       const walkDogResult = await walkDog();
//       console.log(walkDogResult);

//       const cleanKitchenResult = await cleanKitchen();
//       console.log(cleanKitchenResult);

//       const takeoutTrashResult = await takeoutTrash();
//       console.log(takeoutTrashResult);

//       console.log("You finished all the result")

//   }
//   catch(error){
//     console.error(error);
//   }


// }

// doChores()

// const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
// const person = `{"name": "Spongebob", "age": 30, "isEmployed": true,   "hobbies": ["Jellyfishing", "karate", "Cookingl"] }`;
// const jsonPeople = `[{ "name": "Spongebob", "age": 30, "isEmployed": true},
//                 { "name": "Patrick", "age": 34, "isEmployed": false },
//                 { "name": "Squidward", "age": 50, "isEmployed": true},
//                 { "name": "Sandy", "age": 27, "isEmployed": false}
//                 ]`;

// const jsonString = JSON.stringify(names);

// console.log(jsonString);

// const parsedData = JSON.parse(jsonPeople);

// console.log(jsonPeople);
// console.log(parsedData);

// fetch("person.json").then(response => response.json()).then(value => console.log(value))

// fetch("people.json")
// .then(response => response.json())
// .then(values => values.forEach(value => console.log(value.name))).catch(error => console.error(error));

// cookie

// console.log(navigator.cookieEnabled);

// document.cookie = "firstName=Spongebob; expires=Sun 1 January 2030 12:00:00 UTC; path=/";
// // document.cookie = "lasttName=Squarepants; expires=Sun 1 January 2030 12:00:00 UTC; path=/";

// console.log(document.cookie);

// deleteCookie("email");
// deleteCookie("firstName");
// deleteCookie("lastName");
// console.log(document.cookie);

// const firstText = document.querySelector("#firstText");
// const lastText = document.querySelector("#lastText");
// const submitBtn = document.querySelector("#submitBtn");
// const cookieBtn = document.querySelector("#cookieBtn");

// submitBtn.addEventListener("click", () => {
//   setCookie("firstName", firstText.value, 365);
//    setCookie("firstName", lastText.value, 365);
// });
// cookieBtn.addEventListener("click", () => {
//   firstText.value = getCookie("firstName");
//   lastText.value = getCookie("lastName");
// });

// setCookie("firstName", "Spongebob", 365);
// setCookie("lastName", "Squarepants", 365);
// console.log(getCookie("firstName"));
// console.log(getCookie("lastName"));

// deleteCookie("firstName");
// deleteCookie("lastName");
// function setCookie(name, value, daysToLive){
//   const date = new Date();
//   date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
//   let expires = "expires=" + date.toUTCString();
//   document.cookie = `${name}=${value}; ${expires}; path=/`
// }

// function deleteCookie(name){
//   setCookie(name, null, null);
// }
// function getCookie(name){
//   const cDecoded = decodeURIComponent(document.cookie);
//   // console.log(cDecoded);
//   const cArray = cDecoded.split(";");
//   let result = null;
//   // console.log(cArray);
//   cArray.forEach(element => {
//      element = element.trim();
//     if(element.indexOf(name) == 0){
//       result = element.substring(name.length + 1)
//     }
//   })
//   return result;
// }

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then(response => {
//   if(!response.ok){
//     throw new Error("could not fetch resource");
//   }
//   return response.json();

// })
// .then(data => console.log(data.name))
//         .catch(error => console.error(error));

// fetchData();

// async function fetchData(){

//   try{

//       const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
//       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

//       if(!response.ok){
//         throw new Error("Could not fetch resource");
//       }
//       const data = await response.json();
//       // console.log(data);
//       const pokemonSprite = data.sprites.front_default;
//       const imgElement = document.getElementById("pokemonSprite");

//       imgElement.src = pokemonSprite;
//       imgElement.style.display = "block";
//   }

//   catch(error){
//     console.error(error);
//   }

// }

// weather app

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apikey = "8f8585b806ebcedf0618a67b60e23c62";

weatherForm.addEventListener("submit", async event => {
  event.preventDefault();
  const city = cityInput.value;
  if(city){
    try{
        const weatherData = await getWeatherData(city);
        displayWeatherInfo(weatherData);
    }
    catch(error){
        console.error(error)
        displayError(error);
    }

  }
  else{
    displayError("Please enter a city");
  }
});

async function getWeatherData(city){
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
  const response = await fetch(apiUrl);
  // console.log(response);
  if(!response.ok){
    throw new Error("Could not fetch weather data");
  }
  return await response.json();

}

function displayWeatherInfo(data){

  const {name: city, main: {temp, humidity}, weather: [{description, id}]} = data;
    // console.log(data);
  card.textContent = "";
  card.style.display = "flex";
  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const getWeatherEmoji = document.createElement("p");

  cityDisplay.textContent = city;
  tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}c`;
  cityDisplay.classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);


}


function getWeatherEmoji(weatherId){
  
}

function displayError(message){
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
