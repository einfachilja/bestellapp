let dishes = [
{
    "name": "Pizza Krabben",
    "info": "mit Krabben und Peperoni",
    "price": 9.50,
    "amount": 1
}, 
{
    "name": "Pizza Margherita",
    "info": "mit Mozarella",
    "price": 5.90,
    "amount": 1
}, 
{
    "name": "Pizza Diavolo (scharf)",
    "info": "mit Salami, Zwiebeln, Peperoni und Knoblauch",
    "price": 8.50,
    "amount": 1
}, 
{
    "name": "Pizzabrötchen",
    "info": "mit Köse und Knoblauch",
    "price": 12.90,
    "amount": 1
}
];

function render() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = '';

    for (let index = 0; index < dishes.length; index++) {
        const NAME = dishes[index].name;
        const INFO = dishes[index].info;
        const PRICE = dishes[index].price;
        
        contentRef.innerHTML += `
        <div class="dish-card">
           ${NAME}<br>
           ${INFO}<br>
           ${PRICE}<br>
        </div>
        `;
        
    }
}