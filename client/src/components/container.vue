<template>
   <div class="sv-contenedor">
      <div class="sv-contenedor__propiedades">
         <button-search></button-search>
         <div class="sv-contenedor__buttons">
            <button-adds name="Agregar script" link="/newadd"></button-adds>
            <button-adds name="Agregar Category"></button-adds>
         </div>
      </div>

   </div>
</template>

<script>
import ButtonSearch from '@/components/ButtonSearch.vue'
import ButtonAdds from '@/components/ButtonAdds.vue'

export default {
   name:"container",
   data(){
      return{
         
      }
   },
   components:{
      ButtonSearch,
      ButtonAdds
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