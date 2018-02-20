import { shallow } from '@vue/test-utils'
import Form from '../src/components/Form.vue'

describe('Form.vue', () => {

    it('Check if button press sets madeOrder to true', () => {
      const wrapper = shallow(Form)
      wrapper.find('button').trigger('click')
      expect(wrapper.vm.madeOrder).toBe(true);
    })


})
