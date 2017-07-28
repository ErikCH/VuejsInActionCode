var webstore = new Vue({
  el: '#app',
  data: { ... },
  filters: {	//#A
    formatPrice: function(price) {	//#B
      if (!parseInt(price)) { return ""; }	//#C
      if (price > 99999) {	//#D
        var priceString = (price / 100).toFixed(2);	//#E
        var priceArray = priceString.split("").reverse();	//#F
        var index = 3;	//#F
        while (priceArray.length > index + 3) {	//#F
          priceArray.splice(index+3, 0, ",");	//#F
          index += 4;	//#F
        }	//#F
        return "$" + priceArray.reverse().join("");	//#G
      } else {
        return "$" + (price / 100).toFixed(2);	//#H
      }
    }
  }
});
