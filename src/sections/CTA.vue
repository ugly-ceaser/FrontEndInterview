<script setup lang="ts">
import { usePreferredReducedMotion } from '@vueuse/core';
import { ShieldCheck } from 'lucide-vue-next';

const isReducedMotion = usePreferredReducedMotion();
const text = "Your AI creative studio is one click away.";
</script>

<template>
  <section class="relative py-32 md:py-48 bg-void overflow-hidden text-center">
    <!-- Background Atmosphere -->
    <div class="absolute inset-0 pointer-events-none z-0">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[100vh] bg-[radial-gradient(circle_at_center,rgba(124,92,252,0.15)_0%,transparent_70%)]" />
      
      <div
        v-motion
        :initial="{ x: 0, y: 0 }"
        :variants="{
          loop: {
            x: [0, 80, -40, 0],
            y: [0, -60, 40, 0],
            transition: { duration: 20000, repeat: Infinity, ease: 'linear' }
          }
        }"
        class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
      />
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-6">
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :visible-once="{ opacity: 1, scale: 1, transition: { duration: 600 } }"
        class="mb-8 inline-block px-4 py-1.5 rounded-full bg-elevated/50 border border-white/5 backdrop-blur-md"
      >
        <span class="text-text-secondary text-xs font-medium">✦ Limited-time offer for AI Creator Course students</span>
      </div>

      <h2 class="font-syne font-bold text-4xl md:text-7xl text-text-primary mb-8 leading-[1.1] tracking-tight">
        <span
          v-for="(word, i) in text.split(' ')"
          :key="i"
          v-motion
          :initial="isReducedMotion === 'reduce' ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: i * 50, duration: 500 } }"
          class="inline-block mr-[0.2em]"
        >
          {{ word }}
        </span>
      </h2>

      <p class="text-text-secondary text-lg md:text-xl max-w-xl mx-auto mb-12">
        Stop paying for tools separately. Start with $98 in credits or go all-in with the subscription. 
        Either way — your first generation could be live in 60 seconds.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <button class="bg-primary text-text-primary px-10 py-5 rounded-full font-bold text-lg shadow-glow-violet hover:scale-[1.02] active:scale-95 transition-all">
          Claim Your Credits — $98 One-Time
        </button>
        <button class="px-10 py-5 rounded-full font-bold text-lg text-text-secondary border border-subtle hover:text-text-primary transition-all">
          Start Subscription — $39/mo
        </button>
      </div>

      <p class="text-text-ghost text-xs flex items-center justify-center gap-2">
        <ShieldCheck :size="14" /> 100% money-back guarantee · No hidden fees · Cancel anytime
      </p>
    </div>
  </section>
</template>
