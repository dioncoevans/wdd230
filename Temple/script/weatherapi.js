const requestURL= "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=94.04&exclude=minutely,hourly&appid=7255f502d83749f001f25d02cb93c567"
// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#descriptionOf');
const windSpeed = document.querySelector('#windSpeed');

async function apiFetch() {
    try {
      const response = await fetch(requestURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data);  //this is for testing the call
         displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }



function displayResults(weatherData) {
    //Change where the const are coming from according to the object.
    const temp = weatherData.list[0].main.temp.toFixed(0);
    //Track the path of the windspeed using object weatherData
    const windS = weatherData.list[0].wind.speed;

if(temp >= 50 || windS < 3){
    document.getElementById('windChill').innerHTML = "N/A";
}
else{
const windCh = Math.round(35.74 +  (0.6215 * temp) - (35.75 *  Math.pow(windS, 0.16)) + (0.4275 * (temp * Math.pow(windS,0.16))));
document.getElementById('windChill').innerHTML = windCh;}


    windSpeed.innerHTML = windS;
    currentTemp.innerHTML = `<strong>${weatherData.list[0].main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
  const desc = weatherData.list[0].weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}
  
  apiFetch();