// default import
import data from "./dummy.js";
// name import
import { sampleExpprt, anotherExpprt } from "./newScript.js";

const feature_card_container = document.getElementById(
  "feature_card_container"
);

// a map takes an existing array formats/modifies and return a new array that fits the format/modification. Does not affect the original array
const all_feature_loc = data
  .map((item) => {
    // string literals allow be able to parse in dynamic values into a string.
    return `
        <div class="feature_card" >
          <img src=${item.image} />
          <div class="feature_card_texts">
            <h4>${item.title}</h4>
            <p>
              ${item.post.slice(0, 100)}
            </p>
          </div>
        </div>
    `;
    // join is an array fcuntion that concatenates items in an array into a string, elemination the specified delimiter.
  })
  .join("");

feature_card_container.innerHTML =
  all_feature_loc +
  ` <div class="feature_card">
          <a class="add_new_blog" href="add-blog.html">
            <h4>
              <span class="material-symbols-outlined"> add </span>
            </h4>
            <p>New Blog</p>
          </a>
        </div>`;

// console.log("all_feature_loc", all_feature_loc);
// console.log("feature_card_container", feature_card_container.innerHTML);

// JavaScript object notation

// Common & Modular

const tsArray = [1, 2, 3, 4, 5];
console.log("before", tsArray);

const thisArray = [];
// 1a,2a,3a,4a,5a

for (let x = 0; x < tsArray.length; x++) {
  thisArray.push(tsArray[x] + "a");
}

const filterArrray = [];
const sortArray = [];

console.log("after", tsArray);
console.log("thisArray", thisArray);

// map through this array, for each item in this array
const newArray = tsArray.map((item) => {
  // console.log(item);
  return item + "a";
});

console.log("newArray", newArray);
