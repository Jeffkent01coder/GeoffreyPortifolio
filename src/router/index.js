import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

function generateMetadata(routeName) {
  const metadata = {
    home:{
      description: "Geoffrey Erastus - Code. Design. Innovate",
      image: '/images/Banner_Image.png',
      bio: "Hi, I'm Geoffrey Erastus, a Software Engineer specializing in Full Stack Development, Mobile App Development, and UI/UX Design. With expertise in Kotlin, Flutter, Next.js, and various modern technologies, I create impactful digital solutions. My experience spans across software development, creative design, and technical leadership. Whether it's developing scalable applications, designing intuitive interfaces, or leading technical projects, I bring innovation and excellence to every endeavor. Let's collaborate and transform your ideas into reality!",
      website: "https://geoffrey-portifolio.vercel.app/"
    },
    // Add more routes as needed
  };

  return metadata[routeName] || {
    description: `Welcome to the ${routeName} page`,
    image: '/images/default.jpg'
  };
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: generateMetadata('home')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
