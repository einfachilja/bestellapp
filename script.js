let shoppingBasket = [];

function render() {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    for (let index = 0; index < dishes.length; index++) {
        const NAME = dishes[index].name;
        const INFO = dishes[index].info;
        const PRICE = dishes[index].price;
        contentRef.innerHTML += getDishesTemplate(NAME, INFO, PRICE, index);
    }
}

function addToShoppingBasket(index) {
    dishInBasket = shoppingBasket.find((dish) => { return dish.name === dishes[index].name; })
    if (!dishInBasket) {
        let dishToBasket = {
            "name": dishes[index].name,
            "price": dishes[index].price,
            "amount": 1
        }
        shoppingBasket.push(dishToBasket);
    } else {
        dishInBasket.amount++
    }
    renderShoppingBasket();
}

function renderShoppingBasket() {
    let shoppingBasketRef = document.getElementById("basket_content");
    shoppingBasketRef.innerHTML = "";

    for (let indexBasket = 0; indexBasket < shoppingBasket.length; indexBasket++) {
        let dishBasketName = shoppingBasket[indexBasket].name;
        let dishBasketAmount = shoppingBasket[indexBasket].amount;
        let dishBasketPrice = shoppingBasket[indexBasket].price;

        shoppingBasketRef.innerHTML += getBasketTemplate(dishBasketName, dishBasketAmount, dishBasketPrice, indexBasket);
    }
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
    renderShoppingBasketSum();
    renderShoppingBasket();
}

function decreaseAmount(indexBasket) {
    if (shoppingBasket[indexBasket].amount == 0) {
        shoppingBasket.splice(indexBasket, 1);
        renderShoppingBasket();
    } else {
        shoppingBasket[indexBasket].amount--;
        renderShoppingBasketSum();
        renderShoppingBasket();
    }
}

function deleteFromShoppingBasket(indexBasket) {
    shoppingBasket.splice(indexBasket, 1);
    renderShoppingBasket();
    renderShoppingBasketSum();
    render();
}

// function renderShoppingBasketSum() {

//     let basketSumRef = document.getElementById("basket_sum");
//     basketSumRef.innerHTML = "";

//     let sum = 0;
//     let sumGesamt = 0;
//     let delivery = 5;
//     let pickup = 0;

//     for (let i = 0; i < shoppingBasket.length; i++) {
//         sum += shoppingBasket[i].new_price;
//     }

//     basketSumRef.innerHTML = `
//   <div class="basket-sum-content">
//     <div class="basket-sum-content-box">Zwischensumme <div>${sum.toFixed(2).toString().replace('.', ',')} €</div></div>
//     <div class="basket-sum-content-box">Lieferkosten<div>${delivery.toFixed(2).toString().replace('.', ',')} €</div></div>
//     <div class="basket-sum-content-box"><b>Gesamt</b><div>${sum.toFixed(2).toString().replace('.', ',')} €</div></div>
//     </div>`;
// }
