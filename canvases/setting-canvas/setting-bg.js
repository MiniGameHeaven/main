class SettingBackground{
    constructor(){
        this.img = new Image();
        this.img.src = "../../img/bg-setting.png";
        // this.img = document.querySelector("#bg-setting");
    }

    draw(ctx){
        ctx.drawImage(this.img,
            0,0,402,291,
            0,0,405,290);
    }
    update(){

        
    };
}
            
export default SettingBackground;