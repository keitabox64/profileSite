import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import gsap from 'gsap'
//import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/webengineer',
      name: 'WebEngineer',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WebEngineerView.vue')
    },
    {
      path: '/organizer',
      name: 'Organizer',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/OrganizerView.vue')
    },
    {
      path: '/producer-director',
      name: 'ProducerAndDirector',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DirectorView.vue')
    },
    {
      path: '/WebDesigner/:id',
      name: 'achievement',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AchievementView.vue'),
      props: true
    },
    {
      path: '/privacy',
      name: 'privacy',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PrivacyView.vue')
    }
  ],
  scrollBehavior() {
    return { top:0 };
  },
})

router.beforeEach((to, from, next) => {
  
  const tl = gsap.timeline();
  tl.to(".appWrapper", {
    duration: 0.5,
    opacity: 0,
    onComplete: () => {
      next();
    }
  }).to(".appWrapper", {
    duration: 0.5,
    opacity: 1
  }, 0.5);

});

export default router
