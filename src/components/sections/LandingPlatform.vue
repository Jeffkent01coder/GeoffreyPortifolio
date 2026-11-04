<template>
  <section
    class="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-gray-950"
    aria-label="Hero"
  >
    <div class="absolute inset-0 z-0">
      <img
        src="/images/bg_main.jpg"
        alt=""
        class="object-cover w-full h-full"
        aria-hidden="true"
      />
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(249,115,22,0.16),_transparent_45%),radial-gradient(ellipse_at_bottom_right,_rgba(3,7,18,0.85),_transparent_55%)]"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/40 lg:to-transparent" />
      <div class="absolute inset-0 bg-gradient-to-b from-gray-950/40 via-transparent to-gray-950" />
    </div>

    <!-- Portrait: desktop only, edge-anchored -->
    <div
      class="pointer-events-none absolute inset-y-0 right-0 z-[5] hidden lg:block w-[46%] xl:w-[44%]"
      aria-hidden="true"
    >
      <div class="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-gray-950/80" />
      <img
        src="/images/ge.png"
        alt=""
        class="absolute bottom-0 right-0 h-[88%] xl:h-[92%] w-auto max-w-none object-contain object-bottom drop-shadow-2xl select-none"
      />
    </div>

    <!-- Top-aligned copy: avoids large empty gap above text on mobile + laptop -->
    <div
      class="relative z-10 flex items-start min-h-[calc(100svh-4rem)] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 sm:pt-10 lg:pt-14 pb-10"
    >
      <div class="text-white w-full max-w-xl lg:max-w-none lg:w-[54%] xl:w-[52%] text-left animate-fade-in">
        <p class="text-sm sm:text-base font-medium text-primary-400 tracking-wide mb-2 sm:mb-3">
          Welcome
        </p>
        <h1 class="font-display text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-white mb-2">
          Hi, I'm <span class="text-primary-500">Geoffrey Erastus</span>
        </h1>
        <div class="text-lg sm:text-xl md:text-2xl xl:text-3xl text-amber-300/95 min-h-[2rem] sm:min-h-[2.5rem] mb-3 sm:mb-4 font-medium">
          <span ref="typewriter"></span>
        </div>
        <p class="text-sm sm:text-base text-gray-300/95 max-w-lg mb-6 sm:mb-7 leading-relaxed">
          Software Engineer with 5+ years building mobile and web products—specializing in
          Flutter, Kotlin, and API integrations. Proven work on Android POS systems, fintech,
          and scalable apps that raise compliance, accessibility, and UX. Focused on
          user-centered solutions and AI automation.
        </p>
        <div class="flex flex-wrap items-center gap-3">
          <button
            type="button"
            class="px-5 sm:px-6 py-2.5 sm:py-3 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 shadow-lg shadow-primary-500/20"
            @click="scrollToSection('experience')"
          >
            View experience
          </button>
          <button
            type="button"
            class="px-5 sm:px-6 py-2.5 sm:py-3 border border-gray-600/80 bg-gray-900/40 text-white font-semibold rounded-xl hover:border-primary-500/50 hover:bg-gray-800/60 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            @click="scrollToSection('contact')"
          >
            Let's talk
          </button>
          <a
            href="https://www.linkedin.com/in/geoffrey-erastus-3a185a214/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors"
          >
            LinkedIn
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href="https://github.com/Jeffkent01coder"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors"
          >
            GitHub
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import Typewriter from "typewriter-effect/dist/core";

export default {
  name: "LandingPage",
  setup() {
    const typewriter = ref(null);

    const scrollToSection = (sectionRef) => {
      const sectionElement = document.getElementById(sectionRef);
      const marginTop = 100;

      if (sectionElement) {
        const sectionPosition =
          sectionElement.getBoundingClientRect().top +
          window.pageYOffset -
          marginTop;
        window.scrollTo({
          top: sectionPosition,
          behavior: "smooth",
        });
      }
    };

    onMounted(() => {
      new Typewriter(typewriter.value, {
        strings: [
          "Mobile & Cross-Platform Engineer",
          "Flutter · Kotlin · KMP",
          "Fintech & Payments Builder",
          "Prompt Engineer",
          "AI Automation Enthusiast",
        ],
        autoStart: true,
        loop: true,
        delay: 45,
        deleteSpeed: 25,
      });
    });

    return {
      typewriter,
      scrollToSection,
    };
  },
};
</script>
