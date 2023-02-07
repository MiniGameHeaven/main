class HeartButton{
    constructor(x,y,isOn){
        this.img = document.querySelector("#check");
        this.x = x;
        this.y = y;
        this.pressed = isOn;

    }

    draw(ctx){
            if(this.pressed)
                ctx.drawImage(this.img,
                    0,0,28,26,
                    this.x,this.y,28,26);
        

    }

    islocated(x,y){
        if(y>190 && y<230){
            if(x>600 && x<630){
                return "offBgm"
              
            }
            else if (x>520 && x<560){
                return "onBgm"
           
            }
        }

        if(y>250 && y<280){
            if(x>600 && x<630){
                return "offSfx"
             
            }
            else if (x>520 && x<560){
                return "onSfx"
               
            }
        }
    }
    


    update(){

        
    };
}
            
export default HeartButton;