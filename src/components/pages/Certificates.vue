<template>
    <div class="container mx-auto">
      <h1 class="text-3xl font-bold mb-8">Certificates</h1>
      <div class="flex flex-wrap -mx-4">
        <div v-for="cert in certificateData" :key="cert.id" class="w-full sm:w-1/2 lg:w-1/2 px-4 mb-8">
          <a :href="cert.link" target="_blank">
            <img :src="cert.image" alt="certificate" class="rounded-lg shadow-lg ">
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
  