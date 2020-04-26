<template>
   <header class="sv-header">
      <div class="sv-container">
         <div class="sv-logo">
            <h3><span><i class="fas fa-cloud-upload-alt"></i></span> SaveCode</h3>
         </div>
      </div>
   </header>
</template>

<script>
export default {
   name:"SvHeader",
   data(){
      return{

      }
   }
}
</script>
<style scoped>
   .sv-header{
      background-color: var(--primero);
   }

   .sv-container{
      padding: 20px;
   }

   .sv-header .sv-logo h3{
      margin: 0;
      font-size: 25px;
      color: #fff;
      font-family: var(--roboto);
      letter-spacing: 1px;
   }

</style>