#### insertAdjacentHTML

``` beforebegin ```: Before the target element itself <br>
``` afterbegin ```:Inside the target, at the top (first child)<br>
``` beforeend ``` :Inside the target, at the bottom(last child)<br>
``` afterend ```:After the target element itself.

### HTML Beforend
```
<!DOCTYPE html>
<html>
<body>

  <section id="product-section">
    <h2>Products</h2>
    <div class="product-grid" id="product-grid">
      <!-- Existing cards -->
      <div class="card">Old Product</div>
    </div>
    <button id="add-card-btn">Add New Product</button>
  </section>

  <script>
    document.getElementById('add-card-btn').addEventListener('click', function() {
      const grid = document.getElementById('product-grid');
      const productName = prompt("Enter product name:");

      if (productName) {

        grid.insertAdjacentHTML('beforeend', `
          <div class="card" style="border:1px solid #ccc; padding:10px; margin:5px;">
            <h3>${productName}</h3>
            <p>Price: $<span>${Math.floor(Math.random() * 100)}</span></p>
            <button onclick="this.parentElement.remove()">Delete</button>
          </div>
        `);
      }
    });
  </script>

</body>
</html>

```

### HTML Before target 

```
<section id="test-section">
  <ul id="test-list">
    <li>Item 1</li>
    <li id="target-item">Item 2 (Target)</li>
    <li>Item 3</li>
  </ul>
  <button id="insert-before-btn">Insert Before Item 2</button>
</section>

<script>
  document.getElementById('insert-before-btn').addEventListener('click', function() {
    const list = document.getElementById('test-list');
    const target = document.getElementById('target-item');

    const newItem = document.createElement('li');
    newItem.textContent = 'I am NEW!';
    newItem.style.backgroundColor = 'yellow';

    list.insertBefore(newItem, target);
  });
</script>

```
