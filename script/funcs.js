// related block of code

// SOLID
// S - Single Responsibility


// O - Open/Closed
// L - Liskov Substitution
// I - Interface Segregation
// D - Dependency Inversion

// Functions & Methods
//   Normal Functions
//   arrow functions 
//   anonymous functions
//   Call backs functions

// parameter or argument or props (properties)
function add(num1, num2) {
  // parameters
  return num1 + num2
}
console.log(
  add(1234543, 987576) // arguments
);

// arrow function
const add2 = () => {
  return 2 + 4
}
console.log(add2());

// callback vs anonymous
console.log(() => 2 + 4);
console.log(() => { return 2 + 4 });