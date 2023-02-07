import PlayButton from "../buttons/btn-play.js"
import SettingButton from "../buttons/btn-setting.js"
import RuleButton from "../buttons/btn-rules.js"
import RulesBackground from "../canvases/rulesBackground.js"
import CloseButtonRules from "../buttons/btn-closeRules.js"
import MainBackground from "./mainBackground.js";

export default class MainCanvas {

    #frameNum
    #loadingImg
    #imgIndex
    #onChange
    #drawSwitch
    #settingCanvas

    constructor(){
        
        this.obj = document.getElementById("main-canvas");
        this.playButton = new PlayButton();
        this.settingButton = new SettingButton();
        this.mainBackground = new MainBackground();
        this.rulesBackground = new RulesBackground();
        this.ruleButton = new RuleButton();
        this.closeRule = new CloseButtonRules();
        this.obj.width = 1000;
        this.obj.height = 700;
        // const ctx = this.#obj.getContext("2d");
        this.#frameNum = 14;
        this.#loadingImg = new Image();
        this.#loadingImg.src = "../img/bg-main.png";
        this.#imgIndex = 0;
        this.#onChange = null;
        this.rules = null;
        this.isPlay = false;
        this.#drawSwitch = "frame";
        this.obj.onclick = this.clickHandler.bind(this);
        this.isGameStart = false;

        const buttonAudio = document.getElementById("buttonAudio");
        this.mainAudio = document.getElementById("mainAudio");
      
    }
    //click발생시, 화면전환 도와주기
    clickHandler(e){
        buttonAudio.play();
        if(this.onChange){
            this.onChange(e.x,e.y);
            if(this.ruleButton.islocated(e.x,e.y)=="rules"){
                this.rules="rules";
            }
            if(this.closeRule.islocated(e.x,e.y)=="close"){
                this.rules="close";
            }
        }
    }

    
    draw(ctx,drawSwitch){

        switch(drawSwitch){
            case "frame":

                ctx.drawImage(this.#loadingImg,
                            0+(1200*this.#imgIndex),0,1200,1000,
                            0,0,1000,700);
                            break;
                            
             case"button":
             
                if(this.rules == "close"){
                    this.mainBackground.draw(ctx);
                }
                this.playButton.draw(ctx);
                this.settingButton.draw(ctx);
                this.ruleButton.draw(ctx);

                if(this.rules == "rules"){
                    this.rulesBackground.draw(ctx);
                    this.closeRule.draw(ctx);
                    break;
                }


        }
                
    }

    isPlay2(){
        this.isPlay = true;
    }

    update(){
 
        if(this.#imgIndex<this.#frameNum) 
            this.#imgIndex++;
        if(this.#imgIndex==this.#frameNum){
            this.#drawSwitch = "button";
            console.log(this.#imgIndex);
        }

        if(this.#imgIndex == 3){
            this.mainAudio.play();
        }
        if(this.#imgIndex == 14 && this.isPlay){
            this.mainAudio.play();
        }
        console.log(this.isPlay);
    }

    mute(){
        this.mainAudio.pause(); 
    }

    run(){

       

        this.update();
        const ctx = this.obj.getContext("2d");
        this.draw(ctx,this.#drawSwitch);

        // console.log("main");
        if(!this.isGameStart)
            setTimeout(this.run.bind(this),200);
        if(this.isGameStart){
            return;
        }
        
   
    }

  

}