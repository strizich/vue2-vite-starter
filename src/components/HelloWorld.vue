<template>
  <div ref="helloworldRef" class="hello-world">
    <h1>{{ msg }}</h1>
    <ul>
      <li
        v-for="item in techstack"
        :key="item"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
defineProps({
  msg: {
    type: String,
    default: 'Hello World',
  },
})
const helloworldRef = ref<HTMLElement | null>(null)
const techstack: string[] = ['Vue 2', 'Vite', 'Vitest', 'Cypress', 'Typescript']
</script>

<style lang="scss">
.hello-world {
  display:flex;
  flex-direction:column;
  align-items:center;
}
a {
  color: #42b983;
}
</style>
