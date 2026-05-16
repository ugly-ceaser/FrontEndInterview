<script setup lang="ts">
import { ref, computed } from 'vue';
import { usePreferredReducedMotion } from '@vueuse/core';
import { ChevronRight } from 'lucide-vue-next';
import Waveform from './Waveform.vue';
import type { showcaseTools } from '../data/tools';

const props = defineProps<{
  tool: typeof showcaseTools[0];
  index: number;
}>();

const isReducedMotion = usePreferredReducedMotion();
const rotateX = ref(0);
const rotateY = ref(0);

const onMouseMove = (e: MouseEvent) => {
  if (isReducedMotion.value === 'reduce') return;
  const target = e.currentTarget as HTMLDivElement;
  const rect = target.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;
  const xPct = mouseX / width - 0.5;
  const yPct = mouseY / height - 0.5;
  
  rotateY.value = xPct * 14; // Replicating the range [-7, 7]
  rotateX.value = -yPct * 14; // Replicating the range [7, -7]
};

const onMouseLeave = () => {
  rotateX.value = 0;
  rotateY.value = 0;
};

const transformStyle = computed(() => {
  if (isReducedMotion.value === 'reduce') return {};
  return {
    transform: `perspective(1000px) rotateX(${rotateX.value}deg) rotateY(${rotateY.value}deg)`,
    transition: rotateX.value === 0 ? 'transform 0.5s ease-out' : 'none'
  };
});
</script>

<template>
  <div
    v-motion
    :initial="{ y: 40, opacity: 0, scale: 0.95 }"
    :enter="{ 
      y: 0, 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 500, 
        delay: index * 50 
      } 
    }"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
    :style="transformStyle"
    class="group bg-elevated border border-white/5 rounded-3xl overflow-hidden hover:border-primary/40 hover:shadow-glow-violet transition-all duration-300"
  >
    <!-- Preview Zone -->
    <div class="aspect-video relative bg-surface overflow-hidden">
      <img 
        v-if="tool.image"
        :src="tool.image" 
        :alt="tool.name" 
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div 
        v-else
        :class="[
          'absolute inset-0 opacity-40',
          tool.category === 'Video' ? 'bg-gradient-to-br from-indigo-900 to-black' :
          tool.category === 'Image' ? 'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-500 via-purple-500 to-pink-500' :
          'bg-void'
        ]"
      />
      
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          v-if="tool.category === 'Video'"
          class="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-2xl"
        >
          <div class="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-current border-b-[10px] border-b-transparent ml-1" />
        </div>
        <Waveform v-else-if="tool.category === 'Audio'" />
        <div 
          v-else-if="tool.category === 'Image' && !tool.image"
          class="w-full h-full opacity-20"
          :style="{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--accent-primary) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }"
        />
      </div>

      <div class="absolute inset-0 bg-void/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
        <span class="text-sm font-bold text-text-primary tracking-wide">Preview Output →</span>
      </div>
    </div>

    <!-- Bottom Panel -->
    <div class="p-6">
      <div class="flex items-center gap-2 mb-2">
        <span class="text-xl">{{ tool.icon }}</span>
        <h4 class="font-syne font-bold text-text-primary">{{ tool.name }}</h4>
      </div>
      <p class="text-text-secondary text-sm mb-4 line-clamp-1">{{ tool.desc }}</p>
      
      <div class="flex flex-wrap gap-2 mb-6">
        <span 
          v-for="tag in tool.tags" 
          :key="tag"
          class="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-bold text-text-ghost uppercase tracking-wider"
        >
          {{ tag }}
        </span>
      </div>

      <div class="flex items-center justify-between pt-4 border-t border-white/5">
        <div class="font-mono text-xs text-text-secondary">
          from <span class="text-text-primary font-bold">{{ tool.price }}</span> ⚡/gen
        </div>
        <button class="text-primary text-sm font-bold flex items-center gap-1 group/btn transition-all">
          Try Now 
          <ChevronRight :size="16" class="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
</template>
