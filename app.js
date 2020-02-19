let cells = document.querySelectorAll('.row div');
let turns = 0
let player = ["🔥", "❄️"];
let endGame = false
let turnCount = 0

cells.forEach(function (cell) {
    cell.addEventListener("click", Move);

})

function Move(e) {
    if (endGame === true) {
        restartGame();
        return;
    }
    if (e.target.textContent === "🔥" || e.target.textContent === "❄️") {
        return;
    }
    else {

        e.target.textContent = player[turns]
        toggle();
        turnCount++;
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
    if (document.getElementById('tl').textContent === "🔥" && document.getElementById('tm').textContent === "🔥" && document.getElementById('tr').textContent === "🔥" ||
        document.getElementById('ml').textContent === "🔥" && document.getElementById('c').textContent === "🔥" && document.getElementById('mr').textContent === "🔥" ||
        document.getElementById('bl').textContent === "🔥" && document.getElementById('bm').textContent === "🔥" && document.getElementById('br').textContent === "🔥" ||
        document.getElementById('tl').textContent === "🔥" && document.getElementById('ml').textContent === "🔥" && document.getElementById('bl').textContent === "🔥" ||
        document.getElementById('tm').textContent === "🔥" && document.getElementById('c').textContent === "🔥" && document.getElementById('bm').textContent === "🔥" ||
        document.getElementById('tr').textContent === "🔥" && document.getElementById('mr').textContent === "🔥" && document.getElementById('br').textContent === "🔥" ||
        document.getElementById('tl').textContent === "🔥" && document.getElementById('c').textContent === "🔥" && document.getElementById('br').textContent === "🔥" ||
        document.getElementById('tr').textContent === "🔥" && document.getElementById('c').textContent === "🔥" && document.getElementById('bl').textContent === "🔥") {
        endGame = true;
        alert("🎉🎉---🔥 Wins!---🎉🎉");
    }
    if (document.getElementById('tl').textContent === "❄️" && document.getElementById('tm').textContent === "❄️" && document.getElementById('tr').textContent === "❄️" ||
        document.getElementById('ml').textContent === "❄️" && document.getElementById('c').textContent === "❄️" && document.getElementById('mr').textContent === "❄️" ||
        document.getElementById('bl').textContent === "❄️" && document.getElementById('bm').textContent === "❄️" && document.getElementById('br').textContent === "❄️" ||
        document.getElementById('tl').textContent === "❄️" && document.getElementById('ml').textContent === "❄️" && document.getElementById('bl').textContent === "❄️" ||
        document.getElementById('tm').textContent === "❄️" && document.getElementById('c').textContent === "❄️" && document.getElementById('bm').textContent === "❄️" ||
        document.getElementById('tr').textContent === "❄️" && document.getElementById('mr').textContent === "❄️" && document.getElementById('br').textContent === "❄️" ||
        document.getElementById('tl').textContent === "❄️" && document.getElementById('c').textContent === "❄️" && document.getElementById('br').textContent === "❄️" ||
        document.getElementById('tr').textContent === "❄️" && document.getElementById('c').textContent === "❄️" && document.getElementById('bl').textContent === "❄️") {
        endGame = true;
        alert("🎉🎉---❄️ Wins!---🎉🎉");
    }

    else if (turnCount == 9 && endGame == false) {
        alert("Looks Like a Draw! 😕 Try Again?");
        endGame = true;
    }

}

function restartGame() {
    location.reload();
}


