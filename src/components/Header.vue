<script>
export default {
	name: "Header",
	data() {
		return {
			navOpen: false,
			links: [
				{
					name: "Home",
					path: "/",
					isResource: false,
					isMobile: false,
				},
				{
					name: "Our Products",
					path: "/products",
					isResource: false,
					isMobile: false,
				},
				{
					name: "Resources",
					path: "/resources",
					isResource: true,
					isMobile: true,
				},
				{
					name: "Contacts",
					path: "/contacts",
					isResource: false,
					isMobile: false,
				},
				{
					name: "Sign Up",
					path: "/signup",
					isResource: false,
					isMobile: true,
				},
				{
					name: "Login",
					path: "/login",
					isResource: false,
					isMobile: true,
				},
			],
		};
	},
	methods: {
		toggleNav() {
			this.navOpen = !this.navOpen;
		},
		signUpClasses(linkName) {
			return linkName === "Sign Up";
		},
		logInClasses(linkName) {
			return linkName === "Login";
		},
	},

	computed: {
		desktopCta() {
			return this.links.filter((link) => !link.isMobile || link.isResource);
		},
	},
};
</script>
<template>
	<header class="sticky bg-neutral50 border-b border-b-neutral600 ">
		<div
			class="header__container flex items-center justify-between p-4 font-semibold text-gray700 lg:min-w-[90%] xl:w-[80%]"
		>
			<img src="/assets/images/headerLogo.svg" alt="" class="" />
			<button
				:class="{ 'invisible scale-0': navOpen, 'visible scale-100': !navOpen }"
				class="header__container--menuToggle flex items-center justify-center transition duration-300 ease-in-out lg:hidden"
				@click="toggleNav"
			>
				<img src="/assets/icons/menu.svg" alt="" class="" />
			</button>
			<nav
				class="mobile-header__nav absolute inset-0 z-[2] flex h-[100dvh] w-[75%] flex-col bg-navBg1 p-4 transition duration-500 md:px-5 md:py-4 lg:hidden"
				:class="{ 'translate-x-0': navOpen, '-translate-x-full': !navOpen }"
			>
				<div
					class="mobile-header__nav--header mb-6 flex items-center justify-between border-b border-b-neutral600 pb-4 font-medium"
				>
					<img src="/assets/images/headerLogo.svg" alt="" class="" />
					<button class="header__container--menuToggle" @click="toggleNav">
						<img src="/assets/icons/close.svg" alt="" class="" />
					</button>
				</div>
				<ul class="mobile-header__nav--list space-y-4">
					<li v-for="link in links" :key="link.name" class="mobile-header__nav--listItem ">
						<a
							:to="link.path"
							class="mobile-header__nav--link md:text-2xl"
							:class="{
								'mt-6 block text-center text-primary-600': signUpClasses(link.name),
								'block w-full rounded-md bg-primary-600 px-[1.125rem] py-3 text-center text-white': logInClasses(
									link.name
								),
							}"
						>
							{{ link.name }}
						</a>
					</li>
				</ul>
			</nav>
			<nav class="desktop-header__nav hidden lg:block">
				<ul class="flex justify-between gap-8">
					<li v-for="link in desktopCta" :key="link.name" class="desktop-header__nav--listItem font-semibold">
						<a v-if="!link.isResource" :to="link.path" class="desktop-header__nav--link">
							{{ link.name }}
						</a>
						<div aria-labelledby="menu" class="flex gap-3" v-else-if="link.isResource">
							<span class="">{{ link.name }} </span>
							<img src="/assets/icons/chevDown.svg" alt="icon" class="" />
						</div>
					</li>
				</ul>
			</nav>
			<div class="hidden gap-6 lg:flex">
				<button class="font-semibold text-primary-600">Sign Up</button>
				<button class="rounded-md bg-primary-600 px-[1.125rem] py-3 font-semibold text-white">Log in</button>
			</div>
			<div v-if="navOpen" @click="toggleNav" class="overlay absolute inset-0 z-[1] h-[100dvh] w-full bg-black/50"></div>
		</div>
	</header>
</template>
