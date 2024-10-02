<template>
  <div class="content-view">
    <div class="router-view">
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
      <div class="fixed side-bar side-bar--right link ">
        <router-link @click.native="setTheme('ecumene')"
                     class="decoration-none side-bar_item link" :to="getPageUrl('ecumene')">

          <div class=" menu-text rotated" v-bind:class="{'underline':isTheme('ecumene')}">
            ECUMENE
          </div>
        </router-link>
      </div>
      <router-view/>
    </div>
    <footer class="footer">
      <div class="footer-content">
        <a href="mailto:oecumena@lunestorm.com">oecumena@lunestorm.com*</a>
      </div>
    </footer>
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
      this.$refs.content.scrollTo({top: 0, behavior: "smooth"});
    });
  },
  mounted() {
    const scrollableView = this.$el.querySelector(".router-view");
    let lastScrollTop = 0;

    scrollableView.addEventListener("scroll", () => {
      const currentScroll = scrollableView.scrollTop;
      if (currentScroll > lastScrollTop) {
        document.body.classList.add("hide-system-navbar");
      } else {
        document.body.classList.remove("hide-system-navbar");
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
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

.content-view {
  width: 100%;
  padding-bottom: 0;
  padding-top: 150px;
  height: calc(100% - 140px);
  display: flex;
  flex-direction: column;
}

.router-view {
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: calc(100% - 40px);
  flex-grow: 1;
  width: 100%;
}

.footer {
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-content {
  display: flex;
  justify-content: right;
  width: 80%;
  padding-top: 10px;
  border-top: 1px solid;
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



@media (max-width: 600px) {
  .side-bar--right {
    right: 0px;
  }

  .footer-content {
    justify-content: center;
  }

  .side-bar--left {
    left: 0px;
  }
}
</style>

