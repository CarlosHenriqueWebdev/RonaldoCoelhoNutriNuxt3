<template>
  <ul>
    <li
      v-for="(item, index) in listItems"
      :key="index"
      :class="[index % 2 === 0 ? 'bg-midnight-blue' : 'bg-slate-black']"
      class="py-[80px] text-lavender-haze"
    >
      <div
        :class="[
          index % 2 === 0
            ? 'md:grid-cols-[666fr_422fr]'
            : 'md:grid-cols-[422fr_666fr]',
        ]"
        class="mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px] md:grid px-[24px] lg:px-[80px]"
      >
        <div
          :class="[index % 2 === 0 ? 'md:justify-start' : 'md:justify-end']"
          class="flex h-fit"
        >
          <div
            :class="[index % 2 === 0 ? 'slate-container' : 'shadow-container']"
            class="md:max-w-full shadow-container rounded-[4px] h-fit w-full"
          >
            <ClientOnly>
              <nuxt-img
                v-lazy="`/assets/images/${item.image}`"
                class="w-[347px] h-fit object-contain shadow-image rounded-[4px] md:w-full"
                :alt="`${index}° Imagem`"
                placeholder
                loading="lazy"
                aria-hidden="true"
              />
            </ClientOnly>
          </div>
        </div>
        <div
          :class="[index % 2 === 0 ? 'md:order-[-1]' : '']"
          class="flex flex-col gap-[16px] md:pt-[16px] lg:pb-[80px]"
        >
          <TitleAndDescription
            :title-text="item.title"
            :description-text="item.description"
            without-span-variant="withoutSpan"
          />
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
import TitleAndDescription from "src/components/shared/TitleAndDescription.vue";
import content from "src/content.json";

export default {
  components: {
    TitleAndDescription,
  },
  data() {
    return {
      listItems: content.aboutHistoryMissionAndVision,
    };
  },
};
</script>
