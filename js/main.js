'use strict'

let prodItems = document.querySelector('.products__items');
let filter = document.querySelector('.filter');


let prodObj = [{
        id: '1',
        name: 'Blue Raincoat',
        priceFrom: 80.00,
        priceTo: 125.00,
        descr: 'Охерительный товар, просто сказка!',
        img: "images/rectangle_6_copy_177.png",
        status,
    },
    {
        id: '2',
        name: 'Azure Tote',
        priceFrom: 110.00,
        priceTo: 134.00,
        descr: 'Охерительный товар, просто сказка!',
        img: "images/rectangle_6_copy_166.png",
        status: '<p class="products__best">best seller</p>'
    },
    {
        id: '3',
        name: 'Backpack with contrasting buckle',
        priceFrom: 40.00,
        priceTo: 99.00,
        descr: 'Охерительный товар, просто сказка!',
        img: "images/rectangle_6_copy_152.png",
        status: '<p class="products__best">best seller</p>'
    },
    {
        id: '4',
        name: 'Shirt in organic cotton classic gingham',
        priceFrom: 100.00,
        priceTo: 155.00,
        descr: 'Охерительный товар, просто сказка!',
        img: "images/rectangle_6_copy_137.png",
        status: '<p class="products__star">Top rate</p>'
    },
    {
        id: '5',
        name: 'Triple stone drop earrings',
        priceFrom: 280.00,
        priceTo: 325.00,
        descr: 'Охерительный товар, просто сказка!',
        img: "images/rectangle_6_copy_122.png",
        status: '<p class="products__only">Only a few left</p>'
    },
    {
        id: '6',
        name: 'Backpack with contrasting buckle',
        priceFrom: 76.00,
        priceTo: 135.00,
        descr: 'Охерительный товар, просто сказка!',
        img: "images/rectangle_6_copy_91.png",
        status: '<p class="products__best">best seller</p>'
    },
    {
        id: '7',
        name: 'Eye Mesh Boat Shoes',
        priceFrom: 99.00,
        priceTo: 199.00,
        descr: 'Охерительный товар, просто сказка!',
        img: "images/rectangle_6_copy_80.png",
        status: '<p class="products__best">best seller</p>'
    },
    {
        id: '8',
        name: 'Azure Tote',
        priceFrom: 130.00,
        priceTo: 123.00,
        descr: 'Охерительный товар, просто сказка!',
        img: "images/rectangle_6_copy_66.png",
        status: '<p class="products__best">best seller</p>'
    },
    {
        id: '9',
        name: 'Azure Tote',
        priceFrom: 120.00,
        priceTo: 177.00,
        descr: 'Охерительный товар, просто сказка!',
        img: "images/rectangle_6_copy_137.png",
        status: '<p class="products__best">best seller</p>'
    },
    {
        id: '10',
        name: 'Azure Tote',
        priceFrom: 220.00,
        priceTo: 333.00,
        descr: 'Охерительный товар, просто сказка!',
        img: "images/rectangle_6_copy_66.png",
        status: '<p class="products__best">best seller</p>'
    },
    {
        id: '11',
        name: 'Azure Tote',
        priceFrom: 120.00,
        priceTo: 453.00,
        descr: 'Охерительный товар, просто сказка!',
        img: "images/rectangle_6_copy_192.png",
        status: '<p class="products__best">best seller</p>'
    },
    {
        id: '12',
        name: 'Azure Tote',
        priceFrom: 99.00,
        priceTo: 129.00,
        descr: 'Охерительный товар, просто сказка!',
        img: "images/rectangle_6_copy_177.png",
        status: '<p class="products__best">best seller</p>'
    },
    {
        id: '13',
        name: 'Azure Tote',
        priceFrom: 100.00,
        priceTo: 177.00,
        descr: 'Охерительный товар, просто сказка!',
        img: "images/rectangle_6_copy_166.png",
        status: '<p class="products__best">best seller</p>'
    },
    {
        id: '14',
        name: 'Azure Tote',
        priceFrom: 215.00,
        priceTo: 299.00,
        descr: 'Охерительный товар, просто сказка!',
        img: "images/rectangle_6_copy_152.png",
        status: '<p class="products__best">best seller</p>'
    },
    {
        id: '15',
        name: 'Azure Tote',
        priceFrom: 88.00,
        priceTo: 222.00,
        descr: 'Охерительный товар, просто сказка!',
        img: "images/rectangle_6_copy_80.png",
        status: '<p class="products__best">best seller</p>'
    },
    {
        id: '16',
        name: 'Azure Tote',
        priceFrom: 111.00,
        priceTo: 235.00,
        descr: 'Охерительный товар, просто сказка!',
        img: "images/rectangle_6_copy_122.png",
        status: '<p class="products__best">best seller</p>'
    },
    {
        id: '17',
        name: 'Azure Tote',
        priceFrom: 199.00,
        priceTo: 257.00,
        descr: 'Охерительный товар, просто сказка!',
        img: "images/rectangle_6_copy_80.png",
        status: '<p class="products__best">best seller</p>'
    },
    {
        id: '18',
        name: 'T-Shrts',
        priceFrom: 100.00,
        priceTo: 177.00,
        descr: 'Охерительный товар, просто сказка!',
        img: "images/rectangle_6_copy_177.png",
        status: '<p class="products__best">best seller</p>'
    },
    {
        id: '19',
        name: 'Hoodes',
        priceFrom: 120.00,
        priceTo: 187.00,
        descr: 'Охерительный товар, просто сказка!',
        img: "images/rectangle_6_copy_91.png",
        status: '<p class="products__best">best seller</p>'
    },
    {
        id: '20',
        name: 'Azure Booges',
        priceFrom: 109.00,
        priceTo: 234.00,
        descr: 'Охерительный товар, просто сказка!',
        img: "images/rectangle_6_copy_122.png",
        status: '<p class="products__best">best seller</p>'
    },

];
prodObj.forEach(el => {
    let morcup = `<div class="products__item" id="${el.id}">
    <img src="${el.img}" alt="" class="products__img">
    <div class="products__content">
    <div class="products__popup"></div> 
      ${el.status} 
      <p class="products__descr">${el.name}</p>
      <p class="products__price">$ <span class="products__price-from">${el.priceFrom}.00</span> – $<span
          class="products__price-to"> ${el.priceTo}.00 </span>
      </p>
    </div>
    <div class="products__add-to-cart">
      <a href="#" class="products__add" data-target = "${el.id}">add to cart</a>
      <img src="images/kz_heart_160.png" alt="" class="products__heart-icon">
      <img src="images/kz_search_space_161.png" alt="" class="products__search-icon">
    </div>
    
  </div>`;
    // prodItems.insertAdjacentHTML('beforeend', morcup
    prodItems.innerHTML += morcup
})







