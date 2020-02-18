let cells = document.querySelectorAll('.row div');
let turns = 0
let endGame = false

cells.forEach(function(cell){
    cell.addEventListener("click", Move);
})



function Move(e) {
    if (turns % 2 ==0){
        e.target.textContent = "X"
        turns++
    }
    else{
        e.target.textContent = "O"
        turns ++
    }
}
