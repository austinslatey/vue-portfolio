<template>
  <div>
    <div class='threeD-container' ref="container">
      <!-- Modal component -->
      <Modal @open-3d-model="handleOpen3DModel" />
    </div>

    <!-- Render the 3D model without any condition -->
    <div>
      <Brain v-if="show3DModel" />
    </div>
  </div>
</template>

<script>
import Brain from '../Brain.vue';
import Modal from '../Modal.vue';

export default {
  name: 'Home',
  components: {
    Brain,
    Modal
  },
  data() {
    return {
      show3DModel: false,
    };
  },
  methods: {
    handleOpen3DModel() {
      // Set show3DModel to true when the "Open" button is clicked
      this.show3DModel = true;
    },
  },
};
</script>

<style>
.threeD-container {
  overflow-x: hidden;
}
</style>
