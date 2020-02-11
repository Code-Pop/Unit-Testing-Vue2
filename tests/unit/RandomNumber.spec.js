import RandomNumber from '@/components/RandomNumber'
import { mount } from '@vue/test-utils'

describe('RandomNumber', () => {
  it('has a default randomNumber of 0', () => {
    const wrapper = mount(RandomNumber)
    expect(wrapper.vm.$data.randomNumber).toBe(0)
  })

  test('if we click the generate button, we should get a random number between 1 and 10', () => {
    const wrapper = mount(RandomNumber)
    wrapper.find('button').trigger('click')

    const randomNumber = wrapper.vm.$data.randomNumber
    expect(randomNumber).toBeGreaterThanOrEqual(1)
    expect(randomNumber).toBeLessThan(11)
  })
})
