<template>
  <ul class="my-[12px] flex flex-col gap-[16px] text-black-75">
    <li
      v-for="(item, index) in section.items"
      :key="index"
      class="flex gap-[12px]"
    >
      <ClientOnly>
        <nuxt-img
          v-lazy="`/assets/images/vector2.svg`"
          class="w-[22px] h-[22px]"
          alt="Pros Checkmark"
          placeholder
          loading="lazy"
          aria-hidden="true"
        />
      </ClientOnly>
      {{ item }}
    </li>
  </ul>
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
