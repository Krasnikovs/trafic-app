<template>
    <div class="body-container">
        <div class="navigation-bar">
            <p>Trafic</p>
            <div v-if="$auth.loggedIn">
                <Transition to="/home">Go to profile</Transition>
            </div>
            <div v-else>
                <router-link to="/auth/register">Register</router-link>
                <router-link to="/auth/login">Login</router-link>
            </div>
        </div>
        <div class="body">
            <div class="body-texts">
                <h1>Trafic records</h1>
                <h2>You can see vehicles, amount of vehicles and time spent on the road</h2>
            </div>
            <div class="body-buttons">
                <router-link to="/index">Go to statistics</router-link>
            </div>
            <div class="body-texts">
                <h2>Do you want to download and save data. Create an acount.</h2>
                <h2>Already have one? Log in</h2>
            </div>
            <div class="body-buttons">
                <router-link to="/auth/register">Register</router-link>
                <router-link to="/auth/login">Login</router-link>
            </div>
        </div>
    </div>
</template>