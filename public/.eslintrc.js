module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:vue/vue3-recommended", // Use this if you are using Vue 3
		"@vue/prettier",
		"@vue/typescript", // If using TypeScript
	],
	plugins: ["vue", "prettier"],
	rules: {
		// Additional rules can be added here
	},
};
