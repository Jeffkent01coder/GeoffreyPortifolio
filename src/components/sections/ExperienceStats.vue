<template>
  <section class="bg-gray-950 py-14 sm:py-16" aria-labelledby="experience-stats-heading">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex flex-col md:flex-row gap-8 items-center rounded-2xl border border-gray-800 bg-gray-900/50 p-8 sm:p-10">
        <div class="md:w-1/3 flex items-center justify-center">
          <div class="text-center">
            <p id="experience-stats-heading" class="font-display text-5xl md:text-6xl font-bold text-primary-500">5+</p>
            <p class="text-lg text-gray-300 mt-2">Years experience</p>
            <p class="text-sm text-gray-500 mt-1">Mobile · Web · Fintech</p>
          </div>
        </div>

        <div class="md:w-2/3 w-full">
          <div class="grid grid-cols-2 gap-3 sm:gap-4">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="bg-gray-950/80 border border-gray-800 p-4 sm:p-5 rounded-xl text-center"
            >
              <p class="font-display text-3xl md:text-4xl font-bold text-primary-500">{{ stat.value }}</p>
              <p class="text-sm text-gray-400 mt-1">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const stats = ref([
  { value: '5+', label: 'Years building apps' },
  { value: '40+', label: 'Clients served' },
  { value: '40+', label: 'Projects shipped' },
  { value: 'Play + iOS', label: 'Store releases' },
])
</script>

  