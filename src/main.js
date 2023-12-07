import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/home.vue'
import IndexPage from './pages/index.vue'
import Register from './components/Register.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/home', component: HomePage },
        { path: '/index', component: IndexPage },
        { path: '/auth/register', component: Register }
    ]
})

const app = createApp(App)

app.use(router, axios, VueAxios)
app.mount('#app')