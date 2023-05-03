let duration = 10;

const waitPromise = new Promise((resolve, reject) => {
  if (duration >= 0) { 
  // the promise can be fulfilled!
    resolve("It works!"); 
  } else { 
    // time travel? we reject the promise
    reject(new Error("It doesn't work."));
  }
});

waitPromise.then((result) => {
  console.log("Success: ", result);
}).catch((error) => { 
  console.log("Error: ", error);
});