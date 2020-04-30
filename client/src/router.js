import Vue from 'vue';
import Router from "vue-router";

// importamos lo componentes que variaran mediante las rutas
import Home from "@/views/Home";
import AddScript from "@/views/AddScript";

// incorporamos en router
Vue.use(Router)

// creamos una instancia de vue y la exportamos

export default new Router({
   mode:"history",
   routes:[
      {
         path:"/",
         name:"home",
         component:Home
      },
      {
         path:"/addscript",
         name:"addscript",
         component:AddScript
      }
   ]
})