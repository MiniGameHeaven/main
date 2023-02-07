export default class Background {
    constructor() {
        this.#img = new Image();
        this.#img.src = "../img/bg-rope.png";
    }

    draw(ctx){
        ctx.drawImage(this.#img,
            0, 0, 451, 340,
            0, 0, 1000, 700);
    }
    #img;
}