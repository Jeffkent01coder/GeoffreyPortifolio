<template>
  <section class="bg-gray-950 w-full py-16 sm:py-20" aria-labelledby="about-heading">
    <div class="text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
        <div class="col-span-1 lg:col-span-2">
          <div class="relative">
            <div class="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary-500/20 to-transparent blur-2xl" aria-hidden="true" />
            <img
              src="/images/about-geoffrey.jpg"
              alt="Geoffrey Erastus at a Google for Developers Kenya event"
              class="relative w-full rounded-2xl border border-gray-800 shadow-2xl mb-6 lg:sticky lg:top-24 object-cover object-top aspect-[3/4]"
            />
          </div>
        </div>
        <div class="col-span-1 lg:col-span-3 text-left">
          <p class="text-primary-500 text-sm font-medium uppercase tracking-wider mb-2">About</p>
          <h2 id="about-heading" class="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            Mobile software engineer focused on products that ship
          </h2>
          <p class="text-lg font-medium text-gray-300 mb-5">
            Android · Kotlin · Flutter · Kotlin Multiplatform · Fintech · Payments · AI
          </p>
          <p class="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed">
            I’m a Mobile Software Engineer with 5+ years building, integrating, and deploying
            production apps across Android and iOS. My strength is turning product and business
            problems into reliable, scalable, user-focused applications—across UI, APIs, testing,
            CI/CD, and Play Store / App Store releases.
          </p>
          <p class="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed">
            Experience spans fintech, payments, POS, and compliance-driven software (including
            M-Pesa, SasaPay, and KRA eTIMS), plus offline-first apps, certificate pinning, and
            AI-powered features. Shipped work includes MwananchiGo, Verido, Afre360, OutOut, and
            Kile Kitabu. I also contribute across backend and web so I can own more of the product
            stack—not only the mobile client.
          </p>
          <p class="text-sm sm:text-base text-gray-400 mb-8 leading-relaxed">
            Based in Nairobi. Interested in mobile, fintech, payments, AI, and digital
            transformation end to end—from problem framing to production and iteration.
          </p>

          <h3 class="text-lg font-semibold text-white mb-4">Tech stack</h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div
              v-for="(skill, index) in displayedSkills"
              :key="skill.name"
              class="skill-card group flex flex-col items-center justify-center rounded-xl border border-gray-700/60 bg-gray-900/70 p-4 text-center cursor-default"
              :class="tiltClasses[index % tiltClasses.length]"
            >
              <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-950/70 p-2 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                <img
                  v-if="skill.icon"
                  :src="skill.icon"
                  :alt="`${skill.name} logo`"
                  :class="skill.iconClass || 'h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110'"
                  loading="lazy"
                />
                <span
                  v-else
                  class="flex h-8 w-8 items-center justify-center rounded-md bg-primary-500/20 text-xs font-bold text-primary-400"
                  aria-hidden="true"
                >
                  {{ skill.initials }}
                </span>
              </div>
              <span class="text-sm font-medium text-white group-hover:text-primary-400 transition-colors">
                {{ skill.name }}
              </span>
              <span class="mt-1 text-[10px] font-medium uppercase tracking-wider text-gray-500">
                {{ skill.category }}
              </span>
            </div>
          </div>

          <button
            v-if="skills.length > initialCount"
            type="button"
            @click="toggleSkills"
            class="mt-6 px-4 py-2.5 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
          >
            {{ showAllSkills ? "Show less" : "Load more skills" }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const icon = (slug, color = "FFFFFF") =>
  `https://cdn.simpleicons.org/${slug}/${color.replace("#", "")}`;

const skills = ref([
  { name: "Kotlin", category: "Mobile", icon: icon("kotlin", "7F52FF") },
  { name: "Flutter", category: "Mobile", icon: icon("flutter", "02569B") },
  { name: "Jetpack Compose", category: "Mobile", initials: "JC" },
  { name: "Kotlin Multiplatform", category: "Mobile", initials: "KMP" },
  { name: "React", category: "Frontend", icon: icon("react", "61DAFB") },
  { name: "Next.js", category: "Frontend", icon: icon("nextdotjs", "FFFFFF") },
  { name: "Tailwind CSS", category: "Frontend", icon: icon("tailwindcss", "06B6D4") },
  { name: "Node.js", category: "Backend", icon: icon("nodedotjs", "339933") },
  { name: "Java", category: "Backend", icon: icon("openjdk", "FFFFFF") },
  { name: "Spring Boot", category: "Backend", icon: icon("springboot", "6DB33F") },
  { name: "Python / Flask", category: "Backend", icon: icon("python", "3776AB") },
  { name: "Firebase", category: "Cloud", icon: icon("firebase", "FFCA28") },
  { name: "PostgreSQL", category: "Database", icon: icon("postgresql", "4169E1") },
  { name: "MySQL", category: "Database", icon: icon("mysql", "4479A1") },
  { name: "Docker", category: "DevOps", icon: icon("docker", "2496ED") },
  { name: "CI/CD", category: "DevOps", initials: "CI" },
  { name: "Figma", category: "Design", icon: icon("figma", "F24E1E") },
  { name: "M-Pesa / Payments", category: "Fintech", initials: "MP" },
  { name: "Prompt Engineering", category: "AI/ML", icon: "/image.png", iconClass: "h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110" },
  { name: "AI Automation", category: "Automation", icon: icon("langchain", "7FC8FF") },
  { name: "n8n", category: "Automation", icon: icon("n8n", "EA4B71") },
  { name: "REST APIs", category: "Backend", initials: "API" },
  { name: "Certificate Pinning", category: "Security", initials: "SEC" },
  { name: "Cross-platform", category: "Mobile", icon: icon("android", "3DDC84") },
]);

const tiltClasses = ["", "sm:-rotate-1", "sm:rotate-1", "sm:-rotate-2", "sm:rotate-2"];

const initialCount = 9;
const showAllSkills = ref(false);

const displayedSkills = computed(() =>
  showAllSkills.value ? skills.value : skills.value.slice(0, initialCount)
);

const toggleSkills = () => {
  showAllSkills.value = !showAllSkills.value;
};
</script>

<style scoped>
.skill-card {
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.3s ease,
    border-color 0.3s ease,
    background-color 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-8px) scale(1.04) rotate(0deg) !important;
  border-color: rgb(249 115 22 / 0.45);
  background-color: rgb(17 24 39 / 0.95);
  box-shadow: 0 12px 28px -8px rgb(249 115 22 / 0.25);
}
</style>
