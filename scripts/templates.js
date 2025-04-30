function getDishesTemplate(NAME, INFO, PRICE, index) {
    return `
        <div class="dish-card">
            <div class="dish-card-left">
                <h3>${NAME}</h3>
                ${INFO}
                <span class="price-tag">${PRICE.toFixed(2).toString().replace(".", ",")} €</span>
                </div class="dish-card-right">
                <img  class="add-img" src="./assets/icons/add.png" alt="" onclick="addToShoppingBasket(${index})">  
            </div>
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

function getSumShoppingBasketTemplate(sum, delivery) {
    return `
        <div class="sum-basket-container">
        <div class="sum-basket-content">
            <div class="sum-basket-content-box"><span>Zwischensumme:</span> ${sum.toFixed(2).toString().replace('.', ',')} €</div>
            <div class="sum-basket-content-box"><span>Lieferkosten:</span> ${delivery.toFixed(2).toString().replace('.', ',')} €</div>
            <div class="sum-basket-content-box"><h4>Gesamt:</h4> <b>${(sum + delivery).toFixed(2).toString().replace('.', ',')} €</b></div>
        </div>
            <div class="button-container" onclick="alert('overlay: Bestellung erfolgreich und array leeren')">
            <button type="button">Bestellen</button>
            <p>Durch Anklicken von Bestellen und bezahlen bestätigst du den Warenkorb und deine eingegebenen
            Daten und stimmst unseren Datenschutzbestimmungen sowie AGB zu.</p>
            <div>
        </div>
        `;
}