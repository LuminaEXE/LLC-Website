<script lang="ts">
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  },
  data(): { msg: string } {
    return {
      msg: 'Welcome to Your App'
    }
  }
}
</script>

<template>
  <body>
    <div id="app">
      <Nav />
      <h1>{{ msg }}</h1>
    </div>
  </body>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ced9e4;
  margin-top: 60px;
  height: 100%;
  min-height: 100%;
  display: block;
}
body {
  margin: 0;
  padding: 0;
  height: 100%;
  min-height: 100%;
  display: block;
  min-height: 100%;
}
</style>
