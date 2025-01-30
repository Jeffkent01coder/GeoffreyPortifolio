<template>
    <div class="bg-gray-900 w-full">
      <div class="text-white p-8 max-w-6xl mx-auto">
        <h1 class="text-3xl font-bold mb-12 text-center relative pb-4">
          What I Do
          <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-orange-500"></div>
        </h1>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(service, index) in services" :key="index" class="border-l border-gray-700 pl-6">
            <div class="flex items-center mb-4">
              <component :is="service.icon" class="w-6 h-6 text-orange-500 mr-3" />
              <h3 class="text-xl font-semibold">{{ service.title }}</h3>
            </div>
            <p class="text-sm text-gray-400">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { ComputerDesktopIcon, WrenchScrewdriverIcon, CameraIcon } from '@heroicons/vue/24/outline'
  
  const services = ref([
    {
      icon: ComputerDesktopIcon,
      title: "Graphic Design",
      description: "I have done Graphic Design for more than 5 years, I create posters, logos, business cards, brochures, magazines, posters, mockups, flyers, etc."
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Development",
      description: "I am a Full Stack Developer, I develop both web and mobile apps. Check the skills section to find out more on my strengths and abilities."
    },
    {
      icon: CameraIcon,
      title: "Pich Deck",
      description: "I am an experienced pitch deck creator with over three years of expertise in designing compelling and persuasive presentations. I specialize in crafting visually engaging and impactful decks that effectively communicate ideas, attract investors, and drive business success."
    }
  ])
  </script>