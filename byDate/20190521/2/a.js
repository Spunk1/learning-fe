// var checkallbox = document.getElementById("checkall");
var checkallbox = document.querySelector("table thead input");
var input = document.querySelectorAll("table>tbody td:first-child>input");

checkallbox.onclick = function(){
    // console.log(1);
    // var input = document.querySelectorAll("table>tbody td:first-child>input");
    for (var checkbox of input){
        checkbox.checked = checkallbox.checked;
    }
}

for(var box of input){
    box.onclick = function(){
        if(!this.checked){
            checkallbox.checked = false;
        }else{
            console.log(2);
            var checked = document.querySelector("table>tbody td:first-child>input:not(:checked)");
            if(checked !=null){
                checkallbox.checked = false;
                // console.log(1);
            }else{
                checkallbox.checked = true;
                console.log("没有没被点击的//都被点击了");
            // checkallbox.checked = checked ==null;
            }
        }
    }
}