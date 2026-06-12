// import brings code from another file.

import { add, subtract, appName } from "./mathUtils.js";

console.log(appName);
console.log("10 + 5 =", add(10, 5));
console.log("10 - 5 =", subtract(10, 5));

const output = document.querySelector("#output");

if (output) {
  output.textContent = "Open the browser console to see module output.";
}
