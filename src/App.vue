<template>
  <div id="app"
       class="app"
       v-bind:class="{ 'color--electro':isTheme('ecumene'), 'color--ecumene':isTheme('electro')}"
  >
    <div>
      <h1 class="h1"
          v-bind:class="{ 'color--electro':isTheme('ecumene'), 'color--ecumene':isTheme('electro')}"
          :style="{'letterSpacing':letterSpacing}">LUNE~STORM </h1>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>

import helpers from "@/mixins/helpers.js";
import Home from "@/components/Home";

export default {
  name: "App",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Home
  },
  mounted() {
    const number = Math.round((window.innerWidth - 445) / 9);
    this.letterSpacing = `${number}px`;
    window.addEventListener("resize", () => {
      const number = Math.round((window.innerWidth - 445) / 9);
      this.letterSpacing = `${number}px`;
    });

    this.setTheme(this.getPage());
  },
  data() {
    return {
      letterSpacing: "1px"
    };
  },
  mixins: [helpers]
};
</script>

<style>
@import "./assets/styles/theme.css";

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

.h1 {
  padding: 0;
  margin: 0px 0px 0px 10px;
  width: auto;
  font-size: 62px;
  text-align: center;
  text-wrap: none;
  transition: 1000ms color linear;
}


@media (max-width: 600px) {
  .h1 {
    margin: 0px;
    padding: 0px;
  }
}


</style>
