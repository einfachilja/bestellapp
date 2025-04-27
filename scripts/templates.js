function getDishesTemplate(NAME, INFO, PRICE) {
    return `
        <div class="dish-card">
            <div class="dish-card-left">
                <h3>${NAME}</h3>
                ${INFO}
                <span class="price-tag">${PRICE.toFixed(2).toString().replace(".", ",")} €</span>
            </div class="dish-card-right">
                <img class="add-img" src="./assets/icons/add.png" alt="">  
        </div>
        `;
}