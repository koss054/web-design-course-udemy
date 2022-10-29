// First problem solution
console.log("This is ex1.js");

// Second problem solution
let firstName = "Koss";
let lastName = "Kosinov";
let yearOfBirth = 2000;
let element = document.getElementById("student_message");

let textForPage = "Hi, my name is " + firstName + " " + lastName + ", I'm " + (2022 - yearOfBirth).toString() + " years old and I'm learning Javascript";

element.textContent = textForPage;

// Third problem solution
let firstNumber = parseInt(document.getElementById("num_1").innerText);
let secondNumber = parseInt(document.getElementById("num_2").innerText);
let sum = Math.round(firstNumber / secondNumber);

let sumElement = document.getElementById("result");

sumElement.textContent = sum.toString();

// Fourth problem solution
let phone1 = "988866552";
let phone2 = "99087612366";
let phone3 = 876543123;

function isPhoneValid(phoneNumber) {
    if (phoneNumber.toString().length == 9) {
        return console.log(true);
    }
    else {
        return console.log(false);
    }
} 

isPhoneValid(phone1);
isPhoneValid(phone2);
isPhoneValid(phone3);

// Fifth problem solution
console.log(Math.pow(32, 6));

// Sixth problem solution
/*
a) var NAME;        - valid, but camelCase would be preferable
b) var $num1;       - invalid, because of symbol in variable name
c) var typeof;      - invalid, reserved word
d) var first-name;  - valid, kebab-case
e) var attempt_2;   - valid, forgot_the_name_of_the_case
f) var 2ndAttempt;  - invalid, number in variable name
g) var full name;   - invalid, space is present in variable name
*/