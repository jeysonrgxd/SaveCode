import Vue from 'vue'
import App from './App.vue'

// importamos el router que creamos
import router from '@/router.js'

Vue.config.productionTip = false

new Vue({
  //como su propiedad es igual que el nombre de la importacion usamos ecmascript6
  router,
  render: h => h(App),
}).$mount('#app')
