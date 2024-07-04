<template>
  <div class="flex flex-col gap-[16px]">
    <div :class="detailClass" class="relative">
      <TitleSection
        :subtitle="subtitleText"
        :title="titleText"
        :without-span-variant="withoutSpanVariant"
        :container-variant="containerVariant"
        :style-variant="styleVariant"
      />
    </div>
    <TextSection :description="descriptionText" />
  </div>
</template>

<script>
import TitleSection from "./TitleSection.vue";
import TextSection from "./TextSection.vue";

export default {
  components: {
    TitleSection,
    TextSection,
  },
  props: {
    titleText: {
      type: String,
      required: true,
      default: "",
    },
    subtitleText: {
      type: String,
      required: true,
      default: "",
    },
    descriptionText: {
      type: String,
      required: true,
      default: "",
    },
    detailVariant: {
      type: String,
      default: "",
    },
    withoutSpanVariant: {
      type: String,
      default: "",
    },
    containerVariant: {
      type: String,
      default: "",
    },
    styleVariant: {
      type: String,
      default: "",
    },
  },
  computed: {
    detailClass() {
      return `${this.detailVariant}`;
    },
  },
};
</script>

<style scoped>
/* You can add any additional styles here if needed */
</style>
