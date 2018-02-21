computed: {
  fullName: function() {	//#A
    return [this.firstName, this.lastName].join('');	//#A
  }	//#A
}
