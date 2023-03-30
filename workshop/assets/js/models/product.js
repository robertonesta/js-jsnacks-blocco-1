export default class Product {
    
    //name = "vertical mouse";
    //description = "lorem ipsum"
    in_stock = false
    constructor(name, description, price, category, image_path, likes = 100)
    {
        this.name = name
        this.description = description
        this.price = price
        this.category = category
        this.image_path = image_path
        this.likes = likes
    }


    addlikes(){
        this.likes++  
    }
}
//Option 1 named export (ce ne possono essere uno o più di uno)
//Per importare un named export si usa questa sintassi
//import {Product} from "./models/product.js"
//named export
//export {Product}

//rename named export
//export {Product as ProductClass}

//Option 2 Default export (ce ne può essere solo uno)
//import Product from "./models/product.js"
//export {Product as default}