<template>
   <div class="sv-btnadd">
      <a href="#" class="sv-btnadd__link"><span class="sv-btnadd__icon"><i class="fas fa-plus"></i></span> Agregar</a>
   </div>
</template>

<script>
export default {
   name:"ButtonAdd",
   data(){
      return{

      }
   }
}
</script>

<style scoped>
   .sv-btnadd__link{
      color: #fff;
      text-decoration: none;
      font-family: var(--roboto);
      padding: 10px;
      background-color: var(--tercero);
      border-radius: 4px;
   }
</style>