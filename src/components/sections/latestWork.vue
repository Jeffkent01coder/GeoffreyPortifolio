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

        <!-- Modern project grid (first 6) -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <article
            v-for="(project, index) in displayedProjects"
            :key="'latest-' + index"
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

        <!-- View more projects -->
        <div class="mt-12 text-center">
          <button
            type="button"
            @click="showViewMoreDialog = true"
            class="inline-flex items-center gap-2 rounded-xl border border-gray-600 bg-gray-800/50 px-6 py-3 text-sm font-medium text-gray-300 transition-all duration-200 hover:border-primary-500/50 hover:bg-gray-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
          >
            View more projects
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Dialogs: single teleport to avoid patch conflicts -->
    <teleport to="body">
      <!-- Project detail modal: only mount when both flags are set -->
      <div
        v-if="showModal && selectedProject"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        class="fixed inset-0 bg-gray-900/90 z-50 overflow-y-auto backdrop-blur-sm"
        @click.self="closeModal"
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
                    <a :href="selectedProject.polycrest" class="text-primary-500 hover:underline flex-grow">
                      {{ selectedProject.previewLabel || 'View project' }}
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

      <!-- View more projects dialog -->
      <div
        v-if="showViewMoreDialog"
        role="dialog"
        aria-modal="true"
        aria-label="All projects"
        class="fixed inset-0 bg-gray-900/95 z-[60] overflow-y-auto backdrop-blur-sm"
        @click.self="showViewMoreDialog = false"
      >
        <div class="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
          <div class="max-w-7xl mx-auto">
            <div class="flex items-center justify-between mb-10">
              <h3 class="text-2xl md:text-3xl font-bold text-white">All projects</h3>
              <button
                type="button"
                @click="showViewMoreDialog = false"
                class="rounded-full p-2 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                aria-label="Close"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <article
                v-for="(project, index) in projects"
                :key="'all-' + index"
                class="group group/card bg-gray-800/80 rounded-2xl border border-gray-700/50 overflow-hidden cursor-pointer
                         hover:border-primary-500/40 hover:shadow-xl hover:shadow-primary-500/5 hover:-translate-y-1
                         transition-all duration-300 ease-out"
                @click="openProjectFromViewMore(project)"
              >
                <div class="relative aspect-[4/3] overflow-hidden">
                  <img
                    :src="project.images[0]"
                    :alt="project.title"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                  <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                    <span class="px-4 py-2 rounded-full bg-primary-500 text-white font-medium text-sm shadow-lg">
                      View project
                    </span>
                  </div>
                </div>
                <div class="p-4">
                  <span class="inline-block text-xs font-medium text-primary-500/90 uppercase tracking-wider mb-1">
                    {{ project.type }}
                  </span>
                  <h4 class="text-base font-semibold text-white group-hover/card:text-primary-400 transition-colors line-clamp-1">
                    {{ project.title }}
                  </h4>
                  <p class="text-gray-400 text-sm leading-relaxed line-clamp-2 mt-0.5">
                    {{ project.description }}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

