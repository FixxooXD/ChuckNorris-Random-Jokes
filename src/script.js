const GetBtn = document.getElementById("Btn");
const JokeText = document.getElementById("Joke");

GetBtn.addEventListener("click", getJoke);

document.addEventListener("DOMContentLoaded", getJoke);

// async function getJoke(){
// await fetch('https://api.chucknorris.io/jokes/random')
//  .then((response) =>{
//   return response.json()
// })
// .then((data) =>{
//    const joke =  data.value;
//   JokeText.innerHTML = joke;
// })
// }

// Way: 2

async function getJoke() {
  const jokeData = await fetch("https://api.chucknorris.io/jokes/random", {
    headers: {
      Accept: "application/json",
    },
  });
  const jokeObj = await jokeData.json();
  JokeText.innerHTML = jokeObj.value;
}
