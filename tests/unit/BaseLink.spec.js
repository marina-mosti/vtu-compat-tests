import BaseLink from '../../src/components/BaseLink'
import BaseIcon from '../../src/components/BaseIcon'

import { mount, shallowMount } from '@vue/test-utils'

function factory (opts = {}) {
    const fn = opts.deep ? mount : shallowMount
    return fn(BaseLink, {
        propsData: {
            ...opts.props
        },
        listeners: {
            ...opts.listeners
        },
        slots: {
            ...opts.slots
        }
    })
}

describe('BaseLink', () => {
    it('is a link', () => {
        expect(factory().element.tagName).toEqual('A')
    })

    it('shows a chevron icon when prop is set', async () => {
        let wrapper = factory()

        expect(wrapper.findComponent(BaseIcon).exists()).toBe(false)

        wrapper = factory({
            props: { chevron: true }
        })

        const icon = wrapper.findComponent(BaseIcon)
        expect(icon.exists()).toBe(true)
        expect(icon.vm.icon).toContain('chevron')
    })

    it('can attach a click listener', () => {
        const click = jest.fn()
        const wrapper = factory({
            listeners: {
                click
            }
        })

        wrapper.element.dispatchEvent(new Event('click'))
        expect(click).toHaveBeenCalledTimes(1)
    })

    it('exposes a default slot', () => {
        const wrapper = factory({ slots: { default: 'default' } })
        expect(wrapper.text()).toContain('default')
    })
})
