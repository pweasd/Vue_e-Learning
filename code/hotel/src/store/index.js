import Vue from "vue";
import Vuex from "vuex";

// library
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// el-element 언어 설정
import Lang from 'element-ui/lib/locale/lang/ko'
import Locale from 'element-ui/lib/locale'

Locale.use(Lang)

Vue.use(Vuex);
Vue.use(ElementUI)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
});
