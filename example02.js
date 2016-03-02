(function () {
    var q = {x: 120, y: 70, w: 70, h: 70};
    function init(e) {
        var canvas = document.getElementsByTagName('canvas')[0],
                c = canvas.getContext('2d'),
                rect = canvas.getBoundingClientRect(),
                eixos = {x: (e.clientX - rect.left), y: (e.clientY - rect.top)};
        //definindo a cor da tela
        c.fillStyle = 'black';
        //definindo o tamanho da tela
        canvas.width = 1000;
        canvas.height = 500;
        c.fillRect(0, 0, canvas.width, canvas.height);
        c.fillStyle = 'white';
        c.fillRect(q.x, q.y, q.w, q.h);
        //definindo o tamanho e o tipo da letra e cor
        c.font = "bold 14pt Courier";
        c.fillStyle = 'white';
        //verificando se o mouse está dentro da tela
        if (eixos.x <= canvas.width || eixos.y >= canvas.height) {
            c.fillText("X = " + eixos.x + "   Y = " + eixos.y, 10, 20);
            c.fillText(e.type, 250, 20);
            //verificando se e um click
            if ((e.which || e.button) == 1 && ((eixos.x <= (q.x + q.w) && (eixos.x >= q.w || eixos.x <= q.x)) && (eixos.y <= (q.y + q.h) && (eixos.y >= q.h || eixos.y <= q.y)))) {
                q.x = eixos.x;
                q.y = eixos.y;
            }
        }
    }
    window.addEventListener('mousemove', init, false);
    window.addEventListener('click', init, false);
    window.addEventListener('load', init, false);
}());