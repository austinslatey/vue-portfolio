<template>
    <div class="container mx-auto">
      <div class="flex flex-wrap -mx-4">
        <div v-for="cert in certificateData" :key="cert.id" class="w-full sm:w-1/2 lg:w-1/2 px-4 mb-10 mt-10">
          <a :href="cert.link" target="_blank">
            <img :src="cert.image" alt="certificate" class="rounded-lg shadow-lg w-full h-auto px-15 mb-20">
          </a>
        </div>
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
  
  <style>
  img {
    max-width: 100%;
    height: auto;
  }
  </style>
  