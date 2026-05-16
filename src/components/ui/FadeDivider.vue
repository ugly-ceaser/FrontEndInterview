<script setup lang="ts">
interface Props {
  from?: string;
  to?: string;
}

withDefaults(defineProps<Props>(), {
  from: 'from-void',
  to: 'to-surface'
});
</script>

<template>
  <div :class="['h-20 w-full bg-gradient-to-b pointer-events-none', from, to]" />
</template>
