<template>
   <div class="sv-contenedor">
      <div class="sv-contenedor__propiedades">
         <button-search></button-search>
         <div class="sv-contenedor__buttons">
            <button-add></button-add>
            <button-new-category></button-new-category>
         </div>
      </div>

   </div>
</template>

<script>
import ButtonSearch from '@/components/ButtonSearch.vue'
import ButtonAdd from '@/components/ButtonAdd.vue'
import ButtonNewCategory from '@/components/ButtonNewCategory.vue'

export default {
   name:"container",
   data(){
      return{

      }
   },
   components:{
      ButtonSearch,
      ButtonAdd,
      ButtonNewCategory
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
   .sv-contenedor__buttons{
      display: flex;
      
   }
</style>