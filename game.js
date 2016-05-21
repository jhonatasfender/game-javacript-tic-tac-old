var painted, content, winningCombinations, turn = 0, theCanvas, c, cxt, squaresFilled = 0, w, y;
window.onload = function () {
    drawBoard();
    painted = new Array();
    content = new Array();
    winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (var i = 0; i <= 8; i++) {
        painted[i] = false;
        content[i] = '';
    }
}
function drawBoard() {
    body = document.getElementsByTagName("body")[0];
    for (var i = 0; i < 9; i++) {
        var x = document.createElement("canvas");
        x.height = 50;
        x.width = 50;
        console.log(x.style);
        //x.style.borderLeftStyle = "1px solid black";
        x.id = "canvas" + i;
        var ourCanvasClickMaker = function (index) {
            return function () {
                console.log("calling canvasClicked with " + index);
                canvasClicked(index);
            };
        };
        x.onclick=ourCanvasClickMaker(i);
        body.appendChild(x);
        if (i == 2 || i == 5) {
            var br = document.createElement("br");
            body.appendChild(br);
        }
    }
}
function canvasClicked(canvasNumber) {
    theCanvas = "canvas" + canvasNumber;
    c = document.getElementById(theCanvas);
    cxt = c.getContext("2d");
    //draw x if box is empty
    if (painted[canvasNumber] == false) {
        if (turn % 2 == 0) {
            cxt.beginPath();
            cxt.moveTo(15, 15);
            cxt.lineTo(30, 30);
            cxt.moveTo(30, 15);
            cxt.lineTo(15, 30);
            cxt.stroke();
            cxt.closePath();
            content[canvasNumber] = 'x';
        } else {
            cxt.beginPath();
            cxt.arc(25, 25, 8, 0, Math.PI * 2, true);
            cxt.stroke();
            cxt.closePath();
            content[canvasNumber] = '0';
        }
        turn++;
        painted[canvasNumber] = true;
        squaresFilled++;
        checkForWinners(content[canvasNumber]);
        if (squaresFilled == 9) {
            alert("Game Over");
            location.reload(true);
        }
    } else {
        alert("That spot's taken!");
    }
}
function checkForWinners(symbol) {
    for (var a = 0; a < winningCombinations.length; a++) {
        if (content[winningCombinations[a][0]] == symbol && content[winningCombinations[a][1]] == symbol && content[winningCombinations[a][2]] == symbol) {
            alert(symbol + " won!");
            location.reload(true);
        }
    }
}