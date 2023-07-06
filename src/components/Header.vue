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
	},

	computed: {
		desktopCta() {
			return this.links.filter((link) => !link.isMobile || link.isResource);
		},
	},
};
</script>
<template>
	<header class="">
		<div class="header__container">
			<img src="/assets/images/headerLogo.svg" alt="" class="" />
			<button :class="{ hide: navOpen }" class="header__container--menuToggle" @click="toggleNav">
				<img src="/assets/icons/menu.svg" alt="" class="" />
			</button>
			<nav class="mobile-header__nav" :class="{ slide: navOpen }">
				<div class="mobile-header__nav--header">
					<img src="/assets/images/headerLogo.svg" alt="" class="" />
					<button class="header__container--menuToggle" @click="toggleNav">
						<img src="/assets/icons/close.svg" alt="" class="" />
					</button>
				</div>
				<ul class="mobile-header__nav--list">
					<li v-for="link in links" :key="link.name" class="mobile-header__nav--listItem">
						<router-link :to="link.path" class="mobile-header__nav--link">
							{{ link.name }}
						</router-link>
					</li>
				</ul>
			</nav>
			<nav class="desktop-header__nav">
				<ul class="flex justify-between gap-8">
					<li v-for="link in desktopCta" :key="link.name" class="desktop-header__nav--listItem">
						<router-link v-if="!link.isResource" :to="link.path" class="desktop-header__nav--link">
							{{ link.name }}
						</router-link>
						<span class="" v-else-if="link.isResource">{{ link.name }} </span>
					</li>
				</ul>
			</nav>
			<div class="flex gap-6">
				<button class="font-semibold text-primary-600">Sign Up</button>
				<button class="rounded-md bg-primary-600 px-[1.125rem] py-3 font-semibold text-white">Log in</button>
			</div>
			<div v-if="navOpen" @click="toggleNav" class="overlay"></div>
		</div>
	</header>
</template>
<style scoped>
header {
	position: sticky;
	border-bottom: 1px solid var(--neutral-600);
}

.header__container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	width: 100%;
	margin: 0 auto;
}

.header__container--menuToggle {
	display: flex;
	justify-content: center;

	align-items: center;
	background: transparent;
	border: none;
	cursor: pointer;
	transition: 0.25s ease-in-out;
}

.header__container--menuToggle:focus {
	outline: 1px solid rgba(0, 0, 0, 0.571);
}

.header__container--menuToggle.hide {
	visibility: hidden;
	transform: scale(0);
}

.mobile-header__nav,
.overlay {
	display: flex;
	flex-direction: column;
	position: absolute;
	inset: 0;
	width: 75%;
	height: 100dvh;
	background: var(--navBg1);
	z-index: 2;
	padding: 1rem;
	transition: 0.5s ease-in-out;
	transform: translateX(-100%);
}

.overlay {
	background: rgba(0, 0, 0, 0.5);
	z-index: 1;
	width: 100%;
	transform: translateX(0);
}

.mobile-header__nav.slide {
	transform: translateX(0);
}

.mobile-header__nav--header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2rem;
	padding-bottom: 1rem;
	border-bottom: 1px solid var(--neutral-600);
}

.mobile-header__nav--listItem {
	margin: 1rem 0;
}

.desktop-header__nav,
.header__container--cta {
	display: none;
}

@media (min-width: 768px) {
	.mobile-header__nav {
		padding: 1rem 1.5rem;
	}

	.mobile-header__nav--link {
		font-size: 1.5rem;
	}
}

@media (min-width: 1024px) {
	.mobile-header__nav,
	.header__container--menuToggle {
		display: none;
	}
	.desktop-header__nav,
	.header__container--cta {
		display: flex;
	}

	.mobile-header__nav--list {
		flex-direction: row;
	}
}
</style>
