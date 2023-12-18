<template>
    <nav class="navbar bg-body-tertiary fixed-top">
        <div class="container-fluid gap-2">
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <router-link class="navbar-brand mx-auto" to="/">Trafic records</router-link>
            <div v-if="!is_logged_in" class="d-flex justify-content-center flex-row gap-2">
                <router-link class="nav-link" to="/auth/register">Register</router-link>
                <router-link class="nav-link" to="/auth/login">Login</router-link>
            </div>
            <button v-else class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link" @click="logout">Logout</a>
                </div>
            </div>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <button class="nav-link active" data-bs-dismiss="offcanvas" aria-current="page" @click="toAmountGraph">Vehicle Amount in time slot</button>
                            <button class="nav-link active" data-bs-dismiss="offcanvas" aria-current="page" @click="toTimeSpent">Time spent on the road</button>
                            <button class="nav-link active" data-bs-dismiss="offcanvas" aria-current="page" @click="toVehicleTable">Vehicle table</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'HomeSideBar',

        data () {
            return {
                is_logged_in: false,
            }
        },
        mounted () {
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
            async logout () {
                await this.axios.get('/logout')
                .then((res) => {
                    this.is_logged_in = false
                    localStorage.clear()
                    this.$router.push('/')
                })
            },
            async closeSidebar () {
                document.getElementById('sidebar').style.display = 'none';
            },
            async toAmountGraph () {
                document.getElementById('amountChart').scrollIntoView({ behavior: "smooth"});
            },
            async openSidebar () {
                document.getElementById('sidebar').style.display = 'block';
            },
            async toVehicleTable () {
                document.getElementById('vehicleTable').scrollIntoView({ behavior: "smooth"});
            },
            async toTimeSpent () {
                document.getElementById('timeSpent').scrollIntoView({ behavior: "smooth"});
            },
        }
    }
</script>
