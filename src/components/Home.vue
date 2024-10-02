<template>
  <div class="home">
    <div class="home-content">
      <div>
        <div>
          <router-link class="decoration-none" to="/electro">
            <div
                @mouseenter="setTheme('electro')"
                v-bind:class="{
            'border-right--white underline  color--ecumene': isTheme('electro'),
            'border-right--black color--electro': isTheme('ecumene')} "
                @click="setTheme('electro')"

                class="h60 p20 text-align-right menu-text pointer">
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
                class="h60 p20  text-align-left menu-text"
                style="{overflow: hidden}"
            >
              ECUMENE
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="footer-content">
        <a href="mailto:oecumena@lunestorm.com">oecumena@lunestorm.com*</a>
      </div>
    </footer>
  </div>
</template>

<script>
import helpers from "@/mixins/helpers.js";
import "../assets/styles/theme.css";

export default {
  name: "Home",
  mounted() {
    const number = Math.round((window.innerWidth - 500) / 9);
    this.letterSpacing = `${number}px`;
    window.addEventListener("resize", () => {
      const number = Math.round((window.innerWidth - 500) / 9);
      this.letterSpacing = `${number}px`;
    });
  },
  mixins: [helpers]
};
</script>

<style>
@import "../assets/styles/theme.css";
@import "../assets/styles/common.css";

.home-content {
  display: grid;
  height: calc(100vh - 200px);
  grid-template-columns: 1fr 1fr;
  align-items: center;
}


.p20 {
  padding: 20px;
}

.menu-text {
  transition: 1s;
}

.decoration-none {
  text-decoration: none;
  text-underline: none;
}

.home {
  width: 100%;
  padding-bottom: 0;
  padding-top: 150px;
  height: calc(100% - 160px);
  display: flex;
  flex-direction: column;
}
.footer-content{
  display: flex;
  justify-content: right;
  width: 80%;
  padding-top: 10px;
  border-top: 1px solid;
}
.footer {
  padding-top: 20px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 600px) {

}
</style>
