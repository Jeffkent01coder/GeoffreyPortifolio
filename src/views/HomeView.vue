<template>
  <div id="home">
    <LandingPlatform />
  </div>
  <section id="about" class="scroll-mt-24" aria-labelledby="about-heading">
    <AboutMeSection />
  </section>
  <section id="experience" class="scroll-mt-24" aria-labelledby="experience-heading">
    <ExperienceSection />
  </section>
  <section id="skills" class="scroll-mt-24" aria-labelledby="experience-stats-heading">
    <ExperienceStats />
  </section>
  <section id="latestWork" class="scroll-mt-24" aria-labelledby="latest-work-heading">
    <latestWork />
  </section>
  <section class="scroll-mt-24" aria-labelledby="testimonials-heading">
    <Testimonial />
  </section>
  <section id="contact" class="scroll-mt-24" aria-labelledby="contact-heading">
    <ContactUs />
  </section>
  <Footer />
</template>

<script>
// Importing components
import ExperienceSection from '../components/sections/ExperienceSection.vue';
import AboutMeSection from '../components/sections/AboutMeSection.vue';
import latestWork from '../components/sections/latestWork.vue'
import LandingPlatform from '../components/sections/LandingPlatform.vue';
import ContactUs from '../components/sections/ContactUs.vue'
import ExperienceStats from '@/components/sections/ExperienceStats.vue';
import Footer from '../components/Footer.vue';
import Testimonial from '@/components/sections/Testimonial.vue';

export default {
  name: 'HomeView',
  components: {
    AboutMeSection,
    ExperienceSection,
    latestWork,
    LandingPlatform,
    ContactUs,
    ExperienceStats,
    Footer,
    Testimonial
  }
}
</script>
