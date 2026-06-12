// Promise means: a value that will be available later.
// It can be resolved, rejected, or pending.

const isHomeworkDone = true;

const homeworkPromise = new Promise(function (resolve, reject) {
  if (isHomeworkDone) {
    resolve("Good job! Homework is complete.");
  } else {
    reject("Please complete your homework first.");
  }
});

homeworkPromise
  .then(function (message) {
    console.log("Success:", message);
  })
  .catch(function (error) {
    console.log("Error:", error);
  })
  .finally(function () {
    console.log("Promise practice finished.");
  });

// Small delayed Promise example.
function waitTwoSeconds() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Two seconds are over.");
    }, 2000);
  });
}

waitTwoSeconds().then(function (message) {
  console.log(message);
});
