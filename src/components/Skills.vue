<template>
    <div>
    <h2>Skills:</h2>
    <ul>
      <li v-for="skill in skills" :key="skill.name">
        <a :href="skill.url">{{ skill.name }}</a>
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