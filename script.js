document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', clickHandler));

let turn = 0;

function clickHandler(e) {
    e.preventDefault();
    console.log(e.target);

    turn++;

    if (turn < 10) {
        if (turn % 2) {
            e.target.style.backgroundColor = "blue";
        }
        else {
            e.target.style.backgroundColor = "red";
        }
    } else {
        console.log("game over")
    }
}