export default class Score {
    constructor() {
        this.#score = 0;
    }

    draw(ctx) {
        ctx.font = "bold 38px Galmuri7";
        ctx.fillText(`Score: ${this.#score}`, 1000 - 250, 115);
    }

    checkScore(y,iscrashed) {

        console.log("ddddddddddd");
        if(!iscrashed && (370<= y && y <=470)){
            console.log("점프성공");
            this.#score += 10;
        }
    }

    init(){
        this.#score = 0;
    }

    get score(){
        return this.#score;
    }
    #score;
}
