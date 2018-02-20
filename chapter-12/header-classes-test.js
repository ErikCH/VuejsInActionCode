it('Check if navbar class is added to first div', () => {
    const cartItemCount = 10;
    const wrapper = shallow(Header, {
      store, localVue, propsData: { cartItemCount }
    })
    const p = wrapper.findAll('div').at(0);		//#A
    expect(p.classes()).toContain('navbar');		//#B
  })
