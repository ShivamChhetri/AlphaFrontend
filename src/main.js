import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import axios from "axios";
import Routes from "./routes.js";
import "./auth.js";
import {store} from "./store.js";
import jquery from  "jquery";
import "popper.js";
import "bootstrap";
import "./assets/style.scss";

window.$=window.jquery=jquery;
Vue.config.productionTip = false;
Vue.use(VueRouter);

jquery(".btn").on('click',()=>{
  this.hide();
});

window.axios=axios;
axios.defaults.baseURL = 'http://localhost:3030/api';
// axios.defaults.headers.common['Authorization'] = `Bearer ${Vue.auth.getToken()}`;

const router= new VueRouter({
  mode:"history",
  routes:Routes
});

router.beforeEach(
  (to,from,next)=>{
      if(to.matched.some(record=>record.meta.forVisitors)){
          if(Vue.auth.isAuthenticated()){
            next({
              path: '/'
            });
          }else{
            next();
          }
      }
      else if(to.matched.some(record=>record.meta.forAuth)){
        if(!Vue.auth.isAuthenticated()){
          next({
            path: '/login'
          });
        }else{
          next();
        }
      }
      else{
        next();
      }
  }
);

new Vue({
  store,
  render: h => h(App),
  router,
}).$mount('#app')
