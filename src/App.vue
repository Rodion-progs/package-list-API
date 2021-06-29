<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>
<script>
export default {
  computed: {
    layout() {
      //Вернем имя шаблона из роута или дефолтное значение
      //(шаблон для страниц, для которых мы не указали шаблон)
      return this.$route.meta.layout || "default-layout";
    },
  },
};
</script>
