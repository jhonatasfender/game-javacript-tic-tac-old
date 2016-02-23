(function () {
    function init(e) {
        var canvas = document.getElementsByTagName('canvas')[0],
                c = canvas.getContext('2d'),
                rect = canvas.getBoundingClientRect();
        c.fillStyle = 'black';
        c.fillRect(0, 0, canvas.width, canvas.height);
        console.log((e.clientX - rect.left) + '  ' + (e.clientY - rect.top));
        c.font = "bold 10pt Courier";
        c.fillStyle = 'white';
        c.fillText("Hello world", 10, 10);
    }
    window.addEventListener('mousemove', init, false);
    window.addEventListener('click', init, false);
}());