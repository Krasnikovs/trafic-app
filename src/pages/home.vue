<template>
    <div id="home">
        <div class="home-container">
            <div class="side-view">
                <tabs>
                    <tab title="All graphs" :selected ="true"><p>a</p></tab>
                    <tab title="Vehicles"><p>b</p></tab>
                    <tab title="Last 24 hour data"><p>c</p></tab>
                </tabs>
            </div>
        </div>
    </div>
</template>

<script>
    import Tabs from '../components/Tabs.vue'
    import Tab from '../components/Tab.vue'

    export default {
        name: 'HomePage',
        auth: false,
        components: {
            Tab,
            Tabs
        }
    }
</script>

<style>
    .home-container {
        display: block;
        
    }
</style>