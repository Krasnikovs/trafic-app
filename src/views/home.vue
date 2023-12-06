<template>
    <div id="home">
        <div class="home-container">
            <div class="side-view">
                <tabs>
                    <tab title="All graphs"></tab>
                    <tab title="Vehicles"></tab>
                    <tab title="Last 24 hour data"></tab>
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