<template>
    <div>
        <input type="email" v-model="auth.email" placeholder="Email">
        <input type="password" v-model="auth.password" placeholder="Password">
        <button @click="login">Login</button>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            result: {},
            auth: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        register() {
            axios.post('localhost:80/api/login', auth)
        }
    }
}
</script>