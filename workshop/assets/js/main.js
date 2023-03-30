// import
import Product from "./models/product.js";



const ssd = new Product("SSD 1TB", "super fast ssd drive", 60, "PC hardware", 120);
const monitor = new Product("AOC MONITOR", "thin 24 inch monitor", 140.99, "PC components");
console.log(ssd);
console.log(monitor);
//console.log(my_product);

ssd.in_stock = true
console.log(ssd)
ssd.addlikes()
ssd.addlikes()
ssd.addlikes()
ssd.addlikes()
ssd.addlikes()
console.log(ssd)

const products = [

  new Product('SSD 1TB Crucial Disk', 'Super fast SSD drive', 49.99, 'PC Hardware', './assets/img/ssd.jpg'),
  new Product('Aoc 24inc Monitor', 'ultra thin monitor', 149.99, 'PC Monitors', './assets/img/monitor.jpg'),
  new Product('Corsair ATX Case', 'Small form factor atx desktop pc case', 99.99, 'PC Accessories', './assets/img/case.jpg'),
  new Product('Anker Vertical mouse', 'Comfy vertical mouse', 29.99, 'PC accessories', './assets/img/mouse.jpg'),
  new Product('Lenovo Idea pad', 'Modern 8gb ram ultra thin laptop', 549.99, 'Laptops', './assets/img/laptop.webp'),
  new Product('Walking desk', 'Get fit with the best walking desk', 649.99, 'Office equipment', './assets/img/desk.webp')
]

const productsElement = document.getElementById('products')

products.forEach(product => {
    const {name, price, description, image_path} = product
    const markup = `<div class="product">
    <span class="price">${price}</span>
    <img class="img.fluid" src="${image_path}" alt="${name}">
    <div class="product-body">
        <h4>${name}</h4>   
        <p>${description}</p> 
        <button data-product-price="${price}" data-product-name="${name}">Buy Now</button>
    </div>    
</div>
    `
    productsElement.insertAdjacentHTML('beforeend', markup)
});

const buttonslist = document.querySelectorAll('.product button')


//const cart = [];

let sum = 0;
buttonslist.forEach(button =>{
    console.log(button)
    button.addEventListener('click', function(){
        console.log(this);
        const product_name = this.getAttribute('data-product-name')
        const product_price = this.getAttribute('data-product-price')
        console.log(product_name, product_price)
        //cart.push(product_price)
        //console.log(cart);
        sum += parseFloat(product_price);

        document.querySelector('.cart').insertAdjacentHTML('beforeend', `<li>${product_name} ${product_price}</li>`)

        document.querySelector('.total').innerHTML = `<strong>Total: €${sum.toFixed(2)}</strong>`
    })
})