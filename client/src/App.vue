<template>
  <div id="app">
    <sv-header></sv-header>
    <hello-world :msg="estado"></hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SvHeader from '@/components/SvHeader'

export default {
  name: 'App',
  data(){
    return{
      estado:"En construccion"
    }
  },
  components: {
    HelloWorld,
    SvHeader
  }
}
</script>

<style>

</style>
