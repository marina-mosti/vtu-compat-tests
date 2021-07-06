import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

const linkStub = {
  template: '<a/>',
  name: 'LinkStub'
}

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
      global: {
        stubs: {
          BaseLink: linkStub
        }
      }
    })

    const links = wrapper.findAllComponents(linkStub)
    expect(links).toHaveLength(1)
  })
})
