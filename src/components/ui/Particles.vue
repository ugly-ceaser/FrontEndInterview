<script setup lang="ts">
import { usePreferredReducedMotion } from '@vueuse/core';

withDefaults(defineProps<{
  count?: number;
}>(), {
  count: 20
});

const isReducedMotion = usePreferredReducedMotion();

const getParticleStyle = (i: number) => {
  return {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    opacity: Math.random() * 0.5 + 0.2,
    backgroundColor: i % 3 === 0 ? 'var(--accent-primary)' : i % 3 === 1 ? 'var(--accent-secondary)' : 'white',
    filter: 'blur(1px)'
  };
};

const getParticleTransition = () => {
  return {
    duration: Math.random() * 10 + 10,
    repeat: Infinity,
    ease: "easeInOut"
  };
};
</script>

<template>
  <div v-if="isReducedMotion !== 'reduce'" class="absolute inset-0 pointer-events-none z-0 overflow-hidden">
    <div
      v-for="i in count"
      :key="i"
      class="absolute w-1 h-1 rounded-full"
      :style="getParticleStyle(i)"
      v-motion
      :initial="{ y: 0, opacity: 0.5 }"
      :enter="{ y: -20, opacity: 0.7 }"
      :variants="{
        loop: {
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3],
          transition: getParticleTransition()
        }
      }"
    />
  </div>
</template>
