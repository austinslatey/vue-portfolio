<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold mb-8">Projects</h1>
    <div class="flex flex-wrap -mx-4">
      <div v-for="project in projectsData" :key="project.id" class="w-full md:w-1/2 lg:w-1/3 px-4 mb-20">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <a :href="project.link" target="_blank">
            <img :src="project.image" alt="project" class="h-64 w-full object-cover" />
          </a>
          <div class="p-4">
            <h2 class="text-xl font-semibold mb-2">{{ project.title }}</h2>
            <p class="text-gray-700">{{ project.description }}</p>
            <div class="text-center mt-4">
            <a :href="project.link" target="_blank" class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-block">View {{ project.title }}</a>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projectsData from '@/assets/js/projectsData.js';
export default {
  name: 'Projects',
  data() {
    return {
      projectsData: projectsData
    }
  }
}
</script>

<style>
img {
  max-width: 100%;
  height: auto;
}
</style>