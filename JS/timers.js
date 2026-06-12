// setTimeout runs code one time after a delay.

console.log("Start");

setTimeout(function () {
  console.log("This message shows after 2 seconds.");
}, 2000);

console.log("End");

// setInterval runs code again and again after a fixed delay.

let count = 1;

const intervalId = setInterval(function () {
  console.log("Interval count:", count);
  count++;

  if (count > 5) {
    clearInterval(intervalId);
    console.log("Interval stopped.");
  }
}, 1000);
