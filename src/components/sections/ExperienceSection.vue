<template>
  <!-- Full width wrapper for the background color -->
  <div class="bg-gray-900 w-full">
    <div class="text-white p-4 sm:p-8 max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold mb-6 text-center relative pb-4">
        My Resume
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-orange-500"></div>
      </h1>
      <a href="https://docs.google.com/document/d/1cHMcBAqgVTutQhBWoZpC6mLeczx5lUWfk_bXAXTvJKs/edit?tab=t.0" target="_blank">
        <button class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mb-8 block mx-auto">
          Download CV
        </button>
      </a>

      <div class="flex flex-col md:flex-row gap-8">
        <div class="w-full md:w-1/2">
          <h2 class="text-2xl font-semibold mb-4 text-left">Experiences</h2>
          <div v-for="(job, index) in displayedExperiences" :key="index" class="mb-6 relative pl-10">
            <div class="absolute left-0 top-0 h-full w-px bg-orange-500"></div>
            <div class="absolute left-0 top-1 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center -ml-4 text-sm font-bold">
              {{ index + 1 }}
            </div>
            <div class="relative">
              <div class="absolute -left-10 top-0 h-8 bg-gradient-to-r from-orange-500/20 to-transparent" :style="{ width: 'calc(100% + 2.5rem)' }"></div>
              <div class="font-semibold text-orange-500 relative z-10" style="text-align: left;">{{ job.period }}</div>
            </div>
            <h3 class="text-xl font-semibold mb-1 text-left mt-2">{{ job.title }}</h3>
            <p class="text-gray-400 mb-1 text-left">{{ job.company }}</p>
            <p class="text-sm text-left">{{ job.description }}</p>
          </div>
        </div>
        
        <div class="w-full md:w-1/2">
          <h2 class="text-2xl font-semibold mb-4 text-left">Education</h2>
          <div v-for="(edu, index) in displayedEducation" :key="index" class="mb-6 relative pl-10">
            <div class="absolute left-0 top-0 h-full w-px bg-orange-500"></div>
            <div class="absolute left-0 top-1 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center -ml-4 text-sm font-bold">
              {{ index + 1 }}
            </div>
            <div class="relative">
              <div class="absolute -left-10 top-0 h-8 bg-gradient-to-r from-orange-500/20 to-transparent" :style="{ width: 'calc(100% + 2.5rem)' }"></div>
              <div class="font-semibold text-orange-500 relative z-10" style="text-align: left;">{{ edu.period }}</div>
            </div>
            <h3 class="text-xl font-semibold mb-1 text-left mt-2">{{ edu.degree }}</h3>
            <p class="text-gray-400 mb-1 text-left">{{ edu.institution }}</p>
            <p class="text-sm text-left">{{ edu.description }}</p>
          </div>
        </div>
      </div>
  
      <button 
        @click="toggleLoadMore" 
        class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-8 block mx-auto"
      >
        {{ isShowingAll ? 'Show less' : 'Load more' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const experiences = ref([
  {
    period: "May 2023 - Present",
    title: "Senior Mobile Developer",
    company: "Stanbest Group (EA) Limited",
    description: "Leading mobile application development using Kotlin and Flutter. Integrating POS (Point of Sale) systems with eTIMS (Electronic Tax Invoice Management Systems). Creating RESTful APIs and implementing secure payment gateways."
  },
  {
    period: "January 2024 - Present",
    title: "Frontend Developer and Software Development Instructor", 
    company: "Polycrest Africa",
    description: "Leading software development instruction and mentoring aspiring developers. Contributing to curriculum development and hands-on training in modern web technologies. Fostering innovation and excellence in game design, animation, and software development."
  },
  {
    period: "January 2024 - Present",
    title: "Frontend Developer", 
    company: "GameTribe",
    description: "Developing and maintaining web applications using modern frontend technologies. Contributing to the gaming platform's user interface and experience. Collaborating with the team to implement new features and improve existing functionality."
  },
  {
    period: "October 2023 - Present",
    title: "Software Engineer Volunteer", 
    company: "Indie Games Group Kenya",
    description: "Contributing to the gaming community through technical mentorship and development support. Participating in knowledge sharing sessions and helping developers improve their mobile game development skills."
  },
  {
    period: "May 2023 - November 2023",
    title: "Android Developer",
    company: "Suluhu Fintech",
    description: "Developed and maintained Android applications using Kotlin. Implemented secure financial features and integrated payment systems. Created innovative solutions for MSMEs to offer embedded finance options."
  },
  {
    period: "May 2023 - August 2023",
    title: "Project Assistant Intern", 
    company: "Kenya Trade Network Agency (KenTrade)",
    description: "Contributed to the development and maintenance of the Kenya TradeNet System. Assisted in implementing electronic document processing and payment systems. Collaborated with the team to improve system efficiency and user experience."
  },
  {
    period: "January 2022 - Present",
    title: "Android Developer & UI/UX Designer",
    company: "Upwork",
    description: "Freelance developer working on diverse mobile application projects. Specializing in Android development using Kotlin and Flutter. Creating intuitive user interfaces and implementing modern design patterns."
  },
])

const education = ref([
  {
    period: "November 2020 - October 2024",
    degree: "Bachelor of Science in Computer Science",
    institution: "Meru University of Science and Technology (MUST)",
    description: "Comprehensive study of computer science fundamentals, including data structures, algorithms, software engineering principles, and database management systems. Specializing in mobile and web application development."
  },
  {
    period: "January 2020 - July 2020",
    degree: "Mobile Software Development and IoT",
    institution: "Modcom Institute of Technology",
    description: "Intensive training in mobile application development and Internet of Things technologies. Gained practical experience in building modern mobile applications and understanding IoT architectures."
  },
  {
    period: "2024 - Present",
    degree: "Professional Certifications",
    institution: "Udemy",
    description: "Continuous professional development through various technical courses. Focus areas include Kotlin, Flutter, Next.js, and modern web development technologies. Staying updated with industry best practices and emerging technologies."
  },
])

const itemsToShow = ref(3)
const isShowingAll = ref(false)

const displayedExperiences = computed(() => 
  isShowingAll.value ? experiences.value : experiences.value.slice(0, itemsToShow.value)
)
const displayedEducation = computed(() => 
  isShowingAll.value ? education.value : education.value.slice(0, itemsToShow.value)
)

const toggleLoadMore = () => {
  isShowingAll.value = !isShowingAll.value
  if (!isShowingAll.value) {
    itemsToShow.value = 3 // Reset to initial value when loading less
  }
}
</script>