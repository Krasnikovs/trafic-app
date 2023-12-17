<template>
    <div id="home">
        <div>
            <!-- <div v-if="$auth.loggedIn" >
                <AuthNavigationBar/>
            </div>
            <div v-else>
                <GuestNavigationBar/>
            </div> -->
            <HomeSideBar/>
        </div>
        <div id="home-container" class="d-flex justify-content-center align-items-center flex-column gap-5" style="margin-top: 100px;">
            <VehicleAmount/>
            <TimeSpent/>
            <VehicleTable/>
        </div>
    </div>
</template>

<script>
    import AuthNavigationBar from '../layouts/AuthNavigationBar.vue'
    import GuestNavigationBar from '../layouts/GuestNavigationBar.vue'
    import HomeSideBar from '../layouts/HomeSideBar.vue'
    import VehicleAmount from '../components/AmountChart.vue'
    import VehicleTable from '../components/VehicleTable.vue'
    import TimeSpent from '../components/TimeSpent.vue'

    export default {
        name: 'HomePage',
        auth: false,
        components: {
            HomeSideBar,
            VehicleAmount,
            AuthNavigationBar,
            GuestNavigationBar,
            VehicleTable,
            TimeSpent
        }
    }
</script>

<style>
/* #home-container {
    min-height: 200vh;
} */
</style>