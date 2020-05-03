<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <project></project>
    <Skills></Skills>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Skills from './components/Skills.vue'
import Project from "./components/Project";

export default {
  name: "App",
  components: {
    HelloWorld,
    Skills,
    Project
  }
}
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
</style>