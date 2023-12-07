<template>
    <div>
        <input type="text" v-model="auth.username" placeholder="Username">
        <input type="email" v-model="auth.email" placeholder="Email">
        <input type="password" v-model="auth.password" placeholder="Password">
        <input type="password" v-model="password_confirm" placeholder="Password">
        <button @click="register">Register</button>
    </div>
</template>

<script>
export default {
    name: 'Register',
    data() {
        return {
            result: {},
            auth: {
                username: '',
                email: '',
                password: '',
                password_confirm: ''
            }
        }
    },
    methods: {
        register() {
            this.axios.post('localhost:80/api/register', auth)
        }
    }
}
</script>