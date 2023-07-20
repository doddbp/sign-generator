// script.js
function generateSign() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const sku = document.getElementById("sku").value;
  const selectedTemplate = document.getElementById("template").value;

  // Customize this template as per your requirements
  const signTemplate = `
    <div class="sign">
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
