<template>
  <div class="details">
    <div class="details__item" v-if="Object.entries(getAdvancePackage.tags).length">
      <h5 class="details__title">Tags</h5>
      <b-list-group flush>
        <b-list-group-item
          v-for="tag in Object.entries(getAdvancePackage.tags)"
          :key="tag[0] + tag[1]"
          >{{ tag[0] }} {{ tag[1] }}</b-list-group-item
        >
      </b-list-group>
    </div>
    <div class="details__item" v-if="getAdvancePackage.versions">
      <h5 class="details__title">Versions</h5>
      <b-list-group flush>
        <b-list-group-item
          v-for="version in getAdvancePackage.versions"
          :key="version"
          >{{ version }}</b-list-group-item
        >
      </b-list-group>
    </div>
  </div>
</template>
<script>
import { BListGroup, BListGroupItem } from "bootstrap-vue";
import { mapGetters } from "vuex";
export default {
  name: "Details",
  components: {
    BListGroup,
    BListGroupItem,
  },
  computed: {
    ...mapGetters({ getAdvancePackage: "packageList/getAdvancePackage" }),
  },
};
</script>
