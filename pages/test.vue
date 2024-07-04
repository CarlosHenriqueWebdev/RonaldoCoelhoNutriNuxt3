<template>
	<div class="flex flex-col !gap-[100px] py-[220px]">
		<div class="h-[500vh] bg-green-100"></div>
		<nuxt-img
			class="object-contain h-fit max-w-[320px] md:max-w-full w-full shadow-image rounded-[4px] object-top"
			v-lazy="'/assets/images/img1.jpg'"
			placeholder
			loading="lazy"
			alt="Profile Image"
		/>
		<div class="h-[500vh] bg-blue-100"></div>
	</div>
</template>

<script setup>
// No additional setup needed here
</script>

<style scoped>
/* Add any specific styles here */
</style>
