<template>
    <div id="IndexPage" class="body-container">
        <div>
            <!-- <div v-if="$auth.loggedIn" >
                <AuthNavigationBar/>
            </div>
            <div v-else>
                <GuestNavigationBar/>
            </div> -->
            <GuestNavigationBar/>
        </div>
        <div class="body">
            <div class="body-texts">
                <h1>Trafic records</h1>
                <h2>You can see vehicles, amount of vehicles and time spent on the road</h2>
            </div>
            <div class="body-buttons">
                <router-link to="/home">Go to statistics</router-link>
            </div>
            <div class="body-texts">
                <h2>Do you want to download and save data. Create an acount.</h2>
                <h2>Already have one? Log in</h2>
            </div>
            <div class="body-buttons">
                <router-link to="/auth/register">Register</router-link>
                <router-link to="/auth/login">Login</router-link>
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

<style>
.body-buttons {
    display: flex;
    gap: 10px;
}
</style>