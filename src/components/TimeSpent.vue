<template>
    <div id="timeSpent" class="w-50 h-50 mt-5 ">
        <div class="d-flex justify-content-end">
            <button v-if="is_logged_in" @click="downloadTimeSpent()" class="btn" style="color: #6d9f06; border-color: #6d9f06;" type="button">Download</button>
        </div>
        <table id="timeSpent" class="table table-light table-hover">
            <thead>
                <tr>
                    <th>Vehicle vector</th>
                    <th>Time spent on the road</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(time, index) in vehiclesTime" :key="index" class="table-active">
                    <th class="">
                        <p>{{ time.vector }}</p>
                    </th>
                    <th class="">
                        <p>{{ time.time }} seconds</p>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'TimeSpent',
    data () {
        return {
            vehiclesTime: {
                'vector': [],
                'time': []
            },
            pagination: {
                'links': [],
                'meta': []
            }
        }
    },
    mounted () {
        this.getTime()
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
        async getTime () {
            await this.axios.get('/vehicle/timeSpent').then((res) => {
                this.vehiclesTime = res.data
                this.pagination.links = res.data.links
                this.pagination.meta = res.data.meta
                console.log(res.data)

            }).catch((e) => {
                alert(e.response.data.message)
            })
        },
        async downloadTimeSpent() {
            await this.axios.get('/exportAvgLifeTime').then((res) => {
                window.open(res.data.certificate_url, '_blank');
            })
        }
    },
    
}
</script>