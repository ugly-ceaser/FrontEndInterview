<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next';
import FAQItem from '../components/FAQItem.vue';
import { faqs } from '../data/faqs';
</script>

<template>
  <section id="faq" class="py-24 md:py-32 bg-void relative overflow-hidden">
    <!-- Subtle Atmosphere Gradient -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(124,92,252,0.06)_0%,transparent_60%)] pointer-events-none" />

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 items-start">
        <!-- Left Column: Sticky Header -->
        <div class="lg:sticky lg:top-32 flex flex-col items-start text-left">
          <span class="font-mono text-xs uppercase tracking-[0.2em] text-secondary mb-4 block">
            COMMON QUESTIONS
          </span>
          <h2 class="font-syne text-4xl md:text-[36px] font-bold text-text-primary mb-6 leading-tight">
            Everything you need to know.
          </h2>
          <p class="text-text-secondary font-sans leading-relaxed mb-8 max-w-sm">
            Can't find what you're looking for? Our support team responds within 2 hours.
          </p>
          
          <div class="flex flex-col items-start group">
            <a 
              href="#" 
              class="flex items-center gap-2 text-secondary font-bold text-sm hover:text-text-primary transition-all duration-300 py-2 border-b-2 border-secondary/0 hover:border-secondary/30"
            >
              Chat with us <ChevronRight :size="16" class="group-hover:translate-x-1 transition-transform" />
            </a>
            <div class="w-[1px] h-[60px] bg-gradient-to-b from-primary to-transparent rounded-full mt-6 ml-4" />
          </div>
        </div>

        <!-- Right Column: FAQ Items -->
        <div class="space-y-2 w-full">
          <FAQItem v-for="(faq, i) in faqs" :key="i" :q="faq.q" :a="faq.a" :index="i" />
        </div>
      </div>
    </div>
  </section>
</template>
