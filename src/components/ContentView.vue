<template>
  <div class="wrapper">
    <Nav />
    <div>
      <div class="fixed side-bar side-bar--left">
        <router-link class="decoration-none side-bar_item" to="/electro">
          <div
            @mouseenter="setTheme('electro')"
            @mouseleave="setTheme(getPage())"
            v-bind:class="{ 'color--black ': isTheme('ecumene'),
            'color--white underline': isTheme('electro'),
            pointer: true,
          }"
            class="h60 p20  menu-text rotated"
          >
            ELECTRO
          </div>
        </router-link>
      </div>
      <div class="content">


      </div>
      <div class="fixed side-bar side-bar--right ">
        <router-link class="decoration-none side-bar_item" to="/ecumene">
          <div
            @mouseenter="setTheme('ecumene')"
            @mouseleave="setTheme(getPage())"
            v-bind:class="{ 'color--black underline': isTheme('ecumene'),
            'color--white ': isTheme('electro'),
            pointer: true,
          }"
            class="h60 p20 menu-text rotated"
          >
            ECUMENE
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import helpers from "@/mixins/helpers";

export default {
  name: "ContentView",
  components: {
    Nav
  },
  mixins: [helpers],
  beforeMount() {
    this.setTheme(this.getPage());
  }
};
</script>

<style scoped>
.wrapper {
  width: 100%;
}

.side-bar {
  top:40%;
  transform: rotate(-90deg);
}

.side-bar--right {
  right: 20px;
}

.fixed {
  position: fixed;
}

</style>
