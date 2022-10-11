<template>
    <nav class="nav">
      <ul class="ul flex"
          v-bind:class="{ 'color--black':isTheme('ecumene'),
             'color--white':isTheme('electro')}"
      >
        <li class="mr10 pointer">EVENTS</li>
        <li class="mr10 pointer">ARTISTS</li>
        <li class="mr10 pointer">PLACES</li>
      </ul>
    </nav>
</template>

<script>
import helpers from "@/mixins/helpers";

export default {
  name: "Nav",
  mixins:[helpers]
};

</script>

<style scoped>
.flex {
  display: flex;
}

.flex {
  display: flex;
}

.ul {
  text-decoration: none;
  list-style: none;
}

.nav {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 0;
  padding-top: 0;
}

.mr10 {
  margin-right: 10px;
}

.pointer {
  cursor: pointer;
}
</style>
