const person = "Micheal";
const person2 = "Klaus";
const person3 = "Stefan";

const legends = ["Christiano", "Marcelo", "Bale", "Benzema"];

legends.push(person)
legends.push(person2)
legends.push(person3)


// DRY Dont Repeat Yourself

// 3 core requirements of every loop
//  starting value/variable
// ending value/variable
// increment/decrement (how we get from the start to the end)
// what happens in the loop

// for (let x = 0; x < 10; x++) {
//   console.log(x)
// }

// for (let x = 0; x < legends.length; x++) {
//   console.log("Greetings", legends[x]);
// }


// while 
let y = 6;
while (Math.floor(Math.random() * 10) !== y) {
  console.log("no match yet")
}


// do while
do {
  console.log("from do while : no match yet")
} while (Math.floor(Math.random() * 10) !== y)