<template>
  <div class="list-item">
    <div class="flex-mobile flex flex-gap-10 align-items-end">
      <div class="text-align-center-mobile">
        <div class="bold">{{ event.dateStart | formatDate }}</div>
        <div class="bold">{{ event.name }}</div>
      </div>
      <a class="link link--star text-align-center max-w250 " v-if="event.place" target="_blank" :href="event.place.url">
        {{ event.place.name }}
      </a>
      <div class="flex">
        <a class="flex float-left link link--star ml5" v-bind:key="`link_${i}`" :href="link.url"
           v-for="(link,i) of event.links">
          {{ link.name }}
        </a>
      </div>
    </div>
    <HidebleDescription class="description-mobile text-align-center mt20" v-if="!!event.description || (event.artists && !!event.artists.length)">
      <div class="mt20">
        <div>{{ event.description }}</div>
        <div class="justify-content-center mt20" v-if="event.artists && event.artists.length">
          <div>People:</div>
          <div class="mt5">
            <div v-bind:key="artist.key" v-for="artist of event.artists">
              <router-link class="link link--start ml5"
                           v-if="artist.name"
                           :to="getUrl(`people#${artist}`)">{{ artist.name }}*
              </router-link>
              <div v-else>{{ artist.key }}*</div>
            </div>
          </div>
        </div>
        <div class="mt20" v-if="event.price">Entry: {{ event.price }}</div>
      </div>
    </HidebleDescription>
  </div>
</template>
<script>
import helpers from "@/mixins/helpers";
import HidebleDescription from "@/components/HidebleDescription";
import moment from "moment";

export default {
  props: {
    event: {
      type: Object
    }
  },
  components: { HidebleDescription },
  filters: {
    formatDate(date) {
      return date.includes("T")
        ? moment(date).format("DD.MM.YYYY HH:mm")
        : moment(date).format("DD.MM.YYYY");
    }
  },
  name: "EventListItem",
  mixins: [helpers]
};
</script>

<style scoped>

@import "../assets/styles/common.css";
@import "../assets/styles/list.css";
@import "../assets/styles/animations.css";

@media (max-width: 500px) {
  .flex-mobile {
    flex-direction: column;
    gap: 1px;
    align-items: center;
  }

  .text-align-center-mobile {
    text-align: center;
  }

  .description-mobile {
    text-align: center;
  }
}
</style>