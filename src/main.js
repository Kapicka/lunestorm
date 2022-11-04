import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueMeta from "vue-meta";
import routes from "./routes";

Vue.use(VueRouter);
Vue.use(VueMeta);

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
