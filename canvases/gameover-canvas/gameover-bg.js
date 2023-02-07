export default class GameoverBackground{
    constructor(){
        this.img = document.querySelector("#bg-gameover");
        this.img2 = document.querySelector("#bg-clear");
    }

    draw(ctx, Cbackground){
        if(Cbackground != "clear")
            ctx.drawImage(this.img,
                0,0,1000,700,
                0,0,600,450);
        if(Cbackground == "clear")
            ctx.drawImage(this.img2,
                0,0,1000,700,
                0,0,600,450);
    }
    update(){

        
    };
}
            