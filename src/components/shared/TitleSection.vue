<template>
  <div :class="containerClass">
    <span :class="subtitleClass" aria-hidden="true">{{ subtitle }}</span>
    <component :is="titleTag" :class="titleClass">{{ title }}</component>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    styleVariant: {
      type: String,
      default: "",
    },
    containerVariant: {
      type: String,
      default: "",
    },
    withoutSpanVariant: {
      type: String,
      default: "",
    },
  },
  computed: {
    titleTag() {
      return this.styleVariant === "subtitleVariant" ? "h3" : "h2";
    },
    titleClass() {
      return this.styleVariant === "subtitleVariant"
        ? "text-[1.25rem] font-bold uppercase"
        : "text-[1.5rem] font-bold uppercase";
    },
    subtitleClass() {
      return this.withoutSpanVariant === "withoutSpan"
        ? "hidden"
        : this.styleVariant === "subtitleVariant"
          ? "text-[1rem] text-detail-color font-medium !font-accent uppercase"
          : "text-[1.125rem] text-detail-color font-medium !font-accent uppercase";
    },
    containerClass() {
      return this.containerVariant === "withoutBorder"
        ? "flex flex-col gap-[6px]"
        : "flex flex-col gap-[6px] border-solid border-b-[1px] border-misty-sky pb-[8px]";
    },
  },
};
</script>

<style scoped>
/* You can add any additional styles here if needed */
</style>
