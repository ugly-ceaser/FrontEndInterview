<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { useScroll } from '@vueuse/core';
import { Menu, X, ChevronRight } from 'lucide-vue-next';
import NavLink from '../components/ui/NavLink.vue';

const isMobileMenuOpen = ref(false);
const { y } = useScroll(window);

const navBg = computed(() => {
  const opacity = Math.min(y.value / 80, 0.8);
  return `rgba(13, 13, 20, ${opacity})`;
});

const navBorder = computed(() => {
  const opacity = Math.min(y.value / 80, 0.15);
  return `rgba(124, 92, 252, ${opacity})`;
});

const navBlur = computed(() => {
  const blur = Math.min(y.value / 80 * 12, 12);
  return `blur(${blur}px)`;
});

watch(isMobileMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : 'unset';
});

const navLinks = [
  { name: 'AI Tools', href: '#tools' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Templates', href: '#templates' },
  { name: 'Creators', href: '#creators' },
  { name: 'FAQ', href: '#faq' },
];
</script>

<template>
  <nav
    :style="{ 
      backgroundColor: navBg, 
      borderBottomColor: navBorder,
      backdropFilter: navBlur 
    }"
    class="fixed top-0 left-0 right-0 z-50 border-b border-transparent transition-all duration-300"
    v-motion
    :initial="{ y: -20, opacity: 0 }"
    :enter="{ y: 0, opacity: 1, transition: { duration: 600 } }"
  >
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="font-syne text-2xl font-bold tracking-tight">
          <span class="text-text-primary">Prompt</span>
          <span class="text-primary">Edit</span>
          <span class="text-text-secondary text-lg">.com</span>
        </span>
      </div>

      <div class="hidden md:flex items-center gap-8">
        <NavLink v-for="link in navLinks" :key="link.name" :href="link.href">
          {{ link.name }}
        </NavLink>
      </div>

      <div class="hidden md:flex items-center gap-4">
        <button class="bg-primary hover:bg-primary/90 text-text-primary px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-glow-violet active:scale-95">
          Get Started
        </button>
      </div>

      <button 
        class="md:hidden text-text-primary p-2"
        @click="isMobileMenuOpen = true"
      >
        <Menu :size="24" />
      </button>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <div v-if="isMobileMenuOpen" class="fixed inset-0 z-[60] bg-surface md:hidden flex flex-col">
      <div class="flex items-center justify-between p-6 h-20 border-b border-white/5">
        <div class="font-syne text-2xl font-bold">
          <span class="text-text-primary">Prompt</span>
          <span class="text-primary">Edit</span>
        </div>
        <button 
          class="text-text-primary p-2"
          @click="isMobileMenuOpen = false"
        >
          <X :size="24" />
        </button>
      </div>
      
      <div class="flex-1 flex flex-col justify-center gap-8 px-10">
        <a
          v-for="(link, i) in navLinks"
          :key="link.name"
          :href="link.href"
          @click="isMobileMenuOpen = false"
          class="text-4xl font-syne font-bold text-text-primary flex items-center justify-between group"
        >
          {{ link.name }}
          <ChevronRight class="text-primary opacity-0 group-hover:opacity-100 transition-opacity" :size="32" />
        </a>
      </div>

      <div class="p-10 border-t border-white/5">
        <button class="w-full bg-primary text-text-primary py-4 rounded-2xl text-lg font-bold shadow-glow-violet">
          Get Started
        </button>
      </div>
    </div>
  </Transition>
</template>
