function init() {
    getFromLocalStorage();
    render();
    checkEmptyShoppingBasket();
    renderShoppingBasket();
    renderSumShoppingBasket();

}

function render() {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    for (let indexDishes = 0; indexDishes < dishes.length; indexDishes++) {
        contentRef.innerHTML += getDishesTemplate(indexDishes);
    }
}

function renderShoppingBasket() {
    let shoppingBasketRef = document.getElementById("basket_content");
    shoppingBasketRef.innerHTML = "";

    for (let indexBasket = 0; indexBasket < shoppingBasket.length; indexBasket++) {
        shoppingBasketRef.innerHTML += getBasketTemplate(indexBasket);
    }
}

function renderSumShoppingBasket() {
    let sumBasketContentRef = document.getElementById('sum_basket_content');
    sumBasketContentRef.innerHTML = '';

    let sum = 0;
    let delivery = 5;

    for (let indexSum = 0; indexSum < shoppingBasket.length; indexSum++) {
        sum += shoppingBasket[indexSum].price * shoppingBasket[indexSum].amount;

        sumBasketContentRef.innerHTML = getSumShoppingBasketTemplate(sum, delivery);
    }
}

function addToShoppingBasket(indexDishes) {
    document.getElementById('overlay').classList.add('d-none');
    dishInBasket = shoppingBasket.find((dish) => { return dish.name === dishes[indexDishes].name; })
    if (!dishInBasket) {
        let dishToBasket = {
            "name": dishes[indexDishes].name,
            "price": dishes[indexDishes].price,
            "amount": 1
        };
        shoppingBasket.push(dishToBasket);
    } else {
        dishInBasket.amount++
    }
    saveToLocalStrorage();
    openShopingBasket();
    checkEmptyShoppingBasket();
    renderSumShoppingBasket();
    renderShoppingBasket();
}

function openShopingBasket() {
    document.getElementById("page_style_side").classList.remove("d-none");
    document.getElementById("open-menu-img").classList.add("d-none");
    document.getElementById("close-menu-img").classList.remove("d-none");
}

function closeShopingBasket() {
    document.getElementById("page_style_side").classList.add("d-none");
    document.getElementById("close-menu-img").classList.add("d-none");
    document.getElementById("open-menu-img").classList.remove("d-none");
}

function increaseAmount(indexBasket) {
    shoppingBasket[indexBasket].amount++;
    saveToLocalStrorage();
    renderSumShoppingBasket();
    renderShoppingBasket();
}

function decreaseAmount(indexBasket) {
    if (shoppingBasket[indexBasket].amount === 1) {
        deleteFromShoppingBasket(indexBasket);
    } else {
        shoppingBasket[indexBasket].amount--;
    }
    saveToLocalStrorage();
    renderSumShoppingBasket();
    renderShoppingBasket();
}

function deleteFromShoppingBasket(indexBasket) {
    shoppingBasket.splice(indexBasket, 1);
    saveToLocalStrorage();
    checkEmptyShoppingBasket();
    renderSumShoppingBasket();
    renderShoppingBasket();
}

function checkEmptyShoppingBasket() {
    let lenghtShoppingBasket = shoppingBasket.length;

    if (lenghtShoppingBasket === 0) {
        document.getElementById('empty_basket_content').classList.remove('d-none');
        document.getElementById('sum_basket_content').classList.add('d-none');
    } else {
        document.getElementById('empty_basket_content').classList.add('d-none');
        document.getElementById('sum_basket_content').classList.remove('d-none');
    }
}

function saveToLocalStrorage() {
    localStorage.setItem('shoppingBasket', JSON.stringify(shoppingBasket));
}

function getFromLocalStorage() {
    let localStorageShoppingBasket = JSON.parse(localStorage.getItem("shoppingBasket"));

    if (localStorageShoppingBasket == null) {
        shoppingBasket != localStorageShoppingBasket;
    } else {
        shoppingBasket = localStorageShoppingBasket;
    }
}

function confirmOrder() {
    document.getElementById('overlay').classList.remove('d-none');
    shoppingBasket = [];
    saveToLocalStrorage();
    checkEmptyShoppingBasket();
    renderSumShoppingBasket();
    renderShoppingBasket();
}