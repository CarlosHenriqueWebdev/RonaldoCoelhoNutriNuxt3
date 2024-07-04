<template>
    <ul class="my-[12px] flex flex-col gap-[16px] text-black-75">
        <li
            v-for="(item, index) in section.items"
            :key="index"
            class="flex gap-[12px]"
        >
            <ClientOnly>
                <nuxt-img
                    class="w-[22px] h-[22px]"
                    v-lazy="`/assets/images/vector2.svg`"
                    alt="Logo"
                    placeholder
                    loading="lazy"
                />
            </ClientOnly>
            {{ item }}
        </li>
    </ul>
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
