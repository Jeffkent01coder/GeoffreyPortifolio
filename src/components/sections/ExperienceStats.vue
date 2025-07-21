<template>
    <div class="bg-gray-900 py-12">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex flex-col md:flex-row gap-6 items-center">
          <!-- Years of Experience Section -->
          <div class="md:w-1/3 flex items-center justify-center h-full">
            <div class="text-center">
              <p class="text-5xl md:text-6xl font-bold text-orange-500">4+</p>
              <p class="text-xl text-gray-300 mt-2">Years Experience</p>
            </div>
          </div>
  
          <!-- Stats Grid Section -->
          <div class="md:w-2/3">
            <div class="grid grid-cols-2 gap-4">
              <div v-for="stat in stats" :key="stat.label" class="bg-gray-800 p-4 rounded-lg text-center">
                <p class="text-3xl md:text-4xl font-bold text-orange-500">{{ stat.value }}</p>
                <p class="text-sm text-gray-400 mt-1">{{ stat.label }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const stats = ref([
    { value: '5+', label: 'Craft Experience' },
    { value: '40+', label: 'Clients Served' },
    { value: '40+', label: 'Completed Projects' },
    { value: '7', label: 'Achievements' },
  ]);
  </script>

  