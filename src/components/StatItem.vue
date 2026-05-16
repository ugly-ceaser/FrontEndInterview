<script setup lang="ts">
import { ref, computed} from 'vue';
import { useTransition, TransitionPresets, useElementVisibility } from '@vueuse/core';

const props = withDefaults(defineProps<{
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}>(), {
  prefix: '',
  suffix: '',
  decimals: 0
});

const target = ref(null);
const isVisible = useElementVisibility(target);
const source = ref(0);

const output = useTransition(source, {
  duration: 2000,
  transition: TransitionPresets.easeOutCubic,
});

const formatted = computed(() => {
  return props.prefix + output.value.toLocaleString(undefined, { 
    minimumFractionDigits: props.decimals, 
    maximumFractionDigits: props.decimals 
  }) + props.suffix;
});

const hasAnimated = ref(false);



// Watch for visibility to trigger animation
import { watch } from 'vue';
watch(isVisible, (visible) => {
  if (visible && !hasAnimated.value) {
    source.value = props.value;
    hasAnimated.value = true;
  }
});
</script>

<template>
  <div 
    ref="target"
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
    class="text-center"
  >
    <h3 class="font-syne text-4xl md:text-5xl font-bold text-text-primary mb-2">
      {{ formatted }}
    </h3>
    <p class="text-text-secondary text-sm font-medium">{{ label }}</p>
  </div>
</template>
