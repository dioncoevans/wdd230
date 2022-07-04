const requestURL = "./data.json"
const cards = document.querySelector(".cards");

async function getBusiness() {
    let response = await fetch(requestURL);
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      //console.log(data.business);
      buildBusinessCards(data.business);
    } else {
       throw Error(response.statusText);
     }
  }
getBusiness();

function buildBusinessCards(data) {
  data.forEach((business) => {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let address = document.createElement("p");
    let websiteurl = document.createElement("p");
    let phonenumber = document.createElement("p");
    let img = document.createElement("img");

    h2.innerHTML = `${business.name} `;
    address.innerHTML = `Address: ${business.address}.`;
    phonenumber.innerHTML = `Phone number: ${business.phonenumber}.`;
    websiteurl.innerHTML = `Website: ${business.websiteurl}.`;
    img.setAttribute("src", business.imageurl);
    img.setAttribute(
      "alt",
      `Company logo ${business.name} ${business.websiteurl} - ${business.membershiplevel}° of Detroit, Michigan`
    );

    img.setAttribute("loading", "lazy");

    card.append(h2);
    card.append(phonenumber);
    card.append(img);
    card.append(address);
    cards.append(card);
  });
}

