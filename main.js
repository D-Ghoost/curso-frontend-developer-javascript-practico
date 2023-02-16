const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const burgerMenu = document.querySelector(".menu")
const menuCarrito = document.querySelector(".navbar-shopping-cart")
const productDetailCloseIcon = document.querySelector(".product-detail-close")
const mobileMenu = document.querySelector(".mobile-menu")
// Previsualizacion del carrito
const shoppingCardContainer = document.querySelector("#shoppingCardContainer")
const productDetailContainer = document.querySelector("#productDetail")
const cardsContainer = document.querySelector(".cards-container")

// cuando haga click
menuEmail.addEventListener('click', toggleDesktopMenu)
burgerMenu.addEventListener('click', toggleMobileMenu)
menuCarrito.addEventListener('click', toggleCarrito)
productDetailContainer.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {
    const isshoppingCardContainerClosed = shoppingCardContainer.classList.contains('inactive')
    const productDetailClose = productDetailContainer.classList.contains('inactive')

    if (!isshoppingCardContainerClosed || !productDetailClose) {
        shoppingCardContainer.classList.add('inactive')
        productDetailContainer.classList.add('inactive')
    }
    // classList.toggle -> pone o quita la clase inactive
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isshoppingCardContainerClosed = shoppingCardContainer.classList.contains('inactive')

    if (!isshoppingCardContainerClosed) {
        shoppingCardContainer.classList.add('inactive')
    }

    const productDetailClose = productDetailContainer.classList.contains('inactive')
    
    if (!productDetailClose) {
        productDetailContainer.classList.add('inactive')
    }

    // classList.toggle -> pone o quita la clase inactive
    mobileMenu.classList.toggle('inactive')
}

function toggleCarrito() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDeskMenuClosed = desktopMenu.classList.contains('inactive')

    if (!isMobileMenuClosed || !isDeskMenuClosed) {
        mobileMenu.classList.add('inactive')
        desktopMenu.classList.add('inactive')
    }

    const productDetailClose = productDetailContainer.classList.contains('inactive')
    
    if (!productDetailClose) {
        productDetailContainer.classList.add('inactive')
    }

    shoppingCardContainer.classList.toggle('inactive')
}

const productList = []

productList.push({
    name:'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name:'Manga',
    price: 50,
    image:'https://aweita.cronosmedia.glr.pe/original/2021/07/14/60d38e30c5cc731b78371fbb.jpg'
})

productList.push({
    name:'Audifonos',
    price: 80,
    image:'https://revistadc.com/wp-content/uploads/2020/09/VSG-mundo-gamer-audifonos-Singularity.jpg'
})

/*
<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>
*/

function openProductDetailAside() {
    const menuEmailEnable = menuEmail.classList.contains("inactive")
    if(!menuEmailEnable){
        desktopMenu.classList.add('inactive')
    }
    shoppingCardContainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')

}

function renderProducts(arr) {
    
for (product of arr) {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')

    const productImg = document.createElement('img')
    // la primera variable es el atributo a cambiar, la segunda es el valor que tendra el atributo
    productImg.setAttribute('src',product.image)
    productImg.addEventListener('click',openProductDetailAside)

    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')

    const productInfoDiv = document.createElement('div')
    const productPrice = document.createElement('p')
    productPrice.innerText = '$'+product.price 
    const productName = document.createElement('p')
    productName.innerText = product.name

    productInfoDiv.append(productPrice,productName)

    const productInfoFigure = document.createElement('figure')
    const productImgCart = document.createElement('img')
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')

    productInfoFigure.append(productImgCart)
    productInfo.append(productInfoDiv,productInfoFigure)

    productCard.append(productImg,productInfo)

    cardsContainer.appendChild(productCard)

}
}

renderProducts(productList)

// *** Notas ***//

// for con of( de ) 
// es el recorrido de la lista(productList) y cada elemento se llamara product
// asi que para saber el nombre del producto utilizamos product.name

/* for (product of productList) {
    console.log(product.name)
} */

// for con in( dentro )
// es el recorrido de la lista(productList) y cada elemento se llamara product
// a diferencia de for con of este nos trae el indice del elemento.

/* for (product in productList) {
    console.log(product)
} */