let prodItem = document.querySelectorAll('.products__item');
let addCart = document.querySelectorAll('.products__add');

prodItem.forEach(el => {
    el.addEventListener('mouseover', (e) => {
        let arr = prodObj.find(el => {
            return el.id === e.target.offsetParent.id
        });

        if (e.target.classList.contains('products__img')) {
            // showBoxProd(arr)
        }
    })
})
// animate__shakeY
addCart.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        let btn = e.target;
        if (btn.textContent === 'add to cart') {
            let numberCart = document.querySelector('.header__number');
            let currentBtn = e.target.dataset.target;
            numberCart.textContent = parseInt(numberCart.textContent)
            numberCart.textContent++
            addBtnAnimation()
            btn.textContent = 'remove to cart'
            let arr = prodObj.find(el => {
                return el.id === currentBtn
            });
            addCartMorcup(arr)


        } else {
            btn.textContent = 'add to cart'
            let numberCart = document.querySelector('.header__number');
            numberCart.textContent = parseInt(numberCart.textContent)
            numberCart.textContent--
        }
    })
})

let btn = document.querySelector('.buttons');
let numberCart = document.querySelector('.header__number');
let cross = document.querySelector('.header__cross');

btn.addEventListener('click', (e) => {
    e.preventDefault()
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
})

let inner = document.querySelector('.header__inner');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 80) {
        inner.style.height = 40 + 'px'
        inner.style.backgroundColor = '#888885'

    } else {
        inner.style.height = 90 + 'px'
        inner.style.backgroundColor = '#e5e5e3'
    }
})

function addBtnAnimation() {
    let numberCart = document.querySelector('.header__number');
    numberCart.style.animation = 'shakeY'
    numberCart.style.animationDuration = '1s'
    numberCart.style.backgroundColor = 'red'
    setTimeout(function () {
        numberCart.style.animation = 'none'
        numberCart.style.animationDuration = 'none'
        numberCart.style.backgroundColor = 'black'
    }, 1000)
}

