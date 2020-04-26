<template>
   <div class="sv-search">
      <span class="sv-search__icon"><i class="fas fa-search"></i></span><input class="sv-search__input" type="text" :placeholder="place" v-model="filter">
   </div>
</template>

<script>
export default {
   name:"ButtonSearch",
   data(){ 
      return{
         place:"Buscar..",
         filter:""
      }
   }

}
</script>

<style scoped>

   .sv-search{
      display: flex;
      align-items: center;
   }

   .sv-search__icon{
      background-color: var(--tercero);
      height: 36px;
      display: flex;
      align-items: center;
      color: #fff;
      padding: 0 10px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
   }

   .sv-search__input{
      border: none;
      outline: none;
      width: 200px;
      font-family: var(--roboto);
      padding: 10px;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
   }

</style>