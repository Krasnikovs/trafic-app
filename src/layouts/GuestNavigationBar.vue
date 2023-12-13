<template>
    <div>
        <div id="guest-navigation"> 
            <div class="nav nav-pills">
                <router-link class="nav-item" to="/">
                    <p class="nav-link " aria-current="page">Trafic</p>
                </router-link>
                <div>
                    <router-link class="nav-item" to="/auth/register"><p class="nav-link">Register</p></router-link>
                    <router-link class="nav-item" to="/auth/login"><p class="nav-link">Login</p></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>