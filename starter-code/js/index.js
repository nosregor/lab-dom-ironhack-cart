// function deleteItem(e) {

// }

// function getPriceByProduct(itemNode) {

// }

// function updatePriceByProduct(productPrice, index) {

// }

// function getTotalPrice() {

// }

// function createQuantityInput() {

// }

// function createDeleteButton() {

// }

// function createQuantityNode() {

// }

// function createItemNode(dataType, itemData) {

// }

// function createNewItemRow(itemName, itemUnitPrice) {

// }

// function createNewItem() {

// }

// window.onload = function () {
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for (var i = 0; i < deleteButtons.length; i++) {
//     deleteButtons[i].onclick = deleteItem;
//   }
// };


// ////////////////////////////////////////////////////////


function deleteItem(e) {
  document.querySelector('.all-products').removeChild(e.currentTarget.parentElement.parentElement);
  getTotalPrice();
}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
  const quantities = document.querySelectorAll('.quantity input');
  const unitPrices = document.querySelectorAll('.product-price span');
  const totalPrices = document.querySelectorAll('.total-price');
  const $grandTotal = document.querySelector('.grand-total h2 span');
  let grandTotal = 0;
  for (let i = 0; i < quantities.length; i++) {
    const totalPriceOfProduct = Number(quantities[i].value) * Number(unitPrices[i].innerText);
    grandTotal += totalPriceOfProduct;
    totalPrices[i].innerText = `$${totalPriceOfProduct.toFixed(2)}`;
  }
  $grandTotal.innerText = `$${grandTotal.toFixed(2)}`;
}

function createTotalPrice() {
  const $totalPrice = document.createElement('div');
  $totalPrice.setAttribute('class', 'total-price');
  $totalPrice.innerText = '$0.00';
  return $totalPrice;
}

function createQuantityInput() {
  const $quantityInput = document.createElement('input');
  $quantityInput.setAttribute('type', 'text');
  $quantityInput.setAttribute('class', 'quantity');
  $quantityInput.setAttribute('placeholder', '0');
  return $quantityInput;
}

function createDeleteButton() {
  const $deleteButton = document.createElement('button');
  $deleteButton.setAttribute('class', 'btn-delete btn');
  $deleteButton.innerText = 'DELETE';
  const $div = document.createElement('div');
  $div.appendChild($deleteButton); // add delete button to new div
  return $div; // returns div
}

function createQuantityNode() {
  const $quantityInput = createQuantityInput();
  const $quantityLabel = document.createElement('label');
  $quantityLabel.innerText = 'QTY';
  const $div = document.createElement('div');
  $div.setAttribute('class', 'quantity');
  $div.appendChild($quantityLabel);
  $div.appendChild($quantityInput);
  return $div;
}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {
  const $productNameSpan = document.createElement('span');
  $productNameSpan.innerText = itemName;
  const $productNameDiv = document.createElement('div');
  $productNameDiv.setAttribute('class', 'product-name');
  $productNameDiv.appendChild($productNameSpan);

  const $productPriceSpan = document.createElement('span');
  $productPriceSpan.innerText = itemUnitPrice;
  const $productPriceDiv = document.createElement('div');
  $productPriceDiv.innerText = '$';
  $productPriceDiv.setAttribute('class', 'product-price');
  $productPriceDiv.appendChild($productPriceSpan);

  return [$productNameDiv, $productPriceDiv];
}

function createNewItem() {
  const $allProducts = document.querySelector('.all-products'); // selects all-products div
  const $newProduct = document.createElement('div'); // creates empty div
  $newProduct.setAttribute('class', 'product-container'); // sets class to product-container

  const newProductName = document.querySelector('.new-product-name').value; // saves name of new product
  const newProductPrice = document.querySelector('.new-product-price').value; // saves price of new product
  const newProductInfo = createNewItemRow(newProductName, Number(newProductPrice).toFixed(2)); // returns array with 2 DOM elements

  $newProduct.appendChild(newProductInfo[0]); // appends new-product div with product name div
  $newProduct.appendChild(newProductInfo[1]); // appends new-product div with product unit price div
  $newProduct.appendChild(createQuantityNode()); // creates and appends new quantity node to new product
  $newProduct.appendChild(createTotalPrice()); // creates total price field
  $newProduct.appendChild(createDeleteButton()); // creates and appends delete button to new product div

  $allProducts.appendChild($newProduct); // appends all-products div with new product
  document.querySelector('.new-product-name').value = ''; // resets values
  document.querySelector('.new-product-price').value = ''; // for new product fields

  const deleteButtons = document.getElementsByClassName('btn-delete'); // initializes all delete buttons
  for (let i = 0; i < deleteButtons.length; i++) { // including new delete button
    deleteButtons[i].onclick = deleteItem; // with functionality
  }
}

window.onload = function () {
  const calculatePriceButton = document.getElementById('calc-prices-button');
  const createItemButton = document.getElementById('new-item-create');
  const deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
