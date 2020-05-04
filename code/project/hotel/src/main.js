import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// library
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Lang from 'element-ui/lib/locale/lang/ko'
import Locale from 'element-ui/lib/locale'

Locale.use(Lang)

Vue.use(ElementUI)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
