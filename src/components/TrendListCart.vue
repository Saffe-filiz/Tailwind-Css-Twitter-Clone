<template>
	<article class="xl:w-[21.875rem] lg:w-[18.125rem] bg-white px-4 py-3 bg-[#f7f9f9] hoverEfect">
		<div class="w-80 h-4 inline-flex justify-between">
			<div>
				<span class="text-[#536471] text-[13px] font-normal">Trending in Turkey</span>
			</div>
			<!-- MORE ICON START -->
			<div class="relative flexCenter">
				<More/>	
			</div>
			<!-- MORE ICON END -->
		</div>
		<div class="w-full h-5 flex items-center">
			<span class="text-sm text-[#0f1419] font-bold truncate">#SQUID</span>
		</div>
		<div class="w-full h-4">
			<span class="text-[#536471] text-[13px] font-normal">2,066 Tweets</span>
		</div>
	</article>
</template>


<script setup>
	import More from './icons/More.vue'
</script>
