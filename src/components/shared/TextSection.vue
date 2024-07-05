<!-- components/shared/TitleSection.vue -->
<template>
  <div class="flex flex-col gap-[16px] text-[1rem]">
    <p>{{ description }}</p>
  </div>
</template>
<script>
export default {
  props: {
    description: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
/* You can add any additional styles here if needed */
</style>
