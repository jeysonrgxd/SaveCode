<template>
   <div class="sv-btnadds">
      <a :href="link" class="sv-btnadds__link"><span class="sv-btnadds__icon"><i class="fas fa-plus"></i></span> {{ name }}</a>
   </div>
</template>

<script>
export default {
   name:"ButtonAdds",
   props:{
      name:{type:String},
      link:{type:String,default:"/"}
   },
   data(){
      return{

      }
   }
}
</script>

<style scoped>
   .sv-btnadds{
      margin: 0 5px;
   }
   .sv-btnadds__link{
      color: #fff;
      text-decoration: none;
      font-family: var(--roboto);
      padding: 10px;
      background-color: var(--tercero);
      border-radius: 4px;
   }
</style>