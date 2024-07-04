<template>
    <div class="bg-midnight-blue">
        <div
            class="mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] px-[24px] py-[80px] lg:px-[80px] flex flex-col gap-[32px] text-lavender-haze md:flex-row"
        >
            <ClientOnly>
                <nuxt-img
                    v-lazy="`/assets/images/detail5.png`"
                    class="w-[126px] h-[126px]"
                    alt="Logo"
                    placeholder
                    loading="lazy"
                />
            </ClientOnly>
            <TitleAndDescription
                :title-text="aboutText.title"
                :description-text="aboutText.description"
                without-span-variant="withoutSpan"
            />
        </div>
    </div>
</template>
<script>
import content from "src/content.json";
import TitleAndDescription from "src/components/shared/TitleAndDescription.vue";

export default {
    components: {
        TitleAndDescription,
    },
    data() {
        return {
            aboutText: content.aboutMessage,
        };
    },
};
</script>
<style scoped>
@media (min-width: 768px) {
    .bg-gradient {
        background: linear-gradient(
            90deg,
            #171b27 0%,
            rgba(23, 27, 39, 0.95) 50%,
            rgba(23, 27, 39, 0) 100%
        ) !important;
    }
}
</style>
