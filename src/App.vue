<template>
  <main>
    <img
      class="vue-logo"
      alt="Vue logo"
      src="./assets/logo.png"
    />
    <hello-world msg="Hello Vue 2 + Vite" />
  </main>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

main {
  width: 100%;
  height: 100%;
}

.vue-logo {
  margin: 0 auto;
  display: block;
}
</style>
