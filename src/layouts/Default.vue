<template>
  <div class="min-vh-100">
    <app-header />
    <section class="content">
      <slot />
    </section>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default {
  name: "Default",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
