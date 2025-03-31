<template>
  <div v-html="compiledMarkdown"></div>
</template>

<script setup>
import { computed } from 'vue';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

const props = defineProps({
  markdownText: {
    type: String,
    required: true,
  },
});

// Enable line breaks for single newlines
marked.setOptions({
  breaks: true,
});

const compiledMarkdown = computed(() => {
  const rawHtml = marked(props.markdownText);
  return DOMPurify.sanitize(rawHtml);
});
</script>