<template>
    <div id="IndexPage" class="">
        <div>
            <!-- <div v-if="$auth.loggedIn" >
                <AuthNavigationBar/>
            </div>
            <div v-else>
                <GuestNavigationBar/>
            </div> -->
            <GuestNavigationBar/>
        </div>
        <div class="d-flex justify-content-center mt-5">
            <div class="card w-20">
                <div class="card-body">
                    <h1 class="card-text">Trafic records</h1>
                    <h2 class="card-text">You can see vehicles, amount of vehicles and time spent on the road</h2>
                </div>
                <div class="body-buttons">
                    <router-link class="btn btn-primary" style="background-color: #6d9f06; border-color: #6d9f06;" to="/home">Go to statistics</router-link>
                </div>
                <div class="card-body">
                    <h2 class="card-text">Do you want to download and save data. Create an acount.</h2>
                    <h2 class="card-text">Already have one? Log in</h2>
                </div>
                <div class="d-flex g-3">
                    <router-link class="btn btn-primary g-col-6" style="background-color: #6d9f06; border-color: #6d9f06;" to="/auth/register">Register</router-link>
                    <router-link class="btn btn-primary g-col-6" style="background-color: #6d9f06; border-color: #6d9f06;" to="/auth/login">Login</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AuthNavigationBar from '../layouts/AuthNavigationBar.vue'
    import GuestNavigationBar from '../layouts/GuestNavigationBar.vue'

    export default {
        name: 'IndexPage',
        auth: false,
        components: {
            AuthNavigationBar,
            GuestNavigationBar
        }
    }
</script>
