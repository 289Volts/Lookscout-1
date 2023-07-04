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
				},
				{
					name: "Our Products",
					path: "/products",
				},
				{
					name: "Resources",
					path: "/resources",
				},
				{
					name: "Contacts",
					path: "/contacts",
				},
			],
		};
	},
	methods: {
		toggleNav() {
			this.navOpen = !this.navOpen;
		},
	},
};
</script>
<template>
	<header class="">
		<div class="header__container">
			<img src="/assets/images/headerLogo.svg" alt="" class="" />
			<button class="header__container--menuToggle" @click="toggleNav">
				<img src="/assets/icons/menu.svg" alt="" class="" />
			</button>
			<nav class="header__nav" :class="{ slide: navOpen }">
				<div class="header__nav--header">
					<img src="/assets/images/headerLogo.svg" alt="" class="" />
					<button class="header__container--menuToggle" @click="toggleNav">
						<img src="/assets/icons/close.svg" alt="" class="" />
					</button>
				</div>
				<ul class="">
					<li v-for="link in links" :key="link.name" class="">
						<router-link :to="link.path" class="">
							{{ link.name }}
						</router-link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>
<style scoped>
header {
	position: sticky;
	/* z-index: 1; */
}
.header__container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	width: 100%;
	/* max-width: 80%; */
	margin: 0 auto;
}

.header__container--menuToggle {
	display: flex;
	justify-content: center;
	align-items: center;
	background: transparent;
	border: none;
	cursor: pointer;
}
.header__container--menuToggle:focus {
	outline: 1px solid rgba(0, 0, 0, 0.571);
}

.header__nav {
	display: flex;
	flex-direction: column;
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100dvh;
	background: var(--navBg1);
	z-index: 1;
	padding: 1rem;
	transition: 0.5s ease-in-out;
	transform: translateX(-100%);
}

.header__nav.slide {
	transform: translateX(0);
}

.header__nav--header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2rem;
}

.header__nav ul {
	list-style: none;
}

.header__nav li {
	margin: 1rem 0;
}
</style>
