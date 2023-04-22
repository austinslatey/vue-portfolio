<template>
    <div>
    <h1>Certificates</h1>
    <div v-for="cert in certificateData" :key="cert.id">
      <a :href="cert.link" target="_blank">
        <img :src="cert.image" alt="certificate" />
      </a>
    </div>
  </div>
</template>

<script>
import certificateData from '@/assets/js/certificateData.js';
export default {
    name: 'Certificates',
    data() {
    return {
      certificateData: certificateData
    }
}
}
</script>