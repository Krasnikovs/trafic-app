<template>
    <Line
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
            const statistics = [12, 54, 32]
            return {
                amountData: {
                    labels: [''] ,
                    datasets: [ {
                        labels: 'Vehicle amount in specific time slot',
                        data: statistics,
                        fill: false
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
                await this.axios.get('/vehicle_stat').then((res) => {
                    console.log(res.data[1])
                    this.statistics = res.data[1]
                    this.labels = res.data[0]
                    console.log(this.labels)
                }).catch((e) => {
                    console.log(e)
                    alert(e)
                })
            }
        }
    }
</script>