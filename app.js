// Add event listener to scroll with the mouse-wheel
const container = document.getElementById('container');
container.addEventListener(`wheel`, (event) => {
    // prevent the default vertical scroll
    event.preventDefault();
    // scroll left the container based on how much you scrolled.
    container.scrollLeft += event.deltaY;
})

// Add event listener to go back with the left button
const leftBtn = document.getElementById('leftBtn');
leftBtn.addEventListener('click', ()=>{
    container.scrollLeft -= 750;
})

// Add event listener to go right with the right button
const rgihtBtn = document.getElementById('rightBtn');
rightBtn.addEventListener('click', ()=>{
    container.scrollLeft += 750;
})