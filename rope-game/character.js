import Rope from "./rope.js";

export default class Character{
    constructor(x=465, y=500) {
        this.#x = x;
        this.#y = y;

        this.#vy = 0; // 이동할 단위 위치
        this.#dy = this.y-50; // 목적지 위치

        this.#south = false; //남쪽
        this.#north = false; //북쪽
        this.#unmovableUp = false;
        this.#unmovableDown = false;
    
        // 캐릭터 속도
        this.#speed = 5;
        this.#max_jump = 0; // 최대 점프 높이
        this.#isJumpping = false; //캐릭터가 현재 점프중인지
        this.#isFalling = false;
        this.#JumpStatus = false;
        this.#jumpEnd = false;
        
        this.#imgDelayIndex = 0;
        this.#imgDelayIndex2 = 0;
        this.#imgIndex = 0;
        this.#imgIndex2 = 0;
        this.#imgIndex3 = 0;
        this.#img = new Image();
        this.#img2 = new Image();
        this.#img.src = "../img/character-mushroom1.png";
        this.#img2.src = "../img/character-back.png";
        this.#img3 = new Image();
        this.#img3.src = "../img/mushroom2.png";

        this.#isWalking = false; // 걷고있는지?
        this.#isBorn = false; //태어났는지?
    }

    move(dir){
        if(arguments.length == 1){
        // let dir = x;

        switch(dir){
            case "Up":
                this.#north = true;
                break;

            case "Down":
                this.#south = true;
                break;
        }
    }
    }

    stop(dir){
        switch(dir){
            case "Up":
                this.#north = false;
                this.#unmovableUp = false; //북
                break;

            case "Down":
                this.#south = false;
                this.#unmovableDown = false; //남
                break;
        }
    }

    draw(ctx){
        let x = this.#x;
        let y = this.#y;
        
        /**************** 점프할 때 img 인덱스 변경 ***************/
        if((this.#JumpStatus && !this.#isBorn)){
            console.log("짠");
            this.#isWalking = false;
            ctx.drawImage(this.#img,
                500*this.#imgIndex, 0, 500, 500,
                x-20, y-20, 100, 120);
        } 

        if((this.#isBorn && !this.#isWalking) || (200<= this.#y && this.#y <= 400) && !this.#JumpStatus){ // 태어났을 때
            ctx.drawImage(this.#img,
                0, 0, 500, 500,
                x-20, y-20, 100, 120);
            console.log("walking?? ===> " + this.#isWalking);
            this.#isWalking=false;
        }

        /**************** 점프하지 않을 때 img 인덱스 변경 ***************/
        if(this.#isWalking && !this.#isJumpping && !this.#isFalling){ //걷고있는 동안은 인덱스 변경
            console.log(this.y);
            
            ctx.drawImage(this.#img2,
                300*this.#imgIndex2,0, 300, 400,
                x, y, 65, 100);
        }
    }

    jump(){
        if(this.#isJumpping==false){
            this.#isJumpping = true;
            this.#JumpStatus = true;
            this.#jumpEnd = true;
            this.#jumpPoint = this.#y;
            this.#max_jump = this.#jumpPoint-50;
        } 
    }

    update(){
        /********************** 캐릭터 이동범위 제한 *********************/
        if(this.#y <= 370){
            this.#unmovableUp = true;
        } else if (this.#y>=370) {
            this.#unmovableUp = false;
        }
        
        if(this.#y >= 500){
            this.#unmovableDown = true;
        } else if (this.#y<=500)
            this.#unmovableDown = false;

        /********************* 방향키에 따른 움직임 처리 *********************/
        if(this.#south && !this.#unmovableDown)
            this.#y += this.#speed; // 남쪽
        
        if(this.#north && !this.#unmovableUp) //북쪽
            this.#y -= this.#speed;
        

        /************************** 점프로직 시작**************************/
        if(!this.#isFalling && this.#isJumpping && (this.#y >this.#max_jump))
            this.#y -= 2;
        
        //꼭대기에서 플래그 바꾸기
        if(!this.#isFalling && this.#isJumpping && ( this.#y ==this.#max_jump))
            this.#isFalling = true; //떨어지는중
        

        if(this.#isFalling && this.#isJumpping && (this.#y<this.#jumpPoint))
            this.#y += 2;

        
        if(this.#isFalling && this.#isJumpping && this.#y == this.#jumpPoint){
            this.#isJumpping = false;
            this.#isFalling = false;
            this.#JumpStatus = false;
        }
        /************************** 점프로직 끝**************************/

                if(++this.#imgDelayIndex%5==0 && !this.#isJumpping && !this.#isFalling){
                    this.#isBorn = false;
                    this.#imgIndex2++;
                    if(this.#imgIndex2 == 2)
                        this.#imgIndex2 = 0;
                }

                if(this.#y >= 499){
                    this.#isBorn = true;
                    this.#isWalking = false;
                }
                console.log("isBorn ==> "+ this.#isBorn);
                console.log("JumpStatus ==> "+ this.#JumpStatus);

                if(this.#JumpStatus || !this.#isBorn){
                    if(++this.#imgDelayIndex2%5==0){
                    console.log("ㅇㅕ긴가요???");
                    this.#imgIndex++;
                    if(this.#imgIndex == 8){
                        this.#imgIndex = 0;
                        this.#jumpEnd = false;
                    }
                }
            }

            if(400 <= this.#y && this.#y < 500){ 
                this.#isWalking = true;
            }            
    }

    init(x,y){
        this.#x = x;
        this.#y = y;
        this.#vy = 0; // 이동할 단위 위치

        this.#south = false; //남쪽
        this.#north = false; //북쪽
        this.#unmovableUp = false;
        this.#unmovableDown = false;
    
        // 캐릭터 속도
        this.#speed = 5;
        this.#max_jump = 0; // 최대 점프 높이
        this.#isJumpping = false; //캐릭터가 현재 점프중인지
        this.#isFalling = false;
        this.#JumpStatus = false;
        this.#jumpEnd = false;
        
        this.#imgDelayIndex = 0;
        this.#imgDelayIndex2 = 0;
        this.#imgIndex = 0;
        this.#imgIndex2 = 0;
        this.#imgIndex3 = 0;
        this.#isWalking = false; // 걷고있는지?
        this.#isBorn = false; //태어났는지?
    }
    #x;
    #y;
    #dy;
    #vy;
    #south;
    #north;
    #unmovableUp;
    #unmovableDown;
    #speed;
    #max_jump;
    #jumpPoint;
    #isJumpping;
    #jumpEnd;
    #isFalling;
    #JumpStatus;
    #imgDelayIndex;
    #imgDelayIndex2;
    #imgIndex;
    #imgIndex2;
    #imgIndex3;
    #img;
    #img2;
    #img3;
    #isWalking;
    #isBorn;

    get y(){
        return this.#y;
    }

    set y(y){
        this.#y = y;
    }

    get isJumpping(){
        return this.#isJumpping;
    }
}

