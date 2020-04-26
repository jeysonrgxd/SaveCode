<template>
  <div id="app">
    <sv-header></sv-header>
    <!-- <hello-world :msg="estado"></hello-world> -->
    <container></container>
  </div>
</template>

<script>
import container from './components/container'
import SvHeader from '@/components/SvHeader'

export default {
  name: 'App',
  data(){
    return{
      estado:"En construccion"
    }
  },
  components: {
    SvHeader,
    container
  }
}
</script>

<style>

</style>
