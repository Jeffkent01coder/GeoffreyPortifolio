<template>
  <section class="bg-gray-950 w-full py-16 sm:py-20" aria-labelledby="experience-heading">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header + CTA -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
        <h2 id="experience-heading" class="section-heading mb-0">
          Experience & Resume
          <span class="section-heading-accent"></span>
        </h2>
        <a
          href="/docs/GEOFFREY%20ERASTUS%20WAMBAYA%20Resume.docx.pdf"
          download="GEOFFREY ERASTUS WAMBAYA Resume.pdf"
          class="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 shrink-0"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download CV
        </a>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
        <!-- Work experience -->
        <div class="relative">
          <div class="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-primary-500/30 to-transparent hidden lg:block" aria-hidden="true" />
          <div class="flex items-center gap-3 mb-6 lg:pl-6">
            <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-500/15 text-primary-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </span>
            <h3 class="text-xl font-semibold text-white">Experience</h3>
          </div>

          <div class="space-y-4 lg:pl-6">
            <article
              v-for="(job, index) in displayedExperiences"
              :key="`${job.title}-${job.company}`"
              class="group rounded-2xl border border-gray-700/60 bg-gray-800/40 p-5 sm:p-6 transition-all duration-300 hover:border-primary-500/30 hover:bg-gray-800/70 hover:shadow-lg hover:shadow-primary-500/5"
            >
              <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h4 class="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">{{ job.title }}</h4>
                  <p class="text-gray-400 font-medium">{{ job.company }}</p>
                </div>
                <span class="text-xs font-medium text-primary-400/90 whitespace-nowrap rounded-full bg-primary-500/15 px-3 py-1">
                  {{ formatJobPeriod(job) }}{{ formatJobDuration(job) ? ` · ${formatJobDuration(job)}` : '' }}
                </span>
              </div>

              <div class="flex flex-wrap gap-2 mb-3">
                <span v-if="job.employmentType" class="inline-flex items-center rounded-lg bg-gray-700/80 px-2.5 py-1 text-xs font-medium text-gray-300">
                  {{ job.employmentType }}
                </span>
                <span v-if="job.workMode" class="inline-flex items-center rounded-lg bg-gray-700/80 px-2.5 py-1 text-xs font-medium text-gray-300">
                  {{ job.workMode }}
                </span>
                <span v-if="job.location" class="inline-flex items-center rounded-lg bg-gray-700/80 px-2.5 py-1 text-xs font-medium text-gray-400 truncate max-w-[180px]" :title="job.location">
                  {{ job.location }}
                </span>
              </div>

              <div v-if="job.skills && job.skills.length" class="flex flex-wrap gap-1.5 mb-3">
                <span
                  v-for="skill in job.skills"
                  :key="skill"
                  class="inline-flex items-center rounded-full bg-primary-500/10 border border-primary-500/25 px-2.5 py-0.5 text-xs font-medium text-primary-300"
                >
                  {{ skill }}
                </span>
              </div>

              <p class="text-sm text-gray-300 leading-relaxed">{{ job.summary }}</p>

              <template v-if="job.achievements && job.achievements.length > 0">
                <div class="mt-4 pt-4 border-t border-gray-700/60">
                  <button
                    type="button"
                    @click="toggleExpand(index)"
                    class="inline-flex items-center gap-1.5 text-sm font-medium text-primary-400 hover:text-primary-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800 rounded-lg"
                  >
                    <span>{{ isExpanded(index) ? 'Show less' : 'Key achievements' }}</span>
                    <svg
                      class="w-4 h-4 transition-transform duration-200"
                      :class="{ 'rotate-180': isExpanded(index) }"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <ul
                    v-show="isExpanded(index)"
                    class="mt-3 space-y-2 text-sm text-gray-400 list-disc list-inside pl-1"
                  >
                    <li v-for="(point, i) in job.achievements" :key="i" class="leading-relaxed">{{ point }}</li>
                  </ul>
                </div>
              </template>
            </article>
          </div>
        </div>

        <!-- Education & Certifications -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-500/15 text-primary-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
            </span>
            <h3 class="text-xl font-semibold text-white">Education & certifications</h3>
          </div>

          <div class="space-y-4">
            <article
              v-for="(edu, index) in displayedEducation"
              :key="'edu-' + index"
              class="rounded-2xl border border-gray-700/60 bg-gray-800/40 p-5 sm:p-6 transition-all duration-300 hover:border-primary-500/30 hover:bg-gray-800/70 hover:shadow-lg hover:shadow-primary-500/5"
            >
              <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <h4 class="text-base font-semibold text-white">{{ edu.degree }}</h4>
                <span class="text-xs font-medium text-primary-400/90 whitespace-nowrap rounded-full bg-primary-500/15 px-3 py-1">
                  {{ edu.period }}{{ edu.periodDetail ? ` · ${edu.periodDetail}` : '' }}
                </span>
              </div>
              <p class="text-gray-400 font-medium text-sm">{{ edu.institution }}</p>
              <p v-if="edu.location" class="text-gray-500 text-xs mt-0.5">{{ edu.location }}</p>
              <p class="text-sm text-gray-300 mt-2 leading-relaxed">{{ edu.description }}</p>
            </article>

            <div class="pt-2">
              <h4 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Certifications</h4>
              <div class="space-y-3">
                <article
                  v-for="(cert, index) in displayedCertifications"
                  :key="'cert-' + index"
                  class="rounded-xl border border-gray-700/50 bg-gray-800/30 px-4 py-3 transition-all duration-300 hover:border-gray-600 hover:bg-gray-800/50"
                >
                  <div class="flex flex-wrap items-start justify-between gap-2">
                    <h5 class="text-sm font-semibold text-white">{{ cert.name }}</h5>
                    <span class="text-xs text-gray-500">{{ cert.issuedDate }}</span>
                  </div>
                  <p class="text-xs text-gray-400 mt-0.5">{{ cert.issuer }}</p>
                  <a
                    v-if="cert.url"
                    :href="cert.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1 text-xs font-medium text-primary-400 hover:text-primary-300 mt-2"
                  >
                    View credential
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 text-center">
        <button
          type="button"
          @click="toggleLoadMore"
          class="inline-flex items-center gap-2 rounded-xl border border-gray-600 bg-transparent px-5 py-2.5 text-sm font-medium text-gray-300 transition-all duration-200 hover:border-primary-500/50 hover:bg-gray-800/50 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
        >
          {{ isShowingAll ? 'Show less' : 'Load more' }}
          <svg
            class="w-4 h-4 transition-transform duration-200"
            :class="{ 'rotate-180': isShowingAll }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function jobStartDate(job) {
  return new Date(job.startYear, job.startMonth - 1, 1)
}

