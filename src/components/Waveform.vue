<template>
  <div class="flex items-center justify-center gap-1.5">
    <div
      v-for="i in 12"
      :key="i"
      class="w-1 bg-primary/60 rounded-full"
      v-motion
      :initial="{ height: 12 }"
      :variants="{
        animate: {
          height: [12, 32, 16, 40, 12],
          transition: {
            duration: 1200,
            repeat: Infinity,
            delay: (i - 1) * 100,
            ease: 'easeInOut'
          }
        }
      }"
    />
  </div>
</template>
