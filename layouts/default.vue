<template>
  <div class="text-forest-night">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "src/components/common/Header.vue";
import AppFooter from "src/components/common/Footer.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
