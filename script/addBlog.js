import { v4 as uuidv4 } from "https://cdn.jsdelivr.net/npm/uuid@latest/+esm";

// storage provided
// while this storage can function as a simple database, they are not. THey are not recommended. They are limited

// localstorage 5-15mb

// session storage tied authetication 5-15mb

//( advance)
// cookies favourite{}
// state {cart} state management tools (Redux, Zustand, Context api)

// CRUD

// Create
// reading
// update
// delete

// we want to use localstorage to save data, read data, and delete

// 1. Get our inputs ✔
// 2. get the value of each input on change ✔
// 3. put the data in a structure ✔
// 4. save the data to localstorage
// 5. read data from local storage

const title_input = document.getElementById("title");
const blog_textarea = document.getElementById("blog");
const category_select = document.getElementById("category");
const publish_btn = document.getElementById("publish");

const data = localStorage.getItem("travel_blog");

const stringData = data === null ? [] : JSON.parse(data);
console.log("stringData", stringData);

// you can get the value as the value changes. onChange
// get the value when you are done with the whole input

//DOM Document Object Model by default onPageLoad

// Javascript is an event driven language (something triggers the whole code)
// event
// onClick
//onChange
// onDrag and onDrop
// onEnter and onLeave/Onrelease
// onDoubleClick

let blog_title = "";
let blog_body = "";
let blog_category = "";
// e short for event
title_input.addEventListener("input", (e) => {
  //   console.log(e);
  blog_title = e.target.value;
});

blog_textarea.addEventListener("input", (e) => {
  // console.log(e.target.value);
  blog_body = e.target.value;
});

category_select.addEventListener("change", (e) => {
  // console.log(e.target.value);
  blog_category = e.target.value;
});

const save_data = (e) => {
  e.preventDefault();
  // error boundary /handling
  // if the title/body/category is empty

  //     blog_title
  // blog_body
  // blog_category

  // trim removes the spaces in a string.

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
    id: uuidv4(),
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

  console.log("blog data", blog_data);

  stringData.push(blog_data);

  localStorage.setItem("travel_blog", JSON.stringify(stringData));

  title_input.value = "";
  blog_textarea.value = "";
  category_select.value = "";

  // we want to save an array of object
  // we  stringify it to machine langauge when we save
  // we parse into plain language when we read
  //   parse and stringify
};

publish_btn.addEventListener("click", (e) => {
  save_data(e);
});

// for me
// use image url instead of file

// for Tina
// the data we are getting local storage, 