function jobEndDate(job) {
  if (job.isActive) return new Date()
  return new Date(job.endYear, job.endMonth - 1, 1)
}

function formatMonthYear(date) {
  return `${MONTH_LABELS[date.getMonth()]} ${date.getFullYear()}`
}

function formatJobPeriod(job) {
  const start = formatMonthYear(jobStartDate(job))
  const end = formatMonthYear(jobEndDate(job))
  return `${start} - ${end}`
}

function formatJobDuration(job) {
  const start = jobStartDate(job)
  const end = jobEndDate(job)
  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1
  if (months < 1) months = 1
  const years = Math.floor(months / 12)
  const rem = months % 12
  if (years && rem) return `${years} yr${years > 1 ? 's' : ''} ${rem} mos`
  if (years) return `${years} yr${years > 1 ? 's' : ''}`
  return `${rem} mos`
}

const experiences = ref([
  {
    startYear: 2025,
    startMonth: 6,
    isActive: true,
    title: "Lead Mobile Engineer",
    company: "Mwananchi Credit Limited",
    employmentType: "Contract",
    workMode: "Remote",
    location: "Nairobi County, Kenya",
    skills: ["Flutter", "REST APIs", "Certificate Pinning", "Play Store", "App Store", "Fintech"],
    summary: "Leading development of MwananchiGo—a cross-platform Flutter lending app—from Figma designs through Play Store and App Store release, with secure API integrations and compliance-focused financial workflows.",
    achievements: [
      "Developed MwananchiGo from Figma designs into a fully functional cross-platform mobile application using Flutter.",
      "Integrated RESTful APIs for loan applications, user authentication, account management, and real-time financial transactions.",
      "Implemented secure certificate pinning and mobile security best practices to protect API communication and sensitive user data.",
      "Built responsive and scalable UI components optimized for both Android and iOS platforms.",
      "Conducted end-to-end testing, debugging, performance optimization, and quality assurance across multiple devices and OS versions.",
      "Managed app deployment, release configuration, and publishing processes for both Google Play Store and Apple App Store.",
      "Collaborated with backend and product teams to ensure seamless integration of financial services and compliance requirements.",
      "Optimized application performance, stability, and user experience to support secure digital lending operations."
    ]
  },
  {
    startYear: 2025,
    startMonth: 2,
    isActive: true,
    title: "Software Engineer",
    company: "Suluhu Fintech",
    employmentType: "Full-time",
    workMode: "Remote",
    location: "Nairobi County, Kenya",
    skills: ["Flutter", "Figma", "Fintech", "Admin Panel"],
    summary: "Building a new Flutter fintech application and maintaining the WapiPay admin panel—bug fixes, code quality, and product delivery for Lending-as-a-Service infrastructure.",
    achievements: [
      "Responsible for bug fixing and code cleaning on the WapiPay admin panel (wapipay.com).",
      "Developing a new fintech application with Flutter, Figma, and supporting services (work in progress)."
    ]
  },
  {
    startYear: 2025,
    startMonth: 11,
    endYear: 2026,
    endMonth: 10,
    isActive: false,
    title: "Lead Mobile Engineer",
    company: "Verido",
    employmentType: "Full-time",
    workMode: "Remote",
    location: "London Area, United Kingdom",
    skills: ["Flutter", "OpenAI Realtime", "AI", "Zipy", "APIs"],
    summary: "Led Verido’s mobile product with AI voice agents, data insights, platform stability, and UI modernization for micro-business operations.",
    achievements: [
      "Integrated an AI-powered real-time voice agent using OpenAI Realtime APIs, enabling multilingual voice-based data capture and conversational responses (40% improvement in sales process efficiency).",
      "Implemented an AI-driven data analysis and insights engine for transactional and operational data (15% improvement in operational decision-making).",
      "Resolved critical application access and stability issues, fully restoring platform availability (100% increase in active app usage).",
      "Redesigned and modernized the UI, leading to 10% increase in user retention.",
      "Led end-to-end integration of backend services and third-party APIs.",
      "Introduced an intelligent auto-upgrade and notification system (25% reduction in version fragmentation, 10% decrease in user-reported issues).",
      "Integrated Zipy performance monitoring and crash analytics (30% reduction in crash rates, 20% improvement in MTTR)."
    ]
  },
  {
    startYear: 2025,
    startMonth: 7,
    endYear: 2026,
    endMonth: 5,
    isActive: false,
    title: "Software Engineer",
    company: "ProDG Studio",
    employmentType: "Part-time",
    workMode: "Remote",
    location: "London Area, United Kingdom",
    summary: "Combined advanced software development, strategic insights, and business support to drive digital transformation and venture success for organizations worldwide.",
    achievements: []
  },
  {
    startYear: 2024,
    startMonth: 5,
    endYear: 2026,
    endMonth: 5,
    isActive: false,
    title: "Lead Mobile Engineer",
    company: "Stanbest Group EA Limited",
    employmentType: "Full-time",
    workMode: "On-site",
    location: "Nairobi County, Kenya",
    skills: ["Kotlin", "Flutter", "POS", "KRA eTIMS", "Node.js"],
    summary: "Led iSale POS and eTIMS integration—from Kotlin POS systems and Play Store launch to Flutter v2, KRA compliance, and website performance.",
    achievements: [
      "Spearheaded the development and Play Store launch of the iSale POS app, expanding accessibility from manual sharing to nationwide and global availability resulting in a 100% increase in customer acquisition.",
      "Built and deployed the iSale Sales Management POS system using Kotlin, enabling 8% of Kenyan businesses to meet KRA compliance requirements.",
      "Resolved critical printing and report-generation challenges affecting 65% of clients across multiple POS devices, followed by a countywide firmware rollout.",
      "Improved system performance by implementing scalable pagination, successfully resolving high-volume sales loading issues for 100% of OSCU clients.",
      "Configured and integrated a secure PIN management system for PDQ devices, fully eliminating access issues and enhancing user experience for all clients.",
      "Revamped Stanbest Group's website into a unified, single-window interface for KRA and sales operations, increasing site performance by 85%.",
      "Collaborated with the design team to produce Figma prototypes for the mobile app and website, forming the foundation for modernized UI/UX improvements across platforms.",
      "Developed version two of the iSale application using Flutter for cross-platform support, introducing advanced accessibility and reporting features that improved user experience by 90%.",
      "Integrated Node.js backend APIs and implemented KRA response handling within the app, ensuring clients receive real-time compliance notifications and system updates.",
      "Resolved credit note processing issues across both legacy and updated application versions, enabling seamless in-app processing without IT assistance benefiting 100% of iSale clients."
    ]
  },
  {
    startYear: 2024,
    startMonth: 5,
    endYear: 2025,
    endMonth: 8,
    isActive: false,
    title: "Android Engineer",
    company: "Suluhu Fintech",
    employmentType: "Full-time",
    workMode: "On-site",
    location: "Nairobi County, Kenya",
    skills: ["Kotlin", "Android", "Embedded Finance"],
    summary: "Built Android solutions for MSMEs on Suluhu’s Lending-as-a-Service infrastructure—targeted embedded finance options with secure, production-ready mobile experiences.",
    achievements: []
  },
  {
    startYear: 2024,
    startMonth: 10,
    endYear: 2024,
    endMonth: 11,
    isActive: false,
    title: "Software Engineer",
    company: "KitokoPay",
    employmentType: "Contract",
    workMode: "Remote",
    location: "Democratic Republic of Congo",
    skills: ["Flutter", "Figma", "Java APIs", "Payments"],
    summary: "Led Flutter frontend for KitokoPay—translating Figma into production UI and integrating Java backend APIs for secure digital payments across platforms.",
    achievements: [
      "Led Flutter frontend development for KitokoPay, translating Figma designs into production-ready UI.",
      "Integrated Java-based backend APIs to deliver secure and seamless digital payment experiences.",
      "Improved app responsiveness and usability across multiple platforms."
    ]
  },
  {
    startYear: 2023,
    startMonth: 5,
    endYear: 2023,
    endMonth: 8,
    isActive: false,
    title: "Project Assistant",
    company: "Kenya Trade Network Agency (KenTrade)",
    employmentType: "Full-time",
    workMode: "On-site",
    location: "Nairobi County, Kenya",
    summary: "Supported Kenya TradeNet projects that improve trade in Kenya and across borders—electronic document processing and payment workflows.",
    achievements: []
  },
])

