<template>
    <main class="ms-2 me-2">
        <div class="card p-3 form m-auto h-100" style="width: 25rem;">
            <div class="mb-3">
                <label for="InputName" class="form-label" >Name</label>
                <input v-model="auth.name" type="name" class="form-control" id="InputName1" aria-describedby="nameHelp">
            </div>
            <div class="mb-3">
                <label for="InputEmail1" class="form-label" >Email address</label>
                <input v-model="auth.email" type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="InputPassword1" class="form-label">Password</label>
                <input v-model="auth.password" type="password" class="form-control" id="InputPassword1">
            </div>
            <div class="mb-3">
                <label for="InputPassword2" class="form-label">Password Confirmation</label>
                <input v-model="auth.password_confirm" type="password" class="form-control" id="InputPassword2">
            </div>
            <button type="submit" class="btn btn-primary" @click="register">Submit</button>
        </div>
    </main> 
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

<style scoped>
main {
    display: flex;
    justify-content: center;
    min-height: 100vh;
}
</style>