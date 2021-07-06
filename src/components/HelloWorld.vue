<template>
  <div class="hello">
    <BaseLink href="http://google.com">Google</BaseLink>
  </div>
</template>

<script>
import BaseLink from '@/components/BaseLink'
export default {
  name: 'HelloWorld',
  components: { BaseLink },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
