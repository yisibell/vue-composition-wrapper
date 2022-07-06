<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useContext, useRoute, useStore } from 'vue-composition-wrapper'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    const ctx = useContext()
    const route = useRoute()
    const store = useStore()

    const appName = computed(() => store.state.appName)

    onMounted(() => {
      console.log('context:', ctx)
      console.log('route:', route.value)
      console.log('store:', store)
      console.log('store state:', appName.value)
    })
  },
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
