// NAME:

// Boo who

// TASK:

//Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false. 

// 1st version:

function booWho(bool) {
  if (typeof bool === "boolean") {
    return true
  } else {
  return false;
  }
}

booWho(null);