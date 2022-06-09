// similar
window.addEventListener('load', (event) => {
    const lastMod = document.querySelector('#lastMod');
    //uses the function for lastModified, a built in JS function
    lastMod.textContent = document.lastModified;

    const cry = document.querySelector('#copyRightYear');
    cry.textContent = new Date().getFullYear();
})
