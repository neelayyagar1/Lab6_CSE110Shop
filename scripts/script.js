// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  var javaArray = fetch('https://fakestoreapi.com/products');
  localStorage.setItem("inputs", JSON.stringify(javaArray));
});
