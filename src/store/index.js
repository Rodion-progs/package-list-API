import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    packageList: [],
    perPage: 10,
    currentPage: 1,
  },
  mutations: {
    setPackageList(state, payload) {
      state.packageList = payload;
    },
    setCurrentPage(state, payload) {
      state.currentPage = payload;
    },
  },
  actions: {
    fetchPackageList({ commit, getters }) {
      let url = `https://data.jsdelivr.com/v1/stats/packages?limit=${getters.getPerPage}&page=${getters.getCurrentPage}`;
      axios.get(url)
        .then(({data}) => {
          commit("setPackageList", data);
          localStorage.setItem("page", getters.getCurrentPage);
        })
        .catch(e => console.warn(e))
    }
  },
  getters: {
    getPackageList: state => state.packageList,
    getPerPage: state => state.perPage,
    getCurrentPage: state => state.currentPage
  },
  modules: {},
});
