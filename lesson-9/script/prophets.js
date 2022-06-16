const url = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json'

const card = document.querySelector('.cards');

async function getProphets() {
    let response = await fetch(URL);
    if(response.ok){
        let data = await response.json();
        console.log(data);        
    } else {
        throw Error(response.statusText);
    }

    const prophets = jsonObject['prophets']

}

function buildProphetCards(data){
    data.prophets.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let img = document.createElement('img');

        h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
        p.innerHTML =`Location of Birth: ${prophet.birthplace}`;
        img.setAttribute('src', `${prophet.imageurl}`);
        img.setAttribute('alt', `Picture of President ${fullName}`);
        img.setAttribute('loading', 'lazy');

        card.append(h2);
        card.appendChild(p);
        card.append(img);
        card.classList.add("card")

        cards.append(card);
        
    });
}

getProphets();