const education = ref([
  {
    period: "2020 - 2024",
    periodDetail: "4 years",
    degree: "Computer Science, Second class honours upper division",
    institution: "Meru University of Science and Technology (MUST)",
    location: "Meru, Meru County, Kenya",
    description: "Software development, information security, database systems, computer networks, and software engineering. Activities: Innovation club chairman, GDG co-lead."
  },
  {
    period: "2021 - 2022",
    periodDetail: "1 year",
    degree: "Android Application Development",
    institution: "Pluralsight",
    description: "Android foundations, interactivity, UI, implementing navigation, testing, working with data, notifications, Firebase on Android, Android security, Git. Activities: Google Africa Developer Student."
  },
  {
    period: "2020",
    degree: "Diploma of Education, Computer Software Engineering",
    institution: "Modcom Institute of Technology",
    description: "Web development, backend development with Flask, Android development, Firebase integration. Activities: SDG's software, Kotlin basics, Python basics."
  },
  {
    period: "2020",
    degree: "Certificate, Internet of Things (IoT)",
    institution: "Modcom Institute of Technology",
    description: "Integrating IoT devices with technology, Smart Home."
  },
  {
    period: "2019",
    degree: "Certificate, Computer Software Engineering",
    institution: "Sololearn",
    description: "HTML Basics, CSS Styling, JavaScript, Responsive Design. Activities: Coding bootcamps."
  },
])

