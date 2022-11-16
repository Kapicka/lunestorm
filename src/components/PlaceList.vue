<template>
  <div class="flex justify-items-center 100w">
    <Nav currentPage="venues"></Nav>
  </div>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  name: "PlaceList",
  metaInfo:{
    title:'Venues | Lune Storm'
  },
  components: {Nav}
};
</script>

<style scoped>
@import "../assets/styles/animations.css";

</style>
