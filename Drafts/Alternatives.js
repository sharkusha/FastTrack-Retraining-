/* Task 2 
2 . Write JavaScript “for” loop that will iterate from 0 to 15. For each iteration, it will check whether the current number is even or odd and display a message on the screen.
Sample Output: 
"0 is even" 
"1 is odd" "2 is even"
*/

let i = 0;
for (i=0; i < 16; i++) {
    if (i % 2 == 0) {
        alert(`${i} is even`);
    }
    else {
        alert(`${i} is odd`);
    }
}

let a = 0;
for (a=0; a < 16; a++) {
    a % 2 == 0 ? alert(`${a} is even`) : alert(`${a} is odd`);
}

let x = 0;
for (x=0; x < 16; x++) {
    alert(`${x} is ${x % 2==0 ? "even" : "odd"}`)
}

/* Write the function raiseToDegree(a, b), which returns the result of raising the number a to the power of b . The function works only with integers. Implement the interface for entering numbers a , b from the keyboard.

Sample Output :
raiseToDegree ( 3 , 4 ); // 81
*/
// Task 4.1
function raiseToDegree(a, b) {
    return a**b;
}

let a = +prompt("Enter a");
let b = +prompt("Enter b");
alert(raiseToDegree(a, b)); 

//Task4.2
function raiseToDegree(a, b) {
    let result = 1;
    for (i = 0; i<b; i++) {
        result *= a;
    }
    return result;
}

let a = +prompt("Enter a");
let b = +prompt("Enter b");
alert(raiseToDegree(a, b)); 


