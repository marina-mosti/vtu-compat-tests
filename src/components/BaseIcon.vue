<template>
  <component
    :is="iconElement"
    :class="classes"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    element: {
      type: String,
      default: 'i'
    },
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: null,
      validator (color) { return color.startsWith('text-') }
    }
  },
  computed: {
    classes () {
      const classes = [this.icon]

      // handle full tailwind classes AND legacy props like "blue-600"
      // TODO: switch all color props to full classes
      if (this.color) {
        classes.push(this.color.includes('text') ? this.color : `text-${this.color}`)
      }
      return classes
    },
    iconElement () {
      return this.element
    }
  }
}
</script>