const projects = ref([
  {
    title: 'Verido',
    description: 'Data-driven risk assessment platform for distribution networks. Know who to trust, track payments, and manage your business from your phone. Built for agribusiness, FMCG, and emerging markets.',
    images: ['/images/verido.png'],
    videoUrl: null,
    fullDescription: 'Verido is a risk intelligence platform that helps businesses use data to decide who gets credit, track every payment, and manage operations from their phone. It features five risk scoring systems—Data Quality Score, Verido Trust Score, Trade Credit Score, Consignment Readiness, and Loan Readiness—so distribution companies can replace guesswork with evidence-based decisions. The app serves as till, cash flow manager, debt collector, and CRM for retailers and agents, with tools to record sales, set profitable prices, and monitor cash flow in real time. Built for African distribution networks (agribusiness, FMCG, donors & development), Verido delivers faster approvals, lower defaults, and 100% data-backed decisions. Available on Google Play. Tech: Flutter, mobile + web, risk scoring.',
    client: 'Verido',
    type: 'Mobile App · Flutter · Risk Intelligence',
    year: '2025 – Present',
    previewUrl: 'https://play.google.com/store/apps/details?id=app.verido.app',
    polycrest: 'https://play.google.com/store/apps/details?id=app.verido.app',
    previewLabel: 'Google Play',
    quote: 'Know who to trust. Grow your business. Use data to decide who gets credit, track every payment, and manage your business from your phone.',
    quoteAuthor: 'Verido'
  },
  {
    title: 'OutOut',
    description: 'Flutter and Firebase travel & social planning app. Plan trips, vote on plans, chat, share photos and split bills—all in one place. Available on the App Store for iPhone.',
    images: ['/images/outout.png'],
    videoUrl: null,
    fullDescription: 'OutOut is a Flutter-based mobile app built with Firebase for real-time sync and backend services. It helps friends and colleagues plan trips or outings together: create plans, vote on options, chat in groups, share photos, and split bills seamlessly. The app is designed for iPhone and published on the App Store under AIENAI. Tech: Flutter, Firebase, iOS.',
    client: 'AIENAI',
    type: 'Mobile App · Flutter · Firebase',
    year: '2025',
    previewUrl: 'https://apps.apple.com/ke/app/outout/id6741428356',
    polycrest: 'https://apps.apple.com/ke/app/outout/id6741428356',
    previewLabel: 'App Store',
    quote: 'A trip with travel buddies or Thursday dinner with colleagues? Plan, vote, chat, share photos and bills all in one place, easily!',
    quoteAuthor: 'OutOut — App Store'
  },
  {
    title: 'Afre360',
    description: 'Flutter app that lets merchants and customers sell and purchase fuel and other vehicle products seamlessly, and pay fare. Available on Google Play.',
    images: ['/images/afre360.png'],
    videoUrl: null,
    fullDescription: 'Afre360 is a Flutter-based platform that allows merchants and customers to sell and purchase fuel and other vehicle products seamlessly and also pay fare. The app connects the auto & vehicles ecosystem—enabling smooth transactions for fuel and related products. Published on Google Play by AFRE THREE SIXTY DIGITAL LTD. Tech: Flutter, mobile app, auto & vehicles.',
    client: 'AFRE THREE SIXTY DIGITAL LTD',
    type: 'Mobile App · Flutter',
    year: '2025',
    previewUrl: 'https://play.google.com/store/apps/details?id=com.swiftcoins.afre360&hl=en',
    polycrest: 'https://play.google.com/store/apps/details?id=com.swiftcoins.afre360&hl=en',
    previewLabel: 'Google Play',
    quote: 'A platform that allows merchants and customers to sell and purchase fuel and other vehicle products seamlessly and also pay fare.',
    quoteAuthor: 'Google Play'
  },
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
    title: 'ylearn',
    description: 'Kotlin and Firebase mobile learning app that makes education accessible on-the-go. Personalized paths, interactive content, and support for questions, materials, and student creativity. Available on Google Play.',
    images: ['/images/ylearn.png'],
    videoUrl: null,
    fullDescription: 'ylearn is a mobile learning app built with Kotlin and Firebase, designed to make education accessible and convenient for everyone. It offers a user-friendly interface and rich, interactive content across language learning, science, technology, and more—using videos, animations, and interactive simulations to keep learning engaging. The app provides personalized, real-time learning paths based on the user’s questions, subjects, and topics, and supports collaboration so pupils and students can share materials and showcase creativity through writing, drawings, and videos. Published on Google Play by Floater Solutions. Tech: Kotlin, Firebase, mobile app, education, personalized learning.',
    client: 'Floater Solutions',
    type: 'Mobile App · Kotlin · Firebase',
    year: '2025',
    previewUrl: 'https://play.google.com/store/apps/details?id=ke.co.ylearn.ylearn&hl=en',
    polycrest: 'https://play.google.com/store/apps/details?id=ke.co.ylearn.ylearn&hl=en',
    previewLabel: 'Google Play',
    quote: 'ylearn is a cutting-edge mobile learning app designed to make education accessible and convenient for everyone.',
    quoteAuthor: 'Google Play'
  },
  {
    title: 'Stanbest Group Website',
    description: 'Official website for Stanbest Group (EA) Limited—clean, modern design with user-friendly navigation. Built to showcase the brand and streamline engagement.',
    images: ['/images/sw_1.jpg', '/images/sw_2.jpg', '/images/sw_3.jpg'],
    videoUrl: null,
    fullDescription: 'This project features a sleek, minimalistic website built with Next.js and styled using Tailwind CSS, emphasizing clean aesthetics and user-friendly navigation. The site includes an integrated AI chatbot that enhances user interaction by providing real-time assistance and personalized responses. By leveraging Next.js for dynamic rendering and Tailwind CSS for a responsive layout, the website not only looks modern and inviting but also delivers a seamless and engaging user experience.',
    client: 'Stanbest Group (EA) Limited',
    type: 'Web Development',
    year: '2024',
    previewUrl: 'https://www.stanbestgroup.com/',
    polycrest: 'https://www.stanbestgroup.com/',
    previewLabel: 'Stanbest Group Website',
    quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    quoteAuthor: 'Martin Fowler'
  },
  {
    title: 'iSale',
    description: 'Kotlin Android app for Stanbest Group’s eTIMS integration—POS, OSCU/VSCU, and KRA-compliant sales. Helps businesses manage online and virtual sales and stay compliant.',
    images: ['/images/isale.png'],
    videoUrl: null,
    fullDescription: 'iSale is Stanbest Group’s Android app for eTIMS (electronic Tax Invoice Management System) and sales compliance in Kenya. Built with Kotlin, it provides Online and Virtual Sales Control Units (OSCU/VSCU) that integrate with existing ERP systems so businesses can manage transactions, streamline VAT reporting, and meet Kenya Revenue Authority (KRA) and eTIMS requirements. The app supports transparent sales processes, accurate reporting, and reliable integration with Stanbest’s web and backend services. Tech: Kotlin, Android, eTIMS, KRA compliance, POS.',
    client: 'Stanbest Group (EA) Limited',
    type: 'Mobile App · Kotlin · eTIMS',
    year: '2024 – Present',
    previewUrl: 'https://play.google.com/store/apps/details?id=com.stanbestlimited.isale&hl=en',
    polycrest: 'https://play.google.com/store/apps/details?id=com.stanbestlimited.isale&hl=en',
    previewLabel: 'Google Play',
    quote: 'Stanbest Group’s iSALE integration solutions focus on optimizing e-commerce operations and ensuring businesses comply with tax regulations.',
    quoteAuthor: 'Google Play'
  },
  {
    title: 'GameTribe',
    description: 'Web platform for playing free games online, earning XP, chatting, and challenging friends. Frontend development and UI/UX for the gaming experience.',
    images: ['/images/gametribe.png'],
    videoUrl: null,
    fullDescription: 'GameTribe is a web platform where users play free games online, earn XP, chat, and challenge friends. I contributed as a Frontend Developer—building and maintaining the site with modern frontend technologies and shaping the gaming platform’s user interface and experience. The project involved implementing features for discovery, social interaction, and a smooth in-browser gaming experience. Tech: modern frontend stack, responsive UI, gaming platform.',
    client: 'GameTribe',
    type: 'Web Development · Gaming',
    year: '2024 – Present',
    previewUrl: 'https://gametribe.com/',
    polycrest: 'https://gametribe.com/',
    previewLabel: 'GameTribe',
    quote: 'Play free games online, earn XP, chat & challenge friends.',
    quoteAuthor: 'GameTribe'
  },
  {
    title: 'Polycrest',
    description: 'Website for Africa’s premier gaming and animation institution—programs in game development, animation, and software development. Frontend and instruction.',
    images: ['/images/polycrest.png'],
    videoUrl: null,
    fullDescription: 'Polycrest is Africa’s leading institution for game development, animation, and software development education. The site showcases their programs, courses, and community—shaping the next generation of creative professionals. I contributed as Frontend Developer and Software Development Instructor: building and maintaining the site with modern frontend technologies and mentoring aspiring developers in hands-on, industry-ready skills. Tech: modern frontend, responsive design, education platform.',
    client: 'Polycrest Africa',
    type: 'Web Development · Education',
    year: '2024 – Present',
    previewUrl: 'https://polycrest.ac/',
    polycrest: 'https://polycrest.ac/',
    previewLabel: 'Polycrest',
    quote: 'Learn, create, and innovate with Africa’s premier gaming and animation institution.',
    quoteAuthor: 'Polycrest'
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
const showViewMoreDialog = ref(false)
const selectedProject = ref(null)
const currentImageIndex = ref(0)

const displayedProjects = computed(() => projects.value.slice(0, 6))

const openProject = (project) => {
  selectedProject.value = project
  currentImageIndex.value = 0
  showModal.value = true
}

const openProjectFromViewMore = (project) => {
  showViewMoreDialog.value = false
  nextTick(() => {
    selectedProject.value = project
    currentImageIndex.value = 0
    showModal.value = true
  })
}

const closeModal = () => {
  showModal.value = false
  selectedProject.value = null
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
  if (e.key !== 'Escape') return
  if (showViewMoreDialog.value) {
    showViewMoreDialog.value = false
  } else {
    closeModal()
  }
}

onMounted(() => {
  document.addEventListener('keydown', onEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onEscape)
})
</script>