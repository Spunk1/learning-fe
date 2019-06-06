var bpt = document.getElementById("pt");
var bgz = document.getElementById("gz");
bpt.onclick = pt;
bgz.onclick = function(){
    bpt.addEventListener("click",gz()); /* 此处函数加括号是需要立即执行 返回hand */
};

function pt(){
    console.log("普通");
}

var gz = function(){
    var n = 3;
    return function(){
        if(n>0){
            n--;
            alert("跟踪");
        }else{
            bpt.removeEventListener("click",arguments.callee);  /* 此处不加括号 是将函数传递到事件内，出发事件才执行 */
        }
    }
}