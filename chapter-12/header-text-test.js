it('Check cartItemCount text is properly displayed', () => {
  const cartItemCount = 10;
  const wrapper = shallow(Header, {
    store, localVue, propsData: { cartItemCount }
  })
  const p = wrapper.find('span');			//#A
  expect(p.text()).toContain(cartItemCount)		//#B
})
