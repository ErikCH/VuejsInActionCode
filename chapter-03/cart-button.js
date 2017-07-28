data: {
  showProduct: true,			//#A
...
},
methods: {
...
  showCheckout() {				//#B
       this.showProduct = this.showProduct ? false : true;	//#C
   },
}
