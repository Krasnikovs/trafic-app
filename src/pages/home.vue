<template>
    <div id="home">
        <div>
            <!-- <div v-if="$auth.loggedIn" >
                <AuthNavigationBar/>
            </div>
            <div v-else>
                <GuestNavigationBar/>
            </div> -->
            <GuestNavigationBar/>
        </div>
        <div class="home-container">
            <HomeSideBar/>
            <VehicleAmount/>
        </div>
    </div>
</template>

<script>
    import AuthNavigationBar from '../layouts/AuthNavigationBar.vue'
    import GuestNavigationBar from '../layouts/GuestNavigationBar.vue'
    import HomeSideBar from '../layouts/HomeSideBar.vue'
    import VehicleAmount from '../components/AmountChart.vue'

    export default {
        name: 'HomePage',
        auth: false,
        components: {
            HomeSideBar,
            VehicleAmount,
            AuthNavigationBar,
            GuestNavigationBar
        }
    }
</script>

<style>
    .home-container {
        display: block;
        
    }
</style>