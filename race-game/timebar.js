export default class Timebar{
    #imgTimebar01;
    #imgTimebar02;
    #timerun;
    #timelimit;


    constructor(){

        this.#imgTimebar01 = document.getElementById("backtimebar")
        this.#imgTimebar02 = document.getElementById("fronttimebar")
        this.#timelimit =0;
    }

    init(){
        console.log("타임바 초기화 시작")
        this.#timelimit =0;

    }


    update(){
    
          

        this.#timelimit -= (this.#imgTimebar02.width)/10;

        if(this.#timelimit <= -(this.#imgTimebar02.width)){
            this.gameover();
        };


    }

    draw(ctx){
        ctx.drawImage(this.#imgTimebar01,
            0,0,(this.#imgTimebar01.width),(this.#imgTimebar01.height),
            150,670,(this.#imgTimebar01.width),(this.#imgTimebar01.height))
           
        ctx.drawImage(this.#imgTimebar02,
            0,0, (this.#imgTimebar02.width)+this.#timelimit, (this.#imgTimebar02.height),
            150,670, (this.#imgTimebar02.width)+this.#timelimit, (this.#imgTimebar02.height))
    }

}