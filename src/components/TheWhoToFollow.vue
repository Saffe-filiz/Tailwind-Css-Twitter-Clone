<template>
	<div class="xl:w-[21.875rem] lg:w-[18.125rem] h-auto rightSideMainStyle">
		<div class="h-[1.375rem] pl-3.5 py-[0.688rem] box-content">
			<span class="text-lg text-[#0f1419] font-bold">Who to follow</span>
		</div>
		<UserCarts/>
		<UserCarts/>
		<UserCarts/>
		<div class="h-5 p-4 box-content text-[#1D9BF0]">
			<a href="">Show more</a>
		</div>
	</div>
</template>

<script setup>
	import UserCarts from './UserCarts.vue'
</script>