const certifications = ref([
  { name: "Flutter UI Bootcamp | Build Beautiful Apps using Flutter", issuer: "Udemy", issuedDate: "Dec 2024", url: "https://www.udemy.com/certificate/UC-0af9faee-83cc-4a7d-af93-a2b49f773739/" },
  { name: "UI/UX Design Masterclass with Adobe XD: From Beginner to Pro", issuer: "Udemy", issuedDate: "Nov 2024", url: "https://www.udemy.com/certificate/UC-37b98095-7b3c-4bfe-8144-391d97d1ad06/" },
  { name: "Master Git and Github - Beginner to Expert", issuer: "Udemy", issuedDate: "Nov 2024", url: null },
  { name: "UIUX with Figma and Adobe XD", issuer: "Udemy", issuedDate: "Nov 2024", url: "https://www.udemy.com/certificate/UC-0be0c2b5-4aa2-4091-974e-14373f0ee149/" },
  { name: "Master the Art of the Persuasive \"PITCH DECK\" Presentations", issuer: "Udemy", issuedDate: "Sep 2024", url: null },
  { name: "Google Certifications", issuer: "Google Developer Student Clubs", issuedDate: "Jul 2023", url: "https://drive.google.com/file/d/1xzuA6KB95e4J_WnkU5A0DperkeCk22WS/view" },
  { name: "Google Solution Challenge", issuer: "Google Developer Student Clubs", issuedDate: "Jun 2022", url: "https://drive.google.com/file/d/1e4_nmjPh7OIxQzwJcc3e_HqgMjpWu1m/view" },
  { name: "Developing Mobile Apps", issuer: "Modcom Institute", issuedDate: "Jul 2020", url: "https://drive.google.com/file/d/1OEIgG13IUgoKQg8W997XzL8ldETQ1xj1/view" },
])

const itemsToShow = ref(3)
const isShowingAll = ref(false)
const expandedIndices = ref([])

const isExpanded = (index) => expandedIndices.value.includes(index)

const toggleExpand = (index) => {
  const current = expandedIndices.value
  if (current.includes(index)) {
    expandedIndices.value = current.filter((i) => i !== index)
  } else {
    expandedIndices.value = [...current, index]
  }
}

const displayedExperiences = computed(() =>
  isShowingAll.value ? experiences.value : experiences.value.slice(0, itemsToShow.value)
)
const displayedEducation = computed(() =>
  isShowingAll.value ? education.value : education.value.slice(0, itemsToShow.value)
)
const displayedCertifications = computed(() =>
  isShowingAll.value ? certifications.value : certifications.value.slice(0, itemsToShow.value)
)

const toggleLoadMore = () => {
  isShowingAll.value = !isShowingAll.value
  if (!isShowingAll.value) {
    itemsToShow.value = 3
  }
}
</script>
