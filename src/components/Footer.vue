<template>
  <footer class="bg-gray-800 text-gray-300">
    <div class="container mx-auto px-2 py-6 flex flex-col md:flex-row justify-between">
      <div class="flex items-center">
        <router-link to="/" class="flex-shrink-0 mt-2 ml-10">
          <img src="@/assets/imgs/homeImg/logo3Draft.jpg" alt="Logo" class="h-10" />
        </router-link>
        <div class="ml-2 ">
          <div class="flex mt-2 px-4">
            <a href="https://linktr.ee/austinslatey">
              <img src="@/assets/icons/linktree.svg" alt="Linktree Icon" width="50" height="50">
            </a>
            <a href="https://github.com/austinslatey" target="_blank" class="px-6">
              <img src="@/assets/icons/github.svg" alt="Github Icon" class="github-icon" width="50" height="50">
            </a>
            <a href="mailto:aslater@instructors.2u.com" class="mr-4">
              <img src="@/assets/icons/mail.png" alt="Mail Icon" class="mail-icon" width="50" height="50">
            </a>
            <a href="https://docs.google.com/document/d/12YDeDfgEUPw26Muh4st21T-xn-W9CENCwYRsM5mlpVQ/edit" target="_blank" class="px-2">
              <img src="@/assets/icons/resume.png" alt="Resume Icon" class="resume-icon" width="50" height="50">
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
  background-color: #333333;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  margin: 0;
}
</style>