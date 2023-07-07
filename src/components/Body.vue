<script>
import Button from "./Button.vue";
import Link from "./Link.vue";
import ReviewCard from "./ReviewCard.vue";
import TextContent from "./TextContent.vue";
export default {
	data() {
		return {
			heroImages: [
				{
					size: 375,
					src: "/assets/images/heroImg.png",
				},
				{
					size: 767,
					src: "/assets/images/heroImgMd.png",
				},
				{
					size: 2560,
					src: "/assets/images/heroImgLg.png",
				},
			],

			reviews: [
				{
					heading: "Wireless",
					paragraph: "Enim nec rhoncus volutpat nullam eros sapien pharetra.",
					image: "/assets/icons/wireless.svg",
					isMobile: false,
				},
				{
					heading: "Synergistic",
					paragraph: "Neque ut integer nulla tellus semper amet id scelerisque eros.",
					image: "/assets/icons/lightning.svg",
					isMobile: false,
				},
				{
					heading: "Distributed",
					paragraph: "Aliquet et cras nam sed mauris laoreet bibendum et.",
					image: "/assets/icons/user.svg",
					isMobile: false,
				},
				{
					heading: "Seamless",
					paragraph: "Lacus vulputate vel metus massa platea ut pellentesque turpis.",
					image: "/assets/icons/idea.svg",
					isMobile: false,
				},
				{
					heading: "Revolutionary",
					paragraph: "Mauris orci eget iaculis placerat euismod at urna posuere.",
					image: "/assets/icons/star.svg",
					isMobile: false,
				},
				{
					heading: "Web-enabled",
					paragraph: "Mauris orci eget iaculis placerat euismod at urna posuere.",
					image: "/assets/icons/globe.svg",
					isMobile: true,
				},
			],
		};
	},
	computed: {
		getHeroImage() {
			const width = window.innerWidth;
			const image = this.heroImages.find((image) => width <= image.size);
			return image.src;
		},
		showCard() {
			const width = window.innerWidth;
			return width <= 767 ? this.reviews.filter((review) => width && review.isMobile === !true) : this.reviews;
		},
	},
	components: {
		Button,
		Link,
		ReviewCard,
		TextContent,
	},
};
</script>

<template>
	<main class="">
		<section class="relative isolate bg-neutral50 pt-6">
			<div class="mx-auto w-[90%] space-y-6 md:space-y-8 lg:min-w-[80%] 2xl:w-[70%]">
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
				<img :src="getHeroImage" alt="hero-section image" class="" />
			</div>
		</section>
		<section class="py-8">
			<div class="mx-auto w-[90%] xl:w-[80%] 2xl:w-[70%]">
				<TextContent
					heading="Our Channels Review"
					paragraph="Organically
					grow
					the
					holistic
					world
					view
					of
					disruptive
					innovation
					via
					workplace
					diversity
					and
					empowerment."
					headingClass="text-[1.5rem] font-bold text-gray700"
					paragraphClass="text-gray50"
					containerClass="mb-8 space-y-3 text-center"
				/>
				<div class="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
					<ReviewCard
						v-for="review in showCard"
						:key="review.heading"
						:heading="review.heading"
						:paragraph="review.paragraph"
						:image="review.image"
					/>
				</div>
			</div>
		</section>
		<section class="bg-neutral50 py-8">
			<div class="mx-auto flex w-[90%] max-w-[70%] flex-col lg:w-[80%]">
				<TextContent
					heading="Redefining Product Features"
					paragraph="Keeping your eye on the ball while performing a deep dive on the start-up mentality to  derive convergence on cross-platform integration."
					headingClass="text-[1.5rem] font-bold text-gray700"
					paragraphClass="text-gray50"
					containerClass="mb-8 space-y-3 text-center"
				/>
			</div>
		</section>
	</main>
</template>
