export default {
    props: {
        chevron: { type: Boolean, default: false }
    },
    render (h) {
        const icon = this.chevron
            ? h('BaseIcon', {
                props: {
                    color: 'text-grey-900',
                    icon: 'fas fa-chevron-right'
                },
                class: ['ml-2']
            })
            : null

        return h(
            'a',
            {
                class: [
                    'hover:text-orange-700 font-bold cursor-pointer text-teal-600',
                    { 'flex items-center': this.chevron },
                    this.$options.class
                ],
                on: this.$listeners,
                attrs: this.$attrs
            },
            [this.$slots.default, icon]
        )
    }
}
