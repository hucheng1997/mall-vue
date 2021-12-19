<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="this.$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,Footer
  },
  mounted() {
    //解决多次调用接口，除了缓存TypeNav的另一种解决方式
    this.$store.dispatch('categoryList')
  }
}
</script>

<style>
#app {
}
</style>
