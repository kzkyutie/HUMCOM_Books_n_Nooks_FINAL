let openCart = document.querySelector('.shopping')
let closeCart = document.querySelector('.closeCart')
let list = document.querySelector('.list')
let listCart = document.querySelector('.listCart')
let body = document.querySelector('body')
let total = document.querySelector('.total')
let quantity = document.querySelector('.quantity')

openCart.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeCart.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        name: 'Clockwork Angel',
        author: 'Cassandra Clare',
        image: 'product 1.jpg',
        price: '₱220'
    },
    {
        id: 2,
        name: 'Clockwork Prince',
        author: 'Cassandra Clare',
        image: 'product 2.jpg',
        price: '₱220'
    },
    {
        id: 3,
        name: 'Clockwork Princess',
        author: 'Cassandra Clare',
        image: 'product 3.jpg',
        price: '₱220'
    },
    {
        id: 4,
        name: 'City of Bones',
        author: 'Cassandra Clare',
        image: 'product 4.jpg',
        price: '₱220'
    },
    {
        id: 5,
        name: 'City of Ashes',
        author: 'Cassandra Clare',
        image: 'product 5.jpg',
        price: '₱220'
    },
    {
        id: 6,
        name: 'City of Glass',
        author: 'Cassandra Clare',
        image: 'product 6.jpg',
        price: '₱220'
    },
    {
        id: 7,
        name: 'City of Fallen Angels',
        author: 'Cassandra Clare',
        image: 'product 7.jpg',
        price: '₱220'
    },
    {
        id: 8,
        name: 'City of Lost Souls',
        author: 'Cassandra Clare',
        image: 'product 8.jpg',
        price: '₱220'
    },
    {
        id: 9,
        name: 'City of Heavenly Fire',
        author: 'Cassandra Clare',
        image: 'product 9.jpg',
        price: '₱220'
    },

];

let listCarts = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src = "images/products/${value.image}"/>
            <div class = "title">${value.name}</div>
            <div class = "price">${value.price.toLocaleString()}</div>
            <button oneclick="addToCart(${key})"Add to Cart"</button>
        `;
        list.appendChild(newDiv);
    })
}
initApp();