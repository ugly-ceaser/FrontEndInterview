<script setup lang="ts">
import { Star } from 'lucide-vue-next';
import StatItem from '../components/StatItem.vue';
import { testimonials } from '../data/testimonials';
</script>

<template>
  <section id="creators" class="py-24 bg-void">
    <!-- Stats Banner -->
    <div class="w-full bg-elevated/50 border-y border-white/5 py-16 mb-24">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        <StatItem :value="43943" label="Creators" suffix="+" />
        <StatItem :value="20" label="AI Tools" suffix="+" />
        <StatItem :value="100000" label="Templates" suffix="+" />
        <StatItem :value="0.10" label="Min. per gen" prefix="$" :decimals="2" />
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="font-syne text-4xl md:text-5xl font-bold text-text-primary mb-4">Creators love it.</h2>
        <p class="text-text-secondary font-medium">Don't take our word for it.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        <div
          v-for="(t, i) in testimonials"
          :key="i"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: i * 100, duration: 500 } }"
          class="p-8 rounded-3xl bg-elevated border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1"
        >
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 shadow-lg">
              <img :src="t.image" :alt="t.name" class="w-full h-full object-cover" />
            </div>
            <div>
              <h4 class="text-text-primary font-bold text-sm">{{ t.name }}</h4>
              <p class="text-text-ghost text-[10px] uppercase tracking-wider font-bold">{{ t.role }}</p>
            </div>
          </div>
          
          <div class="flex gap-1 mb-4">
            <Star v-for="star in 5" :key="star" :size="14" class="fill-fire text-fire" />
          </div>

          <p class="text-text-secondary text-sm leading-relaxed italic">
            "{{ t.quote }}"
          </p>
        </div>
      </div>

      <!-- Logo Strip -->
      <div class="text-center">
        <span class="text-[10px] uppercase tracking-[0.3em] text-text-ghost font-bold block mb-8">
          As seen in / Creators from
        </span>
        <div class="flex flex-wrap justify-center gap-4 md:gap-8 opacity-40">
          <div v-for="brand in ['YouTube', 'TikTok', 'Instagram', 'Teachable', 'Kajabi', 'Skool']" :key="brand" class="px-6 py-2 rounded-full border border-white/10 text-sm font-bold text-text-primary hover:opacity-100 transition-opacity cursor-default">
            {{ brand }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
