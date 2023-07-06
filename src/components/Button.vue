<script>
export default {
	props: {
		text: String,
		classes: String,
	},
};
</script>

<template>
	<button :class="classes">{{ text }}</button>
</template>
