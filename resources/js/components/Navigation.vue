<template> 
  <div class="flex flex-wrap py-3 w-full" v-if="Object.keys(groupedNavigations).length">
    <div 
      class="flex flex-wrap w-1/3 p-4 border-40 border-r"
      v-for="(navigations, group) in groupedNavigations"
      :key="group"
    >
      <div class="icon w-1/3 p-4" v-html="group" /> 
      <div class="flex flex-col justify-center w-2/3"> 
        <router-link 
          class="pb-1 text-90 text-justify no-underline dim"
          v-for="(navigation, index) in navigations"
          :key="index"
          :to="{
            name: navigation.name,
            params: navigation.params,
            query: navigation.query,
          }"
        >{{ __(navigation.label) }}</router-link>  
      </div>
    </div>  
  </div>
</template>

<script> 
export default {
  mounted() { 
  },

  computed: {
    /**
     * Return availabel dashborads.
     * 
     * @return array
     */
    groupedNavigations() { 
      return window.Nova.config.quick_theme.navigations
    }, 
  } 
}
</script>
<style scoped>
.icon >>> svg{
  fill: var(--info)
}
</style> 
