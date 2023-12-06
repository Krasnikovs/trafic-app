<template>
    <div class="tabs">
        <ul>
            <li v-for="tab in tabs" :class="{'is-active': tab.isActive }">
                <a :href="tab.href" @click="selectTab(tab)">{{ tab.title }}</a>
            </li>
        </ul>
    </div>

    <div class="tabs-details">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                tabs: []
            }
        },
        created () {
            this.tabs = this.$children
        },

        methods: {
            selectTab (selectedTab) {
                this.tabs.forEach( tab => {   
                    tab.isActive = (tab.name == selectedTab.name)
                })
            }
        }
    }
</script>