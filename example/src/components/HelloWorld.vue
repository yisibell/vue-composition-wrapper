<template>
  <div class="hello">
    <h1>{{ newMsg }}</h1>
  </div>
</template>

<script>
import foo from 'vue-composition-wrapper'
import {
  defineComponent,
  computed,
  toRefs,
  onMounted,
} from '@vue/composition-api'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup(props) {
    const { msg } = toRefs(props)
    

    const newMsg = computed(() => `${msg.value} vue composition`)

    onMounted(() => {
      console.log(666, foo)
    })

    return {
      newMsg,
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
