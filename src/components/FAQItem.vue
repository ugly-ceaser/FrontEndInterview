<script setup lang="ts">
import { ref } from 'vue';
import { Plus } from 'lucide-vue-next';

defineProps<{
  q: string;
  a: string;
  index: number;
}>();

const isOpen = ref(false);
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
    :class="[
      'group rounded-2xl bg-elevated border transition-all duration-500 overflow-hidden',
      isOpen ? 'border-primary/40 shadow-glow-violet' : 'border-white/5 hover:border-white/10'
    ]"
  >
    <button 
      @click="isOpen = !isOpen"
      class="w-full py-5 px-6 flex items-center justify-between text-left group/btn"
    >
      <span class="font-sans font-medium text-text-primary text-[17px] pr-8 transition-colors group-hover/btn:text-primary">
        {{ q }}
      </span>
      <div
        :class="[
          'flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300',
          isOpen ? 'bg-primary text-text-primary' : 'bg-void text-primary border border-white/5'
        ]"
        :style="{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }"
      >
        <Plus :size="20" />
      </div>
    </button>
    
    <div v-if="isOpen" class="transition-all duration-400 ease-out">
      <div class="px-6 pt-3 pb-5 max-w-2xl">
        <p class="text-text-secondary text-[15px] leading-[1.7] border-l-2 border-primary pl-4">
          {{ a }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Basic height transition for simplicity, can be enhanced with @vueuse/motion */
</style>
