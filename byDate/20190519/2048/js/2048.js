var game = {
    data:null,
    RN:4,
    CN:4,
    score:0, 
    state:1,    /* 保存游戏状态  1：运行中  0：游戏结束*/
    running:1,
    gameover:0,
    start(){
        this.state = this.running;
        this.data = [];
        for (var r=0;r<this.RN;r++){
            this.data[r] = [];
            for (var c=0;c<this.CN;c++){
                this.data[r][c] = 0;
            }       
        }
        this.randomNum();
        this.randomNum();
        this.updataView();
        console.log(this.data.join("\n"));
        document.onkeydown = function(e){
            switch(e.keyCode){
                case 37:
                    this.moveLeft();
                    break;
                case 39:
                    this.moveRight();
                    break;
                case 38:
                    this.moveUp();
                    break;
                case 40:
                    this.moveDown();
                    break;
            
            }
        }.bind(this);
    },
    randomNum(){
        do {
            var r = Math.floor(this.RN*Math.random());
            var c = Math.floor(this.CN*Math.random());
        } while (this.data[r][c]!=0);

        this.data[r][c] = Math.random()<0.5?2:4;
        // if(Math.random() < 0.5){
        //     this.data[r][c]=2; 
        // }else{
        //     this.data[r][c]=4;
        // }
    },
    updataView(){
        for(var r=0;r<this.RN;r++){
            for(var c=0;c<this.CN;c++){
                var n = this.data[r][c];
                var div = document.getElementById("c"+r+c);
                if(n!=0){
                    div.innerHTML = n;
                    div.className = "cell n"+ n;
                }else{
                    div.innerHTML = "";
                    div.className = "cell";
                }
            }
        }
        document.getElementById("score").innerHTML=this.score;
        var over = document.getElementById("gameOver");
        if(this.state==this.gameover){
            console.log("消失");
            over.style.display = "block";
            document.getElementById("final").innerHTML = this.score;
        }else{
            over.style.display = "none";
        };
    },  /* 左移操作 */
    moveLeft(){
        var before = String(this.data);
        for(var r=0;r<this.RN;r++){
            this.moveLeftInRow(r);
        }
        var after = String(this.data);
        if(before!=after){
            this.randomNum();
            if(this.isgameover()){
                this.state = this.gameover;
            }
            console.log(this.state+"left");
            this.updataView();
        }

    },
    moveLeftInRow(r){
        for(var c=0;c<this.CN-1;c++){
            var cnext = this.getNextInRow(r,c);
            if(cnext == -1){
                break;
            }else{
                if(this.data[r][c]==0){
                    this.data[r][c] = this.data[r][cnext];
                    this.data[r][cnext] = 0;
                    c--;
                }else if(this.data[r][c]==this.data[r][cnext]){
                    this.data[r][c] *= 2;
                    this.data[r][cnext] = 0;
                    this.score += this.data[r][c];
                }
            }
        }
    },
    getNextInRow(r,c){
        for(var i=c+1;i<this.CN;i++){
            if(this.data[r][i]!=0){
                return i;
            }
        }
        return -1;
    },  /* 右移操作 */
    moveRight(){
        var before = String(this.data);
        for(var r=0;r<this.RN;r++){
            this.moveRightInRow(r);
        }
        var after = String(this.data);
        if(before!=after){
            this.randomNum();
            if(this.isgameover()){
                this.state = this.gameover;
            }
            console.log(this.state+"right");
            this.updataView();
        }
    },
    moveRightInRow(r){
        for(var c=this.CN;c>0;c--){
            var cprev = this.getPrevInRow(r,c)
            if(cprev==-1){
                break;
            }else
            {
                if(this.data[r][c]==0){
                    this.data[r][c] = this.data[r][cprev];
                    this.data[r][cprev] = 0;
                    c++
                }else if(this.data[r][c]==this.data[r][cprev]){
                    this.data[r][c] *= 2;
                    this.data[r][cprev] = 0;
                    this.score += this.data[r][c];
                }
            }
        }
    },
    getPrevInRow(r,c){
        for(var i=c-1;i>=0;i--){
            if(this.data[r][i]!=0){
                return i;
            }
        }
        return -1;
    },  /* 上移操作 */
    moveUp(){
        var before = String(this.data);
        for(var c=0;c<this.CN;c++){
            this.moveUpInCol(c);
        }
        var after = String(this.data);
        if(before!=after){
            this.randomNum();
            if(this.isgameover()){
                this.state = this.gameover;
            }
            console.log(this.state+"up");
            this.updataView();
        }
    },
    moveUpInCol(c){
        for(var r=0;r<this.RN-1;r++){
            var rnext = this.getNextInCol(r,c);
            if(rnext == -1){
                break;
            }else{
                if(this.data[r][c] == 0){
                    this.data[r][c] = this.data[rnext][c];
                    this.data[rnext][c] = 0;
                    r--;
                }else if(this.data[r][c] == this.data[rnext][c]){
                    this.data[r][c] *= 2;
                    this.data[rnext][c] = 0;
                    this.score += this.data[r][c];
                }
            }
        }
    },
    getNextInCol(r,c){
        for(var i=r+1;i<this.RN;i++){
            if(this.data[i][c]!=0){
                return i;
            }
        }
        return -1;
    },  /* 下移操作 */
    moveDown(){
        var before = String(this.data);
        for(var c=0;c<this.CN;c++){
            this.moveDownInCol(c);
        }
        var after = String(this.data);
        if(before!=after){
            this.randomNum();
            if(this.isgameover()){
                this.state = this.gameover;
            }
            console.log(this.state+"down");
            this.updataView();
        } 
    },
    moveDownInCol(c){
        for(var r=this.RN-1;r>0;r--){
            var rprev = this.getPrevInCol(r,c);
            if(rprev==-1){
                break;
            }else{
                if(this.data[r][c]== 0){
                    this.data[r][c] = this.data[rprev][c];
                    this.data[rprev][c] = 0;
                    r++;
                }else if(this.data[r][c] == this.data[rprev][c]){
                    this.data[r][c] *= 2;
                    this.data[rprev][c] = 0;
                    this.score += this.data[r][c];
                }
            }
        }
    },
    getPrevInCol(r,c){
        for(var i=r-1;i>=0;i--){
            if(this.data[i][c]!=0){
                return i;
            }
        }
        return -1;
    },
    isgameover(){
        for(var r=0;r<this.RN;r++){
            for(var c=0;c<this.CN;c++){
                if(this.data[r][c] == 0){
                    console.log("为0");
                    return false;
                   // this.data[r][c] = 1;
                }else if(c<this.CN-1 && this.data[r][c]==this.data[r][c+1]){
                    console.log("与右有相等");
                    return false;
                  //  this.data[r][c] = 2;
                }else if(r<this.RN-1 && this.data[r][c]==this.data[r+1][c]){
                    console.log("与左有相等");
                    return false;
                   // this.data[r][c]=3;
                }
            }
        }
        console.log(r+"---"+c);
        return true;
    }

}

game.start();
