import RaceButton from "../buttons/btn-race.js";
import RopeButton from "../buttons/btn-rope.js";

export default class GameSelectCanvas{
    constructor(){

        this.obj = document.querySelector("#game-select-canvas");
        this.obj.width = 1000;
        this.obj.height = 700;
        this.img = new Image();
        this.img.src = "./../img/game-select.png";
        this.ropeButton = new RopeButton();
        this.raceButton = new RaceButton();
        this.onChange = null;
        this.obj.onclick = this.clickHandler.bind(this);
        
        const buttonAudio = document.getElementById("buttonAudio");
    }
    

    clickHandler(e){
      
        if(this.onChange)
            this.onChange(e.x,e.y);
            buttonAudio.play();
 
            
 
    }

    update(){

        
    };
  
run(){

        const ctx = this.obj.getContext("2d");
        ctx.drawImage(this.img,
            0,0,1200,1000,
            0,0,1000,700); 
            console.log("select run");
        this.raceButton.draw(ctx);
        this.ropeButton.draw(ctx);
        
}
}