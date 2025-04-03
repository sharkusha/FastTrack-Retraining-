// Task 1
let x = 1;
let y = 2;

let res1 = String(x) + String(y); // Add the code, it is necessary to use the variables x and y
console.log(res1); // "12"
console.log( typeof res1); // "string"

let res2 = (x<y) + String(y); // Add code is required use variables x and y
console.log(res2); // "true2"
console.log( typeof res2); // "string"

let res3 = x < y; // Add code is required use variables x and y
console.log(res3); // true
console.log( typeof res3); // " boolean "

let res4 = 0*((x+y)/0); // Add code is required use variables x and y
console.log(res4); // NaN
console.log( typeof res4); // "number"

// Task 2
let num = +(prompt("Enter a number:")); 

if (!isNaN(num)) {
    let isEvenAndPositive = num > 0 && num % 2 === 0;
    let isMultipleOfSeven = num % 7 === 0;

    console.log("Even and positive:", isEvenAndPositive);
    console.log("Multiple of 7:", isMultipleOfSeven);
} else {
    console.log("Invalid input. Please enter a number.");
}


// Task 3
const array = [];
array[0] = 1
array[1] = "new";
array[2] = true;
array[3] = null;
alert(array.length);
array[4] = prompt("Enter any value");
alert(array[4]);
array.shift();
alert(array);

// Task 4
let cities = [" Rome ", " Lviv ", " Warsaw "]; 
cities.join("*");

//Task 5
let age = +prompt("Enter your age");
if (age > 18){
    alert("You have reached the age of majority");
} else {
    alert("You are still too young");
}

// Task 6
let side1 = +(prompt("Enter the length of the first side"));
let side2 = +(prompt("Enter the length of the second side"));
let side3 = +(prompt("Enter the length of the third side"));

if (!isNaN(side1) && !isNaN(side2) && !isNaN(side3)) {

    let p = ((side1+side2+side3)/2);

    let s = (p*(p-side1)*(p-side2)*(p-side3))**(1/2);
    rounded = s.toFixed(3);
    console.log(rounded);
    
    let isRectangular

    if (side1 > side2 && side1 > side3){
        isRectangular = side1**2 == side2**2 + side3**2;
    } 
    if (side2 > side1 && side2 > side3){
        isRectangular = side2**2 == side1**2 + side3**2;
    } 
    if (side3 > side1 && side3 > side2){
        isRectangular = side3**2 == side1**2 + side2**2;
    } 
    console.log("This triangle is rectangular", isRectangular);
} else {
    console.log("Incorrect data");
}

// Task 7
const hours = new Date().getHours();

if (hours >= 23 || hours < 5){
    alert("Good night");
}
if (hours >= 5 && hours < 11){
    alert("Good morning");
}
if (hours >= 11 && hours < 17){
    alert("Good day");
}
if (hours >= 17 && hours < 23){
    alert("Good evening");
}

const currentHours = new Date().getHours();
switch (true){

    case (currentHours >= 5 && currentHours < 11):
        alert("Good morning");
        break;

    case (currentHours >= 11 && currentHours < 17):
        alert("Good day");
        break;

    case (currentHours >= 17 && currentHours < 23):
        alert("Good evening");
        break;

    default: 
        alert("Good night");
        break;
}

