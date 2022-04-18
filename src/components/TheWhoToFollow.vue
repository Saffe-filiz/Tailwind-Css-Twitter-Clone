<template>
	<div class="xl:w-[21.875rem] lg:w-[18.125rem] h-[19.625rem] rightSideMainStyle">
		<div class="rightSiteCartHeadarStyle">
			<h3>Who to follow</h3>
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