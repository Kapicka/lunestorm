<template>
  <div
      class="profile-img-container"
      :class="{
      'loading--electro': isLoading && getTheme() === 'ecumene',
      'loading--ecumene': isLoading && getTheme() === 'electro'
    }"
  >
    <img
        ref="img"
        class="profile-img"
        :class="{
      loaded: !isLoading,
         flipedImage: this.flipedImage
    }"
        loading="lazy"
        :src="src"
        alt="profile"
        @load="onLoad"
    />
  </div>
</template>

<script>
import helpers from "@/mixins/helpers";

export default {
  name: "ProfileImage",
  props: {
    flip: {
      type: Boolean,
      required: false
    },
    src: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isLoading: true,
      flipedImage: false
    };

  },
  mixins: [helpers],
  mounted() {
    if (this.flip) {
      this.$refs.img.addEventListener("click", () => {
        this.flipedImage = !this.flipedImage;
      })
    }

  },
  methods: {
    onLoad() {
      // This method is triggered when the image fully loads.
      this.isLoading = false;
    }
  }
};
</script>

<style scoped>
.profile-img-container {
  width: 200px;
  height: 200px;
  padding: 10px;
  border: 1px solid;
}


@media screen and (min-width: 500px) {
  .profile-img-container {
    width: 250px;
    height: 250px;
  }
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0; /* Start hidden */
  transition: opacity 0.5s ease-out;
}

/* When the image is loaded, opacity transitions to 1 */
.profile-img.loaded {
  opacity: 1;
}

/* Loading border animations */
@keyframes borderFade--electro {
  0% {
    border-color: rgba(26, 26, 26, 0.2);
  }
  50% {
    border-color: rgba(26, 26, 26, 1);
  }
  100% {
    border-color: rgba(26, 26, 26, 0.2);
  }
}

@keyframes borderFade--ecumene {
  0% {
    border-color: rgba(255, 236, 193, 0.2);
  }
  50% {
    border-color: rgba(255, 236, 193, 1);
  }
  100% {
    border-color: rgba(255, 236, 193, 0.2);
  }
}

.loading--electro {
  animation: borderFade--electro 5s infinite;
}

.flipedImage {
  transform: rotate(180deg);
}

.loading--ecumene {
  animation: borderFade--ecumene 5s infinite;
}
</style>