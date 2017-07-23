var APP_LOG_LIFECYCLE_EVENTS = true;	//#A

var webstore = new Vue({
  el: "#app",
  data: {
    sitename: "Vue.js Pet Depot",
  },
  beforeCreate: function() {	//#B
    if (APP_LOG_LIFECYCLE_EVENTS) {	//#B
      console.log("beforeCreate");	//#B
    }	//#B
  },	//#B
  created: function() {	//#C
    if (APP_LOG_LIFECYCLE_EVENTS) {	//#C
      console.log("created");	//#C
    }	//#C
  },	//#C
  beforeMount: function() {	//#D
    if (APP_LOG_LIFECYCLE_EVENTS) {	//#D
      console.log("beforeMount");	//#D
    }	//#D
  },	//#D
  mounted:  function() {	//#E
    if (APP_LOG_LIFECYCLE_EVENTS) {	//#E
      console.log("mounted"); 	//#E
    } 	//#E
  },	//#E
  beforeUpdate:  function() { 	//#F
    if (APP_LOG_LIFECYCLE_EVENTS) { 	//#F
      console.log("beforeUpdate"); 	//#F
    } 	//#F
  },	//#F
  updated:  function() { 	//#G
    if (APP_LOG_LIFECYCLE_EVENTS) { 	//#G
      console.log("updated"); 	//#G
    } 	//#G
  },	//#G
  beforeDestroy:  function() { 	//#H
    if (APP_LOG_LIFECYCLE_EVENTS) { 	//#H
      console.log("beforeDestroy "); 	//#H
    } 	//#H
  },	//#H
  destroyed:  function() { 	//#I
    if (APP_LOG_LIFECYCLE_EVENTS) { 	//#I
      console.log("destroyed"); 	//#I
    } 	//#I
  }	//#I
});
