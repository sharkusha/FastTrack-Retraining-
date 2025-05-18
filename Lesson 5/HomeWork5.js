// Task 1

let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web development"
}

function propsCount(currentObject) {
    return Object.keys(currentObject).length
}

console.log(propsCount(mentor));

//Task 2
let patient = {
    name: "Lana",
    surname: "Harkusha",
    isMarried: false,
    hasChild: true,
    city: "Wroclaw"
}

function showProps(obj) {
   console.log(Object.keys(obj));
   console.log(Object.values(obj));
}
showProps(patient);

//Task 3
class Person{
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName(){
        console.log(`${this.name} ${this.surname}`);
    }
}

class Student extends Person{
    constructor(name, surname, admissionYear){
        super(name, surname);
        this.admissionYear = admissionYear;
    }
    showFullName(middleName){
        console.log(`${this.name} ${middleName} ${this.surname}`);
    }
    showCourse(){
        const currentYear = new Date().getFullYear();
        const currentCourse = currentYear - this.admissionYear;
        if (currentCourse >= 1 && currentCourse <= 6){
            console.log(`Current course: ${currentCourse}`);
        } else if (currentCourse <1){
            console.log ("The student hasn't started university yet");
        } else {
            console.log("The student has already graduated");  
        }
    }
}

// Task 4
class Worker {
    #experience = 1.2;

    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary(){
        const salary = this.dayRate * this.workingDays;
        console.log(`${this.fullName} salary: ${salary}`);
        return salary;
    }
    showSalaryWithExperience(){
        const salaryWithExperience = this.dayRate * this.workingDays * this.#experience;
        console.log(`Salary of ${this.fullName} with experience: ${salaryWithExperience}`)
        return salaryWithExperience;
    }
    get showExp(){
        return this.#experience;
    }
    set setExp(value){
        if (typeof value === "number" && value >0){
            this.#experience = value;
        } else {
        console.log("Invalid experience value. Must be a positive number.");
        }
    }
}


let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience;
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Thomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience;
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience;
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();

function getSalaryWithExperience(worker) {
    return worker.dayRate * worker.workingDays * worker.showExp;
}

let workers = [worker1, worker2, worker3];
workers.sort((a,b) => getSalaryWithExperience(a) - getSalaryWithExperience(b));
console.log('\nSorted salary');
workers.forEach((worker) => {
    console.log(`${worker.fullName}: ${getSalaryWithExperience(worker)}`);
});


// Task 5
class GeometricFigure {
    getArea() {
      return 0;
    }
  
    toString() {
      return Object.getPrototypeOf(this).constructor.name;
    }
  }
  
  class Triangle extends GeometricFigure {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    getArea() {
      return 0.5 * this.base * this.height;
    }
  }
  
  class Square extends GeometricFigure {
    constructor(side) {
      super();
      this.side = side;
    }
  
    getArea() {
      return this.side * this.side;
    }
  }
  
  class Circle extends GeometricFigure {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  function handleFigures(figures) {
    return figures.reduce((total, figure) => {
      if (figure instanceof GeometricFigure) {
        const area = figure.getArea();
        console.log(`Geometric figure: ${figure.toString()} - area: ${area}`);
        return total + area;
      }
      return total;
    }, 0);
  }
  
  
  const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
  console.log(handleFigures(figures));  