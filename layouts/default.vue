<template>
  <div class="text-forest-night">
    <Header />
    <main>
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from 'src/components/common/Header.vue';
import Footer from 'src/components/common/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
