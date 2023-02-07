export default class GameOverButton{
    constructor(){
        this.imgY = document.querySelector("#yes");
        this.imgN = document.querySelector("#no");
        this.imgY11 = document.querySelector("#yes11");
        this.imgN22 = document.querySelector("#no22");
       
    }

    draw(ctx, Cbackground){
        if(Cbackground != "clear"){
            ctx.drawImage(this.imgY,
                0,0,103,47,
                185,350,80,40);
            ctx.drawImage(this.imgN,
                0,0,86,48,
                295,350,80,40);
        }
        if(Cbackground == "clear"){
            ctx.drawImage(this.imgY11,
                0,0,103,47,
                185,350,80,40);
            ctx.drawImage(this.imgN22,
                0,0,86,48,
                295,350,80,40);
        }
    }

    islocated(x,y){
        console.log(x);

        console.log(y);
        if(x>380 && x<460 && y>430 && y<460)
            return "Yes";
            // return "gameover";
        if(x>500 && x<560 && y>430 && y<460)
            return "No";
    }
    
    update(){

        
    }
}
            