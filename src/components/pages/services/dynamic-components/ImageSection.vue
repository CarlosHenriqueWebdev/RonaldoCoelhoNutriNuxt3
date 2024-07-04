<template>
    <div class="my-[12px]">
        <ClientOnly>
            <nuxt-img
                v-lazy="`/assets/images/${section.src}`"
                :alt="section.alt"
                class="shadow-image w-full object-cover rounded-[4px]"
                placeholder
                loading="lazy"
            />
        </ClientOnly>
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
