<template>
  <div
    class="mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px] px-[24px] lg:px-[80px]"
  >
    <div>
      <TitleSection
        :subtitle="servicesText.subtitle"
        :title="servicesText.title"
      />
    </div>

    <ul class="flex flex-col gap-[64px]">
      <li
        v-for="(item, index) in listItems"
        :key="index"
        class="flex flex-col gap-[32px] md:grid md:grid-cols-[1fr_2fr]"
      >
        <ClientOnly>
          <nuxt-img
            v-lazy="`/assets/images/${item.image}`"
            class="max-w-[320px] md:max-w-full w-full h-fit object-contain shadow-image rounded-[4px]"
            :alt="item.title"
            placeholder
            loading="lazy"
            aria-hidden="true"
          />
        </ClientOnly>
        <div class="flex flex-col gap-[24px] md: py-[16px]">
          <TitleAndDescription
            :subtitle-text="item.subtitle"
            :title-text="item.title"
            :description-text="item.description"
            style-variant="subtitleVariant"
          />
          <div class="flex flex-col gap-[32px]">
            <ul
              class="flex flex-col gap-[16px] text-black-75"
              :class="{
                'relative after:content-[\'\'] after:absolute after:w-[210px] after:h-[210px] after:bg-no-repeat after:bg-contain after:right-0 after:top-[50%] lg:after:w-[200px] lg:after:h-[200px] lg:after:top-[0px] md:after:w-[300px] md:after:h-[300px] detail3':
                  index === 0,
              }"
            >
              <li
                v-for="(pro, proIndex) in item.pros"
                :key="proIndex"
                class="flex gap-[12px]"
              >
                <ClientOnly>
                  <nuxt-img
                    v-lazy="`/assets/images/vector2.svg`"
                    class="w-[22px] h-[22px]"
                    alt="Vantagem icone"
                    width="22"
                    height="22"
                    placeholder
                    loading="lazy"
                    aria-hidden="true"
                  />
                </ClientOnly>

                {{ pro }}
              </li>
            </ul>
            <SecondaryButton :href="`/servicos/${item.slug}`"
              >Saiba mais</SecondaryButton
            >
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import TitleSection from "src/components/shared/TitleSection.vue";
import TitleAndDescription from "src/components/shared/TitleAndDescription.vue";
import content from "src/content.json";
import SecondaryButton from "src/components/common/SecondaryButton.vue";

export default {
  components: {
    TitleSection,
    TitleAndDescription,
    SecondaryButton,
  },
  data() {
    return {
      // Extracting only the titles from the content.json file
      servicesText: content.homeServicesTitle,
      listItems: content.generalServices,
    };
  },
};
</script>
<style scoped>
/* You can add any additional styles here if needed */
</style>
