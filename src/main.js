import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Paginate from 'vuejs-paginate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import localizeFilter from '@/filters/localize.filter'
import messagePlugin from '@/libs/message.plugin'
import tooltipDirective from '@/directives/tooltip.directive'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('localize', localizeFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

firebase.initializeApp({
  apiKey: "AIzaSyA63eC6jpVZHTu4XbTutrTOephkzpBPw4w",
  authDomain: "vue-example-crm.firebaseapp.com",
  databaseURL: "https://vue-example-crm.firebaseio.com",
  projectId: "vue-example-crm",
  storageBucket: "vue-example-crm.appspot.com",
  messagingSenderId: "62492778698",
  appId: "1:62492778698:web:62ec7672454cf828"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
 
})


