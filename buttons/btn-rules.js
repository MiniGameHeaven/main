export default class RuleButton{
    constructor(){

        this.ruleBtnImg = new Image();
        this.ruleBtnImg.src = "../img/btn-rules.png"
      
    }

    draw(ctx){
            ctx.drawImage(this.ruleBtnImg,
                0,0,851,397,
                425,249,278/2,67/2);

      
    }

    islocated(x,y){
        console.log(x);
        console.log(y);
        if(x>450 && x<550 && y>250 && y<300)
            return "rules";
       
    }
    
    update(){

        
    };
}
            
