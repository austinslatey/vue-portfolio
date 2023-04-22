<template>
  <footer class="bg-gray-800 text-gray-300">
    <div class="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between">
      <div class="flex items-center">
        <router-link to="/" class="flex-shrink-0">
          <img src="../assets/logo3Draft.jpg" alt="Logo" class="h-10" />
        </router-link>
        <div class="ml-4 ">
          <div class="flex mt-2 px-4">
            <a href="https://linktr.ee/austinslatey">
              <img src="@/assets/icons/linktree.svg" alt="Linktree Icon" width="50" height="50">
            </a>
            <a href="#" class="mr-2 px-4">
              <img src="@/assets/icons/github.svg" alt="Github Icon" class="github-icon" width="50" height="50">
            </a>
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
}

img.github-icon {
  color: aqua;
}
</style>