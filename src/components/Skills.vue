<template>
  <h2 class="mb-4 text-3xl text-center">Skills:</h2>
  <div class="mt-10 min-h-screen">
    
    <div class="grid grid-cols-3 gap-4">
      <div v-for="(skill, index) in skills" :key="index" class="mb-2 text-center">
          <a :href="skill.url" class="text-primary-color hover:text-secondary-color text-xl">
            <img :src="skill.icon" alt="Skill Icon" class="w-10 h-10 mx-auto mb-2">
            {{ skill.name }}
          </a>
        </div>
    </div>
  </div>
</template>

<script>
import skills from "@/assets/js/skillData.js";

export default {
  name: 'Skills',
  data() {
    return {
      skills: skills
    }
  }
}
</script>

<style scoped>
:root {
  --primary-color: #1038b4;
  --secondary-color: #b00b0b;
}

.text-primary-color {
  color: var(--primary-color);
}

.hover\:text-secondary-color:hover {
  color: var(--secondary-color);
}

.min-h-screen {
  min-height: calc(100vh - 100px); /* Adjust the 100px to match your footer height */
}

.grid {
  width: 100%;
  max-width: 1200px; /* Adjust the max width as needed */
  margin-bottom: 5rem;
  margin-top: 2rem;
}
</style>