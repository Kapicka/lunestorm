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
      <router-view :people="people" :events="events"/>

      <div v-if="loading" class="pt150 w100 h-100 flex justify-content-center">
      <Loader/>
      </div>
    </div>
    <footer class="footer"
            v-bind:class="{'bg--electro':isTheme('electro'), 'bg--ecumene':isTheme('ecumene')}"
    >
      <div class="footer-content">
        <a href="mailto:oecumena@lunestorm.com">oecumena@lunestorm.com*</a>
      </div>
    </footer>
  </div>
</template>

<script>
import helpers from "@/mixins/helpers";
import {createClient} from '@supabase/supabase-js';
import Loader from "@/components/Loader.vue";

export default {
  name: "ContentView",
  components: {Loader},
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
    this.fetchData().then(() => {
      this.loading = false
    })

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
  data() {
    return {
      people: [],
      events: [],
      loading: true
    };
  },
  methods: {
    async fetchData() {
      const superbase = createClient(
          process.env.VUE_APP_SUPERBASE_URL,
          process.env.VUE_APP_SUPERBASE_ANON_KEY
      )
      const {data: eventsData, error: eventsError, count: eventsCount} = await superbase
          .from("events")
          .select('*', {count: 'exact'})
          .order("start_date", {ascending: false})
      const {data: peopleData, error: peopleError, count: peopleCount} = await superbase
          .from("people")
          .select('*', {count: 'exact'})
      const {data: eventPeople, error: eventPeopleError, count: eventPeopleCount} = await superbase
          .from("event_people")
          .select('*', {count: 'exact'})

      this.events = eventsData.map(event => {
        const people = eventPeople.filter(ep => ep.event_id === event.id).map(ep => peopleData.find(p => p.id === ep.person_id));
        return {...event, people};
      });

      this.people = peopleData;

    },
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
  padding-top: 150px;
  padding-bottom: 150px;
  display: flex;
  flex-direction: column;
}

.router-view {
  overflow-x: hidden;
  width: 100%;
}

.footer {
  position: fixed;
  width: 100%;
  top: calc(100dvh - 70px);
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
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

