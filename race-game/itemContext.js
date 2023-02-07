class ItemContext{

    #items;
   

    constructor(){
        this.#items = [];
    }

    get items(){

        return this.#items;
    }


   

}


export default new ItemContext();