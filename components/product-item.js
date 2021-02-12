// product-item.js

class ProductItem extends HTMLElement {
  // TODO
  constructor(src, title, price, id, isOnCart){
    super();
    let shadow = this.attachShadow({mode: 'open'});
    let li = document.createElement('li');
    li.className = "product";
    li.id = id;
    let img = document.createElement('img');
    img.src = src;
    img.alt = title;
    img.width = 200;
    let p = document.createElement('p');
    p.innerHTML = title;
    p.className = "title";
    let p1 = document.createElement('p');
    p1.innerHTML = price;
    p1.className = "price";
    let button = document.createElement('button');
    button.innerHTML = "add to cart";
    if(isOnCart){
      button.innerHTML = "remove from cart";
    }
    button.onclick = () => {
      if (button.innerHTML=="add to cart"){
        button.innerHTML = "remove from cart";
        var countElem = document.getElementById("cart-count");
        var count = countElem.innerHTML;
        count++;
        countElem.innerHTML = count;
        window.localStorage.setItem(li.id, p.innerHTML);
        window.localStorage.setItem("cartCount", count);
      }
      else{
        button.innerHTML = "add to cart";
        var countElem = document.getElementById("cart-count");
        var count = countElem.innerHTML;
        count--;
        countElem.innerHTML = count;
        window.localStorage.removeItem(li.id);
        window.localStorage.setItem("cartCount", count);
      }};
    let style = document.createElement('style');
    style.textContent = `
    .price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }
    
    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas: 
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }
    
    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }
    
    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }
    
    .product > img {
      align-self: center;
      justify-self: center;
      width: 100%;
    }
    
    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }`;
    shadow.appendChild(style);
    shadow.appendChild(li);
    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(p1);
    li.appendChild(button);
  }

}

customElements.define('product-item', ProductItem);