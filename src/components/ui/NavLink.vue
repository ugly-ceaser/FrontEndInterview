<script setup lang="ts">
defineProps<{
  href: string;
  onClick?: () => void;
}>();
</script>

<template>
  <a :href="href" class="nav-link text-sm font-medium" @click="onClick">
    <slot />
  </a>
</template>
