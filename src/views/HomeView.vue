<template>
  <main>Home</main>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useContext, useStore, useRoute, useRouter } from '@/lib'

export default defineComponent({
  setup() {
    const { app } = useContext()
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    onMounted(() => {
      console.log('Current vue instance', app)
      console.log('Store', store)
      console.log('Current route', route)
      console.log('Current router', router)
    })
  },
})
</script>
