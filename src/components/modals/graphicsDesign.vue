<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg shadow-xl max-w-4xl w-full relative overflow-hidden">
        <!-- Close button -->
        <button @click="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
  
        <div class="flex flex-col lg:flex-row">
          <!-- Left side - Image and CTA -->
          <div class="lg:w-1/2 relative">
            <img src="/path-to-your-image.jpg" alt="Hesabika campaign" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-r from-green-800 via-transparent to-pink-800 opacity-50"></div>
            <div class="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h2 class="text-sm uppercase mb-2">Can we count on you</h2>
              <h1 class="text-4xl font-bold mb-4">In raising the next generation of leaders?</h1>
              <div class="flex space-x-4">
                <button class="bg-red-600 px-4 py-2 rounded">Donate Now</button>
                <button class="bg-white bg-opacity-20 px-4 py-2 rounded flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                  Watch our video
                </button>
              </div>
            </div>
          </div>
  
          <!-- Right side - Content -->
          <div class="lg:w-1/2 p-8">
            <h2 class="text-2xl font-bold mb-4">Hesabika Website</h2>
            <p class="text-gray-600 mb-6">
              The project entailed development of Hesabika website and donation system. HESABIKA was started as an initiative of Fellowship of Christian Unions (FOCUS) Kenya and was launched in the first HESABIKA National Convention in April 2016. HESABIKA is a catalyst for a value-driven socio-economic transformation of Kenya. It is a call, first to Christian professionals, students and the church at large to be salt and light in the world.
            </p>
            <div class="space-y-2 mb-6">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                </svg>
                <span class="font-semibold">Client:</span> Hesabika
              </div>
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0h8v12H6V4z" clip-rule="evenodd" />
                </svg>
                <span class="font-semibold">Type:</span> Website
              </div>
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                </svg>
                <span class="font-semibold">Year:</span> 2021
              </div>
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd" />
                </svg>
                <span class="font-semibold">Preview:</span> 
                <a href="https://www.hesabika.com" class="text-blue-500 hover:underline ml-1">www.hesabika.com</a>
              </div>
            </div>
            <blockquote class="border-l-4 border-green-500 pl-4 italic text-gray-600">
              "Challenge to take responsibility not just to point fingers or be spectators, Stand up and Be Counted for the Transformation of Kenya"
              <footer class="text-gray-500 mt-2">— Hesabika</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      closeModal() {
        // Implement close functionality here
        this.$emit('close');
      }
    }
  }
  </script>