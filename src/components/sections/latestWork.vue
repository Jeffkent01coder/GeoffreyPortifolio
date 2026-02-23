<template>
  <div class="scroll-mt-24">
    <!-- Section header -->
    <div class="bg-gray-900 w-full py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-14" id="latest-work-heading">
          <p class="text-primary-500 font-medium text-sm uppercase tracking-wider mb-2">Portfolio</p>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-3">Latest Work</h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg">Selected projects across mobile, web, and design.</p>
        </div>

        <!-- Modern project grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <article
            v-for="(project, index) in projects"
            :key="project.title"
            class="group group/card bg-gray-800/80 rounded-2xl border border-gray-700/50 overflow-hidden cursor-pointer
                     hover:border-primary-500/40 hover:shadow-xl hover:shadow-primary-500/5 hover:-translate-y-1
                     transition-all duration-300 ease-out"
            @click="openProject(project)"
          >
            <!-- Image -->
            <div class="relative aspect-[4/3] overflow-hidden">
              <img
                :src="project.images[0]"
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                <span class="px-5 py-2.5 rounded-full bg-primary-500 text-white font-medium text-sm shadow-lg">
                  View project
                </span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <span class="inline-block text-xs font-medium text-primary-500/90 uppercase tracking-wider mb-2">
                {{ project.type }}
              </span>
              <h3 class="text-xl font-semibold text-white mb-2 group-hover/card:text-primary-400 transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed line-clamp-2">
                {{ project.description }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
    
    <!-- Modal -->
    <teleport to="body">
      <div
        v-if="showModal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        class="fixed inset-0 bg-gray-900/90 z-50 overflow-y-auto backdrop-blur-sm"
        @click.self="closeModal"
        @keydown.escape="closeModal"
      >
        <div class="min-h-screen flex items-center justify-center p-4">
          <div class="bg-gray-800 w-full max-w-4xl lg:max-w-6xl xl:max-w-7xl rounded-lg overflow-hidden flex flex-col relative">
            <!-- Close button -->
            <button 
              @click="closeModal"
              class="absolute top-4 right-4 bg-gray-700 rounded-full p-2 hover:bg-gray-600 transition-colors z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              aria-label="Close project modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div class="flex flex-col lg:flex-row">
              <!-- Left side - Content -->
              <div class="w-full lg:w-1/2 relative">
                <div class="relative h-64 lg:h-[calc(100vh-8rem)] max-h-[800px]">
                  <!-- Video Player -->
                  <template v-if="selectedProject.videoUrl">
                    <video controls class="w-full h-full object-cover">
                      <source :src="selectedProject.videoUrl" type="video/mp4">
                      Your browser does not support the video tag.
                    </video>
                  </template>
                  <!-- Image Carousel -->
                  <template v-else>
                    <img 
                      v-for="(image, index) in selectedProject.images" 
                      :key="index"
                      :src="image" 
                      :alt="`${selectedProject.title} - Image ${index + 1}`"
                      :class="['w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500', 
                               { 'opacity-100': currentImageIndex === index, 'opacity-0': currentImageIndex !== index }]"
                    />
                  </template>
                </div>
                <div class="absolute bottom-0 left-0 w-full p-4 md:p-8 bg-gradient-to-t from-gray-900 to-transparent">
                  <!-- <h2 class="text-gray text-2xl md:text-4xl font-bold mb-2">{{ selectedProject.title }}</h2> -->
                  <!-- <p class="text-sm md:text-lg">{{ selectedProject.description }}</p> -->
                </div>
                <!-- Image navigation buttons -->
                <div v-if="!selectedProject.videoUrl && selectedProject.images.length > 1"
                     class="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
                  <button @click="prevImage" class="bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button @click="nextImage" class="bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Right side - Content -->
              <div class="w-full lg:w-1/2 p-6 md:p-8 bg-gray-800 overflow-y-auto max-h-[calc(100vh-8rem)]">
                <h2 id="project-modal-title" class="text-primary-500 text-2xl md:text-3xl font-bold mb-4">{{ selectedProject.title }}</h2>
                <p class="text-gray-300 mb-6 text-sm md:text-base">{{ selectedProject.fullDescription }}</p>
                <div class="space-y-4 mb-6">
                  <div class="flex items-center">
                    <span class="text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </span>
                    <span class="font-semibold w-20 text-gray-400">Client:</span>
                    <span class="text-blue-400 flex-grow">{{ selectedProject.client }}</span>
                  </div>
                  <div class="h-px bg-gray-700 w-full"></div>
                  <div class="flex items-center">
                    <span class="text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </span>
                    <span class="font-semibold w-20 text-gray-400">Type:</span>
                    <span class="text-blue-400 flex-grow">{{ selectedProject.type }}</span>
                  </div>
                  <div class="h-px bg-gray-700 w-full"></div>
                  <div class="flex items-center">
                    <span class="text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <span class="font-semibold w-20 text-gray-400">Year:</span>
                    <span class="flex-grow text-gray-400">{{ selectedProject.year }}</span>
                  </div>
                  <div class="h-px bg-gray-700 w-full"></div>

                  <div class="flex items-center">
                    <span class="text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                    <span class="font-semibold w-20 text-gray-400">Preview:</span>
                    <a href="https://github.com/Jeffkent01coder" target="_blank" rel="noopener noreferrer" class="text-primary-500 hover:underline flex-grow">
                      View on GitHub
                    </a>
                  </div>

                  
                  <div class="flex items-center">
                    <span class="text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                    <span class="font-semibold w-20 text-gray-400">Preview:</span>
                    <a :href="selectedProject.polycrest" class="text-primary-500 hover:underline flex-grow">
                      {{ selectedProject.previewLabel || 'Polycrest Africa' }}
                    </a>
                  </div>
                </div>
                <blockquote class="border-l-4 border-gray-700 pl-4 italic text-gray-300 text-sm md:text-base">
                  "{{ selectedProject.quote }}"
                  <footer class="text-gray-400 mt-2">— {{ selectedProject.quoteAuthor }}</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const projects = ref([
  {
    title: 'Kile Kitabu',
    description: 'A Kotlin and Firebase-powered debt management app for secure debt tracking, reporting, and communication. Integrated M-Pesa, SasaPay, and KCB. Available on Google Play.',
    images: ['/images/kile_kitabu.png'],
    videoUrl: null,
    fullDescription: 'Developed Kile Kitabu, a Kotlin and Firebase-powered debt management application designed for secure debt tracking, reporting, and communication. Integrated M-Pesa, SasaPay, and KCB payment services, enabling seamless and reliable digital transactions for users. Earned a formal partnership with KCB as part of the integration and product alignment process, strengthening the app’s credibility and financial ecosystem reach. Deployed the application to the Google Play Store, increasing accessibility and supporting user onboarding at scale. Planned and initiated version upgrades featuring a Flask backend and additional capabilities to enhance system reliability and overall user experience. Kile Kitabu is a simple tool that helps you keep track of all the money your customers owe you. Tech: Kotlin Coroutines, Kotlin, Firebase, M-Pesa, SasaPay, KCB, Flask.',
    client: 'Personal project · KCB Partnership',
    type: 'Mobile App · Debt Management',
    year: 'Jan 2025 – Present',
    previewUrl: 'https://play.google.com/store/apps/details?id=com.kilekitabu',
    polycrest: 'https://play.google.com/store/apps/details?id=com.kilekitabu',
    previewLabel: 'Google Play',
    quote: 'Kile Kitabu is a simple tool in your phone. It does one job: it helps you keep track of all the money your customers owe you.',
    quoteAuthor: 'Google Play'
  },
  {
    title: 'Software Development',
    description: 'Your vision transformed into a seamless digital experience that engages and resonates with your audience. Every element reflects your brand’s unique identity, ensuring your message captivates and builds lasting connections with users.',
    images: ['/images/sw_1.jpg', '/images/sw_2.jpg', '/images/sw_3.jpg'],
    videoUrl: null,
    fullDescription: 'This project features a sleek, minimalistic website built with Next.js and styled using Tailwind CSS, emphasizing clean aesthetics and user-friendly navigation. The site includes an integrated AI chatbot that enhances user interaction by providing real-time assistance and personalized responses. By leveraging Next.js for dynamic rendering and Tailwind CSS for a responsive layout, the website not only looks modern and inviting but also delivers a seamless and engaging user experience',
    client: 'Stanbest Group (EA) Limited, Polycrest Africa, Indie Games Group Kenya',
    type: 'Software Development',
    year: '2024',
    previewUrl: 'https://github.com/Jeffkent01coder',
    polycrest:"https://polycrest.africa/",
    quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    quoteAuthor: 'Martin Fowler'
  },
  {
    title: 'Graphics Design',
    description: 'Your brand’s personality, captured in a single, powerful logo',
    images: ['/images/Stanbest Banner & Flier-01.jpg','/images/mockup_1.jpg','/images/ill1.jpg','/images/Stanbest 25 Flier-01.jpg', '/images/mockup_2.jpg','/images/ill2.jpg', '/images/Stanbest Banner & Flier-02.jpg','/images/mockup_3.jpg','/images/Stanbest Banner & Flier-03.jpg', '/images/mockup_4.jpg','/images/ill3.jpg', '/images/mockup_5.jpg','/images/ill4.jpg', '/images/mockup_6.jpg', '/images/mockup_7.jpg'],
    videoUrl: null,
    fullDescription: 'Blending creativity with purpose, our graphic design transforms visuals into compelling stories that resonate. Every color, line, and layout is thoughtfully crafted to capture attention, convey meaning, and inspire action. From branding to digital and print, we create visuals that leave a lasting impression, ensuring your message is as powerful as it is beautiful.',
    client: 'Stancap Enterprises, Stanbest Group(EA) Limited ',
    type: 'Graphic',
    year: '2024',
    previewUrl: 'https://www.behance.net/geoffreyerastus',
    polycrest: 'https://www.behance.net/geoffreyerastus',
    quote: 'Great design is more than just aesthetics; it’s a visual story that speaks louder than words and lingers longer than a glance',
    quoteAuthor: 'AI'
  },
  {
    title: 'UI/UX Design',
    description: 'Seamlessly blending aesthetics with functionality, our UI/UX design transforms user interactions into intuitive, delightful experiences. From sleek interfaces to effortless navigation, we craft digital journeys that captivate and engage, ensuring every click feels natural and meaningful.',
    images: ['/images/UI_Mockup4.jpg', '/images/UI_1.png', '/images/UIDesign.jpg', '/images/UIDesign_2.jpg'],
    videoUrl: null,
    fullDescription: 'I design with a deep understanding that great user experiences go beyond just looks. My UI/UX design blends creative flair with strategic thinking, creating interfaces that are visually striking and easy to navigate. Every detail, from color harmony and typography to layout and micro-interactions, is thoughtfully crafted to enhance user engagement. With a strong focus on user behavior and accessibility, I aim to build digital experiences that feel intuitive, foster connection, and deliver value. Whether its for mobile or web, my designs ensure that each interaction is purposeful and fluid, making technology feel human',
    client: 'Stanbest Group (EA) Limited',
    type: 'User Interface/User Experience Design',
    year: '2024. 2023',
    previewUrl: 'https://www.figma.com/design/CALoyJqgn3oYv2ryML7BFv/Stanbest?node-id=0-1&t=TtBFpTfzeHyUwW0T-1',
    polycrest: 'https://www.figma.com/design/CALoyJqgn3oYv2ryML7BFv/Stanbest?node-id=0-1&t=TtBFpTfzeHyUwW0T-1',
    quote: "We tend to forget that behind every product, there's a person – a human with dreams, struggles, and emotions. UX design is about connecting the heart of the designer to the heart of the user",
    quoteAuthor: 'Aarron Walter'
  },
])

const showModal = ref(false)
const selectedProject = ref(null)
const currentImageIndex = ref(0)

const openProject = (project) => {
  selectedProject.value = project
  currentImageIndex.value = 0
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

const nextImage = () => {
  if (selectedProject.value && !selectedProject.value.videoUrl) {
    currentImageIndex.value = (currentImageIndex.value + 1) % selectedProject.value.images.length
  }
}

const prevImage = () => {
  if (selectedProject.value && !selectedProject.value.videoUrl) {
    currentImageIndex.value = (currentImageIndex.value - 1 + selectedProject.value.images.length) % selectedProject.value.images.length
  }
}

function onEscape(e) {
  if (e.key === 'Escape') closeModal()
}

onMounted(() => {
  document.addEventListener('keydown', onEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onEscape)
})
</script>