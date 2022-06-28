const requestURL = "https://ctfuller98.github.io/WDD-230/lesson9/json/data.json"
const cards = document.querySelector(".cards");

async function getData() {
    let response = await fetch(requestURL);
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      //console.log(data.prophets);
    //   buildProphetCards(data.prophets);
    // } else {
    //   throw Error(response.statusText);
    // }
  }
}