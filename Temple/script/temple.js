const requestURL = "./json/temple.json"
const cards = document.querySelector(".cards");

async function getTemple() {
    let response = await fetch(requestURL);
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      //console.log(data.temple);
      buildTempleCards(data.temple);
    } else {
       throw Error(response.statusText);
     }
  }
getTemple();

function buildTempleCards(data) {
  data.forEach((temple) => {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let address = document.createElement("p");
    let websiteurl = document.createElement("p");
    let phonenumber = document.createElement("p");
    let img = document.createElement("img");

    h2.innerHTML = `${temple.name} `;
    address.innerHTML = `Address: ${temple.address}.`;
    phonenumber.innerHTML = `Phone number: ${temple.phonenumber}.`;
    websiteurl.innerHTML = `Website: ${temple.websiteurl}.`;
    img.setAttribute("src", temple.imageurl);
    img.setAttribute(
      "alt",
      `Company logo ${temple.name} ${temple.phonenumber} - ${temple.membershiplevel}° of Detroit, Michigan`
    );

    img.setAttribute("loading", "lazy");

    card.append(h2);
    card.append(phonenumber);
    card.append(img);
    card.append(address);
    cards.append(card);
  });
}

