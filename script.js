// Code block for handling user when a user clicks on a cell
let cell = document.querySelectorAll('.cell');

cell.forEach(cell => cell.addEventListener('click', clickHandler));
let turn = 0;

function clickHandler(e) {
    e.preventDefault();

    turn++;

    if (turn < 10) {
        if (turn % 2) {
            e.target.style.backgroundColor = "blue";
            e.target.setAttribute('data-score', '0')
        }
        else {
            e.target.style.backgroundColor = "red";
            e.target.setAttribute('data-score', '1');
        }
    } 

    let finalBoardState = [];

    if (turn == 9) {
        for (i = 1; i < 11; i++){
            console.log(`cell id# ${i} data score: ${document.getElementById(i).dataset.score}`)

            cellScore = document.getElementById(i).dataset.score
        }
        
        console.log("game over")
        
    }
}

// Handles reset button click
document.querySelector('.reset').addEventListener('click', resetHandler);

function resetHandler(e) {
    e.preventDefault();

    turn = 0;
    cell.forEach(cell => cell.style.backgroundColor = "white")
    cell.forEach(cell => cell.removeAttribute('data-score'));
}