(function () {
    function init(e) {
        var canvas = document.getElementsByTagName('canvas')[0],
                c=canvas.getContext('2d'),caixa=canvas.getContext('2d');
        c.fillStyle='black';
        c.fillRect(0,0,canvas.width,canvas.height);
        console.log(e);
    }
    window.addEventListener('mousemove', init, false);
    window.addEventListener('click', init, false);
}());