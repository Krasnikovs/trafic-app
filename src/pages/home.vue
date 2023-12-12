<template>
    <div id="home">
        <div class="home-container">
            <div class="side-view">
                <tabs>
                    <tab title="All graphs" :selected ="true">
                        <VehicleAmount></VehicleAmount>
                    </tab>
                    <tab title="Vehicles"><p>b</p></tab>
                    <tab title="Last 24 hour data"><p>c</p></tab>
                </tabs>
            </div>
        </div>
    </div>
</template>

<script>
    import Tabs from '../components/Tabs.vue'
    import Tab from '../components/Tab.vue'
    import VehicleAmount from '../components/AmountChart.vue'

    export default {
        name: 'HomePage',
        auth: false,
        components: {
            Tab,
            Tabs,
            VehicleAmount
        },
        // data () {
        //     statistics: []
        // },
        // mounted () {
        //     this.getStatistics()
        // },
        // methods: {
        //     async getStatistics () {
        //         await this.axios.get('/vehicle_stat').then((res) => {
        //             console.log(res.data[1])
        //             this.statistics = res.data.value
                    
        //         }).catch((e) => {
        //             console.log(e)
        //             alert(e)
        //         })
        //     }
        // }
    }
</script>

<style>
    .home-container {
        display: block;
        
    }
</style>