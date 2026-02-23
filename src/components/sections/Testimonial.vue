<template>
  <section class="bg-gray-900 w-full py-16" aria-labelledby="testimonials-heading">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-start md:space-x-16">
        <div class="w-full md:w-1/3 mb-12 md:mb-0">
          <h2 id="testimonials-heading" class="text-3xl font-bold text-white mb-6 text-left">Professional Recommendations</h2>
          <p class="text-gray-400 mb-8 text-left">Throughout my career, I've had the opportunity to work alongside outstanding professionals from diverse industries. Their feedback highlights my dedication to quality, innovation, and client success.</p>
          <div class="text-left">
            <button class="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">
              View More
            </button>
          </div>
        </div>
        
        <div class="w-full md:w-2/3">
          <div class="space-y-8 relative">
            <div v-for="(testimonial, index) in testimonials" :key="index" 
                 :class="[
                   'bg-gray-800 rounded-xl shadow-md p-8 flex items-start space-x-6 relative overflow-hidden',
                   index === 1 || index == 3 ? 'md:-ml-12 z-10' : '',
                   'w-11/12'
                 ]">
              <div :class="[
                'absolute top-0 left-0 w-2 h-full rounded-r',
                index === 1 || index == 3 ? 'bg-gradient-to-b from-primary-500 to-primary-600' : 'bg-gray-700'
              ]"></div>
                <svg class="absolute top-6 right-6 w-12 h-12 text-primary-500 opacity-20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <img :src="testimonial.avatar" :alt="testimonial.name" class="w-14 h-14 rounded-full object-cover z-10"/>  <!-- Slightly increased image size -->
                <div class="flex-grow pr-10">  <!-- Increased right padding -->
                  <h3 class="font-semibold text-white text-left text-lg mb-1">{{ testimonial.name }}</h3>  <!-- Increased font size and margin bottom -->
                  <p class="text-gray-400 text-sm text-left mb-3">{{ testimonial.title }}</p>  <!-- Increased margin bottom -->
                  <p class="text-gray-400 text-base text-left leading-relaxed">{{ testimonial.comment }}</p>  <!-- Increased font size and line height -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>
  
  <script setup>
  import { ref } from 'vue'
  
  const testimonials = ref([
    {
      name: 'Munga Fredrick',
      title: 'Software and game development instructor',
      avatar: '/images/fred.jpeg',  // Adjusted for larger image size
      comment: "Erastus is a software developer with a difference. With a keen eye for detail and purpose, he ensures that every application he builds is both efficient and user-centric. He prioritizes speed, accuracy, and an intuitive UI, delivering seamless experiences across both mobile and web applications. By understanding customer needs, he crafts software solutions that are not only functional but also outstanding in performance and design."
    },
    {
      name: 'Victor Ngure',
      title: 'Software engineer at Huwawei',
      avatar: '/images/vic.jpeg',
      comment: "Jeff is a mobile app developer with a sharp focus on UI design and seamless integrations in Kotlin and Flutter. His attention to detail ensures that every app he builds is fast, accurate, and highly intuitive, creating a smooth user experience. He specializes in developing and integrating mobile applications that align with customer needs, ensuring both functionality and aesthetic excellence. Whether working on Android (Kotlin) or cross-platform (Flutter), he delivers high-performance solutions with a refined user interface."
    },
    {
      name: 'Wachira Maina',
      title: 'Sales & Marketing Consultant',
      avatar: '/images/wachira_maina.jpg',
      comment: "I highly recommend Geoffrey Erastus for his outstanding skills as a mobile app developer specializing in Kotlin, Figma and Flutter. Geoffrey consistently demonstrates a keen eye for UI design, seamless integrations, and user experience optimization. His ability to transform ideas into intuitive, high-performance applications sets him apart. He is highly professional, delivers on time, and adapts effortlessly to project requirements. His expertise in building and integrating mobile applications has significantly enhanced our digital experience. Geoffrey’s dedication to quality and innovation makes him an invaluable asset to any development team."
    },
    {
      name: 'Paul Njoroge',
      title: 'Senior Android Engineer at Letshego',
      avatar: '/images/paul.jpeg',
      comment: "Jeff is a Kotlin mobile app developer with a strong focus on UI design and seamless integrations. His keen attention to detail ensures that every Android app he develops is fast, efficient, and highly intuitive, providing users with a smooth and engaging experience. Jeff specializes in building and integrating feature-rich mobile applications tailored to customer needs, balancing functionality and aesthetic appeal. His expertise in Kotlin development allows him to create high-performance Android solutions with a refined and user-friendly interface."
    },
  ])
  </script>