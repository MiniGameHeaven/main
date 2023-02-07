import GameOverButton from "../../buttons/btn-gameover.js";
import GameOverBackground from "./gameover-bg.js";

export default class GameOverCanvas{
    constructor(){
        this.obj = document.getElementById("game-over-canvas");

        this.timerId = 0;
        this.start = false;
        this.gameClear = null;
        this.obj.width = 600;
        this.obj.height = 450;
        this.obj.style.position = "absolute";
        this.obj.style.top = "80px";
        this.obj.style.left = "200px";

        this.gameOverBackground = new GameOverBackground();
        this.gameOverButton = new GameOverButton();

        this.onPlay = null;
        this.obj.onclick = this.OnclickHandler.bind(this);
    }


OnclickHandler(e){
    if(this.gameOverButton.islocated){// 함수가 들어 있으면 
        this.choice = this.gameOverButton.islocated(e.x, e.y);
        this.fromOver(this.choice);
        if(this.choice == "Yes"){
            // this.onBgm("onBgm");
            this.obj.style.display = "none";   
        }

        else if (this.choice == "No")
            this.obj.style.display = "none";   
    }   

    // if(this.gameoverButton.islocated){// 함수가 들어 있으면 
    //     this.choice = this.gameoverButton.islocated(e.x, e.y);
    //     if(this.choice)
    //         this.obj.style.display = "none";
            
    // }   
}

update(){

}

run(){
    this.timerId = setTimeout(()=>{
        var ctx = this.obj.getContext("2d");
        ctx.clearRect(0,0,1000,700);
        this.gameOverBackground.draw(ctx,this.gameClear);
        this.gameOverButton.draw(ctx,this.gameClear);

        this.run();
    })

    
    // setTimeout(function(){
    //     this.update()

    // }.bind(this));
}
};