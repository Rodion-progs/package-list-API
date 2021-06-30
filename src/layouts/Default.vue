<template>
  <div class="min-vh-100">
    <app-header />
    <section class="content">
      <slot />
    </section>
    <app-footer />
    <app-modal
      :title="
        errorMessage
          ? errorMessage
          : advancePackage.name + ' из ' + advancePackage.type
      "
    >
      <error-block :title="errorMessage" v-if="errorMessage" />
      <details-info v-else />
    </app-modal>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import AppModal from "@/components/AppModal";
import DetailsInfo from "@/components/DetailsInfo";
import ErrorBlock from "@/components/ErrorBlock";
import { mapGetters } from "vuex";

export default {
  name: "Default",
  computed: mapGetters({
    advancePackage: "packageList/getAdvancePackage",
    errorMessage: "packageList/getError",
  }),
  components: {
    AppHeader,
    AppFooter,
    AppModal,
    DetailsInfo,
    ErrorBlock,
  },
};
</script>
