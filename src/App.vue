<template>
  <div class="min-h-screen bg-gray-950 text-white font-sans">
    <Navbar />
    <main class="pt-16" role="main">
      <router-view />
    </main>
    <FloatingActions />
  </div>
</template>

<script>
import Navbar from './components/navbar.vue';
import FloatingActions from './components/FloatingActions.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    FloatingActions,
  },
};
</script>
