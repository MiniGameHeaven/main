import Character from "./character.js";
import Background from "./background.js";
import Rope from "./rope.js";
import Score from "./score.js";


export default class GameCanvas {
    constructor(){
        // this.#y = y;
        this.#background = new Background();
        this.#rope = new Rope();
        this.#character = new Character();
        this.#score = new Score();

        this.#obj = document.querySelector("#ropegame-canvas");
        this.#obj.width = 1000;
        this.#obj.height = 700;
        this.#iscrashed = false;

        this.#obj.onkeydown = this.keyDownHandler.bind(this);
        this.#obj.onkeyup = this.keyUpHandler.bind(this);

        this.#imgDelayIndex = 0;
        this.#imgIndex = 0;
        this.#imgIndex4 = 0;
        this.#img = new Image();
        this.#img.src = "../img/life.png";
        this.#imgGirl = new Image();
        this.#imgGirl.src = "../img/character-support2.png";
        this.#imgBoy = new Image();
        this.#imgBoy.src = "../img/character-support.png";
        this.#img3 = new Image();
        this.#img3.src = "../img/character-boom.png";
        this.#img4 = new Image();
        this.#img4.src = "../img/mushroom1.png";
        const playAudio = document.getElementById("playAudio");//======================소리
        const completeAudio = document.getElementById("completeAudio");
        const runAudio = document.getElementById("runAudio");
        const jumpAudio = document.getElementById("jumpAudio");
        const heartlowAudio = document.getElementById("heartlowAudio");

        this.isOn = null;///////사운드 이지현 변경---
    }

    crashRope(){ // 줄에 걸렸을 때 호출되는 함수
        let ctx = this.#obj.getContext("2d");       
        if(this.#iscrashed){ // 줄에 걸리면

            this.#imgIndex++; // 하트 이미지 +1
            heartlowAudio.play();

            if(this.#imgIndex==3){
                playAudio.pause();
                completeAudio.play();
                this.onOver();
                // location.reload();
            }

            setTimeout(function(){
                this.#iscrashed = false; // true => false 로 변경
            }.bind(this),1000);
        }
    }


    drawLife(ctx){        
        
        ctx.drawImage(this.#img,
                    248*this.#imgIndex, 0, 744, 241,
                    30, 50, 150, 45);

        ctx.drawImage(this.#imgGirl,
                    0, 0, 85, 148,
                    716, 399, 60, 95);

        ctx.drawImage(this.#imgBoy,
                    0, 0, 85, 148,
                    209, 399, 60, 95);
    }


    drawCrash(ctx){
        ctx.drawImage(this.#img3,
            0, 0, 536, 466,
            550, 340, 70, 70);
        ctx.drawImage(this.#img4,
            400*this.#imgIndex4, 0, 400, 400,
            445, 350, 120, 140);
    }

    keyDownHandler(e) {
        switch(e.code){ 
            case "ArrowUp" :
                this.#character.move("Up");
            
                break;

            case "ArrowDown" :
                this.#character.move("Down");
                break;

            case "Space" :
                this.#character.jump(); 
                if(this.isOn == "onSfx"){
                    this.play(this.isOn);///////점프할 때 소리-
                }
                this.#score.checkScore(this.#character.y, this.#iscrashed);
                break;
        }
    }

    keyUpHandler(e) {
        switch(e.code){
            case "ArrowUp":
                this.#character.stop("Up");
                break;
    
            case "ArrowDown":
                this.#character.stop("Down");
                break;
        }
    }
    mute(isOn){
        if(isOn=="offBgm")
            playAudio.pause();
        else if(isOn=="offSfx"){
            this.isOn = isOn;
            jumpAudio.pause();
        }
    }

    
    play(isOn){
        if(isOn=="onBgm")
            playAudio.play();
        else if(isOn=="onSfx"){
            this.isOn = isOn;
            jumpAudio.play();
        }
    }

    run(){
        if(this.isOn == "onBgm" || this.isOn == "offBgm")
            this.play(this.isOn);

        // 객체 상태값 update 후
        this.#rope.update();
        this.#character.update();
        
        // 캔버스에 그림 그리기
        let ctx = this.#obj.getContext("2d");
        ctx.clearRect(0, 0, this.#obj.width, this.#obj.height);
        this.#background.draw(ctx);
        this.#rope.draw(ctx);

        if(this.#iscrashed==false)
            this.#character.draw(ctx);
        else{
            if(++this.#imgDelayIndex%4==0){
                if(this.#imgIndex4 == 3){
                    setTimeout(function(){
                        this.#imgIndex4 = 0;
                    }.bind(this),3000)
                }else{
                    this.#imgIndex4++;
                }
            } 
            this.drawCrash(ctx);
            this.#character.y = 500;
        }

        if((370<= this.#character.y && this.#character.y <=470)  && this.#rope.imgIndex2==6){
            console.log("뿅!!");
            this.#iscrashed = true;
            this.crashRope();            
        }

        this.drawLife(ctx);
        this.#score.draw(ctx);

        /************ 줄넘기 캐릭터 앞,뒤로 그리기 **************/
        if(this.#rope.imgIndex2<=5){
            this.#rope.draw(ctx);
        }
        if(this.#rope.imgIndex2>5){
            if(this.#iscrashed==false)
                this.#character.draw(ctx);
        }

        setTimeout(this.run.bind(this), 20);
    }




    get iscrashed(){
        return this.#iscrashed;
    }

    get obj(){
        return this.#obj;
    }

    init(){
        console.log("init 실행??????????됐나요???????????");
        this.#rope.init(180,300);
        this.#character.init(465,500);
        this.#score.init();
        this.#iscrashed = false;
        this.#imgDelayIndex = 0;
        this.#imgIndex = 0;
        this.#imgIndex3 = 0;
        this.#imgIndex4 = 0;
    }

    #y;
    #background;
    #rope;
    #character;
    #obj;
    #score;
    #iscrashed;
    #imgDelayIndex;
    #imgIndex;
    #imgIndex3;
    #imgIndex4;
    #img;
    #imgGirl;
    #imgBoy;
    #img3;
    #img4;
}
