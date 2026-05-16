<script setup lang="ts">
import { ref, computed } from 'vue';
import ToolCard from './ToolCard.vue';
import { showcaseTools } from '../data/tools';

const activeTab = ref('All Tools');
const categories = ['All Tools', 'Image', 'Video', 'Audio', 'Plugins'];

const filteredTools = computed(() => {
  return activeTab.value === 'All Tools' 
    ? showcaseTools 
    : showcaseTools.filter(t => t.category === activeTab.value);
});
</script>

<template>
  <div class="sticky top-24 z-30 flex justify-center mb-16 px-4">
    <div class="flex bg-elevated/80 backdrop-blur-xl p-1.5 rounded-full border border-white/5 shadow-2xl overflow-x-auto no-scrollbar max-w-full">
      <div class="flex shrink-0">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeTab = cat"
          :class="[
            'relative px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300',
            activeTab === cat ? 'text-white' : 'text-text-secondary hover:text-text-primary'
          ]"
        >
          <div
            v-if="activeTab === cat"
            class="absolute inset-0 bg-primary rounded-full z-0 transition-all duration-300"
          />
          <span class="relative z-10">{{ cat }}</span>
        </button>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative min-h-[400px]">
    <TransitionGroup 
      name="list"
      tag="div"
      class="contents"
    >
      <ToolCard 
        v-for="(tool, i) in filteredTools" 
        :key="tool.id" 
        :tool="tool" 
        :index="i" 
      />
    </TransitionGroup>
  </div>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
