const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    
    
};
document.querySelector('#currentDate').textContent = new Date().toLocaleDateString('en-US', options);