(function () {
    function bird(e) {
        console.log(e.x);
    }
    function init() {
        var canvas = document.getElementsByTagName('canvas')[0];
        var c = canvas.getContext('2d');
        //definindo a cor da tela
        //definindo o tamanho da tela
        canvas.width = 1000;
        canvas.height = 500;
        var q = [
            {x: canvas.width, y: 0, w: 20, h: 200},
            {x: 900, y: 0, w: 20, h: 200},
            {x: 700, y: 0, w: 20, h: 200},
            {x: 500, y: 0, w: 20, h: 200},
            {x: 300, y: 0, w: 20, h: 200},
            {x: 100, y: 0, w: 20, h: 200},
            {x: 50, y: 300, w: 20, h: 200}
        ];
        canvas.addEventListener("click", bird, false);
        function draw() {
            c.fillStyle = 'black';
            c.fillRect(0, 0, canvas.width, canvas.height);
            c.fillStyle = 'white';
            for (i = 0; i < q.length; i++) {
                if (q[i].w <= canvas.width || q[i].w >= canvas.width) {
                    c.fillRect(q[i].x, q[i].y, q[i].w, q[i].h);
                    q[i].x = (q[i].x != 0) ? q[i].x - 1 : canvas.width;
                }
            }
            requestAnimationFrame(draw);
        }
        requestAnimationFrame(draw);
    }
    window.addEventListener('load', init, false);
}());