<template>
  <nav class="nav fixed-container top75"
       v-bind:class=" { fixed, }"
       style="{overflow: hidden}"
  >
    <ul class="ul flex"
    >
      <router-link class="mr10 pointer link"
                   v-bind:class="{underline:currentPage==='events'}" :to="getUrl('events')">
        EVENTS
      </router-link>
      <router-link class="mr10 pointer link"
                   v-bind:class="{underline:currentPage==='people'}" :to="getUrl('people')">
        PEOPLE
      </router-link>
      <router-link class="mr10 pointer link"
                   v-bind:class="{underline:currentPage==='venues'}" :to="getUrl('venues')">
        VENUES
      </router-link>
    </ul>
  </nav>
</template>

<script>
import helpers from "@/mixins/helpers";
import { artists, events, theme, venues } from "../store";

export default {
  name: "Nav",
  props: {
    currentPage: {
      type: String
    }
  },
  data() {
    return {
      fixed: false,
      theme, events, artists, venues
    };
  },
  mixins: [helpers]
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

.top75 {
  top: 75px;
}


.mr10 {
  margin-right: 10px;
}
</style>
