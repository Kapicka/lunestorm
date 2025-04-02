<template>
  <div class="container">
    <Nav currentPage="people" />
    <div class="profiles">
      <div
          v-for="(artist, i) in peopleItems"
          :key="artist.id"
          :ref="artist.id"
          class="profile-item"
      >
        <div class="profile-container">
          <ProfileImage
              :flip="artist.name.toLowerCase().includes('hanu')"
              :src="artist.photo && artist.photo.publicUrl"
              class="profile-image"
          />
          <div class="profile-text">
            <p class="profile-name">{{ artist.name }}</p>
            <div v-if="useCollapsible">
              <ExpandableContent>
                <MarkDown :markdown-text="artist.description" />
              </ExpandableContent>
            </div>
            <div v-else>
              <MarkDown :markdown-text="artist.description" />
            </div>
            <div class="profile-links mt10">
              <a
                  v-for="(link, index) in artist.links"
                  :key="`${artist.name}_link_${index}`"
                  class="profile-link"
                  :href="link.url"
              >
                {{ link.name }}
              </a>
            </div>
          </div>
        </div>
        <div v-if="i !== peopleItems.length - 1" class="separator">~</div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import MarkDown from "@/components/MarkDown.vue";
import ProfileImage from "@/components/ProfileImage.vue";
import ExpandableContent from "@/components/ExpandableContent.vue";

export default {
  name: "ArtistList",
  components: {
    ExpandableContent,
    ExpandableText: ExpandableContent,
    Nav,
    MarkDown,
    ProfileImage
  },
  props: {
    people: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      windowWidth: window.innerWidth
    };
  },
  computed: {
    peopleItems() {
      return this.people;
    },
    useCollapsible() {
      return this.windowWidth <= 800;
    }
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
}

.profiles {
  margin-top: 10px;
  text-align: left;
}

.profile-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
}

.profile-container {
  display: block;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 550px;
}

.profile-image {
  width: 220px;
  height: 220px;
  object-fit: cover;
}

.profile-text {
  max-width: 250px;
  margin-top: 10px;
}

.profile-name {
  font-weight: bold;
}

@media screen and (min-width: 900px) {
  .profile-container {
    display: grid;
    width: 100%;
    grid-template-columns: auto 1fr;
    gap: 50px;
    padding: 0 90px;
    max-width: 800px;

  }
  .profile-image {
    width: 250px;
    height: 250px;
    object-fit: cover;
  }

  .profile-text {
    max-width: none;
    margin-top: 0;
  }
}

.separator {
  width: 100%;
  text-align: left;
  margin: 10px 0;
}
</style>