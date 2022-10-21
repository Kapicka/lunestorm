<template>
  <nav class="nav"
       v-bind:class="{fixed}"
  >
    <ul class="ul flex"
    >
      <router-link class="mr10 pointer link"
                   v-bind:class="{underline:currentPage==='events'}" :to="getUrl('events')">
        EVENTS
      </router-link>
      <router-link class="mr10 pointer link"
                   v-bind:class="{underline:currentPage==='artists'}" :to="getUrl('artists')">
        ARTISTS
      </router-link>
      <router-link class="mr10 pointer link"
                   v-bind:class="{underline:currentPage==='places'}" :to="getUrl('places')">
        PlACES
      </router-link>
    </ul>
  </nav>
</template>

<script>
import helpers from "@/mixins/helpers";

export default {
  name: "Nav",
  props: {
    currentPage: {
      type: String
    }
  },
  data() {
    return {
      fixed: false
    };
  },
  mixins: [helpers],
};


</script>

<style scoped>
@import "../assets/styles/theme.css";
@import "../assets/styles/common.css";

.ul {
  text-decoration: none;
  list-style: none;
}

.nav {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 0;
  padding-top: 0;
}
.mr10 {
  margin-right: 10px;
}
</style>
