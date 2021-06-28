import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import '/src/assets/scss/app.scss';
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
