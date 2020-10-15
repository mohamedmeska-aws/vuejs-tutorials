import Vue from "vue";
import VueRouter from "vue-router";

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Blog from '../views/Blog.vue'
import BlogPostPage from '../views/BlogPostPage.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  { path: '/blog/:post_id/:post_slug',
    name: 'BlogPostPage',
    component: BlogPostPage
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
