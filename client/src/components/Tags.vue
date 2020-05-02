<template>
   <ul class="sv-tags">

      <!-- se puede poner :key para abrebiar en vez de v-bind:key-->
      <!-- esto cambiara por ahora solo sera para mostrar el nombre despues le enviaremos al contenedor padre unaviso de que active un funcion que tendra el container y cambiara la info de latabla atravez de una peticion -->
      <li class="sv-tags__items" v-for="tag in arrtag" v-bind:key="tag">
         <span v-bind:class="{'sv-tags__links--borderOn':activeTag}" class="sv-tags__links" v-on:click="changeData(tag,$event)">{{ tag }}</span>
      </li>
   </ul>
</template>
 
<script>
export default {
   name:"Tags",

   //recordar que es el componente container quien no enviara los datos que traera de una api y los pondra en la tabla supuestamente
   props:{
      arrtag:{
         type:Array,
         default:()=>["JAVASCRIPT","CSS","PHP","WP_CODE"]
      }
   },
   
   data(){
      return{
         activeTag : false,
         elemetsTags:[]
      }
   },

   mounted(){
      let tagsElements = Array.from(document.querySelectorAll(".sv-tags__items .sv-tags__links"))
      this.elemetsTags = tagsElements
   },

   methods:{
      changeData(name,event){

         console.log(`Presionastes el tag ${name}`)

         let op = this.elemetsTags.map(el=>{
            el.classList.remove("sv-tags__links--borderOn")
            return el
         })

         op.forEach(el=>{
            if(event.target === el) {
               event.target.classList.add("sv-tags__links--borderOn")
            }
         })
         
         
      }
   }

}

</script>

<style scoped>

   .sv-tags{
      list-style: none;
      display: flex;
   }

   .sv-tags__items{
      cursor: pointer;
      margin: 0 5px;
   }

   .sv-tags__links{
      color:#fff;
      font-family: var(--roboto);
      font-size: 13px;
      border: 1.45px solid #fff;
      padding: 7px;
      border-radius: 13px;
      transition: border .2s;
   }

   .sv-tags__links:hover{
      border-color: var(--tercero);
   }

   .sv-tags__links--borderOn{
      border-color: var(--tercero);
   }
</style>