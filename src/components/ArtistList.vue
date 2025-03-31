<template>
  <div class="w100 center-content">
    <Nav currentPage="people"/>
    <div class="w100 mt10">
      <div class="justify-content-center w100">
        <div
            class="list-item"
            v-for="(artist, i) in peopleItems"
            :key="artist.id"
            :ref="artist.id"
        >
          <div class="flex gap-5 first-link mt5">
            <div>
              <div class="profile-container">
                <ProfileImage :src="artist.photo && artist.photo.publicUrl"/>
                <div>
                  <p class="bold">{{ artist.name }}</p>
                  <MarkDown :markdown-text="artist.description"/>
                  <div class="flex gap-10 first-link mt5">
                    <div
                        v-for="(link, index) in artist.links"
                        :key="`${artist.name}_link_${index}`"
                    >
                      <a class="link link--star" :href="link.url">{{ link.name }}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
              v-if="i !== peopleItems.length - 1"
              class="w100 text-align-center break"
          >
            ~
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import HidebleDescription from "@/components/HidebleDescription";
import MarkDown from "@/components/MarkDown.vue";
import helpers from "@/mixins/helpers";
import ProfileImage from '@/components/ProfileImage.vue';

export default {
  name: "ArtistList",
  components: {ProfileImage, MarkDown, HidebleDescription, Nav},
  metaInfo: {
    title: "People | Lune Storm"
  },
  computed: {
    peopleItems() {
      return this.people;
    }
  },
  props: {
    people: {
      type: Array,
      required: true
    }
  },
  mixins: [helpers]
};
</script>

<style scoped>

/* Mobile-first: default is block for mobile devices */
.profile-container {
  display: block;
  max-width: 600px;
  padding-left: 100px;
  padding-right: 100px;
}

/* For larger screens, use grid layout */
@media screen and (min-width: 900px) {
  .profile-container {
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: 50px;
    padding-left: 90px;
    padding-right: 90px;
    max-width: 800px;
  }
}

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