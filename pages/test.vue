<template>
	<div>
		<form class="flex flex-col gap-[24px]" @submit.prevent="submitForm">
			<div class="flex flex-col gap-[16px]">
				<div class="flex flex-col gap-[8px]">
					<label for="name" class="block font-bold">
						Nome<span class="text-[#B95757]">*</span>
					</label>
					<input
						type="text"
						id="name"
						v-model="name"
						class="w-full bg-frosty-blue px-[16px] py-[12px] border rounded-[4px] focus:outline-none focus:ring placeholder-bg-[#444D55]"
						placeholder="Seu Nome"
					/>
					<span v-if="errors.name" class="text-red-500">{{ errors.name }}</span>
				</div>
				<div class="flex flex-col gap-[8px]">
					<label for="email" class="block font-bold">
						Email<span class="text-[#B95757]">*</span>
					</label>
					<input
						type="email"
						id="email"
						v-model="email"
						class="w-full bg-frosty-blue px-[16px] py-[12px] border rounded-[4px] focus:outline-none focus:ring placeholder-bg-[#444D55]"
						placeholder="Seu Email"
					/>
					<span v-if="errors.email" class="text-red-500">{{
						errors.email
					}}</span>
				</div>
				<div class="flex flex-col gap-[8px]">
					<label for="message" class="block font-bold">
						Mensagem<span class="text-[#B95757]">*</span>
					</label>
					<textarea
						id="message"
						v-model="message"
						class="w-full bg-frosty-blue px-[16px] py-[12px] border rounded-[4px] focus:outline-none focus:ring placeholder-bg-[#444D55]"
						rows="4"
						placeholder="Sua Mensagem"
					></textarea>
					<span v-if="errors.message" class="text-red-500">{{
						errors.message
					}}</span>
				</div>
			</div>
			<div class="flex flex-col gap-[12px]">
				<button type="submit" class="btn w-full">Submit</button>
				<span
					v-if="status.message"
					:class="status.success ? 'text-green-500' : 'text-red-500'"
					>{{ status.message }}</span
				>
			</div>
		</form>
	</div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()

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
		errors.value.name = "Name is required.";
	}

	if (!email.value) {
		errors.value.email = "Email is required.";
	} else if (!/\S+@\S+\.\S+/.test(email.value)) {
		errors.value.email = "Email is invalid.";
	}

	if (!message.value) {
		errors.value.message = "Message is required.";
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
/* Add your styles here */
</style>
