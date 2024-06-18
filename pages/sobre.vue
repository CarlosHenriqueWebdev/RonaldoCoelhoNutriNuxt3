<!-- pages/Home.vue -->
<template>
  <div class="flex flex-col gap-[100px]">
    <Hero title="Sobre Nós" />
    <Introduction />
    <HistoryMissionVision />
    <Values />
    <Message />
    <MeetOurTeam />
  </div>
</template>

<script>
import Hero from 'src/components/common/Hero.vue';
import Introduction from 'src/components/pages/about/Introduction.vue';
import HistoryMissionVision from 'src/components/pages/about/HistoryMissionVision.vue';
import MeetOurTeam from 'src/components/pages/about/MeetOurTeam.vue';
import Message from 'src/components/pages/about/Message.vue';
import Values from 'src/components/pages/about/Values.vue';

export default {
  components: {
    Hero,
    Introduction,
    HistoryMissionVision,
    MeetOurTeam,
    Message,
    Values,
  },
};
</script>

<script setup>
useHead({
  title: 'Sobre Ronaldo Coelho - RonaldoCoelhoNutri',
  meta: [
    { name: 'description', content: 'Saiba mais sobre Ronaldo Coelho, um nutricionista dedicado a melhorar sua saúde e bem-estar através de serviços personalizados de nutrição.' },
    { name: 'keywords', content: 'RonaldoCoelhoNutri, nutricionista, sobre, saúde, bem-estar, nutrição' },
    { property: 'og:title', content: 'Sobre Ronaldo Coelho - RonaldoCoelhoNutri' },
    { property: 'og:description', content: 'Saiba mais sobre Ronaldo Coelho, um nutricionista dedicado a melhorar sua saúde e bem-estar através de serviços personalizados de nutrição.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.ronaldo-coelho-nutri.com/about' }, // Replace with your actual About page URL
    { property: 'og:image', content: 'http://localhost:3000/assets/images/about-image.jpg' }, // Replace with a URL to your About page image
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Sobre Ronaldo Coelho - RonaldoCoelhoNutri' },
    { name: 'twitter:description', content: 'Saiba mais sobre Ronaldo Coelho, um nutricionista dedicado a melhorar sua saúde e bem-estar através de serviços personalizados de nutrição.' },
    { name: 'twitter:image', content: 'http://localhost:3000/assets/images/about-image.jpg' } // Replace with a URL to your About page image
  ],
  link: [
    { rel: 'canonical', href: 'https://www.ronaldo-coelho-nutri.com/sobre' } // Replace with your actual About page URL
  ]
});
</script>

<style scoped>
/* Add any Home.vue specific styles here */
</style>
