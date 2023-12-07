<template>
    <div>
        <input type="email" v-model="login_user.email" placeholder="Email">
        <input type="password" v-model="login_user.password" placeholder="Password">
        <button @click="login">Login</button>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            login_user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        async login() {
            await this.axios.post('/login', this.login_user)
                .then((res) => {
                    console.log(res.data.access_token)
                    localStorage.setItem ('access_token', res.data.access_token)
                    localStorage.getItem('access_token')
                })
                .catch((e) => {
                    console.log(e)
                })
        }
    }
}
</script>