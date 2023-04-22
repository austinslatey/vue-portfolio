<template>
  <div class="columns text-center mt-10 mb-20 h-80 overflow-y-scroll">
    <h2 class="mb-4">Skills:</h2>
    <ul>
      <li v-for="skill in skills" :key="skill.name" class="mb-2">
        <a :href="skill.url" class="text-primary-color hover:text-secondary-color">
          {{ skill.name }}
        </a>
      </li>
    </ul>
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
</style>