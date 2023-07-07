<script>
import Button from "./Button.vue";
export default {
	props: {
		heading: String,
		paragraph: String,
		image: String,
	},
	components: {
		Button,
	},
};
</script>

<template>
	<div class="space-y-4 rounded-[0.3125rem] border border-neutral600 bg-white p-4 shadow-shadowXSM">
		<div class="flex justify-between">
			<div class="flex items-center justify-center rounded-[1.875rem] bg-primary-25 p-2">
				<img :src="image" :alt="heading" class="" />
			</div>
			<Button
				text="Show more"
				classes="py-3 bg-white border text-[0.9375rem] font-semibold border-neutral700 shadow-shadowXSM px-[1.125rem] rounded-md"
			/>
		</div>
		<div class="space-y-2">
			<h2 class="text-[1.125rem] font-semibold">{{ heading }}</h2>
			<p class="">{{ paragraph }}</p>
		</div>
	</div>
</template>
