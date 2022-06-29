<template>
  <div>
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    />
    <hello-world msg="Hello Vue 2 + Vite" />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
