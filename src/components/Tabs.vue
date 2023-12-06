<template>
    <div>
        <ul class="tabs_header">
            <li v-for="tab in tabs" :key="tab.title">{{ tab.title }}</li>
        </ul>
        <slot></slot>
    </div>
</template>

<script>
    mounted () {
        this.selectTab(0)
    }

    methods: {
        selectTab (i) {
            this.selectedIndex = i

            this.tabs.array.forEach((tab, index) => {
                tab.isActive = (index == i)
            })
        }
    }
</script>