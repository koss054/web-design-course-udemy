console.log("This is ex1.js");

let firstName = "Koss";
let lastName = "Kosinov";
let yearOfBirth = 2000;
let element = document.getElementById("student_message");

let textForPage = "Hi, my name is " + firstName + " " + lastName + ", I'm " + (2022 - yearOfBirth).toString() + " years old and I'm learning Javascript";

element.textContent = textForPage;

