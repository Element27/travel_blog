const fetchBlogData = () => {
  const blogData = localStorage.getItem("travel_blog");

  //   console.log("blogData", blogData);

  const parsedData = JSON.parse(blogData);

  //   console.log("parsed", parsedData);

  return parsedData;
};

// named export
export { fetchBlogData };

// // default export only exports on thing
// export default fetchBlogData ;