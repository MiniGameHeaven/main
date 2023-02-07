import RaceGameCanvas from "./race-game/game-canvas.js";
import RopeGameCanvas from "./rope-game/game-canvas.js";
import MainCanvas from "./canvases/main-canvas.js";
import PlayButton from "./buttons/btn-play.js";
import SettingButton from "./buttons/btn-setting.js";
import GameSelectCanvas from "./canvases/game-select-canvas.js";
import SettingCanvas from"./canvases/setting-canvas/setting-canvas.js";
import GameCanvas from "./race-game/game-canvas.js";
import RaceButton from "./buttons/btn-race.js";
import RopeButton from "./buttons/btn-rope.js";
import GameOverCanvas from "./canvases/gameover-canvas/gameoverCanvas.js"




window.onload = function(){
    this.choice == null;
    const mainCanvas = new MainCanvas();
    const settingCanvas = new SettingCanvas();
    const settingButton = new SettingButton();
    let gameOverCanvas = new GameOverCanvas();
    let gameSelectCanvas = new GameSelectCanvas();
    const ropeGameCanvas = new RopeGameCanvas();
    const raceGameCanvas = new RaceGameCanvas();
   

    settingCanvas.onBgm = function(isOn){ 
        if(isOn == "offBgm"){
            ropeGameCanvas.mute(isOn); 
            raceGameCanvas.mute(isOn); 
        }
        if(isOn == "onBgm"){
            ropeGameCanvas.play(isOn); 
            raceGameCanvas.play(isOn); 
        }
        
    }

    gameOverCanvas.onBgm = function(isOn){ 
        if(isOn == "offBgm"){
            ropeGameCanvas.mute(isOn); 
            raceGameCanvas.mute(isOn); 
        }
    
        if(isOn == "onBgm"){
            ropeGameCanvas.play(isOn); 
            raceGameCanvas.play(isOn); 
        }
    }

    settingCanvas.onSfx = function(isOn){ 
        if(isOn == "offSfx"){
            ropeGameCanvas.mute(isOn); 
            raceGameCanvas.mute(isOn); 
            console.log("offSfx");
        }
        if(isOn == "onSfx"){
            ropeGameCanvas.play(isOn); 
            raceGameCanvas.play(isOn); 
            console.log("onSfx");

        }
    } 
   
    

    /* -------------------1. mainCanvas 시작---------------- */
    mainCanvas.onChange = function(x,y){
        if(this.playButton.islocated(x,y)=="play"){
            
            mainCanvas.obj.style.display = "none";
            mainCanvas.isGameStart = true;
            gameSelectCanvas.run();
            gameSelectCanvas.obj.style.display ="inline-block";
            console.log("play clicked");
            
            gameSelectCanvas.onChange = function(x,y)   {
                gameSelectCanvas.obj.style.display = "none";
            /* --------------------------------------RACE----------------------------------------------- */
                if(this.raceButton.islocated(x,y)=="race"){
                        
                    mainCanvas.obj.style.display = "none";
                    gameSelectCanvas.obj.style.display = "none"; 
                    raceGameCanvas.obj.style.display ="inline-block";
                    raceGameCanvas.obj.focus();
                    mainCanvas.mute();
                    raceGameCanvas.init();
                    raceGameCanvas.run(); 
                    console.log("race clicked");

                    raceGameCanvas.onOver = function(Cbackground){
                        gameOverCanvas.gameClear=Cbackground;
                        gameOverCanvas.obj.style.display = "inline-block";
                        console.log("Onover호출");
                    }
                gameOverCanvas.fromOver = function(choice){ 
                    if(choice=="Yes"){
                        raceGameCanvas.obj.focus();
                        mainCanvas.mute();
                        raceGameCanvas.init();
                        raceGameCanvas.run();

                    }else if(choice=="No"){
                        raceGameCanvas.obj.style.display = "none";
                        mainCanvas.obj.style.display = "inline-block";
                        mainCanvas.isPlay2();
                        mainCanvas.run();
                    }
                  } 
                }

            /* ---------------------------------------ROPE------------------------------------------------ */
                if(this.ropeButton.islocated(x,y)=="rope"){
                    
                    mainCanvas.obj.style.display = "none";
                    gameSelectCanvas.obj.style.display = "none"; 
                    ropeGameCanvas.obj.style.display ="inline-block";
                    ropeGameCanvas.obj.focus();
                    mainCanvas.mute();
                    ropeGameCanvas.init();
                    ropeGameCanvas.run(); 
                    console.log("rope clicked");
                    ropeGameCanvas.onOver = function(Cbackground){ 
                    gameOverCanvas.gameClear=Cbackground;
                    gameOverCanvas.obj.style.display = "inline-block";
                    console.log("Onover호출");
                }
                gameOverCanvas.fromOver = function(choice){ 
                    if(choice=="Yes"){
                        mainCanvas.mute();
                        ropeGameCanvas.obj.focus();
                        ropeGameCanvas.init();
                        ropeGameCanvas.run();

                     }else if(choice=="No"){
                         ropeGameCanvas.obj.style.display = "none";
                         mainCanvas.obj.style.display = "inline-block";
                         mainCanvas.isPlay2();
                        mainCanvas.run();
                        }
                 } 
               }
            }
    }
    if(settingButton.islocated(x,y)=="setting"){
        settingCanvas.obj.style.display = "inline-block";
        settingCanvas.run();
        mainCanvas.mute();
    }
}

mainCanvas.run();
gameOverCanvas.run();
}