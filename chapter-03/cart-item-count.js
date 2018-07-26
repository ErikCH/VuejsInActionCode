computed: {                        //#A
  cartItemCount: function() {      //#B
    return this.cart.length || '';       //#B
  }                                //#B
},
