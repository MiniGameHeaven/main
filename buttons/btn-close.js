class CloseButton{
    constructor(){
        this.img = document.querySelector("#close");

        const buttonAudio = document.getElementById("buttonAudio");
    
    }

    draw(ctx){
        ctx.drawImage(this.img,
            0,0,34,32,
            360,10,34,32);

    }

    islocated(x,y){
        console.log(x);
        console.log(y);
        if(x>670 && x<690 && y>100 && y<120)
            return "close";
            buttonAudio.play();
       
    }
    
    update(){

        
    };
}
            
export default CloseButton;