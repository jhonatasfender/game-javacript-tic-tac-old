(function () {
    var q = [
        {x: 420, y: 70, w: 70, h: 70, c: '#FFFAFA'},
        {x: 120, y: 200, w: 70, h: 70, c: '#483D8B'},
        {x: 600, y: 70, w: 70, h: 70, c: '#00FF7F'},
        {x: 90, y: 70, w: 70, h: 70, c: '#BC8F8F'}
    ];
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
        //definindo o tamanho e o tipo da letra e cor
        c.fillStyle = 'white';
        c.font = "bold 14pt Courier";
        //verificando se o mouse est� dentro da tela
        if (eixos.x <= canvas.width || eixos.y >= canvas.height) {
            c.fillText("X = " + eixos.x + "   Y = " + eixos.y, 10, 20);
            c.fillText(e.type, 250, 20);
            //verificando se e um click
            for (i = 0; i < q.length; i++) {
                c.fillStyle = q[i].c;
                c.fillRect(q[i].x, q[i].y, q[i].w, q[i].h);
                if ((e.which || e.button) == 1 &&
                        ((eixos.x <= (q[i].x + q[i].w) || (eixos.x >= q[i].w || eixos.x <= q[i].x)) &&
                                (eixos.y <= (q[i].y + q[i].h) || (eixos.y >= q[i].h || eixos.y <= q[i].y)))) {
                    q[i].x = eixos.x;
                    q[i].y = eixos.y;
                }
            }
        }
    }
    window.addEventListener('mousemove', init, false);
    window.addEventListener('click', init, false);
    window.addEventListener('load', init, false);
}());