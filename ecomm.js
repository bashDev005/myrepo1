/* object of array as a container that keeps our entire products */
const products = [
    {
        id: 101,
        Image: 'image file', /*image file here <<< */
        name: 'Laptop',
        price: 200000,
        category: 'Electronics'
    },

    {
        id: 102,
        Image: 'image file', /*image file here <<< */
        name: 'Iphone',
        price: 200000,
        category: 'Electronics'
    },

    {
        id: 102,
        Image: 'image file', /*image file here <<< */
        name: 'Speaker',
        price: 200000,
        category: 'Electronics'
    }
];
 // our cart container as array....
let cart = [];

//target out html container that displays the products....
const container = document.getElementById('productsContainer');
 
// looping throught our products array.....
products.forEach(product => {

    // create small container for each product...
    const card = document.createElement("div");
    
    card.innerHTML = `
       <h3>${product.name}</h3>
       <p>N${product.price}</p>
       <span>${product.category}</span>
       <button class="button">Add to cart</button>
    `;

    const button = card.querySelector('.button');
     button.addEventListener("click", () => {
        cart.push(product);
        console.log(cart);
     });

     container.appendChild(card);
});