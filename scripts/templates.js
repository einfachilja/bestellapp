function getDishesTemplate(NAME, INFO, PRICE, index) {
    return `
        <div class="dish-card" onclick="addToShoppingBasket(${index}), openShopingBasket()">
            <div class="dish-card-left">
                <h3>${NAME}</h3>
                ${INFO}
                <span class="price-tag">${PRICE.toFixed(2).toString().replace(".", ",")} €</span>
            </div class="dish-card-right">
                <img  class="add-img" src="./assets/icons/add.png" alt="">  
        </div>
        `;
}

function getBasketTemplate(dishBasketName, dishBasketPrice, dishBasketAmount) {
    return `
        <div>${dishBasketName}</div>
        <div class="dish-basket-info">    
            <div> - </div>
            <div>${dishBasketAmount}x</div>
            <div> + </div>
            <div>${dishBasketPrice.toFixed(2).toString().replace('.', ',')} €</div>
            <div> x </div>
        </div>
        `;
}