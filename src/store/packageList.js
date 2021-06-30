import axios from "axios";
const packageList = {
  namespaced: true,
  state: {
    packageList: [],
    advancePackage: {},
    perPage: 10,
    showModal: false,
    error: "",
  },
  mutations: {
    setPackageList(state, payload) {
      state.packageList = payload;
    },
    setAdvancePackage(state, payload) {
      state.advancePackage = payload;
    },
    setShowModal(state, payload) {
      state.showModal = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    fetchAdvancePackage({ commit }, { type, name }) {
      const url = `https://data.jsdelivr.com/v1/package/${type}/${name}`;
      return new Promise((resolve, reject) => {
        axios
          .get(url)
          .then(({ data }) => {
            resolve(data);
            commit("setAdvancePackage", { type, name, ...data });
          })
          .catch((e) => {
            reject(`Ну удалось найти пакет ${name} из ${type}`);
            console.warn(e);
          });
      });
    },
    fetchPackageList({ commit, getters }, page) {
      const url = `https://data.jsdelivr.com/v1/stats/packages?limit=${getters.getPerPage}&page=${page}`;
      axios
        .get(url)
        .then(({ data }) => commit("setPackageList", data))
        .catch((e) => console.warn(e));
    },
  },
  getters: {
    getPackageList: (state) => state.packageList,
    getPerPage: (state) => state.perPage,
    getAdvancePackage: (state) => state.advancePackage,
    getShowModal: (state) => state.showModal,
    getError: (state) => state.error,
  },
};
export default packageList;
