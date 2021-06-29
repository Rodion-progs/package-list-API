import axios from "axios";
const packageList = {
  namespaced: true,
  state: {
    packageList: [],
    advancePackage: {},
    perPage: 10,
    showModal: false
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
  },
  actions: {
    fetchAdvancePackage({ commit }, { type, name }) {
      const url = `https://data.jsdelivr.com/v1/package/${type}/${name}`;
      axios
        .get(url)
        .then(({ data }) => {
            commit("setAdvancePackage", {type, name, ...data});
            commit("setShowModal", true);
          }
        )
        .catch((e) => console.warn(e));
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
    getShowModal: state => state.showModal
  },
};
export default packageList;
