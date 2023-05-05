function wait(duration) {
    // Create and return a new promise
    return new Promise((resolve, reject) => {
  
    // If the argument is invalid, reject the promise
    if (duration < 0) {
      reject(new Error('Time travel not yet implemented'));
    }
  
    // otherwise, wait asynchronously and then resolve the Promise
    // setTimeout will invoke resolve() with no arguments:
    // the Promise will fulfill with the undefined value
    setTimeout(resolve, duration,"It works!");
    });
  }

  // if a function returns a Promise...
wait(1000).then((msg) => {
    console.log("Success: "+msg);
  }).catch((error) => { 
    console.log("Error: ", error);
  });