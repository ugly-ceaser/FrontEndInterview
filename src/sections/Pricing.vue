<script setup lang="ts">
import { ref, computed } from 'vue';
import { Check, Zap, ChevronDown, X, ShieldCheck } from 'lucide-vue-next';

const generations = ref(30);
const showComparison = ref(false);
const isSubscriptionRecommended = computed(() => generations.value >= 40);

const monthlySpend = computed(() => (generations.value * 4 * 0.10).toFixed(2));
const subSavings = computed(() => (generations.value * 4 * 0.10 - 39).toFixed(2));
</script>

<template>
  <section id="pricing" class="py-24 md:py-32 bg-void relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="font-mono text-xs uppercase tracking-[0.2em] text-fire mb-4 block">
          SIMPLE PRICING
        </span>
        <h2 class="font-syne text-4xl md:text-6xl font-bold text-text-primary whitespace-pre-line">
          Start free.
          Scale when you're ready.
        </h2>
      </div>

      <!-- Usage Calculator -->
      <div class="max-w-xl mx-auto mb-20 p-8 rounded-3xl bg-elevated border border-white/5 shadow-2xl relative">
        <label class="block text-text-primary font-bold mb-6 text-center">
          How many AI generations do you make per week?
        </label>
        
        <div class="relative mb-10 mt-4">
          <input 
            type="range" 
            min="5" 
            max="200" 
            v-model.number="generations" 
            class="w-full h-3 bg-void rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div class="flex justify-between mt-2 text-[10px] font-mono text-text-ghost uppercase tracking-widest">
            <span>5 GEN</span>
            <span>200 GEN</span>
          </div>
        </div>

        <div class="text-center space-y-2">
          <p class="text-text-primary font-medium">
            At <span class="text-primary font-bold text-lg">{{ generations }}</span> generations/week, you'd spend ~<span class="text-text-primary font-bold">${{ monthlySpend }}</span>/month on credits.
          </p>
          <div class="flex flex-col items-center">
            <p class="text-secondary text-sm font-bold">
              {{ generations >= 40 
                ? `The Subscription plan saves you ~$${subSavings} vs paying per credit.`
                : `The "Save on Credits" plan is your best starting point.` }}
            </p>
            <p class="text-secondary text-[11px] italic font-medium opacity-90 mt-1">
              You save ~$153/month vs buying separately
            </p>
          </div>
        </div>
      </div>

      <!-- Pricing Cards -->
      <div class="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto mb-16">
        <!-- Card 1: Subscription (Featured) -->
        <div
          v-motion
          :initial="{ scale: 1 }"
          :variants="{
            pulse: {
              scale: [1, 1.02, 1],
              transition: { duration: 3000, repeat: Infinity, ease: 'easeInOut' }
            }
          }"
          v-motion-variant="isSubscriptionRecommended ? 'pulse' : null"
          :style="{ 
            background: 'linear-gradient(to bottom, rgba(124, 92, 252, 0.12), rgba(0, 240, 200, 0.06))'
          }"
          :class="[
            'relative flex flex-col p-8 md:p-10 rounded-3xl border-2 transition-all duration-500 order-first md:order-last',
            isSubscriptionRecommended ? 'border-primary shadow-glow-violet' : 'border-primary/20 opacity-90 hover:opacity-100'
          ]"
        >
          <div class="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-primary text-text-primary text-[13px] font-bold uppercase tracking-widest shadow-glow-violet z-20 flex items-center gap-2">
            ⭐ Most Popular
          </div>

          <div class="mb-8">
            <div class="flex items-baseline gap-2 mb-1">
              <span class="font-syne text-5xl font-bold text-text-primary">$39</span>
              <span class="text-text-secondary text-sm">/month</span>
            </div>
            <p class="text-text-ghost text-[10px] mb-2 uppercase font-bold tracking-wider">easily cancel anytime</p>
            <p class="text-secondary text-sm font-bold leading-tight">
              Get $49 in credits every month + 10% off additional credits
            </p>
          </div>

          <ul class="space-y-4 flex-1 mb-10">
            <li 
              v-for="(f, i) in [
                'Everything in Credits plan',
                '$49 AI credits included monthly',
                '20% lifetime credit bonus',
                '10% off any credit top-ups',
                '100,000+ asset template library',
                'Faster generation speeds',
                'Multiple simultaneous generations',
                'Priority support'
              ]" 
              :key="i" 
              class="flex items-center gap-3 text-text-primary text-sm font-semibold"
            >
              <Check :size="16" class="text-secondary flex-shrink-0" />
              {{ f }}
            </li>
          </ul>

          <button class="w-full py-4 rounded-full bg-primary text-text-primary font-bold hover:shadow-glow-violet transition-all duration-300">
            Start Subscription
          </button>
        </div>

        <!-- Card 2: One-time -->
        <div
          v-motion
          :initial="{ scale: 1 }"
          :variants="{
            pulse: {
              scale: [1, 1.02, 1],
              transition: { duration: 3000, repeat: Infinity, ease: 'easeInOut' }
            }
          }"
          v-motion-variant="!isSubscriptionRecommended ? 'pulse' : null"
          :class="[
            'flex flex-col p-8 md:p-10 rounded-3xl bg-elevated border transition-all duration-500 order-last md:order-first',
            !isSubscriptionRecommended ? 'border-primary/40 shadow-glow-violet' : 'border-white/5 opacity-80 hover:opacity-100'
          ]"
        >
          <div class="mb-8">
            <span class="px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-[10px] font-bold text-secondary uppercase tracking-widest mb-4 inline-block">
              No Monthly Commitments
            </span>
            <div class="flex items-baseline gap-2 mb-1">
              <span class="font-syne text-5xl font-bold text-text-primary">$98</span>
              <span class="text-text-secondary text-sm">one-time</span>
            </div>
            <p class="text-secondary text-sm font-bold italic">Get $110 worth of AI credits</p>
          </div>

          <ul class="space-y-4 flex-1 mb-10">
            <li 
              v-for="(f, i) in [
                '10% bonus on first purchase',
                'Use credits on any AI tool',
                'Credits never expire',
                'No subscription required',
                'Try every tool before committing',
                'Top up anytime'
              ]" 
              :key="i" 
              class="flex items-center gap-3 text-text-secondary text-sm font-medium"
            >
              <Zap :size="14" class="text-primary flex-shrink-0" />
              {{ f }}
            </li>
          </ul>

          <button class="w-full py-4 rounded-full bg-elevated border border-primary text-primary font-bold hover:bg-primary/5 transition-all duration-300">
            Claim Credits
          </button>
        </div>
      </div>

      <!-- Comparison Toggle -->
      <div class="text-center mb-16">
        <button 
          @click="showComparison = !showComparison"
          class="text-text-ghost hover:text-text-primary flex items-center gap-2 mx-auto transition-colors font-bold text-sm"
        >
          Compare plans in detail <ChevronDown :size="16" :class="['transition-transform duration-300', showComparison ? 'rotate-180' : '']" />
        </button>
        
        <Transition
          enter-active-class="transition duration-400 ease-out"
          enter-from-class="opacity-0 -translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-300 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-4"
        >
          <div v-if="showComparison" class="overflow-hidden mt-8">
            <div class="max-w-3xl mx-auto rounded-3xl bg-surface border border-white/5 p-6">
              <table class="w-full text-left text-sm">
                <thead>
                  <tr class="border-b border-white/5">
                    <th class="py-4 text-text-ghost uppercase text-[10px] font-bold tracking-widest">Feature</th>
                    <th class="py-4 text-center text-text-ghost uppercase text-[10px] font-bold tracking-widest">Credits</th>
                    <th class="py-4 text-center text-text-ghost uppercase text-[10px] font-bold tracking-widest">Sub</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-white/5">
                  <tr 
                    v-for="(row, i) in [
                      { f: 'Access to All AI Tools', c: true, s: true },
                      { f: 'Credits Never Expire', c: true, s: true },
                      { f: 'Template Library Access', c: false, s: true },
                      { f: 'Lifetime Bonus Multiplier', c: '10%', s: '20%' },
                      { f: 'Priority Gen Queue', c: false, s: true },
                      { f: 'Support Level', c: 'Standard', s: 'Priority' },
                    ]" 
                    :key="i" 
                    class="group hover:bg-white/5 transition-colors"
                  >
                    <td class="py-4 text-text-primary font-medium">{{ row.f }}</td>
                    <td class="py-4 text-center font-mono">
                      <template v-if="typeof row.c === 'boolean'">
                        <Check v-if="row.c" :size="14" class="mx-auto text-secondary/60" />
                        <X v-else :size="14" class="mx-auto text-text-ghost" />
                      </template>
                      <span v-else class="text-text-secondary">{{ row.c }}</span>
                    </td>
                    <td class="py-4 text-center font-mono">
                      <template v-if="typeof row.s === 'boolean'">
                        <Check v-if="row.s" :size="14" class="mx-auto text-secondary" />
                        <X v-else :size="14" class="mx-auto text-text-ghost" />
                      </template>
                      <span v-else class="text-secondary font-bold">{{ row.s }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Transition>
      </div>

      <!-- Payment Logos -->
      <div class="flex flex-wrap items-center justify-center gap-8 opacity-20 grayscale mb-12">
        <span v-for="logo in ['Apple Pay', 'Visa', 'Mastercard', 'Amex', 'PayPal', 'Google Pay']" :key="logo" class="font-syne font-bold text-text-primary text-sm tracking-tighter">{{ logo }}</span>
      </div>

      <!-- Guarantee -->
      <div class="max-w-2xl mx-auto p-4 rounded-full bg-elevated border border-yellow-500/10 flex items-center gap-4 justify-center">
        <ShieldCheck class="text-yellow-500 flex-shrink-0" :size="20" />
        <p class="text-[11px] md:text-xs text-text-secondary font-medium">
          <span class="text-text-primary font-bold">100% Money-Back Guarantee</span> — Cancel anytime. Full refund within 30 days on unused credits.
        </p>
      </div>
    </div>
  </section>
</template>
