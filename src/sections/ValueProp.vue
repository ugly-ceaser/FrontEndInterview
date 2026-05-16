<script setup lang="ts">
import { X, Check, Zap } from 'lucide-vue-next';
</script>

<template>
  <section id="value-prop" class="py-24 md:py-32 bg-surface relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <span class="font-mono text-xs uppercase tracking-[0.2em] text-secondary mb-4 block">
          THE PROMPTEDIT DIFFERENCE
        </span>
        <h2 class="font-syne text-4xl md:text-5xl font-bold text-text-primary whitespace-pre-line">
          Stop juggling subscriptions.
          Start creating.
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-12 relative items-center">
        <!-- VS Badge -->
        <div class="flex absolute left-1/2 top-[48%] md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-elevated border border-white/10 items-center justify-center z-20 font-syne font-bold text-text-ghost text-xs md:text-base shadow-2xl">
          VS
        </div>

        <!-- Before Card -->
        <div
          v-motion
          :initial="{ x: -60, opacity: 0 }"
          :visible-once="{ x: 0, opacity: 1, transition: { duration: 700 } }"
          class="bg-[#1a0a0a] border border-dashed border-red-500/20 rounded-3xl p-8 md:p-10 relative overflow-hidden"
        >
          <div class="absolute top-6 right-6 text-red-500">
            <X :size="24" />
          </div>
          <h3 class="font-syne text-xl font-bold mb-8 text-red-100/80 uppercase tracking-wider">Before PromptEdit</h3>
          
          <div class="space-y-4 mb-10">
            <div 
              v-for="tool in [
                { name: 'Veo', price: '$25.99/mo' },
                { name: 'Kling', price: '$25.99/mo' },
                { name: 'ElevenLabs', price: '$22/mo' },
                { name: 'Suno', price: '$10/mo' },
                { name: 'ChatGPT', price: '$20/mo' },
                { name: 'Gemini', price: '$19.99/mo' },
                { name: 'Grok', price: '$30/mo' },
                { name: 'HeyGen', price: '$99/mo' },
              ]" 
              :key="tool.name" 
              class="flex items-center justify-between group"
            >
              <span class="text-text-secondary font-medium">{{ tool.name }}</span>
              <div class="relative">
                <span class="text-text-ghost font-mono text-sm">{{ tool.price }}</span>
                <div 
                  v-motion
                  :initial="{ width: 0 }"
                  :visible-once="{ width: '100%', transition: { duration: 800, delay: 500 } }"
                  class="absolute top-1/2 left-0 h-[1.5px] bg-red-500/40 -rotate-2 origin-left"
                />
              </div>
            </div>
          </div>

          <div class="pt-6 border-t border-red-500/10">
            <div class="flex items-baseline justify-between mb-2">
              <span class="text-red-200/60 text-sm font-medium uppercase">Minimum Total</span>
              <span class="text-red-500 font-syne text-2xl font-bold">~$252/month</span>
            </div>
            <p class="text-red-900/60 text-xs font-medium">And you still don't own the content.</p>
          </div>
        </div>

        <!-- After Card -->
        <div
          v-motion
          :initial="{ x: 60, opacity: 0 }"
          :visible-once="{ x: 0, opacity: 1, transition: { duration: 700 } }"
          class="bg-[#040f0f] border border-secondary/20 rounded-3xl p-8 md:p-10 relative shadow-2xl shadow-secondary/5"
        >
          <div class="absolute top-6 right-6 text-secondary">
            <Check :size="24" />
          </div>
          <h3 class="font-syne text-xl font-bold mb-8 text-secondary uppercase tracking-wider">After PromptEdit</h3>
          
          <ul class="space-y-6 mb-10">
            <li 
              v-for="(benefit, i) in [
                'One platform — all tools',
                'Pay per generation, not per month',
                'No subscriptions. Ever.',
                'All major AI models, always updated'
              ]" 
              :key="i" 
              class="flex items-center gap-4"
            >
              <div class="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Check :size="14" class="text-secondary" />
              </div>
              <span class="text-text-primary font-medium">{{ benefit }}</span>
            </li>
          </ul>

          <div class="pt-6 border-t border-secondary/10">
            <div class="flex items-center justify-between p-4 rounded-2xl bg-void/50 border border-white/5 mb-6 group transition-all duration-300 hover:border-primary/20">
              <div class="flex items-center gap-3">
                <Zap :size="18" class="text-primary animate-pulse" />
                <span class="font-mono text-sm font-bold text-text-primary">847 credits remaining</span>
              </div>
              <div class="w-2 h-2 rounded-full bg-primary shadow-glow-violet" />
            </div>
            <div class="flex items-baseline justify-between">
              <span class="text-secondary/60 text-sm font-medium uppercase">Start from</span>
              <span class="text-text-primary font-syne text-2xl font-bold">$98 one-time</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
