<!-- src/components/common/Button.vue -->
<template>
  <a :href="href" :class="buttonClasses">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    buttonClasses: {
      type: String,
      default: "btn w-fit",
    },
  },
};
</script>

<style scoped>
.btn {
  font-size: 1rem;
  font-weight: bold;
  padding: 12px 32px;
  background: #317737;
  color: white;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background: linear-gradient(90deg, #317737 0%, #37843e 100%);
}

.btn:active {
  transform: translate(0em, 0.2em);
}
</style>
