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
    period: "May 2024 - Now",
    title: "Senior Mobile Developer",
    company: "Stanbest Group (EA) Limited",
    description: "Integrating POS (Point of Sale) systems with eTIMS(Electronic Tax Invoice Management Systems) Creating RESTFUL APIs"
  },
  {
    period: "October 2023 - Now",
    title: "Software Engineer Volunteer", 
    company: "Inide Games Group Kenya",
    description: "Indie Games Groups is a community program designed to bring together indie games developers and communities for networking, knowledge sharing and year-round access to education and best practice-sharing from Google. By joining an Indie Games Group, developers and artists will be able to grow their mobile game development knowledge in a supportive learning community and tap into resources within each community to build better quality mobile games and grow on Google Play."
  },
  {
    period: "May 2024 - Novemeber 2024",
    title: "Android Developer",
    company: "Suluhu Fintech",
    description: "We provide MSMEs with an innovative and cutting-edge Lending-As-A-Service infrastructure to enable them to seamlessly offer targeted embedded finance options."
  },
  {
    period: "May 2023 - Agust 2023",
    title: "Project Assistant Intern", 
    company: "Kenya Trade Network Agency(KenTrade)",
    description: " Kenya TradeNet System is an online platform that serves as a single entry point for parties involved in international trade and transport logistics to lodge documents electronically, for processing, approvals and to make payments electronically for fees, levies, duties and taxes due to the Government, on goods imported or exported in the country."
  },
  {
    period: "Jan 2022 - Novemeber 2024",
    title: "Android Developer, UX/UI designer",
    company: "Upwork",
    description: "I have the opportunity to work on diverse projects, collaborate with clients from around the world, and showcase your expertise in Android development. "
  },
])

const education = ref([
  {
    period: "November 2020 - October 2024",
    degree: "Bachelor of Science in Computer Science",
    institution: "Meru University of Science and Technology (MUST)",
    description: "Comprehensive study of computer science fundamentals, including data structures, algorithms, software engineering principles, and database management systems."
  },
  {
    period: "January 2020 - July 2020",
    degree: "Mobile Software Development and IOT",
    institution: "Modcom Institute of Technology",
    description: "We are a well established training institute offering Technology Trainings. Our goal is to provide access to high quality education that promotes student learning, to enable individuals develop skills to their fullest potential and support the economic development of Africa."
  },
  {
    period: "2024 -  Now",
    degree: "Certifications",
    institution: "Udemy",
    description: "We help organizations of all types and sizes prepare for the path ahead — wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits build skills to succeed in today’s rapidly changing digital landscape."
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