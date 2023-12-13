<template>
    <Line
        v-if="loaded"
        id="amountChart"
        :options="amountOptions"
        :data="amountData"
    />
</template>

<script>
    import { Line } from 'vue-chartjs'
    import { Chart as ChartJS, Title, Legend, LineElement, LineController, PointElement, CategoryScale, LinearScale } from 'chart.js'
  
    ChartJS.register(Title, Legend, LineElement, LineController, PointElement, CategoryScale, LinearScale)
  
    export default {
        name: 'VehicleAmount',
        components: { Line },

        data () {
            
            return {
                loaded: false,
                amountData: {
                    labels: null,
                    datasets: [ {
                        label: 'Vehicle amount in specific time slot',
                        data: null
                    } ]
                },
                amountOptions: {
                    responsive: false,
                    LinearScale: 0
                }
            }
            
        },
        mounted () {
            this.getStatistics()
        },
        methods: {
            async getStatistics () {
                await this.axios.get('/vehicle_timeframe').then((res) => {
                    this.amountData.datasets[0].data = res.data[1]
                    this.amountData.labels = res.data[0]
                    this.loaded = true
                    console.log(res.data)
                }).catch((e) => {
                    console.log(e)
                    alert(e)
                })
            }
        }
    }
</script>