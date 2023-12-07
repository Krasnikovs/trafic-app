import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/home.vue'
import IndexPage from './pages/index.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'

axios.defaults.baseURL = 'http://localhost/api'

axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    return config;
})

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/home', component: HomePage },
        { path: '/index', component: IndexPage },
        { path: '/auth/register', component: Register },
        { path: '/auth/login', component: Login }
    ]
})


const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)
app.mount('#app')