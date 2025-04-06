// Task 1
// For
const array = [2, 3, 4, 5];

let product = 1;
for(i=0; i < array.length; i++) {
    product *= array[i];
}
alert("Product of the elements is " + product);

// For in
const array2 = [2, 3, 4, 5];

let product2 = 1;
for(let x in array2) {
    product2 *= array2[x];
}
alert("Product of the elements is " + product2);

//While
const array1 = [2, 3, 4, 5];
let result = 1;
let y = 0;

while (y < array1.length) {
    
    result *= array[y];
    y++;
}
alert("Product of the elements is " + result);

// Task 2

let i = 0;
for (i=0; i < 16; i++) {
    if (i % 2 == 0) {
        alert(`${i} is even`);
    }
    else {
        alert(`${i} is odd`);
    }
}



// Task 3
function randArray(k){
    let array = [];
    for (i=0; i < k; i++) {
        array[i] = Math.floor(Math.random() * 501);
    }
    console.log(array);
}

// Task 4
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


// Task 5
function findMin(...newArray) {
    let minValue = newArray[0];
    for (let z of newArray) {
        if (z < minValue){
            minValue=z;
        }
    }
    return minValue;
}

// Task 6

function findUnique(arr) {
    return arr.length === new Set(arr).size;
}