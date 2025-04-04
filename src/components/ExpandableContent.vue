<template>
  <div class="collapsible-panel">
    <div
        class="content-container"
        ref="contentContainer"
        :style="containerStyle"
    >
      <slot></slot>
    </div>
    <button v-if="isExpandable" @click="toggle">
      {{ expanded ? "Show less*" : "Show more*" }}
    </button>
  </div>
</template>

<script>
export default {
  name: "CollapsiblePanel",
  props: {
    maxHeight: {
      type: Number,
      default: 250
    }
  },
  data() {
    return {
      expanded: false,
      naturalHeight: 0,
      collapsedHeight: 0,
      containerHeight: null
    };
  },
  computed: {
    isExpandable() {
      return this.naturalHeight > this.maxHeight;
    },
    // Inline style for the content container
    containerStyle() {
      return {
        height: this.containerHeight,
        transition: "height 0.5s ease",
        // Hide overflow only when the content exceeds maxHeight and is collapsed.
        overflow: "hidden"// (!this.expanded && this.naturalHeight > this.maxHeight) ? "hidden" : "visible"
      };
    }
  },
  mounted() {
    this.$nextTick(() => {
      const el = this.$refs.contentContainer;
      this.naturalHeight = el.scrollHeight;
      this.collapsedHeight = this.naturalHeight === 0 ? 0 : Math.min(this.naturalHeight, this.maxHeight);
      this.containerHeight = this.collapsedHeight + "px";
    });
  },
  methods: {
    toggle() {
      const el = this.$refs.contentContainer;
      el.style.transition = "height 0.5s ease";
      if (!this.expanded) {
        this.containerHeight = this.naturalHeight + "px";
      } else {
        this.containerHeight = this.collapsedHeight + "px";
      }
      this.expanded = !this.expanded;
    }
  }
};
</script>

<style scoped>
.content-container {
}

button {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  display: block;
  margin: 10px auto 0;
}
</style>