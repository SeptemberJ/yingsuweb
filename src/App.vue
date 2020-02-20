<template>
  <div id="app">
    <NavBar/>
    <LoginBox/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import LoginBox from './components/LoginBox.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    LoginBox,
    Footer
  }
}
</script>

<style>
#app {
  position: relative;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
