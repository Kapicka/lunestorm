<template>
  <div>
    <div class="flex justify-items-center 100w">
      <Nav class="nav" currentPage="events"></Nav>
    </div>
    <div class="center-content w100 mt200 fade-in">
      <div class="flex justify-content-center flex-direction-column w100">
        <div class="list-item" v-for="(event,i ) in events" v-bind:key="event.key">
          <div class="flex-mobile flex flex-gap-10 align-items-end">
            <div class="text-align-center-mobile">
              <div class="bold">{{ event.date }}</div>
              <div class="bold">{{ event.name }}</div>
            </div>
            <a class="link link--star" v-if="event.place" target="_blank" :href="event.place.url">
              {{ event.place.name }}
            </a>
            <div class="flex">
              <a class="flex float-left link link--star ml5" v-bind:key="`link_${i}`" :href="link.url"
                 v-for="(link,i) of event.links">
                {{ link.name }}
              </a>
            </div>
          </div>
          <HidebleDescription class="description-mobile text-align-center mt20" v-if="!!event.description || !!event.artists">
            <div class="mt20">
              <div>{{ event.description }}</div>
              <div class="justify-content-center mt20" v-if="event.artists && event.artists.length">
                <div>Účinkující:</div>
                <div class="mt5">
                  <div v-bind:key="artist.key" v-for="artist of event.artists">
                    <router-link class="link link--start ml5" v-if="!!getArtistName(artist)"
                                 :to="getUrl(`people#${artist}`)">{{ getArtistName(artist) }}*
                    </router-link>
                    <div v-else>{{ artist }}*</div>
                  </div>
                </div>
              </div>
              <div class="mt20" v-if="event.price">Vstupné: {{ event.price }}</div>
            </div>
          </HidebleDescription>
          <div v-if="i !==events.length-1" class="w100 text-align-center break">~</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import helpers from "@/mixins/helpers";
import Nav from "@/components/Nav";
import HidebleDescription from "@/components/HidebleDescription";
import { artists } from "@/store";

export default {
  name: "EventList",
  metaInfo:{
    title:'Events | Lune Storm'
  },
  components: { HidebleDescription, Nav },
  data() {
    return {
      artists
    };
  },
  mixins: [helpers],
  methods: {
    hasArtist(key) {
      return !!this.artists.find(a => a.key === key);
    },
    getArtistName(key) {
      const artist = this.artists.find(a => a.key === key);
      return artist ? artist.name : key;
    }
  },
  props: {
    events: {
      type: Array
    }
  }
};
</script>

<style>
@import "../assets/styles/common.css";
@import "../assets/styles/list.css";
@import "../assets/styles/animations.css";

@media (max-width: 500px) {
  .flex-mobile {
    flex-direction: column;
    gap: 1px;
    align-items: center;
  }

  .description-mobile {
    text-align: center;
  }

  .text-align-center-mobile {
    text-align: center;
  }


}

</style>
