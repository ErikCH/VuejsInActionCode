},	
created: function() {	
  axios.get('./products.json')				//#A
    .then((response) =>{
      this.products=response.data.products;		//#B
      console.log(this.products);
  });
},	
