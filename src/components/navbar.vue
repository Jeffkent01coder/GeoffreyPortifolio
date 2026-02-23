<template>
  <header class="sticky top-0 z-50 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
      <div class="flex items-center justify-between h-16">
        <a
          href="#home"
          class="flex-shrink-0 text-lg font-bold text-white hover:text-primary-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded"
          @click.prevent="scrollToSection('home')"
        >
          Geoffrey Erastus
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex md:items-center md:gap-1">
          <a
            v-for="item in menuItems"
            :key="item.ref"
            :href="`#${item.ref}`"
            :aria-current="activeSection === item.ref ? 'true' : undefined"
            class="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            :class="{ 'bg-gray-800 text-primary-400 font-semibold': activeSection === item.ref }"
            @click.prevent="scrollToSection(item.ref)"
          >
            {{ item.name }}
          </a>
          <a
            href="https://docs.google.com/document/d/1cHMcBAqgVTutQhBWoZpC6mLeczx5lUWfk_bXAXTvJKs/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
            class="ml-2 px-4 py-2 bg-primary-500 text-white text-sm font-semibold rounded-lg hover:bg-primary-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
          >
            Resume
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center gap-2">
          <a
            href="https://docs.google.com/document/d/1cHMcBAqgVTutQhBWoZpC6mLeczx5lUWfk_bXAXTvJKs/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
            class="px-3 py-2 text-sm font-medium text-primary-400 hover:text-primary-300"
          >
            Resume
          </a>
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            :aria-expanded="isOpen"
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            @click="isOpen = !isOpen"
          >
            <svg v-if="!isOpen" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div
      id="mobile-menu"
      v-show="isOpen"
      class="md:hidden border-t border-gray-800"
      role="dialog"
      aria-label="Mobile navigation"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          v-for="item in menuItems"
          :key="item.ref"
          :href="`#${item.ref}`"
          :aria-current="activeSection === item.ref ? 'true' : undefined"
          class="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2.5 rounded-lg text-base font-medium transition-colors"
          :class="{ 'bg-gray-800 text-primary-400 font-semibold': activeSection === item.ref }"
          @click.prevent="scrollToSection(item.ref)"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const activeSection = ref('home')

const menuItems = ref([
  { name: 'Home', ref: 'home' },
  { name: 'Experience', ref: 'experience' },
  { name: 'About', ref: 'about' },
  { name: 'Skills', ref: 'skills' },
  { name: 'Latest Work', ref: 'latestWork' },
  { name: 'Contact', ref: 'contact' }
])

const sectionIds = ['home', 'experience', 'about', 'skills', 'latestWork', 'contact']

function updateActiveSection() {
  const scrollY = window.scrollY
  const offset = 120
  let current = 'home'
  for (let i = sectionIds.length - 1; i >= 0; i--) {
    const el = document.getElementById(sectionIds[i])
    if (el && el.getBoundingClientRect().top <= offset) {
      current = sectionIds[i]
      break
    }
  }
  activeSection.value = current
}

const scrollToSection = (sectionRef) => {
  const sectionElement = document.getElementById(sectionRef)
  const marginTop = 100

  if (sectionElement) {
    const sectionPosition = sectionElement.getBoundingClientRect().top + window.pageYOffset - marginTop
    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth'
    })
    activeSection.value = sectionRef
    isOpen.value = false
  }
}

onMounted(() => {
  updateActiveSection()
  window.addEventListener('scroll', updateActiveSection, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>
