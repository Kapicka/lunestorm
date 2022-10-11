<template>
  <div id="app" class="app">
    <h1 class="h1"
        v-bind:class="{ 'color--electro':isTheme('ecumene'), 'color--ecumene':isTheme('electro')}"
        :style="{'letterSpacing':letterSpacing}">LUNE~STORM </h1>
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
    const number = Math.round((window.innerWidth - 500) / 10);
    this.letterSpacing = `${number}px`;
    window.addEventListener("resize", () => {
      const number = Math.round((window.innerWidth - 500) / 10);
      this.letterSpacing = `${number}px`;
    });
    this.setTheme("ecumene");
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
  color: black;
}

body {
  margin: 0;
  pading: 0;
  transition: 1s background-color;
}

.h1 {
  padding: 0;
  color: #fff2d8;
  width: auto;
  font-size: 72px;
  text-align: center;
  text-wrap: none;
  margin: 0 0 0 20px;
  transition: 1000ms color linear;
}

.color--electro {
  color: black;
}

.color--ecumene {
  color: #ffecc1;
}

.electro-theme {
  background-color: black;
}

.ecumene-theme {
  background-color: #fff2d8;

}


</style>
