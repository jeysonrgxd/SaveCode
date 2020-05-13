<template>
   <div class="sv-dataTable">
      <table class="sv-dataTable__table">
         <thead class="sv-dataTable__header">
            <tr>
               <th class="sv-dataTable__title">Titulo</th>
               <th class="sv-dataTable__title">Categoria</th>
               <th class="sv-dataTable__title">Tipo</th>
            </tr>
         </thead>
         <tbody>
            <tr class="sv-dataTable__row">
               <td class="sv-dataTable__data">Promesas Js</td>
               <td class="sv-dataTable__data">JavaScript</td>
               <td class="sv-dataTable__data">Estudio</td>
            </tr>
            <tr class="sv-dataTable__row">
               <td class="sv-dataTable__data">Promesas Js</td>
               <td class="sv-dataTable__data">JavaScript</td>
               <td class="sv-dataTable__data">Estudio</td>
            </tr>
            <tr class="sv-dataTable__row">
               <td class="sv-dataTable__data">Promesas Js</td>
               <td class="sv-dataTable__data">JavaScript</td>
               <td class="sv-dataTable__data">Estudio</td>
            </tr>
         </tbody>
      </table>
   </div>
</template>

<script>
export default {
   name:"SvAssetsTable",
   data(){
      return{
         
      }
   }
}
</script>

<style scoped>
   .sv-dataTable__table{
      border-collapse: collapse;
      color:#fff;
      font-family: var(--roboto);
   }
   .sv-dataTable__header{
      background-color: var(--primero);
   }
   .sv-dataTable__title{
      padding: 5px 10px;
      text-align: center;
      letter-spacing: 1px;
   }

   .sv-dataTable__data{
      padding: 5px 10px;
      text-align: center;
   }
   .sv-dataTable__row:nth-child(even){
      background-color: #4e5560;
   }
</style>