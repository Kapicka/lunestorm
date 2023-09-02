<template>
  <div class="w100 center-content">
      <Nav currentPage="people"></Nav>
    <div class=" w100 mt10 fade-in">
      <div class="justify-content-center w100">
        <div
          class="list-item"
          v-for="(artist,i) in artists"
          v-bind:key="artist.key"
          :ref="artist.key"
        >
          <div class="bold text-align-center"> {{ artist.name }}</div>
          <div class="flex gap-5 first-link mt5">
            <div v-bind:key="`${artist.name}_link_${i}`" v-for="(link,i) of artist.links"><a
              class="link link--star" :href="link.url">{{ link.name }}</a></div>
          </div>
          <hideble-description v-if="!!artist.description">
            <p>{{ artist.description }}</p>
          </hideble-description>
          <div v-if="i !==artists.length-1" class="w100 text-align-center break">~</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import HidebleDescription from "@/components/HidebleDescription";
import { events } from "@/store";


export default {
  name: "ArtistList",
  components: { HidebleDescription, Nav },
  metaInfo: {
    title: "People | Lune Storm"
  },
  data() {
    return {
      events
    };
  },
  mounted() {
    const artist = this.$refs[location.hash.replace("#", "")];
    if (artist) {
      window.scrollTo(0, artist[0].offsetTop);
    }
  },
  props: {
    artists: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
@import "../assets/styles/animations.css";

.first-link:first-child {
  margin-left: 0;
}

.list-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
