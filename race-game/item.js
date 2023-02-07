

import context from "./itemContext.js"


export default class Item {
    #img;
    #x;
    #y;
    #width;
    #type;
    #crush;
    #hurdles;

    constructor(x=0, y=0,width =0){

        this.#img = new Image();
       

        this.#x = x;
        this.#y = y;
        this.#type;
        this.#width = this.#img.width;
        this.#crush = [];
        this.#hurdles = [];

    }

    update() {
        
        for(let item of context.items){
            
            if(item === this)
                continue;


            let d = Math.sqrt((this.#x-item.x)*(this.#x-item.x)+(this.#y-item.y)*(this.#y-item.y))
            let sumR = this.#width/2+item.width/2;

            
                // ===== 충돌 ======
            if(this.#crush.indexOf(item) < 0){
                if(d <= sumR){
                    if(this.type=="character" && item.type=="hurdle"){
                                this.#crush.push(item);
                                this.hit();
                                this.lifeLose();
                                break;
                    }                    
                }
            }

            //======점수내기=====
            if(this.#hurdles.indexOf(item) < 0){
                if(this.type=="character" && item.type=="hurdle"){
                    if(this.x-item.x<200 &&this.x-item.x>-200 && this.y<=230){
                        this.#hurdles.push(item);
                        this.onJumpSuccess();
                        break;
                    }
                }

            }
        }
    }
      
     
    draw(ctx) {
        
    }

   


    //================    GET/SET     =================


    //=== 이미지 getter, setter
    get img(){
        // console.log(`${this.type},${this.#img.height}`);
        return this.#img;
    }

    set img(img){
        this.#img = img;
    }

    get imgHeight(){
        // console.log(`${this.type},${this.#img.height}`);
        return this.#img.height;
    }
    
    //=== x값  getter, setter
    get x(){
        return this.#x;
    }

    set x(x){
        this.#x = x;
    }

    //=== y값  getter, setter
    get y(){
        return this.#y;
    }

    set y(y){
        this.#y = y;
    }


    //=== width값  getter, setter
    get width(){
        return this.#img.width;
    }
    set width(w){
        this.#width = w; 
    }



    //==점수 판별=======





}
