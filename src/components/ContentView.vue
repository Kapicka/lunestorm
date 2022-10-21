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
      <div>
        <router-view></router-view>
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
