<template>
  <div
    class="mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] px-[24px] lg:px-[80px] flex flex-col gap-[32px] md:grid md:grid-cols-[1.15fr_2fr]"
  >
    <div class="flex md:justify-end h-fit lg:h-full">
      <div class="shadow-container rounded-[4px] !h-fit">
        <ClientOnly>
          <nuxt-img
            class="w-[347px] h-fit object-contain shadow-image rounded-[4px] md:w-full"
            :src="`/assets/images/${text.image}`"
            alt="Logo"
            placeholder
            loading="lazy"
            aria-hidden="true"
          />
        </ClientOnly>
      </div>
    </div>

    <div class="flex flex-col gap-[16px] md:pt-[16px]">
      <div
        id="main-content"
        class="relative after:content-[''] after:absolute after:w-[150px] after:h-[150px] after:bg-no-repeat after:bg-contain after:right-0 after:top-[60px] lg:after:w-[200px] lg:after:h-[200px] lg:after:top-[0px] lg:after:w-[190px] lg:after:h-[190px] lg:after:top-[50%] lg:after:right-[50%] detail1"
      >
        <TitleSection
          :subtitle="text.titleSection.subtitle"
          :title="text.titleSection.title"
        />
      </div>

      <div class="flex flex-col gap-[16px] text-[1rem]">
        <p>{{ text.textSection[0] }}</p>
        <p>{{ text.textSection[1] }}</p>
        <p>{{ text.textSection[2] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import TitleSection from "src/components/shared/TitleSection.vue";
import content from "src/content.json";

export default {
  components: {
    TitleSection,
  },
  data() {
    return {
      text: content.homeIntroduction,
    };
  },
};
</script>
