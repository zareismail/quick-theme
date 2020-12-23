Nova.booting((Vue, router, store) => {
  Vue.component('custom-dashboard-header', require('./components/CustomDashboardHeader.vue'))
  Vue.component('custom-index-header', require('./components/CustomDashboardHeader.vue'))
  Vue.component('custom-update-header', require('./components/CustomDashboardHeader.vue'))
  Vue.component('custom-create-header', require('./components/CustomDashboardHeader.vue'))
  Vue.component('custom-detail-header', require('./components/CustomDashboardHeader.vue'))
})
