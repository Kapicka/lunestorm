<template>
  <div class="list-item">
    <div class="flex-mobile flex flex-gap-10 align-items-end">
      <div class="text-align-center-mobile">
        <div class="bold">{{ event | formatDate }}</div>
        <div>
          <div class="bold">
            {{ event.name }}
          </div>
        </div>
      </div>
      <a class="link link--star text-align-center max-w250 " v-if="event.place_url" target="_blank" :href="event.place_url">
        {{ event.place_name }}
      </a>
      <div class="flex">
        <a class="flex float-left link link--star ml5" v-bind:key="`link_${i}`" :href="link.url"
           v-for="(link,i) of event.links">
          {{ link.name }}
        </a>
      </div>
    </div>
    <HidebleDescription class="description-mobile text-align-center mt20"
                        v-if="!!event.description || (event.people && !!event.people.length)">
      <div class="mt20">
        <div>{{ event.description }}</div>
        <div class="justify-content-center mt20" v-if="event.people && event.people.length">
          <div>People:</div>
          <div class="mt5">
            <div v-bind:key="artist.id" v-for="artist of event.people">
              <router-link class="link link--start ml5"
                           v-if="artist.name"
                           :to="getUrl(`people#${artist}`)">{{ artist.name }}*
              </router-link>
              <div v-else>{{ artist.id }}*</div>
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
  components: {HidebleDescription},
  filters: {
    formatDate(event) {
      return event.show_time ?  moment(event.start_date).format("DD.MM.YYYY HH:mm"): moment(event).format("DD.MM.YYYY");
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

.text-align-center-mobile {
  text-align: center;
}
.flex-mobile {
  flex-direction: column;
  gap: 1px;
  align-items: center;
}
.description-mobile {
  text-align: center;
}
</style>