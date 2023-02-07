class MainBackground{
    constructor(){
        this.img = document.querySelector("#main");
    }

    draw(ctx){
        ctx.drawImage(this.img,
            0,0,1200,1000,
            0,0,1000,700);
    }
    update(){

        
    };
}
            
export default MainBackground;