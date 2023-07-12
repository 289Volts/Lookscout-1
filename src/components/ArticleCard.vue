<script>
export default {
	props: {
		banner: String,
		avatar: String,
		heading: String,
		paragraph: String,
	},
};
</script>

<template>
	<article class="rounded-[ 0.625rem] border border-neutral600 bg-white shadow-shadowXSM">
		<div class="">
			<img :src="bannerImg" alt="banner image" class="" />
			<img :src="avatar" alt="profile picture" class="shadow-MD rounded-[3.125rem]" />
		</div>
		<div class="space-y-5 px-8 py-5">
			<div class="flex items-center gap-4 text-[0.875rem] font-medium">
				<span class="bg-primary-25 px-3 py-1 text-primary-600">Article</span>
				<span class="">25 Apr. 2022</span>
			</div>
			<div class="space-y-4">
				<h3 class="text-[1.25rem] font-semibold">{{ heading }}</h3>
				<p class="">{{ paragraph }}</p>
			</div>
			<a href="" class="flex items-center gap-[0.375rem]"
				><span class="text-[0.9375rem] font-semibold text-primary-600">Learn more</span
				><img src="/assets/icons/blueArr.svg" alt="" class="" />
			</a>
		</div>
	</article>
</template>
