
function addall(m){
    var sum = 0;
    for(var i=1;i<=m;i++){
        sum = sum+i;
    }
    return sum;
}

onmessage = function(e){
    var n = parseFloat(e.data);
    console.log(n);
    var msg = addall(n);
    postMessage(msg);

}
