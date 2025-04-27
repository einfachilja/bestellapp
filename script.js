function render() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = '';

    for (let index = 0; index < dishes.length; index++) {
        const NAME = dishes[index].name;
        const INFO = dishes[index].info;
        const PRICE = dishes[index].price;

        contentRef.innerHTML += getDishesTemplate(NAME, INFO, PRICE);

    }
}