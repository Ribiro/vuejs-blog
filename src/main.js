import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routes from "./routes";

Vue.use(VueResource);
Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

// custom directives
// Vue.directive('rainbow', {
//   bind(el, binding, vnode){
//     el.style.color = "#" + Math.random().toString().slice(2, 8)
//   }
// });

// filters
Vue.filter('snippet', function (value) {
  return value.slice(0, 100) + '...'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
