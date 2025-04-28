let shoppingBasket = [];

function render() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = '';

    for (let index = 0; index < dishes.length; index++) {
        const NAME = dishes[index].name;
        const INFO = dishes[index].info;
        const PRICE = dishes[index].price;
        contentRef.innerHTML += getDishesTemplate(NAME, INFO, PRICE, index);
    }
}

function renderShoppingBasket() {
    let shoppingBasketRef = document.getElementById('basket_content');
    shoppingBasketRef.innerHTML = '';

    for (let b = 0; b < shoppingBasket.length; b++) {
        let dishBasketName = shoppingBasket[b].name;
        let dishBasketAmount = shoppingBasket[b].amount;
        let dishNewPrice = shoppingBasket[b].new_price;

        shoppingBasketRef.innerHTML += getBasketTemplate(dishBasketName, dishBasketAmount, b, dishNewPrice);
    }

}

function openShopingBasket() {
    document.getElementById('page_style_side').classList.remove('d-none');
    document.getElementById('open-menu-img').classList.add('d-none');
    document.getElementById('close-menu-img').classList.remove('d-none');
}

function closeShopingBasket() {
    document.getElementById('page_style_side').classList.add('d-none');
    document.getElementById('close-menu-img').classList.add('d-none');
    document.getElementById('open-menu-img').classList.remove('d-none');
}

function addToShoppingBasket(index) {
    shoppingBasket.splice(index, 1, dishes[index])
    increaseAmount(index);
    renderShoppingBasket();
}

function increaseAmount(index) {
    shoppingBasket[index].amount++;
    shoppingBasket[index].new_price = shoppingBasket[index].price * shoppingBasket[index].amount;
    renderShoppingBasket();
}

function decreaseAmount(b) {
    if (shoppingBasket[b].amount == 0) {
        shoppingBasket.splice(b, 1);
        renderShoppingBasket();  
    } else {
        shoppingBasket[b].amount--;
        shoppingBasket[b].new_price = shoppingBasket[b].price * shoppingBasket[b].amount;
        console.log(shoppingBasket[b].new_price);
        renderShoppingBasket();  
    }
    
}

function deleteFromShoppingBasket(b) {
    shoppingBasket.splice(b, 1);
    renderShoppingBasket()
}










