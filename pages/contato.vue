<template>
    <div class="flex flex-col gap-[100px]">
        <Hero title="Contato" />
        <div
            class="w-full flex flex-col gap-[32px] px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px]"
        >
            <div
                class="flex flex-col gap-[32px] md:grid md:grid-cols-[686fr_402fr]"
            >
                <div
                    class="flex flex-col gap-[24px] relative after:content-[''] after:absolute after:w-[50px] after:h-[50px] after:bg-no-repeat after:bg-contain after:right-0 after:top-[-24px] lg:after:top-[0px] lg:after:w-[120px] lg:after:h-[120px] lg:after:top-[20px] lg:after:right-[-32px] detail5"
                >
                    <TitleAndDescription
                        :subtitleText="contact.subtitle"
                        :titleText="contact.title"
                        :descriptionText="contact.description"
                    />
                    <form
                        class="flex flex-col gap-[24px]"
                        @submit.prevent="submitForm"
                    >
                        <div class="flex flex-col gap-[16px]">
                            <div class="flex flex-col gap-[8px]">
                                <label for="name" class="block font-bold"
                                    >Name<span class="text-[#B95757]"
                                        >*</span
                                    ></label
                                >
                                <input
                                    type="text"
                                    id="name"
                                    v-model="name"
                                    class="w-full bg-frosty-blue px-[16px] py-[12px] border rounded-[4px] focus:outline-none focus:ring placeholder-bg-[#444D55]"
                                    placeholder="Seu Nome"
                                />
                                <span v-if="errors.name" class="text-red-500">{{
                                    errors.name
                                }}</span>
                            </div>
                            <div class="flex flex-col gap-[8px]">
                                <label for="email" class="block font-bold"
                                    >Email<span class="text-[#B95757]"
                                        >*</span
                                    ></label
                                >
                                <input
                                    type="email"
                                    id="email"
                                    v-model="email"
                                    class="w-full bg-frosty-blue px-[16px] py-[12px] border rounded-[4px] focus:outline-none focus:ring placeholder-bg-[#444D55]"
                                    placeholder="Seu Email"
                                />
                                <span
                                    v-if="errors.email"
                                    class="text-red-500"
                                    >{{ errors.email }}</span
                                >
                            </div>
                            <div class="flex flex-col gap-[8px]">
                                <label for="message" class="block font-bold"
                                    >Message<span class="text-[#B95757]"
                                        >*</span
                                    ></label
                                >
                                <textarea
                                    id="message"
                                    class="w-full bg-frosty-blue px-[16px] py-[12px] border rounded-[4px] focus:outline-none focus:ring placeholder-bg-[#444D55]"
                                    rows="4"
                                    v-model="message"
                                    placeholder="Sua Mensagem"
                                ></textarea>
                                <span
                                    v-if="errors.message"
                                    class="text-red-500"
                                    >{{ errors.message }}</span
                                >
                            </div>
                        </div>
                        <div class="flex flex-col gap-[12px]">
                            <button type="submit" class="btn w-full">
                                Enviar
                            </button>

                            <span
                                v-if="status.message"
                                :class="
                                    status.success
                                        ? 'text-green-500'
                                        : 'text-red-500'
                                "
                                >{{ status.message }}</span
                            >
                            <p class="font-bold">
                                Ao enviar este formulário, você concorda com
                                nossa
                                <a
                                    href="/politica-de-privacidade"
                                    class="text-[#5784B9] underline"
                                    >Política de Privacidade</a
                                >.
                            </p>
                        </div>
                    </form>
                </div>
                <div
                    class="text-lavender-haze flex flex-col gap-[32px] bg-midnight-blue md:sticky md:top-[6px] p-[24px] rounded-[4px] h-fit"
                >
                    <h3 class="text-[16px] uppercase font-bold">
                        Contact Info
                    </h3>
                    <ul class="flex flex-col gap-[24px] text-[14px]">
                        <li v-for="(item, index) in listItems" :key="index">
                            <a
                                href="#"
                                class="uppercase font-bold flex w-full items-center gap-[8px] hover:brightness-75 border-solid border-b-[1px] pb-[8px]"
                            >
                                <ClientOnly>
                                    <nuxt-img
                                        class="h-[12px]"
                                        v-lazy="`/assets/images/${item.icon}`"
                                        alt="Logo"
                                        placeholder
                                        loading="lazy"
                                    />
                                </ClientOnly>

                                {{ item.name }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Hero from "src/components/common/Hero.vue";
import TitleAndDescription from "src/components/shared/TitleAndDescription.vue";
import content from "src/content.json";

export default {
    components: {
        Hero,
        TitleAndDescription,
    },
    data() {
        return {
            contact: content.contact,
            listItems: content.footerContact,
        };
    },
};
</script>

<script setup>
useHead({
    title: "Entre em Contato - RonaldoCoelhoNutri",
    meta: [
        {
            name: "description",
            content:
                "Entre em contato com Ronaldo Coelho, um nutricionista dedicado a melhorar sua saúde e bem-estar através de serviços personalizados de nutrição.",
        },
        {
            name: "keywords",
            content:
                "RonaldoCoelhoNutri, nutricionista, contato, saúde, bem-estar, nutrição",
        },
        {
            property: "og:title",
            content: "Entre em Contato - RonaldoCoelhoNutri",
        },
        {
            property: "og:description",
            content:
                "Entre em contato com Ronaldo Coelho, um nutricionista dedicado a melhorar sua saúde e bem-estar através de serviços personalizados de nutrição.",
        },
        { property: "og:type", content: "website" },
        {
            property: "og:url",
            content: "https://www.ronaldo-coelho-nutri.com/contact",
        }, // Replace with your actual Contact page URL
        {
            property: "og:image",
            content: "http://localhost:3000/assets/images/contact-image.jpg",
        }, // Replace with a URL to your Contact page image
        { name: "twitter:card", content: "summary_large_image" },
        {
            name: "twitter:title",
            content: "Entre em Contato - RonaldoCoelhoNutri",
        },
        {
            name: "twitter:description",
            content:
                "Entre em contato com Ronaldo Coelho, um nutricionista dedicado a melhorar sua saúde e bem-estar através de serviços personalizados de nutrição.",
        },
        {
            name: "twitter:image",
            content: "http://localhost:3000/assets/images/contact-image.jpg",
        }, // Replace with a URL to your Contact page image
    ],
    link: [
        {
            rel: "canonical",
            href: "https://www.ronaldo-coelho-nutri.com/contact",
        }, // Replace with your actual Contact page URL
    ],
});

const runtimeConfig = useRuntimeConfig();

import { ref } from "vue";
import emailjs from "emailjs-com";

const name = ref("");
const email = ref("");
const message = ref("");
const errors = ref({});
const status = ref({ success: false, message: "" });

const validateForm = () => {
    errors.value = {};

    if (!name.value) {
        errors.value.name = "Nome é obrigatório.";
    }

    if (!email.value) {
        errors.value.email = "E-mail é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        errors.value.email = "E-mail é inválido.";
    }

    if (!message.value) {
        errors.value.message = "Mensagem é obrigatória.";
    }

    return Object.keys(errors.value).length === 0;
};

const submitForm = async () => {
    if (!validateForm()) {
        return;
    }

    const templateParams = {
        from_name: name.value,
        from_email: email.value,
        message: message.value,
    };

    try {
        await emailjs.send(
            runtimeConfig.public.SERVICE_ID,
            runtimeConfig.public.TEMPLATE_ID,
            templateParams,
            runtimeConfig.public.USER_ID,
        );
        status.value = { success: true, message: "Email enviado com sucesso!" };
        name.value = "";
        email.value = "";
        message.value = "";
    } catch (error) {
        status.value = {
            success: false,
            message:
                "Falha ao enviar o e-mail. Por favor, tente novamente mais tarde.",
        };
    }
};
</script>

<style scoped>
.btn {
    font-size: 16px;
    font-weight: bold;
    padding: 12px 32px;
    background: #171b27;
    color: white;
    text-transform: uppercase;
    border-radius: 4px;
    cursor: pointer;
}

.btn:hover {
    background: linear-gradient(90deg, #171b27 0%, #1d2130 100%);
}

.btn:active {
    transform: translate(0em, 0.2em);
}
</style>
