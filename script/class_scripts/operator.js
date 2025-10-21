// arithmetic
// conditions (unary, binary, ternary);
// comparison

// arithmetic
// +
// -
// /
// %
// *
// ** // exponential
// ++ // increment x + 1 (x++ != ++x);
// -- // decrement x-1 (x-- != --x);

// division = / give you the value
// modulus = % gives you the remainder

// console.log(5 / 2)
// console.log(5 % 2)


//  0 0 0
//  0 0 1
//  0 1 0
//  0 1 1
//  1 0 0
//  1 0 1
//  1 1 0
//  1 1 1

// function convertToBinary(num) {

//   var binValue = "";
//   // loop till the value of the num is 0
//   while (num > 0) {

//     // concatenating the result of the calculation with the binValue string
//     binValue = num % 2 + binValue;

//     // division to reduce the number
//     num = Math.floor(num / 2);
//   }
//   return binValue;
// }

// console.log(convertToBinary(7));
// console.log(convertToBinary(5));
// console.log(convertToBinary(1127));

// Math.ceil // 2.5 approxiamte to the higher whole number 3
// Math.floor // 2.5 approximate to the lower whole number 2
// Math.round // 2.5 approximate to the nearest whole number 3

// let c = 3
// console.log(c)
// c++
// console.log(c)


// let d = 11
// console.log(d)
// ++d
// console.log(d)

// conditions
// if else
// ? :

// switch

switch (1) {
  case 1:
    { console.log("this is case 1"); };
  // break;
  case 2:
    console.log("this is case 2");
    break;
  case 3:
    console.log("this is case 3");
    break;
  case 4:
    console.log("this is case 4");
    break;
  default:
    console.log("this is default");
}

// comparison
// >
// <
// ==
// ===
// !=
// >=
// <=

// ? :

// 2 == 3 ? console.log("true") : console.log("false");

// // this checks values
// console.log(20 == "20");
// // check value and type (integer, string, boolean)
// console.log(20 === "20");
// // every ref type is an instance of an object
// console.log([] == {});


