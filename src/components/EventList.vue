<template>
  <div class="w100 center-content">
    <Nav class="nav" currentPage="events"></Nav>
    <div class=" w100 mt10">
      <div class="flex flex-direction-column align-items-center justify-content-center w100 fade-in" v-if="upcomingEvents.length">
        <h2 class=" bold pb20 h2"> Upcoming events</h2>
        <div style="min-width: 400px" :key="event.id" v-for="(event,i) in upcomingEvents.filter(themeFilter) ">
          <EventListItem :event="event" />
          <div v-if="i !== upcomingEvents.length-1" class="w100 text-align-center break">~</div>
        </div>
      </div>
      <div class="flex flex-direction-column align-items-center justify-content-center w100 fade-in" v-if="pastEvents.length">
        <h2 class="text-align-center bold pb20 pt50"> Past events</h2>
        <div style="min-width: 400px" :key="event.key" v-for="(event,i) in pastEvents.filter(themeFilter)">
          <EventListItem :event="event" />
          <div v-if="i !== eventItems.length-1" class="w100 text-align-center break">~</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import helpers from "@/mixins/helpers";
import Nav from "@/components/Nav";
import EventListItem from "@/components/EventListItem";
import moment from "moment";

export default {
  name: "EventList",
  metaInfo: {
    title: "Events | Lune Storm"
  },
  components: {Nav, EventListItem},
  computed: {
    eventItems() {
      return this.events;
    },
    pastEvents() {
      return this.eventItems.filter(this.isPastEvent)
    },
    upcomingEvents() {
      return this.eventItems.filter(event => !this.isPastEvent(event))
    }
  },
  mixins: [helpers],
  methods: {
    isPastEvent(event) {
      return moment().isAfter(event.end_date);
    },
    themeFilter(event) {
      if (event.type === "ELECTRO" && this.theme.value === "electro") {
        return true
      }
      if (event.type === "ECUMENE" && this.theme.value === "ecumene") {
        return true
      }
      if (event.type === "ELECTRO_ECUMENE") {
        return true
      }
      return false
    }
  },
  props: {
    events: {
      type: Array,
      required: true
    },
    people: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
.rule {
  padding-top: 20px;
}


</style>
