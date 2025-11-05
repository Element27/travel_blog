// linking js files ✔
// referencing html elements ✔
// export and import statements ✔
// read from a local file (dummy data) ✔

// reference by tag name
// reference by class name
// reference by id name

// const getByClass = document.getElementsByClassName("material-symbols-outlined")

// console.log("getByClass", getByClass)

// const getById = document.getElementById("test_id")

// console.log("getById", getById)

// const getByTagName = document.getElementsByTagName("h2")

// console.log("getByTagName", getByTagName)

// this is an example for importing a default export
import data from "./dummy.js";

const feature_card_container = document.getElementById(
  "feature_card_container"
);

// console.log("data", data)

// 1byte / 4byte
// let compArr = [];

// 5 bytes
// for (let x = 0; x < data.length; x++) {

//     // 1byte
//   const comp = `<div class="feature_card" >
//           <img src=${data[x].image} />
//           <div class="feature_card_texts">
//             <h4>${data[x].title}</h4>
//             <p>
//               ${data[x].post.slice(0, 100)}
//             </p>
//           </div>
//         </div>`;
//   console.log("comp", comp);
//   compArr.push(comp);
// }

// map allows me to modify and array without changing the original array

// map take two parameters: 1st is each item in the array, 2nd the index of the items in the array.
const all_feature_loc = data
  .map((item, index) => {
    // string literals allow be able to parse in dynamic values into a string.

    console.log("index", index);
    console.log("item", item);

    return `
        <div class="feature_card" >
          <img src=${item.image} />
          <div class="feature_card_texts">
            <h4>${item.title.slice(0, 16)} 
            (<span class="material-symbols-outlined">
                favorite
            </span>
            <span >${item?.likes ?? ""}</span>)
            </h4>
            
            <p>
              ${item.post.slice(0, 100)}...
            </p>
          </div>
        </div>
    `;
    // join is an array fcuntion that concatenates items in an array into a string, elemination the specified delimiter.
  })
  .join("");

feature_card_container.innerHTML = all_feature_loc;

// tempate literal type of string. Concatenate two types, one is a norma string and the other on is a js variable/expression.

const value = 4;

console.log("2 + 2 = 4");
// ?? is an error handling operator 
console.log(`${value ?? 0} + ${value} = ${value + value}`);

// DSA
// Data Structure and Algorithm
// Time complexity = how fast your code runs
// Space complexity = how much memory your code takes
