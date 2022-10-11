import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import ContentView from "@/components/ContentView";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/ecumene",
    component: ContentView
  },
  {
    path: "/electro",
    component: ContentView
  }
];

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
