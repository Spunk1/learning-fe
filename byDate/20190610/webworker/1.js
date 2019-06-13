function layout(n){
    var start = new Date().getTime();
    do{
        var end = new Date().getTime();
    }while(end-start<5000);
}

console.time("a1");
layout();
console.timeEnd("a1");
postMessage("55555");