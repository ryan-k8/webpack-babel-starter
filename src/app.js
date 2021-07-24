// the 2 imports below are import for transpiling async/await
import "core-js/stable";
import "regenerator-runtime/runtime";

//testing es5+ promises
fetch("https://api.github.com/")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// MDN - async/await (es8) example
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}
asyncCall();
