console.log('Timer started');

setTimeout(() => {
  console.log('This runs after 2 seconds.');
}, 2000);

let count = 1;
const interval = setInterval(() => {
  console.log('Interval count:', count);
  count++;

  if (count > 3) {
    clearInterval(interval);
    console.log('Interval stopped.');
  }
}, 1000);