let cart = document.querySelector('.cart');
numberCart.addEventListener('click', (e) => {

    if (headerArrows.classList.contains('open')) {
        headerArrows.classList.remove('open')
    }

    headerArrows.style.display = 'none'
    document.body.style.overflow = 'hidden';
    numberCart.classList.toggle('open')
    let header = document.querySelector('.header');
    if (e.target.classList.contains('header__number')) {
        header.classList.remove('open')
    }
    numberCart.style.opacity = '0'
    cross.style.opacity = '1';
    cross.style.visibility = 'visible'
    cross.style.animation = 'rotateIn'
    setTimeout(function () {
        cross.style.visibility = 'none'
        cross.style.animation = 'none'
    }, 1000)
    cross.style.animationDuration = '1s'
    cart.style.transform = 'translate' + '(' + 0 + '%' + ')';

    if (inner.offsetHeight === 40) {
        inner.style.height = 90 + 'px'
        inner.style.backgroundColor = '#e5e5e3'


    }
    dsd()
})
cross.addEventListener('click', () => {
    headerArrows.style.display = 'block'
    document.body.style.overflow = 'auto';
    numberCart.style.opacity = '1'
    cross.style.opacity = '0';
    cross.style.visibility = 'hidden'
    cart.style.transform = 'translate' + '(' + '-' + 100 + '%' + ')';

    if (window.pageYOffset > 80) {
        inner.style.height = 40 + 'px'
        inner.style.backgroundColor = '#888885'
    }





})

function addCartMorcup(arr) {
    let morcup = `
    <div class="cart__inner">
        <a href="#" class="cart__link"><img src=${arr.img} class ="cart__img"></a>
        <p class="cart__name">${arr.name} </p>
        <p class="cart__price">${arr.priceFrom}$ - ${arr.priceTo}$</p>
        <div class="cart__box">
        <i class="fas fa-chevron-up cart__up"></i>
        <i class="fas fa-chevron-down cart__down"></i>
        </div>
        <div class="cart__num">1</div>
    </div>`;

    cart.insertAdjacentHTML('beforeend', morcup)
}






function dsd() {

    let cartInner = document.querySelector('.cart__inner');
    let btnDown = document.querySelectorAll('.cart__down');
    let btnUp = document.querySelectorAll('.cart__up');
    // let cartNum = document.querySelector('.cart__num');

    btnDown.forEach(el => {
        el.addEventListener('click', (e) => {
            let numb = el.closest('.cart__inner');
            let cartNum = numb.querySelector('.cart__num')
            cartNum.textContent = Number(cartNum.textContent)
            if (cartNum.textContent > 1) {
                cartNum.textContent--
            } else {
                cartNum.textContent = 1
            }
        })
    })
    btnUp.forEach(el => {
        el.addEventListener('click', (e) => {
            let numb = el.closest('.cart__inner');
            let cartNum = numb.querySelector('.cart__num')
            cartNum.textContent = Number(cartNum.textContent)
            cartNum.textContent++
        })
    })
}

let headerArrows = document.querySelector('.header__arrows');
headerArrows.addEventListener('click', () => {
    document.body.style.overflow = 'hidden'
    let bodyBlock = document.querySelector('.body__block');
    bodyBlock.style.visibility = 'visible'
    bodyBlock.style.opacity = 1
    headerArrows.classList.toggle('open')
    if (headerArrows.classList.contains('open')) {
        inner.style.height = 90 + 'px'
        inner.style.backgroundColor = '#e5e5e3'
    }
    if (!headerArrows.classList.contains('open') && window.pageYOffset > 80) {
        inner.style.height = 40 + 'px'
        inner.style.backgroundColor = '#888885'
    }
    if (!headerArrows.classList.contains('open')) {
        document.body.style.overflow = 'auto'
        bodyBlock.style.visibility = 'hidden'
        bodyBlock.style.opacity = 0
    }
})

// window.addEventListener('click', (e) => {
//     console.log(e.target);

// });

let cartSize = document.querySelectorAll('.cart__size');
cartSize.forEach(el => {
    el.addEventListener('click', () => {
        if (el.classList.contains('active')) {
            el.classList.remove('active')
            return
        }

        for (let val of cartSize) {
            val.classList.remove('active')
        };

        if (!el.classList.contains('active')) {
            el.classList.add('active')
        }
        
    });
})