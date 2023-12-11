<template>
    <div id="home">
        <div class="home-container">
            <div class="side-view">
                <tabs>
                    <tab title="All graphs" :selected ="true">
                        <div class="stat_table">
                            <div class="table">
                                <tr class="stat_tr">
                                    <th class="stat_th"></th>
                                </tr>
                            </div>
                        </div>
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
    import { Line } from 'vue-chartjs'

    export default {
        name: 'HomePage',
        auth: false,
        components: {
            Tab,
            Tabs
        },
        data () {
            statistics: []
        },
        mounted () {
            this.getStatistics()
        },
        methods: {
            async getStatistics () {
                await this.axios.get('/vehicle_stat').then((res) => {
                    console.log(res.data[1])
                    this.statistics = res.data.value
                    
                }).catch((e) => {
                    console.log(e)
                    alert(e)
                })
            }
        }
    }
</script>

<style>
    .home-container {
        display: block;
        
    }
</style>