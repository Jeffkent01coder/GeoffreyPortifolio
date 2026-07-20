<template>
  <section class="bg-gray-900 w-full" aria-labelledby="about-heading">
    <div class="text-white p-8 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div class="col-span-1 lg:col-span-2">
          <img
            src="/images/ge.png"
            alt="Geoffrey Erastus - Fullstack Software Engineer"
            class="w-full rounded-xl shadow-lg mb-6 lg:sticky lg:top-24"
          />
        </div>
        <div class="col-span-1 lg:col-span-3 text-left">
          <h2 id="about-heading" class="section-heading text-left">About me</h2>
          <p class="text-xl font-semibold text-gray-300 mb-4">
            Fullstack Software Engineer · Full Stack Developer · Creative Designer
          </p>
          <p class="text-sm text-gray-400 mb-4">
            A dynamic professional with 6+ years of experience spanning IT,
            media, and the entertainment industry. Skilled in delivering
            top-tier solutions in mobile and web development, video editing, and
            graphic design. Proficient in a diverse set of technologies and
            tools, including Kotlin, JavaScript, Java, Python, HTML, CSS,
            Bootstrap, Flutter, Figma, LangChain, n8n, and prompt engineering.
          </p>
          <p class="text-sm text-gray-400 mb-6">
            Exhibits strong leadership skills, thrives with minimal supervision,
            and excels in communication. Proven ability to make critical
            decisions and perform effectively under pressure.
          </p>

          <h3 class="text-lg font-semibold text-white mb-4">Tech stack</h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div
              v-for="(skill, index) in displayedSkills"
              :key="skill.name"
              class="skill-card group flex flex-col items-center justify-center rounded-xl border border-gray-700/60 bg-gray-800/50 p-4 text-center cursor-default"
              :class="tiltClasses[index % tiltClasses.length]"
            >
              <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900/60 p-2 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
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
            @click="toggleSkills"
            class="mt-6 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
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
  { name: "React", category: "Frontend", icon: icon("react", "61DAFB") },
  { name: "Next.js", category: "Frontend", icon: icon("nextdotjs", "FFFFFF") },
  { name: "Tailwind CSS", category: "Frontend", icon: icon("tailwindcss", "06B6D4") },
  { name: "Bootstrap", category: "Frontend", icon: icon("bootstrap", "7952B3") },
  { name: "Node.js", category: "Backend", icon: icon("nodedotjs", "339933") },
  { name: "Python", category: "Backend", icon: icon("python", "3776AB") },
  { name: "Java", category: "Backend", icon: icon("openjdk", "FFFFFF") },
  { name: "Firebase", category: "Cloud", icon: icon("firebase", "FFCA28") },
  { name: "SQL", category: "Database", icon: icon("postgresql", "4169E1") },
  { name: "Docker", category: "DevOps", icon: icon("docker", "2496ED") },
  { name: "Vite", category: "Frontend", icon: icon("vite", "646CFF") },
  { name: "Figma", category: "Design", icon: icon("figma", "F24E1E") },
  { name: "Prompt Engineering", category: "AI/ML", icon: "/image.png", iconClass: "h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110" },
  { name: "AI Automation", category: "Automation", icon: icon("langchain", "7FC8FF") },
  { name: "n8n", category: "Automation", icon: icon("n8n", "EA4B71") },
  { name: "REST APIs", category: "Backend", initials: "API" },
  { name: "Integrations", category: "Automation", initials: "INT" },
  { name: "System Deployment", category: "DevOps", initials: "DEP" },
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
  background-color: rgb(31 41 55 / 0.85);
  box-shadow: 0 12px 28px -8px rgb(249 115 22 / 0.25);
}
</style>
