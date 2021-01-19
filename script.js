document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', clickHandler));


function clickHandler(e) {
    e.preventDefault();
    console.log(e.target);
}