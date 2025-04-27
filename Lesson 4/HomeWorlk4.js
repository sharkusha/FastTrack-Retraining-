// Task 1


function calcRectangleArea(width, height){
    if(typeof width !== "number" || typeof height != "number" || isNaN(width) || isNaN(height)){
        throw new TypeError("Both width and height must be numeric values.");
    }
    if(width <= 0 || height <=0){
        throw new TypeError("Width and height must be more then 0.");
    }
    return width*height
}


let width = parseFloat(prompt("Enter the width of the rectangle"));
let height = parseFloat(prompt("Enter the height of the rectangle"));
try {
    alert(`Area of rectungle is ${calcRectangleArea(width,height)}`);
} catch(err) {
    alert(err.message);
}

// isNan check
try {
    alert(`Area of rectungle is ${calcRectangleArea(1,0/0)}`);
} catch(err) {
    alert(err.message);
}

// Task 2
function checkAge(){
   try{
    const input = prompt("Enter you age, please");

    if(input === "" || input === null){
        throw new Error("The field is empty! Please enter your age");
    }

    const age = Number(input);
    if(isNaN(age)){
        throw new TypeError("Age must be numeric value");
    }
    if(age < 14){
        throw new RangeError("You are too young to watch this movie");
    }

    alert("Enjoy watching the movie!");
    }
    catch(err){
    alert(`Error name: ${err.name}\nError message: ${err.message}`);
    }
}

checkAge();

// Task 3


//Month Exception class
class MonthException {
    constructor(message) {
      this.name = "MonthException";
      this.message = message;
    }
  
    toString() {
      return `${this.name} ${this.message}`;
    }
  }
  
  // Function to get month name
  function showMonthName(month) {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    if (month < 1 || month > 12) {
      throw new MonthException("Incorrect month number");
    }
  
    return months[month - 1];
  }


// Task 4
function showUser(id){
    if(id < 0){
        throw new Error(`ID must not be negative: ${id}`);
    }
    return { id: id };
}

function showUsers(ids){
    const result = [];
    for (let i = 0; i < ids.length; i++) {
        try {
        const user = showUser(ids[i]);
        result.push(user);
        }
        catch(err) {
            console.log(err. message)
        }

    }
    return result;
}

const users = showUsers([7, -12, 44, 22]);
console.log(users); 