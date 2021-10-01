let slide_index = 0;
let slide_play = true;
let slides = document.querySelectorAll('.slide');

hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active');
    })
}

showSlide = () => {
    hideAllSlide();
    slides[slide_index].classList.add('active');
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1
prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

/*
document.querySelector('.slider').addEventListener('mouseover', () => {
    slide_play = false;
})
document.querySelector('.slider').addEventListener('mouseleave', () => {
    slide_play = true;
})
*/

document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide()
    showSlide()
})

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide()
    showSlide()
})

showSlide()

/*
setInterval(() => {
    if(!slide_play) return
    nextSlide()
    showSlide()
}, 3000);
*/

let products = [
    /*{
        name: 'Converse x Tyler Artist Series',
        image1: 'img/collaboration.jpg',
        image2: 'img/collaboration2.jpg',
        old_price: '115,000',
        curr_price: '105,000'
    },
    */
    {
        name: 'Converse x Basquiat',
        image1: 'img/collaboration3.jpeg',
        image2: 'img/collaboration4.jpeg',
        old_price: '125,000',
        curr_price: '115,000'
    },
    {
        name: 'Converse x Comme Des Garçons Play',
        image1: 'img/collaboration5.jpeg',
        image2: 'img/collaboration6.jpeg',
        old_price: '198,000',
        curr_price: '178,000'
    },
    {
        name: 'Converse x Joe Freshgoods',
        image1: 'img/collaboration7.jpeg',
        image2: 'img/collaboration8.jpeg',
        old_price: '140,000',
        curr_price: '130,000'
    },
    {
        name: 'Converse x Tyler Artist Series',
        image1: 'img/collaboration.jpg',
        image2: 'img/collaboration2.jpg',
        old_price: '115,000',
        curr_price: '105,000'
    },
    {
        name: 'Converse x Basquiat',
        image1: 'img/collaboration3.jpeg',
        image2: 'img/collaboration4.jpeg',
        old_price: '125,000',
        curr_price: '115,000'
    },
    {
        name: 'Converse x Comme Des Garçons Play',
        image1: 'img/collaboration5.jpeg',
        image2: 'img/collaboration6.jpeg',
        old_price: '198,000',
        curr_price: '178,000'
    },
    {
        name: 'Converse x Joe Freshgoods',
        image1: 'img/collaboration7.jpeg',
        image2: 'img/collaboration8.jpeg',
        old_price: '140,000',
        curr_price: '130,000'
    },
]

let product_list = document.querySelector('#collaboration');
let best_product_list = document.querySelector('#best-products');

products.forEach(e => {
    let prod = `<div class="col-3 col-md-6 col-sm-12">
                    <div class="product-card">
                        <div class="product-card-img">
                            <img src="${e.image1}" alt="">
                            <img src="${e.image2}" alt="">
                        </div>
                        <div class="product-card-info">
                            <div class="product-btn">
                                <button class="btn-flat btn-hover btn-shop-now">Shop Now</button>
                                <button class="btn-flat btn-hover btn-cart-add">
                                    <i class="bx bxs-cart-add"></i>
                                </button>
                                <button class="btn-flat btn-hover btn-cart-add">
                                    <i class="bx bxs-heart"></i>
                                </button>
                            </div>
                            <div class="product-card-name">
                                ${e.name}
                            </div>
                            <div class="product-card-price">
                                <span><del>${e.old_price}</del></span>
                                <span class="curr-price">${e.curr_price}</span>
                            </div>
                        </div>
                    </div>
                </div>`;

    product_list.insertAdjacentHTML("beforeend", prod);
    best_product_list.insertAdjacentHTML("afterbegin", prod);
})

document.querySelectorAll('.dropdown > a').forEach(e => {
    e.addEventListener('click', (event) => event.preventDefault())
})

document.querySelectorAll('.mega-dropdown > a').forEach(e => {
    e.addEventListener('click', (event) => event.preventDefault())
})

document.querySelector('#mb-menu-toggle').addEventListener('click', () => {
    document.querySelector('#header-wrapper').classList.add('active')
})

document.querySelector('#mb-menu-close').addEventListener('click', () => {
    document.querySelector('#header-wrapper').classList.remove('active')
})
