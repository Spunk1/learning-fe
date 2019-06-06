var canmove = false;
var setX;
var setY;
var pop = document.getElementById("pop");
// var cliX;
// var cliY;

pop.onmousedown = function(e){
    setX = e.offsetX;
    setY = e.offsetY;
    canmove = true;
}

window.onmousemove = function(e){
    if(canmove){
        pop.style.top = e.clientY-setY+"px";
        pop.style.left = e.clientX-setX+"px";
    }
}

pop.onmouseup = function(){
    canmove = false;
}