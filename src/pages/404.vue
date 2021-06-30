<template>
  <div
    class="d-flex align-items-center justify-content-center text-center my-5"
  >
    <section>
      <b-container>
        <h1 class="title">PAGE NOT FOUND!</h1>
        <p>Go to <router-link class="link" to="/">main page?</router-link></p>
      </b-container>
    </section>
  </div>
</template>
<script>
import { BContainer } from "bootstrap-vue";

export default {
  name: "notFound",
  components: {
    BContainer,
  },
};
</script>
