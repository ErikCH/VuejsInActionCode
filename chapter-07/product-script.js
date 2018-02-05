…
  <script>
  import MyHeader from './Header.vue'
  export default {
    components: { MyHeader },
    data() {
    return {
      product: ''
    }
  },
  created: function() {
    axios.get('/static/products.json')
    .then((response) =>{
      this.product = response.data.products.filter(
data => data.id == this.$route.params.id)[0]
      this.product.image = '/' + this.product.image;		
    });
  }
}
</script>
