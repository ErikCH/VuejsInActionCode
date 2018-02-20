it('Check if Sign in button text is correct for sign in', () => {
  const cartItemCount = 10;
  const wrapper = shallow(Header, {
    store, localVue, propsData: { cartItemCount }
  })

  expect(wrapper.findAll('button').at(0).text()).toBe("Sign In"); //#A

})
