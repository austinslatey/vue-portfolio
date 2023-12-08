<template>
  <div class="md:grid-cols-1 max-h-screen mb-2">
    <section class="col-span-1 max-h-screen overflow-y-auto about-section bg-gray-800">
      <!-- <img :src="selfie" alt="About me" /> -->
      <div class="card-text m-2 space-y-4 text-center text-custom-white text-3xl p-4 about-text">
        <p>
          Hello! My name is Austin Slater, and I'm a Full-Stack Web Developer from Minnesota.
        </p>
        <p>
          As a Full-Stack Web Developer, I work on both the client-side and server-side of web applications, and I'm
          proficient in programming languages and technologies such as HTML, CSS, JavaScript, JQuery, React.js, Node.js,
          SQL, and more.
        </p>
        <p>
          Currently, I have the pleasure to be employed as an Instructional Specialist for edX, where I assist students as
          they gradually learn Web Development.
        </p>
        <p>
          I enjoy learning new concepts to further educate myself in Web and Software Development, and thoroughly reading
          documentation.
        </p>
        <p>
          Since my graduation from the University of Minnesota's Full-Stack Web Development Bootcamp, I've acquired a wide
          range of skills and experience in developing web applications that meet client needs and solve business
          problems.
        </p>
        <p>
          In my leisure time, one might discover me fishing in the region referred to as the 'Land of 10,000 Lakes.
        </p>
        <p>
          Feel welcome to connect with me on LinkedIn using the icon provided below. If you wish to contact me directly,
          use the mail icon.
        </p>
        <p>
          Thank you for taking the time to visit my portfolio, and I sincerely hope that you find your stay here to be an
          enjoyable one. Please note that the list of skills below are scrollable, and you can click on any skill to visit
          its corresponding website/resource.
        </p>
      </div>
    </section>
    <div class="md:col-span-2 md:h-auto max-h-screen overflow-y-auto mb-5">
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

<style>
  .about-text {
    margin-bottom: 10rem;
  }
</style>
  
  