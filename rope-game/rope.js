import Character from "./character.js";
import Score from "./score.js";

export default class Rope {
    constructor(x = 180, y = 300) {
        this.#character = new Character();
        this.#score = new Score();
        this.#x = x;
        this.#y = y;
        this.#speed = 10;

        this.#imgDelayIndex = 0;
        this.#imgIndex2 = 0;
        this.#img = new Image();
        this.#img.src = "../img/rope.png";
    }

    draw(ctx) {
        let x = this.#x;
        let y = this.#y;
        ctx.drawImage(this.#img,
                0, 353*this.#imgIndex2, 707, 353,
                x, y, 600, 300);
    }

    update() {
        if(++this.#imgDelayIndex%5 == 0){
                    ++this.#imgIndex2;
                    if(this.#imgIndex2 == 11 ) 
                        this.#imgIndex2=0;
            }
        }

    get imgIndex2 (){
        return this.#imgIndex2;
    }

    init(x,y){
        this.#x = x;
        this.#y = y;
        this.#speed = 30;
        this.#imgDelayIndex = 0;
        this.#imgIndex2 = 0;
    }

    #x;
    #y;
    #speed;
    #imgDelayIndex;
    #imgIndex2;
    #img;
    #character;
    #score;
    }
