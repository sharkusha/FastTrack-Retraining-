// Task 2
console.log("My name is Lana")

// Task 3
let firstName = "Lana";
let lastName = "Harkusha";
console.log(firstName, lastName);


firstName = lastName;
console.log(firstName);

// Task 4
const patient = {
    patientName: "Tom Red",
    age: 28,
    isMarriged: false,
    hasKids: undefined,
    adress: null
};

// Task 5
let isAdult = confirm("Have you reached the age of majority?");
console.log(isAdult);

// Task 6
let firstNae = "Lana";
let lastName = "Hurkusha";
let studyGroup = 6;
let yearOfBirth = 1984;
let matitalStatus = false;

console.log(typeof firstNae);
console.log(typeof lastName);
console.log(typeof studyGroup);
console.log(typeof yearOfBirth);
console.log(typeof matitalStatus);

console.log(studyGroup);
console.log(yearOfBirth);
console.log(matitalStatus);
console.log(firstNae);
console.log(lastName);

let haveKids = undefined;
let adress = null;

// Task 7
let login = prompt("Enter your login:");
let email = prompt("Enter your email:");
let password = prompt("Enter your password:");

alert("Dear " + login + ", your email is " + email + ", your password is " + password + ".");
//alert(`Dear'+ ${login}, your email is ${email}, your password is ${password}.`);

//Task 8
const secondsInMinute = 60;
const secondsInHour = secondsInMinute*60;
const secondsInDay = secondsInHour*24;
const secondsInMonth = secondsInDay*30;

console.log(secondsInHour);
console.log(secondsInDay);
console.log(secondsInMonth);