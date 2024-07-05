<template>
  <div>
    <div
      v-if="service && service.title !== 'Service Not Found'"
      class="flex flex-col gap-[100px]"
    >
      <Hero :title="service.title" />
      <Service :service="service" />
    </div>
    <div
      v-else-if="service && service.title === 'Service Not Found'"
      class="flex flex-col gap-[100px]"
    >
      <Hero title="Serviço não encontrado" />
      <div
        class="flex flex-col px-[24px] lg:px-[80px] gap-[32px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] w-full"
      >
        <TitleSection
          subtitle="Choice"
          title=" Por favor, selecione um serviço válido abaixo."
        />
        <ul
          class="flex flex-col gap-[24px] bg-midnight-blue p-[24px] rounded-[4px] text-lavender-haze text-[0.875rem] md:sticky md:top-[6px]"
        >
          <li v-for="(item, index) in listItems" :key="index">
            <a
              :href="`/servicos/${item.slug}`"
              class="uppercase font-bold flex w-full items-center justify-between hover:brightness-75 border-solid border-b-[1px] pb-[8px]"
            >
              {{ item.title }}
              <ClientOnly>
                <nuxt-img
                  v-lazy="`src/assets/images/vector10.svg`"
                  class="h-[12px]"
                  alt="Seta para baixo"
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
    <div v-else class="flex flex-col gap-[100px]">
      <Hero title="Servicos" />
      <div
        class="flex flex-col px-[24px] lg:px-[80px] gap-[32px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] w-full"
      >
        <TitleSection subtitle="Choice" title="Selecione um Serviço" />
        <ul
          class="flex flex-col gap-[24px] bg-midnight-blue p-[24px] rounded-[4px] text-lavender-haze text-[0.875rem] md:sticky md:top-[6px]"
        >
          <li v-for="(item, index) in listItems" :key="index">
            <a
              :href="`/servicos/${item.slug}`"
              class="uppercase font-bold flex w-full items-center justify-between hover:brightness-75 border-solid border-b-[1px] pb-[8px]"
            >
              {{ item.title }}
              <ClientOnly>
                <nuxt-img
                  v-lazy="`/assets/images/vector10.svg`"
                  class="h-[12px]"
                  alt="Seta para baixo"
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
import Hero from "src/components/common/Hero.vue";
import Service from "src/components/pages/services/Service.vue";
import content from "src/content.json";
import TitleSection from "src/components/shared/TitleSection.vue";

export default {
  components: {
    Hero,
    Service,
    TitleSection,
  },
  data() {
    return {
      listItems: content.generalServices,
      service: null,
      content: content,
    };
  },
  created() {
    const slug = this.$route.params.slug;
    if (slug) {
      this.fetchService(slug);
    }
  },
  methods: {
    fetchService(slug) {
      const service = this.content.generalServices.find(
        (item) => item.slug === slug
      );
      this.service = service || {
        title: "Service Not Found",
        description: "",
      };
    },
  },
};
</script>
<style scoped>
/* Add any specific styles here */
</style>
