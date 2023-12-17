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
        <div class="d-flex justify-content-center align-items-center">
            <div class="card w-20" style="margin-top: 150px; width: 50%">
                <div class="card-body">
                    <h1 class="card-text">Welcome to Trafic records</h1>
                    <h2 class="card-text">This is a homepage where you can find data about vehicle trafic, for example:</h2>
                    <h2 class="card-text">You can find data and see vehicles found on the road, amount of vehicles, time spent on the road and more.</h2>
                </div>
                <div class="body-buttons">
                    <router-link class="btn btn-primary" style="background-color: #6d9f06; border-color: #6d9f06;" to="/home">Go to statistics</router-link>
                </div>
                <div class="card-body">
                    <h2 class="card-text">Do you want to download and save data. Create an acount.</h2>
                    <h2 class="card-text">Already have one? Log in</h2>
                </div>
                <div class="d-flex gap-2">
                    <router-link class="btn btn-primary" style="background-color: #6d9f06; border-color: #6d9f06;" to="/auth/register">Register</router-link>
                    <router-link class="btn btn-primary" style="background-color: #6d9f06; border-color: #6d9f06;" to="/auth/login">Login</router-link>
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
