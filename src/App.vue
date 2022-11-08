<template>
  <div id="app"
       class="app"
       v-bind:class="{ 'color--electro':isTheme('ecumene'), 'color--ecumene':isTheme('electro')}"
  >
    <div>
      <h1 class="h1 no-wrap"
          v-bind:class="{ 'color--electro':isTheme('ecumene'), 'color--ecumene':isTheme('electro')}" >LUNESTORM </h1>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>

import helpers from "@/mixins/helpers.js";

export default {
  name: "App",
  mounted() {
    this.setTheme(this.getPage());
  },
  mixins: [helpers]
};
</script>

<style>
@import "./assets/styles/theme.css";
a {
  text-decoration: none;
  color: inherit;
}
.app {
  transition: 500ms;
}

#app {
  maring: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: 1s background-color;
}

a {
  text-decoration: none;
}

body {
  margin: 0;
  pading: 0;
  transition: 1s background-color;
}
.no-wrap {
  text-wrap: none;
  white-space: nowrap;
}

.h1 {
  padding: 0;
  margin: 0px 0px 0px 10px;
  width: auto;
  font-size: 62px;
  text-align: center;
  text-wrap: none;
  transition: 1000ms color linear;
  letter-spacing: 20px;
}
@media (max-width: 600px) {
  .h1 {
    font-size: 56px;
    margin: 0px;
    padding: 0px;
    letter-spacing: initial;
  }
}


</style>
