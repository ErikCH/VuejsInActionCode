sortededProducts() {
  if(this.products.length > 0) {
    let productsArray = this.products.slice(0);		//#A
    function compare(a, b) {				//#B
      if(a.title.toLowerCase() < b.title.toLowerCase())
        return -1;
      if(a.title.toLowerCase() > b.title.toLowerCase())
        return 1;
      return 0;
    }
    return productsArray.sort(compare);		       //#C
  }
}
