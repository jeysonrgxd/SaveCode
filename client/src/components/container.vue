<template>
   <div class="sv-contenedor">
      <div class="sv-contenedor__propiedades">
         <button-search></button-search>
         <button-add></button-add>
      </div>

   </div>
</template>

<script>
import ButtonSearch from '@/components/ButtonSearch.vue'
import ButtonAdd from '@/components/ButtonAdd.vue'

export default {
   name:"container",
   data(){
      return{

      }
   },
   components:{
      ButtonSearch,
      ButtonAdd
   }

   

}
</script>
<style scoped>
   .sv-contenedor{
      width: 1500px;
      margin:0 auto;
      padding:30px 0;
   }
   .sv-contenedor__propiedades{
      display: flex;
      align-items: center;
      justify-content: space-between;
   }
</style>