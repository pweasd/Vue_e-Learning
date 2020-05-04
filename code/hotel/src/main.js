import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import cookie from "./util/cookie";

Vue.config.productionTip = false;
Vue.prototype.$cookie = cookie

new Vue({
  router,
  store,
  cookie,
  render: h => h(App)
}).$mount("#app");
