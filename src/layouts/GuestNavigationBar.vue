<template>
    <nav id="guest-navigation" class="navbar fixed-top bg-body-tertiary"> 
        <div class="container-fluid">
            <router-link class="navbar-brand mx-auto" to="/">Trafic records</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div v-if="!is_logged_in" class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link class="nav-link" to="/auth/register">Register</router-link>
                    <router-link class="nav-link" to="/auth/login">Login</router-link>
                </div>
            </div>
            <div v-else class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link" @click="logout">Logout</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                is_logged_in: false,
            }
        },
        mounted () {
            if(!localStorage.getItem('user')) {
                this.axios.get('/me', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                    }
                })
                    .then((res) => {
                        console.log(res.data.data)
                        localStorage.setItem('user', res.data.data)
                        this.is_logged_in = true
                    }).catch((e) => {
                        this.is_logged_in = false
                    })
            } else {
                this.is_logged_in = true
            }
        },
        methods: {
            async logout () {
                await this.axios.get('/logout')
                .then((res) => {
                    this.is_logged_in = false
                    localStorage.clear()
                })
            }
        }
    }
</script>