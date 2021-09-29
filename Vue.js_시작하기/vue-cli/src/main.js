import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app') // mount는 el: "#app"과 동일한 역할을 함

// new Vue({
//   el: '#app',
//   render: h => h(App),
//})

// var App = {
//   template: '<div>app</div>'
// } -> render: h => h(App) 과 동일 함