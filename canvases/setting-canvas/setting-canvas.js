import HeartButton from "../../buttons/btn-check.js";
import CloseButton from "../../buttons/btn-close.js";
import SettingBackground from "./setting-bg.js";

export default class SettingCanvas{
/*     #obj
    #timerId
    #start
    #islocated
    #settingBackground
    #checkButton
    #closeButton */
    constructor(){
        this.obj = document.getElementById("setting-canvas");

        this.timerId = 0;
        this.start = false;

        this.obj.width = 402;
        this.obj.height = 291;
        
        this.islocated = null;
        this.choice = null;
        this.closechoice = null;

        this.obj.style.position = "absolute";
        this.obj.style.top = "85px";
        this.obj.style.left = "300px";

        this.settingBackground = new SettingBackground();
        this.heartButtonBgmOn = new HeartButton(228,110,true);
        this.heartButtonBgmOff = new HeartButton(228+75,110,false);
        this.heartButtonSfxOn = new HeartButton(228,110+62,true);
        this.heartButtonSfxOff = new HeartButton(228+75,110+62,false);
        // this.checkButton = new CheckButton();
        this.closeButton = new CloseButton();


        this.obj.onclick = this.clickHandler.bind(this);
    }


clickHandler(e){
    // e.stopPropagation();

    

if(this.closeButton.islocated){// 함수가 들어 있으면 
    this.Closechoice = this.closeButton.islocated(e.x, e.y);
    if(this.Closechoice == "close")
            this.obj.style.display = "none";
    }  
         
    if(this.heartButtonBgmOn.islocated(e.x, e.y)=="onBgm"){// 함수가 들어 있으면 
        this.heartButtonBgmOn.pressed = true;
        this.onBgm("onBgm");
        this.heartButtonBgmOff.pressed = false;
        // console.log("help");
    }
    if(this.heartButtonBgmOff.islocated(e.x, e.y)=="offBgm"){// 함수가 들어 있으면 
        this.heartButtonBgmOff.pressed = true;
        this.onBgm("offBgm");
        this.heartButtonBgmOn.pressed = false;
    }
    if(this.heartButtonSfxOn.islocated(e.x, e.y)=="onSfx"){// 함수가 들어 있으면 
        this.heartButtonSfxOn.pressed = true;
        this.onSfx("onSfx");
        this.heartButtonSfxOff.pressed = false;
    }
    if(this.heartButtonSfxOff.islocated(e.x, e.y)=="offSfx"){// 함수가 들어 있으면 
        this.heartButtonSfxOff.pressed = true;
        this.onSfx("offSfx");
        this.heartButtonSfxOn.pressed = false;
    }

}

update(){

}

run(){
    this.timerId = setTimeout(()=>{
        const ctx = this.obj.getContext("2d");
        this.settingBackground.draw(ctx);
        this.heartButtonBgmOn.draw(ctx);
        this.heartButtonBgmOff.draw(ctx);
        this.heartButtonSfxOn.draw(ctx);
        this.heartButtonSfxOff.draw(ctx);
        this.closeButton.draw(ctx);

        this.run();
    });
}

}

