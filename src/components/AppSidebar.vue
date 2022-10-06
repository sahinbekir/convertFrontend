<template>
  <CSidebar
    position="fixed"
    :unfoldable="sidebarUnfoldable"
    :visible="sidebarVisible"
    @visible-change="
      (event) =>
        $store.commit({
          type: 'updateSidebarVisible',
          value: event,
        })
    "
  >
    <CSidebarBrand>
    <!-- USERNAME eklenebilir,  logo içinse assetten çekiliyor, script içinde yolu var-->
    <div>
    <h4>IoT Inc.</h4>
    </div>
      <!--<CIcon
        custom-class-name="sidebar-brand-full"
        :icon="logoNegative"
        :height="35"
      />
      <CIcon
        custom-class-name="sidebar-brand-narrow"
        :icon="sygnet"
        :height="35"
      />-->
    </CSidebarBrand>
    <AppSidebarNav />
    
    
    <CSidebarToggler
      class="d-none d-lg-flex"
      @click="$store.commit('toggleUnfoldable')"
    />
  </CSidebar>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import { AppSidebarNav } from './AppSidebarNav'





import { logoNegative } from '@/assets/brand/logo-negative'
import { sygnet } from '@/assets/brand/sygnet'

export default {
  name: 'AppSidebar',
  data() {
    return {
      curinfo: {
        curid:1
      },
      dataa:[],
    };},
  components: {
    AppSidebarNav,
    
  },
  setup() {
    const store = useStore()
    return {
      logoNegative,
      sygnet,
      sidebarUnfoldable: computed(() => store.state.sidebarUnfoldable),
      sidebarVisible: computed(() => store.state.sidebarVisible),
    }
  },


}
</script>
