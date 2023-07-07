<script>
import Button from "./Button.vue";
import Link from "./Link.vue";
import ReviewCard from "./ReviewCard.vue";
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

			reviews: [
				{
					heading: "Wireless",
					paragraph: "Enim nec rhoncus volutpat nullam eros sapien pharetra.",
					image: "/assets/icons/wireless.svg",
				},
				{
					heading: "Synergistic",
					paragraph: "Neque ut integer nulla tellus semper amet id scelerisque eros.",
					image: "/assets/icons/lightning.svg",
				},
				{
					heading: "Distributed",
					paragraph: "Aliquet et cras nam sed mauris laoreet bibendum et.",
					image: "/assets/icons/user.svg",
				},
				{
					heading: "Revolutionary",
					paragraph: "Mauris orci eget iaculis placerat euismod at urna posuere.",
					image: "/assets/icons/star.svg",
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
		ReviewCard,
	},
};
</script>

<template>
	<main class="">
		<section class="relative isolate bg-neutral50 pt-6">
			<div class="mx-auto w-[90%] space-y-6 md:space-y-8 lg:min-w-[80%]">
				<div class="text__content text-center">
					<h1
						class="mb-4 text-[2.25rem] font-semibold leading-[1.3] md:mx-auto md:mb-6 md:w-[80%] md:text-[3.25rem] md:font-bold"
					>
						Your Supercharged Design Workflow.
					</h1>
					<p class="text-[1.125rem] text-gray50 md:px-4">
						We&apos;ve been told it is possible to revolutionize the payment industry. We have not reinvented the wheel,
						we decided to build upon it - successfully.
					</p>
					<div
						class="text__content--cta mt-6 flex flex-col gap-4 font-semibold md:mt-[2.25rem] md:flex-row md:justify-center"
					>
						<Link
							url="#"
							text="Get Started"
							classes="py-3 block text-white bg-primary-600 shadow-shadowXSM px-[1.125rem] rounded-md"
						/>
						<Link
							url="#"
							text="Contact Us"
							classes="py-3 block border border-neutral700 bg-white shadow-shadowXSM rounded-md px-[1.125rem]"
						/>
					</div>
				</div>
				<img :src="getHeroImage()" alt="" class="" />
			</div>
			<!-- <div class="absolute w-full h-[50px] bg-white bottom-[-1rem] z-[-1] border-t-transparent border-t-[20px]  border-b-[20px] rounded-t-[40%] rotate-180"></div> -->
		</section>
		<section class="mt-8">
			<div class="mx-auto w-[90%]">
				<div class="mb-8 space-y-3 text-center">
					<h2 class="text-[1.5rem] font-bold text-gray700">Our Channels Review</h2>
					<p class="text-gray50">
						Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
					</p>
				</div>
				<div class="flex flex-col gap-4">
					<ReviewCard
						v-for="review in reviews"
						:key="review.heading"
						:heading="review.heading"
						:paragraph="review.paragraph"
						:image="review.image"
					/>
				</div>
			</div>
		</section>
	</main>
</template>
