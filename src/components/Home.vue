<template>
  <div class="content">
    <div class="">
      <div>
        <router-link class="decoration-none" to="/ecumene">
          <div
            @mouseenter="setTheme('electro')"
            @click="$emit('click-electro')"
            v-bind:class="{
            'color--black ': isTheme('ecumene'),
            'color--white underline': isTheme('electro'),
            pointer: true,
          }"
            class="h60 p20 align-right menu-text">
            ELECTRO
          </div>
        </router-link>
      </div>
    </div>
    <div>
      <div>
        <router-link class="decoration-none" to="/ecumene">
          <div
            @mouseenter="setTheme('ecumene')"
            @click="$emit('click-electro')"
            v-bind:class="{
            'color--black underline': isTheme('ecumene'),
            'color--white ': isTheme('electro'),
            pointer: true,
          }"
            class="h60 p20 border-left align-left menu-text"
          >
            ECUMENE
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import helpers from "@/mixins/helpers.js";

export default {
  name: "Home",
  mounted() {
    const number = Math.round((window.innerWidth - 500) / 10);
    this.letterSpacing = `${number}px`;
    window.addEventListener("resize", () => {
      const number = Math.round((window.innerWidth - 500) / 10);
      this.letterSpacing = `${number}px`;
    });
  },
  mixins: [helpers],
  methods: {
    setBackgroundColor(color) {
      this.bg = color;
    }
  }
};
</script>

<style>

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
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding-top: 150px;
}

.border-left {
  border-left: 1px solid black;
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

.menu-text {
  transition: 1s;
}

.decoration-none {
  text-decoration: none;
}

.pointer {
  cursor: pointer;
}
</style>
