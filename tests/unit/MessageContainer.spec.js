import MessageContainer from '@/components/MessageContainer'
import { mount } from '@vue/test-utils'

describe('MessageContainer', () => {
  it('Wraps MessageDisplay component', () => {
    const wrapper = mount(MessageContainer)
  })
})
