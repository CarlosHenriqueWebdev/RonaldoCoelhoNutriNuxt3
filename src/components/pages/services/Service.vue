<template>
  <div
    class="flex flex-col gap-[32px] px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px]"
  >
    <TitleSection :subtitle="service.subtitle" :title="service.title" />
    <div class="flex flex-col gap-[32px] md:grid md:grid-cols-[686fr_402fr]">
      <div class="flex flex-col gap-[32px]">
        <ClientOnly>
          <nuxt-img
            v-lazy="`/assets/images/${service.landscapeImage}`"
            class="h-fit object-contain shadow-image rounded-[4px] w-full"
            :alt="service.title"
            placeholder
            loading="lazy"
            aria-hidden="true"
          />
        </ClientOnly>

        <div class="flex flex-col gap-[32px]">
          <!-- Dynamic Sections -->
          <div class="flex flex-col gap-[16px]">
            <DynamicRender :service="service" />
          </div>
          <!-- Static Section: FAQ -->
          <div
            class="flex flex-col gap-[32px] relative after:content-[''] after:absolute after:w-[200px] after:h-[200px] after:bg-no-repeat after:bg-contain after:right-0 after:top-[-24px] lg:after:w-[350px] lg:after:h-[350px] lg:after:top-[-50px] lg:after:right-[-50px] detail8"
          >
            <TitleSection
              title="FAQ (Perguntas Frequentes)"
              without-span-variant="withoutSpan"
            />
            <ul class="flex flex-col gap-[16px]">
              <li
                v-for="(item, index) in service.faq"
                :key="item.question"
                class="cursor-pointer flex flex-col gap-[16px] text-lavender-haze bg-[#262931] p-[24px] text-[1rem] rounded-[4px] hover:brightness-75"
                @click="toggleAnswer(index)"
              >
                <div
                  class="flex w-full items-center justify-between"
                  :class="
                    activeIndexes.includes(index)
                      ? 'border-solid border-b-[1px] border-misty-sky pb-[8px]'
                      : ''
                  "
                >
                  <h3 class="w-fit uppercase font-bold">
                    {{ item.question }}
                  </h3>
                  <ClientOnly>
                    <nuxt-img
                      v-lazy="`/assets/images/vector8.svg`"
                      class="h-[12px]"
                      alt="Seta"
                      placeholder
                      loading="lazy"
                      aria-hidden="true"
                    />
                  </ClientOnly>
                </div>
                <p v-if="activeIndexes.includes(index)">
                  {{ item.answer }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <ul
          class="flex flex-col gap-[24px] bg-midnight-blue p-[24px] rounded-[4px] text-lavender-haze text-[0.875rem] md:sticky md:top-[6px]"
        >
          <li v-for="(item, index) in listItems" :key="index">
            <a
              :href="`/servicos/${item.slug}`"
              class="uppercase font-bold flex w-full items-center justify-between hover:brightness-75 border-solid border-b-[1px] pb-[8px]"
              :class="
                item.title === service.title
                  ? 'border-fresh-leaf text-fresh-leaf'
                  : 'border-misty-sky'
              "
            >
              {{ item.title }}
              <ClientOnly>
                <nuxt-img
                  v-lazy="
                    `/assets/images/${
                      item.title === service.title
                        ? 'vector11.svg'
                        : 'vector10.svg'
                    }`
                  "
                  class="h-[12px]"
                  alt="Seta apontando para a direita"
                  placeholder
                  loading="lazy"
                  aria-hidden="true"
                />
              </ClientOnly>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import TitleSection from "src/components/shared/TitleSection.vue";
import DynamicRender from "src/components/pages/services/DynamicRender.vue"; // Import your DynamicRender component
import content from "src/content.json";

export default {
  components: {
    TitleSection,
    DynamicRender, // Register the DynamicRender component
  },
  props: {
    service: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      listItems: content.generalServices,
      activeIndexes: [],
    };
  },
  created() {
    if (this.service.faq.length > 0) {
      this.activeIndexes.push(0); // Push the index of the first item
    }
  },
  methods: {
    toggleAnswer(index) {
      if (this.activeIndexes.includes(index)) {
        this.activeIndexes = this.activeIndexes.filter((i) => i !== index);
      } else {
        this.activeIndexes.push(index);
      }
    },
  },
};
</script>
<style scoped>
/* Add any specific styles here */
</style>
