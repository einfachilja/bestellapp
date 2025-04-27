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

function toggleShopingBasket() {
    document.getElementById('page_style_side').classList.toggle('d-none');
}

function addToShoppingBasket(index) {
    shoppingBasket.push(dishes[index]);
    renderShoppingBasket();
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

