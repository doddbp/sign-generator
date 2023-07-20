// script.js

let itemCount = 1; // To keep track of the number of items

function generateSign() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const sku = document.getElementById("sku").value;
  const selectedTemplate = document.getElementById("template").value;

  // Customize this template as per your requirements
  const signTemplate = `
    <div class="sign ${selectedTemplate}">
      <h2>${name}</h2>
      <p>Price: ${price}</p>
      <p>SKU: ${sku}</p>
      <img src="${selectedTemplate}.png" alt="Selected Template" />
    </div>
  `;

  document.getElementById("preview").innerHTML = signTemplate;
}

function printSign() {
  window.print();
}

function addNewItem() {
  itemCount++;

  const newItem = document.createElement("div");
  newItem.className = "item";
  newItem.innerHTML = `
    <label for="name${itemCount}">Name:</label>
    <input type="text" name="name${itemCount}" placeholder="Enter name...">
    <label for="price${itemCount}">Price:</label>
    <input type="number" name="price${itemCount}" step="0.01" placeholder="Enter price...">
    <label for="sku${itemCount}">SKU:</label>
    <textarea name="sku${itemCount}" rows="4" placeholder="Enter SKU..."></textarea>
  `;

  const form = document.querySelector("form");
  form.insertBefore(newItem, form.lastElementChild);
}
