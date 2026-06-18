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

const numbers = [1, 2, 3, 4, 5, 6];

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

class Animal{
  alive = true;
  eat(){
    console.log(`Thia ${this.name} is eating`);
  }
  sleep(){
    
  }
}