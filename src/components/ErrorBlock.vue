<template>
  <p>{{ title }}</p>
</template>

<script>
export default {
  name: "ErrorBlock.vue",
  props: {
    title: {
      type: String,
      defaule: "",
    },
  },
};
</script>

<style scoped></style>
