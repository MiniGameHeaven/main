export default class Background{



    constructor(){

    this.#skyX = 0;
    this.#skySpeed = 0;
    this.#skyImg = new Image();
    this.#skyImg.src = "../img/bg-run.png";

    this.#cloudX = 0;
    this.#cloudSpeed = 1;
    this.#cloudImg = new Image();
    this.#cloudImg.src = "../img/clouds.png";


    this.#treeX = 0;
    this.#treeSpeed = 2;
    this.#treeImg = new Image();
    this.#treeImg.src = "../img/trees.png";

    this.#bushX = 0;
    this.#bushSpeed = 3;
    this.#bushImg = new Image();
    this.#bushImg.src = "../img/bushes.png";


    this.#groundX = 0;
    this.#groundSpeed = 4;
    this.#groundImg = new Image();
    this.#groundImg.src = "../img/ground.png";

    this.#imgEnding = new Image();
    this.#imgEnding.src = "../img/ending.png"



    }

    init(){
        console.log("백그라운드 초기화 시작")

        this.#skyX = 0;
        this.#skySpeed = 0;

        this.#cloudX = 0;
        this.#cloudSpeed = 1;

        this.#treeX = 0;
        this.#treeSpeed = 2;

        this.#bushX = 0;
        this.#bushSpeed = 3;

        this.#groundX = 0;
        this.#groundSpeed = 4;


    }

    //배경의 반복되는 코드를 개선할 방법 생각해보기

    draw(ctx){
        
        //------------1. sky ------------------
        ctx.drawImage(this.#skyImg, 
            0, 0,  1000, 700,
            this.#skyX, 0, 1000, 700);

        //-----------2. cloud -----------------
        ctx.drawImage(this.#cloudImg,
            0, 0, 1000, 700,
            this.#cloudX, 0, 1000, 700);

        ctx.drawImage(this.#cloudImg,
            0, 0, 1000, 700,
            1000+this.#cloudX, 0, 1000, 700);
       
        
        //-----------3. tree ------------------
        ctx.drawImage(this.#treeImg,
            0, 0, 1000, 700,
            this.#treeX, 0, 1000, 700);

        ctx.drawImage(this.#treeImg,
            0, 0, 1000, 700,
            1000+this.#treeX, 0, 1000, 700);

    
        //-----------4. bush -----------------

        ctx.drawImage(this.#bushImg,
            0, 0, 1000, 700,
            this.#bushX, 0, 1000, 700);

        ctx.drawImage(this.#bushImg,
            0, 0, 1000, 700,
            1000+this.#bushX, 0, 1000, 700);

        //----------5. ground ---------------

        ctx.drawImage(this.#groundImg,
            0, 0, 1000, 700,
            this.#groundX, 0, 1000, 700);

        ctx.drawImage(this.#groundImg,
            0, 0, 1000, 700,
            1000+this.#groundX, 0, 1000, 700);
       


    }


    update(){

        this.#cloudX-=this.#cloudSpeed;

        if(this.cloudX < -1000 ){
            this.cloudX = 0
        };

        this.#treeX-=this.#treeSpeed;

        if( this.#treeX < -1000){
            this.#treeX = 0
        };

        this.#bushX-=this.#bushSpeed;

        if( this.#bushX < -1000){
            this.#bushX = 0
        };

        this.#groundX-=this.#groundSpeed;

        if(this.#groundX < -1000 ){
            this.#groundX = 0
        };

    
    }


    //---------------게임 엔딩화면 그리기--------------------
    drawEnding(ctx){
        ctx.drawImage(this.#imgEnding,0,0);
    }

    #skyX;    #skySpeed;    #skyImg;
    #cloudX;  #cloudSpeed;  #cloudImg;
    #treeX;   #treeSpeed;   #treeImg;
    #bushX;   #bushSpeed;   #bushImg; 
    #groundX; #groundSpeed; #groundImg; #imgEnding;

}

