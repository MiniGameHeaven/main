
export default class Score {
    #img;
    #ten;
    #hund;


    constructor(){
  
        this.#img = new Image();
        this.#img.src = "../img/numbers.png";
        this.#ten = 0;
        this.#hund = 0;
    }


    init(){

        this.#ten = 0;
        this.#hund = 0;

    }


            //===점수 올리기
        up(){
                this.#ten++;
        
                if(this.#ten == 10){
                    this.#hund++;
                    this.#ten = 0;
                }
                if( this.#hund == 10)
                    this.#hund =0;
        }

        draw(ctx){
    
    //--------------점수판그리기--------------------------------------------------------------
            ctx.drawImage(this.#img,
                        50*this.#hund,0,50,45,
                        800,50,50,45)
            ctx.drawImage(this.#img,
                        50*this.#ten,0,50,45,
                        850,50,50,45)
            ctx.drawImage(this.#img,
                        0,0,50,45,
                        900,50,50,45)
    
    
   
    
            
        }

    
    
    }