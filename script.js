const button = document.getElementById('hoverButton');

button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'purple';
    button.style.color = 'white';
});

button.addEventListener('mouseout', () => {
    button.style.backgroundColor = 'white';
    button.style.color = 'black';
});
