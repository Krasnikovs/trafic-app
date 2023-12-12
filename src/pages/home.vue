<template>
    <div id="home">
        <div class="home-container">
            <div class="side-view">
                
            </div>
            <VehicleAmount/>
        </div>
    </div>
</template>

<script>
    import VehicleAmount from '../components/AmountChart.vue'

    export default {
        name: 'HomePage',
        auth: false,
        components: {
            VehicleAmount
        }
    }
</script>

<style>
    .home-container {
        display: block;
        
    }
</style>