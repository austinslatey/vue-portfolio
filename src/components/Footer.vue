<template>
  <footer class="bg-gray-800 text-gray-300">
    <div class="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between">
      <div class="flex items-center">
        <router-link to="/" class="flex-shrink-0">
          <img src="../assets/logo3Draft.jpg" alt="Logo" class="h-10" />
        </router-link>
        <div class="ml-4">
          <div class="flex mt-2">
            <a href="#" class="mr-2"><i class="fab fa-facebook fa-lg">LinkTree</i></a>
            <a href="#" class="mr-2"><i class="fab fa-github fa-lg">Github</i></a>
            <a href="#"><i class="fab fa-mail fa-lg">Email</i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  props: {
    faqs: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}</style>