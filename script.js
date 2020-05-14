// important constants and variables

const container = document.getElementById("container");
const blackButton = document.getElementById("black");
const partyButton = document.getElementById("party");
const eraserButton = document.getElementById("eraser");
const resetButton = document.getElementById("reset");

// initialize the page with a 16 x 16 grid
makeGrid(16, 16);

// buttons and their uses
blackButton.addEventListener("click", blackColour);
party.addEventListener("click", randomColour);
eraserButton.addEventListener("click", erase);
resetButton.addEventListener("click", resetGrid);

// function that creates a grid of divs
function makeGrid(rows, columns) {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            var cell = document.createElement('div');
            cell.className = "cell";
            cell.addEventListener('mouseover', 
                e => e.target.classList.add('my-colour-class')
                );
            cell.style.width = (550 / rows).toFixed(100) + "px";
            cell.style.height = (550 / columns).toFixed(100) + "px";
            container.appendChild(cell);
        }
    }
}

// function that clears the previous grid and generates a new one
function resetGrid() {
    var newDimension = prompt("Enter grid size (e.g. if you enter 16, you'll get a 16x16 grid):");
    var x = parseInt(newDimension);
    if (newDimension == null) { // stop the function if cancel button is pressed
        return;
    } else if (!Number.isInteger(x)) {
        alert("Please enter a valid number!");
        resetGrid();
    } else if (x <= 0 ) {
        alert("Please enter a size greater than 0!");
        resetGrid();
    } else if (x > 30) {
        alert("Please enter a size less than 31!");
        resetGrid();
    } else {
        container.textContent = ""; // remove previous grid
        makeGrid(x, x);
    }
}

// function that changes to a random colour at each pass
function randomColour(){
    var cells = document.querySelectorAll('.cell');
    for (var i =0; i < cells.length; i++){
        cells[i].onmouseover = function(e) {
            var colour = '#'+ (0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
            this.style['background-color'] = colour;
        }
    }
}

// function that reverts the colour to black
function blackColour() {
    var cells = document.querySelectorAll('.cell');
    for (var i =0; i < cells.length; i++){
        cells[i].onmouseover = function(e) {
            this.style['background-color'] = 'black';
        }
    }
}

// eraser function
function erase() {
    var cells = document.querySelectorAll('.cell');
    for (var i =0; i < cells.length; i++){
        cells[i].onmouseover = function(e) {
            this.style['background-color'] = 'white';
        }
    }
}