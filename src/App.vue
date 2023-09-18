<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
    <Footer />
  </div>
</template>


<script>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  name: 'App',
  setup() {
    const route = useRoute()
    return {
      route,
    }
  },
  components: {
    NavBar,
    Footer,
  }
})
</script>

<style>
.read-the-docs {
  color: #888;
}
</style>