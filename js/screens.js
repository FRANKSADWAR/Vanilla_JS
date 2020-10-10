(function(){
    var sx = document.getElementById('sx');
    var sy = document.getElementById('sy');
    var px = document.getElementById('px');
    var py = document.getElementById('py');
    var cx = document.getElementById('cx');
    var cy = document.getElementById('cy');

    function showPosition(e){
        sx.textContent = e.screenX;
        sy.textContent = e.screenY;
        px.textContent = e.pageX;
        py.textContent = e.pageY;
        cx.textContent = e.clientX;
        cy.textContent = e.clientY;
    }

    var el = document.querySelector('body');
    el.addEventListener('mousemove',showPosition,false);
}());