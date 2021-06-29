<template>
  <b-container>
    <app-table class="mt-5" />
    <app-paginate />
    <app-modal :title="advancePackage.name + ' from ' + advancePackage.type">
      <details-info />
    </app-modal>
  </b-container>
</template>
<script>
import AppTable from "@/components/AppTable";
import AppPaginate from "@/components/AppPaginate";
import AppModal from "@/components/AppModal";
import DetailsInfo from "@/components/DetailsInfo";
import { mapGetters } from "vuex";
import { BContainer } from "bootstrap-vue";
export default {
  name: "AppHeader",
  components: {
    AppTable,
    AppPaginate,
    BContainer,
    DetailsInfo,
    AppModal
  },
  computed: mapGetters({ advancePackage: "packageList/getAdvancePackage" }),
};
</script>
