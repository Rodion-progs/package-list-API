<template>
  <b-navbar type="dark" variant="info">
    <b-container>
      <b-form class="d-flex" @submit.prevent="submit">
        <b-form-input
          v-model="searchText"
          placeholder="Полное название пакет npm"
        ></b-form-input>
        <b-button variant="outline-success" class="mx-2" type="submit"
          >Поиск</b-button
        >
      </b-form>
    </b-container>
  </b-navbar>
</template>
<script>
import { BNavbar, BForm, BFormInput, BButton, BContainer } from "bootstrap-vue";
import { mapActions } from "vuex";

export default {
  name: "AppHeader",
  components: {
    BNavbar,
    BForm,
    BFormInput,
    BButton,
    BContainer,
  },
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    ...mapActions({
      advancePackage: "packageList/fetchAdvancePackage",
    }),
    submit() {
      this.advancePackage({ type: "npm", name: this.searchText });
      this.searchText = "";
    },
  },
};
</script>
