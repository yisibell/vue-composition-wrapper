<template>
  <div class="hello">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import { defineComponent, computed, toRefs, onMounted } from '@vue/composition-api'
import { useContext } from 'vue-composition-wrapper'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props) {
    const { msg } = toRefs(props)
    const title = computed(() => msg.value + '--> composition api')

    const { app } = useContext()

    onMounted(() => {
      console.log(app);
    })

    return {
      title
    }
  }
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
