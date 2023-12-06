import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/home.vue'
import IndexPage from './views/index.vue'

import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/home', component: HomePage },
        { path: '/index', component: IndexPage }
    ]
})

const app = createApp(App)

app.use(router)
app.mount('#app')