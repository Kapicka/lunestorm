<template>
  <div>
    <div class="flex justify-items-center 100w">
      <Nav currentPage="contact"></Nav>
    </div>
    <div class="text-align-center w100 mt200">
      <div><a>FACEBOOK*</a></div>
      <div><a>INSTAGRAM*</a></div>
      <div><a>PHONE*</a></div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  name: "Contact",
  components: { Nav }

};
</script>

<style scoped>

</style>
