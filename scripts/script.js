// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data =>{
      window.localStorage.setItem("Array", JSON.stringify(data));
      var listRef = document.getElementById("product-list");
      var products = JSON.parse(localStorage.getItem("Array"));
      console.log(products);
      for(var i = 0; i < localStorage.getItem("Array").length; i++){
        var isOnCart = false;
        if(products[i] != null){
          if(window.localStorage.getItem(products[i].id) != null){
            isOnCart = true;
          }
          var newProduct = new ProductItem(products[i].image, products[i].title, products[i].price, products[i].id, isOnCart);
          listRef.appendChild(newProduct);
        }
      }
    });
  });

  var setCount = document.getElementById("cart-count");
  var count = window.localStorage.getItem("cartCount");
  setCount.innerHTML = count;