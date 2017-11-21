console.log("product controller")
const productInterface = require("./productFactory")

const productFactoryEl = document.getElementById("productsForSale")

// somehow link in the store store
let doTheThing = function() {
    for (let index = 0; index < productInterface.productStore.length; index++) {
        let currentProduct = productInterface.productStore[index];

        let writeToDom = `
        <h1 class="title">${currentProduct.title}</h1>
        <div class="description">${currentProduct.description}</div>
        <div class="price">${currentProduct.price}</div>
        <div class="quantity">${currentProduct.quantity} remaining</div>
        <div><img src="${currentProduct.image}" class="image"></div>
        `
       currentProduct.reviews.forEach(function(currentReview) {
        writeToDom += `
        <ul>
        <li class="reviewList">${currentReview.review}</li>
        </ul>
        `
       }, this);
        productFactoryEl.innerHTML += writeToDom
    }
}
module.exports = doTheThing