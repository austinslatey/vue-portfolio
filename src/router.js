import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/pages/Home.vue";
import About from "./components/pages/About.vue";
import Projects from "./components/pages/Projects.vue";
import Certificates from "./components/pages/Certificates.vue";
import NotFound from "./components/pages/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/certificates",
    name: "certificates",
    component: Certificates,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
