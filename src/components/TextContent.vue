<script>
export default {
	props: {
		heading: String,
		paragraph: String,
		containerClass: String,
		headingClass: String,
		paragraphClass: String,
	},
};
</script>

<template>
	<div class="mb-8 space-y-3 text-center" :class="containerClass">
		<h2 :class="headingClass">{{ heading }}</h2>
		<p :class="paragraphClass">
			{{ paragraph }}
		</p>
	</div>
</template>
