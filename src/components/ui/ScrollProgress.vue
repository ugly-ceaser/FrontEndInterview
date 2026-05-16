<script setup lang="ts">
import { computed } from 'vue';
import { useScroll } from '@vueuse/core';

const { y } = useScroll(window);
const scrollProgress = computed(() => {
  if (typeof document === 'undefined') return 0;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  return height === 0 ? 0 : y.value / height;
});
</script>

<template>
  <div 
    class="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary z-[100] origin-left transition-transform duration-100 ease-out"
    :style="{ transform: `scaleX(${scrollProgress})` }"
  />
</template>
