(function () {
    var container = {x: 0, y: 0, width: 290, height: 150};
    var circles = [{x: 10, y: 10, r: 10, color: 25, vx: 1, vy: 1}];
    var block = {x: 10, y: 40, width: 10, height: 50};
    var block2 = {x: 280, y: 40, width: 10, height: 50};
    function preeskeyboard() {
        var tecla = window.event.keyCode;
        if (tecla == 40 && block2.y + block2.height < container.height) {
            block2.y = block2.y + 3;
        } else if (tecla == 38 && block2.y > container.y) {
            block2.y = block2.y - 3;
        } else if (tecla == 87 && block.y + block.height < container.height) {//W
            block.y = block.y + 3;
        } else if (tecla == 83 && block.y > container.y) {//S
            block.y = block.y - 3;
        }
    }
    function move(e){
        
    }
    function init() {
        var canvas = document.getElementsByTagName('canvas')[0];
        var c = canvas.getContext('2d'), caixa = canvas.getContext("2d");
        var container = {x: 0, y: 0, width: 290, height: 150};
        var circles = [{x: 10, y: 10, r: 10, color: 25, vx: 1, vy: 1}];
        function drav() {
            c.fillStyle = 'black';
            c.fillRect(container.x, container.y, container.width + 10, container.height + 10);
            caixa.fillStyle = 'white';
            caixa.fillRect(block.x, block.y, block.width, block.height);
            caixa.fillRect(block2.x, block2.y, block2.width, block2.height);
            for (var i = 0; i < circles.length; i++) {
                c.fillStyle = 'hsl(' + circles[i].color + ',100%,50%)';
                c.beginPath();
                c.arc(circles[i].x, circles[i].y, circles[i].r, 0, 2 * Math.PI, false);
                c.fill();
                if ((circles[i].x + circles[i].vx + circles[i].r > container.x + container.width) || (circles[i].x - circles[i].r + circles[i].vx < container.x)) {
                    circles[i].vx = -circles[i].vx;
                }
                if ((circles[i].y + circles[i].vy + circles[i].r > container.y + container.height) || (circles[i].y - circles[i].r + circles[i].vy < container.y)) {
                    circles[i].vy = -circles[i].vy;
                }
                //circles[i].x += circles[i].vx;
                //circles[i].y += circles[i].vy;
            }
            requestAnimationFrame(drav);
        }
        requestAnimationFrame(drav);
    }
    window.addEventListener('mousemove', move, false);
    window.addEventListener('load', init, false);
    window.addEventListener('keydown', preeskeyboard, true);
}());