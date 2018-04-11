<template>
  <div>

<header>
  <div class="navbar navbar-default">
    <div class="navbar-header">
      <h1><router-link :to="{name: 'iMain'}">{{ sitename }}</router-link></h1>
    </div>
    <div class="nav navbar-nav navbar-right cart">
        <router-link active-class="active" tag="button" class="btn btn-default btn-lg" :to="{name: 'Form'}">
        <span class="glyphicon glyphicon-shopping-cart">{{ cartItemCount}}</span> Checkout
        </router-link>
      </button>
    </div>
  </div>
</header>
  </div>
</template>

<script>
export default {
  name: 'my-header',
  data () {
    return {
    sitename: "Vue.js Pet Depot",
    }
  },
  props: ['cartItemCount'],
  methods: {
    showCheckout() {
      this.$router.push({name: 'Form'});
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  color: black;
}

.router-link-exact-active {
  color: blue;
}
</style>
