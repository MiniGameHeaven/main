class RulesBackground{
    constructor(){
        this.img = document.querySelector("#bg-rules");
    }

    draw(ctx){
        ctx.drawImage(this.img,
            0,0,402,291,
            300,85,405,290);
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
            
export default RulesBackground;