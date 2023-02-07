export default class RopeButton{
    constructor(){
        this.img = document.querySelector("#rope");
    }

    draw(ctx){
        ctx.drawImage(this.img,
            0,0,this.img.width,this.img.height,
          560,320,this.img.width/2,this.img.height/2);

    }

    islocated(x,y){
        console.log(x);
        console.log(y);
        if(x>565 && x<651 && y>323 && y<357)
            return "rope";
       
    }
    
    update(){

        
    };
}
            
