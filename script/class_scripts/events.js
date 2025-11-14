// event driven programming language

// events | automation

// explicitly start and stop the programme
// tensorflow

// load a page

// pageIsLoading: this the part where data is being fetched
// isPageloaded: this is when the data is fetched
// isPageNotloaded: this is when there is error loading the page // error
// onPageRemove: when you leave a page // cache item

// Promises / promise / fetch / async-await

// maintain space for the coming data

// threading in javascript
// synchronous programming language: everything runs in a single thread
// asynchronous programming multiple threads

// webPage(HTML, css, js) --------------------------100kb-------------------------> webview

// webPage(html, css(css:preprocessor), js(data: external api)) -------------------100mb---------------------> webview
//                                                                      \_____________process_css____________> css
//                                                                      \_____________data_fetching_________> js: data:fetching
//                                                                       \_________html_combine_data______> combines

// eventlisteners

const button = document.getElementById("button");

// synchrous events

// addEventListener takes two params 1. the event type, event action

// the addeventlistener is synchronous, but the event action can be async

// e 
function catchEvent(e){

}

button.addEventListener("click", catchEvent(e));

button.addEventListener("click", (e) => {
  console.log("button click first", e);
  
  setInterval(()=>{
      console.log("inside interval")
    }, 1000)

    for(let x = 0;x < 5; x++ ){
      setTimeout(()=>{
    console.log("timeout 1 seconds")
    console.log("x", x)
      },1000)
  }
    
    console.log("button click second");
});

