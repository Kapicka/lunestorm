<template>
  <div id="app"
       class="app"
       v-bind:class="{
    'electro-theme':isTheme('electro'),
    'ecumene-theme':isTheme('ecumene'),
  }">
    <div class="bb">
      <h1 class="h1"
          v-bind:class="{ 'color--black':isTheme('ecumene'), 'color--white':isTheme('electro')}"
          :style="{'letterSpacing':letterSpacing}">LUNE~STORM </h1>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

import helpers from "@/mixins/helpers.js";
import Home from "@/components/Home";
import { theme } from "@/store";

export default {
  name: "App",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Home,
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
      letterSpacing: "1px",
      theme: theme
    };
  },
  mixins: [helpers],
  watch: {
    theme() {
      console.log("changed");
    }
  },
  methods: {
    setBackgroundColor(color) {
      this.bg = color;
    }
  }
};
</script>

<style>

.app {
  transition: 500ms;
  background-color: white;
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
}

.bb {
  /*display: flex;*/
  /*justify-content: right;*/

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

.color--black {
  color: black;
}

.underline {
  text-decoration: underline;
  text-underline-offset: 10px;
}

.color--white {
  color: #ffecc1;
}

.content {
  display: grid;
  grid-template-columns:1fr 1fr;
  height: 100vh;
  padding-top: 150px;
}

.border-left {
  border-left: 1px solid black

}

.align-left {
  text-align: left;
}

.align-right {
  text-align: right;
}

.p20 {
  padding: 20px;
}

.h100 {
  height: 100%;
}

.electro-theme {
  background-color: black;
}

.ecumene-theme {
  background-color: #fff2d8;

}


.w100 {
  width: 100%;
}


</style>
