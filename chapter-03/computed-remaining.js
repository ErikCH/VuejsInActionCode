computed: {
  cartItemCount: function() {
    return this.cart.length || '';	
  },
  canAddToCart: function() {     //#A
    return this.product.availableInventory > this.cartItemCount;     //#B
  }
}
