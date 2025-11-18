// fetch data
// render the data
// simulate live reload
import {fetchBlogData} from "./util.js";

const feature_card_container = document.getElementById(
  "feature_card_container"
);

console.log(fetchBlogData())



const data = fetchBlogData();

const all_feature_loc = data
  .map((item, index) => {

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
          <div>
          <a class="edit btn" href="/edit-blog.html?id=${item.id}">Edit</a>
          <button class="btn delete">Delete</button>
          </div>
        </div>
    `;
  })
  .join("");
  feature_card_container.innerHTML = all_feature_loc;

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


        // export default {
        //     fetchBlogData,
        // }

// console.log(data)

// page number a list all the blogs (me)
// page for individual blogs (Tina's task)


// params

// url parameters : give addition information or data on web page

// ! edit mode using add blog. (my task);