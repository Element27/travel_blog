// Tobi => go and wash plate (food inside pot) eat the rice when you finish wash the pot

// function washPlate
// if leftover

// function eatLeftover

// washplate

let leftOver = true;

// parameters
// arguments

const washPlate = (callBackFunc) => {
  console.log("start washing");
  if (leftOver) {
    callBackFunc();
  } else {
    console.log("continue washing");
  }
  console.log("finished");
};

// named function
// can be a stand along function

function eatLeftover() {
  console.log("start eating");
  console.log("finish eating");
}

// passign teh function as a callback
// washPlate(eatLeftover)


setTimeout(()=>{
 console.log("this is an asynchronous callback ")
}, 1000)


// here we are an anonymous call back function
washPlate(function () {
  console.log("start eating");
  console.log("finish eating");
});



// onclick 
// the OriginalFunction
// wait 5 seconds then reactivate the button

//  Testing library : JEST, Cypress (Storybook) : Unit test, end to end testing (authentication)
// Test driven development: capture most scenerios that the developer can think about
// button 

// TPM : Technical Product Manager: 

// tester // stress testers QA // PM / HR

// random tester

// v2


// DEVOPS ()()
// CI/CD (Continous Integration and Continous Development)
// github actions
