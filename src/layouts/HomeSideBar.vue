<template>
    <nav class="navbar bg-body-tertiary fixed-top">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <router-link class="navbar-brand mx-auto" to="/">Trafic records</router-link>
            <router-link class="nav-link" to="/auth/register">Register</router-link>
            <router-link class="nav-link" to="/auth/login">Login</router-link>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <button class="nav-link active" data-bs-dismiss="offcanvas" aria-current="page" @click="toAmountGraph">Vehicle Amount in time slot</button>
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
                
            }
        },
        methods: {
            async closeSidebar () {
                document.getElementById('sidebar').style.display = 'none';
            },
            async toAmountGraph () {
                document.getElementById('amountChart').scrollIntoView({ behavior: "smooth"});
            },  
            async openSidebar () {
                document.getElementById('sidebar').style.display = 'block';
            }
        }
    }
</script>
