<template>
  <div class="dashboard-navigation" :class="{'main': isMainDashboard}">
    <div class="flex justify-arround">
      <router-link 
        class="card p-3 rounded-full mr-1 text-black no-underline dim"
        v-for="dashboard in dashboards"
        :key="dashboard.key"
        :to='{
            name: "dashboard.custom",
            params: {
                name: dashboard.key,
            },
            query: dashboard.meta,
        }'
        exact 
      >{{ __(dashboard.label) }}</router-link > 
    </div> 
 
    <cards v-if="isMainDashboard && cards.length > 0" :cards="cards" class="mt-6 felx" size="large"/> 

    <navigation v-if="isMainDashboard" class="card mt-8"/>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  components: {
    Navigation
  },

  props: [
    'dashboardName'
  ],

  mounted() { 
  },

  computed: {
    /**
     * Return availabel cards.
     * 
     * @return array
     */
    cards() { 
      return window.Nova.config.quick_theme.cards
    },

    /**
     * Return availabel dashborads.
     * 
     * @return array
     */
    dashboards() { 
      return window.Nova.config.quick_theme.dashboards
    },

    /**
     * Determine if the current dashboard is main.
     * 
     * @return Boolean
     */
    isMainDashboard() { 
      return this.dashboardName == 'main'
    }
  }
}
</script>

<style>
.dashboard-navigation.main {
  padding: 0 10rem;
}
.dashboard-navigation a.card.router-link-active{
  background: var(--success-light); 
}

.dashboard-navigation + h1 {
  display: none
}

.dashboard-navigation.main ~ div {
  padding: 0 10rem;
}
</style>
