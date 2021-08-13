<template>
  <div id="app">
    <div id="nav">
      <span @click="linkTo('/')">Home</span> |
      <span @click="linkTo('/about')">About</span>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { useRouter } from 'vue-composition-wrapper'

export default defineComponent({
  setup() {
    const router = useRouter()
    const linkTo = (path) => {
      router.push(path)
    }

    return {
      linkTo
    }
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  span {
    font-weight: bold;
    color: #2c3e50;
    cursor: pointer;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
