
// Variables

// console.log(varNum)

// // variable declaration and assignment
// var varNum = 20;

// num or intergers
let letNum = 30;
// console.log(letNum)

letNum = 35;
// console.log(letNum)

// const is short for constant
const constNum = 40;

// console.log(constNum)

// - infinity to + infinity
// int 
// /bigInt

// float


// String
// alphanumeric characters

const myName = "Daniel";
const nickNmae = "Danny-1-1";


const the = myName.slice(2)
console.log(the)
const tex = "21";
// const xet = 20;

// console.log(tex + xet);
// console.log(tex - xet);
// console.log(tex * xet);
// console.log(tex / xet);

// concatenation

// boolean
// true or false

var isABoy = true;
var isAGirl = false;


// reference variables
// arrays
// objects

// arrays are zero indexed
const arr = ["Cat", "Kangroo", "Polar Bear", "Hammer head Shark"];


console.log(arr.length);
console.log(arr[2]);

// adding to array push/unshift
// push adds to the end
arr.push("Panda");
console.log(arr);
// unshift adds to the beginning
arr.unshift("Lion");
console.log(arr);


// remove from the array
// pop removes from the end
arr.pop();
console.log(arr);
// shift removes from the beginning
arr.shift();
console.log(arr);

// splice vs slice

// // slice creates a copy of the array selection
// const slicearr = arr.slice(1, 3);
// console.log("arr", arr);
// console.log("slicearr", slicearr);

// // splice modified the array. remove
// const splicearr = arr.splice(1, 3);
// console.log("sp arr", arr);
// console.log("splicearr", slicearr);

// add item to the middle of the array
// at index 1, remove 0 items and add "Elephant"
arr.splice(1, 0, "Elephant");
console.log(arr);
// // remove item from the middle of the array
// at index 1 remove 1 item
arr.splice(3, 1, "brown bear");
console.log(arr);

// undefined if something doesnt exist
// null of something exist but has not specified value
// indexOf -1


console.log("bird", arr.indexOf("Bird"));
console.log("Elephant", arr.indexOf("Elephant"));

// psycology

// objects
// key value pairs

const newObj = {
  name: "Daniel",
  age: 20,
  isABoy: true,
  meta: {
    height: 190,
    weight: 80,
    random: {
      fc: "Madrid",
      ff: "pounded yam and Egusi",
      ftd: "mid night",
      fc: "Black"
    }
  },
}

console.log("User name:", newObj.nickname)
console.log("favourite color:", newObj.meta.random.fc)

let fire;

console.log(fire)