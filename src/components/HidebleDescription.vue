<template>
  <div>
    <div @click="opened = !opened" class="text-align-center text-button mt20">
      {{ opened ? "[ Méně ]" : "[ Více ]" }}
    </div>
    <slot class="mt20" v-if="opened"></slot>
  </div>
</template>

<script>
export default {
  name: "HidebleDescription",
  props: {
    text: {
      type: String
    }
  },
  data() {
    return {
      opened: false
    };
  }
};
</script>

<style scoped>
.text-button {
  border: none;
  background-color: inherit;
  font-size: inherit;
  font-family: inherit;
  cursor: pointer;
  padding: 0;
}
</style>
