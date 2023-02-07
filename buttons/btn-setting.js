class SettingButton{
    constructor(){
        this.settingBtnImg = new Image();
        this.settingBtnImg.src ="../img/btn-setting.png"
      
    }

    draw(ctx){
        
            ctx.drawImage(this.settingBtnImg,
                0,0,851,397,
                425,300,278/2,67/2);
    }

    islocated(x,y){
        console.log(x);
        console.log(y);
   
        if(x>450 && x<550 && y>300 && y<350){
            console.log("setting clicked");
            return "setting";
        }
    }
    
    update(){

        
    };
}
            
export default SettingButton;
 