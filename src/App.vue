<template>
  <div id="app">
    <b-navbar type="dark" variant="info">
      <b-container>
        <b-form class="d-flex">
          <b-form-input placeholder="Название пакета"></b-form-input>
          <b-button variant="outline-success" class="mx-2" type="submit">Поиск</b-button>
        </b-form>
      </b-container>
    </b-navbar>
    <b-container>
      <b-table
          :busy="false"
          id="my-table"
          :per-page="getPerPage"
          striped hover :items="getPackageList"
          @row-selected="onRowSelected"
          select-mode="single"
          selectable
      >
        <template #table-busy>
          <div class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong>Loading...</strong>
          </div>
        </template>
      </b-table>
      <b-pagination
        aria-controls="my-table"
        :per-page="getPerPage"
        :value="getCurrentPage"
        align="center"
        @input="changePage"
        pills
        :total-rows="100"
        size="sm"
      ></b-pagination>
    </b-container>
    <b-modal ref="modal" centered title="BootstrapVue">
      <p class="my-4">Vertically centered modal!</p>
    </b-modal>
  </div>
</template>

<script>
import { BNavbar, BForm, BFormInput, BButton, BTable, BPagination, BContainer, BSpinner, BModal } from "bootstrap-vue";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "App",
  components: {
    BNavbar,
    BForm,
    BFormInput,
    BButton,
    BTable,
    BPagination,
    BContainer,
    BSpinner,
    BModal
  },
  created() {
    if (localStorage.getItem("page")) {
      this.setCurrentPage(localStorage.getItem("page"));
    }
    this.fetchPackageList();
  },
  computed: mapGetters(["getPackageList", "getCurrentPage", "getPerPage"]),
  methods: {
    ...mapActions(["fetchPackageList"]),
    ...mapMutations(["setCurrentPage"]),
    changePage(page) {
      this.setCurrentPage(page);
      this.fetchPackageList();
    },
    onRowSelected(e) {
      this.$refs.modal.show();
      console.log(e)
    },
  },
};
</script>

