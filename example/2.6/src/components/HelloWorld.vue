<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ title }}</p>
  </div>
</template>

<script>
import {
  defineComponent,
  computed,
  toRefs,
  onMounted,
} from '@vue/composition-api'
import { useContext, useRoute } from 'vue-composition-wrapper'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup(props) {
    const { msg } = toRefs(props)
    const title = computed(() => msg.value + '--> Hello composition api')

    const { app } = useContext()
    const route = useRoute()

    onMounted(() => {
      console.log(app)
      console.log(route.value)
    })

    return {
      title,
    }
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
