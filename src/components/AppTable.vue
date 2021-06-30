<template>
  <b-table
    :busy="!packageList.length"
    id="my-table"
    :per-page="perPage"
    striped
    hover
    :items="packageList"
    @row-clicked="onRowSelected"
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
</template>
<script>
import { BTable, BSpinner } from "bootstrap-vue";
import currentPage from "@/mixins/currentPage";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "AppTable",
  components: {
    BTable,
    BSpinner,
  },
  mixins: [currentPage],
  created() {
    this.fetchPackageList(this.page);
  },
  computed: mapGetters({
    packageList: "packageList/getPackageList",
    perPage: "packageList/getPerPage",
  }),
  methods: {
    ...mapActions({
      fetchPackageList: "packageList/fetchPackageList",
      advancePackage: "packageList/fetchAdvancePackage",
    }),
    ...mapMutations({
      setShowModal: "packageList/setShowModal",
      setError: "packageList/setError",
    }),
    onRowSelected(e) {
      if (!e) return;
      const { type, name } = e;
      this.advancePackage({ type, name })
        .catch((e) => this.setError(e))
        .finally(() => this.setShowModal(true));
    },
  },
};
</script>
