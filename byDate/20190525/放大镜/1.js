(function(){
    var img1 = {  sm : "images/60x60_sm/1_sm.jpg",
                md : "images/430x430_md/1_md.jpg",
                lg : "images/800x800_lg/1_lg.jpg"},
        img2 = {  sm : "images/60x60_sm/2_sm.jpg",
                md : "images/430x430_md/2_md.jpg",
                lg : "images/800x800_lg/2_lg.jpg"},
        img3 = {  sm : "images/60x60_sm/3_sm.jpg",
                md : "images/430x430_md/3_md.jpg",
                lg : "images/800x800_lg/3_lg.jpg"},
        img4 = {  sm : "images/60x60_sm/4_sm.jpg",
                md : "images/430x430_md/4_md.jpg",
                lg : "images/800x800_lg/4_lg.jpg"},
        img5 = {  sm : "images/60x60_sm/5_sm.jpg",
                md : "images/430x430_md/5_md.jpg",
                lg : "images/800x800_lg/5_lg.jpg"};
        img6 = {  sm : "images/60x60_sm/5_sm.jpg",
                md : "images/430x430_md/5_md.jpg",
                lg : "images/800x800_lg/5_lg.jpg"};
        img7 = {  sm : "images/60x60_sm/5_sm.jpg",
                md : "images/430x430_md/5_md.jpg",
                lg : "images/800x800_lg/5_lg.jpg"};
        img8 = {  sm : "images/60x60_sm/5_sm.jpg",
                md : "images/430x430_md/5_md.jpg",
                lg : "images/800x800_lg/5_lg.jpg"};
    var obj = {
        pics : [img1,img2,img3,img4,img5,img6,img7,img8]
    };

    // console.log(obj.pics[4].sm);
    var mdimg = document.getElementById("md_img"),
        lgimg = document.getElementById("lg_img"),
        smimg = document.getElementById("sm_img");

    var lise = document.querySelector("#sm_img ul"); 
    lgimg.style.backgroundImage = `url(${obj.pics[0].lg})`;   /* 'url('+obj.pics[0].lg+')' */
    var html = "";
    for (var pic of obj.pics){
        html += `<li><img src="${pic.sm}" data-md="${pic.md}" data-lg="${pic.lg}"></li>`
    }

    lise.innerHTML = html;
    
    var lis = document.querySelectorAll("#sm_img ul li");
    // for(var li of lis){
    //     li.onmouseover = function(){
    //         this.style.border = "2px solid red";
    //     }
    //     li.addEventListener("mouseout",function(){
    //         this.style.border = "";
    //     });
    // }

    var mdimg1 = document.querySelector("#md_img>img");
    mdimg1.src = "images/430x430_md/1_md.jpg";
    for(let i=0;i<lis.length;i++){
        var li = lis[i];
        li.onmouseover = function(){
            this.style.border = "2px solid red";
            mdimg1.src = obj.pics[i].md;
            lgimg.style.backgroundImage = `url(${obj.pics[i].lg})`;
        }
        li.addEventListener("mouseout",function(){
            this.style.border = "";
        });
    }
/* 小图轮播 */
    var leftbtn = document.getElementById("left");
    var rightbtn = document.getElementById("right");
    if(obj.pics.length<=5){
        leftbtn.className = "left disable"
        rightbtn.className = "right disable"
    };
    var leftcl = 0;
    leftbtn.className = "left disable"
    function move(){
        lise.style.left = -(leftcl*70)+"px";
        checkA();
    }
    function checkA(){
/*         console.log(obj.pics.length-leftcl);
        console.log(obj.pics.length);
        console.log(leftcl); */
        if(obj.pics.length-leftcl==5){
            rightbtn.className = "right disable"
        }else if(leftcl==0){
            leftbtn.className = "left disable"
        }else{
            leftbtn.className = "left"
            rightbtn.className = "right"
        }
    }
    leftbtn.onclick = function(){

        if(leftbtn.className.indexOf("disable")==(-1)){
            leftcl --;
            move();
        }
    }
    rightbtn.onclick = function(){
        if(rightbtn.className.indexOf("disable")==(-1)){
            leftcl ++;
            move();
        }
    }
/* 小图轮播 */
/* 放大镜 */
    var superMask = document.getElementById("supermask");
    var mask = document.getElementById("mask");

    superMask.onmouseover = function(){
        mask.style.display = "block";
        lgimg.style.display = "block";
    }
    superMask.onmouseout = function(){
        mask.style.display = "none";
        lgimg.style.display = "none";
    }

    var msize = 216;
    superMask.onmousemove = function(e){
        var x = e.offsetX,
            y = e.offsetY;
        var top = y- msize/2,
            left = x- msize/2;

        if(top<0){
            top = 0;
        }else if(top>200){
            top = 200;
        }
        if(left<0){
            left=0;
        }else if(left>200){
            left=200;
        }
        mask.style.top = top +"px";
        mask.style.left = left +"px";
        
        var positionX = -1.92*left,
            positionY = -1.92*top;
        lgimg.style.backgroundPositionX = positionX+"px";
        lgimg.style.backgroundPositionY = positionY+"px";
    }
/* 放大镜 */
})();