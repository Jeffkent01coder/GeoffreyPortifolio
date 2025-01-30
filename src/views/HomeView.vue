<template>
  <div id="home">
    <LandingPlatform/>
  </div>
  <div id="about">
    <AboutMeSection/>
  </div>
  <div id="skills">
    <whatIdo/>
    <ExperienceStats/>
  </div>
    <latestWork id="latestWork"/>

  <ExperienceSection id="experience"/>
  <Testimonial/>
  <div id="contact">
    <ContactUs/>
  </div>
  <Footer/>
</template>

<script>
// Importing components
import ExperienceSection from '../components/sections/ExperienceSection.vue';
import whatIdo from '../components/sections/whatIdo.vue';
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
    whatIdo,
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
