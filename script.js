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
        let dishBasketPrice = shoppingBasket[b].price;
        let dishBasketAmount = shoppingBasket[b].amount;

        shoppingBasketRef.innerHTML += getBasketTemplate(dishBasketName, dishBasketPrice, dishBasketAmount);
    }
}

function addToShoppingBasket(index) {
    shoppingBasket.push(dishes[index]);
    renderShoppingBasket();
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




