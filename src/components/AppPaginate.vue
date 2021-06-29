<template>
  <b-pagination
    aria-controls="my-table"
    :per-page="perPage"
    :value="page"
    align="center"
    @input="changePage"
    pills
    :total-rows="100"
    size="sm"
  ></b-pagination>
</template>
<script>
import { BPagination } from "bootstrap-vue";
import { mapActions, mapGetters } from "vuex";
import currentPage from "@/mixins/currentPage";
export default {
  name: "AppPaginate",
  components: { BPagination },
  computed: mapGetters({ perPage: "packageList/getPerPage" }),
  mixins: [currentPage],
  methods: {
    ...mapActions({ fetchPackageList: "packageList/fetchPackageList" }),
    changePage(page) {
      this.$router.push({ query: { page } });
      this.fetchPackageList(page);
    },
  },
};
</script>
