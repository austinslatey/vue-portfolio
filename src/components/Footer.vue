<template>
  <footer class="bg-gray-800 text-gray-300">
    <div class="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between">
      <div class="flex items-center">
        <router-link to="/" class="flex-shrink-0 mt-2 ml-14">
          <img src="../assets/logo3Draft.jpg" alt="Logo" class="h-10" />
        </router-link>
        <div class="ml-4 ">
          <div class="flex mt-2 px-4">
            <a href="https://linktr.ee/austinslatey">
              <img src="@/assets/icons/linktree.svg" alt="Linktree Icon" width="50" height="50">
            </a>
            <a href="#" class="mr-4 px-12">
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
  position: fixed; /* Fixed position at the bottom of the viewport */
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #333; /* Change this to your desired background color */
  color: #fff; /* Change this to your desired text color */
  padding: 1rem; /* Adjust the padding as needed */
  display: flex;
  justify-content: space-between; /* Adjust the alignment as needed */
  align-items: center; /* Adjust the alignment as needed */
  height: 5rem;
}

img.github-icon {
  color: aqua;
}
</style>