// async-await is a cleaner way to work with Promises.

function getUserName() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Aman");
    }, 1000);
  });
}

async function showUserName() {
  console.log("Getting user name...");

  const name = await getUserName();

  console.log("User name is:", name);
}

showUserName();

// Example with try-catch.
function checkAge(age) {
  return new Promise(function (resolve, reject) {
    if (age >= 18) {
      resolve("You can vote.");
    } else {
      reject("You are too young to vote.");
    }
  });
}

async function showAgeResult() {
  try {
    const result = await checkAge(20);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

showAgeResult();
