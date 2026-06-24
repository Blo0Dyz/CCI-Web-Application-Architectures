const bestSellers = [{
                name: 'Vaso Minimalista',
                price: 'R$ 89,90',
            }, {
                name: 'Boneco Articulado',
                price: 'R$ 149,90',
            }, {
                name: 'Abajur Lunar',
                price: 'R$ 199,00',

            }, {
                name: 'Engrenagem Protótipo',
                price: 'R$ 59,90',
            }];

const grid = document.getElementById("gridView");

bestSellers.forEach(item =>{
    grid.insertAdjacentHTML("beforeend", `
        <div class="card" style="border: 1px solid #ccc; padding: 10px; margin: 5px;">
    <h3>${item.name}</h3>
    <p>Price: <span>${item.price}</span></p>
    <button>Add Cart</button>
    </div>`);
});