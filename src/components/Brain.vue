<template>
  <div class='threeD-container' ref="container">
    <Preloader v-if="isLoading" />
  </div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import Preloader from '@/components/Preloader.vue';
import brain from '@/assets/models/machV1.6.glb';

export default {
  name: 'brain',

  data() {
    return {
      isLoading: true,

    };
  },

  mounted() {
    // Create the scene
    const scene = new THREE.Scene();



    // Create the camera
    const camera = new THREE.PerspectiveCamera(
      90,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    camera.position.set(0, 20, 100);

    // Create the renderer
    // Create the renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x333333); // Set the background color to black
    this.$refs.container.appendChild(renderer.domElement);

    // Create loader and load glb model
    const loader = new GLTFLoader();
    loader.load(brain, (gltf) => {
      const model = gltf.scene;
      scene.add(model);

      // Animation properties
      const mixer = new THREE.AnimationMixer(gltf.scene);
      const clips = gltf.animations;
      const clip = clips[0];
      const action = mixer.clipAction(clip);
      action.play();

      // Create the TrackballControls
      const controls = new TrackballControls(camera, renderer.domElement);
      
      // Set the mouse sensitivity
      controls.rotateSpeed = 2.5;
      
      camera.position.set(20, 20, 20);
      controls.update();
      // Animate the scene
      const animate = () => {
        requestAnimationFrame(animate);

        // Set the rotation of the model
        model.rotation.x -= 0.002;
        //  model.rotation.y += 0.003;
        //  model.rotation.z -= 0.002;

        // Update frametime
        mixer.update(0.006);
        controls.update();
        renderer.render(scene, camera);

        // Mark loading complete once model is loaded to un-render preloader
        this.isLoading = false;
      };
      animate();
    });

    

    // Add lighting to the scene
    const light = new THREE.DirectionalLight(0xffffff, 3, 1);
    
    scene.add(light);

    // Handle resizing of window
    window.addEventListener('resize', () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });

    
  },

  beforeUnmount() {
    // Clean up event listeners
    window.removeEventListener('mousemove', this.handleMouseMove);
  }
};
</script>