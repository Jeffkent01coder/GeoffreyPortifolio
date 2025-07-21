<template>
  <div class="relative min-h-screen overflow-hidden bg-gray-900">
    <!-- Parallax background -->
    <div class="absolute inset-0 z-0 parallax">
      <img
        src="/images/bg_main.jpg"
        alt="Portfolio background image"
        class="object-cover w-full h-full"
      />
    </div>

    <!-- Gradient overlay -->
    <div
      class="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900"
    ></div>

    <!-- Content -->
    <div
      class="relative z-30 flex items-center min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div class="text-white w-full lg:w-1/2 text-left">
        <h1
          class="text-sm font-medium mb-2 sm:text-base md:text-lg text-gray-300"
        >
          Welcome to my website
        </h1>
        <h2 class="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-2">
          Hi, I'm <span class="text-orange-500">Geoffrey Erastus</span>
        </h2>
        <div class="text-2xl text-yellow-400 sm:text-3xl md:text-4xl h-12 mb-4">
          <span ref="typewriter"></span>
        </div>
        <p class="text-base text-gray-300 max-w-2xl mb-8">
          I am a versatile Software Engineer, Full-Stack Developer, Mobile App
          Developer, Graphic Designer, and UI/UX Designer. Driven by a passion
          for creating meaningful digital experiences, I blend technical
          proficiency with creativity to deliver impactful solutions across
          multiple platforms. Whether it's developing scalable web applications,
          designing user-friendly mobile apps, or crafting visually compelling
          graphics, I approach every project with a holistic perspective. Let's
          work together to turn your ideas into reality! ✨
        </p>
        <button
          class="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition duration-300"
          @click="scrollToSection('experience')"
        >
          My Resume
        </button>
      </div>
      <div class="hidden lg:block w-1/2">
        <img
          src="/images/ge.png"
          alt="Geoffrey Erastus - Portfolio"
          class="w-full h-auto object-contain"
        />
      </div>
    </div>
  </div>
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
      const marginTop = 32; // 32px margin

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
          "a Fullstack Software Engineer",
          "Mobile Apps Developer",
          "a UI/UX Designer",
          "a Creative Graphics Designer",
          "a UI/UX Designer",
        ],
        autoStart: true,
        loop: true,
      });
    });

    return {
      typewriter,
      scrollToSection,
    };
  },
};
</script>

<style>
.parallax {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
