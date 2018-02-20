import { shallow, createLocalVue } from '@vue/test-utils';
import Header from '../src/components/Header.vue';
import Vuex from 'vuex';					//#A
import '../src/firebase';					//#B
import { store } from '../src/store/store';		//#C

const localVue = createLocalVue();
localVue.use(Vuex)

describe('Header.vue', () => {

  it('Check prop was sent over correctly to Header', () => {
    const cartItemCount = 10;
    const wrapper = shallow(Header, {			//#D
      store, localVue, propsData: { cartItemCount }	//#E
    })
    expect(wrapper.vm.cartItemCount).toBe(cartItemCount);	//#F
  })

});
