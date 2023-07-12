<script>
import Button from "./Button.vue";
export default {
	data() {
		return {
			featuresImg: [
				{
					size: 375,
					src: "/assets/images/features.png",
				},
				{
					size: 768,
					src: "/assets/images/featuresMd.png",
				},
				{
					size: 2560,
					src: "/assets/images/featuresLg.png",
				},
			],
		};
	},
	computed: {
		getFeaturesImage() {
			const width = window.innerWidth;
			const image = this.featuresImg.find((image) => width <= image.size);
			return image.src;
		},
	},
	components: {
		Button,
	},
	props: {
		topText: String,
		heading: String,
		paragraph: String,
		containerClass: String,
		headingClass: String,
		paragraphClass: String,
	},
};
</script>

<template>
	<div class="space-y-8 md:space-y-10 lg:flex lg:flex-row-reverse lg:justify-between lg:items-center" :class="containerClass">
		<div class="lg:w-[40%] xl:w-[42%]">
			<img :src="getFeaturesImage" alt="Some of our features" class="" />
		</div>
		<div class="text-left lg:w-[55%] xl:w-[45%]">
			<p class="mb-2 text-[0.875rem] font-semibold text-primary-600">1% OF THE INDUSTRY</p>
			<div class="mb-8 space-y-4 md:mb-10">
				<h2 :class="headingClass">Demonstrate branding consequently think outside the box and beyond.</h2>
				<p :class="paragraphClass">
					Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt.
					Aenean malesuada tellus tellus faucibus mauris quisque mauris in.
				</p>
			</div>
			<Button
				text="Start Now"
				classes="py-3 text-[0.9375rem] font-semibold flex items-center gap-[0.38rem] text-white bg-primary-600 shadow-shadowXSM px-[1.125rem] rounded-[0.375rem]"
				icon="/assets/icons/rightArr.svg"
				:showArr="true"
			/>
		</div>
	</div>
</template>
