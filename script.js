
// Sets 
let cell = document.querySelectorAll('.cell');
let turn = 0;

cell.forEach(cell => cell.addEventListener('click', clickHandler))

function clickHandler(e) {
    e.preventDefault()
    
    turn++;
    
    cellScore = e.target.dataset.score
    
    if (turn < 10 && cellScore == "") {
        if (turn % 2 == 0) {
            e.target.style.backgroundColor = "blue";
            e.target.setAttribute('data-score', '0');
        } else {
            e.target.style.backgroundColor = "red";
            e.target.setAttribute('data-score', '1');
        }
    } else {
        turn--;
    }
    
    if (turn == 9) {
        let score = [];
        for (i = 1; i < 10; i++) {
            let cellID = "#c" + i;
            let cellScore = Number(document.querySelector(cellID).dataset.score);
            score.push(cellScore);
        }
        let row1 = score[0] + score[1] + score[2];
        let row2 = score[3] + score[4] + score[5];
        let row3 = score[6] + score[7] + score[8];

        let col1 = score[0] + score[3] + score[6];
        let col2 = score[1] + score[4] + score[7];
        let col3 = score[2] + score[5] + score[8];

        let dia1 = score[0] + score[4] + score[8];
        let dia2 = score[2] + score[4] + score[6];

        if (row1 == 0 || row2 == 0 || row3 == 0 ||
            col1 == 0 || col2 == 0 || col3 == 0 ||
            dia1 == 0 || dia2 == 0 ) 
            {
            document.querySelector('.results').innerText = "Result: Blue Wins!";
            } 
        else if (row1 == 3 || row2 == 3 || row3 == 3 ||
                 col1 == 3 || col2 == 3 || col3 == 3 ||
                 dia1 == 3 || dia2 == 3 )
            {
            document.querySelector('.results').innerText = "Result: Red Wins!";
            } 
        else 
            {
            document.querySelector('.results').innerText = "Result: It's a Draw.";
            }


        console.log("game over")
    }
    
}

document.querySelector('button').addEventListener('click', resetHandler)

function resetHandler(e) {
    e.preventDefault();
    turn = 0;
    cell.forEach(cell => cell.style.backgroundColor = "white");
    cell.forEach(cell => cell.setAttribute('data-score', ""));
}