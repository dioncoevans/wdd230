/*const options = {

day: 'numeric',
month: 'numeric',
year: 'numeric',    
hour: 'numeric',
minutes: 'numeric',
seconds: 'numeric',
}
document.querySelector("lastMod").textContent = new Date(lastModified).toLocaleDateString('en-US', options);*/

const thisYear = new Date();
let year = thisYear.getFullYear();
document.getElementById("year").textContent = year;

const lastMod = new Date(document.lastModified);
let strLMD = 'Last updated: ' + lastModDate.getMonth() + "/" + lastModDate.getDate() + "/" 
           + lastModDate.getFullYear() + " " + lastModDate.getHours() + ":" 
           + lastModDate.getMinutes() + ":" + lastModDate.getSeconds();
document.getElementById("modified").textContent = strLMD;

/*const thisYear = new Date();
let year = thisYear.getFullYear();
document.getElementById("year").textContent = year;

const lastModDate = new Date(document.lastModified);
let strLMD = 'Last Modified: ' + lastModDate.getMonth() + "/" + lastModDate.getDate() + "/" 
           + lastModDate.getFullYear() + " " + lastModDate.getHours() + ":" 
           + lastModDate.getMinutes() + ":" + lastModDate.getSeconds();
document.getElementById("lastMod").textContent = strLMD;*/