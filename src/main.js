import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";

const routes = [
  {
    path: "/",
    component: Home
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
