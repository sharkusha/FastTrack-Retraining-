// Task 1

function getPromise(message, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(message);
      }, delay);
    });
  }
  
  
  getPromise("test promise", 2000).then(function(data) {
    console.log(data); // "test promise" after 2 seconds
  });

  // Task 2

  function calcArrProduct(arr) {
    return new Promise((resolve) => {
      const isAllNumbers = arr.every(item => typeof item === "number");
      
      if (!isAllNumbers) {
        resolve("Error! Incorrect array!");
      } else {
        const product = arr.reduce((acc, val) => acc * val, 1);
        resolve(product);
      }
    });
  }
  
  calcArrProduct([3, 4, 5]).then(result => console.log(result));        // 60
  calcArrProduct([5, "user2", 7, 12]).then(result => console.log(result)); // "Error! Incorrect array!"

  // Task 3 

const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

function showNumbers() {
  let promise = Promise.resolve(); 

  for (let i = 0; i <= 10; i++) {
    let randomTime = Math.floor(Math.random() * 3000);
    promise = promise.then(() => {
      return delay(i, randomTime);
    }).then((num) => {
      console.log(num);
    });
  }
}

showNumbers();

// Task 4

const delay1 = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

async function showNumbers() {
  for (let i = 0; i <= 10; i++) {
    let randomTime = Math.floor(Math.random() * 3000);
    let num = await delay1(i, randomTime);
    console.log(num);
  }
}

showNumbers();