// Task 1
// For
const array = [2, 3, 4, 5];

let product = 1;
for(i=0; i < array.length; i++) {
    product *= array[i];
}
alert("Product of the elements is " + product);

//While
const array1 = [2, 3, 4, 5];
let result = 1;
let a = 0;

while (a < array1.length) {
    
    result *= array[a];
    a++;
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
