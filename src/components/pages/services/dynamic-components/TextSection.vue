<template>
  <div class="text-[1rem]">
    <p>{{ section.content }}</p>
  </div>
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
