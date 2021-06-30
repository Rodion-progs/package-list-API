import Vue from "vue";
import Vuex from "vuex";
import packageList from "@/store/packageList";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    packageList,
  },
});
