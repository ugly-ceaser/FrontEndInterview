<script setup lang="ts">
import ScrollProgress from './components/ui/ScrollProgress.vue';
import CursorGlow from './components/ui/CursorGlow.vue';
import FadeDivider from './components/ui/FadeDivider.vue';

import Navbar from './sections/Navbar.vue';
import Hero from './sections/Hero.vue';
import ValueProp from './sections/ValueProp.vue';
import Tools from './sections/Tools.vue';
import Templates from './sections/Templates.vue';
import Pricing from './sections/Pricing.vue';
import Testimonials from './sections/Testimonials.vue';
import FAQ from './sections/FAQ.vue';
import CTA from './sections/CTA.vue';
import Footer from './sections/Footer.vue';
</script>

<template>
  <div class="min-h-screen bg-void selection:bg-primary/30 grain-overlay">
    <ScrollProgress />
    <CursorGlow />
    <Navbar />

    <main>
      <Hero />
      <FadeDivider from="from-void" to="to-surface" />
      <ValueProp />
      <FadeDivider from="from-surface" to="to-void" />
      <Tools />
      <FadeDivider from="from-void" to="to-void" />
      <Pricing />
      <Testimonials />
      <Templates />
      <FadeDivider from="from-surface" to="to-surface" />
      <FAQ />
      <FadeDivider from="from-surface" to="to-void" />
      <CTA />
      <FadeDivider from="from-void" to="to-surface" />
      <Footer />
    </main>
  </div>
</template>

<style>
/* Global grain overlay class defined in style.css */
</style>
