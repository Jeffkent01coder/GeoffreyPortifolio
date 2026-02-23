<template>
  <div class="min-h-screen bg-gray-900 text-white font-sans">
    <Navbar />
    <main class="pt-16" role="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>
