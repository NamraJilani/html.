
const products = [
    {
        productName: `Smart Watch`,
        productDes: `Brand: Apple`,
        productPrice: 130000
    },
   
]

let productContainer = document.getElementById(`productContainer`);


for(let i = 0; i < products.length;  i++)
{
    productContainer.innerHTML = ` <div class="card" style="width: 18rem;">
    <img src="image.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${products[i] . productName}</h5>
      <p class="card-text">${products[i] . productDes}</p>
      <p class="card-text">${products[i] . productPrice}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`




}