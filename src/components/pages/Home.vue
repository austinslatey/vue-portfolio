<template>
    <div class='container' ref="container"></div>
</template>

<script type="js">
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import brain from '@/assets/models/machV1.6.glb';
export default {
    name: 'Home',

    mounted() {
        //create the scene to render object
        const scene = new THREE.Scene();

        // Create the camera
        const camera = new THREE.PerspectiveCamera(
            35,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 25;
        camera.position.x = 2.0;
        camera.rotation.set(0.0, -0.01, 0.1);

        // create the renderer
        const renderer = new THREE.WebGL1Renderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        this.$refs.container.appendChild(renderer.domElement);

        // create loader and load glb model
        const loader = new GLTFLoader();
        loader.load(brain, (gltf) => {
            const model = gltf.scene;
            scene.add(model);

            // animation properties
            const mixer = new THREE.AnimationMixer(gltf.scene);
            const clips = gltf.animations;
            const clip = clips[0];
            const action = mixer.clipAction(clip);
            action.play();

            // animate the scene
            const animate = () => {
                requestAnimationFrame(animate);

                // Set the rotation of the model
                // model.rotation.x -= 0.002;
                model.rotation.y += 0.003;
                model.rotation.z -= 0.002;
                
                // update frametime
                mixer.update(0.006);
                renderer.render(scene, camera);
            };
            animate();
        });

        // add lighting to the scene
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(0, 1, 0);
        scene.add(light);

        // handle resizing of window
        window.addEventListener('resize', () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        });
    },
};
</script>
