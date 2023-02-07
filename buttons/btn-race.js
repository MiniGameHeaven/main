export default class RaceButton{
    constructor(){
        this.img = document.querySelector("#race");
    }
        

    // }
    draw(ctx){
        ctx.drawImage(this.img,
            0,0,this.img.width,this.img.height,
            340,320,this.img.width/2,this.img.height/2);

    }

    islocated(x,y){
        console.log(x);
        console.log(y);
        if(343<x&& x<436 && y>322 && y<350)
        return "race";
       
    }
    
    update(){

        
    };
}
            
