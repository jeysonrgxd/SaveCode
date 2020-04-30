<template>
  <div id="app">
    <sv-header></sv-header>
    <!-- <hello-world :msg="estado"></hello-world> -->
    <router-view></router-view>
  </div>
</template>

<script>

import SvHeader from '@/components/SvHeader'

export default {
  name: 'App',

  data(){
    return{
      estado:"En construccion"
    }
  },

  components: {
    SvHeader
  }
}
</script>

<style>

</style>
