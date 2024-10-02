<template>
  <div id="app"
       v-bind:class="{ 'color--electro':isTheme('ecumene'), 'color--ecumene':isTheme('electro')}"
  >
    <div class="fixed-container "><h1 class="h1 no-wrap pointer"
                                      @click="handleH1Clicked()"
    >
      LUNESTORM </h1>
    </div>
    <router-view/>
  </div>
</template>
<script>

import helpers from "@/mixins/helpers.js";

export default {
  name: "App",
  mounted() {
    this.setTheme(this.getPage());
  },
  mixins: [helpers],
  methods: {
    handleH1Clicked() {
        this.$router.push("/");
    }
  }
};
</script>

<style>
@import "./assets/styles/theme.css";

a {
  text-decoration: none;
  color: inherit;
}

#app {
  padding: 0;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: 1s background-color;
  height: 100dvh;
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
  white-space: nowrap;
}

.h1 {
  padding: 0;
  margin: 0px 0px 0px 10px;
  width: auto;
  font-size: 62px;
  text-align: center;
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
