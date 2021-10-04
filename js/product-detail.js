document.querySelectorAll('.product-img-item').forEach(e => {
    e.addEventListener('click', () => {
        let img = e.querySelector('img').getAttribute('src');
        document.querySelector('#product-img > img').setAttribute('src', img);
    })
})

document.querySelector('#view-all-description').addEventListener('click', () => {
    let content = document.querySelector('.product-detail-description-content');
    content.classList.toggle('active');
    document.querySelector('#view-all-description').innerHTML = content.classList.contains('active') ? 'view less' : 'view all';
})

let products = [
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

let product_list = document.querySelector('#related-products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
                        <div class="col-3 col-md-4 col-sm6">
                            <div class="product-card">
                                <div class="product-card-img">
                                    <img src="${e.image1}" alt="">
                                    <img src="${e.image2}" alt="">
                                </div>
                                <div class="product-card-info">
                                    <div class="product-btn">
                                        <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
                                        <button class="btn-flat btn-hover btn-cart-add">
                                            <i class='bx bxs-cart-add'></i>
                                        </button>
                                        <button class="btn-flat btn-hover btn-cart-add">
                                            <i class='bx bxs-heart'></i>
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
                        </div>
                    `
        product_list.insertAdjacentHTML("beforeend", prod)
    })
}

renderProducts(products);

console.log(window.innerWidth);

let product_detail = document.querySelectorAll('.product-row > div');

if(window.innerWidth < 992) {
    product_detail.forEach(e => {
        let classes = e.classList;
        classes.replace('col-5', 'col-6');
        classes.replace('col-md-6', 'col-md-11');
    })
}
