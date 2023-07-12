<script>
export default {
	props: {
		text: String,
		classes: String,
		onClick: Function,
		icon: String,
		showArr: Boolean,
	},
};
</script>

<template>
	<button :@click="onClick" :class="classes">
	<span>{{ text }}</span>
	<img v-show="showArr" :src="icon" alt="right arrow">
	</button>
</template>
