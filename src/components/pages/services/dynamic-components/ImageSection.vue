<template>
  <div class="my-[12px]">
    <ClientOnly>
      <nuxt-img
        v-lazy="`/assets/images/${section.src}`"
        :alt="section.alt"
        class="h-fit object-contain shadow-image rounded-[4px] w-full"
        placeholder
        loading="lazy"
        aria-hidden="true"
      />
    </ClientOnly>
  </div>
</template>

<script>
export default {
  props: {
    section: {
      type: Object,
      required: true,
    },
  },
};
</script>
