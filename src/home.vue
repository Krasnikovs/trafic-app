<template>
    <div class="home-container">
        <div class="side-view">
            <tabs>
                <tab title="All graphs"></tab>
                <tab title="Vehicles"></tab>
                <tab title="Last 24 hour data"></tab>
            </tabs>
        </div>
    </div>
</template>

<script>
    import Tabs from './assets/Tabs.vue'
    import Tab from './assets/Tab.vue'

    export default {
        components: {
            Tab,
            Tabs
        }
    }
</script>