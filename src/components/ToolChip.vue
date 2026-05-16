<script setup lang="ts">
import type { showcaseTools } from '../data/tools';

defineProps<{
  tool: typeof showcaseTools[0];
}>();
</script>

<template>
  <div class="bg-elevated/40 border border-white/5 px-6 py-4 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:scale-[1.05] hover:bg-elevated/80 hover:border-primary/30 hover:shadow-glow-violet cursor-default">
    <span class="text-2xl">{{ tool.icon }}</span>
    <div class="flex flex-col">
      <span class="text-text-primary font-bold font-sans">{{ tool.name }}</span>
      <span class="font-mono text-[10px] text-text-ghost uppercase tracking-wider">from ${{ tool.price }}/gen</span>
    </div>
  </div>
</template>
