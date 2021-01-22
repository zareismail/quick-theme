<template> 
  <div class="flex flex-wrap py-3 w-full navigator" v-if="Object.keys(groupedNavigations).length">
    <div 
      class="flex flex-wrap w-1/3 p-4 border-40 border-r"
      v-for="(navigations, group) in groupedNavigations"
      :key="group"
    >
      <div class="icon w-1/3 p-4" v-html="group" /> 
      <div class="flex flex-col justify-center w-2/3"> 
        <template v-for="(navigation, index) in navigations">  
          <router-link  
            v-if="navigation.fields.length === 0"
            class="pb-1 text-90 text-justify no-underline dim"
            :key="index" 
            :to="{
              name: navigation.name,
              params: navigation.params,
              query: navigation.query,
            }"
          >{{ __(navigation.label) }}</router-link> 

          <div v-else
            v-for="(field, index) in navigation.fields"
            :key="index"
            class="flex pb-1 text-90 text-justify no-underline justify-between" 
          >
            <span class="text-sm p-2 pl-0 dim cursor-pointer">{{ field.name }}</span>
            <component   
              :is="`${mode}-${field.component}`"
              :field="field" 
            /> 
          </div>
        </template>  
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

    mode() {
      return 'index'
    }
  } 
};
</script>
<style scoped>
.icon >>> svg{
  fill: var(--info)
} 
</style> 
