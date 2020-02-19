let cells = document.querySelectorAll('.row div');
let turns = 0
let player = ["X", "O"];
let endGame = false

cells.forEach(function (cell) {
    cell.addEventListener("click", Move);
})

function Move(e) {
    if (endGame === true) {
        restartGame();
        return;
    }
    if (e.target.textContent === "X" || e.target.textContent === "O") {
        return;
    }
    
        e.target.textContent = player[turns]
        toggle();
        checkWin();
    
}


function toggle() {
    if (turns === 0) {
        turns = 1;
    }
    else {
        turns = 0;
        
    }
}



