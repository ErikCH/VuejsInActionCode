new Vue({
  data: {
    length: 5,      //#A
    width: 3        //#A
  },
  computed: {
    area: function() {                     //#B
      return this.length * this.width;     //#B
    }                                      //#B
  }
});
