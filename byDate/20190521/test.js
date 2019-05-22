/* 选中元素 */
var spans = document.querySelectorAll(".tree>li>span");
/* 绑定事件 */
for (var span of spans){
    span.onclick = function(){
        /* 设置操作 */
     if(this.className == "open"){
         this.className = "";
     }else{
        var openspan = document.querySelector(".tree>li>span.open"); 
        if(openspan!=null){
            openspan.className = "";
            this.className = "open";
        }else{
            this.className = "open";
        }
     }
    }
}