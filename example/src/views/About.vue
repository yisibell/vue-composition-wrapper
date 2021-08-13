<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ name }}</p>
    <button @click="handleNameChange">click to update name</button>
  </div>
</template>

<script>
import { computed, defineComponent } from '@vue/composition-api'
import { useStore } from 'vue-composition-wrapper'

export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => store.state.name)

    const handleNameChange = () => {
      store.commit('SET_NAME', 'vue-composition-wrapper' + `----> update at: ${new Date().toLocaleString()}`)
    }

    return {
      name,
      handleNameChange
    }
  }
})
</script>
