<template>
    <div class="w-50 h-50 mt-5">
        <form class="d-flex" role="search">
            <input v-model="searchInput" @input="getFilteredVehicles()" type="text" placeholder="Search.." class="form-control me-2" aria-label="Search">
            <button v-if="is_logged_in" @click="downloadTraficFilter()" class="btn" style="color: #6d9f06; border-color: #6d9f06;" type="button">Download</button>
        </form>
        <table id="vehicleTable" class="table table-light table-hover">
            <thead>
                <tr>
                    <th>Vehicle vector</th>
                    <th>Position</th>
                    <th>Time slot</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(vehicle, index) in vehicles" :key="index" class="table-active">
                    <th class="">
                        <p>{{ vehicle.vector }}</p>
                    </th>
                    <th class="">
                        <p>{{ vehicle.position }}</p>
                    </th>
                    <th class="">
                        <p>{{ vehicle.timestamp }}</p>
                    </th>
                </tr>
            </tbody>
        </table>
        <div>
            <button class="btn btn-primary" style="background-color: #6d9f06; border-color: #6d9f06;" :disabled="!pagination.links.prev" @click="switchPage(pagination.links.prev)">Previous</button>
            <p>{{ pagination.meta.current_page }} / {{  pagination.meta.last_page }}</p>
            <button class="btn btn-primary" style="background-color: #6d9f06; border-color: #6d9f06;" :disabled="!pagination.links.next" @click="switchPage(pagination.links.next)">Next</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VehicleTable',
    data () {
        return {
            vehicles: [],
            pagination: {
                'links': [],
                'meta': []
            },
            is_logged_in: false
        }
    },
    mounted () {
        this.getVehicles()
        if(!localStorage.getItem('user')) {
            this.axios.get('/me', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            })
                .then((res) => {
                    console.log(res.data.data)
                    localStorage.setItem('user', res.data.data)
                    this.is_logged_in = true
                }).catch((e) => {
                    this.is_logged_in = false
                })
        } else {
            this.is_logged_in = true
        }
    },
    methods: {
        async getVehicles () {
            await this.axios.post('/vehicle/filter').then((res) => {
                this.vehicles = res.data.data
                this.pagination.links = res.data.links
                this.pagination.meta = res.data.meta
                console.log(res.data)
            }).catch((e) => {
                alert(e.response.data.message)
            })
        },
        async getFilteredVehicles () {
            if (!this.searchInput) {
                await this.getVehicles()
            } else if (this.searchDelayed) {
                return
            } else {
                this.searchDelayed = true
                setTimeout(() => {
                    this.axios.post('/vehicle/filter', {'vector': this.searchInput}).then((res) => {
                        this.vehicles = res.data.data
                        this.pagination.links = res.data.links
                        this.pagination.meta = res.data.meta
                        console.log(this.searchInput)
                    })
                    this.searchDelayed = false
                }, 1000)
            }
        },
        async switchPage (link) {
            console.log(link.substring(link.lastIndexOf('/') + 1))
            await this.axios.post('/vehicle/' + link.substring(link.lastIndexOf('/') + 1), {'vector': this.searchInput}).then((res) => {
                this.vehicles = res.data.data
                this.pagination.links = res.data.links
                this.pagination.meta = res.data.meta
            }).catch((e) => {
                alert(e.response.data.message)
            })
        },
        updatePageData (title, type) {
            this.getVehicles()
            let timeout = 6000
            setTimeout(() => {
                this.$refs.popup.style.zIndex = '-1'
            }, timeout)
        },
        async downloadTraficFilter() {
            await this.axios.get('/exportVehicleFilter').then((res) => {
                window.open(res.data.certificate_url, '_blank');
            })
        }
    }
}
</script>