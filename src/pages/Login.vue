<template>
    <main class="ms-2 me-2">
        <div class="card p-3 form m-auto h-100" style="width: 25rem;">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label" >Email address</label>
                <input v-model="login_user.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input v-model="login_user.password" type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <button type="submit" class="btn btn-primary" @click="login">Submit</button>
        </div>
    </main> 
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

<style scoped>
main {
    display: flex;
    justify-content: center;
    min-height: 100vh;
}
</style>