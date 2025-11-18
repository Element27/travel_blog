import { fetchBlogData } from "./util.js";

const data = fetchBlogData();

console.log("data", data);

// get the id from the url param ✔
// find the blog that has the exact id ✔
// we want populate our finding inside the imput fields
//  we want to update the blog

const params = new URLSearchParams(window.location.search);
const blogId = params.get("id");

// const blog_params = window.location.search.split("=").pop();

const blogItem = data.find((item) => item.id === blogId);
console.log(blogItem);

let blog_title = ""
let blog_body = ""
let blog_category = ""

const title_input = document.getElementById("title");
title_input.value = blogItem.title;
const blog_textarea = document.getElementById("blog");
blog_textarea.value = blog_body;
const category_select = document.getElementById("category");
category_select.value = blog_category;
const publish_btn = document.getElementById("publish");







title_input.addEventListener("input", (e) => {
    console.log(e);
  blog_title = e.target.value;
});

blog_textarea.addEventListener("input", (e) => {
  console.log(e.target.value);
  blog_body = e.target.value;
});

category_select.addEventListener("change", (e) => {
  console.log(e.target.value);
  blog_category = e.target.value;
});


const updateFunction = (e) => {

    e.preventDefault()

 if (blog_title.trim().length < 3) {
  //  alert('Title is required')
  alert("Please enter a title for your blog");
  console.log("title", blog_title);
  return;
}

if (blog_body.trim().length < 10) {
  //  alert('Title is required')
  alert("Please enter a blog post for your blog");
  console.log("body", blog_body);
  return;
}

if (blog_category.trim().length < 1) {
  //  alert('Title is required')
  alert("Please select a category for your blog");
  console.log("category", blog_category);
  return;
}

  const blog_data = {
    title: blog_title,
    post: blog_body,
    category: blog_category,
    image: "../assets/patagonian_sunset.jpg",
    meta: {
      author: "",
      date: "",
      time: "",
    },
    comments: [],
    // "likes": 100
  };

  

};

publish_btn.addEventListener("click", updateFunction);

// react router dom
// useROuter
// useSearchParams
