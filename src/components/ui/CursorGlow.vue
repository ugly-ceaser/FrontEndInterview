<script setup lang="ts">
import { computed } from 'vue';
import { useMouse, usePreferredReducedMotion } from '@vueuse/core';

const { x, y } = useMouse({ touch: false });
const isReducedMotion = usePreferredReducedMotion();

const backgroundStyle = computed(() => {
  return `radial-gradient(120px circle at ${x.value}px ${y.value}px, rgba(124,92,252,0.15), transparent 80%)`;
});
</script>

<template>
  <div
    v-if="isReducedMotion !== 'reduce'"
    class="fixed inset-0 pointer-events-none z-[90] hidden lg:block"
    :style="{ background: backgroundStyle }"
  />
</template>
