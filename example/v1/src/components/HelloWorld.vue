<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { defineComponent, onMounted } from '@vue/composition-api'
import { useContext, useRoute, useStore } from 'vue-composition-wrapper'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    const ctx = useContext()
    const route = useRoute()
    const store = useStore()

    onMounted(() => {
      console.log('context:', ctx)
      console.log('route: ', route.value)
      console.log('store:', store)
    })

    return {}
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
