describe('Header.vue', () => {

  let store;				//#A
  let getters;
  let mutations;
  beforeEach(() => {		//#B
    getters = {			//#C
      session: () => false
    }
    mutations = {			//#D
      SET_SESSION: () => {}
    }
    store = new Vuex.Store({	//#E
      getters,
      mutations
    })
})
