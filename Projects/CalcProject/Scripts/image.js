document.getElementById("add-card-btn").addEventListener("click", function(){
    const grid = document.getElementById("product-grid");
    const productName = prompt("Enter Product Name");

    if(productName){
        grid.insertAdjacentHTML("beforeend", `
    <div class="card" style="border: 1px solid #ccc; padding: 10px; margin: 5px;">
    <h3>${productName}</h3>
    <p>Price: $<span>${Math.floor(Math.random()*100)}</span></p>
    <button onclick="this.parentElement.remove()">Delete</button>
    </div>`);
    }
});