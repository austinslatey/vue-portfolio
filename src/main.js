import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import NavBar from "./components/NavBar.vue";
import Skills from "./components/Skills.vue";
import Footer from './components/Footer.vue';
import Preloader from './components/Preloader.vue';
import Modal from './components/Modal.vue';
import Brain from './components/Brain.vue';



// Define app and use router
const app = createApp(App);
app.use(router);



// Register Components
app.component("NavBar", NavBar);
app.component("Skills", Skills)
app.component("TheFooter", Footer);
app.component("Preloader", Preloader);
app.component("Modal", Modal);
app.component("Brain", Brain);

app.mount("#app");
