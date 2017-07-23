canAddToCart(aProduct) {
  return aProduct.availableInventory > this.cartCount(aProduct.id); //#A
},
cartCount(id) {							   //#B
  let count = 0;
  for(var i = 0; i < this.cart.length; i++) {			   //#C
    if (this.cart[i] === id) {
      count++;
    }
  }
  return count;
}
