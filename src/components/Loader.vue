<template>
  <div :class="`loader ${isTheme('ecumene') ? 'bg--electro': 'bg--ecumene'}`"></div>
</template>

<script>
import helpers from "@/mixins/helpers";

export default {
  name: 'Loader',
  mixins: [helpers]
}
</script>

<style scoped>
.loader {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  animation: pulse 3s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(4);
  }
  100% {
    transform: scale(1);
  }
}
</style>