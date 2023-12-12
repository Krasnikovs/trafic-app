<template>
    <div>
        <input type="text" v-model="auth.name" placeholder="Username">
        <input type="email" v-model="auth.email" placeholder="Email">
        <input type="password" v-model="auth.password" placeholder="Password">
        <input type="password" v-model="auth.password_confirm" placeholder="Password confirm">
        <button @click="register">Register</button>
    </div>
</template>

<script>
export default {
    name: 'Register',
    data() {
        return {
            auth: {
                name: '',
                email: '',
                password: '',
                password_confirm: ''
            }
        }
    },
    
    methods: {
        async register() {
            await this.axios.post('/register', this.auth)
                .then((res) => {
                    console.log(res.data.data)
                })
                .catch((e) => {
                    console.log(e.response.data)
                })
        }
    }
}
</script>