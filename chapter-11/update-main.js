…
import { productsRef } from '../firebase';		//#A
export default {
  name: 'imain',
  firebase: {					//#B
      products: productsRef
  },
…
  computed: {
    ...mapGetters([
        'session'					//#C
    ])
…
