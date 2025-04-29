function getDishesTemplate(NAME, INFO, PRICE, index) {
    return `
        <div class="dish-card" onclick="addToShoppingBasket(${index})">
            <div class="dish-card-left">
                <h3>${NAME}</h3>
                ${INFO}
                <span class="price-tag">${PRICE.toFixed(2).toString().replace(".", ",")} €</span>
            </div class="dish-card-right">
                <img  class="add-img" src="./assets/icons/add.png" alt="">  
        </div>
        `;
}

function getBasketTemplate(dishBasketName, dishBasketAmount, dishBasketPrice, indexBasket) {
    return `
        <div>${dishBasketName}</div>
        <div class="dish-basket-info">    
            <img src="./assets/icons/minus.png" class="basket-btn" onclick="decreaseAmount(${indexBasket})" alt="">    
            <div>${dishBasketAmount}x</div>
            <img src="./assets/icons/plus.png" class="basket-btn" onclick="increaseAmount(${indexBasket})" alt="">   
            <div>${(dishBasketPrice * dishBasketAmount).toFixed(2).toString().replace('.', ',')}€ </div>
            <img src="./assets/icons/trash.png" class="basket-btn" onclick="deleteFromShoppingBasket(${indexBasket})" alt="">   
        </div>
        `;
}