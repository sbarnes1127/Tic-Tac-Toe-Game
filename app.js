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
    else {

        e.target.textContent = player[turns]
        toggle();
        checkWin();
    }

}


function toggle() {
    if (turns === 0) {
        turns = 1;
    }
    else {
        turns = 0;

    }
}

function checkWin(e) {
    if (document.getElementById('tl').textContent === "X" && document.getElementById('tm').textContent === "X" && document.getElementById('tr').textContent === "X" ||
        document.getElementById('ml').textContent === "X" && document.getElementById('c').textContent === "X" && document.getElementById('mr').textContent === "X" ||
        document.getElementById('bl').textContent === "X" && document.getElementById('bm').textContent === "X" && document.getElementById('br').textContent === "X" ||
        document.getElementById('tl').textContent === "X" && document.getElementById('ml').textContent === "X" && document.getElementById('bl').textContent === "X" ||
        document.getElementById('tm').textContent === "X" && document.getElementById('c').textContent === "X" && document.getElementById('bm').textContent === "X" ||
        document.getElementById('tr').textContent === "X" && document.getElementById('mr').textContent === "X" && document.getElementById('br').textContent === "X" ||
        document.getElementById('tl').textContent === "X" && document.getElementById('c').textContent === "X" && document.getElementById('br').textContent === "X" ||
        document.getElementById('tr').textContent === "X" && document.getElementById('c').textContent === "X" && document.getElementById('bl').textContent === "X") {
        endGame = true;
        alert("X Wins");
    }
    if (document.getElementById('tl').textContent === "O" && document.getElementById('tm').textContent === "O" && document.getElementById('tr').textContent === "O" ||
        document.getElementById('ml').textContent === "O" && document.getElementById('c').textContent === "O" && document.getElementById('mr').textContent === "O" ||
        document.getElementById('bl').textContent === "O" && document.getElementById('bm').textContent === "O" && document.getElementById('br').textContent === "O" ||
        document.getElementById('tl').textContent === "O" && document.getElementById('ml').textContent === "O" && document.getElementById('bl').textContent === "O" ||
        document.getElementById('tm').textContent === "O" && document.getElementById('c').textContent === "O" && document.getElementById('bm').textContent === "O" ||
        document.getElementById('tr').textContent === "O" && document.getElementById('mr').textContent === "O" && document.getElementById('br').textContent === "O" ||
        document.getElementById('tl').textContent === "O" && document.getElementById('c').textContent === "O" && document.getElementById('br').textContent === "O" ||
        document.getElementById('tr').textContent === "O" && document.getElementById('c').textContent === "O" && document.getElementById('bl').textContent === "O") {
        endGame = true;
        alert("O Wins");
    }
    else {
        console.log("No Win");
    }
}

function restartGame() {
    location.reload();
}


