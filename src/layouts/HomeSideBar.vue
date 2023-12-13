<template>
    <div class="home-sidebar animate-left" id="sidebar">
        <button class="sidebar-item" @click="closeSidebar">Close</button>
        <button class="sidebar-item" @click="toAmountGraph">Vehicle Amount in time slot</button>
    </div>
    <button class="openSidebar" @click="openSidebar">Open</button>
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

<style>

</style>