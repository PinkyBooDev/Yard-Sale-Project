const navbarEmail = document.querySelector('.navbarEmail');
const desktopMenu = document.querySelector('.desktopMenu');
const burgerMenu = document.querySelector('.iconMenu');
const mobileMenu = document.querySelector('.mobileMenu');
const navbarShoppingCart = document.querySelector('.navbarShoppingCart');
const shoppingCartAside = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards')
const productDetailContainer = document.getElementById('productDetail')
const closeProduct = document.querySelector('.closeProduct')

navbarEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
navbarShoppingCart.addEventListener('click', toggleCartAside);
closeProduct.addEventListener('click', closeProductAside)

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartAside.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartAside.classList.add('inactive');
  };
  
  desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu () {
  const isAsideClosed = shoppingCartAside.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartAside.classList.add('inactive');
  };

  closeProductAside();
  mobileMenu.classList.toggle('inactive');
}

function toggleCartAside () {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  };

  const isproductDetailClosed = productDetailContainer.classList.contains('inactive');
  
  if (!isproductDetailClosed) {
    productDetailContainer.classList.add('inactive');
  };

  shoppingCartAside.classList.toggle('inactive'); 
};

const productList = [];

productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
  name: 'TV',
  price: 440,
  image: 'https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

productList.push({
  name: 'PC',
  price: 880,
  image: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push ({
  name:'Bicycle helmet',
  price: 1200,
  image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});

productList.push ({
  name:'Bicycle helmet',
  price: 1600,
  image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});

productList.push ({
  name:'Bicycle helmet',
  price: 1500,
  image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});

productList.push ({
  name:'Seat',
  price: 300,
  image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});

productList.push ({
  name:'Tennis Montain Bike',
  price: 2200,
  image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});

productList.push ({
  name:'Sunglasses',
  price: 800,
  image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});

productList.push ({
  name:'Sunglasses',
  price: 600,
  image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});

productList.push ({
  name:'Bicycle seat bag',
  price: 876,
  image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 

/*
  <div class="productCard">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="productInfo">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./src/assets/icons/bt_add_to_cart.svg" alt="Add to Cart">
          </figure>
        </div>
      </div>
*/
function openProductAside () {
  shoppingCartAside.classList.add('inactive');

  productDetailContainer.classList.remove('inactive');
}

function closeProductAside () {
  productDetailContainer.classList.add('inactive');
}

function renderProducts (arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('productCard');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductAside);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('productInfo');
  
    const infoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    infoDiv.appendChild(productPrice);
    infoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './src/assets/icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(infoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);