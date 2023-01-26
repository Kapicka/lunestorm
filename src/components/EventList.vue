<template>
  <div>
    <div class="flex justify-items-center 100w">
      <Nav class="nav" currentPage="events"></Nav>
    </div>
    <div>
      <div class="center-content w100 mt200 fade-in" v-if="upcomingEvents.length">
        <div class="flex justify-content-center flex-direction-column w100">
          <h2 class="text-align-center bold pb20 h2"> Upcoming events</h2>
          <div :key="event.key" v-for="(event,i) in upcomingEvents">
            <EventListItem :event="event" />
            <div v-if="i !== upcomingEvents.length-1" class="w100 text-align-center break">~</div>
          </div>
        </div>
      </div>
      <div v-if="pastEvents.length">
        <div
          class="flex justify-content-center flex-direction-column w100">
          <h2 class="text-align-center bold pb20 pt50"> Past events</h2>
          <div :key="event.key" v-for="(event,i) in pastEvents">
            <EventListItem :event="event" />
            <div v-if="i !== eventItems.length-1" class="w100 text-align-center break">~</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import helpers from "@/mixins/helpers";
import Nav from "@/components/Nav";
import { artists } from "@/store";
import EventListItem from "@/components/EventListItem";
import moment from "moment";

export default {
  name: "EventList",
  metaInfo: {
    title: "Events | Lune Storm"
  },
  components: { Nav, EventListItem },
  data() {
    return {
      artists
    };
  },
  computed: {
    eventItems() {
      return this.events.map(e => ({ ...e, artists: this.getArtistList(e.artists) }));
    },
    pastEvents() {
      return this.eventItems.filter(this.isPastEvent)
        .sort((a, b) => moment(a.dateStart).unix() - moment(b.dateStart).unix());
    },
    upcomingEvents() {
      return this.eventItems.filter(event => !this.isPastEvent(event))
        .sort((a, b) => moment(a.dateStart).unix() - moment(b.dateStart).unix());
    }
  },
  mixins: [helpers],
  methods: {
    isPastEvent(event) {
      return moment().isAfter(event.dateEnd);
    },
    getArtistList(artistKeys) {
      if (!artistKeys) {
        return undefined;
      }
      console.log(artistKeys);
      return artistKeys.map(ak => this.getArtist(ak));
    },
    getArtist(key) {
      const artist = this.artists.find(a => a.key === key);
      return artist ? artist : { name: key, key, type: ["electro", "ecumene"] };
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
.rule {
  padding-top: 20px;
}


</style>
