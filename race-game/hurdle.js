import context from "./itemContext.js"
import Item from "./item.js"

export default class Hurdle extends Item{

    
    #speed;
    #imgDelayIndex;
    #imgIndex;
  

    constructor(x=0, y=0, width =0,count){
        super();
        
    this.count = count;
    this.type = "hurdle";

   
    this.img = document.getElementById("hurdle");
    this.width = this.img.width;
     
    
        
    //허들위치
    this.x = 1000+this.width/2;        
    this.y = 470+this.img.height/2;
    //console.log(this.y);
    this.width = this.img.width/6;
    
    this.#speed = 5;
    
    this.#imgIndex = 0;     //스프라이트 캐릭터 인덱스 
    this.#imgDelayIndex = 0;
    
    
}
    
    draw(ctx){
        
        ctx.drawImage(this.img,
            this.width*this.#imgIndex, 0, this.width, this.img.height, 
            this.x-this.width/2, this.y-this.img.height/2, this.width, this.img.height);
            
        }
        
   



    update(){

            super.update();
            this.x -= this.#speed;

            if(++this.#imgDelayIndex%15 == 0)
            this.#imgIndex = ++this.#imgIndex%6
            
            if(this.x<50)
                this.onOutofCanvas(this);
        }
        


//===set//
        get width(){
            return super.width/6;
        }
        
        
        set width(w){
            super.width = w;
            
        }
        
        
        
        
        
        
}
