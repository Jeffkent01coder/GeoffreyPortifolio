import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

function generateMetadata(routeName) {
  const metadata = {
    home:{
      description: "Hamisi Briva - Code. Design. Revolutionize",
      image: '/images/Banner_Image.png',
      bio: "Hi, Im Briva Hamisi, I am a Software Engineer, Fullstack Developer, Mobile Apps Developer, Graphic Designer, Video Editor, and Photographer. My passion lies in creating impactful digital experiences across various platforms, combining technical expertise and creativity. Whether it’s building scalable web solutions, designing intuitive mobile apps, or crafting stunning visuals, I bring a comprehensive approach to every project. Lets collaborate and bring your ideas to life!",
      website: "https://brivahamisi.tech/"
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
