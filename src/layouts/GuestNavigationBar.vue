<template>
    <nav id="guest-navigation" class="navbar fixed-top bg-body-tertiary"> 
        <div class="container-fluid">
            <router-link class="navbar-brand mx-auto" to="/">Trafic records</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link class="nav-link" to="/auth/register">Register</router-link>
                    <router-link class="nav-link" to="/auth/login">Login</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>
