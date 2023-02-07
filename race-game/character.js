import context from "./itemContext.js"
import Item from "./item.js"



export default class Character extends Item{
 
    constructor(){

        super();
        //캐릭터 
        this.img = document.getElementById("character");
        this.#hitImg = new Image();
        this.#hitImg = document.getElementById("hitcharacter");

        //캐릭터의 생명
        this.#imglife = document.getElementById("life")
        this.#lifeIndex = 3;

        
      
        
        //캐릭터 위치
        this.x = 100+this.width/2;
        this.y = 500+this.img.height/2;
        this.width = this.img.width/8;
        this.type = "character";
       

        this.#speed = 5;    //캐릭터 좌우 이동단위
        this.#jumpspeed = 10;   //점프 이동 단위
        this.#imgIndex = 0;     //스프라이트 캐릭터 인덱스 
        this.#hitImgIndex = 0;

        this.#imgDelayIndex = 0;
        this.#imgDelayIndex2 = 0;
        this.#imgDelayIndex3 = 0;

        this.#flagE = false;
        this.#flagW = false;
        this.#flagUp = false;
        this.#isFalling = false;

        //충돌비교 변수
        this.#ishit=false;
    }


    init(){
        this.#lifeIndex = 3;
        this.x = 100+this.width/2;
        this.y = 500+this.img.height/2;


        this.#imgIndex = 0;     //스프라이트 캐릭터 인덱스 
        this.#hitImgIndex = 0;

        this.#imgDelayIndex = 0;
        this.#imgDelayIndex2 = 0;
        this.#imgDelayIndex3 = 0;

        this.#flagE = false;
        this.#flagW = false;
        this.#flagUp = false;
        this.#isFalling = false;

        //충돌비교 변수
        this.#ishit=false;
    }


  

    draw(ctx){
        //=========생명 그림 그리기
        ctx.drawImage(this.#imglife,
            0,0,this.#imglife.width/3*this.#lifeIndex,this.#imglife.height,
            50,50,50*this.#lifeIndex,50);

       
        //---------  boolean 타입의 ishit으로 넘어졌을 때 캐릭터 바꿔줌 --------
        
            //===== 넘어졌을 때 이미지
        if(this.#ishit){
            ctx.drawImage(this.#hitImg, 
                (this.#hitImg.width/5)*this.#hitImgIndex,0,  (this.#hitImg.width/5), (this.#hitImg.height), 
                this.x-this.#hitImg.width/5/2, this.y-this.img.height/2,100, 100);
            //if(++this.#imgDelayIndex2%20 ==0)
                if(this.#hitImgIndex == 4){
                    this.#ishit=false;
                    this.#hitImgIndex =0;
                }
        }

            //===== 평상시 이미지
        else
            ctx.drawImage(this.img, 
                (this.img.width/8)*this.#imgIndex,0,  (this.img.width/8), (this.img.height), 
                this.x-this.width/2, this.y-this.img.height/2,100, 100);
        }
        
    

    


    //--------------- keydown event 발생 시 좌우 이동 update 시작 ---------------
    move(e){
                //이동은 update에서 상세처리
                //여기서는 방향상태만 바꾸는 걸로
        switch(e){
            case "Right" :
                this.#flagE = true;
                break;
            case "Left" :
                this.#flagW = true;
                break;
            case "Jump" : 
                if(this.#flagUp == false)
                    this.#flagUp = true;
                else 
                    break;
        }   
    }


    //--------------- keyup event 발생 시 좌우 이동 update 멈춤 ---------------
    stop(e){
                //이동은 update에서 상세처리
                //여기서는 방향상태만 바꾸는 걸로
        switch(e){
            case "Right" :
                this.#flagE = false;
                break;

            case "Left" :
                this.#flagW = false;
                break;
        }
    }

   

    //=====jump update============
    jump(){
                //올라가능중
            if(!this.#isFalling && this.#flagUp && this.y <= 500+this.img.height/2 && this.y >= 200)
                this.y -= this.#jumpspeed;
                //꼭대기에서 플래그 바꾸기
            if(!this.#isFalling && this.#flagUp && this.y <= 200)
                this.#isFalling = true;
                //떨어지는중
            if(this.#isFalling && this.#flagUp && this.y< 500+this.img.height/2)
                this.y += this.#jumpspeed;
                //원점에서 모든것 원상복구
            if(this.#flagUp && this.y>= 500+this.img.height/2){
                    this.#flagUp = false;
                    this.#isFalling = false;   
                }
            }


    //===충돌시 캐릭터 이미지 바꾸기, 하트 줄이기 용도===
    hit(){
        this.#ishit = true;
        this.#lifeIndex--;
        if(this.#lifeIndex == 0)
            this.gameover();
    }

    
    //점진적인 변화 담당 
    update(){
        super.update();
            
            //---------- 좌우 이동 update ----------
        if(this.#flagE)
            this.x+=this.#speed;
        if(this.#flagW)
            this.x-=this.#speed;
        
            //---------- 점프
        this.jump();
        
            //---------- 이미지 스프라이트 update ----------
        if((++this.#imgDelayIndex%7 == 0))
            this.#imgIndex =this.#imgDelayIndex%8;
        else if(this.#ishit&&(++this.#imgDelayIndex2%7 == 0 )){
            this.#hitImgIndex = ++this.#imgDelayIndex3%5; 
        }
    }


//========get/set============
    get width(){
        return super.width/8;
    }
    set width(w){
        super.width = w;
    }

    
    

    
    #hitImg;
    #hitImgIndex;
    #speed;#imgIndex;
  
    #imgDelayIndex;
    #flagE;#flagW;#flagUp;
    #jumpspeed;
    #isFalling;
    #ishit;
    #imglife;
    #lifeIndex;
    #imgDelayIndex2;
    #imgDelayIndex3;
  


}
