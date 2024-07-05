<template>
  <div
    class="flex flex-col gap-[32px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px]"
  >
    <div class="px-[24px] lg:px-[80px]">
      <TitleSection :subtitle="text.mainSubtitle" :title="text.mainTitle" />
    </div>
    <div
      class="px-[24px] lg:px-[80px] flex flex-col gap-[32px] md:grid md:grid-cols-[470fr_618fr]"
    >
      <div class="flex md:justify-end h-fit">
        <div class="shadow-container rounded-[4px] h-fit">
          <ClientOnly>
            <nuxt-img
              class="w-[347px] h-fit object-contain shadow-image rounded-[4px] md:w-full"
              :src="`/assets/images/${text.image}`"
              :alt="`Imagem ${text.mainTitle}`"
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
          class="relative after:content-[''] after:absolute after:w-[150px] after:h-[150px] after:bg-no-repeat after:bg-contain after:right-0 after:top-[60px] lg:after:w-[365px] lg:after:h-[365px] lg:after:top-[50%] lg:after:right-[10%] detail4"
        >
          <TitleSection
            :subtitle="text.titleSection.subtitle"
            :title="text.titleSection.title"
            style-variant="subtitleVariant"
            container-variant="withoutBorder"
          />
        </div>
        <div class="flex flex-col gap-[16px] text-[1rem]">
          <p>{{ text.textSection[0] }}</p>
          <p>{{ text.textSection[1] }}</p>
          <p>{{ text.textSection[2] }}</p>
        </div>
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
      text: content.aboutIntroduction,
    };
  },
};
</script>
