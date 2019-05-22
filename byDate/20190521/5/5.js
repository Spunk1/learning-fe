
    var form1 = document.getElementById("form1");
    var uname = document.querySelector("#form1 [name=uname]");
    var pwd = document.querySelector("#form1 [name=upwd]");
    console.log(uname);
    // function txt_focus(elem){
    //     elem.className = "txt_focus";
    //     var div = elem.parentElement.nextElementSibling.children[0];
    //     div.className = "";
    // }
    uname.onfocus = function(){
        console.log(1);
        this.className = "txt_focus";
        this.parentElement.nextElementSibling.children[0].className = "";
    }
    
    pwd.onfocus = function(){
        console.log(1);
            this.className = "txt_focus";
            this.parentElement.nextElementSibling.children[0].className = "";
    }