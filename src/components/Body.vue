<script>
import Button from "./Button.vue";
import Link from "./Link.vue";
export default {
	data() {
		return {
			heroImages: [
				{
					size: 375,
					src: "/assets/images/heroImg.png",
				},
				{
					size: 768,
					src: "/assets/images/heroImgMd.png",
				},
				{
					size: 1024,
					src: "/assets/images/heroImgLg.png",
				},
			],
		};
	},
	methods: {
		getHeroImage() {
			const width = window.innerWidth;
			const image = this.heroImages.find((image) => width <= image.size);
			return image.src;
		},
	},
	components: {
		Button,
		Link,
	},
};
</script>

<template>
	<main class="">
		<section class="pt-6">
			<div class="mx-auto w-[90%] space-y-6">
				<div class="text__content text-center">
					<h1 class="mb-4 text-[2.25rem] font-semibold leading-[1.3]">Your Supercharged Design Workflow.</h1>
					<p class="text-[1.125rem] text-gray50">
						We’ve been told it is possible to revolutionize the payment industry. We have not reinvented the wheel, we
						decided to build upon it - successfully.
					</p>
					<div class="text__content--cta mt-6 flex flex-col gap-4 font-semibold">
						<Link
							url="#"
							text="Get Started"
							classes="py-3 block text-white bg-primary-600 shadow-shadowXSM px-[1.125rem] rounded-md"
						/>
						<Link
							url="#"
							text="Learn More"
							classes="py-3 block border border-neutral700 bg-white shadow-shadowXSM rounded-md"
						/>
					</div>
				</div>
				<img :src="getHeroImage()" alt="" class="" />
			</div>
		</section>
	</main>
</template>
