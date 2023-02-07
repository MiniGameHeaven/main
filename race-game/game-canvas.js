import context from "./itemContext.js"
import Character from "./character.js";
import Hurdle from "./hurdle.js";
import Score from "./score.js";
import Timebar from "./timebar.js";
import Background from "./background.js";

export default class GameCanvas{
    #background;
    #score;
    #timebar;
    #character;
    #randAppearGap;
    #hurdleDelayIndex;
    #timebarDelayIndex;
    #isGameover;
   
    
    constructor(){
 
    this.#background = new Background();
    this.#score = new Score();
    this.#timebar = new Timebar();
    this.#character = new Character();

    const playAudio = document.getElementById("playAudio");//======================소리
    const jumpAudio = document.getElementById("jumpAudio");
    const mainAudio = document.getElementById("mainAudio");
    const completeAudio = document.getElementById("completeAudio");
    const heartlowAudio = document.getElementById("heartlowAudio");


        //점수 올리기.
    this.#character.onJumpSuccess = function(){
        this.#score.up();
    }.bind(this);
        //하트 줄어듦
    this.#character.lifeLose = function(){
        heartlowAudio.play();
        //================================================================= 하트 줄면 소리(없음)
    }.bind(this);
    context.items.push(this.#character);

    
    this.obj = document.querySelector("#racegame-canvas");
    this.obj.width = 1000;
    this.obj.height = 700;
    
    //허들 랜덤
    this.#randAppearGap =0;
    this.#hurdleDelayIndex = 0;
    
    //timebar 시간조정
    this.#timebarDelayIndex = 0;
    
    //게임 끝 여부 확인.
    this.#isGameover = false;
    
    this.obj.onkeydown = this.keydownhandler.bind(this);
    this.obj.onkeyup = this.keyuphandler.bind(this);

    this.isOn = null;///////사운드 이지현 변경------------------------------------1
    this.gameClear = null;
    }


    //초기화 함수
init(){
    this.gameClear = null;

    for(let item of context.items){
        context.items.splice(0);
    }

    console.log("겜캔버스 초기화 시작")
    this.#background.init();//완성
    this.#score.init();//완성
    this.#timebar.init();//완성
    this.#character.init();





    //점수 올리기.
    this.#character.onJumpSuccess = function(){
        this.#score.up();
    }.bind(this);
        //하트 줄어듦
    this.#character.lifeLose = function(){
        heartlowAudio.play();
        //================================================================= 하트 줄면 소리(없음)
    }.bind(this);
    context.items.push(this.#character);


   
   
    //허들 랜덤
    this.#randAppearGap =0;
    this.#hurdleDelayIndex = 0;

    //timebar 시간조정
    this.#timebarDelayIndex = 0;

    //게임 끝 여부 확인.
    this.#isGameover = false;

    this.obj.onkeydown = this.keydownhandler.bind(this);
    this.obj.onkeyup = this.keyuphandler.bind(this);

    console.log("겜캔버스 초기화 끝")
}




    keyuphandler(e){
        switch(e.code){
        
            case "ArrowRight":
                this.#character.stop("Right");
                break;
            case "ArrowLeft":
                this.#character.stop("Left");
                break;
        }
    }

    keydownhandler(e){
    
        switch(e.code){
        case "ArrowRight":
            //runAudio.play();
            console.log("우측으로 이동")
            this.#character.move("Right");
            break;
        case "ArrowLeft":
            //runAudio.play();
            this.#character.move("Left");
            break;
        case "Space":
            // jumpAudio.play();///////점프할 때 소리--------------------------
            if(this.isOn == "onSfx"){
                this.play(this.isOn);///////점프할 때 소리--------------------------
            }
            console.log("점프")
            //==================================================점프==============(은비)
            this.#character.move("Jump");
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

    //---------------------run 함수------------------------------
    run(){
        if(this.isOn == "onBgm" || this.isOn == "offBgm")
            this.play(this.isOn);
      

        // mainAudio.pause();    
        // playAudio.play();

            
        //----------------장애물 생성------------------
        if(this.#hurdleDelayIndex == 0){
            let hurdle = new Hurdle();
            context.items.push(hurdle);
            
            //=======  화면에서 사라진 장애물 삭제 =====
            hurdle.onOutofCanvas = function(hurdle){
                let idx = context.items.indexOf(hurdle);
                context.items.splice(idx,1);     
            }.bind(this)
            this.#randAppearGap = Math.floor(Math.random()*90)
        };

        this.#hurdleDelayIndex++;
        this.#hurdleDelayIndex %= this.#randAppearGap+30;



            //----------- upadate 시작----------
        this.#background.update();
        for(var item of context.items)
            item.update();
            //timebar 1분으로 조정
        if(++this.#timebarDelayIndex%100 == 0)
            this.#timebar.update(); 
       

        this.#character.move();

        
            //---------- DRAW 시작----------
        var ctx = this.obj.getContext("2d");
        ctx.clearRect(0,0,1000,700);
        this.#background.draw(ctx);
        for(var item of context.items){
            if(item.type == "hurdle"){
                item.draw(ctx);
            }
        }


        for(var item of context.items){
            if(item.type == "character"){
                item.draw(ctx);
            }
        }
        this.#score.draw(ctx);
        this.#timebar.draw(ctx);

        
            //-------------life 3개 다 쓰면 gameover TRUE-------------
        this.#character.gameover = function(){
            this.#isGameover = true;
        }.bind(this);
            
            //-------------timebar 1분 지나면 gameover TRUE -------------
        this.#timebar.gameover = function(){
            this.#isGameover = true;
            this.gameClear = "clear";
        }.bind(this);



            //-------------boolean값 isGameover여부 판단.----------
        if(!this.#isGameover)
            setTimeout(this.run.bind(this),10);
            
        else if(this.#isGameover){
            //=============   겜오버   ======================================은비/명진/지현
            // this.#background.drawEnding(ctx);
            playAudio.pause();
            completeAudio.play();
            this.onOver(this.gameClear);
        }




    }

}
