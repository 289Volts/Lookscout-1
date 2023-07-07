<script>
export default {
	props: {
		text: String,
		classes: String,
		onClick: Function,
	},
};
</script>

<template>
	<button :@click="onClick" :class="classes">{{ text }}</button>
</template>
