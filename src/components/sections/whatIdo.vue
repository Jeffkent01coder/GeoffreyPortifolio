<template>
  <section class="bg-gray-900 w-full" aria-labelledby="skills-heading">
    <div class="text-white p-8 max-w-6xl mx-auto">
      <h2 id="skills-heading" class="section-heading">
        What I do
        <span class="section-heading-accent"></span>
      </h2>
      
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(service, index) in services" :key="index" class="border-l border-gray-700 pl-6">
            <div class="flex items-center mb-4">
              <component :is="service.icon" class="w-6 h-6 text-primary-500 mr-3" />
              <h3 class="text-xl font-semibold">{{ service.title }}</h3>
            </div>
            <p class="text-sm text-gray-400">{{ service.description }}</p>
          </div>
        </div>
    </div>
  </section>
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
      title: "Pitch Deck",
      description: "I am an experienced pitch deck creator with over six years of expertise in designing compelling and persuasive presentations. I specialize in crafting visually engaging and impactful decks that effectively communicate ideas, attract investors, and drive business success."
    }
  ])
  </script>