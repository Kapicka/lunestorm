<template>
  <div class="wrapper flex justify-content-center">
    <div class="nevim-ted">
      <div class="fixed side-bar side-bar--left">
        <router-link @click.native="setTheme('electro')"
                     class="decoration-none side-bar_item link"
                     :to="getPageUrl('electro')">
          <div class="menu-text rotated"
               v-bind:class="{'underline':isTheme('electro')}">
            ELECTRO
          </div>
        </router-link>
      </div>
      <div ref="content" class="app-content center-content">
        <router-view />
      </div>
      <div class="fixed side-bar side-bar--right link ">
        <router-link @click.native="setTheme('ecumene')"
                     class="decoration-none side-bar_item link" :to="getPageUrl('ecumene')">

          <div class=" menu-text rotated" v-bind:class="{'underline':isTheme('ecumene')}">
            ECUMENE
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import helpers from "@/mixins/helpers";

export default {
  name: "ContentView",
  props: {
    pageName: {
      type: String
    }
  },

  mixins: [helpers],
  beforeMount() {
    this.setTheme(this.getPage());
    this.getEmitter().on("scroll-up", () => {
      this.$refs.content.scrollTo({ top: 0, behavior: "smooth" });

    });
  },
  methods: {
    getPageUrl(page) {
      const toBeReplaced = page === "electro" ? "ecumene" : "electro";
      return this.$route.path.replace(toBeReplaced, page);
    }
  }
};
</script>

<style scoped>
.wrapper {
  width: 100%;
}

.nevim-ted {
}

.side-bar {
  z-index: 100;
  top: 40%;
  transform: rotate(-90deg);
}

.side-bar--right {
  right: 15px;
}

.side-bar--left {
  left: 15px;
}

.fixed {
  position: fixed;
}

.app-content {
  position: fixed;
  top: 150px;
  left: 15px;
  right: 15px;
  width: 100%;
  height: calc(100vh - 150px);
  overflow-y: scroll;
}

@media (max-width: 600px) {
  .side-bar--right {
    right: 0px;
  }

  .side-bar--left {
    left: 0px;
  }

  .nevim-ted {
    width: calc(100% - 140px);
  }


}

</style>
