<!-- pages/Home.vue -->
<template>
  <div class="flex flex-col !gap-[100px]">
    <HeroSwiper />
    <Introduction />
    <About />
    <Testimonials /> 
    <Services />
  </div>
</template>

<script>
import HeroSwiper from 'src/components/pages/home/HeroSwiper.vue';
import Introduction from 'src/components/pages/home/Introduction.vue';
import About from 'src/components/pages/home/About.vue';
import Testimonials from 'src/components/pages/home/Testimonials.vue';
import Services from 'src/components/pages/home/Services.vue';

export default {
  components: {
    HeroSwiper,
    Introduction,
    About,
    Testimonials,
    Services
  }
};
</script>

<script setup>
useHead({
  title: 'RonaldoCoelhoNutri - Saúde e Bem-estar',
  meta: [
    { name: 'description', content: 'Descubra como melhorar sua saúde e bem-estar com Ronaldo Coelho, nutricionista exemplar. Oferecemos serviços personalizados de nutrição e dietas para todas as necessidades.' },
    { name: 'keywords', content: 'RonaldoCoelhoNutri, nutricionista, saúde, bem-estar, dietas personalizadas, nutrição, alimentação saudável, emagrecimento, ganho de massa muscular' },
    { property: 'og:title', content: 'RonaldoCoelhoNutri - Saúde e Bem-estar' },
    { property: 'og:description', content: 'Descubra como melhorar sua saúde e bem-estar com Ronaldo Coelho, nutricionista exemplar. Oferecemos serviços personalizados de nutrição e dietas para todas as necessidades.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.ronaldo-coelho-nutri.com' }, // Replace with your actual site URL
    { property: 'og:image', content: 'http://localhost:3000/assets/images/detail1.png' }, // Replace with a URL to your site's main image
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'RonaldoCoelhoNutri - Saúde e Bem-estar' },
    { name: 'twitter:description', content: 'Descubra como melhorar sua saúde e bem-estar com Ronaldo Coelho, nutricionista exemplar. Oferecemos serviços personalizados de nutrição e dietas para todas as necessidades.' },
    { name: 'twitter:image', content: 'http://localhost:3000/assets/images/detail1.png' } // Replace with a URL to your site's main image
  ],
  link: [
    { rel: 'canonical', href: 'https://www.ronaldo-coelho-nutri.com' } // Replace with your actual site URL
  ]
})
</script>

<style scoped>
/* Add any Home.vue specific styles here */
</style>
