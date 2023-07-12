<script>
export default {
	props: {
		text: String,
        classes: String,
        url: String,
	},
};
</script>

<template>
	<a :href="url" :class="classes">{{ text }}</a>
</template>