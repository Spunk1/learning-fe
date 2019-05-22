var as = document.querySelectorAll(".tabs [data-tri=tab]");
var divs = document.querySelectorAll("#container>div");
for(var a of as){
    a.onclick = function(){
        var i = this.href.lastIndexOf("#");
        console.log(i);
        var str = this.href.slice(i+1);
        console.log(str);
        for(var div of divs){
            if(div.id == str){
                div.style.zIndex = 1;
            }else{
                div.style.zIndex = 0;
            }
        } 
    }
}