<template>
  <b-container>
    <app-table class="mt-5" />
    <app-paginate />
  </b-container>
</template>
<script>
import AppTable from "@/components/AppTable";
import AppPaginate from "@/components/AppPaginate";

import { BContainer } from "bootstrap-vue";
export default {
  name: "AppHeader",
  components: {
    AppTable,
    AppPaginate,
    BContainer,
  },
};
</script>
