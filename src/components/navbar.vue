<template>
  <header class="sticky top-0 z-50 w-full bg-gray-950/90 backdrop-blur-md border-b border-gray-800/80">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
      <div class="flex items-center justify-between h-16">
        <a
          href="#home"
          class="flex-shrink-0 font-display text-lg font-bold text-white hover:text-primary-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 rounded"
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
          <!-- Resume temporarily disabled
          <a
            href="/docs/GEOFFREY%20ERASTUS%20WAMBAYA%20Resume.docx.pdf"
            download="GEOFFREY ERASTUS WAMBAYA Resume.pdf"
            class="ml-2 px-4 py-2 bg-primary-500 text-white text-sm font-semibold rounded-lg hover:bg-primary-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
          >
            Resume
          </a>
          -->
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center gap-2">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            :aria-expanded="isOpen"
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            @click="toggleMenu"
          >
            <span class="relative h-6 w-6">
              <svg
                class="absolute inset-0 h-6 w-6 transition-all duration-300 ease-out"
                :class="isOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                class="absolute inset-0 h-6 w-6 transition-all duration-300 ease-out"
                :class="isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile side menu -->
    <Teleport to="body">
      <Transition name="mobile-backdrop">
        <div
          v-if="isOpen"
          class="fixed inset-0 z-[60] bg-gray-950/60 backdrop-blur-sm md:hidden"
          aria-hidden="true"
          @click="closeMenu"
        />
      </Transition>

      <Transition name="mobile-drawer">
        <aside
          v-if="isOpen"
          id="mobile-menu"
          class="fixed top-0 right-0 z-[70] flex h-full w-[min(20rem,88vw)] flex-col bg-gray-950 border-l border-gray-800 shadow-2xl md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div class="flex items-center justify-between h-16 px-4 border-b border-gray-800">
            <p class="font-display text-sm font-semibold text-white">Menu</p>
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              aria-label="Close menu"
              @click="closeMenu"
            >
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav class="flex-1 overflow-y-auto px-3 py-4 space-y-1">
            <a
              v-for="(item, index) in menuItems"
              :key="item.ref"
              :href="`#${item.ref}`"
              :aria-current="activeSection === item.ref ? 'true' : undefined"
              class="mobile-nav-link text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-3 rounded-xl text-base font-medium transition-colors duration-200"
              :class="{ 'bg-gray-800 text-primary-400 font-semibold': activeSection === item.ref }"
              :style="{ transitionDelay: isOpen ? `${80 + index * 40}ms` : '0ms' }"
              @click.prevent="scrollToSection(item.ref)"
            >
              {{ item.name }}
            </a>
          </nav>

          <!-- Download Resume temporarily disabled -->
        </aside>
      </Transition>
    </Teleport>
  </header>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const activeSection = ref('home')

const menuItems = ref([
  { name: 'Home', ref: 'home' },
  { name: 'Experience', ref: 'experience' },
  { name: 'About', ref: 'about' },
  { name: 'Latest Work', ref: 'latestWork' },
  { name: 'Skills', ref: 'skills' },
  { name: 'Contact', ref: 'contact' }
])

const sectionIds = ['home', 'about', 'experience', 'latestWork', 'skills', 'contact']

function updateActiveSection() {
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

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}

const scrollToSection = (sectionRef) => {
  const sectionElement = document.getElementById(sectionRef)
  const marginTop = 100

  closeMenu()

  if (sectionElement) {
    // Wait for drawer close animation so scroll target feels natural
    window.setTimeout(() => {
      const sectionPosition = sectionElement.getBoundingClientRect().top + window.pageYOffset - marginTop
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      })
      activeSection.value = sectionRef
    }, 180)
  }
}

function onKeydown(e) {
  if (e.key === 'Escape' && isOpen.value) closeMenu()
}

watch(isOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  updateActiveSection()
  window.addEventListener('scroll', updateActiveSection, { passive: true })
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.mobile-backdrop-enter-active,
.mobile-backdrop-leave-active {
  transition: opacity 0.3s ease;
}

.mobile-backdrop-enter-from,
.mobile-backdrop-leave-to {
  opacity: 0;
}

.mobile-drawer-enter-active,
.mobile-drawer-leave-active {
  transition: transform 0.32s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.28s ease;
}

.mobile-drawer-enter-from,
.mobile-drawer-leave-to {
  transform: translateX(100%);
  opacity: 0.85;
}

.mobile-nav-link {
  opacity: 0;
  transform: translateX(12px);
  transition:
    opacity 0.28s ease,
    transform 0.28s cubic-bezier(0.22, 1, 0.36, 1),
    background-color 0.2s ease,
    color 0.2s ease;
}

.mobile-drawer-enter-active .mobile-nav-link,
.mobile-drawer-enter-to .mobile-nav-link,
aside#mobile-menu .mobile-nav-link {
  opacity: 1;
  transform: translateX(0);
}
</style>
