<template>
    <div>
        <div id="guest-navigation">
            <div class="guest-navigation-bar">
                <router-link class="name" to="/">
                    <p class="navigation-name">Trafic</p>
                </router-link>
                <div class="auth">
                    <router-link to="/auth/register"><p class="auth-link">Register</p></router-link>
                    <router-link to="/auth/login"><p class="auth-link">Login</p></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
#guest-navigation {
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 1;
    display: block;
    
}

.guest-navigation-bar {
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    z-index: 20;
    padding-left: 30px;
    border-bottom: 1px solid #dad7d0;
}

.guest-navigation-bar > a {
    justify-content: flex-start;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 10px;
} 

.navigation-name {
    display: block;
    color: black;
    text-align: center;
    text-decoration: none;
    user-select: none;
}

.auth {
    margin-right: 6%;
    display: flex;
    justify-content: right;
    align-items: center;
    justify-items: right;
    gap: 25px;
}

.auth > a {
    display: block;
    color: black;
    text-align: center;
    text-decoration: none;
    transition: 0.2s;
}

.auth > p:hover {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
}
</style>