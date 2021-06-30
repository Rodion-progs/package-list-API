<template>
  <b-modal
    variant="primary"
    backdrop="primary"
    :visible="getShowModal"
    @ok="close"
    @cancel="close"
    @close="close"
    no-close-on-backdrop
    no-close-on-esc
    centered
    :title="title"
  >
    <slot />
  </b-modal>
</template>
<script>
import { BModal } from "bootstrap-vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "AppModal",
  computed: {
    ...mapGetters({ getShowModal: "packageList/getShowModal" }),
  },
  props: {
    title: {
      type: String,
      default: "Заголовок",
    },
  },
  components: {
    BModal,
  },
  methods: {
    ...mapMutations({
      setShowModal: "packageList/setShowModal",
      setError: "packageList/setError",
    }),
    close() {
      this.setShowModal(false);
      this.setError("");
    },
  },
};
</script>
