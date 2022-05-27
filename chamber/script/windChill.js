const temp = parseFloat(document.getElementById('degrees').innerHTML);
const windS = parseFloat(document.getElementById('windSpeed').innerHTML);

if(temp >= 50 || windS < 3){
    document.getElementById('windChill').innerHTML = "N/A";
}
else{
const windCh = Math.round(35.74 +  (0.6215 * temp) - (35.75 *  Math.pow(windS, 0.16)) + (0.4275 * (temp * Math.pow(windS,0.16))));
document.getElementById('windChill').innerHTML = windCh;}

//Math.round(35.74 +  (0.6215 * temp) - (35.75 * (windS ^ 0.16)) + (0.4275 * (temp * (windS ^ 0.16))));
//document.getElementById('windChill').innerHTML = windCh;}