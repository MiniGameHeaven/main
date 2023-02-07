class PlayButton{
    constructor(){

        this.playBtnImg = document.querySelector("#play");
      
    }

    draw(ctx){
            ctx.drawImage(this.playBtnImg,
                0,0,851,397,
                425,200,278/2,67/2);

      
    }

    islocated(x,y){
        console.log(x);
        console.log(y);
        if(x>450 && x<550 && y>200 && y<250)
            return "play";
       
    }
    
    update(){

        
    };
}
            
export default PlayButton;
 