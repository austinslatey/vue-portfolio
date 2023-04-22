<template>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <section class="col-span-2">
          <!-- <img :src="selfie" alt="About me" /> -->
          <div class="card-text">
            <h2>About Me</h2>
            <p class="text-lg">
              Hello! My name is Austin Slater, and I'm a Full-Stack Web Developer from Minnesota.
              <br /><br />
              As a Full-Stack Web Developer, I work on both the client-side and server-side of web applications, and I'm proficient in programming languages and technologies such as HTML, CSS, JavaScript, JQuery, React.js, Node.js, SQL, and more.
              <br /><br />
              Currently, I have the pleasure to be employed as an Instructional Specialist for edX, where I assist students as they gradually learn Web Development.
              <br /><br />
              I enjoy learning new concepts to further educate myself in Web and Software Development, and thoroughly reading documentation.
              <br /><br />
              Since my graduation from the University of Minnesota's Full-Stack Web Development Bootcamp, I've acquired a wide range of skills and experience in developing web applications that meet client needs and solve business problems.
              <br /><br />
              In my leisure time, one might discover me fishing in the region referred to as the 'Land of 10,000 Lakes.
            </p>
            <p class="text-lg">
              Feel welcome to connect with me on LinkedIn using the icon provided below, should you wish to contact me directly use the mail icon.
              <br /><br />
              Thank you for taking the time to visit my portfolio, and I sincerely hope that you find your stay here to be an enjoyable one. Please note that the list of skills below are scrollable, and you can click on any skill to visit its corresponding website/resource
            </p>
          </div>
        </section>
        <div class="md:col-span-1 overflow-y-auto m-5 h-40 md:h-auto">
          <skills />
        </div>
    </div>
  </template>
  
  <script>
  import skills from "../Skills.vue";
  // import selfie from "./assets/imgs/selfie.png";
  
  export default {
    data() {
      return {
        // selfie,
      };
    },
    components: { skills },
  };
  </script>
  
  